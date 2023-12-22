/* eslint-disable react/prop-types */
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import axios from "axios";
import { useEffect, useState } from "react";
import {CSS} from '@dnd-kit/utilities'
const Sortableuser = ({task})=>{
    const {attributes,transform,transition,listeners,setNodeRef} = useSortable({id: task._id});
    const style = {
        transition,
        transform : CSS.Transform.toString(transform)
    }
   return (
<div  className="card bg-base-100 shadow-xl" ref={setNodeRef} style={style} {...attributes} {...listeners} >
        <div className="card-body">
          <h2 className="font-semibold text-xl text-center">{task?.title}</h2>
          <p className="font-medium text-base">Description: {task?.description}</p>
          <p className="font-medium text-base">Deadline: {task?.deadline}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
   )     
   
}
const MyTask = () => {

  const [tasks, setTasks] = useState([]);

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
  const ondragend = (event)=>{
    console.log(ondragend,event)
    const {active,over} = event;
    if(active.id === over.id){
        return
    }
    setTasks(user=>{
        const oldindex = user.findIndex(user=> user._id === active.id)
        const newindex = user.findIndex(user=> user._id === over.id);
        return arrayMove(user,oldindex,newindex)
    })
  }

  return (
    <div className="ml-[300px]">
      <h2 className="mt-16 font-extrabold text-4xl underline ml-[300px] text-violet-600">
        My TASK
      </h2>
      <div className="grid grid-cols-3 gap-16 ">
      <div className="mt-20 lg:grid md:grid lg:grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-6 bg-violet-400 p-2">
        <h3 className="text-center font-semibold text-lg">To Do</h3>
        <DndContext collisionDetection={closestCenter} onDragEnd={ondragend}>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
         <Sortableuser key={task._id} task={task} ></Sortableuser>
        ))}</SortableContext></DndContext>
      </div>
      <div>ongoin</div>
      <div>completed</div></div>
    </div>
  );
};

export default MyTask;
