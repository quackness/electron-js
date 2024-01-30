window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

const { contextBridge, ipcRenderer } = require('electron');
//move data from cemera window to main process, next step will be to move it to window 1
contextBridge.exposeInMainWorld('electronAPI', {
  getImage: (callback) => ipcRenderer.on('get-image', callback),
  closeCameraWindow: () => ipcRenderer.send('close-camera-window'),
});


