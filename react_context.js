import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import CardContainer from "./components/card-components/CardContainer";
const Mycontext = React.createContext();


function ChildComponent(){
const value = useContext(Mycontext);
return (
    <div>
    {value.showContext()}
    <p></p>
    {value.calculate(5,10)}
    </div>
)
}

function App() {

  const useContext = {
    title:"meu contexto",
    showContext: function() {return this.title},
    calculate : function(n1,n2) { return n1*n2}
  }

  return (
    <div className="App">
     <Mycontext.Provider value={useContext}>
        <ChildComponent/> 
     </Mycontext.Provider >
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
