//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: @No.mp6" //ur yt chanel name
global.socialm = "GitHub: Arslan-Nasi" //ur github or insta name
global.location = "Pakistan, Karachi" //ur location

//new
global.botname = '#Death Not#' //ur bot name
global.ownernumber = ['923012995636'] //ur owner number, dont add more than one
global.ownername = '✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺' //ur owner name
global.websitex = "https://www.instagram.com/no.pm6?igsh=eWVyZjR5N2RlZWM2"
global.wagc = "https://www.instagram.com/no.pm6?igsh=eWVyZjR5N2RlZWM2"
global.themeemoji = '🪀'
global.wm = "No Name Tech Inc."
global.botscript = 'https://github.com/King-7869/DEVIL-CAT-V3.0' //script link
global.packname = "Sticker By ✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺"
global.author = "✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺\n\n+923012995636"
global.creator = "923012995636@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923012995636"] // Premium User

//channel id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '234,254,27' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
