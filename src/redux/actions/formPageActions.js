import * as actionTypes from "./actionTypes";
import Services from "../../services/formApiService"

export const createForm = (formData) => async (dispatch) => {
  try {
    const res = await Services.create({ formData });

    dispatch({
      type: actionTypes.SUBMIT_FORM_SUCCESS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
