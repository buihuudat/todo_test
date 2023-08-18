import configAxios from "./configAxios";

const rootApi = {
  getUsers: () => configAxios.get("/users"),
  getTasks: (userId) => configAxios.get(`/users/${userId}/todos`),
  markDone: ({ taskId }) =>
    configAxios.put(`/todos/${taskId}`, { completed: true }),
};

export default rootApi;
