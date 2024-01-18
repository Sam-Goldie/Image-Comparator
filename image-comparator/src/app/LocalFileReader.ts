class LocalFileReader implements FileSystemDirectoryHandle {
    constructor() {
        
    }
    kind: "directory";
    name: string;
    isSameEntry(other: FileSystemHandle): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions) {
        return new Promise<FileSystemDirectoryHandle>(() => {});
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) */
    getFileHandle(name: string, options?: FileSystemGetFileOptions) {
        return new Promise<FileSystemFileHandle>((resolve, reject) => {
        });
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/removeEntry) */
    removeEntry(name: string, options?: FileSystemRemoveOptions) {
        return new Promise<void>(() => {});
    }
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/resolve) */
    resolve(possibleDescendant: FileSystemHandle) {
        return new Promise<string[] | null>(() => {});
    }
}

export default LocalFileReader