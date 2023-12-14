const pulkovoUrl = "192.168.100.194"
const moscowUrl = "192.168.100.9"
// const developUrl = "192.168.100.204"
const developUrl = process.env.REACT_APP_API_URL

// export const srcBaseUrl =  `http://${process.env.VITE_SOCKET_URL}:8080` //получение картинок, иконок
// export const wsUrl =  `ws://${process.env.VITE_SOCKET_URL}:23245` //веб сокет соединение


export const srcBaseUrl =  `http://${developUrl}:8080` //получение картинок, иконок
export const wsUrl =  `ws://${developUrl}:23245` //веб сокет соединение
