import {
  Product_List_Failure,
  Product_List_Request,
  Product_List_Success,
  Product_Detail_Failure,
  Product_Detail_Request,
  Product_Detail_Success,
} from "../constant/ProductConstant";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: Product_List_Request });
    const { data } = await axios.get("/api/products");
    dispatch({ type: Product_List_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Product_List_Failure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const Detail_product = (id) => async (dispatch) => {
  try {
    dispatch({ type: Product_Detail_Request });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: Product_Detail_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Product_Detail_Failure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
