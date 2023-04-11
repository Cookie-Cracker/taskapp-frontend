import { FormControl, Select, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllProjects } from '../../services';

const DropdownProject = () => {
  const [selectedProject, setselectedProject] = useState('');
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const p = await getAllProjects();
    setProjects(p);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = e => {
    setselectedProject(e.target.value);
  };

  return (
    <FormControl w={'150px'}>
      <Select value={selectedProject} onChange={handleChange} border={'none'}>
        {projects.map(p => (
          <option key={p.id} value={p.id}>
            <Text>{p.name}</Text>
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownProject;
