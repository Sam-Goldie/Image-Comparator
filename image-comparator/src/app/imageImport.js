// import DIR from "./directory_used"
// import fs from "fs"

async function imageImport(_imageIndex) {
    const images = await window.showOpenFilePicker()
    // fs.readdir(DIR, (e, files) => {
    //     files.forEach((file) => {
    //         images.push(file)
    //     })
    // })
    return images;
}

export default imageImport