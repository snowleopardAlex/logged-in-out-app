import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick=this.handleClick.bind(this)
  }

// event listener
handleClick() {
  this.setState(prevState => {
    return {
      isLoggedIn: !prevState.isLoggedIn
    }
  })
}


  render() {
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
      <div className="App" style={{marginTop: "50px"}}>
        <h2>Button Login/Logout</h2>
       <button onClick={this.handleClick}>{buttonText}</button>
       <h3>{displayText}</h3>
      </div>
    );
  }
}

export default App;
