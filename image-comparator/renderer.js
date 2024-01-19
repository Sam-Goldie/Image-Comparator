// const electron = require("electron")
// const {app} = remote
// 'public/GDCEE9JXAAA-AAT copy.jpg'
const path = require("path")
const fs = require("fs")
const { version } = require("os")
let versionIndex = 0
let imageIndex = 0
// const imageNames = fs.readdir("./public")
// setTimeout(() => {
//     console.log("done")
// }, 20000)

const fileNames = []
const imageDirectory = "./public"
const folderNames = fs.readdirSync(imageDirectory)
for (let i = 0; i < folderNames.length; i++) {
    const subFolder = fs.readdirSync(path.join(imageDirectory, folderNames[i]))
    fileNames.push(subFolder)
}

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
    let newIndex = versionIndex + 1
    if (newIndex === fileNames[imageIndex].length) {
        newIndex = 0
    }
    versionIndex = newIndex
    document.getElementById("display").src = path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][versionIndex])
}

const toggleDown = () => {
    let newIndex = versionIndex - 1
    if (newIndex < 0) {
        newIndex = fileNames[imageIndex].length - 1
    }
    versionIndex = newIndex
    document.getElementById("display").src = path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][newIndex])
}

const toggleLeft = () => {
    let newIndex = imageIndex - 1
    if (newIndex < 0) {
        newIndex = fileNames.length - 1
    }
    imageIndex = newIndex
    document.getElementById("display").src = path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][versionIndex])
}

const toggleRight = () => {
    let newIndex = imageIndex + 1
    if (newIndex >= fileNames.length) {
        newIndex = 0
    }
    imageIndex = newIndex
    document.getElementById("display").src = path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][versionIndex])

}

document.addEventListener("keydown", (e) => {
    imageToggle(e)
})