const { BrowserWindow, app } = require('electron');
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets/favicon.png'),
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true
    }
  });
  win.removeMenu()
  win.loadFile('index.html');
}

if (process.platform !== 'darwin') {
  const image = electron.nativeImage.createFromPath(
    app.getAppPath() + "/assets/favicon.icns"
  );
  app.dock.setIcon(image);
}

app.whenReady().then(createWindow);
