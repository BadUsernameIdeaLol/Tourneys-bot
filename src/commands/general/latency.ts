import { Interaction, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import * as config from "../../config.json"

export default {
    category: "General",
    description: "Replies with API latency ping",
    aliases: ["API_ping"],

    slash: "both",

    ownerOnly: false,
    testOnly: false,

    callback: ({ client }) => {
        const embed = new MessageEmbed()
            .setDescription(`📡 **Pong!** - ${Math.round(client.ws.ping)}ms`)
            .setColor(`#${config.color}`)
        return embed
    }
} as ICommand