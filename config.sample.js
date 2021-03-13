module.exports = {
	/* The token of your Discord Bot */
	token: "Nzg4NzkzNDU4NTc5MDc5MTgw.X9orJw.NWKPlLL0lqhQ417rcaLujPEnVOc",
	/* For the support server */
	support: {
		id: "788793458579079180", // The ID of the support server
		logs: "820230459178614806", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "n1-5KKWWqu5emaTJ7QoeN9EGxtJ3VvE-", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "820230459178614806", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "1111", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Atlanta | Open Source" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "591995848645279744", // The ID of the bot's owner
		name: "Disconnect user#5397" // And the name of the bot's owner
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Androz2091", // Founder's github account
		donate: "https://patreon.com/Androz2091" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Я {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "Я ламал стекло",
			type: "PLAYING"
		}
	]
};
