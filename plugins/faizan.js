const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "Marco",
    alias: ["Malik"],
    desc: "Marco Malik full introduction",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const min = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        const text = `
👑 ╔════════  👑  ════════╗ 👑
       ✨ 𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 ✨
👑 ╚════════  👑  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 👑 *𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 IDENTITY*
   ┃ 📜 𝐍𝐚𝐦𝐞  : 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
   ┃ 🎭 𝐍𝐢𝐜𝐤  :  𝙼𝙰𝙻𝙸𝙺 𝙺
   ┃ 🎂 𝐀𝐠𝐞   : 18
   ┃ 🧬 𝐂𝐚𝐬𝐭𝐞 : 𝙳𝚁𝙸𝚂𝙷𝙰𝙺 
   ┃ 🌍 𝐋𝐨𝐜   : ᴘᴀᴋɪsᴛᴀɴ (P.R.P)
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *BOT EMPIRE DETAILS*
   ┃ 🤖 𝐁𝐨𝐭   : 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
   ┃ 👤 𝐎𝐰𝐧𝐞𝐫 : 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
   ┃ 📞 𝐂𝐚𝐥𝐥  : +923706328012
   ┃ ⚙️ 𝐌𝐨𝐝𝐞  : ᴘᴜʙʟɪᴄ
   ┃ 🔌 𝐓𝐲𝐩𝐞  : ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

🛡️ ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚡ *SYSTEM STATUS*
   ┃ ⏳ 𝐔𝐩𝐭𝐢𝐦𝐞  : ${h}h ${min}m ${sec}s
   ┃ 💻 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: ${os.platform()}
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});

