import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  updateField = (event) => {
    console.log(event.target.name)
    console.log(this.state)
    let name = event.target.name
    this.setState({[name]: event.target.value})
  }

  login = (event) => {
    event.preventDefault();
    console.log('HI')
    if (!!this.state.username && !!this.state.password){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateField}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updateField}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
