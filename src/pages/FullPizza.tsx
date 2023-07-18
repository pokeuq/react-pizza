import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../scss/app.scss";

const FullPizza: React.FC = () => {
  let [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://648dec892de8d0ea11e863b0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container center">
      <div className="full-pizza">
        <img src={pizza.imageUrl} alt="#" />
        <h2>{pizza.title}</h2>
        <h4>от {pizza.price} ₽</h4>
      </div>
      <Link
        to="/"
        className="button button--outline button--add go-back-btn "
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
export default FullPizza;
