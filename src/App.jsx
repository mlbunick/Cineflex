import Home from './pages/Home'
import TopBar from './components/TopBar';
import Sessoes from './components/Sessoes';
import styled from 'styled-components';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <AppContainer>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<Sessoes />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App
