import React from 'react';
//import ReactDOM from 'react-dom';
//import Mywebsite from './App.js';
class Learnreactprops extends React.Component
{
  render()
  {
    return <div>
      <h1>Learn {this.props.topic} in {this.props.language}</h1>
    </div>
  }
}
export default Learnreactprops;
//ReactDOM.render(<Learnreactprops topic="React JS" language="Tamil"/>,document.getElementById('root'));

