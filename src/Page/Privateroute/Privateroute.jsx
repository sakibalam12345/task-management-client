import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";


const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }else{
       return 
    }
  
};

export default Privateroute;