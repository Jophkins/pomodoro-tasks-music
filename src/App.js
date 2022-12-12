import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";
import {createContext, useEffect, useState} from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import MusicPlayer from "./components/MusicPlayer";
import Nav from "./components/Nav";

export const Context = createContext(null);

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!localStorage.todo) {
      localStorage.todo = JSON.stringify([]);
    }
    setTodos(JSON.parse(localStorage.todo));
  }, [])

  return (
    <Context.Provider value={{
      todo: todos
    }}>
      <div className="app">
        <div className="app-inner">
          <div className="bg-container">
            <div className="bg-wrapper">
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
            <div className="snowing"></div>
          </div>
          </div>
          <div className="container">
            <Nav />
            <div className="app-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <PomodoroTimer/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <Todo setTodos={setTodos}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <MusicPlayer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
