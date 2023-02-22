from flask import abort, jsonify, make_response, request

from api import app
from airtable_api import get_data


@app.get("/order")
def get_orders():
    # List of most recent few orders
    max_page_size = 100
    request_limit = get_int_arg("limit", 20)

    if request_limit > max_page_size:
        abort_json(f"Please provide a `limit` <= {max_page_size}")

    sort_order = request.args.get("sort")
    if sort_order is not None and sort_order != "":
        if sort_order not in ["asc", "desc"]:
            abort_json(f"Please provide a `sort` value of `asc` or `desc")
    else:
        sort_order = None

    data = get_data(request_limit, sort=sort_order)
    data = [{**x, "full_name": f"{x['first_name']} {x['last_name']}"} for x in data]

    return jsonify(data)


def get_int_arg(arg_name: str, default_value: int) -> int:
    request_arg = request.args.get(arg_name)
    if request_arg is None:
        return default_value

    arg_value = default_value
    try:
        arg_value = int(request_arg)
    except ValueError:
        abort_json(f"Please provide an integer `{arg_name}` arg")

    return arg_value


def abort_json(message: str, status_code: int = 400):
    abort(make_response(jsonify(error=message), status_code))
