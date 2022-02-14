import axios from "axios";
import * as ENDPOINTS from "../constants/endpoints";

const baseURL = "https://api.paystack.co";
const SECRET_KEY = "sk_test_3ce090bffd566f4365b38410accfd494a0d96a71";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + SECRET_KEY,
};

export const getAllBanks = axios.get(baseURL + ENDPOINTS.GETALLBANKS, {
  headers,
});
export const verifyAccount = (payload) =>
  axios.get(
    baseURL +
      ENDPOINTS.VERIFYACCOUNT +
      `account_number=${payload.account_number}&bank_code=${payload.bank_code}`,
    { headers }
  );
export const createTransferRecipient = (payload) =>
  axios.post(baseURL + ENDPOINTS.TRANSFERRECIPIENT, payload, {
    headers,
  });
export const initiateTransfer = (payload) =>
  axios.post(baseURL + ENDPOINTS.INITIATETRANSFER, payload, {
    headers,
    timeout: 5000,
  });
