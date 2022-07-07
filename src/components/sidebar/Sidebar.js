import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import "./style.css";
import { Link } from "react-router-dom";
import { GET_CATS } from "../../sotre/actionTypes/actionTypes";
import { getCats } from "../../api";
import { setCategoryIdAction } from "../../sotre/actions";

export default function Sidebar(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { categories, categoryId } = state;

  const setCategoryId = (ID) => {
    dispatch(setCategoryIdAction(ID));
  };

  const asideMenu = categories.map((category) => {
    const name =
      category.name.slice(0, 1).toUpperCase() +
      category.name.slice(1).toLowerCase();

    return (
      <Link
        to={category.name}
        onClick={() => setCategoryId(category.id)}
        key={category.name}
      >
        <div className="category-item">
          <p>{name}</p>
        </div>
      </Link>
    );
  });

  const handleLoadMore = async () => {
    const newCats = await getCats(categoryId);
    dispatch({ type: GET_CATS, payload: newCats });
  };

  return (
    <div className="sidebarWrapper">
      <div className="aside">
        {asideMenu}
        <div className="author-info">
          <p>Author: Sargis Hakobyan</p>
          <p>Phone: + 374 77 293 294</p>
          <p>E-mail: sargishakobyann97@gmail.com</p>
        </div>
      </div>
      <div className="main-content">
        {props.children}
        <div className="load-more-wrapper">
          <button className="load-more" onClick={handleLoadMore}>
            Load More...
          </button>
        </div>
      </div>
    </div>
  );
}
