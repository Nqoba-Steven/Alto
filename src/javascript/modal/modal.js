import { ipcMain, ipcRenderer } from 'electron';


function closeModal(){
    ipcRenderer.send('closeModal',null);
}
