import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./screen/HomePage";
import CartPage from "./screen/CartPage";
import ProductDetails from "./screen/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path={`/product/:id`} element={<ProductDetails />} />
            <Route path={`/cart/:id?`} element={<CartPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
