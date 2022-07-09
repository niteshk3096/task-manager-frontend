import axios from "axios";
import { BASE_URL } from "../shared/constants/appConstants";
import Cookies from "universal-cookie";

export const makeRequest = ({ url, method, data }) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: method,
        url: `${BASE_URL}${url}`,
        withCredentials: false,
        data: data,
        headers: Object.assign(
          {
            Accept: "application/json",
            // Authorization:
            //   token && token !== ""
            //     ? "Bearer " + JSON.parse(token).token.token
            //     : "",
          }
          // headers,
        ),
      })
        .then((response) => {
          console.log("data", response);
          resolve(response);
        })
        .catch((err) => {
          console.log("err", err);
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};

export const makeProtectedRequest = ({ url, method, data, signal }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return new Promise((resolve, reject) => {
    try {
      axios({
        method: method,
        url: `${BASE_URL}${url}`,
        withCredentials: false,
        data: data,
        signal: signal,
        // headers: { "Access-Control-Allow-Origin": "*" },
        headers: Object.assign(
          {
            Accept: "application/json",
            Authorization: token && token !== "" ? "Bearer " + token : "",
          }
          // headers,
        ),
      })
        .then((response) => {
          console.log("res", response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject(err);
    }
  });
};
