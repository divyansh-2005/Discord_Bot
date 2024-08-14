import { REST, Routes } from 'discord.js';
const TOKEN = "MTI3MTQyNzMwNzU2NzA1OTAxNA.GsEwQL.FUJVZPZCPRey7tJSLCO75nesQjSAyNGLq8f9x8"
const CLIENT_ID = "1271427307567059014"

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'create',
    description: 'creates a short URL'
  }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}