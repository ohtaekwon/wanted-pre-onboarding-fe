// LIBRARY
import React, { useState, forwardRef } from 'react';
import { Navigate } from 'react-router-dom';
// COMPOENTNS
import Background from './Background';
import LoginFormInput from './LoginFormInput';
import Logo from './Logo';
// CSS
import './LoginForm.css';

// import MainPage from '../pages/MainPage';

//유효성 검사 통과하면 true , 실패 시 false
const initialErrorData = {
  id: '',
  pw: '',
};

// ref
const initialRefData = {
  refId: '',
  refPw: '',
};

export default function LoginForm(props) {
  const [errorState, setErrorState] = useState(initialErrorData);
  const [refState, setRefState] = useState(initialRefData);
  // local에 저장된 데이터 가져오기
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
        <Navigate to="/home" />
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
