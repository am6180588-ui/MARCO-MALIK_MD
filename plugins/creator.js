const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "creator",
    alias: ["coder", "dev", "owner"],
    desc: "Show bot creator information",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {

        const ownerInfo = {
            name: "𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺",
            number: "+923706328012",
            photo: "https://i.ibb.co/K8cFyfj/file-00000000b7607208b3cf2ed83cb20148.png",
            bio: "Founder & Developer of 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺"
        };

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺 
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❀ 👑 𝐂𝐫𝐞𝐚𝐭𝐨𝐫:* ${ownerInfo.name}
*│❀ 📞 𝐍𝐮𝐦𝐛𝐞𝐫:* ${ownerInfo.number}
*│❀ 📝 𝐁𝐢𝐨:* ${ownerInfo.bio}
*│*
*│❀ 🤖 𝐁𝐨𝐭:* ${config.BOT_NAME}
*│❀ ⚡ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* ${config.VERSION || "5.0.5"}
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
`;

        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363424512151830@newsletter',
                    newsletterName: '𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("CREATOR ERROR:", err);
        reply(
`*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺 ⊱┈─̇─̣╌*
*│❌ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐄𝐫𝐫𝐨𝐫*
*│⏳ Please try again later*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
        );
    }
});
