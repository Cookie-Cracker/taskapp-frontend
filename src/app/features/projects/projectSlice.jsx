import { createSlice } from '@reduxjs/toolkit';

// if no project selected default to Inbox Project
const initialState = {
  selectedProject: '',
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    currentProject: (state, action) => {},
    clearCurrentProject: state => {
      state.selectedProject = '';
    },
  },
});

export const { currentProject, clearCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;

export const selectCurrenProject = state => state.projects.currentProject;
