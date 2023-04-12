import React from 'react'
import { useGetProjectsQuery } from './projectsApiSlice';
import { Spinner } from '@chakra-ui/react';
import ProjectFormEdit from './Project.FormEdit';

const ProjectEdit = props => {

    const { initRef, onClose, projectId } = props;

    const { project } = useGetProjectsQuery('projectsList',
        {
            selectFromResult: ({ data }) => ({
                project: data?.entities[projectId]
            }),
        }
    )
    if (!project) return <Spinner />
    const content = <ProjectFormEdit project={project} initRef={initRef} onClose={onClose} />
    return content
}

export default ProjectEdit