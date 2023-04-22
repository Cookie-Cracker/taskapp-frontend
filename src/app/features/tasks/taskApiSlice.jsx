import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../api/apiSlice';

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState({});

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProjectTasks: builder.query({
      query: ({ projectId }) => `/project/${projectId}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: responseData => {
        const loadedTasks = responseData.map(p => {
          p.id = p._id;
          return p;
        });
        return tasksAdapter.setAll(initialState, loadedTasks);
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
    addTask: builder.mutation({
      query: payload => ({
        url: '/tasks',
        method: 'POST',
        body: { ...payload },
      }),
      // invalidateTags: [{ type: 'Task', id: 'LIST' }],
      invalidatesTags: (result, error, arg) => [
        { type: 'Task', id: arg.id },
        { type: 'Task', id: 'STATS' },
        { type: 'Project', id: arg.id },
      ],
    }),
  }),
});

export const { useGetProjectTasksQuery, useAddTaskMutation } = tasksApiSlice;

const selectTasksResult = tasksApiSlice.endpoints.getProjectTasks.select();
// const selectTasksResult = tasksApiSlice.endpoints.getTasks.select();
// const selectTasksTaskCount = tasksApiSlice.endpoints.getTasksTaskCount.select();
const selectTasksData = createSelector(selectTasksResult, pr => pr.data);
// const selectTasksTaskCountData = createSelector(
//   selectTasksTaskCount,
//   pr => pr.data
// );

export const {
  selectAll: selectAllTasks,
  selectById: selectTasktById,
  selectIds: selectTasksIds,
} = tasksAdapter.getSelectors(state => selectTasksData(state) ?? initialState);
// export const {
//   selectAll: selectAllTasksTaskCount,
//   selectById: selectProjectTaskCountById,
//   selectIds: selectTasksTaskCountIds,
// } = tasksAdapter.getSelectors(
//   state => selectTasksTaskCountData(state) ?? initialState
// );
