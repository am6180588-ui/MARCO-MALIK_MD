const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "npm",
  desc: "Search for a package on npm.",
  react: '📦',
  category: "convert",
  filename: __filename,
  use: ".npm <package-name>"
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    // Check if a package name is provided
    if (!args.length) {
      return reply("Please provide the name of the npm package you want to search for. Example: .npm express");
    }

    const packageName = args.join(" ");
    const apiUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;

    // Fetch package details from npm registry
    const response = await axios.get(apiUrl);
    if (response.status !== 200) {
      throw new Error("Package not found or an error occurred.");
    }

    const packageData = response.data;
    const latestVersion = packageData["dist-tags"].latest;
    const description = packageData.description || "No description available.";
    const npmUrl = `https://www.npmjs.com/package/${packageName}`;
    const license = packageData.license || "Unknown";
    const repository = packageData.repository ? packageData.repository.url : "Not available";

    // Create the response message
    const message = `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 ✨
         📦  𝐍𝐏𝐌  𝐄𝐗𝐏𝐋𝐎𝐑𝐄𝐑  📦
👑 ╚══════════  👑  ══════════╝ 👑

🛠️ *𝐏𝐀𝐂𝐊𝐀𝐆𝐄  𝐃𝐄𝐓𝐀𝐈𝐋𝐒*
┃ ◈ 🔰 *Name:* ${packageName}
┃ ◈ 📄 *Info:* ${description}
┃ ◈ ⏸️ *Version:* ${latestVersion}
┃ ◈ 🪪 *License:* ${license}
┗━━━━━━━━━━━━━━━━━━━━━━━

🌐 *𝐑𝐄𝐒𝐎𝐔𝐑𝐂𝐄𝐒*
┃ ◈ 🪩 *Repo:* ${repository}
┃ ◈ 🔗 *Link:* ${npmUrl}
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑴𝑨𝑹𝑪𝑶 𝑴𝑨𝑳𝑰𝑲 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

    // Send the message
    await conn.sendMessage(from, { text: message }, { quoted: mek });

  } catch (error) {
    console.error("Error:", error);

    // Send detailed error logs to WhatsApp
    const errorMessage = `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐌𝐀𝐑𝐂𝐎 𝐌𝐀𝐋𝐈𝐊 ✨
         ⚠️  𝐒𝐘𝐒𝐓𝐄𝐌  𝐄𝐑𝐑𝐎𝐑  ⚠️
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *CRITICAL FAILURE DETECTED*
   ┃ 
   ┃ ❌ *𝐄𝐫𝐫𝐨𝐫:* ${error.message}
   ┃ 🕒 *𝐓𝐢𝐦𝐞:* ${new Date().toLocaleString()}
   ┃ 🛡️ *𝐒𝐭𝐚𝐭𝐮𝐬:* Investigating...
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💻 *𝐒𝐓𝐀𝐂𝐊  𝐓𝐑𝐀𝐂𝐄*
┏━━━━━━━━━━━━━━━━━━━━━━━
┃ 📜 ${error.stack || "No trace found in the archives."}
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Sultanat Ki Tameer Jari Hai...*
   ┃ 👑 𝙼𝙰𝚁𝙲𝙾 Is Fixing The Glitch!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑴𝑨𝑹𝑪𝑶 𝑴𝑨𝑳𝑰𝑲 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

    await conn.sendMessage(from, { text: errorMessage }, { quoted: mek });
    reply("An error occurred while fetching the npm package details.");
  }
});

