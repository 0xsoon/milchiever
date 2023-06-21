from pydantic import BaseModel
from datetime import date

from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/user/login")

class signup(BaseModel):
    name : str
    username : str
    password : str
    armyType : str
    serialNumber : str
    enlistDay : date
    dischargeDay : date
    interesting : str
    education : str
    certification : str
    desiredJob : str

class update(BaseModel):
    name : str
    password : str
    dischargeDay : date
    interesting : str
    education : str
    certification : str
    desiredJob : str
        
    
class Token(BaseModel):
    access_token: str