import {useState} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [tasks,setTasks]=useState(
    [
      {
       id:"1",
       task:"Appointment",
       date:"April 1st,2022 at 5:00pm",
       reminder:false
      }
    ]
   );

  const [showForm,setShowForm]=useState(false);

  const toggleForm=()=>{
    setShowForm(!showForm);
  }

  const deleteTask=(id)=>{
    setTasks(
       tasks.filter(
         (task)=> task.id !== id
       )
    );
  }

  const onAddTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1;
    const newTask={id,...task};
    setTasks([...tasks,newTask]);
  }

  const toggleReminder=(id)=>{
   setTasks(
       tasks.map(
         (task)=> task.id === id ? {...task,reminder:!task.reminder} : task
       )
    );
   alert("reminder set");
  }

  return (
   <Router>
    <div className="App">
     <div style={{margin:"20px",padding:"10px",boxShadow:"0 0 3px grey",borderRadius:"3px",minHeight:"300px"}}>
       <Header title="Task Tracker" toggleForm={toggleForm} showForm={showForm}/>
        {showForm && <Form onAddTask={onAddTask}/>}
        <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/>
        <Routes>
           <Route path="/about" component={About} />
        </Routes>
       <Footer />
     </div>
    </div>
   </Router>
  );
}
export default App;
