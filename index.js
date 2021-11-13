const RPC = require('discord-rpc')
const richPresence = new RPC.Client({
     transport: "ipc"
    });

richPresence.on('ready', () => {
    richPresence.setActivity({
        details: "Something",
        state: "Something.",
        startTimestamp: new Date(),
        largeImageKey: "nameofimage",
        largeImageText: "Something..",
        smallImageKey: "nameofimage",
        smallImageText: "Something...",
        buttons: [
          {
             label: "Discord", url: "https://discord.gg/9v4PwRVYA6" 
             }
        ]
    })

    console.log("[SUCCESS]: Connected To RPC")
})

richPresence.login({
    clientId: "Client ID Of Rpc Application"
})
