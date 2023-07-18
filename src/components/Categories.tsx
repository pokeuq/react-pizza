import React from "react";
import { useWhyDidYouUpdate } from "ahooks";

type CategoriesProps = {
  value: number;
  onChangeCategory: (arg: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => {
            return (
              <li
                key={index}
                onClick={() => onChangeCategory(index)}
                className={value === index ? "active" : ""}
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
export default Categories;
