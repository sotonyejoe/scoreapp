
import chelseaimg from "../Images/chelseaimg.png";
import "./Chelsea.css";



const Chelsea = ({scorechelsea}) => {
  
  return (
    <div className='chelsea-bg'>
      <div className='chelsea-text'>
     <p>{scorechelsea}</p>
     </div>
     <div className="chelsea-logo">
     <img src={chelseaimg}  />
     </div>
      
    </div>
  )
}

export default Chelsea
