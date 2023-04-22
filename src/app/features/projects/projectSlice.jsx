import { createSlice } from '@reduxjs/toolkit';

// if no project selected default to Inbox Project

const initialState = {
  selectedProject: localStorage.getItem('user_inbox_id'),
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCurrentProject: (state, action) => {
      state.selectedProject = action.payload;
      localStorage.setItem('pr', action.payload);
    },
    clearCurrentProject: state => {
      state.selectedProject = '';
    },
  },
});

export const { setCurrentProject, clearCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;

export const selectCurrenProject = state => state.projects.selectedProject;
