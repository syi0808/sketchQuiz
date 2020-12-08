import { BrowserRouter, Route } from 'react-router-dom'

import { Main } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  );
}

export default App;
