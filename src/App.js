// LIBRARY
import React, { useState, createContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// PAGES
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
// CSS
import './App.css';

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
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </FormContext.Provider>
  );
}

export default App;
