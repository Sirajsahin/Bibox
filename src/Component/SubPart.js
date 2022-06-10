import { useContext, useRef, useState } from "react";
import "../styles.css";
import DataContext from "./DataContext";
const SubPart = () => {
  const { storeData,arr,dragStart,dragEnter,drop } = useContext(DataContext);
  


  
  return (
    <div className="main-sub">
      <div className="subpart">
        <div className="part2">
          {storeData.map((value, id) => {
            return (
              <div
                className="card"
                onDragStart={(e) => dragStart(e, id, value)}
                key={id}
                onDragEnter={(e) => dragEnter(e, id)}
                onDragEnd={()=>drop(id,value)}
                draggable
              >
               
                  <img src={value.img} alt="Avatar" style={{ width: "100%" }} />
                
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        {arr.map((value, id) => {
          return (
            <div className="card1" key={id}>
           
                <img src={value.img} alt="Avatar" style={{ width: "100%" }} />
           
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubPart;
