import { Interaction, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import * as config from "../../config.json"

export default {
    category: "General",
    description: "Replies with pong",

    slash: "both",
    
    ownerOnly: false,
    testOnly: false,

    callback: ({ message }) => {
        const embed = new MessageEmbed()
            .setDescription(`🏓 **Pong!** - ${Date.now() - message.createdTimestamp}ms`)
            .setColor(`#${config.color}`)
        return embed
    }
} as ICommand