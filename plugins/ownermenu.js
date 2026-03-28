const config = require('../config')
const { cmd } = require('../command')
const path = require('path')
const fs = require('fs')

cmd({
pattern: "ownermenu",
desc: "Owner menu",
category: "owner",
react: "👑",
filename: __filename
},

async (conn, mek, m, { from, reply }) => {

try {

let dec = `╭━━━〔 *Owner Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ ⚠️ *Restricted*
┃★│ • block @user
┃★│ • unblock @user
┃★│ • fullpp [img]
┃★│ • setpp [img]
┃★│ • restart
┃★│ • shutdown
┃★│ • updatecmd
┃★╰──────────────
┃★╭──────────────
┃★│ ℹ️ *Info Tools*
┃★│ • gjid
┃★│ • jid @user
┃★│ • listcmd
┃★│ • allmenu
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊* ❣️
> ${config.DESCRIPTION}`

await conn.sendMessage(
from,
{
image:{ url: config.MENU_IMAGE_URL || "https://i.ibb.co/K8cFyfj/file-00000000b7607208b3cf2ed83cb20148.png" },
caption: dec,
contextInfo:{
mentionedJid:[m.sender],
forwardingScore:999,
isForwarded:true,
forwardedNewsletterMessageInfo:{
newsletterJid:"120363424512151830@newsletter",
newsletterName:"𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺",
serverMessageId:143
}
}
},
{ quoted: mek }
)


// audio send

const audioPath = path.join(__dirname, 'https://files.catbox.moe/j7kepx.mpeg')

if(fs.existsSync(audioPath)){

await conn.sendMessage(from,{
audio: fs.readFileSync(audioPath),
mimetype: "https://files.catbox.moe/j7kepx.mpeg",
ptt: false
},{ quoted: mek })

}

}catch(e){

console.log(e)
reply("❌ Menu error")

}

})


