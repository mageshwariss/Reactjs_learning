import React from 'react';
//import ReactDOM from 'react-dom';
class Learnreactpropsparent extends React.Component
{
  render()
  {
    return <div>
      <h1>Learn React JS in {this.props.var}</h1>
    </div>
  }
}
class Learnreactpropschild extends React.Component
{
  render()
  {
    const v = "English";
    return <Learnreactpropsparent var={v} />
  }
}
export default Learnreactpropschild;
//ReactDOM.render(<Learnreactpropschild />,document.getElementById('root'));
