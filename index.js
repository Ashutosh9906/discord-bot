const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv");
const { connectToMongoDB } = require('../short-url/connect');
const { default: mongoose } = require('mongoose');
dotenv.config();

// connectToMongoDB()
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log(err));

mongoose.connect(process.env.MONGO_URI)

const URL = require("./models/url");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", async (message) => {
    try {
        if (message.author.bot) return;
        if (message.content.startsWith("create")) {
            const url = message.content.split("create")[1];
            //console.log(message);
            await URL.create({
                username: message.author.username,
                redirectUrl: url,
            })
            return message.reply({
                content: "Generating Short Id for " + url,
            })
        }
        message.reply({
            content: "Hey there from Bot",
        })
    } catch(err) {
        console.log(err);
    }
});

client.on("interactionCreate", (interaction) => {
    // console.log(interaction);
    interaction.reply("pong!!");
})

client.login(process.env.BOT_TOKEN);