# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

# :: 과제 결과

---

<h1>과제 결과물 </h2>
<table>
  <tbody>
    <tr>
      <td>
        <a href="">
          <img align="center" src="https://raw.githubusercontent.com/ohtaekwon/OHTK-Portfolio/master/images/instar_main_1.png" width="550" alt-text="로그인 페이지" >
        </a>
      </td>
      <td>
        <a href="">
          <img align="center" src="https://raw.githubusercontent.com/ohtaekwon/OHTK-Portfolio/master/images/instar_main_2.png" width="550" alt-text="메인페이지">
        </a>
      </td>
    </tr>
  </tbody>
</table>
- [DEMO 보러가기](https://react-instargram.netlify.app)
- [[기록 일지]바로가기](https://blog.naver.com/ohtk92)

## Assignment 1 - `Login`

- 1.1. 구현한 기능
  1. 로그인기능
  2. 로그인시에 Main Page로 이동
  3. 로그인 정보 localStorage에 저장
- 1.2. 사용한 Hook
  1. uesRef / useState / createContext / useEffect
  2. 랜더링 최적화를 위해서, input의 current value 값을 바로 locaStorage에 저장
  3. 저장이 되면, 다음 페이지로 이동
  4. 전역의 id 속성을 사용하기 위해 createContext사용
- 1.3. 구현한 코드 특징
  1. 컴포넌트화에 집중을 하였다. = `<Form/>` 컴포넌트안에 `<input/>` 컴포넌트들을 재사용할 수 있도록 컴포넌트화 하였다.
  2. 컴포넌트의 깊이가 깊어서, state 리프팅 방법을 적용하는 대신에, 전역 데이터를 활용하는 방법을 고안함.
- 1.4. 주요 컴포넌트
  1. `App.js` : context 및 라우터 구성
  2. `<LoginPage/>` : Loginform등 하위 컴포넌트로 구성
  3. `<LoginForm/>` : localStaroge로 저장

## Assignment 2 - `GNB`

- 2.1. 구현한 기능
  1. 로그인 후 maninpage 이동
  2. 상단에 고정된 Heder 기능 (logo, nav, logout 버튼), 컴포넌트화
  3. Header에 `position : sticky` 적용
  4. 모바일의 경우 검색창 제거
- 2.2. 주요 컴포넌트
  1. `<Header/>`
  2. `<Gnb/>`

## Assignment 3 - `Validation`

- 3.1 구현한 기능 :
  1. 아이디, 비밀번호 유효성 검사
  2. 유효성 검사 실패시, 특수 효과 생성
  - 빨간색 박스 테두리
  - 로그인 버튼 비활성화
- 3.2 사용한 라이브러리 & Hook
  1. useState, useEffect
- 3.3. 주요 컴포넌트
  1. `<LoginForm/>`: 정규성 검사
  2. `<LoginFormInput/>` : 정규성 검사

## Assignment 4 - `Routing`

- 4.1 구현한 기능 :
  1. `로그아웃` 버튼을 누르면, 로그인 페이지로 이동
  2. localStorage에서 사용자 데이터 삭제
  3. `로그인` 하면, 다시 메인페이지로 이동
- 4.2. 사용한 라이브러리 & Hook
  1. Routes, Route, Navgate, useNavigate
- 4.3. 주요 컴포넌트 :
  1. `App.js` : 라우터
  2. `<subMenu/>` : 로그아웃 버튼 클릭 후 로그인 페이지 이동
  3. `<LoginForm/>` : 로그인 성공시 메인페이지 이동

## Assignment 5 - `Feeds`

- 5.1. 구현한 기능 :
  1.  mock.json 파일에서 비동기로 로컬 서버와 통신하여 데이터를 불러온다.
  2.  각 Feed마다 댓글 기능을 구현한다.
  3.  로딩추가
- 5.2. 사용한 훅
  - useEffect, useState, useRef,
- 5.4. 주요 컴포넌트 :
  1. `<Feed/>`: 비동기로 Api.js로 mock.json 파일 불러오기
  2. `<FeedList/>` : 불러온 Promise를 활용하여 랜더링
  3. `Api.js`
