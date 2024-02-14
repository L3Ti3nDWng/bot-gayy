module.exports.run = async (client) => {
 
  client.poru.init(client)
  console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
 
    setInterval(() => {
      const statuses = [
        `;help`, `prefix: ;`
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setPresence({
        activities: [{
            name: `${status}`,
            type: 'LISTENING',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }],
        status: "idle",
      });
    }, 60000);

}