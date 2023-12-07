import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

//cria o contexto
const Mycontext = React.createContext();


function ChildComponent(){
//efetivamente usa o contexto
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

  //contexto a ser passado
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
