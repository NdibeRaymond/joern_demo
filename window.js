const {BrowserWindow} = require('electron');
const { getWindowPosition} = require('./config');

const isMac = process.platform === 'darwin'


// todo: menu — include shift in zoom accelerators
const createWindow = async () => {
  const { position, size } = getWindowPosition()
  const window = new BrowserWindow({
    title: 'DEMO',
    // titleBarStyle: 'hiddenInset',
    // frame: isMac,
    // transparent: isMac,
    acceptFirstMouse: true,
    webPreferences: {
      contextIsolation: true,
    },
    width: size[0],
    height: size[1],
    x: position[0] === -1 ? undefined : position[0], // if it's `-1` then don't set and
    y: position[1] === -1 ? undefined : position[1], // let electron center it by default
    minWidth: 370,
    minHeight: 190,
  })

//   Window.updateWindowInfo(window)

  window.loadFile('index.html')

  return window
}

// const Window = {
//   updateWindowInfo: (window) => {
//     window.on('maximize', () => {
//       window.webContents.send('window-info', {
//         isMaximized: true,
//       })
//     })
//     window.on('unmaximize', () => {
//       window.webContents.send('window-info', {
//         isMaximized: false,
//       })
//     })
//   },
//   handleNewWindow: (window) => {
//     // open urls in external browser
//     const openExternal = (event, url) => {
//       if (url != window.webContents.getURL()) {
//         event.preventDefault()
//         shell.openExternal(url)
//       }
//     }
//     window.webContents.on('will-navigate', openExternal)
//     window.webContents.on('new-window', openExternal)
//   },
//   setupDevTools: async (window) => {
//     if (isDev) {
//       window.webContents.openDevTools()
//       try {
//         // todo:
//         // const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS]
//         // await installExtension(extensions, {
//         //   loadExtensionOptions: { allowFileAccess: true },
//         // })
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   },
//   disableRefresh: (window) => {
//     // until we don't have a custom menu
//     window.on('focus', () => {
//       electronLocalshortcut.register(
//         window,
//         ['CommandOrControl+R', 'CommandOrControl+Shift+R', 'F5'],
//         () => {},
//       )
//     })

//     window.on('blur', () => {
//       electronLocalshortcut.unregisterAll(window)
//     })
//   },
// }

// const getUrl = () =>
//   isDev
//     ? 'http://localhost:4242'
//     : `file://${path.join(app.getAppPath(), 'build/index.html')}`

// const getPreloadPath = () =>
//   path.resolve(app.getAppPath(), isDev ? './preload.js' : 'build/preload.js')

// const getIcon = () =>
//   process.platform === 'linux'
//     ? path.resolve(app.getAppPath(), 'build/icon.png')
//     : undefined

module.exports = {createWindow};
