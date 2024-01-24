const fs = require("fs")
const path = require("path")

const dirPath = "./public/231116_165447_Plate"
const fileNames = fs.readdirSync(dirPath)
let folderIndex = 0
let i = 0
const buffer = []
for (let fileIndex = 0; fileIndex < fileNames.length; fileIndex++) {
    buffer.push(fileNames[fileIndex])
    if (i === 3 || fileIndex === fileNames.length - 1) {
        console.log("./public/test" + (folderIndex + 1))

        fs.mkdirSync(`./public/test${++folderIndex}`)
        while (buffer.length > 0) {
            console.log("whats in the buffer: " + JSON.stringify(buffer))

            const newItem = buffer.pop()
            console.log("new Item is: " + newItem)
            fs.copyFileSync(path.join(dirPath, newItem), path.join(`./public/test${folderIndex}`, newItem))
            i = 0
        }
    } else {
        i++
    }
}