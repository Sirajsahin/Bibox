
import { useContext } from 'react';
import '../styles.css'
import DataContext from './DataContext';
const Part=()=>{

  const {item,store,showSubpart,count}=useContext(DataContext)
  return(
    <div>
    <button className="btn-show" onClick={showSubpart}>{count}</button>
   <div className="partss">
    
   <div className="part">
    {item.map((value, id) => {
    return (
      <div className="card" id="ss" key={id} onClick={() => store(value)}>
        <img src={value.img} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          {/* <h4><b>{}</b></h4>  */}
          <p>{value.para}</p>
        </div>
      </div>
    );
  })}
</div>

</div>
</div>
  )
}
export default Part