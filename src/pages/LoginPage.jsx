import React, { useContext } from 'react';
import Background from '../components/Background';
import LoginForm from '../components/LoginForm';
import Sections from '../components/Sections';

export default function LoginPage(props) {
  const className = 'sections-wrapper';

  return (
    <Sections className={className}>
      {/* <Background /> */}
      <LoginForm />
    </Sections>
  );
}
