const { TOKEN, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client();
const ytdl = require('ytdl-core');

client.on('ready', async () => {
  client.user.setActivity(STATUS + "Mr.ReKo Up ")
  let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LIVE))
})

setInterval(async function() {
  if(!client.voice.connections.get(SERVER)) {
    let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LIVE))
  }
}, 20000)

client.login("NzczMTc2NTcwODM5NTY0MzU5.X6Fayw.Ym9zT5bN4LPUTPtLiDGITIOAQOk")
