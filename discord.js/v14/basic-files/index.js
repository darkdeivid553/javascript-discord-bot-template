import { Client, GatewayIntentBits, Collection, ActivityType } from 'discord.js';
import { token } from './config.json';

const client = new Client({ intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent] })

client.commands = new Collection()

client.once('ready', () => {
  client.user.setActivity('activity', { type: Activity.Playing })
})

client.login(token)
