// LIBRARY
import React from 'react';
// COMPONENTS
import Header from '../components/Header';
import Feeds from '../components/Feeds';
import Sections from '../components/Sections';
import Container from '../components/Container';

export default function MainPage() {
  const className = 'sections-Nav';

  return (
    <>
      <Sections className={className}>
        <Header />
      </Sections>
      <Sections>
        <Container>
          <Feeds />
        </Container>
      </Sections>
    </>
  );
}
