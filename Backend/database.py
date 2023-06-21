# sqlalchemy를 이용해 db에 접근할 때는 항상 세션을 만들어야 한다.
# 세션은 sessionmaker를 이용해 만들고


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base



SQLALCHEMY_DATABASE_URL = "sqlite:///./milchiever.db"


# connect_args는 sqlite의 경우에만 필요하다.
ENGINE = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})


Session = sessionmaker(autocommit=False, autoflush=False, bind=ENGINE)


# 테이블을 생성/조회를 관련하는 클래스의 메타클래스
Base = declarative_base()



# 의존성 함수, yield 값이  Depands()의 리턴값이 된다.
def getDB():
    db = Session();
    try:
        yield db
    finally:
        db.close()