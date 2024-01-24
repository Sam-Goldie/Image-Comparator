const path = require("path")
const fs = require("fs")
let versionIndex = 0
let imageIndex = 0
const UTIF = require('./UTIF.js')

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
    for (let i = versionIndex - 3; i < versionIndex + 3; i++) {
        let isCurrentImage = false
        if (i === versionIndex) {
            isCurrentImage = true
        }
        if (i < 0) {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][fileNames[imageIndex].length - 1 + i])], isCurrentImage)
        } else {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][i])], isCurrentImage)
        }    
    }
}

const toggleDown = () => {
    let newIndex = versionIndex - 1
    if (newIndex < 0) {
        newIndex = fileNames[imageIndex].length - 1
    }
    versionIndex = newIndex
    for (let i = versionIndex - 3; i < versionIndex + 3; i++) {
        let isCurrentImage = false
        if (i === versionIndex) {
            isCurrentImage = true
        }
        if (i < 0) {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][fileNames[imageIndex].length - 1 + i])], isCurrentImage)
        } else {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][i])], isCurrentImage)
        }    
    }
}

const toggleLeft = () => {
    let newIndex = imageIndex - 1
    if (newIndex < 0) {
        newIndex = fileNames.length - 1
    }
    imageIndex = newIndex
    if (versionIndex >= fileNames[imageIndex].length) {
        versionIndex = 0
    }
    for (let i = versionIndex - 3; i < versionIndex + 3; i++) {
        let isCurrentImage = false
        if (i === versionIndex) {
            isCurrentImage = true
        }
        if (i < 0) {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][fileNames[imageIndex].length - 1 + i])], isCurrentImage)
        } else {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][i])], isCurrentImage)
        }    
    }
}

const toggleRight = () => {
    let newIndex = imageIndex + 1
    if (newIndex >= fileNames.length) {
        newIndex = 0
    }
    imageIndex = newIndex
    if (versionIndex >= fileNames[imageIndex].length) {
        versionIndex = 0
    }
    for (let i = versionIndex - 3; i < versionIndex + 3; i++) {
        let isCurrentImage = false
        if (i === versionIndex) {
            isCurrentImage = true
        }
        if (i < 0) {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][fileNames[imageIndex].length - 1 + i])], isCurrentImage)
        } else {
            UTIF.replaceIMG([path.join(imageDirectory, folderNames[imageIndex], fileNames[imageIndex][i])], isCurrentImage)
        }
    }
}

document.addEventListener("keydown", (e) => {
    imageToggle(e)
})