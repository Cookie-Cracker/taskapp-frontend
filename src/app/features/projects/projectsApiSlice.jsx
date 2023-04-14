import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../../api/apiSlice';

const projectsAdapter = createEntityAdapter();
const initialState = projectsAdapter.getInitialState({});

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProjects: builder.query({
      query: () => ({
        url: '/projects/active',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: responseData => {
        const loadedProjects = responseData.map(p => {
          p.id = p._id;
          return p;
        });
        return projectsAdapter.setAll(initialState, loadedProjects);
      },
      providesTags: (result, error, args) => {
        if (result?.ids) {
          return [
            { type: 'Project', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Project', id })),
          ];
        } else return [{ type: 'Project', id: 'LIST' }];
      },
    }),
    getProjectsTaskCount: builder.query({
      query: () => ({
        url: '/projects/tasksstats',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: responseData => {
        const loadedProjects = responseData.map(p => {
          p.id = p._id;
          return p;
        });
        return projectsAdapter.setAll(initialState, loadedProjects);
      },
      providesTags: (result, error, args) => {
        if (result?.ids) {
          return [
            { type: 'Project', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Project', id })),
          ];
        } else return [{ type: 'Project', id: 'LIST' }];
      },
    }),
    // getProjectTasks: builder.query({
    //   query: ({ projectId }) => `/project/${projectId}`,
    //   validateStatus: (response, result) => {
    //     return response.status === 200 && !result.isError;
    //   },
    //   transformResponse: responseData => {
    //     const loadedProjects = responseData.map(p => {
    //       p.id = p._id;
    //       return p;
    //     });
    //     return projectsAdapter.setAll(initialState, loadedProjects);
    //   },
    //   providesTags: (result, error, args) => {
    //     if (result?.ids) {
    //       return [
    //         { type: 'Project', id: 'LIST' },
    //         ...result.ids.map(id => ({ type: 'Project', id })),
    //       ];
    //     } else return [{ type: 'Project', id: 'LIST' }];
    //   },
    // }),
    addProject: builder.mutation({
      query: payload => ({
        url: '/projects',
        method: 'POST',
        body: {
          ...payload,
        },
      }),
      invalidatesTags: [{ type: 'Project', id: 'LIST' }],
    }),
    updateProject: builder.mutation({
      query: payload => ({
        url: '/projects',
        method: 'PATCH',
        body: {
          ...payload,
        },
      }),
      invalidatesTags: [{ type: 'Project', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectsTaskCountQuery,
  useGetProjectTasksQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
} = projectsApiSlice;

const selectProjectsResult = projectsApiSlice.endpoints.getProjects.select();
const selectProjectsTaskCount =
  projectsApiSlice.endpoints.getProjectsTaskCount.select();
const selectProjectsData = createSelector(selectProjectsResult, pr => pr.data);
const selectProjectsTaskCountData = createSelector(
  selectProjectsTaskCount,
  pr => pr.data
);

export const {
  selectAll: selectAllProjects,
  selectById: selectProjectById,
  selectIds: selectProjectsIds,
} = projectsAdapter.getSelectors(
  state => selectProjectsData(state) ?? initialState
);
export const {
  selectAll: selectAllProjectsTaskCount,
  selectById: selectProjectTaskCountById,
  selectIds: selectProjectsTaskCountIds,
} = projectsAdapter.getSelectors(
  state => selectProjectsTaskCountData(state) ?? initialState
);
