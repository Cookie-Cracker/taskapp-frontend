import { apiSlice } from '../../api/apiSlice'

export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProjects: builder.query({
            query: () => '/projects/active',
            providesTags: [{ type: 'Project', id: 'LIST' }]
        }),
        addProject: builder.mutation({
            query: payload => ({
                url: '/projects',
                method: 'POST',
                body: {
                    ...payload
                }
            }),
            invalidatesTags: [{ type: 'Project', id: 'LIST' }]
        }),
        updateProject: builder.mutation({
            query: payload => ({
                url: '',
                method: 'PATCH',
                body: {
                    ...payload
                }
            })
        })
    })
})

export const {
    useGetProjectsQuery,
    useAddProjectMutation
} = projectsApiSlice