import React, { useContext }  from "react";
import "./styles.css";
import Product from './Component/Product'
import Part from "./Component/Part";
import DataContext from "./Component/DataContext";
import SubPart from "./Component/SubPart";
const App = () => {
const {flage,show}=useContext(DataContext)
return(
   <div>{
     flage?(show?<SubPart/>:<Part />): <Product/>
   }
    
  </div>
)
 
};

export default App;
