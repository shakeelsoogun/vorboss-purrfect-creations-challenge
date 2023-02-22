import os
from pyairtable import Table
from typing import Literal

api_key = os.environ["AIRTABLE_API_KEY"]
base_id = os.environ["AIRTABLE_BASE_ID"]
table_name = os.environ["AIRTABLE_TABLE_NAME"]

table = Table(api_key, base_id, table_name)


def get_data(
    limit: int = None,
    sort: Literal["asc", "desc", None] = None,
    filter_uncancelled: bool = True,
    fields: list[str] = None,
) -> list[dict]:
    all_kwargs = {}

    if limit is not None:
        all_kwargs["max_records"] = limit

    if sort is not None:
        order_placed_field = "order_placed"
        if sort == "desc":
            order_placed_field = f"-{order_placed_field}"
        all_kwargs["sort"] = [order_placed_field]

    if filter_uncancelled:
        all_kwargs["formula"] = ['NOT({order_status} = "cancelled")']

    if fields is not None:
        all_kwargs["fields"] = fields

    return extract_data(table.all(**all_kwargs))


def extract_data(data: list[dict]):
    return [x["fields"] for x in data]


# Debug
if __name__ == "__main__":
    import json

    with open("latest.json", "w") as f:
        json.dump(get_data(None, sort="desc"), f)
