
import PropTypes from "prop-types";
import Button from "./Button";

const Header=({title,toggleForm,showForm})=>{
   return (
     <div style={CSS}>
       <h1>{title}</h1>
        <Button onClick={toggleForm} color={showForm ? "#cf1733" : "#52ac39"} text={showForm ? "Close" : "Add Task"}/>
      </div>
   )
 }

Header.defaultProps={
  title:"Task Tracker"
}

Header.propTypes={
   title:PropTypes.string.isRequired
}

const CSS={
  display:"flex",
  padding:"10px",
  justifyContent:"space-between",
  alignItems:"center"
}
export default Header
