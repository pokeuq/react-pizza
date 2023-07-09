import React, { useContext } from "react";
import styles from "./Search.module.scss";

import debounce  from "lodash.debounce";

import { SearchContext } from "../../App";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {

  const dispatch = useDispatch()
  const [value, setValue] = React.useState('')

  //отличие useCallback от useEffect, в том что useCallback ВОЗВРАЩАЕТ ф-ию

  
  const inputRef = React.useRef()
 
  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 350),
    []
  )

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы.."
      />

      {value && (
        <svg
          onClick={onClickClear}
          className={styles.delete}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/fsvg"
        >
          <title />
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z"
            fill="#464646"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
