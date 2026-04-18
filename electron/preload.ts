import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  platform: process.platform,
  onNavigate: (callback: (url: string) => void) =>
    ipcRenderer.on("navigate", (_event, url) => callback(url)),
});
