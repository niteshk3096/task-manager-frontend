import { makeProtectedRequest, makeRequest } from "./helper";
import { URLS } from "../shared/constants/appConstants";
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";
export const loginUser = async (email, password) => {
  return makeRequest({
    url: URLS.login,
    method: POST,
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};

export const registerUser = async (name, age, email, password) => {
  return makeRequest({
    url: URLS.register,
    method: POST,
    data: {
      name,
      email,
      age,
      password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};

export const logutUser = async () => {
  return makeProtectedRequest({
    url: URLS.logout,
    method: POST,
    data: undefined,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};

export const updateUser = async (name, email, age) => {
  return makeProtectedRequest({
    url: URLS.updateUser,
    method: PUT,
    data: {
      name,
      email,
      age,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};

export const deleteUser = async () => {
  return makeProtectedRequest({
    url: URLS.updateUser,
    method: DELETE,
    data: undefined,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return false;
    });
};

export const getUserTasks = async (signal) => {
  return makeProtectedRequest({
    url: URLS.tasks,
    method: GET,
    data: undefined,
    signal: signal,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("err", err);
      return false;
    });
};
export const addUserTasks = async (title, module, description, completed) => {
  return makeProtectedRequest({
    url: URLS.tasks,
    method: POST,
    data: { title, module, description, completed },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const getTaskDetails = async (id) => {
  return makeProtectedRequest({
    url: `${URLS.tasks}/${id}`,
    method: GET,
    data: undefined,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const updateTaskDetails = async (
  id,
  title,
  module,
  description,
  completed
) => {
  return makeProtectedRequest({
    url: `${URLS.tasks}/${id}`,
    method: PUT,
    data: { title, module, description, completed },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
export const deleteTask = async (id) => {
  return makeProtectedRequest({
    url: `${URLS.tasks}/${id}`,
    method: DELETE,
    data: undefined,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
