import axios from "axios";
import { useEffect, useState } from "react";


const Mytask = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        const gettask = async ()=>{
          const res = await axios.get('http://localhost:3000/task')
          console.log(res.data);
          setTasks(res.data)
        };
        gettask();
    },[])
    console.log(tasks)
    return (
        <div className=" ml-[300px]">
            <h2 className="mt-16 font-extrabold text-4xl underline ml-[300px] text-violet-600">My TASK</h2>
            <div className="mt-20 lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-16 md:gap-6">
                {/* start */}
                
                <div className="grid grid-cols-1 gap-2">
                <h3 className="font-semibold text-xl text-center text-violet-500">TO DO</h3>
                {tasks.map(task=> <div className="border-2 border-violet-500 rounded-lg " key={task._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="font-semibold text-xl text-center">{task.title}</h2>
    <p className="font-medium text-base">Description :{task.description}</p>
    <p className="font-medium text-base">DeadLine :{task.deadline}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
                </div>)}
                </div>
  
  
                {/* end */}
                <div>
                    ongoing
                </div>
                <div>
                    completed
                </div>
            </div>
        </div>
    );
};

export default Mytask;