import React,{useContext} from 'react'

import '../styles.css'
import DataContext from './DataContext';
const Product =()=>{
  const {handelClick}=useContext(DataContext)
  // const [item, setItem] = useState(data);
  // /const [storeData, setStoreData] = useState([]);
  
  // const store = (val) => {
  //   setStoreData((v) => [...v, val]);

  //   document.getElementById("ss").addEventListener("click", () => {
  //     document.getElementById("ss").style.backgroundColor = "blue";
  //   });
  return (
    <div className="app">
      <div className="img-box">
        <img
          src="https://cdn.shopify.com/s/files/1/0477/1358/3267/files/Portfolio_d3f63550-a431-4506-a14b-8cf23186a30b_1080x.jpg?v=1646711789"
          alt="name"
        />
        <button className="btn" onClick={handelClick}>
          Start
        </button>
      </div>
    </div>
  )
}
export default Product