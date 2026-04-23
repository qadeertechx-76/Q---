const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "QADEER-KING ~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0YzZFJKYkZvb1MzbnIrYjBNWUhDYU1BdTFEUlgzS1ZBTktzRy93MURYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEJ4RVN2bG1ETnZiR1dxVitjMGpYdFlDM0VYNE5LN3pYY1NLTWxlaGRHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjJBRDQwRW1maGhhalJMTVdlTGtndjV5RHhPQThhaGRaVjg2dXNWa1VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVGdPOTBXNmIyeEx1SUVtQjlYdkg5TWlGSUxiQTEyaVFuL1h4bHNQdHk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCYS9lenJQTXZacnlNSjBGYnpvOE00L1Q3eHVzenJsQVBzU1dITU9WVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMzV2U1dnlMemViKys2RkdOTFhlOW01N0tHU21YN09wdG15amxWdjk1Vkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09QWkdSUHNzbXlqZW91dGNUU2NULy96TnMybVd4bFRBQ1I3UGVKT3hHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkpqZFIxVG9RZDJiL21MQ011U09TWXZJNGtOdU92MHFPeTlRMlBTSlhVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZFUUpJdWdUVDJiaTBjaHdlZkt3UDNMWlpaNmZmY1ZTOXl6TmJoQXhXRFR5dG1HODFYV04waXV6K1N3SVlrVTNjWEFSNnpxTWZIQURIUEFnSlZYUUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJFOTRQMHRxaFZQUU9GNzF6MFo0SUlGK0d3UXhqcUQ0M0NkUkpqKzAxUGhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODE1LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE1LCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkRYVFZaWVJEIiwibWUiOnsiaWQiOiI5MjMzNjk0MjM1MzE6NDFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTY3MDY3NjM5ODkwODg6NDFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUzA4WVlIRUk2SXA4OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJndWdSNUdJWTRvamYrNjFtMEwydG1YYmJrTUo1a1VCYmE2Z2tWa3owRmgwPSIsImFjY291bnRTaWduYXR1cmUiOiJlU2xtbWFMeHZBNXlRUUpUeDdLMFhrSnd5SG1WRXVmQTVOWkFYc2ZIc095ei83R1JDdkdFSE5VZWpabnJTZ0pWT0Y5QVEyTERIbERTUXZaQVk1OVdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVE1GdU41d2xZUFpaN016SGFmRnJ3MkRBeXlaVWlrV2J3aWNXS1JUcDBCWEZFQ3BQK2NoTllYK21nYkxtRS9xTk52d25mSWR0Qldmd0x0cGxYd1JhQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTY3MDY3NjM5ODkwODg6NDFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllMb0VlUmlHT0tJMy91dFp0QzlyWmwyMjVEQ2VaRkFXMnVvSkZaTTlCWWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lDd2dEIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NjkyNzc2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLdUYifQ==",
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







