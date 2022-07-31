import Eris = from 'eris';
import { token } from './config.json';

const client = new Eris(token, {
    intents: [
        "guilds",
        "guildMessages"
    ]
});

client.on("ready", () => { 
    console.log("Ready!"); 
});

client.connect(); 
