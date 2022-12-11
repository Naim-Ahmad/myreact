import React from 'react';
// Way 1
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isLoggedIn: false };
//     }

//     handleClick = () => {
//         this.setState((prevValue) => ({
//             isLoggedIn: !prevValue.isLoggedIn,
//         }));
//     };

//     render() {
//         const { isLoggedIn } = this.state;
//         return (
//           <div>
//             <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Login'}</h1>
//             <button onClick={this.handleClick}>{!isLoggedIn ? 'Login' : 'Logout'}</button>
//           </div>
//         );
//     }
// }

// Way 2 
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleClick = () => {
        this.setState((prevValue) => ({
            isLoggedIn: !prevValue.isLoggedIn,
        }));
    };

    render() {
        const { isLoggedIn } = this.state;
        let button;
        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleClick} />;
        } else {
            button = <LogoutButton onClick={this.handleClick} />;
        }
        
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
        );
    }
}

function Greeting(props) {
    const { isLoggedIn } = props;
    if (isLoggedIn) {
        return <Welcome />;
    }
     return <PleaseLogin />;
}

function Welcome() {
    return <h1>Welcome back!</h1>;
}

function PleaseLogin() {
    return <h1>Please Login</h1>;
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

export default LoginControl;
