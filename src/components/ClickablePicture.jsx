import { useState } from "react"

const ClickablePicture =({img, imgClicked}) => {

    const [image, setImage] = useState(img)

    const handleClick = () => {
       
        image === img ? setImage(imgClicked) : setImage(img)
    }

    return (
        <div>
            <img src={image} onClick={handleClick} alt="person" />

        </div>

    )
}

export default ClickablePicture