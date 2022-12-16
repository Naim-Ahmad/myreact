// import Clock from './components/Clock/Clock';

// const commentObj = {
// import ClickCounter from './components/HOC/ClickCounter';

import React from 'react';
// import ClickCounter from './components/render props/ClickCounter';
// import Counter from './components/render props/Counter';
// import HoverCounter from './components/render props/HoverCounter';
// import User from './components/render props/User';
// import HoverCounter from './components/HOC/HoverCounter';
// import SignupDialog from './components/composition/SingupDialog';
import CounterContext from './components/Context API/CounterContext';
import Service from './components/Context API/Service';

class App extends React.Component {
  state = {count: 0}

  hoverHandler = ()=>{
    this.setState((prev)=>({count: prev.count + 1}))
  }

  render(){
  return (
    <div>
      {/* <Welcome name="Nayeem" /> */}
      {/* <Comment name={name} comment={comment} date={date} url={url} /> */}
      {/* <Clock /> */}
      {/* <Clock2 />  */}
      {/* <Counter counter={0} increment={1} /> */}
      {/* <Toggle /> */}
      {/* <MailBox messages={libraries} /> */}
      {/* <LoginControl /> */}
      {/* <Warning /> */}
      {/* <Form /> */}
      {/* <Calculator/> */}
    {/* <Counter /> */}
    {/* <WelcomeDialog />
    <Split/> */}
    {/* <Text />
    <Text1 /> */}
    {/* <Emoji /> */}

    {/* <SignupDialog /> */}

    {/* <ClickCounter /> */}

    {/* <HoverCounter /> */}
    {/* <ClickCounter />
    <HoverCounter /> */}
    {/* <User /> */}

    {/* <Counter render={(count, clickHandler)=> <ClickCounter count={count} clickHandler={clickHandler}/>} />
    <Counter render={(count, hoverHandler)=> <HoverCounter count={count} hoverHandler={hoverHandler}/>}/> */}
    <CounterContext.Provider value={{count: this.state.count, hoverHandler: this.hoverHandler}}><Service/></CounterContext.Provider>

    </div>

  );
  }
}

export default App;
