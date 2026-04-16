"""
Frontend ↔ Backend communication layer
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.customer_service import CustomerService
import pandas as pd

app = FastAPI(
    title="Customer Intelligence API",
    description="API for retrieving RFM customer segmentation insights",
    version="2.0"
)

# Enable CORS (required for frontend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Initialize service
service = CustomerService("data/rfm_customer_segments.csv")


@app.get("/")
def home():
    return {"message": "Customer Intelligence API is running"}


@app.get("/customer/{customer_id}")
def get_customer(customer_id: int):

    # Fetch customer
    row = service.get_customer_by_id(customer_id)

    # Handle missing customer
    if row is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    
    # Extract VIP safely
    vip_subsegment = row["VIP_Subsegment"] if pd.notna(row["VIP_Subsegment"]) else None

    return {
        "customer_id": int(row["CustomerID"]),
        "segment": row["Segment"],
        "vip_subsegment": vip_subsegment,
        "rfm": service.format_rfm(row)
    }