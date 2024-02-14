require('colors');
const discord = require("discord.js");
const { Poru } = require("poru");
const { token } = require('./config.json');
const client = new discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
client.login(token).catch(e => console.log("No token provided"))
// Atreya#2401 [diwasatreya]

client.config = require("./config.json");
client.poru = new Poru(client, client.config.nodes,{
  spotify:{
  clientID:"5dd34211d34443cb9ea933572ad2d43f",
  clientSecret:"53e433c942d749b4bf594fac415b46ad",
  playlistLimit:5
   },
  apple:{
    playlistLimit:5
  }
  
})

console.clear()
console.log(`░█████╗░██╗░░██╗░█████╗░░█████╗░░██████╗░█████╗░██╗██████╗░░█████╗░██╗░░░██╗░██████╗`.cyan);
console.log(`██╔══██╗██║░░██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██║██╔══██╗██╔══██╗██║░░░██║██╔════╝`.cyan);
console.log(`██║░░╚═╝███████║███████║██║░░██║╚█████╗░██║░░╚═╝██║██████╔╝██║░░╚═╝██║░░░██║╚█████╗░`.cyan);
console.log(`██║░░██╗██╔══██║██╔══██║██║░░██║░╚═══██╗██║░░██╗██║██╔══██╗██║░░██╗██║░░░██║░╚═══██╗`.cyan);
console.log(`╚█████╔╝██║░░██║██║░░██║╚█████╔╝██████╔╝╚█████╔╝██║██║░░██║╚█████╔╝╚██████╔╝██████╔╝`.cyan);
console.log(`░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═════╝░░╚════╝░╚═╝╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═════╝░`.cyan);

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.categories = new discord.Collection();
client.slash = new discord.Collection();
client.cooldown = new discord.Collection();
['commands', 'events', 'slash', 'PoruEvent'].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

require('node:http')
  .createServer((_, res) =>
    res.end(
      `dznqqdz `,
    ),
  )
  .listen(8080);
