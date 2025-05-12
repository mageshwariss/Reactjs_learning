import React from 'react';
//import ReactDOM from 'react-dom';
class Myclasswebsite extends React.Component
{
  render()
  {
    return <h1>Welcome</h1>
  }
}
class Myclassnewwebsite extends React.Component
{
  render()
  {
    return <div>
      <Myclasswebsite />
      <h1>Thanks For Watching</h1>
    </div>
  }
}
export default Myclassnewwebsite;
//ReactDOM.render(<Myclassnewwebsite />,document.getElementById('root'));
