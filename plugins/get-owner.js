const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "👑", 
    desc: "Get bot owner contact",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME || "𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺";

        // vCard
        const vcard = 
`BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
ORG: 𝙼𝙰𝚁𝙲𝙾-𝙼𝙰𝙻𝙸𝙺;
TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}
END:VCARD`;

        // Styled caption message
        const caption = `
🛡️▬▬▬▬▬  ⚜️  ▬▬▬▬▬🛡️
      ♛ 𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 ♛
 🛡️▬▬▬▬▬  ⚜️  ▬▬▬▬▬🛡️

  👤 𝐎𝐰𝐧𝐞𝐫 : ${ownerName}
  📞 𝐂𝐨𝐧𝐭𝐚𝐜𝐭: ${ownerNumber}

  ✨ ────────────────── ✨
      𝓚𝓲𝓷𝓰 𝓞𝓯 𝓗𝓲𝓼 𝓦𝓸𝓻𝓵𝓭

> 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺
`;

        // Send styled text
        await conn.sendMessage(from, {
            text: caption
        }, { quoted: mek });

        // Send contact card (ONLY contact, no extra data)
        await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("OWNER CMD ERROR:", error);
        await conn.sendMessage(from, {
            text: "❌ Owner command error, please try again later."
        }, { quoted: mek });
    }
});

