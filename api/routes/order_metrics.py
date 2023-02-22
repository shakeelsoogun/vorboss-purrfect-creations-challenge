from datetime import date
from math import floor

from flask import jsonify

from ..airtable_api import get_data
from ..api import app


@app.get("/order/metric")
def get_metrics():
    # Total orders
    # Total orders this month
    # Number of orders in progress
    # Revenue
    all_data = get_data(fields=["order_status", "price", "order_placed"])

    total_orders = extract_total_orders(all_data)
    total_orders_this_month = extract_orders_this_month(all_data)
    orders_in_progress = extract_orders_in_progress(all_data)
    revenue = extract_revenue(all_data)

    return jsonify(
        total_orders=total_orders,
        total_orders_this_month=total_orders_this_month,
        orders_in_progress=orders_in_progress,
        revenue=revenue,
    )


def extract_total_orders(data: list[dict]) -> int:
    return len(data)


def extract_orders_this_month(data: list[dict]) -> int:
    today = date.today()
    orders_this_month = [x for x in data if is_in_month(x["order_placed"], today)]
    return len(orders_this_month)


def extract_orders_in_progress(data: list[dict]) -> int:
    in_progress_orders = [x for x in data if x["order_status"] == "in_progress"]
    return len(in_progress_orders)


def extract_revenue(data: list[dict]) -> float:
    sum_of_price = sum(x["price"] for x in data)
    return floor(sum_of_price * 100) / 100


def is_in_month(date_str: str, current_date: date) -> bool:
    parsed_date = date.fromisoformat(date_str)
    return (
        parsed_date.year == current_date.year
        and parsed_date.month == current_date.month
    )