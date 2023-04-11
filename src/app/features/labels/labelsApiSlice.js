import { apiSlice } from '../../api/apiSlice'
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
const labelsAdapter = createEntityAdapter({})
const initialState = labelsAdapter.getInitialState()

export const labelsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLabels: builder.query({
            query: () => ({
                url: '/labels',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedLabels = responseData.map(label => {
                    label.id = label._id
                    return label
                })
                return labelsAdapter.setAll(initialState, loadedLabels)
            },
            providesTags: (result, error, args) => {
                if (result?.ids) {
                    return [
                        { type: 'Label', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Label', id }))
                    ]
                } else return [{ type: 'Label', id: 'LIST' }]
            }
        }),
        addLabel: builder.mutation({
            query: payload => ({
                url: '/labels',
                method: 'POST',
                body: {
                    ...payload
                }
            }),
            invalidatesTags: [
                { type: 'Label', id: "LIST" }
            ]
        }),
        updateLabel: builder.mutation({
            query: payload => ({
                url: '/labels',
                method: 'PATCH',
                body: {
                    ...payload
                }
            }),
            invalidatesTags: [
                { type: 'Label', id: "LIST" }
            ]
        })
    })
})

export const { useGetLabelsQuery, useAddLabelMutation, useUpdateLabelMutation } = labelsApiSlice

// returns the query result object
export const selectLabelsResult = labelsApiSlice.endpoints.getLabels.select()

//creates a memoized selector
const selectLabelsData = createSelector(
    selectLabelsResult,
    labelsResult => labelsResult.data

)
export const {
    selectAll: selectAllLabels,
    selectById: selectLabelById,
    selectIds: selectLabelsIds

} = labelsAdapter.getSelectors(state => selectLabelsData(state) ?? initialState)