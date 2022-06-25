import React, { useState, createContext, useEffect } from 'react';

import LoginPage from './pages/LoginPage';
import './App.css';
const initialFormData = {
  id: '',
  pw: '',
};
export const FormContext = createContext({
  formState: initialFormData,
  setFormData: () => {},
});

function App() {
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
    <FormContext.Provider value={{ formState, setFormState }}>
      <LoginPage />
    </FormContext.Provider>
  );
}

export default App;
