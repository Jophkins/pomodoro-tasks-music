import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";
import {createContext, useEffect, useState} from "react";
  import PomodoroTimer from "./components/PomodoroTimer";

export const Context = createContext(null);

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.todo.length === 0) {
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
          <div className="container">
            <div className="app-wrapper">
              <div className="row">
                <div className="col-12 col-md-4">
                  <Todo setTodos={setTodos}/>
                </div>
                <div className="col-12 col-md-4">
                  <PomodoroTimer />
                </div>
                <div className="col-12 col-md-4">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
