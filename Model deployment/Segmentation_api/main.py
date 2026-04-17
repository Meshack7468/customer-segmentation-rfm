"""
Frontend ↔ Backend communication layer
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.customer_service import CustomerService
import pandas as pd
import os

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

 #  Use absolute path instead of relative path 
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data", "rfm_customer_segments.csv")


# Initialize service
service = CustomerService(DATA_PATH)


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
# dynamic port support 
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))  
    uvicorn.run("main:app", host="0.0.0.0", port=port)