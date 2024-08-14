import { Client, GatewayIntentBits } from 'discord.js';
const TOKEN = "MTI3MTQyNzMwNzU2NzA1OTAxNA.GsEwQL.FUJVZPZCPRey7tJSLCO75nesQjSAyNGLq8f9x8"

import axios from 'axios';

const client = new Client({ intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent ] });

async function getShortURL(url) {
        const res = await axios.post('http://localhost:8000/url',{url : url})
        const shortId = res.data.shortId
        const shortURL = `http://localhost:8000/url/${shortId}`
        return shortURL
}

client.on('messageCreate',async message => {
    if(message.author.bot) return;
    console.log(message.author);
    
    if(message.content.startsWith('create')){
        const url = message.content.split('create ')[1];

        if(!url) message.reply({content:"Please provide a URL after the 'create' command."})
            
        const shortURL = await getShortURL(url);
       
        if (shortURL) {
            message.reply({content:`Short URL for ${url} is ${shortURL}`});

        } else {
            message.reply({content:"There was an error creating the short URL."});
        }
    }
    else{
        message.reply({
            content: "Hi From Bot",
        })
    }
})

client.on('interactionCreate', (interaction) => {
    console.log(interaction);
    interaction.reply('Pong')
})

client.login(TOKEN)
