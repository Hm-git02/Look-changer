import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), "../data/hairstyles.json")

def load_hairstyles():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def get_recommendations(gender: str, shape: str) -> list:
    data = load_hairstyles()
    # Normalize inputs
    g = gender.lower()
    s = shape.lower()
    
    if g in data and s in data[g]:
        return data[g][s]
    
    # Fallback to an empty array or default if combination missing
    return []
