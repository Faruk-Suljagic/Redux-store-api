import React, { useEffect } from "react";
import styles from "./Products.module.css";

import { connect } from "react-redux";

import Product from "./Product/Product";
import { loadProducts } from "../../redux/Shopping/Shopping-actions";

const Products = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className={styles.products}>
      {/* <button onClick={() => loadProducts()}>Load products</button> */}
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
const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(loadProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
