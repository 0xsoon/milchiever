from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

import models
from database import getDB

import domain.user.schema as userSchema

import main
from fastapi.security import OAuth2PasswordBearer

# 이 스키마를 통해 클라이언트에서 요청할 때 보낸 토큰에 접근할 수 있다.
oauth2Scheme = OAuth2PasswordBearer(tokenUrl="/user/signin")

# 토큰을 받는 부분 데코레이터를 활용해 정리
    

router = APIRouter(
    prefix="/user",
)

# Create User Data
@router.post("/signup", status_code=204)
def create_user(inputData: userSchema.signup, db: Session = Depends(getDB)):
    db_user = models.User(name = inputData.name, 
                   username = inputData.username,
                   password = main.encodePassword.hash(inputData.password),
                   armyType = inputData.armyType,
                   serialNumber = inputData.serialNumber,
                   enlistDay = inputData.enlistDay,
                   dischargeDay = inputData.dischargeDay,
                   interesting = inputData.interesting, 
                   education = inputData.education,
                   certification = inputData.certification,
                   desiredJob = inputData.desiredJob)
    db.add(db_user)
    db.commit()

# Sign in
@router.post("/signin", response_model=userSchema.Token)
def login_for_access_token(inputData: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(getDB)):
    user = db.query(models.User).filter(models.User.username == inputData.username).first()
    if not user or not main.encodePassword.verify(inputData.password, user.password):
        raise HTTPException(status_code=401, detail="Incorrect Username or Password", headers={"WWW-Authenticate": "Bearer"})
    access_token = main.encodeToken(name=user.username)
    return { "access_token": access_token }

# Change User Data
@router.put("")
def change_user_data(inputData: userSchema.update, token : str = Depends(oauth2Scheme), db: Session = Depends(getDB)):
    decodedToken = main.decodeToken(token)
    username = decodedToken['sub']
    db_user = db.query(models.User).filter(models.User.username == decodedToken['sub']).first()
    for key, value in vars(inputData).items():
        if(key == 'password'):
            value = main.encodePassword.hash(value)
        setattr(db_user, key, value) if value else None
    db.commit()
    db.refresh(db_user)
    return db_user

# Delete User
@router.delete("", status_code=204)
def delete_user(token : str = Depends(oauth2Scheme), db: Session = Depends(getDB)):
    decodedToken = main.decodeToken(token)
    username = decodedToken['sub']
    dbUser = db.query(models.User).filter(models.User.username == decodedToken['sub']).delete()
    db.commit()

# Get User Data
@router.get("")
def get_user_all_data(token: str = Depends(oauth2Scheme), db: Session = Depends(getDB)):
    decodedToken = main.decodeToken(token)
    return db.query(models.User).filter(models.User.username == decodedToken['sub']).first()

