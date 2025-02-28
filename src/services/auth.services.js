import axios from "axios";
import { getApiUrl } from "src/config/getApiUrl";

class AuthService {
  domain;
  user_id;
  token;
  isLogin;

  constructor() {
    this.domain = getApiUrl();
  }

  requestLOGIN(path,data) {
    return axios.post(this.domain + path, {
      ...data,
    });
  }
  getHeaders() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${this.getToken()}`,
    };
  }

  signout() {
    return this.removeToken();
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  requestGET(path) {
    let url = this.domain + path;

    return axios.get(url, {
      headers: this.getHeaders(),
    });
  }

  requestPOST(path, data) {
    return axios.post(this.domain + path, data, {
      headers: this.getHeaders(),
    });
  }

  requestPUT(path,data) {
    return axios.put(this.domain + path , data, {
      headers: this.getHeaders(),
    });
  }

  requestDELETE(path, id) {
    return axios.delete(this.domain + path , {
      headers: this.getHeaders(),
    });
  }

  getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  }

  setToken(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
    return true;
  }

  removeToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    return true;
  }

  removeAccessToken() {
    
  }
}

export default new AuthService();
