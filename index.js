
const keep_alive = require('./server.js')
const { Client, version } = require('discord.js');
const TOKEN = (process.env.TOKEN);
const { 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Is Now Online`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[ Error ] Didn't Find Any Server : ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Error ] Didn't Find Any Role, Server Name: ${guild.name}` 
    
    if(interval < 60000) console.log(`\n[!!!] Enjoy Your Rainbow Roles`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

    bot.user.setPresence({
        status: 'online',
        activity: {
            name: 'สกิลปากระดับ 100',
            type: 'PLAYING',
        }
    })
})

keepAlive()
bot.login(TOKEN)


