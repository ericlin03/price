import logo from '../logo.svg';
// import '../css/App.css';
import redirectPage from './redirect'

const user = {
  firstname: 'Eric',
  lastname: 'Lin'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello, {user.firstname} {user.lastname} !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {redirectPage()}
      </header>
    </div>
  );
}

// function redirectPage() {
//   return (
//       <p>
//       test url: <a href="http://localhost:3000/test">redirect</a>
//       </p>
//   );
// }

// function name(user) {

// }

export default App;
