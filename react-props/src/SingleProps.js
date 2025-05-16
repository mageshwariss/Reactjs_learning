import React from 'react';
//import ReactDOM from 'react-dom';
//import Mywebsite from './App.js';
class Learnreactsingleprops extends React.Component
{
  render()
  {
    return <div>
      <h1>Learn {this.props.topic}</h1>
    </div>
  }
}
export default Learnreactsingleprops;
//ReactDOM.render(<Learnreactsingleprops topic="React JS" />,document.getElementById('root'));

