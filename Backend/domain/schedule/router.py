from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
import domain.schedule.schema as scheduleSchema
from models import Goal, User
from database import getDB
from sqlalchemy.orm import Session
import main


from fastapi.security import OAuth2PasswordBearer

# 이 스키마를 통해 클라이언트에서 요청할 때 보낸 토큰에 접근할 수 있다.
oauth2Scheme = OAuth2PasswordBearer(tokenUrl="/user/signin")

router = APIRouter(
    prefix="/goal",
)


@router.post("")
def create_goal(inputData: scheduleSchema.Goal,
               db: Session = Depends(getDB),
               token: str = Depends(oauth2Scheme)):
    goal = Goal(startDay = inputData.startDay,
                endDay = inputData.endDay,
                content = inputData.content,
                creatorId = inputData.creatorId)
    db.add(goal)
    db.commit()

@router.get("")
def get_goal(db: Session = Depends(getDB), token: str = Depends(oauth2Scheme)):
    decodedToken = main.decodeToken(token)
    return db.query(User).filter(User.username == decodedToken['sub']).first().goals

@router.delete("")
def delete_goal(db: Session = Depends(getDB), token: str = Depends(oauth2Scheme)):
    pass