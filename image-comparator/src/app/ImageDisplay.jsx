// 'use client'
// const fs = require('fs')
// import * as fs from 'fs'
// import DIR from './directory_used.js'

// const folder = fs.readFileSync(DIR)
// for (let file in folder) {
//     import(file)
// }
// import imageImport from './imageImport';
import FileSelect from './FileSelect';
import LocalFileReader from './LocalFileReader';
import image1 from '../../public/GDCEE9JXAAA-AAT.jpg';
import image2 from '../../public/GDCEE9JXAAA-AAT copy.jpg'
import React, {useState, useEffect, useRef} from "react"

// const files = new FileSystemDirectoryHandle.entries()

// const images = [[image1, image2],[image2, image1]]
// let imageIndex = 0
// let versionIndex = 0

let hasEventListener = false

const ImageDisplay = () => {
    // function delay() {
    //     setTimeout(() => {
    //         console.log("hello world")
    //     }, 10000)
    // }
    const fileReader = new LocalFileReader()
    const dir = fileReader.getDirectoryHandle("/")
    // await delay()
    dir.then((resolve, reject) => {
        resolve()
    })
    useEffect(() => {
        if (!hasEventListener) {

            document.addEventListener("keydown", (e) => {
                imageToggle(e)
            })
            // document.addEventListener("keyup", (e) => {
            //     keyDown = false
            // })
            hasEventListener = true
            // const [fileHandle] = window.showOpenFilePicker() 
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
    const [images, setImages] = useState([[image1, image2],[image1, image2]])

    // const images = useEffect(() => {
    //     imageImport(0)
    // }, [imageIndex])
    // const [images, setImages] = useState([[image1, image2]])

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
        // setImages()
    }
    
    const toggleRight = () => {
        let newIndex = imageIndex + 1
        if (newIndex >= images.length) {
            newIndex = 0
        }
        setImageIndex(newIndex)
    }

    // async function findImages() {
    //     setImages(images, )
    // }
    // const loadImages = () => {

    // }


    return <div>
    <img width="20%" src={images[imageIndex][versionIndex].src}></img>
    <FileSelect />
        </div>
}


export default ImageDisplay