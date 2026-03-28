const config = require('../config')
const { cmd } = require('../command')
const path = require('path')
const fs = require('fs')

cmd({
pattern: "logomenu",
desc: "logo menu",
category: "logo",
react: "🎨",
filename: __filename
},

async (conn, mek, m, { from, reply }) => {

try {

let dec = `╭━━━〔 *👑 𝙼𝙰𝚁𝙲𝙾 LOGO MENU* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🎨 *Popular Logos*
┃★│ • .logo comic [text]
┃★│ • .logo dragon [text]
┃★│ • .logo naruto [text]
┃★│ • .logo thor [text]
┃★│ • .logo america [text]
┃★╰──────────────
┃★╭──────────────
┃★│ ✨ *Glow Logos*
┃★│ • .logo neon [text]
┃★│ • .logo paper [text]
┃★│ • .logo galaxy [text]
┃★│ • .logo glitch [text]
┃★╰──────────────
┃★╭──────────────
┃★│ 🌿 *Nature Logos*
┃★│ • .logo cloud [text]
┃★│ • .logo sand [text]
┃★│ • .logo fog [text]
┃★│ • .logo greenbrush [text]
┃★╰──────────────
┃★╭──────────────
┃★│ 🪵 *Material Logos*
┃★│ • .logo gold [text]
┃★│ • .logo silver [text]
┃★│ • .logo wood [text]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> 🧠 Example :
> .logo neon Marco
> .logo comic Malik

> 👑 Powered By *𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺*
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
