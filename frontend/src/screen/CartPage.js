import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Card,
  Form,
} from "react-bootstrap";
import Message from "../component/Message";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../actions/CartActions";

const CartPage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productid = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  console.log(cartItems);
  useEffect(() => {
    if (productid) {
      dispatch(addToCart(productid, qty));
    }
  }, [dispatch, productid, qty]);
  const removeItemFromCart = (id) => {
    console.log(`Item ${id} is removed`);
  };

  return (
    <Row>
      <h1> Shopping Cart</h1>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Message>
            Shpping Cart is Empty <Link to="/">Go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => {
              return (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/api/product/${item.product}`}>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => {
                          removeItemFromCart(item.product);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup varient="flush">
            <ListGroup.Item>
              <h2>
                Subtotal {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
