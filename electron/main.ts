
import {app, BrowserWindow} from 'electron';
import * as url from 'url';
import * as path from 'path';
//import {zFileMain} from './zfile_main';

let main_window;

// Listen for the app to be ready
app.on("ready", () => {

//	new zFileMain;

	// create new window
	main_window = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});


	//  main_window.loadURL(url.format({
	//  	pathname: path.join(__dirname, "index.html"),
	//  	//protocal: "file:",
	//  	slashes: true
	// }));

	main_window.loadFile(path.join(__dirname, "../../index.html"));

	//main_window.loadURL(url.pathToFileURL(path.join(__dirname, "index.html")));

    main_window.webContents.openDevTools();
});

/*
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})
*/

delete process.env.ELECTRON_ENABLE_SECURITY_WARNINGS;
(<any>process.env.ELECTRON_DISABLE_SECURITY_WARNINGS) = true;
