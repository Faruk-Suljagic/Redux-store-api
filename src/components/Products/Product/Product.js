import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

import { connect } from "react-redux";

import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shopping/Shopping-actions";

const Product = ({ item, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product} key={item.id}>
      <img
        className={styles.product__image}
        src={item.image}
        alt={item.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${item.id}`}>
          <button
            onClick={() => loadCurrentItem(item)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(item.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
