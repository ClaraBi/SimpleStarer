import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY ='AIzaSyBeaKMicLJBLG9CrQ4Ugo0SslrFVv11jiE';

//Create a new component
const App=() => {
  return <div>Hi!</div>;
}
//take this compontent's generated HTML and put it on the page( in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
