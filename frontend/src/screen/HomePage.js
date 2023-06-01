import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../component/product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/ProductListActions.js";
import Message from "../component/Message.js";
import Loader from "../component/Loader.js";
const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // const products = [];
  return (
    <>
      <h2>Latest Items</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomePage;
