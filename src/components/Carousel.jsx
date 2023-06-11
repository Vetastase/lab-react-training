import { useEffect, useState } from 'react'

function Carousel({images}) {

  const [index, setIndex] = useState(0)

  function clickBackward(){
    setIndex((index - 1 + images.length) % images.length)
  }

  function clickForward(){
    setIndex((index + 1) % images.length)
  }

  useEffect(() => {
  }, [index])

  return (
    <div>

        <button onClick={() => clickBackward()}>Back</button>
        <img src={images[index]} style={{width: "300px", height: "300px"}} alt="" />
        <button onClick={() => clickForward()}>Front</button>

    </div>
  )
}

export default Carousel