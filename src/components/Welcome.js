import React from 'react';

//  this is functional component
function Welcome({ name }) {
  return (
    <h1>
      Hello,  
      {name}
    </h1>
  );
}

// class Welcome extends React.Component {
//   render() {
//     return (
//       <h1>
//         {' '}
//         Hello,
//         {' '}
//         {this.props.name}
//       </h1>
//     );
//   }
// }
export default Welcome;
