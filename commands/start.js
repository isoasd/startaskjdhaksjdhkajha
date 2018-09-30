const Discord = require("discord.js");
// const ms = require("ms");

module.exports.run = async (bot, message, args) => {
if (!message.member.roles.find(r => r.name === "Scrim Staff")) return;
	let scrimlast3chan = message.guild.channels.find(`name`, "scrim-last3");
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: false
	})
	message.delete().catch(O_o=>{});
	scrimlast3chan.send("*El chat pronto se desbloqueará!*");
	let nficon = bot.user.displayAvatarURL;
	let negicon = message.author.displayAvatarURL;
	let todaysDate = new Date();
	let infoScrimEmbed = new Discord.RichEmbed()
	.setTitle("Fortnite Pro Elite SCRIM info", nficon)
	.addField("Organizada por:", message.author)
	.addField("Cargando contenido", "Cargue contenido presionando Listo para cargar contenido para que esté al 100%, luego presione cancelar.")
	.addField("Reglas:", "**Using C4, Clingers and Third Partying in top 10 are now allowed**!, please obey the rules while scrimming. Also please report players with !report, and do not publicly announce it.")
	.setFooter(`Match dirigido por ${message.author.username}`, negicon)
	.setTimestamp()
	.setColor(4702463);
	
	scrimlast3chan.send(infoScrimEmbed);

	const startTimeout = ms => new Promise(res => setTimeout(res, ms))
	
	await startTimeout(5000);
	
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})
	let starting = new Discord.RichEmbed()
	.setTitle("Esperando IDs de los servidores")
	.setFooter("Siguiente scrim en")
	.setTimestamp(new Date(Date.now() + 1000 * 60 * 30))
	.addField("Por favor ingrese los ultimos 3 digitos de su servidor!", "Dentro del juego puedes encontrar esto en la esquina superior izquierda de la pantalla.")
	.setColor(6812512);
	scrimlast3chan.send(starting);

	let gameinfo = new Discord.RichEmbed()
	.setTitle("Informacion de la partida")
	.setColor(6378143)
	.setDescription("Cargando...");
	scrimlast3chan.send(gameinfo);
}

module.exports.help = {
  name: "start"
}
