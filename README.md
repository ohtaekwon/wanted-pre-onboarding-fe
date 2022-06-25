# :: 원티드 프리온보딩 프론트엔드 코스 사전과제

# :: 과제 안내

---

[[기록 일지]바로가기](https://blog.naver.com/ohtk92)

## Assignment 1 - `Login`

- 1.1. 구현한 기능 :
  - 1. 로그인기능
  - 2. 로그인시에 Main Page로 이동
  - 3. 로그인 정보 localStorage에 저장
- 1.2. 사용한 Hook :
  - 1. uesRef / useState / createContext / useEffect
  - 랜더링 최적화를 위해서, input의 current value 값을 바로 locaStorage에 저장
  - 저장이 되면, 다음 페이지로 이동
  - 전역의 id 속성을 사용하기 위해 createContext사용
- 1.3. 구현한 코드 특징
  - 컴포넌트화에 집중을 하였다. = `<Form/>` 컴포넌트안에 `<input/>` 컴포넌트들을 재사용할 수 있도록 컴포넌트화 하였다.
  - 컴포넌트의 깊이가 깊어서, state 리프팅 방법을 적용하는 대신에, 전역 데이터를 활용하는 방법을 고안함.

### 1-1. App.js

```js
// 초기 formState 데이터
const initialFormData = {
  id: '',
  pw: '',
};
// React cotenxt로 전역데이터 관리
export const FormContext = createContext({
  formState: initialFormData,
  setFormData: () => {},
});

function App() {
  // 전역 State
  const [formState, setFormState] = useState(initialFormData);

  // 전역 State에 local값 저장
  useEffect(() => {
    if (window.localStorage.length !== 0) {
      setFormState({
        id: localStorage.getItem('id'),
        pw: localStorage.getItem('pw'),
      });
    }
  }, []);

  return (
    // 전역 데이터로 감싸주고, value로 state props을 내려준다.
    <FormContext.Provider value={{ formState, setFormState }}>
      <LoginPage />
    </FormContext.Provider>
  );
}

export default App;
```

### 1-2. LoginForm.jsx

```jsx
const initialErrorData = {
  id: '',
  pw: '',
};

const initialRefData = {
  refId: '',
  refPw: '',
};

export default function LoginForm(props) {
  const [errorState, setErrorState] = useState(initialErrorData);
  const [refState, setRefState] = useState(initialRefData);

  const getId = localStorage.getItem('id');
  const getPw = localStorage.getItem('pw');

  const handleSubmit = () => {
    console.log(errorState);
    if (errorState.id === true && errorState.pw === true) {
      console.log('true');
      localStorage.setItem('id', refState.refId);
      localStorage.setItem('pw', refState.refPw);
      alert('로그인 되었습니다.');
    }
  };

  return (
    <>
      {getId && getPw ? (
        <MainPage />
      ) : (
        <>
          <Background />
          <form id="form" className="login-form" onSubmit={handleSubmit}>
            <Logo />
            <LoginFormInput
              id={'id'}
              errorState={errorState}
              setErrorState={setErrorState}
              refState={refState}
              setRefState={setRefState}
              inputProps={{
                type: 'text',
                placeholder: '전화번호, 사용자의 이름 또는 이메일',
              }}
            />
            <LoginFormInput
              id={'pw'}
              errorState={errorState}
              setErrorState={setErrorState}
              refState={refState}
              setRefState={setRefState}
              inputProps={{
                type: 'password',
                placeholder: '비밀번호',
              }}
            />
            {errorState.id === true && errorState.pw === true ? (
              <button id="button" type="submit" className="login-btn">
                로그인
              </button>
            ) : (
              <button id="button" type="submit" className="login-btn" disabled>
                로그인
              </button>
            )}
          </form>
        </>
      )}
    </>
  );
}
```

### 1-3.FormInput.jsx

```jsx
import './LoginFormInput.css';
const ID_REGX = new RegExp(
  '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
); // 5~20자. 영문 소문자, 숫자. 특수기호(_),(-)만 사용 가능
const PW_REGX = new RegExp('^[A-Z0-9][$`~!@$!%*#^?&\\(\\)-_=+]{8,}$'); // 대문자, 숫자, 특수문자, 8자이상

const ERROR_STATION = {
  required: 'border-error',
  invalidId: 'border-error',
  invalidPw: 'border-error',
};
export default function LoginFormInput({
  id,
  inputProps,
  errorState,
  setErrorState,
  refState,
  setRefState,
}) {
  const inputRef = useRef();
  const { formState, setFormState } = useContext(FormContext);

  const checkValidation = () => {
    let result;
    const value = formState[id];
    if (value.length === 0) {
      // console.log('required');
      result = 'required';
    } else {
      switch (id) {
        case 'id':
          result = ID_REGX.test(value) ? true : 'invalidId';
          break;
        case 'pw':
          result = PW_REGX.test(value) ? true : 'invalidPw';
          break;
        default:
          return;
      }
    }
    // react에서는 setState를 비동기적으로 실행한다.
    setErrorState((prev) => ({ ...prev, [id]: result }));

    if (id === 'id') {
      setRefState((prev) => ({
        ...prev,
        refId: inputRef.current.value,
        // refPw: ref.current.value,
      }));
    } else if (id === 'pw') {
      setRefState((prev) => ({
        ...prev,
        // refId: ref.current.value,
        refPw: inputRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (id === 'id') {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="input-sections">
        <input
          id={id}
          ref={inputRef}
          className={ERROR_STATION[errorState[id]]}
          value={formState[id]}
          onChange={(e) => setFormState({ ...formState, [id]: e.target.value })}
          onBlur={checkValidation}
          {...inputProps}
        />
      </div>
    </>
  );
}
```

## Assignment 2 - `GNB`

- 2.1. 구현한 기능 :
  - 1. 로그인 후 maninpage 이동
  - 2. 상단에 고정된 Headr 기능 (logo, nav, logout 버튼), 컴포넌트화
  - 3. Header에 `position : sticky` 적용
  - 4. 모바일의 경우 검색창 제거
- 2.2. 사용한 라이브러리
  - React Router - link = 단순 로고에 `'/'` link기능
- 2.3. 구현한 코드 특징

  - 컴포넌트화에 집중을 하였다. = 컴포넌트 재사용을 위한,

  - 컴포넌트의 깊이가 깊어서, state 리프팅 방법을 적용하는 대신에, 전역 데이터를 활용하는 방법을 고안함.

## Assignment 3 - `Validation`

- 구현한 기능 : 유효성 검사(아이디, 비밀번호) / 유효성 검사 실패시, 특수 효과 생성(빨간색 박스 테두리), 로그인 버튼 비활성화
- 사용한 Hook : useState / useEffect

## Assignment 4 - `Routing`

## Assignment 5 - `Feeds`

- 구현한 기능 : mock.json 파일에서 비동기로 로컬 서버와 통신하여 데이터를 불러온다.
- 각 Feed마다 댓글 기능을 구현한다.
