import FolderView, {useFileSystem, getFileText} from "react-local-file-system"
import React from 'react'

const FileSelect = () => {
    const { openDirectory, directoryReady, statusText, rootDirHandle } = useFileSystem()
    async function onFileClick(fileHandle) {
        console.log(fileHandle.name)
    }
    return directoryReady ? (
        <FolderView rootFolder={rootDirHandle} onFileClick={onFileClick} />
    ) : (
        <>
        <button onClick={openDirectory}>Open Directory</button>
        <p>{statusText}</p>
        </>
    )
}

export default FileSelect