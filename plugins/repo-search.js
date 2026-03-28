const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "srepo",
  desc: "Get GitHub repository full details",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply(
        "❌ Please provide a GitHub repository.\n\n" +
        "*Example:* `.srepo whatsapp-bot/baileys`"
      );
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl, {
      headers: {
        "User-Agent": "𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺"
      }
    });

    const msg = `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 ✨
         📂  𝐆𝐈𝐓𝐇𝐔𝐁  𝐑𝐄𝐏𝐎  📂
👑 ╚══════════  👑  ══════════╝ 👑

📦 *𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐘  𝐈𝐍𝐅𝐎*
┃ ◈ 📁 *Name:* ${data.name}
┃ ◈ 👤 *Owner:* ${data.owner.login}
┃ ◈ 📝 *Desc:* ${data.description || "No description available"}
┗━━━━━━━━━━━━━━━━━━━━━━━

📊 *𝐒𝐓𝐀𝐓𝐒  &  𝐀𝐂𝐓𝐈𝐕𝐈𝐓𝐘*
┃ ◈ ⭐ *Stars:* ${data.stargazers_count}
┃ ◈ 🍴 *Forks:* ${data.forks_count}
┃ ◈ 👀 *Watchers:* ${data.watchers_count}
┃ ◈ 📅 *Created:* ${new Date(data.created_at).toDateString()}
┃ ◈ 🔄 *Updated:* ${new Date(data.updated_at).toDateString()}
┗━━━━━━━━━━━━━━━━━━━━━━━

🌐 *𝐒𝐎𝐔𝐑𝐂𝐄  𝐋𝐈𝐍𝐊*
┃ ◈ 🔗 ${data.html_url}
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑴𝑨𝑹𝑪𝑶 𝑴𝑨𝑳𝑰𝑲 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

    await conn.sendMessage(from, { text: msg }, { quoted: m });

  } catch (error) {
    console.error("SREPO ERROR:", error);
    reply(
      "❌ *Failed to fetch repository details.*\n" +
      "Please check the repository name and try again later."
    );
  }
});

