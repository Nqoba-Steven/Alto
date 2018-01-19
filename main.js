const {app,BrowserWindow,Menu,ipcMain} = require('electron');
const url = require('url')
const {MenuTemplate} = require('./src/modules/util/MenuItems')
const path = require('path')

let win

let modal

const windowOptions = {
    title:"Alto",
    face : {
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
    }
}

const modalOptions = {
    frame:false,
    modal:true,
    width:400,
    height:400,
    face:{
        pathname:path.join(__dirname,'src/html/modal.html'),
        protocol : 'file',
        slashes: true
    }
}
function createWindow(){
    win = new BrowserWindow();
    win.loadURL( url.format(windowOptions.face))
       
    const menuBar = Menu.buildFromTemplate(MenuTemplate);
    Menu.setApplicationMenu(menuBar);   
}

function createModal(){
    modal = new BrowserWindow(modalOptions);
    modal.loadURL(url.format(modalOptions.face));
    win.isVisible(false);
}

function destroyModal(){
    if(modal!=null){
        modal.isVisible(false);
        modal.close();
        modal.destroy();
        modal = null;
    }
    win.isVisible(true);
}

function toogleDevetools(){
    win.webContents.toggleDevTools();
}
function relaunch(){
    app.quit();
    app.relaunch();
}

ipcMain.on('toogleDevetools',toogleDevetools);
ipcMain.on('relaunch',relaunch);
ipcMain.on('openModal',createModal);
ipcMain.on('closeModal',destroyModal);


app.on('ready',createWindow);
