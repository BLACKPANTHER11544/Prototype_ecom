import {
  Product_List_Failure,
  Product_List_Request,
  Product_List_Success,
  Product_Detail_Failure,
  Product_Detail_Request,
  Product_Detail_Success,
} from "../constant/ProductConstant";

export const ProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case Product_List_Request:
      return { loading: true, products: [] };
    case Product_List_Success:
      return { loading: false, products: action.payload };
    case Product_List_Failure:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case Product_Detail_Request:
      return { loading: true, product: { reviews: [] } };
    case Product_Detail_Success:
      return { loading: false, product: action.payload };
    case Product_Detail_Failure:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
