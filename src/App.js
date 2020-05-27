import React from "react";
import { Header, Banners } from './components'
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Header />
      <Banners />

    </div>
  );
}

export default App;
