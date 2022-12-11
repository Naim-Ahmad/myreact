import Clock from './components/Clock/Clock';
// import Comment from './components/Comment/Comment';
// import Counter from './components/Counter';
// import Toggle from './components/Toggle';
// import Welcome from './components/Welcome';

// import LoginControl from './components/Greeting/Greeting';
// import Warning from './components/Warning';
// import Form from './components/Form';

// import Calculator from './components/Temparature/Calculator';

// const commentObj = {
//   name: 'HM Nayem',
//   comment: 'This Is a comment',
//   date: new Date().toDateString(),
//   url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
// };
// const {
// name, comment, date, url, 
// } = commentObj;
// const libraries = ['React', 'Angular', 'Next.Js'];

import React from 'react';
function App() {
  return (
    <div>
      {/* <Welcome name="Nayeem" /> */}
      {/* <Comment name={name} comment={comment} date={date} url={url} /> */}
      <Clock />
      {/* <Counter counter={0} increment={1} /> */}
      {/* <Toggle /> */}
      {/* <MailBox messages={libraries} /> */}
      {/* <LoginControl /> */}
      {/* <Warning /> */}
      {/* <Form /> */}

      {/* <Calculator scale="c" /> */}

    {/* <Counter /> */}
    </div>
  );
}

export default App;
