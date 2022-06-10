import React, { useContext }  from "react";
import "./styles.css";
import Product from './Component/Product'
import Part from "./Component/Part";
import DataContext from "./Component/DataContext";
import SubPart from "./Component/SubPart";
import View  from './Component/View'
const App = () => {
const {flage,show,storeData}=useContext(DataContext)
return(
   <div>{
     flage?(show?(storeData.length===0?<View/>: <SubPart/>):<Part />): <Product/>
   }
    
  </div>
)
 
};

export default App;
