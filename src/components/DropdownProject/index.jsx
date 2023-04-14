import { FormControl, Select, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useGetProjectsQuery } from '../../app/features/projects/projectsApiSlice';

const DropdownProject = ({ current_project_id, setId }) => {
  console.log('current_project_id', current_project_id);
  const { projects, ids } = useGetProjectsQuery('projectList', {
    selectFromResult: ({ data }) => ({
      projects: data?.entities,
      ids: data?.ids,
    }),
  });
  console.log('projects', projects);
  const [selectedProject, setselectedProject] = useState(current_project_id);
  // console.log('selectedProject', selectedProject);
  // const [tprojects, setProjects] = useState([]);

  // useEffect(() => {
  //   setProjects(projects);
  // }, [projects]);
  // console.log('tprojects', tprojects);

  const handleChange = e => {
    setselectedProject(e.target.value);
    setId(e.target.value);
  };

  // console.log('projects', projects);
  // console.log('yprojects', tprojects);
  // console.log('ids', ids);

  return (
    <FormControl w={'150px'}>
      <Select value={selectedProject} onChange={handleChange} border={'none'}>
        {ids.map(id => (
          <option key={projects[id].id} value={projects[id].id}>
            <Text>{projects[id].name}</Text>
          </option>
        ))}
      </Select>
    </FormControl>
    // <p>hello</p>
  );
};

export default DropdownProject;
