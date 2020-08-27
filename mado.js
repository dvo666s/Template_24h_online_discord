const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});


const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const settings = require("./config.json"); 

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'Fortnite' },})
  .then(console.log)
  .catch(console.error);
})

client2.on('ready', () => {
  client2.user.setPresence({ game: { name: 'Grand Theft Auto V' },})
  .then(console.log)
  .catch(console.error);
})

client3.on('ready', () => {
  client3.user.setPresence({ game: { name: 'Watch Dogs' },})
  .then(console.log)
  .catch(console.error);
})

const newLocal = 'Dayz';
client4.on('ready', () => {
  client4.user.setPresence({ game: { name: newLocal },})
  .then(console.log)
  .catch(console.error);
})

client5.on('ready', () => {
  client5.user.setPresence({ game: { name: 'Red Dead Redemption 2' },})
  .then(console.log)
  .catch(console.error);
})

client6.on('ready', () => {
  client6.user.setPresence({ game: { name: 'The Forest' },})
  .then(console.log)
  .catch(console.error);
})

client7.on('ready', () => {
  client7.user.setPresence({ game: { name: 'Minecraft' },})
  .then(console.log)
  .catch(console.error);
})

client8.on('ready', () => {
  client8.user.setPresence({ game: { name: 'overwatch' },})
  .then(console.log)
  .catch(console.error);
})

client9.on('ready', () => {
  client9.user.setPresence({ game: { name: 'Pubg Lite' },})
  .then(console.log)
  .catch(console.error);
})

client10.on('ready', () => {
  client10.user.setPresence({ game: { name: 'Outlast' },})
  .then(console.log)
  .catch(console.error);
})

client.login(settings.token);
client2.login(settings.token2);
client3.login(settings.token3);
client4.login(settings.token4);
client5.login(settings.token5);
client6.login(settings.token6);
client7.login(settings.token7);
client8.login(settings.token8);
client9.login(settings.token9);
client10.login(settings.token10);