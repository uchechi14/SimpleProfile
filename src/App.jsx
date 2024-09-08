import styled from '@emotion/styled'
import Profile from './components/Profile';
import Detail from './components/Detail';

const App = () => {
    return(
      <>
        <Container>
          <Profile/>
          <Detail />
        </Container>
      </>
    )
};
export default App;

const Container = styled.div`
background-color: #E3E8F3;
width: 100%;
display: flex;
justify-content: center;
gap: 20px;

@media (max-width: 768px) {
  width: 100%;
        flex-direction: column;
        align-items: center;
      }
`


