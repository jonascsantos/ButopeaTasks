import React from "react";
import { Header, Banners, Footer } from './components'
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Header />
      <Banners />

      <Footer />

    </div>
  );
}

export default App;
