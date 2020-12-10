import { BrowserRouter, Route } from 'react-router-dom'

import GlobalStyled, { AllWrapper } from './GlobalStyles'

import { Main } from "./components/index";

function App() {
  return (
    <AllWrapper>
      <BrowserRouter>
        <GlobalStyled />
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    </AllWrapper>
  );
}

export default App;
