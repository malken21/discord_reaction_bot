const { Client, Intents} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const Config = require("./Config.json")
client.login(Config.TOKEN);
client.on('messageCreate', async message => {
  if (message.content.indexOf(`${Config.Message}`) != -1 && !message.author.bot) {
    for(var loop = 0;loop < Config.Reactions.length;loop ++){
      message.react(`${Config.Reactions[loop]}`);
    }
  }
})
client.on("ready", () => {
  console.log(`login!!\n${client.user.tag}`);
});