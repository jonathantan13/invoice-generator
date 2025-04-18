from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Item(BaseModel):
    id: str
    name: str
    itemName: str
    quantity: int
    unitPrice: float

class Invoice(BaseModel):
    invoice: List[Item]
    

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

list = []

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/generate-invoice")
async def generate_invoice(invoice: Invoice):
    list.append(invoice) # This doesn't work
    return {"message": "received"}
    # TODO: redirect & send object to an invoice template 

@app.get('/invoice-list')
async def show_invoice():
    return {"lists": list}
