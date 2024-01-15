import image1 from '../../public/GDCEE9JXAAA-AAT.jpg';
import image2 from '../../public/GDCEE9JXAAA-AAT copy.jpg'
import React, {useState, useEffect, useRef} from "react"

// const images = [[image1, image2],[image2, image1]]
// let imageIndex = 0
// let versionIndex = 0

let hasEventListener = false

const ImageDisplay = () => {

    useEffect(() => {
        if (!hasEventListener) {

            document.addEventListener("keydown", (e) => {
                imageToggle(e)
            })
            // document.addEventListener("keyup", (e) => {
            //     keyDown = false
            // })
            hasEventListener = true
        }
    }, [])
    // useEffect(() => {
    //   document.addEventListener("keydown", (e) => {
    //     if (!keyDown) {
    //         imageToggle(e)
    //         keyDown = true
    //     }
    //   })
    //   document.addEventListener("keyup", (e) => {
    //     keyDown = false
    //   })
    // })
    const [imageIndex, setImageIndex] = useState(0)
    const [versionIndex, setVersionIndex] = useState(0)
    const [images, setImages] = useState([[image1, image2]])

    const imageRef = useRef({})
    const versionRef = useRef({})
    imageRef.current = imageIndex
    versionRef.current = versionIndex

    // function handleToggle(e) {
    //   imageToggle(e)
    //   const [, updateState] = React.useState();
    //   const forceUpdate = React.useCallback(() => updateState({}), []);
    // }
    
    const imageToggle = (e) => {
        switch(e.key.toUpperCase()) {
            case "W":
                toggleUp()
                break
            case "S":
                toggleDown()
                break
            case "A":
                toggleLeft()
                break
            case "D":
                toggleRight()
                break
        }
    }
    const toggleUp = () => {
        let newIndex = versionRef.current + 1
        if (newIndex === images[imageIndex].length) {
            newIndex = 0
        }
        setVersionIndex(newIndex)
    }
    
    const toggleDown = () => {
        let newIndex = versionRef.current - 1
        if (newIndex < 0) {
            newIndex = images[imageIndex].length - 1
        }
        setVersionIndex(newIndex)
    }
    
    const toggleLeft = () => {
        let newIndex = imageIndex - 1
        if (newIndex < 0) {
            newIndex = images.length - 1
        }
        setImageIndex(newIndex)
    }
    
    const toggleRight = () => {
        let newIndex = imageIndex + 1
        if (newIndex >= images.length) {
            newIndex = 0
        }
        setImageIndex(newIndex)
    }

    return <div>
    <img src={images[imageIndex][versionIndex].src}></img>
        </div>
}


export default ImageDisplay