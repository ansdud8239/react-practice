import React,{Fragment} from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  // return (
  //   <div id="App">
  //     <Header />
  //     <Content />      
  //   </div>    
  // );
  return React.createElement(Fragment, null, React.createElement(Header, null), React.createElement(Content, null));
}

export default App;