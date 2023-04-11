import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Box } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import TodoistTaskItem from './TodoistTaskItem';

const TasksList = ({ list }) => {
  const [tasks, setTasks] = useState(list);

  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const reorderedList = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasks(reorderedList);
  };
  useEffect(() => {
    setTasks(list);
  }, [list]);
  const handleCompleteTask = id => {
    completeTask(id);
  };
  // task must have a completed field instead, here I remove from the list
  const completeTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    let reordered = updatedTasks.sort((a, b) => a.id - b.id);
    reordered = reordered.map((task, index) => {
      task.order = index;
      return task;
    });
    setTasks(reordered);
  };

  const getTaskStyle = (isDragging, draggableStyle) => ({
    boxShadow: isDragging ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : undefined,

    ...draggableStyle,
  });

  const reorderTasks = (list, fromIndex, toIndex) => {
    const taskListCopy = Array.from(list);
    const [removed] = taskListCopy.splice(fromIndex, 1);
    taskListCopy.splice(toIndex, 0, removed);

    taskListCopy.forEach((task, index) => {
      task.order = index;
    });
    return taskListCopy;
  };

  const tasksByProject = (
    <Box pb={2}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <section {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                //draggableId needs to be a String
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getTaskStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <TaskItem
                        task={task}
                        handleComplete={handleCompleteTask}
                      />
                      {/* <TodoistTaskItem handleComplete={handleCompleteTask} /> */}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
  return tasksByProject;
};

export default TasksList;
