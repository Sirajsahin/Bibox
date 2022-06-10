import { useContext } from "react";
import DataContext from "./DataContext";
import "../styles.css";
const View = () => {
  const { arr,home } = useContext(DataContext);
  return (
    <div>
      <button onClick={home}>Back To Home</button>
      <div className="productImg">
        <img
          src="https://cdn.shopify.com/s/files/1/0477/1358/3267/files/Portfolio_d3f63550-a431-4506-a14b-8cf23186a30b_1080x.jpg?v=1646711789"
          alt="name"
        />
      </div>
      <div className="rightView">
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
export default View;
