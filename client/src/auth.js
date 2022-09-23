import { axios } from "axios";

const ACCESS_TOKEN_KEY = "simplaytoken";
const API_URL = `http://localhost:4000`;

export const getToken = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));
};

export const isLoggedIn = () => {
  return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const login = (formData) => {
  try {
    const response = fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    }).then((data) => data.json());
    return response;
  } catch (e) {
    console.error({ error: e });
  }
};
