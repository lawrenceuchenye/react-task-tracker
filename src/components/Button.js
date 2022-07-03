
import PropTypes from "prop-types";

const Button=({text,color,onClick})=>{
  /*const onClick=()=>{
   alert("clicked");
  }*/
  return (
    <button onClick={onClick} style={{letterSpacing:"2px",fontSize:"16px",fontWeight:"800",color:"white",border:"none",borderRadius:"3px",height:"50px",padding:"0px 10px",backgroundColor:color,}}>
      {text}
    </button>)
}

Button.defaultProps={
  text:"Text",
  onClick:PropTypes.func,
}

export default Button
