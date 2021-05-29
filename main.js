const { BrowserWindow, ipcMain, app } = require('electron');
const path = require('path')
const storage = require('electron-json-storage')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

function setDataStorage() {
  const defaultDataPath = storage.getDefaultDataPath()
  storage.setDataPath(defaultDataPath);
}

setDataStorage()

ipcMain.on('setItem', (_, item) => {
  storage.set('stats', item)
})

ipcMain.on('getItem', (event) => {
  const data = storage.getSync('stats')
  console.log('getData main')
  console.log(data)
  event.returnValue = data
})

app.whenReady().then(createWindow);
