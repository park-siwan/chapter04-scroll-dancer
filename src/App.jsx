import styled from 'styled-components';
import { MainCanvas } from './components/MainCanvas';
import { RecoilRoot } from 'recoil';
import { FixedDOM } from './components/dom/FixedDOM';

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <MainCanvas />
        <FixedDOM />
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
