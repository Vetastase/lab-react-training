import React from 'react'


function SingleColorPicker({ name, color,value, rvalue,bvalue,gvlaue, onChange }) {
  
  
  return (
    <div className="d-flex single-color"> {/* You can also use <> and </> for HTML wrapping!! */}
     {color==="r" &&
       <div className="single-box" style={{
        width: "50px", 
        height: "50px",
        backgroundColor: `rgb(${value} ,0,0)`,
      }}></div>
     }
       {color==="g" &&
       <div className="single-box" style={{
        width: "50px", 
        height: "50px",
        backgroundColor: `rgb(0 ,${value},0)`,
      }}></div>
     }
     {color==="b" &&
       <div className="single-box" style={{
        width: "50px", 
        height: "50px",
        backgroundColor: `rgb(0, 0, ${value})`,
      }}></div>
     }
    
        
        <div className="single-input">
        {name}:
        <input value={value} onChange={onChange} color={color} type="number" min={0} max={255} />
        </div>
        </div>
    )
}

export default SingleColorPicker
