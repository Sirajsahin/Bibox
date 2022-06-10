import {useState, createContext } from "react";

import Data from './Data'
const DataContext =createContext({})

export const DataProvider=({children})=>{
  const [flage, setFlage] = useState(false);
  const [item, setItem] = useState(Data);
  const [show,setShow]=useState(false)
  const [storeData, setStoreData] = useState([]);
  const [count,setCount]=useState(0)
   const handelClick =() => {
     setFlage(true);
   };
  const store = (val) => {
    setStoreData((v) => [...v, val]);
    setCount(val=>val+1)
  }
  const showSubpart=()=>{
    setShow(true)
  }
  return(
    <div>
      <DataContext.Provider value={{count,setCount,show,flage,setFlage,handelClick,item,setItem,store,setStoreData,storeData,showSubpart}}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
export default DataContext