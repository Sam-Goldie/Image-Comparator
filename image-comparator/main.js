const {BrowserWindow, app, session} = require("electron")

function createWindow() {
  const window = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    width: "100%",
    height: "100%",
    frame: true,
  })
  window.maximize()
  window.show()
  window.loadFile("comparator.html")
}

app.whenReady().then(() =>
  createWindow()
)