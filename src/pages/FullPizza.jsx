import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza = () => {
  let [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://648dec892de8d0ea11e863b0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        navigate('/')

      }
    }
    
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">Загрузка...</div>
  }
  
  

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};
export default FullPizza;
