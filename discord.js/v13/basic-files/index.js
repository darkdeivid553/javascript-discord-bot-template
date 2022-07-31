import { Client, Intents, Collection } from 'discord.js';
import { token } from './config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.Flags.GUILD_MESSAGES] })

client.commands = new Collection()

client.once('ready', () => {
  client.user.setActivity('activity', { type: 'PLAYING' })
})

client.login(token)
