const {ipcMain} = require('electron');

var obj = {
    MenuTemplate : [
        {
            label:"Debug",
            submenu:[
                {
                    label:"Relaunch",
                    click: ()=>{
                        ipcMain.emit('relaunch');
                    },
                    accelerator:"F5"

                },
                {
                    label:"Toggle Devetools",
                    click:()=>{
                        ipcMain.emit('toogleDevetools');
                        //ipcRenderer.send('toogleDevetools',null);
                    }
                },
            ],
        },
    ]
}

module.exports = obj;
