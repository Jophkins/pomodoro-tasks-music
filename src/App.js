import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";
import React, {createContext, useEffect, useState} from "react";
import PomodoroTimer from "./components/PomodoroTimer";
import MusicPlayer from "./components/MusicPlayer";
import Nav from "./components/Nav";
import locale from "./utils/locale";
import DonationModal from "./components/DonationModal";

export const Context = createContext(null);

function App() {
  const version = '0.4';
  const [todos, setTodos] = useState([]);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (!localStorage.todo) {
      localStorage.todo = JSON.stringify([]);
    }
    if (!localStorage.locale) {
      localStorage.locale = JSON.stringify('en');
    }
    setTodos(JSON.parse(localStorage.todo));
    setLanguage(JSON.parse(localStorage.locale));
  }, [])

  return (
    <Context.Provider value={{
      todo: todos,
      locale: language
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
            <Nav setLanguage={setLanguage}/>
            <div className="ongoing">
              {`${locale[language].devOngoing} ver${version}`}
              <button onClick={() => document.querySelector('.ongoing').style.display = 'none'}>X</button>
            </div>
            <div className="app-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <PomodoroTimer/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <Todo setTodos={setTodos}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <MusicPlayer/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className='donation'>
          <li>
            <DonationModal title={locale[language].nav.donate.title} thanks={locale[language].nav.donate.thanks}
                           close={locale[language].nav.donate.close}/>
          </li>
        </ul>
      </div>
    </Context.Provider>
  );
}

export default App;
