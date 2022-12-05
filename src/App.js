import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <div className="app-inner">
        <div className="container">
          <div className="app-wrapper">
            <div className="row">
              <div className="col-12 col-md-4">
                <Todo />
              </div>
              <div className="col-12 col-md-4">Lorem ipsum dolor sit amet.</div>
              <div className="col-12 col-md-4">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
