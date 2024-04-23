import styled from 'styled-components';
import { MainCanvas } from './components/MainCanvas';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <MainCanvas />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
