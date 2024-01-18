'use client'
import https from "https"
import Image from 'next/image'
// import styles from './page.module.css'
// import imageToggle from './Image.jsx'
import ImageDisplay from "./ImageDisplay"
// import FileSelect from "./FileSelect"
import React from 'react'

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     handleToggle(e)
  //     this.forceUpdate()
  //   }) 
  // })
  // function handleToggle(e) {
  //   imageToggle(e)
  //   const [, updateState] = React.useState();
  //   const forceUpdate = React.useCallback(() => updateState({}), []);
  // }
  return (
    <>
        <ImageDisplay />
    </>
  )
}
