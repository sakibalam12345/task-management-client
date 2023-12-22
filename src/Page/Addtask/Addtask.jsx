import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Addtask = () => {
    const { register, handleSubmit,reset, } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const res = await axios.post('https://task-management-server-kappa-hazel.vercel.app',data)
        .then(result=>{
            console.log(result.data)
            if(result.data.insertedId){
                reset(); 
                toast('Task added successfully'); 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className=" ml-[350px]">
            <h2 className="mt-16 font-extrabold text-4xl underline ml-[300px] text-violet-600">ADD TASK</h2>
            <div className="mt-32">
            <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex gap-10 mb-6">
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Title</span>
  </div>
  <input {...register("title")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</label>
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Deadline</span>
  </div>
  <input {...register("deadline")} type="date" placeholder="" className="input input-bordered w-full max-w-xs" />
 
</label></div>
<div className="ml-[200px]">
      <select {...register("priority")}
       className="select select-bordered w-full max-w-xs">
  <option disabled selected>Priority</option>
  <option value="Low">Low</option>
  <option value="moderate">moderate</option>
  <option value="high">high</option>
</select>
<label className="form-control w-[200px] ml-16">
  <div className="label">
    <span className="label-text">Description</span>
    
  </div>
  <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</label></div>
      <button className="btn block mt-10 ml-[320px]">Submit</button>
    </form>
            </div>
        </div>
    );
};

export default Addtask;