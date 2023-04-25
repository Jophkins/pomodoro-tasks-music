import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import AppRouter from "./AppRouter";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader />
      <div>
        <AppRouter />
      </div>
    </>
  )
}

export default App;
