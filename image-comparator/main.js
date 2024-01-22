const {BrowserWindow, app, session} = require("electron")
const UTIF = require("./UTIF.js")
// const path = require("path")
// const fs = require("fs")

// const dataPath = app.getPath("userData")
// const prefPath = path.join(dataPath, "Preferences")
// const prefs = JSON.parse(fs.readFileSync(prefPath, "utf-8"));
// prefs.electron.devtools
// const userDataPath = app.getPath("userData");
// const prefPath = path.join(userDataPath, "Preferences");
// const prefs = JSON.parse(fs.readFileSync(prefPath, "utf-8"));
// prefs.electron.devtools = {
//   preferences: {
//     "InspectorView.splitViewState": JSON.stringify({
//       vertical: { size: 500 },
//       horizontal: { size: 500 },
//     }),
//     uiTheme: '"dark"',
//   },
// };
// fs.writeFileSync(prefPath, JSON.stringify(prefs));

function createWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    width: "100px",
    height: "80px",
    frame: true,
  })
  window.loadFile("comparator.html")
}

app.whenReady().then(() =>
  createWindow()
  // session.defaultSession.loadExtension(`%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions`)
)

// import Image from 'next/image'
// // import styles from './page.module.css'
// // import imageToggle from './Image.jsx'
// import ImageDisplay from "./src/app/ImageDisplay"
// import React, {useEffect} from 'react'

// export default function Home() {
//   // useEffect(() => {
//   //   document.addEventListener("keydown", (e) => {
//   //     handleToggle(e)
//   //     this.forceUpdate()
//   //   }) 
//   // })
//   // function handleToggle(e) {
//   //   imageToggle(e)
//   //   const [, updateState] = React.useState();
//   //   const forceUpdate = React.useCallback(() => updateState({}), []);
//   // }
//   return (
//         <ImageDisplay />
//   )
// }
