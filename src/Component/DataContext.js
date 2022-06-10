import {useState, createContext,useRef, useEffect } from "react";

import Data from './Data'
const DataContext =createContext({})

export const DataProvider=({children})=>{
  const [flage, setFlage] = useState(false);
  const [item, setItem] = useState(Data);
  const [show,setShow]=useState(false)
  const [storeData, setStoreData] = useState([]);
  const [count,setCount]=useState(0)
  const [arr, setArr] = useState([]);

   const handelClick =() => {
     setFlage(true);
   };
  const store = (id,val) => {
    setStoreData((v) => [...v, val]);
    setCount(val=>val+1)
    document.getElementById(id).style.backgroundColor="red";
  }
  const showSubpart=()=>{
    setShow(true)
  }
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (position,value) => {
    setArr((val) => [...val, value]);
    const update = storeData.filter((val, ind) => position !== ind);
    setStoreData(update);
  };
  const home=()=>{
  
     setStoreData([])
     setFlage(false)
     setShow(false)
   
  }
  return(
    <div>
      <DataContext.Provider value={{home,count,setCount,show,flage,setFlage,handelClick,item,setItem,store,setStoreData,storeData,showSubpart,arr,setArr,dragItem,dragOverItem,dragStart,dragEnter,drop,setArr}}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
export default DataContext