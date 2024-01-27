const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  //mac users, alow the window to activate window there is no window 
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
//for mac users, keep the app icon in the task bar when closing the window
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})