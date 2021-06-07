import React from "react";
import styles from "./Products.module.css";

import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((prod) => {
        return <Product key={prod.id} item={prod} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
