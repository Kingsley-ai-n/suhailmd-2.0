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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161750496";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_57_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqYnhCOWVmNzFtOXhDMjl1eTVtTDcyN1dTWjhNbU1DcEFUZndoeXQ4ci9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2dDFlLUZjb1JFT2lNWG5OelRTVFZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkOWRiZTEwLTZkNWYtNGVmZC1hMDBiLTdjNWE4ODcxYWNmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA5OSxcbiAgICAgIDIxNSxcbiAgICAgIDIwNixcbiAgICAgIDIxNSxcbiAgICAgIDEyNSxcbiAgICAgIDIzNSxcbiAgICAgIDIxMyxcbiAgICAgIDE4NixcbiAgICAgIDM3LFxuICAgICAgMjQ3LFxuICAgICAgMjE4LFxuICAgICAgODQsXG4gICAgICAyNTMsXG4gICAgICAyMTIsXG4gICAgICA4NCxcbiAgICAgIDE0NCxcbiAgICAgIDEwMyxcbiAgICAgIDEzNixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAyNTEsXG4gICAgICA4OCxcbiAgICAgIDE2MixcbiAgICAgIDEwMSxcbiAgICAgIDIyNixcbiAgICAgIDE1LFxuICAgICAgMTMsXG4gICAgICAxMCxcbiAgICAgIDExMSxcbiAgICAgIDcwLFxuICAgICAgMTk0LFxuICAgICAgOTksXG4gICAgICAyMDksXG4gICAgICAxMzMsXG4gICAgICA4LFxuICAgICAgMjMsXG4gICAgICA0MixcbiAgICAgIDQzLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzdBU01IWVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjE3NTA0OTY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDUwNTA0NjU2MjAwMzE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZXZ1cUlHRUpqdzBMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNiTlc5K053RjdPQlI2cjJ4WEhNV3BwdFZpVWRpVXZ2aWREL1NhS2Nta0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibFpaeDUzRzZtU21rV25EZ20zNUJmbW5qS1k1Szd0L2l1NWo2NjhtbGdMUGxyTnh1M0w1eTVXazNaU0VoUEtFVkVid2V4UWZpbkxsa0NPdFBlbHVvQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRFBEbDJYZkVGaHNBOWlqM2Y4RjN0VEFTN3duaEttWDNQNWxHSTJLQ3VvcWx0Sm5sS2VJSzRDWEtOSTVRR3hFRWoyZnpVMFdxU3Rlb2w5VTVVQXAvanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MTc1MDQ5NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1NzI2Mzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
