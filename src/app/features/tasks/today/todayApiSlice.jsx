import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../../api/apiSlice';
const todaysAdapter = createEntityAdapter();
const initialState = todaysAdapter.getInitialState({});

export const todaysApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodayTasksCount: builder.query({
      query: () => '/projects/todaystats',
      providesTags: (result, error, args) => {
        if (result?.ids) {
          return [
            { type: 'Task', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Task', id })),
          ];
        } else return [{ type: 'Task', id: 'STATS' }];
      },
    }),
    getTodayTasks: builder.query({
      query: () => '/projects/today',
      transformResponse: responseData => {
        const loadedTasks = responseData.map(p => {
          p.id = p._id;
          return p;
        });
        return todaysAdapter.setAll(initialState, loadedTasks);
      },
      providesTags: (result, error, args) => {
        if (result?.ids) {
          return [
            { type: 'Task', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Task', id })),
          ];
        } else return [{ type: 'Task', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetTodayTasksQuery, useGetTodayTasksCountQuery } =
  todaysApiSlice;
