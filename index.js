const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("wou", { type: "WATCHING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}website`) {
 
        return message.channel.send("Deze server is gesponzerd door door https://dinanddegamersite.jouwweb.nl/ neem gerust een kijkje op de website!!");
    
    }


    if (command === `${prefix}help`) {
 
        return message.channel.send("Helaas is de help comando niet beschrikbaar");
    
    }


    if (command === `${prefix}command`) {
 
        return message.channel.send("Dit zijn de bot comands die we nu toe hebben in de server: !help | !website | !command | !youtube");
    
    }


    if (command === `${prefix}youtube`) {
 
        return message.channel.send("Welkom, als je nieuw bent, dan wist je misschien niet dat deze server een youtube-kanaal heeft. Elke week komt er een nieuwe video en update's. Dit was de laaste video: ||(Er zijn nu geen videos beschrikbaar op het kanaal)||");
    
    }
 

});

bot.login(process.env.token);