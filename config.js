const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348065083057";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_01_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFVQlFrdGJ4U1pBOXhpcmpFQ20vMWFtUVYwUTYwbXI0bzNWQ25KTEd6YWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpuNnJseVVJUU42UmtPN2U1cGs5WndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTIwODA0NzYtZTU4Mi00MzEwLTgzOTQtZjVmMTY0ZTY3MTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMzUsXG4gICAgICAxODUsXG4gICAgICAxMzcsXG4gICAgICAxNDksXG4gICAgICAxNTIsXG4gICAgICA3MCxcbiAgICAgIDc5LFxuICAgICAgODEsXG4gICAgICAxOTEsXG4gICAgICAyMjEsXG4gICAgICAxNDcsXG4gICAgICAxNzgsXG4gICAgICAyMTUsXG4gICAgICA2MyxcbiAgICAgIDEzNyxcbiAgICAgIDI1MyxcbiAgICAgIDI1MyxcbiAgICAgIDI0MSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMTI3LFxuICAgICAgODksXG4gICAgICAxNSxcbiAgICAgIDkzLFxuICAgICAgMjYsXG4gICAgICA2NyxcbiAgICAgIDE0NixcbiAgICAgIDc1LFxuICAgICAgMTE1LFxuICAgICAgMTA5LFxuICAgICAgMjI4LFxuICAgICAgMTIsXG4gICAgICA2MSxcbiAgICAgIDE0NCxcbiAgICAgIDQ3LFxuICAgICAgMTc3LFxuICAgICAgNzgsXG4gICAgICAxMTgsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVRYWjIxUDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjUwODMwNTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzAyOTE5NTQ5MTM1MDU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS3kreklRK0xuUXVnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRYRVhMcTcwR1dUbFJmT1U5RGttRzhCU2dEZGp2N1UvNXdxTnpaWU1tbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVExQNFpEZm1ydWN0YzRHaGZNVlY0dEpnZ3V6Vkt2TnpxR3VpbVgwTitDRTZTY1k1cVM3dlJXZDExZ2tKNDVlMjBNTmwxM2JwRU9uVmwvSzRVRXlLRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSzZpMllTSmFYN3YzZ2lTdDVPdzdROFY1WXgvWXp1bWVkQW1SZ205K0ZXV2NkMEpNY0JXcHp6MkFWTFpsWm9EbjloVmozK2pWZUh2NkZEazBlRkFJQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NTA4MzA1NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTY1Njk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzZJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYQzVFcng3R1BEenJqU0VTQTJVWW5PVFBGNTVsMHhmQWJPc09LVmczSHRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjg3OTMyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzE1NDg0Mzg4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
