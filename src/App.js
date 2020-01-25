import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import NameContext from './components/NameContext';

function App() {
  const [ name, setName ] = useState("");

  return (
    <div className="App">
      <NameContext.Provider value={{name, setName}}>
        <Wrapper>
          <Navbar></Navbar>
          <FormWrapper></FormWrapper>
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;