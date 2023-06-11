import React from 'react'
import { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

function RGBColorPicker() {


  const [rValue, setRValue] = useState(0)
  const [gValue, setGValue] = useState(0)
  const [bValue, setBValue] = useState(0)


return (
    <div>
    <div className="single-data">
      <SingleColorPicker 
      name="R"
      color="r"
      value={rValue}
      onChange={e => setRValue(e.target.value) }
     />

     <SingleColorPicker
     name="G"
     color="g"
     value={gValue}
     onChange={e => setGValue(e.target.value)  }
    />

     <SingleColorPicker
     name="B" 
     color="b"
     value={bValue}
     onChange={e => setBValue(e.target.value)  }
    />
    </div>

    <div className="d-flex flex-row">
    <div className="rgb-box p-2" style={{
    width: "50px", 
    height: "50px",
    backgroundColor: `rgb(${rValue},${gValue},${bValue})`
    }}></div>
     <p className="p-2">rgb({rValue}, {gValue}, {bValue})</p>
    </div>
      </div>
      
  )
}

/* for square form
.square {
  height: 50px;
  width: 50px;
  background-color: #555;
}*/

export default RGBColorPicker
