import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// el createApi de redux toolkit nos crea custom hooks
export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),

    getTodoById: builder.query({
      query: (todoID) => `/todos/${todoID}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;