import { useContext, useRef, useState } from "react";
import "../styles.css";
import DataContext from "./DataContext";
const SubPart = () => {
  const { storeData, setStoreData } = useContext(DataContext);
  const [dro, setDro] = useState(false);
  const [ishow, setIshow] = useState(true);
  const [arr, setArr] = useState([]);
  console.log(arr);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position, value) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
    // const findd=storeData.filter((val,ind)=>position===ind)
    setArr((val) => [...val, value]);
    // console.log(value)
    const update = storeData.filter((val, ind) => position !== ind);
    setStoreData(update);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyListItems = [...storeData];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setStoreData(copyListItems);
    // setDro(true);
    // setIshow(false)
  };
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
                onDragEnd={drop}
                draggable
              >
                {ishow ? (
                  <img src={value.img} alt="Avatar" style={{ width: "100%" }} />
                ) : null}
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
