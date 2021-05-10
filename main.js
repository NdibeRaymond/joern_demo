// const {app, BrowserWindow, ipcMain, Notification} = require('electron');
const path = require('path');
const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window');
// import { initIpc } from './ipc'

const isDev = !app.isPackaged;


function init() {

//   contextMenu()

  app.on('ready', () => {
    // initIpc()
    createWindow()
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  app.on('window-all-closed', () => {
    app.quit()
  })

  if (isDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })}
}

init()

// function createWindow(){
//   const win = new BrowserWindow({
//         width:800,
//         height:600,
//         backgroundColor:"black",
//         webPreferences: {
//             nodeIntegration: false,
//             worldSafeExecuteJavaScript: true,
//             // is a feature that ensures that 
//             // both your preload scripts and electron internal logic run in seperate contexts.
//             contextIsolation: true,
//             preload: path.join(__dirname, 'preload.js')
//         }
//     })

//     win.loadFile('index.html')
// }

// if (isDev){
// require('electron-reload')(__dirname, {
//  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// })}

// app.whenReady().then(createWindow)

// ipcMain.on('notify', (_, message)=> {
//     new Notification({title: "Notification", body: message}).show();
// })

