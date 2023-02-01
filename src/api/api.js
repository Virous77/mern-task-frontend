import axios from "axios";

const baseURL = "http://localhost:5000/api/task";

export const getAllTask = async () => {
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    throw Error;
  }
};

export const taskCreate = async (task) => {
  try {
    const { data } = await axios.post(baseURL, task);
    return data;
  } catch (error) {
    throw Error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${baseURL}/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateCompleted = async ({ _id, ...rest }) => {
  try {
    await axios.put(`${baseURL}/${_id}`, rest);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateTask = async ({ _id, ...rest }) => {
  try {
    await axios.put(`${baseURL}/${_id}`, rest);
  } catch (error) {
    throw error;
  }
};
