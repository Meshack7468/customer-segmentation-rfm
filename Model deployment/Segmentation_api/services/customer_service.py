"""
Contains the business logic responsible for retrieving
customer information from the dataset.

Responsibilities:
- Load the segmentation dataset/csv
- Provide functions to retrieve customers by ID

"""

import pandas as pd


class CustomerService:

    def __init__(self, data_path: str):
        """
        Load the dataset into memory.
        """
        self.df = pd.read_csv(data_path)
        self.df["CustomerID"] = self.df["CustomerID"].astype(int)

    def get_customer_by_id(self, customer_id: int):
        """
        Retrieve a customer record based on CustomerID.
        """
        customer = self.df[self.df["CustomerID"] == customer_id]

        if customer.empty:
            return None

        return customer.iloc[0].to_dict()
    
    #  RFM formatter
    def format_rfm(self, row: dict):
        return {
            "recency": {
                "value": int(row["Recency"]),
                "info": f"Last purchase was {int(row['Recency'])} days ago"
            },
            "frequency": {
                "value": int(row["Frequency"]),
                "info": f"Customer has made {int(row['Frequency'])} purchases"
            },
            "monetary": {
                "value": float(row["Monetary"]),
                "info": f"Total spend is {row['Monetary']:,} units"
            }
        }