const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  storageApi: {
    setItem: (item) => {
      console.log('bridge: ')
      console.log(item)
      ipcRenderer.sendSync('setItem', item);
    },
    getItem: () => {
      const res = ipcRenderer.sendSync('getItem');
      return res;
    }
  }
});
