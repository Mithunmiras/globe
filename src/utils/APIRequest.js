import ConfigAPIURL from "../config/ConfigAPIURL.js";

const APIRequest = {
  request: function (method, url, body) {
    let config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
        "Accept-Language":
          JSON.parse(localStorage.getItem("lng")) !== undefined &&
          JSON.parse(localStorage.getItem("lng")) !== null
            ? JSON.parse(localStorage.getItem("lng")).code
            : "",
      },
      credentials: "include",
    };

    if (body !== "") {
      config.body = body;
    }

    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        return this.returnResponse(data, url, config);
      })
      .catch(() => {
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },

  returnResponse: async function (response) {
    if (response.status !== undefined && response.status !== null) {
      return { returncode: 0, errors: [{ errormsg: response.error }] };
    } else if (response.returncode !== 2) {
      return Promise.resolve(response);
    } else if (response.returncode === 2) {
      window.location.href = "/";
    }
  },
};

export default APIRequest;
