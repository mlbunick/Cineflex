import Home from './pages/Home'
import TopBar from './components/home/TopBar';
import styled from 'styled-components';
import './App.css'

function App() {
  return (
    <AppContainer>
      <TopBar/>
      <Home/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App
