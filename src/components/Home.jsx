import Filmes from "./Filmes"
import styled from 'styled-components';

export default function Home(){
    return(
        <HomeContainer>
            <Filmes/>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;