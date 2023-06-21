from pydantic import BaseModel, validator
from datetime import date

class Goal(BaseModel):
    startDay : date
    endDay : date
    content : str
    creatorId : str
