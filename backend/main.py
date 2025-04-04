from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Shipment(BaseModel):
    description: str
    quantity: int
    price: float

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/generate-invoice")
async def generate_invoice(shipment: Shipment):
    return {"quantity": shipment.quantity, "description": shipment.description, "price": shipment.price}
