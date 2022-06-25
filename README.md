# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

# :: 과제 안내

---

[[기록 일지]바로가기](https://blog.naver.com/ohtk92)

## Assignment 1 - `Login`

- 구현한 기능 : 로그인 / 로그인시에 Main Page로 이동
- 사용한 Hook : uesRef / useState / createContext / useEffect
  - 랜더링 최적화를 위해서, input의 current value 값을 바로 locaStorage에 저장
  - 저장이 되면, 다음 페이지로 이동
  - 전역의 id 속성을 사용하기 위해 createContext사용

## Assignment 2 - `GNB`

- 구현한 기능 : 상단에 고정된 Headr 기능 (logo, nav, logout 버튼), 컴포넌트화
- 사용한 라이브러리 : React Router - link

## Assignment 3 - `Validation`

- 구현한 기능 : 유효성 검사(아이디, 비밀번호) / 유효성 검사 실패시, 특수 효과 생성(빨간색 박스 테두리), 로그인 버튼 비활성화
- 사용한 Hook : useState / useEffect

## Assignment 4 - `Routing`

## Assignment 5 - `Feeds`

- 구현한 기능 : mock.json 파일에서 비동기로 로컬 서버와 통신하여 데이터를 불러온다.
- 각 Feed마다 댓글 기능을 구현한다.
