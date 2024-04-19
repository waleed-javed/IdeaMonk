import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import DummyTasks from './DummyTasks';
import { Task, TaskCategoryRecordType } from '@/lib/types';

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// context type definition
interface TaskContextType {
  tasks: Task[];
  searchQuery: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onItemPressedToggleStatusCompleted: (id: string) => void;
  onDelete: (id: string) => void;
  getTasksCategorically: (tasks: Task[]) => TaskCategoryRecordType;
  onSearch: (searchTerm:string) => void;
}

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// context init
const TaskContext = createContext<TaskContextType>({

    // states
    tasks: [], 
    searchQuery: '', 
    
    // methods
    setTasks: () => {},
    setSearchQuery: () => {},
    
    // other functionality
    onItemPressedToggleStatusCompleted: () => {},
    onDelete: () => {},
    getTasksCategorically: categorizeTasks,
    onSearch: (searchTerm:string) => {},
});

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// Tasks Provider
const TaskContextProvider = ({ children }: PropsWithChildren) => {

  // ================================================
  // ================================================
  // states
  // ================================================
  // ================================================
  
  const [tasks, setTasks] = useState<Task[]>(DummyTasks);
  const [searchQuery, setSearchQuery] = useState('');


  // ================================================
  // ================================================
  // extended functionality
  // ================================================
  // ================================================

  function onItemPressedToggleStatusCompleted(id: string) {
    setTasks((currentTask) => {
      const updatedTask = [...currentTask];
      const index = updatedTask.findIndex((task) => task.id === id);
      updatedTask[index].isFinished = !updatedTask[index].isFinished;
      return updatedTask;
    });
  }

  function onDelete(id: string) {
    setTasks((currentTask) => {
      const updatedTask = [...currentTask];
      const index = updatedTask.findIndex((task) => task.id === id);
      updatedTask.splice(index, 1);
      return updatedTask;
    });
  }

  function onSearch() {
    if (searchQuery === '') {return;}
    setTasks((currentTask)=>{
        const updatedTask = [...currentTask];
        const searchedTasks = updatedTask.filter((task) => task.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase()));
        console.log(searchedTasks);
        return searchedTasks;
    });
  }



  // =================================================   
  // =================================================   
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        searchQuery,
        setSearchQuery,
        onItemPressedToggleStatusCompleted,
        onDelete,
        getTasksCategorically: categorizeTasks,
        onSearch
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;

// custom hook
export const useTask = () => useContext(TaskContext);



// ===============================================================================================
// ===============================================================================================
// extra functions
// ===============================================================================================
// ===============================================================================================

function categorizeTasks(tasks: Task[]): TaskCategoryRecordType {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Group tasks by date
  const categorizedTasks: TaskCategoryRecordType = {
    Today: [],
    Tomorrow: [],
    Upcoming: [],
    Backlog: [],
  };

  tasks.forEach((task) => {
    const taskDate = new Date(task.date);
    taskDate.setHours(0, 0, 0, 0);

    const timeDiff = Math.floor((taskDate.getTime() - today.getTime()) / (1000 * 3600 * 24)); //returns diff in integer value

    if (timeDiff === 0) {
      categorizedTasks['Today'].push(task);
    } else if (timeDiff === 1) {
      categorizedTasks['Tomorrow'].push(task);
    } else if (timeDiff > 1) {
      categorizedTasks['Upcoming'].push(task);
    } else {
      categorizedTasks['Backlog'].push(task);
    }
  });

  return categorizedTasks;
}
