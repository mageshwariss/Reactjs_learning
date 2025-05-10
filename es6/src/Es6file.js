//import React from 'react';
//import ReactDOM from 'react-dom';
/* class Demo {
  addition() {
    var a = 15;
    var b = 10;
    document.getElementById('es6add').innerHTML = "ES6 add=" + a + b;
  }
  subtraction() {
    var a = 5;
    var b = 10;
    var c = a - b;
    document.getElementById('es6sub').innerHTML = c;
  }
}
//var mydemo = new Demo();
//mydemo.addition();
//mydemo.subtraction();

export default Demo;
 */

class Demo {
  addition() {
    return <div>es6add 10 + 20 = {10 + 20}</div>;
  }

  subtraction() {
    return <div>es6sub 30 - 10 = {30 - 10}</div>;
  }
}

export default Demo;
