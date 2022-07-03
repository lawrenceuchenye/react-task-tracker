
import {useState} from "react"

const Form=({onAddTask})=>{
   const [task,setTask]=useState("")
   const [date,setDate]=useState("")
   const [check,setCheck]=useState(false)

   const onSubmit=(e)=>{
    e.preventDefault();
    if(!task){
      alert("Please Add Task");
      return
    }

    let data={task,date,check};
    onAddTask(data);
    setCheck(false);
    setTask("");
    setDate("");
    setCheck(false);
   }
   return (
     <div style={{padding:"6px",display:"flex",justifyContent:"center",width:"100%",alignItems:"center"}}>
       <div style={{width:"100%",textAlign:"center",position:"relative"}}>
       <form onSubmit={(e)=>onSubmit(e)}>
          <label style={labelStyle}>Task</label><br />
          <input style={inputStyle} type="text" placeholder="Task" value={task} onChange={(e)=>setTask(e.target.value)}/><br />
          <label style={labelStyle}>Date</label><br />
          <input style={inputStyle} type="text" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)}/><br />
          <div>
             <label style={chkbxlabelStyle}>Reminder</label>
             <input style={chkbxStyle}  checked={check} type="checkbox" value={check} onChange={(e)=>setCheck(e.currentTarget.checked)}/>
          </div>
          <br />
          <input style={btnStyle} type="submit" value="save"/>
         </form>
        </div>
      </div>
   )
 }

const  labelStyle={
   fontWeight:"600",
   margin:"10px",
   fontSize:"20px",
   position:"relative",
   left:"-42%",
   marginLeft:"20px"
 }

const  chkbxStyle={
   fontWeight:"600",
   margin:"10px",
   fontSize:"20px",
   position:"relative",
   left:"-38%"
 }

const  chkbxlabelStyle={
   fontWeight:"600",
   margin:"10px",
   fontSize:"20px",
   position:"relative",
   left:"-38%"
 }

const inputStyle={
  width:"86%",
  margin:"10px",
  padding:"12px 10px"
}

const btnStyle={
  width:"89%",
  margin:"10px",
  padding:"12px 10px",
  background:"#000",
  color:"#fff",
  border:"none",
  borderRadius:"3px",
  fontSize:"24px",
  fontWeight:"600"
}

export default Form
