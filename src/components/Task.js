
const Task=({task,onDelete,toggleReminder})=>{
   return(
     <div style={CSS} onDoubleClick={()=>toggleReminder(task.id)}>
        <div>
         <h3>{task.task}</h3>
         <p>{task.date}</p>
        </div>
       <div style={{marginRight:"10px",color:"red",cursor:"pointer",fontSize:"20px"}}>
          <i onClick={()=>onDelete(task.id)} className="fa fa-times"></i>
        </div>
      </div>
   )
 }

const CSS={
  padding:"8px 10px",
  borderRadius:"3px",
  backgroundColor:"#f4f4f4",
  margin:"10px",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
 }

export default Task
