import path from "path";
import serve from "electron-serve";
import { app } from "electron";
import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  // single window

  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    movable: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegrationInWorker: true,
    },
  });

  mainWindow.webContents.on("before-input-event", (ev, input) => {
    if (input.control && input.key.toLowerCase() === "r") {
      ev.preventDefault();
    }
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home");
    mainWindow.maximize();
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.maximize();
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});
