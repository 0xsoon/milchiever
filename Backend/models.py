from sqlalchemy import ForeignKey, Column, Integer, String, Date , Numeric
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    armyType = Column(String, nullable=False)
    serialNumber = Column(String, nullable=False)
    enlistDay = Column(Date, nullable=False)
    dischargeDay = Column(Date, nullable=False)
    interesting = Column(String, nullable=True)
    education = Column(String, nullable=True)
    certification = Column(String, nullable=True)
    desiredJob = Column(String, nullable=True)
    
    schedules = relationship("Schedule", back_populates="creator")
    goals = relationship("Goal", back_populates="creator")

class Goal(Base):
    __tablename__ = "goal"
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    startDay = Column(Date, nullable=False)
    endDay = Column(Date, nullable=False)
    content = Column(String, nullable = False)
    
    creatorId = Column(String, ForeignKey('user.username'))
    creator = relationship("User", back_populates="goals")

class SubGoal(Base):
    __tablename__ = "subgoal"
    id = Column(Integer, primary_key=True)
    mainGoalId = Column(Integer, secondary_key=True)
    title = Column(String, nullable=False)
    duration= Column(Numeric, nullable=False)
    
class Schedule(Base):
    __tablename__ = "schedule"
    id = Column(Integer, primary_key=True)
    Day = Column(Date, nullable=False)
    content = Column(String, nullable = False)
    
    creatorId = Column(String, ForeignKey('user.username'))
    creator = relationship("User", back_populates="schedules")