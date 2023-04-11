import axios from 'axios';
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

axios.defaults.baseURL = 'https://api.todoist.com/rest/v2';
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export function getAllProjects() {
  return axios.get('/projects').then(resp => resp.data);
}

export function getLabels() {
  return axios.get('/labels').then(resp => resp.data);
}
export function getTaskByProject(id) {
  return axios.get('/tasks').then(doc => doc.data);
  // return tasks.filter(t => t.project_id === id);
  // const filteredById = tasks.filter(t => t.project_id === id);
  // return filteredById;
}

export async function getTById(id) {
  const tasks = await axios.get('/tasks').then(doc => doc.data);
  const filteredById = tasks.filter(t => t.project_id === id);
  return filteredById;
}
