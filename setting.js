const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With QADEER-KING Hear
SESSION_ID: process.env.SESSION_ID || "QADEER-KING ~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VpcnlCMXlWK3ZNaFFPbWlzMnpFeUZKS3V3ZzQxODROaS9UTXNQTWhXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblJHSTJyLzg5QXhBdTdlRGtaWnd5QVVjaDdjTmtKcVpjcEJQSHUvT2FpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TjdxTVBCRTR5K0JFT2xhS0NJRXF1OXIwUnFIZjc0Q0ZNZEN0eS9sQzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3L1VhNEFvZTJRV0FNTnhUOGFQbU9JUW5ydktQOFBqZ0MvSlRVZU5KNW4wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDS1pQSTkzbm9HdXRIQVFlSVg4VGVmRUV1ME91VGlCSi9RTGRRZ3c0MDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpvOXlXYzErcGJ5dHU3NGxadk1FbDVtZVRDbXpXMExDbzZqNEQxVWpLQ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENwM01MRmxyMFRtV0JLSXdMeVM5NHdOcUdNOUptZzV0Q1hpSEdjQ2Yzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTNWN25zVDFDYW5DNW5HMDJQQU1EdnlKdVBYWXJlM2E5RGJMeEQ3eEFFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwa1hiWm5Pbmg1UXBmNzlPUXVNbVJFWGhZZjRVNCtuZHJDbVc1ZEtveVRtTUdCYW9BQnpSSG50MEMxUktkYXlrT3JLUVNXNERHU3dkS2VaRTBoa2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImlCTGI4cVo4K3J0ZkErSXNHbmZEWlFlWVZ1bUYyZE9yL0toaXZSeWRVTjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRzVTQTRHUVAiLCJtZSI6eyJpZCI6IjkyMzM2OTQyMzUzMTo0MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1NjcwNjc2Mzk4OTA4ODo0MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BPMDhZWUhFTU83cHM4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imd1Z1I1R0lZNG9qZis2MW0wTDJ0bVhiYmtNSjVrVUJiYTZna1ZrejBGaDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1USXM1bFRnVlhyOHE5NStRMXlXbXFGOWhnMjF5aWIwTGlvNzZwWUVCOVMrVHU2QUlQV0lXandENnZ3UDA0N1Fxcll3TzhRYlJ6ZTY2a291Ui9rNUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0bndLTE4wOXIzejhqT3l1SlpDQkpiN1FKVGFNNmIwMXdYZmYvM3NkaERsWU5UNjZQUEMzc1h1d3prMVBVeDFKcW1lYUpEL3dXQnhjaWltRzBCZTloQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1NjcwNjc2Mzk4OTA4ODo0MEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUxvRWVSaUdPS0kzL3V0WnRDOXJabDIyNURDZVpGQVcydW9KRlpNOUJZZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUN3Z0QifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc2OTE3OTY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQvTyJ9",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QADEER-KING 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "QADEER-KING",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "QADEER-KING",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923369423531",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "QADEER-KING",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







