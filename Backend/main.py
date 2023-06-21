#기본 설정 관련 임포트
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import timedelta, datetime

#라우터 관련 임포트
import domain.user.router as userComponent
import domain.schedule.router as scheduleComponent

#로그인 및 토큰 관련 임포트
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt
from passlib.context import CryptContext

app = FastAPI()


# 기본 설정
app.add_middleware(
    CORSMiddleware,  #CORS 모두 허용
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Router 관련 설정
app.include_router(userComponent.router)
app.include_router(scheduleComponent.router)

# 로그인 및 토큰 관련 설정

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24
SECRET_KEY = "4ab2fce7a6bd79e1c014396315ed322dd6edb1c5d975c6b74a2904135172c03c"
ALGORITHM = "HS256"

def decodeToken(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print(decoded_token)
        return decoded_token
    except Exception as e:
        return {}

def encodeToken(name : str):
    
	return jwt.encode(
        {
            "sub": name,
            "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        }, SECRET_KEY, algorithm=ALGORITHM)

encodePassword = CryptContext(schemes=["bcrypt"], deprecated="auto")