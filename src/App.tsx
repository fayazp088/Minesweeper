import React, { FC } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>Hello</Header>
    </div>
  );
}

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const Header: FC<BaseLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default App;
