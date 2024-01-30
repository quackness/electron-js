const { contextBridge, ipcRenderer } = require('electron');
//move data from cemera window to main process, next step will be to move it to window 1
contextBridge.exposeInMainWorld('electronAPI', {
  sendImage: (data) => ipcRenderer.send('set-image', data)
});
