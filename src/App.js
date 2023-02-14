import "./App.css";
// import Images from "./assets.Images.jpg"
import Demo from "./components/Demo";

function App() {
  var x=10;
  var text;
  if (x===20){
    text="Equal";
  }
  else{
    text="Not Equal"
  }
    return (
      <div className="App">
      <h1> Hello world </h1>

      <h3> {x>=10?"Greater than or equal to 10":"Not equal to 10"}</h3>

      <Demo para={text}/>
      {/* <img src=[[mage] alt="pic" width="50%"> */}
      </div>


    );
}

export default App;