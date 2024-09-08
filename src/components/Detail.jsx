import styled from "@emotion/styled" 
import UserEnvironment from "./TinyComponents/UserEnvironment";
import Psychographies from "./TinyComponents/Psychographies";
import UserGoals from "./TinyComponents/UserGoals";
import Scenario from "./TinyComponents/Scenario";
import LastComponent from "./TinyComponents/LastComponent";

const Detail = () =>{
    return(
        <BigContainer>
        <Container>
        <Wrapper>
        <UserEnvironment />
         </Wrapper>
         <Wrapper>
         <Psychographies />
         </Wrapper>
        </Container>
        <Container>
            <Wrapper>
            <UserGoals />
            </Wrapper>
            <Wrapper>
            <Scenario />
            </Wrapper>
            <Wrapper>
                <LastComponent />
            </Wrapper>
        </Container>
        </BigContainer>
    )

}


export default Detail;


const BigContainer = styled.div`
  width: 70%;
    display: flex;
    gap: 20px;

    @media (max-width: 1024px) {
        width: 50%;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`
const Container = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

   
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-family: sans-serif;
    padding: 15px 0px;

  
`
