// import Store from 'electron-store'
const { isValidPosition } = require('./utils');
// import type { BrowserWindow } from 'electron'
// import Store from 'electron-store'
// import { isValidPosition } from './utils'

const defaults = {
  windowPosition: [-1, -1],
  windowSize: [800, 600],
}

const getWindowPosition = () => {
  // const size = config.get('windowSize', defaults.windowSize)
  const size = defaults.windowSize;

  // let position = config.get('windowPosition', defaults.windowPosition)
  let position = defaults.windowPosition;
  // if (!isValidPosition(position)) {
  //   position = defaults.windowPosition
  // }

  return { position, size }
}

// export const recordWindowPosition = (window) => {
//   window.on('close', () => {
//     config.set('windowPosition', window.getPosition())
//     config.set('windowSize', window.getSize())
//   })
// }

// const config = new Store({ defaults })

module.exports = {getWindowPosition, defaults}
