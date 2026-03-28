const config = require('../config')
const { cmd } = require('../command')
const path = require('path')
const fs = require('fs')

cmd({
pattern: "downloadmenu",
desc: "Download menu",
category: "download",
react: "📥",
filename: __filename
},

async (conn, mek, m, { from, reply }) => {

try {

let dec = `╭━━━〔 *Download Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🌐 *Social Media*
┃★│ • facebook [url]
┃★│ • mediafire [url]
┃★│ • tiktok [url]
┃★│ • twitter [url]
┃★│ • insta [url]
┃★│ • apk [app]
┃★│ • img [query]
┃★│ • tt2 [url]
┃★│ • pins [url]
┃★│ • apk2 [app]
┃★│ • fb2 [url]
┃★│ • pinterest [url]
┃★╰──────────────
┃★╭──────────────
┃★│ 🎵 *Music/Video*
┃★│ • spotify [query]
┃★│ • play [song]
┃★│ • audio [url]
┃★│ • video [url]
┃★│ • ytmp3 [url]
┃★│ • ytmp4 [url]
┃★│ • song [name]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊* ❣️
> ${config.DESCRIPTION}`

await conn.sendMessage(
from,
{
image:{ url: config.MENU_IMAGE_URL || "https://i.ibb.co/K8cFyfj/file-00000000b7607208b3cf2ed83cb20148.png" },
caption: dec
},
{ quoted: mek }
)

// audio send

const audioPath = path.join(__dirname, '../assets/menu.m4a')

if(fs.existsSync(audioPath)){

await conn.sendMessage(from,{
audio: fs.readFileSync(audioPath),
mimetype: "audio/mp4",
ptt: false
},{ quoted: mek })

}

}catch(e){

console.log(e)
reply("❌ Menu error")

}

})
