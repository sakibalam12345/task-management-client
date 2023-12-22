/* eslint-disable react/prop-types */
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import axios from "axios";
import { useEffect, useState } from "react";

const SortableUser = ({ task }) => {
  const { attributes, listeners, setNodeRef } = useSortable({
    id: task._id,
  });

  return (
    <div
      className="card bg-base-100 shadow-xl"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className="card-body">
        <h2 className="font-semibold text-xl text-center">{task?.title}</h2>
        <p className="font-medium text-base">Description: {task?.description}</p>
        <p className="font-medium text-base">Deadline: {task?.deadline}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get("http://localhost:3000/task");
        console.log("Fetched tasks:", res.data);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    getTask();
  }, []);

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return; // Dropped outside the list
    }

    if (active.id === over.id) {
      return; // Dropped on the same list
    }

    const updatedTasks = arrayMove([...tasks], tasks.findIndex((task) => task._id === active.id), tasks.findIndex((task) => task._id === over.id));

    // Determine the destination list based on the ID of the over container
    if (over.id === "ongoing-container") {
      setOngoingTasks(updatedTasks);
    } else if (over.id === "completed-container") {
      setCompletedTasks(updatedTasks);
    } else {
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="ml-[300px]">
      <h2 className="mt-16 font-extrabold text-4xl underline ml-[300px] text-violet-600">
        My TASK
      </h2>
      <div className="grid grid-cols-3 gap-16 ">
        <div className="mt-20 lg:grid md:grid lg:grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-6 bg-violet-400 p-2">
          <h3 className="text-center font-semibold text-lg">To Do</h3>
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={tasks} strategy={horizontalListSortingStrategy}>
              {tasks.map((task) => (
                <SortableUser key={task._id} task={task} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <div id="ongoing-container" className="bg-violet-400 p-2">
          <h3 className="text-center font-semibold text-lg">On Going</h3>
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={ongoingTasks} strategy={horizontalListSortingStrategy}>
              {ongoingTasks.map((task) => (
                <SortableUser key={task._id} task={task} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <div id="completed-container" className="bg-violet-400 p-2">
          <h3 className="text-center font-semibold text-lg">Completed</h3>
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={completedTasks} strategy={horizontalListSortingStrategy}>
              {completedTasks.map((task) => (
                <SortableUser key={task._id} task={task} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
