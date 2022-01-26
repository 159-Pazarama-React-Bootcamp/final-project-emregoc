import axios from "axios";

const FORM_API_BASE_URL =
  "https://61c49fe3f1af4a0017d996dd.mockapi.io/applicationform";

class FormApiService {
  getForm() {
    return axios.get(FORM_API_BASE_URL);
  }

  createForm(data) {
    return axios.post(FORM_API_BASE_URL, data);
  }

  getFormById(dataId) {
    return axios.get(FORM_API_BASE_URL + "/" + dataId);
  }

  updateForm(data, dataId) {
    return axios.put(FORM_API_BASE_URL + "/" + dataId, data);
  }

  deleteForm(dataId) {
    return axios.delete(FORM_API_BASE_URL + "/" + dataId);
  }
}

export default new FormApiService();