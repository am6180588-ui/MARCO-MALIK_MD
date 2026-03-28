const axios = require("axios")
const config = require("../config")

module.exports = async (conn, m) => {

try {

if (!global.AI_CHATBOT) return
if (!m.body) return
if (m.key.fromMe) return
if (m.body.startsWith(config.PREFIX)) return

let text = m.body

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents: [
{
parts: [
{
text: `You are 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺 AI Assistant.

User: ${text}

Always end reply with:
Powered by 𝙼𝙰𝚁𝙲𝙾 𝙼𝙰𝙻𝙸𝙺`
}
]
}
]
}
)

let reply = res.data.candidates[0].content.parts[0].text

await conn.sendMessage(
m.chat,
{ text: reply },
{ quoted: m }
)

} catch (e) {
console.log(e)
}

}
