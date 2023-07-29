
import './App.scss';
import Card from './components/card/Card';
import Header from './components/header/Header';
import data from "./data.js"



function App() {
// console.log("ahmet")
// console.log("aydos")
 
  return (

    <div>

    
       <Header/>
       <div className="cardDivArea">
          <Card data= {data}/>
       </div>
    </div>
  );
}

export default App;
