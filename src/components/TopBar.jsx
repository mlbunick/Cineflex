import styled from 'styled-components';
import movieIcon from '../assets/icons/movie.png'

export default function TopBar() {
  return (
    <TopBarContainer>
      <LogoTipoCineflex src={movieIcon}></LogoTipoCineflex>
      <Title>Cineflex</Title>
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #EE897F;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const Title = styled.h1`
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 34px;
    line-height: 100%;
    text-align: center;
    color: #FADBC5;
`;

const LogoTipoCineflex = styled.img`
    width: 40px;
    height: 40px;
`;