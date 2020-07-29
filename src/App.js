import React,{Component} from 'react';
import './App.css';
import Items from './component/items';
import Footer from './component/FooterComponent';
import Header from './component/HeaderComponent';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <Items/>
      <Footer/>
    </div>
  );
  }
}

export default App;
