import './App.css';
function App() {

  function login(){
    alert('login')
  }

  return (
    <div className="App">
      <div className="input-container">
      <input className="input-item" placeholder="请输入用户名"/>
      <input className="input-item" placeholder="请输入密码"/>
      <button className="btn" onClick={login}>login</button>
      </div>
    </div>
  );
}

export default App;
