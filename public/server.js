//Discord
const Discord = require('discord.js');
const peeky   = new Discord.Client({  disabledEvents: ["TYPING_START"], disableEveryone: true  });

//DDBL
const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI("482945063282802698", process.env.DDBL_TOKEN);

//BLS
const BotList = require('botlist.space');
const bls = new BotList.Client({  id: "482945063282802698", botToken: process.env.BLS_TOKEN  });

//Music
const ytdl_discord = require('ytdl-core-discord');
const search       = require('youtube-search');
const ytdl         = require('ytdl-core');
const opus         = require('node-opus');

//Canvas
const Canvas  = require('canvas');
const request = require('request');

//Data
const Enmap = require("enmap");
peeky.userData = new Enmap({name: "userData"});
peeky.serverData = new Enmap({name: "serverData"});
peeky.channelData = new Enmap({name: "channelData"});
const Setting = require('./setting.json');

//Website
const http    = require('http');
const express = require('express');
const app     = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
  setInterval(() => { http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//Miscellaneous Packages
const fs         = require('fs');
const ms         = require('parse-ms');
const node_fetch = require('node-fetch');
const https      = require('https');

//Variables
var   EmbedColor            = 3093047  //3553599;
const AutoDeleteTime        = 250;
const DayMs                 = 86400000;
const WeekMs                = 604800000;  //7 Days
const MonthMs               = 2592000000;  //30 Days
const InactiveWipe          = MonthMs;
const InactiveTime          = (InactiveWipe  / ( 24 * 60 * 60 * 1000 ));
const ProfileBoosterTime    = (DayMs  / ( 60 * 60 * 1000 ));

//Sets and Arrays
const ErrorBag                = new Set();
const BannedUsers             = new Array();
const WebsiteCooldowns        = new Set();
const GainCooldown            = new Set();
const LimitedRolesCooldown    = new Set();
const RandomTreasuresCooldown = new Set();
const BadgeCheckCooldown      = new Set();
const CommandCooldown         = new Set();
const SetInviteCooldown       = new Set();
const ProfileCooldown         = new Set();  const ProfileCooldownMS = 5000;
const MusicCmdCooldown        = new Set();
const PeekyCmdCooldown        = new Set();
const ChannelCooldown         = new Set();  const ChannelCooldownMS   = 10000;
const RoleCooldown            = new Set();  const RoleCooldownMS      = 10000;
const EventCountdownCooldown  = new Set();
const MemberCounterCooldown   = new Set();
const GameLogsCooldown        = new Set();
const MessageLogCooldown      = new Set();
const DonorWallCooldown       = new Set();
const ReactionRolesCooldown   = new Set();
const TicketSystemCooldown    = new Set();
const ServerAgeCooldown       = new Set();
const RedditPostsCooldown     = new Set();
const ResponseCooldowns       = new Set();  const ResponseCooldownMS = 5000;
const FloodProtectionStrikes  = new Array();
const KarmaImages             = new Array();
const CheckedDataCreations    = new Set();
const QueuedSOSMessages       = new Set();
const ActiveMinigames         = new Set();
const CurrentlyPlaying        = new Set();
const CurrentlyStreaming      = new Set();
const ClearedNames            = new Set();
const FailedVoteChecks        = new Set();
const FailedDMs               = new Set();
const LoggedMessages          = new Set();
const ActivatedTicketSystems  = new Set();

//Image Assets
const TwitterIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Ftwitter.png?1555574745120";
const RedditIcon    = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Freddit.png?1555575444018";
const InstagramIcon = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Finstagram.png?1555615973963";
const DiscordIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdiscord.png?1558635704218";

const DarkField  = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdarkfield.png?1558421870621";
const LightField = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Flightfield.png?1558421869640";

const DefaultBackground = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground1.png?v=1575192820685";
const NoBackground      = "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2FNA%20Background.png?v=1563929199191"
const MainBackground    = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fpattern_fog.png?v=1576177447491";
const CoinImage         = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_coins.png?1543767999542";
const ExpImage          = "httpss://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fexp.png?v=1564224431507";
const LevelImage        = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_level.png?1541260281702";
const ChestImage        = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_chest.png?1541260288051";
const TreasureImage     = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Ftreasures.png?v=1568646809345";
const BadgesImage       = "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbadges.png?v=1564245176155";
const KarmaImage        = "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fkarma.png?v=1564244903816";
const XPImage           = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2FScreenshot_141.png?1543781509470";
const BackpackImage     = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_backpack.png?1546614356449";
const HollowImage       = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2FHollowImage.png";

const SupporterImage    = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fsupporter.png?1548194367244";
const PeekyStaffImage   = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fpeekystaff.png?1548824803415";
const ModeratorImage    = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fmoderator.png?1548824732338";
const VeteranImage      = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fveteran.png?1548951084956";
const BugCHunterImage   = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbugcatcher.png?1548261764050";
const ContributorImage  = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fcontributor.png?1548786864495";
const VoterImage        = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fvoter.png?1551541314431";
const GamblerImage      = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fgambler.png?v=1568922623251";
const CharityImage      = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fcharity.png?v=1568922627904";
const FashionImage      = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Ffashion.png?v=1568922621601";
const OwnershipImage    = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fownership.png?v=1568922631330";
const MedallistImage    = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fmedallist.png?v=1568900374609";
const MovieNighterImage = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fmovienighter.png?1553099659112";
const CelebratorImage   = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fcelebrator.png?v=1568900372214";
const PollerImage       = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpoller.png?1556170526097";
const PublisherImage    = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpublisher.png?1555782065115";
const PartyImage        = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fparty.png?1558040749323";
const HorderImage       = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fhorder.png?v=1568922626526";
const PainterImage      = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fpainter.png?v=1568922632764";
const MinerImage        = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fminer.png?v=1568922629305";
const BoosterImage      = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbooster.png?v=1568469682712";
const GamerImage        = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fgamer.png?v=1568922624710";
const EvilImage         = "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fevil.png?v=1564270118631";
const GoodImage         = "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fgood.png?v=1564346700581";
const GopbotImage       = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fgopbot.png?v=1568997070177";
const TranslatorImage   = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Ftranslator.png?v=1576920631134";
const UpgraderImage     = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fupgrader.png?v=1579693007838";

//Vote Emotes
const DefaultUpvote   = "529413730874949632";
const DefaultDownvote = "529413312862093322";

//Badge Emotes
const PeekyStaffEmote   = "<:peekystaff:540036337739366400>";
const ContributorEmote  = "<:contributor:539895189334917130>";
const SupporterEmote    = "<:supporter:539895190190686238>";
const BugHunterEmote    = "<:bugcatcher:539895189737832448>";
const ModeratorEmote    = "<:moderator:540036307213221901>";
const VeteranEmote      = "<:veteran:540565010972147724>";
const GamblerEmote      = "<:gambler:624330470825525248>";
const CharityEmote      = "<:charity:624330470515277853>";
const FashionEmote      = "<:fashion:624330470255099924>";
const VoterEmote        = "<:voter:551429736463859762>";
const OwnershipEmote    = "<:ownership:624330470796296202>";
const MedallistEmote    = "<:medallist:624237944890458123>";
const MovieNighterEmote = "<:movienighter:557968105494675456>";
const CelebratorEmote   = "<:celebrator:624237582355529729>";
const PollerEmote       = "<:poller:570845554758778880>";
const PublisherEmote    = "<:publisher:569215883109466143>";
const PartyEmote        = "<:party:578689336116248618>";
const HorderEmote       = "<:horder:624330470561153040>";
const PainterEmote      = "<:painter:624330470284460033>";
const MinerEmote        = "<:miner:624330470460620831>";
const BoosterEmote      = "<:booster:622431477384085514>";
const GamerEmote        = "<:gamer:624330470288654337>";
const EvilEmote         = "<:evil:604817305247023117>";
const GoodEmote         = "<:good:605138883138551838>";
const GopbotEmote       = "<:gopbot:624643543037771841>";
const TranslatorEmote   = "<:translator:657876886260809728>";
const UpgraderEmote     = "<:upgrader:669505308938207233>";

//Other Emotes
const ErrorIcon       = "<:peeky_error:529412267343872031>";
const SuccessIcon     = "<:peeky_success:529415084804669487>";
const InfoIcon        = "<:peeky_info:529412267746394133>";
const Hollow          = "<:peeky_hollow:506921440067452928>";
const WhiteSquare     = "<:peeky_white:529305474604990464>";
const TreasureIcon    = "<:treasure:623186257404755969>";
const GreditIcon      = "<:gredit:558673809343774720>";
const ChestIcon       = "<:chest:561511603305185280>";
const EnabledIcon     = "<:enabled:538295053940948993>";
const DisabledIcon    = "<:disabled:538295054431813662>";
const SettingsIcon    = "<:settings:586612320839532573>";
const RedditUpvote    = "<:RedditUpvote:620124949855600640>";
const RedditDownvote  = "<:RedditDownvote:620122348745523200>";
const OwnerTag        = "<:owner:543001955921035274>";
const BoostTag        = "<:boost:642647004056518665>";
const BotTag          = "<:bot:541014775468130336>";

//Role IDs
const StaffRole          = "494429609874685983";
const SupporterRole      = "504740473185894400";
const BoosterRole        = "620654437081415686";
const ServerUpgradeRole  = "549190337437106176";
const ProfileBoosterRole = "603249410532442116";
const RedeemRoleChests   = "505491936401162270";

//Other IDs
const OwnerId              = "108899856889737216";
const PeekyId              = "482945063282802698";
const SupportServer        = "319891596772638744";
const AnnouncementsChannel = "346710479407808524";
const EmojiStorage1        = "493048757286600716";
const WorkshopChannel      = "501130667078189066";
const ServerLogChannel     = "610672449738244102";

//Collab Bot IDs
const GopbotId = "458404920970969098";

//Server Message Tags
const GuildNameTag         = "[GuildName]";
const GuildSizeTag         = "[GuildSize]";
const GuildOwnerTag        = "[GuildOwner]";
const GuildVerificationTag = "[GuildLevel]";
const GuildAcronymTag      = "[GuildAcronym]";

//Strings
const AllString      = "all";
const RandomString   = "random";
const BadFormat      = "invalid";
const Exclusive      = "Exclusive";
const EnableStrings  = ["enabled", "zapnutá"];
const DisableStrings = ["disabled", "vypnutá"];

//Response Messages
const CooldownMessage1 = [ErrorIcon + " You are currently on a cooldown for that command.", ErrorIcon + " Tento příkaz je pro vás momentálně zastaven."];
const CooldownMessage2 = [ErrorIcon + " Automated channel creation is currently on a cooldown.", ErrorIcon + " Automatická tvorba kanálů je momentálně zastavena."];
const CooldownMessage3 = [ErrorIcon + " Automated role creation is currently on a cooldown.", ErrorIcon + " Automatická tvorba rolí je momentálně zastavena."];
const CooldownMessage4 = [ErrorIcon + " You are currently on a cooldown for that function.", ErrorIcon + " Tato funkce je momentálně zastavena."];

const PermissionsMessageError1 = [ErrorIcon + " You are lacking the required permissions do that.", ErrorIcon + " Chybý vám požadovaná oprávnění."];
const PermissionsMessageError2 = [ErrorIcon + " You need to be the owner of this server to do that.", ErrorIcon + " Musíte být vlastníkem serveru."];
const PermissionsMessageError3 = [ErrorIcon + " I am missing required permissions to do that.", ErrorIcon + " Chybý mi požadovaná opravnění."];

const ErrorMessage1  = [ErrorIcon + " You need more Gredit to do that.", ErrorIcon + " Potřebujete získat více Greditu."]
const ErrorMessage2  = [ErrorIcon + " The new description is too large.", ErrorIcon + " Nový popisek je příliš dlouhý."];
const ErrorMessage3  = [ErrorIcon + " The provided mention is invalid.", ErrorIcon + " Toto označení je invalidní."];
const ErrorMessage4  = [ErrorIcon + " You need to enter a valid YouTube link.", ErrorIcon + " Vložte validní YouTube odkaz."];
const ErrorMessage5  = [ErrorIcon + " You do not have that background in your inventory.", ErrorIcon + " Toto pozadí ještě nelastníte."];
const ErrorMessage6  = [ErrorIcon + " You do not have enough chests.", ErrorIcon + " Nemáte dost truhel."];
const ErrorMessage7  = [ErrorIcon + " The mentioned user has no profile.", ErrorIcon + " Tento uživatel nemá žádný profil."];
const ErrorMessage8  = [ErrorIcon + " Mentions are not allowed for this command.", ErrorIcon + " Označení nejsou pro tento příkaz povoleny"];
const ErrorMessage9  = [ErrorIcon + " You must enter a valid amount.", ErrorIcon + " Musíte vložit spravný počet."];
const ErrorMessage10 = [ErrorIcon + " Make sure the function's name is all in lowercase.", ErrorIcon + " Ujistěte se, že jméno funkce je v malých písmenkách."];
const ErrorMessage11 = [ErrorIcon + " You need to become a Supporter to do that.", ErrorIcon + " Pro tohle musíte být Supporter."];
const ErrorMessage12 = [ErrorIcon + " There are no songs playing right now.", ErrorIcon + " Momentálně nehrajou žádné písničky."];
const ErrorMessage13 = [ErrorIcon + " Something has gone unexpectedly wrong.", ErrorIcon + " Stalo se něco nečekaného"];
const ErrorMessage14 = [ErrorIcon + " You already own that ackground.", ErrorIcon + " Toto pozadí již vlastníte."];
const ErrorMessage15 = [ErrorIcon + " You cannot add any more songs to your playlist.", ErrorIcon + " Do vašeho playlistu nelze přidat více písniček"];
const ErrorMessage16 = [ErrorIcon + " That background doesn't exist.", ErrorIcon + " Toto pozadí neexistuje."];
const ErrorMessage17 = [ErrorIcon + " You need to specify the function.", ErrorIcon + " Musíte upřesnit funkci."];
const ErrorMessage18 = [ErrorIcon + " You need to provide valid arguments for the command.", ErrorIcon + " Musíte přidat spravný argumenty."];
const ErrorMessage19 = [ErrorIcon + " You need to join the Support Server.", ErrorIcon + " Musíte se připojit na můj server."];
const ErrorMessage20 = [ErrorIcon + " You need to upload a file.", ErrorIcon + " Musíte nahrát soubor."];
const ErrorMessage21 = [ErrorIcon + " You can only do that in upgraded servers.", ErrorIcon + " Tohle funguje jenom ve vylepšených serverech."];
const ErrorMessage22 = [ErrorIcon + " You need to join a voice channel.", ErrorIcon + " Musíte se připojt se do hlasového kanálu."];

const InfoMessage1 = [InfoIcon + " You have earned a new badge.", ErrorIcon + " Dostal jste nový odznak."];
const InfoMessage2 = [InfoIcon + " You have set the default background.", ErrorIcon + " Nastavil jste si základní pozadí."];

//Small Arrays
const Days                = [  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ];
const BlacklistedWebsites = [  "discord.gg", "discord.io", "discord.me", "twitch.tv", "bit.ly", "goo.gl", "youtu.be", "youtube.com", "twitter.com", "paypal.me", "paypal.com", "selly.gg", "tiny.cc", " evassmant.com", "urlzs.com"   ];
const VulgarPhrases       = [  "anal", "anus", "arse", "ass", "ballsack", "balls", "bastard", "bitch", "biatch", "bloody", "blowjob", "boner", "boob", "bugger", "bum", "butt", "buttplug", "clitoris", "cock", "coon", "crap", "cunt", "damn", "dick", "dildo", "dyke", "fag", "feck", "fellate", "fellatio", "felching", "fuck", "fudgepacker", "fudge", "packer", "flange", "Goddamn", "God", "damn", "hell", "homo", "jerk", "jizz", "knobend", "knob", "end", "labia", "lmao", "lmfao", "muff", "nigger", "nigga", "penis", "piss", "poop", "prick", "pube", "pussy", "queer", "scrotum", "sex", "shit", "sh1t", "slut", "smegma", "spunk", "tit", "tosser", "turd", "twat", "vagina", "wank", "whore", "wtf"  ];
const ImmuneServers       = [  SupportServer, EmojiStorage1, `454933217666007052`, `264445053596991498`, `330777295952543744`, `387812458661937152`, `374071874222686211`, `439866052684283905`, `534551489595703306`, `608711879858192479`, `603194252872122389`, `630460214235103253`  ];
const EmojiNumbers        = [  "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"  ];
const TextChannels        = [  "text", "news"  ];

//Small Objects
var Banner          = {  Source: 0,  Price: 1 ,  Name: 2 ,  Credit: 3,  RevenueID: 4, AddedDate: 5  };
var Languages       = [  "English",  "Čeština"  ]
var StreamOptions   = {  volume: 1  };
var SearchOptions   = {  maxResults: 1,  key: process.env.YT_TOKEN  };

const Banners = [

    [DefaultBackground, 0, "Default", "Vojtěch Jílovec", undefined, 0], //Default
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground2.jpg?1537950866619", 750, "Welcome to NYC", "The Division", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground3.jpg?1535302285990", 725, "Henry the knight", "Kingdom Come Deliverence", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground4.jpg?1535333614451", 750, "Fallout's garage", "Fallout 4", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground5.jpg?1537816491802", 575, "Encounter with Stalkers", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground6.jpg?1535285894346", 450, "The Whalers", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground7.jpg?1535290804866", 650, "Mysterious Man", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground8.jpg?1537816628115", 675, "Escape of noobs", "ROBLOX", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground9.jpg?1537888709532", 550, "The last crusade", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground10.jpg?1535334052918", 750, "The last of them", "The Last of Us", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground11.jpg?1535334267005", 675, "Birch Forest", "Minecraft", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground12.png?1537814782102", 850, "Epidemic", "Rainbow Six Sige", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground13.jpg?1537814934225", 950, "Hostage Situation", "Rainbow Six Sige", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground14.jpg?1537950866487", 625, "The province of Skyrim", "The Elder Scrolls 5 Skyrim", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground15.jpg?1535404090262", 650, "The silent assassin", "Dishonored", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground16.jpg?1535404088759", 750, "Out of this world", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground17.jpg?1537873790199", 725, "First bank robbery", "PAYDAY 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground18.jpg?1535481872824", 775, "The Saints", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground19.jpg?1535481874193", 675, "Secret burial", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground20.jpg?1535481872090", 625, "Kane and Lynch", "Kane and Lynch Dog Days", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground21.jpg?1535569846831", 500, "Helicopter escape", "SAS Zombie Assault 3", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground22.jpg?1535990062310", 425, "Tough welcome", "Killing Floor 1", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground23.jpg?1536565142261", 675, "Crashed helicopter", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground24.jpg?1536565143281", 700, "The horde", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground25.png?1536600827686", 750, "Abandoned city", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground26.jpg?1536603983804", 875, "The space", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground27.jpg?1536934121522", 750, "Lake of peace", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground28.jpg?1536934103891", 725, "King Slime", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground29.png?1537047514422", 425, "Gladiator fights", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground30.jpg?1537814773898", 400, "Ambush", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground31.jpg?1537815016132", 425, "Red pattern", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground32.jpg?1537950866063", 850, "Close Cry", "Far Cry 4", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground33.jpg?1537950866386", 750, "Dark knight", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground34.jpg?1539510881741", 350, "Orc genocide", "The Elder Scrolls 5 Skyrim", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground35.jpg?1539518504422", 250, "Village raid", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground36.jpg?1539518559631", 420, "M e m e ­ H o u s e", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground37.png?1539543378623", 825, "Supply royale", "Player Unknown's Battle Royale", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground38.png?1539546582730", 275, "Counter attack", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground39.jpg?1539623688927", 775, "Into the battle", "Guild Wars 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground40.jpg?1539879968743", 425, "Cool ferrets", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground41.png?1558777240101", 375, "You right now", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground42.jpg?1539871005083", 850, "Father and daughter", "Dishnored 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground43.jpg?1539885633665", 350, "Lit up forest", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground44.jpg?1539885633627", 375, "Chill lake", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground45.jpg?1539885635308", 450, "Fire forest", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground46.jpg?1540021324998", 650, "Pepe's sky", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground47.jpg?1540027329670", 775, "Lost world", "Fornite", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground48.jpg?1540033276474", 325, "Dragon slayer", "The Elder Scrolls 5 Skyrim", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground49.jpg?1540033274127", 475, "Rush", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground50.png?1540650384768", 400, "USSR", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground51.jpg?1540107026526", 625, "Lizard Wizard", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground52.jpg?1540309332233", 450, "Left unturned", "Unturned", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground53.jpg?1540106992532", 675, "Home invasion", "Telltale's The Walking Dead", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground54.jpg?1540132038895", 650, "Dungeon explorers", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground55.jpg?1540132031244", 800, "Realm of peace", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground56.jpg?1540133298644", 750, "Lonely Stalker", "S.T.A.L.K.E.R.", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground57.png?1540135651911", 500, "Darkest knight", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground58.jpg?1540135654277", 775, "Dragon fighter", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground59.jpg?1540135656509", 875, "Lost giants", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground60.jpg?1540135658192", 800, "Ragnarok", "Thor Ragnarok", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground61.jpg?1540143872268", 875, "World full of fantasy", "Darksiders 3", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground62.png?1540150284329", 925, "Cyberpunk", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground63.jpg?1540151664457", 650, "Survival of the fittest", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground64.jpg?1540152341562", 825, "The Ranger", "Fallout New Vegas", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground65.jpg?1540153114935", 800, "Dungeon keep", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground66.jpg?1540238680343", 875, "Clear view", "Dying Light", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground67.jpg?1540238738204", 725, "Silent thief", "Thief", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground68.jpg?1540239775507", 950, "Mighty assassin", "Assassins Creed Odyssey", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground69.png?1540240323226", 825, "Power armor", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground70.jpg?1540240540188", 875, "Horse poker", "A Song of Ice and Fire", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground71.png?1540240626824", 775, "War never changes", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground72.png?1540309268628", 825, "Peace and calm", "Unknown", undefined, 0],  
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground73.jpg?1540328071975", 875, "The last light", "Metro Last Light", undefined, 0],  
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground74.jpg?1540326671899", 775, "Max's race", "Mad Max", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground75.jpg?1540327235631", 875, "Overlook on Mordor", "Shadow of Mordor", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground76.jpg?1540456781085", 675, "Raid ship", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground77.jpg?1540543916309", 750, "Drawn crash", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground78.png?1540576871453", 675, "Feared knight", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground79.png?1540577542371", 500, "Bohemian raid", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground80.jpg?1540578179868", 775, "Patient hunter", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground81.jpg?1540584390436", 825, "Training duels", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground82.png?1540912286983", 450, "Goal!!!", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground83.jpg?1540592361761", 725, "The catacombs", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground84.jpg?1540639642216", 550, "Frost troll encounter", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground85.png?1540640316587", 350, "SCP background", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground86.jpg?1540908052580", 525, "The Avengers", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground87.jpg?1540716574310", 675, "Store outbreak", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground88.png?1540724038256", 850, "Dry blood", "Dying Light Bad Blood", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground89.png?1540724452325", 850, "The swarm", "Dying Light", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground90.jpg?1540724504181", 875, "The Moonlord", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground91.jpg?1540732418318", 900, "Wastelanders", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground92.png?1540732542780", 425, "Shad rage", "Shadiversity", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground93.png?1540732797407", 500, "Five Finger Death Punch", "Five Finger Death Punch", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground94.png?1540732802324", 500, "Slza", "Slza", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground95.png?1540732804837", 500, "Hollywood Undead", "Hollywood Undead", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground96.png?1540733411430", 675, "Carnival infestation", "SAS Zombie Assault 3", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground97.png?1540738875332", 700, "Last Man Battalion", "The Division", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground98.jpeg?1540751959042", 825, "Cake liar", "Portal", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground99.jpg?1540906544488", 875, "Fallout together", "Fallout 76", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground100.jpg?1540906676579", 875, "Rigged game", "Fallout New Vegas", undefined, 0],  
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground_101.jpg?1540909984834", 675, "Cursed brothers", "Fear 3", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground102.png?1540910240235", 750, "Dangerous follower", "Outlast 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground103.png?1540910702105", 675, "Three cowboys", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground104.jpg?1540921032023", 700, "Cursed forest", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground105.png?1540922347614", 750, "Blocky bridge", "Minecraft", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground106.png?1540922585363", 825, "Four survivors", "Left 4 Dead", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground107.png?1540922676410", 925, "Genocide in mordor", "Shadow of Mordor", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground108.jpg?1540922769333", 950, "Robot hunter", "Horizon Zero Dawn", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground109.png?1540922913032", 675, "The big crusade", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground110.jpg?1540923010977", 500, "Imagine Dragons", "Imagine Dragons", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground111.png?1540923189976", 825, "Securing the corner", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground112.png?1540923310896", 875, "Cursed with knowledge", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground113.png?1540923433944", 925, "Outbreak siege", "Rainbow Six Siege", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground114.png?1540923593655", 775, "The Postal dude", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground115.png?1540923783605", 750, "Sunset", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground116.jpg?1540997970518", 775, "Sky planets", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground117.jpg?1540997969729", 825, "Chill view", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground118.jpg?1540998120961", 850, "Sea wyren", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground119.jpg?1540998420614", 925, "Doomed", "DOOM", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground120.png?1540999231874", 825, "Sci-fi guards", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground121.png?1546534600249", 950, "Corvo", "Dishonored 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground122.jpg?1541102671802", 875, "Dragon siege", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground123.jpg?1541102674654", 900, "Trade market", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground124.jpg?1541174620357", 500, "LSD", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground125.jpg?1541248189955", 875, "Bloom", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground126.png?1541253186637", 725, "Restaurant raid", "Kane and Lynch Dog Days", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground127.png?1541253652465", 875, "The burial", "PAYDAY 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground128.png?1541257973255", 675, "Leeeroooyyy", "Hearthstone", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground129.jpg?1541259754960", 225, "Dragonborn badge", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground130.png?1541259841365", 225, "Metro survivor badge", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground131.png?1541260761215", 725, "Fight between lords", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground132.jpg?1541268325643", 775, "Contaminated", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground133.png?1541274217777", 875, "The witcher", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground134.png?1541274466250", 875, "Sacred place", "Dragon Age Inquisition", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground135.png?1541279158138", 725, "Collapsed underground", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground136.png?1541279163436", 825, "The end", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground137.png?1541279940853", 450, "Psycho", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground138.png?1541328912882", 850, "Hight tech security", "PAYDAY The Heist", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground139.png?1541328918999", 850, "Street run", "PAYDAY The Heist", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground140.png?1541336274881", 525, "Minecraft mill", "Bersekr21", `266579411162103808`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground141.jpg?1541336309752", 775, "Village defense", "The Elder Scrolls Legends", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground142.jpg?1541336335410", 725, "The high king", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground143.jpg?1541336560436", 825, "Frost", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground144.jpg?1541336878452", 850, "Wolf pack", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground145.png?1541337473161", 825, "The walking survivors", "Overkill's The Walking Dead", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground146.png?1541338501230", 775, "Stone age hunter", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground147.png?1541338504448", 475, "Stone cold", "Battlefield 3", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground148.jpg?1541522367987", 825, "Damned", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground149.jpg?1541522466281", 825, "Primal hunter", "Far Cry Primal", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground150.jpg?1541522585002", 750, "Express", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground151.png?1543134979962", 525, "The Kekistan army", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground152.png?1543134982640", 675, "Bandit standoff", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground153.png?1543135038818", 775, "Modern warfare", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground154.jpg?1543135041735", 400, "Some ninja idk", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground155.png?1543135044488", 675, "Sliding the mountain", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground156.png?1543173013894", 775, "Captain Price", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground157.jpg?1544049162186", 700, "Miraak the dragonborn", "The Elder Scrolls 5 Skyrim", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground158.png?1543854878909", 875, "Living together", "Don't Starve Together", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground159.png?1543854878765", 750, "One man's land", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground160.png?1543940936704", 875, "Metro ruins", "Metro Last Light", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground161.png?1543940992259", 825, "Wumpus' homeland", "Discord", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground162.png?1544301727115", 750, "Deployment", "Counter Strike Global Offensive", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground163.png?1544592035867", 900, "Orbit", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground164.png?1545024402425", 775, "Kovac's community", "How to Survive 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground165.png?1545166008425", 875, "Proper burial", "Kingdom Come Deliverance", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground166.jpg?1545421965715", 775, "The Slayer", "Goblin Slayer", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground167.png?1545631212316", 825, "Home killer", "Resident Evil 7", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground168.png?1545638575351", 250, "Weird cat", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground169.png?1545779120615", 925, "White masks", "Rainbow Six Siege", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground170.png?1545823111874", 875, "This is a robbery!", "Grand Theft Auto Online", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground171.png?1546128297923", 850, "This war of theirs", "This War of Mine", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground172.png?1546253733572", 900, "Breaking the deal", "Mafia 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground173.png?1546253734432", 850, "Safehouse", "PAYDAY 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground174.png?1546253736286", 750, "Project Origin", "Fear 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground175.jpeg?1546258339431", 725, "Mars colonation", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground176.png?1546540411645", 750, "The contract", "A Hat in Time", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground177.png?1546617365441", 900, "Emily the empress", "Dishonored 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground178.png?1546640352552", 850, "Castle far away", "Dragon Age Inquisition", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground179.jpg?1546640356081", 625, "After the batte", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground180.png?1546901086923", 675, "Standing", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground181.png?1546901088480", 900, "Roof fights", "Dishonored 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground182.jpg?1547152599803", 925, "Robot guards", "Dishonored 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground183.jpg?1547555333469", 800, "Connected", "Dragon Age 4", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground184.png?1547809508673", 200, "Snens", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground185.jpg?1547809510214", 350, "Queres puppers", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground186.jpg?1548191942331", 725, "Zombie virus", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground187.png?1548198438043", 325, "Prism pattern", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground188.png?1548440856335", 625, "Gamers arise!", "TheVoiceOverPete", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground189.png?1548787581218", 650, "End stronghold", "Jeracraft", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground190.png?1548787620678", 725, "The hat", "Telltale's The Walking Dead", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground191.png?1549491879583", 375, "Retribution", "SpectreGames", `339381937279860736`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground192.png?1550519837303", 775, "Sunset view", "Grand Theft Auto 5", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground193.png?1550954101975", 475, "OwOcnic", "SickWheeny Nick", `298551254978789378`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground194.png?1551123539987", 725, "Daze", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground195.jpg?1551209003330", 275, "Real view", "vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground196.png?1551481112722", 800, "Revolution", "Homefront Revolution", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground197.png?1551517314470", 875, "Doomsday", "Grand Theft Auto Online", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground198.png?1551896626588", 675, "Redline", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground199.png?1551896628681", 900, "Hallway", "Resident Evil 2", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground200.png?1551896635268", 525, "Underground palace", "Undertale", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground201.png?1552129507121", 650, "Dirt", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground202.png?1552129513754", 875, "Freedome", "Grand Theft Auto Online", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground203.png?1552129515227", 825, "This is it Chief", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground204.png?1552129516913", 800, "Boy", "God of War", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground205.png?1552138972456", 225, "PEEKY's old pals", "Vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground206.png?1552138978087", 175, "XXL Plushies", "Vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground207.png?1552151256169", 925, "Jackpot!", "Devil May Cry 5", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground208.png?1552233925577", 100, "Pixelvince", "Pixelvince", `354617102394720266`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground209.png?1552752810447", 275, "FeelsGoodMom", "Vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground210.png?1552809489475", 675, "Airsoft", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground211.png?1552809489603", 575, "Orange pattern", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground212.png?1552809503603", 850, "In the battlefield", "Battlefield 1", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground213.png?1552809504469", 525, "Tom & Jerry's claims", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground214.png?1552941923769", 725, "Adored knight", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground215.png?1552941932967", 375, "Redditor", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground216.jpg?1552969694470", 750, "Que sera, sera", "Mary and Max", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground217.png?1553336264273", 475, "Odd fella", "TheOdd1sOut", undefined, 0],
    ["https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground218.png?1553436376818", 725, "At the club", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground219.png?1553623065418", 700, "Robotics", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground220.png?1554321575443", 875, "The savior psycho", "Borderlands 3", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground221.png?1554546451654", 775, "The vault hunters", "Borderlands 3", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground222.png?1554546456700", 825, "Firestorm", "Battlefield 1", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground223.png?1554546446408", 925, "Sleeping shadows", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground224.png?1555012380297", 1000, "Zer0", "Borderlands 2", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground225.png?1555147436467", 875, "Dude's caravan", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground226.png?1555147437707", 425, "Blamed skeleton", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground227.png?1555147440060", 375, "Stronghold raid", "AMC's The Walking Dead", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground228.png?1555231021661", 525, "Welcome to Vietnam", "Rising Storm 2 Vietnam", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground229.png?1555231025303", 800, "Devil trigger", "Devil May Cry 5", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground230.png?1555231029488", 350, "Villager camp", "Plobster", `268826232806703106`, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground231.png?v=1576750038989", 425, "Arctic wolf", "Bersekr21", `266579411162103808`, 1576750024044],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground232.png?1555690405127", 575, "Contagion", "Contagion", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground233.png?1555690407657", 825, "Notre Dame", "Assassins Creed Unity", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground234.png?1555758393410", 350, "Phantoms", "Phantom Forces", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground235.png?1555788520771", 425, "No Thanks, Incels", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground236.jpg?1555788525534", 650, "Crazy Doggo", "Lola Woudenberg", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground237.jpg?1555788526781", 575, "Isle Of Dogs", "Wes Anderson", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground238.png?1555788529003", 350, "Ghosts", "Phantom Forces", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground239.png?1555881581795", 525, "Pillar chad Richard", "Dan Man Jenkins", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground240.png?1555881583428", 675, "Galaxy boy", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground241.png?1556138322772", 675, "Staredown", "E.Y.E.: Divine Cybermancy", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground242.png?1556142651459", 750, "Dead end", "SAS Zombie Assault 3", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground243.png?1556379776934", 825, "Fires fade", "Dark Souls", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground244.jpg?1556379779436", 350, "The Bay city", "Altered Carbon", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground245.png?1556379786683", 475, "Airport security", "SAS Zombie Assault 3", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground246.png?1556379788689", 875, "New wave", "The Division", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground247.png?1557333122021", 725, "Dragonhearted", "Captainsparklez", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground248.png?1558020522402", 800, "Blocky team", "Minecraft", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground249.png?1558020557790", 675, "Amigos", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground250.png?1558020564397", 800, "Saloon", "Red Dead Redemption 1", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground251.png?1558020569519", 725, "Frost mage", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground252.png?1558020571967", 675, "Last stand", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground253.png?1558020744639", 725, "Skull trooper", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground254.png?1558020748286", 625, "The fire dude", "League of Legends", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground255.png?1558174296475", 375, "Storm Walk", "Ryan Shirley", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground256.png?1558038095405", 750, "Evolved", "Evolve", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground257.png?1558038099146", 675, "Stormy night", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground258.png?1558038101105", 725, "Dahaka", "Prince of Persia", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground259.png?1558038103055", 825, "Floor full of killers", "Killing Floor 2", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground260.png?1558038106758", 700, "Revolution", "We. The Revolution", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground261.png?1558103378145", 725, "Post delivery", "A Hat in Time", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground262.png?1558103379729", 675, "Ashen", "Ashen", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground263.png?1558103382341", 525, "Roll out!", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground264.png?1558103383792", 725, "The Ghost", "Call of Duty Ghosts", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground265.jpg?1558783572490", 200, "Gun Kid", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground266.jpg?1558783583054", 575, "Sleeping King", "Shrek", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground267.png?1558783596081", 425, "Gaming Pattern", "Discord", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground268.png?1558783610734", 375, "Afterthoughts", "Discord", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground269.png?1558783624153", 525, "Tales of the Borderlands", "Tales from the Borderlands", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground270.png?1558783636471", 725, "Deep in the Shadows", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground271.png?1558783647904", 375, "Stupid little prick named Rick", "AMC's The Walking Dead", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground272.png?1558783659166", 675, "Fallen kingdom", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground273.png?1558783669451", 825, "Why?", "Just Cause", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground274.png?1558783679870", 725, "Toy gang", "To Story 4", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground275.png?1558783691312", 775, "Mad lad", "Mad Max", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground276.png?1558783702786", 925, "Abyss", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground277.png?1558783726173", 525, "Nowadays Rick", "Rick Astley", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground278.png?1558783748699", 775, "Active chaos", "Battlefield Hardline", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground279.png?1558783759802", 375, "Abstract pattern", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground280.png?1558783770529", 475, "Spirit tower", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground281.png?1558874631584", 875, "Isaac's nightmare", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground282.png?1558874666863", 425, "Spiritual butterflies", "Judith Haddad", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground283.png?1558877694122", 1000000, "Golden", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground284.png?1558874673658", 825, "War with zombies", "World War Z", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground285.png?1558888970896", 425, "Morning", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground286.png?1558888974600", 575, "Zoink", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground287.png?1558888976922", 750, "Paladin", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground288.png?1558986681527", 475, "Factory", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground289.png?1558986683278", 725, "Firewatch tower", "Firewatch", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground290.png?1558986687005", 775, "On the edge", "Tomb Raider", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground291.png?1558986689511", 400, "Flower field", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground292.png?1558986693656", 625, "Distant island", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground293.png?1558987597972", 50, "Pink red", "No one", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground294.png?1558987600482", 50, "Dye blue", "No one", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground295.png?1558987601832", 50, "Colorblind orange", "No one", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground296.png?1559103056756", 925, "Robotic warfare", "Sarahhamyied", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground297.png?1559189577583", 275, "Ahhhhh", "Five nights at Freddy's", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground298.png?1559231851015", 775, "The other elves", "Forgotten Realms", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground299.png?1559231854665", 675, "Victarion's charge", "A Song of Ice and Fire", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground300.png?1559237158322", 425, "Space gamer", "Vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground301.png?1559234593103", 825, "Batman", "Batman: Arkham Knight", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground302.png?1559234599790", 800, "Atom apocalypse", "Atom", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground303.png?1559234617296", 850, "Wondering bear", "Samorost 3", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground304.png?1559234625544", 700, "Hidden peace", "Indivisible", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground305.png?1559274593485", 50, "Blurple", "No one", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground306.png?1559274595817", 375, "Wall of flesh", "Doom", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground307.png?1559274597356", 675, "Wearing gold", "PAYDAY 2", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground308.png?1559274598337", 725, "Modernized", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground309.png?1559312632224", 775, "Intermission", "Prey", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground310.png?1559312635724", 750, "Street fight", "Battlefield 3", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground311.png?1559326557864", 725, "Just joking", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground312.jpg?1559331433267", 725, "Oiled Down", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground313.png"              , 775, "Lara Croft", "Shadow of the Tomb Raider", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground314.png"              , 825, "Servant", "Dark Souls 2", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground315.png"              , 425, "Bean Gansta", "Killer Bean Animation", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground316.png?v=1559999276673", 625, "Deer sighting", "Luboš Houska", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground317.png?v=1559999302765", 450, "This... is... Minecraft!", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground318.png?v=1559999314369", 775, "Futuristic police", "Detroit Cecome Human", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground319.png?v=1559999328518", 675, "Impacted", "Vojtěch Jílovec", `108899856889737216`, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground320.png?v=1560087604377", 825, "Consumption", "Black Mirror", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground321.png?v=1560087605507", 850, "Going dark", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground322.png?v=1560087608782", 800, "Extraction", "The Division", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground323.png?v=1560087610295", 525, "The rune", "Deltarune", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground324.png?v=1560087614558", 775, "Jungle crysis", "Crysis", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground325.png?v=1579388628919", 925, "Fresh air", "Red Dead Redemption 2", undefined, 1579388500412],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground326.jpg?v=1560281017823", 100, "Grass", "WHASonYT", `339177677326123018`, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground327.png?v=1560283107053", 825 , "Camp liberation", "Kingdom Come Deliverance", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground328.png?v=1560283108264", 775, "Commander Lilith", "Borderlands 2", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground329.png?v=1579388649114", 750, "Iceland's waterfall", "Unknown", undefined, 1579388494694],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground330.png?v=1560703323947", 775, "Nuke", "Counter Strike Global Offensive", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground331.png?v=1560768909337", 250, "Creeper Buddy", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground332.png?v=1560768910957", 775, "Flare Abyss", "The Division", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground333.png?v=1560777175191", Exclusive, "Happy year", "Vojtěch Jílovec", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground334.png?v=1560779898774", 725, "Hype beast", "Counter Strike Global Offensive ", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground335.png?v=1560779904859", 675, "Roblox gang", "ROBLOX", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground336.png?v=1560779909615", 525, "Sanctuary leader", "Joji", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground337.png?v=1560779912403", 675, "Raven buds", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground338.png?v=1560964929302", 875, "Hold Tight", "World War Z", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground339.png?v=1560964938885", 500, "Knight's Camp", "Shovel Knight", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground340.jpg?v=1560964940754", 750, "The Legion", "Watchdogs 3 Legion", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground341.png?v=1563911692560", 325, "Green Shapes", "Gerd Altmann", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground342.png?v=1563911684073", 575, "Aw man", "CaptainSparklez", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground343.png?v=1563911683620", 825, "Surrounded", "Alien Isolation", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground344.png?v=1563911687667", 850, "High-Tech", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground345.png?v=1563911688280", 825, "Midnight breakfast", "Vampyr", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground346.png?v=1563911687954", 575, "Joseph Joestar", "JoJo's Bizarre Adventures Battle Tendency", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground347.jpg?v=1563911682560", 650, "Village trade", "Minecraft", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground348.png?v=1563922180572", 925, "Water Sheep's memorial", "u/neytirixx", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground349.jpg?v=1563911682933", 825, "Bird's cage", "Resident Evil 7", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground350.png?v=1563922201014", 675, "The beach", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground351.jpg?v=1563911683311", 775, "The plan of attack", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground352.png?v=1563930075225", 950, "Washington survivors", "The Division 2", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground353.png?v=1563930630325", 625, "Roots of a tragedy", "Jojo's Bizarre Adventures Phantom Blood", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground354.png?v=1563930629902", 550, "Farm club", "Stardew Valley", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground355.png?v=1563930633397", 675, "Cthulhu", "Andrée Wallin", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground356.png?v=1563931884386", 399, "PewDiePie's pattern", "PewDiePie", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground357.jpg?v=1563931889909", 625, "Neon ride", "u/mattystoe", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground358.png?v=1563931895048", 725, "Robot", "The Surge 2", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground359.png?v=1563964603301", 850, "Gunfight", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground360.png?v=1563964903981", 900, "Dragon's return", "The Elder Scrolls Online", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground361.png?v=1563964756492", 875, "The prophecy", "The Elder Scrolls Online", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground362.png?v=1563970489879", 725, "Dragon rider", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground363.png?v=1563983696291", 775, "The inferno", "Endless Legend", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground364.png?v=1564017185333", 125, "Office night", "Five Nights at Freddy's", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground365.png?v=1564058813872", 675, "Joergen's rollercoaster", "u/neytirixx", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground366.png?v=1564058885585", 750, "Dangerous hunt", "Monster Hunters World", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground367.png?v=1564068410313", 675, "Pillar men", "Jojo's Bizarre Adventure Battle Tendency", undefined, 0],
    ["https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground368.png?v=1564068462711", 475, "Canary", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fbackground369.png?v=1564222331497", 550, "Dead men", "Kane and Lynch Dead Men", undefined, 0],
    ["https://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fbackground370.png?v=1564225161116", 675, "Journey", "u/BeastScrollGames", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground371.png?v=1564261114754", 850, "Campfire tales", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground372.jpg?v=1564261330942", 725, "Orcs vs. humans", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground373.jpg?v=1564261391413", 675, "The fire sorcerer", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground374.jpg?v=1564346562475", 525, "Startdust battle", "Jojo's Bizarre Adventures Stardust Crusaders", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground375.jpg?v=1564395161731", 575, "Deadra warrior", "The Elder Scrolls V Skyrim", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground376.jpg?v=1564395226382", 475, "Kunětická hora", "Bersekr21", `266579411162103808`, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground377.jpg?v=1564395286909", 625, "Bunny rabbit", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground378.jpg?v=1564447926358", 825, "New contract", "Hitman 2", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground379.jpg?v=1564447989239", 225, "Horse friend", "Unknown", undefined, 0],  
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground380.jpg?v=1564448048338", 775, "Japaneese terrace", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground381.png?v=1564448236674", 325, "Desolate park", "Zach Soza", undefined, 0],
    ["https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground382.jpg?v=1564448921669", 275, "Playful dogs", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground383.png?v=1565240397152", 875, "Dedicated", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground384.png?v=1565616356300", 850, "Breaking point", "Ghost Recon Breakpoint", undefined, 0],
    ["https://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground385.png?v=1565616359450", 675, "Conflict", "Total War", undefined, 0],
    ["https://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground386.png?v=1565616365518", 725, "Interrogation", "Ghost Recon Wildlands", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground387.png?v=1565961253024", 525, "Father's pose", "JoJo's Bizarre Adventure Golden Wind", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground388.png?v=1565715181405", 750, "Beyond", "No Man's Sky", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground389.png?v=1565715183258", 475, "Steve hunt", "RobenSikk", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground390.png?v=1565715470915", 875, "Right ahead", "Call of Duty Modern Warfare", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground391.png?v=1565715547975", 350, "Samurai", "u/vrtman", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground392.png?v=1565715555358", 825, "Annoying villains", "Borderlands 3", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground393.png?v=1565715558429", 850, "Seeking", "GreedFall", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground394.jpg?v=1565715561043", 775, "Elven kingdom", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground395.png?v=1565715568265", 800, "Three kingdoms", "Total War", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground396.png?v=1565844170105", 875, "Midnight", "u/SnookyZun", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground397.png?v=1565844176033", 775, "Turtle friend", "Jojo's Bizarre Adventures Golden Wind", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground398.jpg?v=1565844185444", 825, "Penguin trip", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground399.png?v=1565844196700", 750, "Quail", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground400.png?v=1565844199887", 650, "Tiger", "Jack Merlin", undefined, 0],
    ["https://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground401.png?v=1565953633386", 725, "Monster of the east", "Fallout New Vegas", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground402.png?v=1566128627988", 850, "Los thanos", "Harry Osborn", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground403.png?v=1566128632167", 775, "To the rescue", "Ghost Recond Breakpoint", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground404.png?v=1566128626627", 575, "Torture dance", "u/Arbitrarium_", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground405.png?v=1567050251316", 925, "Left hanging", "Dead by Daylight", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground406.png?v=1576425633251", 475, "Cubic Tanks", "Battle Zone", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground407.png?v=1576425698741", 275, "Diavolo", "Jojo's Bizarre Adventures Golden Wind", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground408.png?v=1567938199867", 875, "Ice breaker", "u/neytirixx", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground409.png?v=1568824760554", 825, "Copper sööp", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground410.png?v=1568913126645", 450, "Link's awakening", "The Legend of Zelda Link's Awakening", undefined, 0],
    ["https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground411.png?v=1569261662317", 250, "Pudla", "Vlaďka Lišková", `583902709745188875`, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground412.png?v=1572542839518", 775, "Storming", "Battlefield 4", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground413.png?v=1569744679704", 625, "Passione", "JoJo's Bizarre Adventures", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground414.png?v=1569780678572", 250, "Stříbro", "Vlaďka Lišková", `583902709745188875`, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground415.png?v=1569829711380", 575, "Flayed", "Stranger Things", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground416.png?v=1573313860160", 825, "Beyond hell", "Nioh", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground417.png?v=1573313897257", 925, "Sleeping river", "GreedFall", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground418.png?v=1573313898157", 925, "Awakening", "Project Awakening Arise", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground419.png?v=1573313903056", 825, "Spider-man", "Sony Pictures", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground420.png?v=1573313975804", 625, "Sleeping streamer", "Alexandrev Perstev", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground421.png?v=1573891420218", 550, "Emoji saviour", "twlefth", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground422.png?v=1575141704791", 825, "Giorno's piano", "u/Rockman17", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground423.png?v=1575141706988", 875, "Norbinbad", "Lord of the Rings War in the North", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground424.png?v=1575141708491", 675, "Mouse's flower", "Unknown", undefined, 0],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground425.png?v=1575345556036", 825, "Chaotic home", "PewDiePie's Tuber Simulaor", undefined, 1575345511274],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground426.png?v=1575345938913", 850, "Deer hunt", "Red Dead Redemption 2", undefined, 1575345944280],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground427.png?v=1575345939547", 950, "International squad", "Call of Duty Modern Warfare", undefined, 1575345952003],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground428.png?v=1575716944152", 750, "The Cyrodill fields", "Unknown", undefined, 1575716942140],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground429.png?v=1575795807391", 825, "Mount Doom", "Unknown", undefined, 1575795807985],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground430.png?v=1575908013402", 875, "The nazgul", "Uknown", undefined, 1575908014014],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground431.png?v=1575908009200", 725, "Rivindell", "Unknown", undefined, 1575908017191],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground432.png?v=1575908019408", 675, "Fall of noldor", "Unknown", undefined, 1575908012308],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground433.png?v=1575908033170", 575, "Compound defense", "Wasteland 3", undefined, 1575908028110],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground434.png?v=1575981245557", 750, "Quindecim", "仙田", undefined, 1575981269516],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground435.png?v=1576139263681", 950, "Jill", "Resident Evil 3 Remake", undefined, 1576139256904],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground436.png?v=1576143916348", 925, "Agent's mood", "u/bobemil", undefined, 1576143910590],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground437.png?v=1576163566667", Exclusive, "Christmas mood", "Vojtěch Jílovec", undefined, 1576163667563],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground438.png?v=1576227042690", 825, "Spartans", "Halo Reach", undefined, 1576227058363],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground439.png?v=1576227115180", 775, "Flu survivors", "Left 4 Dead 2", undefined, 1576227050372],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground440.png?v=1577453807639", 875, "Iceborn", "Monster Hunter World", undefined, 1577453675228],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground441.png?v=1577453753300", 950, "Plantera", "Bohrokki", undefined, 1577453676896],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground442.png?v=1577453764354", 925, "Destroyer", "Bohrokki", undefined, 1577453678226],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground443.png?v=1577453903759", 850, "Ride 'round", "Final Fantasy XV", undefined, 1577453680481],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground444.png?v=1577453768498", 675, "Park", "Unknown", undefined, 1577453682331],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground445.png?v=1579388666650", 950, "Radio demon", "Hazbin Hotel", undefined, 1579388485754],
    ["https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fbackground446.png?v=1579585356877", 1000, "Deep within", "The Last of Us 2", undefined, 1579585332845]

];

const DefaultDescriptions = [  

    "I'm very busy and important.",
    "I sip water quite slowly.",
    "Battery low, I'm scared.",
    "I have a car for each day of the month.",
    "I make up a dream in my head before I go to bed.",
    "My life is a green screen.",
    "I don't believe in showers.",
    "Certified troublemaker.",
    "I'm a Bacon Guru.",
    "Smarter than a 5th grader.",
    "I took an arrow to the knee.",
    "Pikachu chooses me.",
    "I'm real, I hope my followers are too.",
    "I have invincible minions.",
    "Is this water dry?",
    "I yell at inanimate objects.",
    "I sneak drinks into movie theatres.",
    "I hide my sweat well.",
    "I unleashed the zombie apocalypse.",
    "I'm a very mysterious person.",
    "I am so funny.",
    "I slapped a chicken once.",
    "I don't know what alt-tab does.",
    "Hitting things to make them work.",
    "I put fries into my straw.",
    "I walk faster when I see a creepy van.",
    "More than meets the eye.",
    "I draw on fogged up windows.",
    "Born at a very young age.",
    "Is this a JoJo reference?",
    "I did not set this description, I think."

];

const RandomAvatars = [  
  
    "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_1.png?v=1560717936708",
    "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_2.png?v=1560717937510",
    "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_3.png?v=1560717937123"
  
];

const RandomSongs = [  

    "https://www.youtube.com/watch?v=tklQ47Hpfxw",
    "https://www.youtube.com/watch?v=N6hF3EaICxk",
    "https://www.youtube.com/watch?v=NU3aCNQAqwc", 
    "https://www.youtube.com/watch?v=K3Qzzggn--s",
    "https://www.youtube.com/watch?v=PEBS2jbZce4",
    "https://www.youtube.com/watch?v=8Vlej7QUGGE", 
    "https://www.youtube.com/watch?v=k92Bgqz-p_8",
    "https://www.youtube.com/watch?v=R_N15egKj6c",
    "https://www.youtube.com/watch?v=-WpnPSChVRQ",
    "https://www.youtube.com/watch?v=ktvTqknDobU",
    "https://www.youtube.com/watch?v=pXRviuL6vMY",
    "https://www.youtube.com/watch?v=UprcpdwuwCg",
    "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    "https://www.youtube.com/watch?v=PHgc8Q6qTjc",
    "https://www.youtube.com/watch?v=I-sH53vXP2A",
    "https://www.youtube.com/watch?v=FTQbiNvZqaY",
    "https://www.youtube.com/watch?v=1vrEljMfXYo",
    "https://www.youtube.com/watch?v=V5XOwWOAQBQ",
    "https://www.youtube.com/watch?v=bl0e5DrYLyY",
    "https://www.youtube.com/watch?v=jjjaU5kQV8k",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=P5QbkjnCvl4",
    "https://www.youtube.com/watch?v=i7fnlJ60RO8",
    "https://www.youtube.com/watch?v=oY9m2sHQwLs",
    "https://www.youtube.com/watch?v=eVTXPUF4Oz4",
    "https://www.youtube.com/watch?v=fPO76Jlnz6c",
    "https://www.youtube.com/watch?v=PVjiKRfKpPI",
    "https://www.youtube.com/watch?v=DKL4X0PZz7M",
    "https://www.youtube.com/watch?v=gUcisIlT7sM",
    "https://www.youtube.com/watch?v=ytWz0qVvBZ0",
    "https://www.youtube.com/watch?v=G_Nl5xDNXIs",
    "https://www.youtube.com/watch?v=t_q1SDzeCqo",
    "https://www.youtube.com/watch?v=hbrpmQ09juQ",
    "https://www.youtube.com/watch?v=YWN81V7ojOE",
    "https://www.youtube.com/watch?v=pcSLtIYLbLQ",
    "https://www.youtube.com/watch?v=6okxuiiHx2w",
    "https://www.youtube.com/watch?v=NqpnbSFprB4",
    "https://www.youtube.com/watch?v=hWfbUTwzzZA",
    "https://www.youtube.com/watch?v=BGkRUYjflbY",
    "https://www.youtube.com/watch?v=WTJSt4wP2ME",
    "https://www.youtube.com/watch?v=al1BNB8bKaE",
    "https://www.youtube.com/watch?v=3vVSBLkpO-8",
    "https://www.youtube.com/watch?v=vOXZkm9p_zY",
    "https://www.youtube.com/watch?v=d5Ql4Sjo-GU",
    "https://www.youtube.com/watch?v=zKFzKIa_pIM",
    "https://www.youtube.com/watch?v=PoVgCOCt4KA",
    "https://www.youtube.com/watch?v=Sk-U8ruIQyA",
    "https://www.youtube.com/watch?v=y8a65a-B5Zw",
    "https://www.youtube.com/watch?v=eFVj0Z6ahcI",
    "https://www.youtube.com/watch?v=GO5utuvcZps",
    "https://www.youtube.com/watch?v=JRfuAukYTKg",
    "https://www.youtube.com/watch?v=16y1AkoZkmQ"
  
];

const GuessTheSong = [
  
    ["https://www.youtube.com/watch?v=HRDp-Q_DsfE", "Bloody Stream", "Medium"],
    ["https://www.youtube.com/watch?v=cPJUBQd-PNM", "Revenge", "Easy"],
    ["https://www.youtube.com/watch?v=5-uWlFq380M", "Sanctuary", "Medium"],
    ["https://www.youtube.com/watch?v=bpOSxM0rNPM", "Do I Wanna Know", "Medium"],
    ["https://www.youtube.com/watch?v=2uRLJZxINAQ", "PEPE", "Hard"],
    ["https://www.youtube.com/watch?v=aiSdTQ9DW9g", "Rasputin", "Easy"],
    ["https://www.youtube.com/watch?v=6E5m_XtCX3c", "Ocean Man", "Easy"],
    ["https://www.youtube.com/watch?v=3vVSBLkpO-8", "Baby I'm yours", "Hard"],
    ["https://www.youtube.com/watch?v=rnO-MflYxCw", "Pumped Up Kicks", "Easy"],
    ["https://www.youtube.com/watch?v=yGHBcpO-M0s", "Gotta Let Go", "Medium"],
    ["https://www.youtube.com/watch?v=VMtarj8Ua0s", "Mr. Blue Sky", "Medium"],
    ["https://www.youtube.com/watch?v=Gs069dndIYk", "September", "Medium"],
    ["https://www.youtube.com/watch?v=pgN-vvVVxMA", "SAD!", "Easy"],
    ["https://www.youtube.com/watch?v=kx0Z0B8Xox0", "Rodeo", "Easy"],
    ["https://www.youtube.com/watch?v=DPVCNK74ZBI", "Hurt", "Medium"],
    ["https://www.youtube.com/watch?v=52Gg9CqhbP8", "Let's Go", "Medium"],
    ["https://www.youtube.com/watch?v=5ZYgIrqELFw", "All Star", "Easy"],
    ["https://www.youtube.com/watch?v=7pzOBI3PD8E", "Sweater Weather", "Hard"],
    ["https://www.youtube.com/watch?v=L3wKzyIN1yk", "Human", "Medium"],
    ["https://www.youtube.com/watch?v=hWfbUTwzzZA", "Caramelldansen", "Hard"],
    ["https://www.youtube.com/watch?v=oG7jKUHsLfY", "Last Train Home", "Hard"],
    ["https://www.youtube.com/watch?v=XUhVCoTsBaM", "Awaken", "Medium"],
    ["https://www.youtube.com/watch?v=DwPWGUhEtP0", "Roundabout", "Medium"],
    ["https://www.youtube.com/watch?v=vOXZkm9p_zY", "Birds", "Medium"],
    ["https://www.youtube.com/watch?v=RiifAqNwHoo", "THE HERO", "Medium"],
    ["https://www.youtube.com/watch?v=fcsvE1zv1ek", "Gangsta's Paradise", "Easy"],
    ["https://www.youtube.com/watch?v=d5Ql4Sjo-GU", "Midsummer Madness", "medium"],
    ["https://www.youtube.com/watch?v=ZONlGIshF3o", "Where Does The Time Go", "Hard"],
    ["https://www.youtube.com/watch?v=3kCWT57h4J0", "Devilman no Uta", "Hard"],
    ["https://www.youtube.com/watch?v=dv13gl0a-FA", "Deja Vu", "Medium"],
    ["https://www.youtube.com/watch?v=_ubnhgZgsfc", "Stronger", "Medium"],
    ["https://www.youtube.com/watch?v=zKFzKIa_pIM", "Chlorine", "Easy"],
    ["https://www.youtube.com/watch?v=HUHC9tYz8ik", "Bury a friend", "Medium"],
    ["https://www.youtube.com/watch?v=gBRi6aZJGj4", "Bellyache", "Hard"],
    ["https://www.youtube.com/watch?v=k1ATPhkVWi0", "My Strange Addiction", "Medium"],
    ["https://www.youtube.com/watch?v=PoVgCOCt4KA", "Alien Boy", "Medium"],
    ["https://www.youtube.com/watch?v=Sk-U8ruIQyA", "Blood // Water", "hard"],
    ["https://www.youtube.com/watch?v=eFVj0Z6ahcI", "Last Surprise", "medium"]
  
];

const TriviaQuestions = [
  
    ["Who painted the Mona Lisa?", ["Da Vinci"], ["Mona Lisa"], ["Kars"], "Art"],
    ["When did the Second World War end?", ["1945"], ["1939"], ["1944"], "History"],
    ["Who starts first in chess?", ["White"], ["Black"], ["Arbitrary"], "Games"],
    ["What year did Elvis Presley die?", ["1977"], ["1979"], ["1972"], "History"],
    ["What colours make purple?", ["Red & Blue"], ["Blue & Black"], ["Pink & Red"], "Other"],
    ["When was President Kennedy killed?", ["1963"], ["1969"], ["1961"], "History"],
    ["What is the first letter on a typewriter?", ["Q"], ["A"], ["W"], "History"],
    ["The average human body contains how many pints of blood?", ["9"], ["10"], ["8"], "Biology"],
    ["Which of the planets is closest to the sun?", ["Mercury"], ["Mars"], ["Earth"], "Space"],
    ["What was Twitter’s original name?", ["Twttr"], ["Twitter"], ["Tweeter"], "Internet"],
    ["Which year was Minecraft released?", ["2009"], ["2010"], ["2008"], "Video Games"],
    ["Resident Evil 7 was released in which year?", ["2017"], ["2016"], ["2018"], "Video Games"],
    ["Name of the character abused by Mario?", ["Donkey Kong"], ["Yoshi"], ["Luigi"], "Video Games"],
    ["How many layers are there in the Sun?", ["6"], ["4"], ["10"], "Space"],
    ["How much water is evaporated every day?", ["1 Trillion Tons"], ["58 Billion Tons"], ["100 Trillion Tons"], "Space"],
    ["Unlike most other fish, sharks have no ...?", ["Bones"], ["Gills"], ["Liver"], "Biology"],
    ["Which of the following has more bones?", ["Baby"], ["Adult"], ["Teenager"], "Biology"],
    ["Which game was delayed because it had a hidden photo of a developer's butt?", ["Halo 2"], ["Saints Row 3"], ["GTA V"], "Video Games"],
    ["What Spanish artist said he would eat his wife when she died?", ["Dali"], ["Pablo Picasso"], ["El Greco"], "History"],
    ["What was the first Nazi concentration camp?", ["Dachau"], ["Aushwitz"], ["Chelmno"], "History"],
    ["How many U.S. presidents have been assassinated prior to 2019?", ["4"], ["9"], ["2"], "History"],
    ["What three colors appear on the Italian flag?", ["Red, white and green"], ["Orange, white and green"], ["Red, blue and white"], "Other"],
    ["How is CzechoSlovakia called today?", ["Czechia"], ["Bohemia"], ["Still CzechoSlovakia"], "History"],
    ["Which war took place between 1950 and 1953?", ["The Korean War"], ["The second World War"], ["Nothing"], "History"],
    ["Who was the first democratically elected President of Russia?", ["Boris Yeltsin"], ["Vladimir Putin"], ["Nikita Krushcev"], "History"],
    ["What did ancient Egyptians use as pillows?", ["Stones"], ["Animal Pelts"], ["Bundles of Wheat"], "History"],
    ["In the film Babe, what type of animal was Babe?", ["Pig"], ["Dog"], ["Bunny"], "Other"],
    ["What’s the total number of dots on a pair of dice?", ["42"], ["6"], ["64"], "Other"],
    ["Which of these is the tallest mammal?", ["Giraffe"], ["Sauropod"], ["Whale"], "Biology"]
  
];

const RandomWords = [
  
    "Life",
    "Happiness",
    "Goal",
    "School",
    "Board",
    "Sun",
    "Space",
    "Videogame",
    "Restaurant",
    "Discord",
    "Worker",
    "Website",
    "Face",
    "Human",
    "PEEKY",
    "Smile",
    "Dog",
    "Cat",
    "Creeper",
    "Devil",
    "Fridge",
    "Rose",
    "Car",
    "Donuts",
    "Golf",
    "Deer",
    "Storage",
    "Spiderman",
    "Parents",
    "Sheep",
    "Photographer",
    "Bunny",
    "Pikachu",
    "Pokemon",
    "Store",
    "Dress",
    "Grapes",
    "Hero",
    "Minecraft",
    "Weapon",
    "Sleep",
    "Fruit",
    "Flower",
    "Lover",
    "Number",
    "Trophy",
    "Friends",
    "Doctor",
    "Donkey",
    "Shrek",
    "JoJo",
    "Bus",
    "Rat",
    "Fedora",
    "Money",
    "Gems",
    "Cocktail",
    "Dance",
    "Inventory"
  
];

//FUNCTIONS

//CANVAS: Welcome Messages embed
async function function_WelcomeMessagesEmbed(member, type, detected)  {
  
    var   attachment = null;
    const key        = member.user.id;
    var   Failed     = false;
      
    const canvas = Canvas.createCanvas(500, 95);
    const ctx    = canvas.getContext('2d');
      
    ctx.globalAlpha = 0.75;
      
    var TheBannerShown = DefaultBackground;
    if  (peeky.userData.has(key))  {
        TheBannerShown = function_GetBackground(key);
    };

    const background = await Canvas.loadImage(TheBannerShown)//.catch(error => {Failed = true;  peeky.userData.set(member.id, DefaultBackground, "Background");});
      
    if  (Failed == false)  {

    ctx.drawImage(background, 0, 0, canvas.width, 300);       
    
    const layout = await Canvas.loadImage("http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fwelcome_messages_layout_3.png?v=1561018982206");
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height);

    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 1; 
    ctx.shadowOffsetY = 1;
    ctx.globalAlpha = 1;
      
    //Draw Events
      
    //Joined String
    ctx.font = "20px " + Setting.DefaultFont;
    ctx.textAlign = "right";
    ctx.fillStyle = "white";

    if  (type == "join")  {  ctx.fillStyle = "lightgreen";  }  
    else if (type == "leave")  {  ctx.fillStyle = "pink";  };

    ctx.fillText("●", canvas.width - 5, 18);
      
    //Name String
    ctx.font = "25px " + Setting.DefaultFont;
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
  
    if  (detected == true)  {
        ctx.fillStyle = "pink";
        var NameString = "Censored";    
    } else {
        ctx.fillStyle = "white";
        var NameString = peeky.users.get(key).username;
    };
  
    ctx.fillText(NameString, 125, 40, canvas.width - 175);
      
    if  (peeky.userData.has(key))  {
    
    //Description String
    var text = peeky.userData.get(key, "Description");
    var y_position = 75;
    ctx.fillStyle = "white";
      
    if (text.includes("\n")) {  y_position = 62.5;  };
    ctx.font = "18px " + Setting.DefaultFont;
    ctx.fillText(text, 125, y_position, canvas.width - 175);
    }
    else if (!member.user.bot) {
    ctx.font = "18px " + Setting.DefaultFont;
    ctx.fillStyle = "pink";
    ctx.fillText("No Profile" , 125, 75);
    }
    else {
    ctx.font = "18px " + Setting.DefaultFont;
    ctx.fillStyle = "lightblue";
    ctx.fillText("Bot" , 125, 75);
    };

    //Avatar
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }).replace("https", "http"));
    ctx.drawImage(avatar, 7, 7, 82, 82);

    return attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });
      
    };

};

//CANVAS: Music embed
async function function_MusicEmbed(Title, Thumbnail, Author, Length, User, Type, Queue)  {

    var attachment = null;
    var Now = new Date();

    const canvas = Canvas.createCanvas(500, 370);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(MainBackground);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 1;
    const thumbnail = await Canvas.loadImage(Thumbnail);
    ctx.drawImage(thumbnail, 15, 15, canvas.width - 30, 260);

    //String Setting
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 1; 
    ctx.shadowOffsetY = 1;
    ctx.globalAlpha = 1;

    //Header
    ctx.font = "15px " + Setting.DefaultFont;
    if  (Type == "Started")  {
        ctx.fillText(peeky.users.get(User).username + " has requested " + Author + "'s song.", 15, 310);
    }  else if  (Type == "Playlist")  {
        //ctx.font = "13px " + Setting.DefaultFont;
        ctx.fillText(peeky.users.get(User).username + " has requested " + peeky.userData.get(User, "Playlist").length + " songs from " + peeky.userData.get(User, "PlaylistName") + ".", 15, 310, canvas.width - 30);
    }  else if  (Type == "Queue")  {
        ctx.fillText("Playing the next song from " + peeky.users.get(User).username + "'s playlist.", 15, 310);
    }  else if  (Type == "Random")  {
        ctx.fillText(peeky.users.get(User).username + " has requested a random song.", 15, 310);
    }  else if  (Type == "Previous")  {
        ctx.fillText(peeky.users.get(User).username + " has requested the previous song.", 15, 310);
    }  else if  (Type == "Current")  {
        if  (Queue.length <= 1)  {
            ctx.fillText("Currently playing with approximately " + function_TimeLeft(Length, "minutes", null) + " minute(s) left.", 15, 310);
        } else {
          ctx.fillText("Next song is starting in approximately " + function_TimeLeft(Length, "minutes", null) + " minute(s).", 15, 310);
        };
    };

    //Song Name
    ctx.font = "20px " + Setting.DefaultFont;
    ctx.fillText(Title, 15, 345, canvas.width - 30);

    return attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

};

//FUNCTION: Stream Announcements
function function_StreamAnnouncements(member, activity)  {
                  
    CurrentlyStreaming.add(member.user.id + member.guild.id + "SA2");
    setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SA2")}, 1800000);
  
    var type = undefined;
  
    if  (member.voice.streaming == true)  {
        type = "discord";
    } else if (activity.url.startsWith("https://www.twitch.tv"))  {
      type = "twitch";
    } else if  (activity.url.startsWith("https://youtube.com"))  {
      type = "youtube";
    };

    if  (type == "twitch")  {

        var GameName   = function_RemoveFormatting(activity.details, "other", false);
        var GameLink   = activity.url;
        var GameColor  = 6570404;
        var GameHost   = "Twitch";

    } else

    if  (type == "youtube")  {

        var GameName   = function_RemoveFormatting(activity.details, "other", false);
        var GameLink   = activity.url;
        var GameColor  = 13632027;
        var GameHost   = "YouTube";

    } else

    if  (type == "discord")  {

        var GameName   = "Unknown";
        var GameLink   = "[Voice Channel](https://discordapp.com/channels/" + member.guild.id +  "/" + member.voice.channel.id + ")";
        var GameColor  = 7506394;
        var GameHost   = "Discord";
      
        if  (member.presence.activity)  {
            GameName = function_RemoveFormatting(activity.name, "other", false);
        };

    };

    return {  "description": "­ \n **Name:** " + GameName + " \n **Link:** " + GameLink + " \n\n ­",  "color": GameColor,  "author": {  "name": function_RemoveFormatting(member.displayName, "other", true) + " has started live streaming on " + GameHost + "!",  "icon_url": member.user.displayAvatarURL({ "format": "png" })  }  };

};
  
function UpdateLeaderboardTypes(type)  {
      
        if  (type == "Gredit")  {
            var filtered = peeky.userData.filter( p => p.Gredit && p.FashionBadge == true ).array();
            var sorted   = filtered.sort((a, b) => b.Gredit - a.Gredit);
        };
      
        if  (type == "Karma")  {
            var filtered = peeky.userData.filter( p => p.Karma && p.FashionBadge == true ).array();
            var sorted   = filtered.sort((a, b) => b.Karma - a.Karma);
        };
      
        if  (type == "Levels")  {
            var filtered  = peeky.userData.filter( p => p.Level && p.FashionBadge == true ).array();
            var sorted    = filtered.sort((a, b) => b.Level - a.Level);
        };
      
        const top            = sorted.splice(0, 50);
        var currentplace     = 0;
        var CurrentID        = 0;
        var GotBadge         = true;
        const Leaderboard    = [];
        const LeaderboardTop = [];

        for (var data of top)  {

            currentplace ++;

        if  (currentplace == 1)  {CurrentID = "first"} else if  (currentplace == 2)  {CurrentID = "second"}  else if  (currentplace == 3){CurrentID = "third"}  else  {CurrentID = "other"};
        if  (currentplace > 3)  {GotBadge = false};

        if  (peeky.users.has(data.UserID))  {

            var CurrentUser = peeky.users.get(data.UserID);
      
            if  (type == "Gredit")  {
                var PlaceInfo = peeky.userData.get(`${data.UserID}`, 'Gredit').toLocaleString('en') + " Gredit";
            };

            if  (type == "Karma")  {
                var PlaceInfo = peeky.userData.get(`${data.UserID}`, 'Karma').toLocaleString('en') + " Karma";
            };

            if  (type == "Levels")  {
                var PlaceInfo = peeky.userData.get(`${data.UserID}`, 'Level').toLocaleString('en') + " Levels";
            };

            if  (GotBadge == true)  {
                peeky.userData.set(`${data.UserID}`, true, "MedallistBadge");
            };

            var TheBannerShown = DefaultBackground;
            TheBannerShown = function_GetBackground(data.UserID);

            var SavedProfile = "<div class='leaderboarditem' id='" + CurrentID + "' style='background-image: url(" + TheBannerShown + ")'>  <b class='leaderboardname' id='" + CurrentUser.id + "'>  <img src='" + CurrentUser.displayAvatarURL({ format: 'png' }) + "' class='leaderboardicon'>  " + function_RemoveTags(CurrentUser.tag) + "</b>  <br><br>  <b class='leaderboardstats'>" + currentplace + ". place with " + PlaceInfo + "</b>  </div>";
            if  (currentplace == 1 || currentplace == 2 || currentplace == 3)  {
                LeaderboardTop.push(SavedProfile);
            } else  {
                Leaderboard.push(SavedProfile);
            };

        }
         else
        {
         Leaderboard.push("<div class='leaderboarditem' id='" + CurrentID + "'  style='background-image: url(" + DefaultBackground + ")'>  <b class='unknown'>UNAVAILABLE PROFILE  <br>  <font size='2'>  If this profiles stays unavailable for " + function_TimeLeft(peeky.userData.get(data.UserID, "lastSeen"), "days", InactiveTime) + " more days, it will get deleted.  </font></b>  </div>");
        };

        };
      
        if  (type == "Gredit")  {
            return "<center> <div class='leaderboardtop'>" + LeaderboardTop.join("<br><br>") + "  <br><br>  <b class='toptext'> Get in the TOP 3 for the Medallist badge! </b>  </div> </center>" + Leaderboard.join("<br><br>");
        };
      
        if  (type == "Karma")  {
            return "<center> <div class='leaderboardtop'>" + LeaderboardTop.join("<br><br>") + "  <br><br>  <b class='toptext'> Get in the TOP 3 for the Medallist badge! </b>  </div> </center>" + Leaderboard.join("<br><br>");
        };
      
        if  (type == "Levels")  {
            return "<center> <div class='leaderboardtop'>" + LeaderboardTop.join("<br><br>") + "  <br><br>  <b class='toptext'> Get in the TOP 3 for the Medallist badge! </b>  </div> </center>" + Leaderboard.join("<br><br>");
        };
    
};

//Create Server Data
function function_ServerData(key)  {
  
    if  (!peeky.serverData.has(key))  {

        peeky.serverData.ensure(key , {
            GuildID: key,
            lastSeen: Date.now(),
            server_upgraded: false,
            server_invite: "no_invite",
            prefix: Setting.DefaultPrefix,
            language: 0,
            muted_role: "Muted",
            highlighted_channel: "treasures",
            function_notifications: false,
            level_notifications: false,

            Queue: [],
            Title: "None",
            Thumbnail: DefaultBackground,
            Author: "No one",
            Length: 60,
            Started: new Date(),
            Link: "None",

            welcome_messages_bonus: false,
            welcome_messages_bonus_setting: "welcome_messages",
            join_role_bonus: false,
            join_role_bonus_setting: "Member",
            streamer_role_bonus: false,
            streamer_role_bonus_setting: "Streamer",
            automatic_reactions_bonus_setting: "peeky",
            server_message_bonus: false,
            image_only_bonus_setting: 0,
            server_message_bonus_setting: "Welcome to the server!",
            message_log_bonus_setting: "logged_messages",
            member_counter_bonus: false,
            member_counter_bonus_setting: "Members",
            member_counter_bonus_id: null,
            clear_nicknames_bonus: false,
            clear_nicknames_bonus_setting: "Cleared Nickname",
            suspicion_alert_bonus: false,
            suspicion_alert_bonus_setting: 10,
            flood_protection_bonus: false,
            flood_protection_bonus_setting: 2,
            donor_wall_bonus_setting: "Booster",
            donor_wall_bonus: false,
            donor_wall_bonus_id: null,
            donor_wall_bonus_channel: "boosters",
            donor_wall_bonus_array: [],
            banned_words_bonus_setting: [],
            spoiler_only_bonus: false,
            spoiler_lock_bonus_setting: 0,
            event_countdown_bonus: false,
            event_countdown_bonus_setting: 0,
            event_countdown_bonus_id: 0,
            vote_kick_bonus_bonus: false,
            vote_kick_bonus_setting: 10,
            stream_announcements_bonus: false,
            stream_announcements_bonus_setting: "twitch",
            role_saver_bonus: false,
            role_saver_bonus_setting: [],
            role_saver_bonus_array: [],
            game_roles_bonus: false,
            game_roles_bonus_setting: [],
            nick_saver_bonus: false,
            nick_saver_array: [],
            server_age_bonus: false,
            server_age_bonus_id: null,
            dash_remover_bonus: false,
            reddit_posts_bonus: false,
            reddit_posts_bonus_setting: "discordapp",
            reddit_posts_bonus_last: [],
            ticket_system_bonus: false,
            ticket_system_bonus_setting: "Staff",
            ticket_system_bonus_id: null,
            reaction_roles_bonus: false,
            reaction_roles_bonus_setting: [],
            reaction_roles_bonus_id: null,
        });
      
        console.log("Created server data for " + key + ".");
  
    };
  
};

//Create Channel Data
function function_ChannelData(key)  {
  
    if  (!peeky.channelData.has(key))  {

        peeky.channelData.ensure(key , {
            ChannelID: key,

            automatic_reactions_bonus: false,
            image_only_bonus: false,
            message_log_bonus: false,
            banned_words_bonus: false,
            flood_protection_bonus_lastdate: null,
            flood_protection_bonus_lastuser: null,
            flood_protection_bonus_lastmsg: null,
            safe_chat_bonus: false
        });
      
        console.log("Created channel data for " + key + ".");
      
    };
  
};

//Direct Message
function  function_DirectMessage(id, message)  {
  
    if  (!FailedDMs.has(id))  {
      
        peeky.users.get(id).send(message).catch(err => {
            ErrorBag.add(err); 

            FailedDMs.add(id);
            setTimeout(() => {FailedDMs.delete(id)}, 300000);          
        });
      
    };
  
};

//Update Bans
function function_UpdateBans()  {
  
    BannedUsers.splice(0, BannedUsers.length);
    peeky.guilds.get(SupportServer).fetchBans().then(banned => {
        
        banned.array().forEach(i => {
            BannedUsers.push(i.id);
        });

    });
      
    console.log("The banned users have been updated.");
  
};

function function_UpdateAutowipe(key, type)  {

    if  (type == "server")  {
        peeky.serverData.set(key, Date.now(), 'lastSeen');
        console.log("Updated autowipe for " + key + ".");
    };

    if  (type == "user")  {
        peeky.userData.set(key, Date.now(), 'lastSeen');
        console.log("Updated autowipe for " + key + ".");
    };
  
};

//Remove Formatting
function function_RemoveFormatting(text, type, sliced)  {
    
    if  (type == "sm")  {

        var FixedText = function_ProperSlice(text.replace(/[`]/g, '').replace(/\n/g, ' '), 100);

        if  (FixedText !== "")  {
            return FixedText;
        } else {
            return BadFormat;
        };

    } else
  
    if  (type == "channel")  {

        var FixedText = text.toLowerCase().replace(/[~*|`]/g, '').replace(/[ ]/g, '_').replace(/\n/g, '');

        if  (sliced == true)  {
            FixedText.slice(0, 100);
        };

        if  (FixedText !== "")  {
            return FixedText;
        } else {
            return BadFormat;
        };
      
    } else
      
    if  (type == "role")  {

        var FixedText = text.replace(/[~*|`]/g, '').replace(/\n/g, '');

        if  (sliced == true)  {
            FixedText.slice(0, 32);
        };

        if  (FixedText !== "")  {
            return FixedText;
        } else {
            return BadFormat;
        };
      
    } else
      
    if  (type == "other")  {

        var FixedText = text.replace(/[~*|`_]/g, '').replace(/\n/g, '');

        if  (sliced == true)  {
            FixedText = function_ProperSlice(FixedText, 100);
        };

        if  (FixedText !== "")  {
            return FixedText;
        } else {
            return BadFormat;
        };
      
    } else
      
    if  (type == "strict")  {

        var FixedText = text.replace(/[ ~*|`_]/g, '').replace(/\n/g, '');

        if  (FixedText !== "")  {
            return FixedText;
        } else {
            return BadFormat;
        };
      
    };

};

//Detect Link
function function_DetectLink(string)  {

  if  (string.length > 0)  {
    
      if  (string.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g) !== null)  {
          return true;
      } else {
          return false;
      };
    
  };
  
};

//Remove HTML Tags
function function_RemoveTags(text)  {
      return text.replace(/(<([^>]+)>)/ig, "").replace(/[<>]/g, "");
};

//Fix Capitalization
function function_FixCapitalization(text)  {

    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase();
      
};

//Proper Slice
function function_ProperSlice(text, amount)  {
  
    var EndString = "";
    text = text.toString();
  
    if  (text.length > amount)  {
        EndString = "...";
    };
  
    return text.slice(0, amount) + EndString;
  
};

//Random Description
function function_RandomDescription()  {
    return DefaultDescriptions[Math.floor(Math.random()*DefaultDescriptions.length)];
};

//Get Background
function function_GetBackground(key)  {

    if  (peeky.userData.has(key))  {

        if  (isNaN(peeky.userData.get(key, "Background")) == false)  {

            for  (var i = 0; i < Banners.length; i++) {
              
                 if   (peeky.userData.get(key, "Background") == i + 1) {
                      return Banners[i][Banner.Source];
                      break;
                 };
              
            };

        } else {
          return peeky.userData.get(key, "Background");
        };

    };
  
};

//Get Background
function function_GetBackgroundInfo(ID, args)  {

    for (var i = 0; i < Banners.length; i++)  {

        if  (i == ID - 1)  {
          
            var Background = [];

            if  (args.includes("name"))  {
                Background.push(Banners[i][Banner.Name]);
            };

            if  (args.includes("credit"))  {
                Background.push(Banners[i][Banner.Credit]);
                };

            if  (args.includes("id"))  {
                Background.push("`" + ID + "`");
            };

            if  (args.includes("price"))  {
                Background.push(Banners[i][Banner.Price]);
            };

            if  (args.includes("source"))  {
                Background.push(Banners[i][Banner.Source]);
            };

            if  (args.includes("date"))  {
                Background.push(Banners[i][Banner.AddedDate]);
            };

            return Background.join(" ");
            break;
          
        };
              
    };
  
};

//Numarize Array
function function_NumarizeArray(array, brackets)  {

    var Current = 0; var List = [];

    if  (array.length > 0)  {
        array.forEach(i => {
            Current ++;
            List.push(Current + ". " + brackets[0] + i + brackets[1] + "\n");
        });
    } else {
      return "None";
    }

    return List.join("");

};

//Shuffle Array
function function_ShuffleArray(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};

//Date Format
function function_DateFormat(value)  {
  
    value = new Date(value);
      
    var ThisDate  = value.getUTCDate();
    var ThisMonth = value.getUTCMonth() + 1;
      
    if  (ThisDate < 10)  {
        ThisDate = "0" + ThisDate;
    };
      
    if  (ThisMonth < 10)  {
        ThisMonth = "0" + ThisMonth;
    };

    return Days[value.getUTCDay()] + ", " + ThisDate + "/" + ThisMonth + "/" + value.getFullYear();
  
};

//Time Left
function function_TimeLeft(value, type, since)  {

    value = new Date(value);
  
    if  (!isNaN(value))  {
      
        if  (type == "days")  {

            if  (since !== null)  {
                return since - (Math.abs((new Date() - value) / (1000 * 60 * 60 * 24)).toFixed(0));
            }  else  {
                return (Math.abs((new Date() - value) / (1000 * 60 * 60 * 24)).toFixed(0));
            };

        }   else if  (type == "hours")  {

            if  (since !== null)  {
                return since - (Math.abs((new Date() - value) / (1000 * 60 * 60)).toFixed(0));
            }  else  {
                return (Math.abs((new Date() - value) / (1000 * 60 * 60)).toFixed(0));
            };

        }  else if  (type == "minutes")  {

            if  (since !== null)  {
                return since - (Math.abs((new Date() - value) / (1000 * 60)).toFixed(0));
            }  else  {
                return (Math.abs((new Date() - value) / (1000 * 60)).toFixed(0));
            };

        };
      
    }  else  {

       return "Invalid Date"; 
      
    };

};

function UpdateBackgrounds()  {

    fetch('https://peeky.glitch.me/backgrounds.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("BackgroundList").innerHTML = data;
    });

    fetch('https://peeky.glitch.me/workshop.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("Workshop").innerHTML = data;
    });
  
};

function UpdateRandomSongs()  {

    fetch('https://peeky.glitch.me/random_songs.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("RandomSongsList").innerHTML = data;
    });
  
};

function UpdateSupporters()  {

    fetch('https://peeky.glitch.me/supporters.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("SupporterList").innerHTML = data;
    });
  
};

function UpdateLeaderboard()  {

    fetch('https://peeky.glitch.me/leaderboard.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("Leaderboard").innerHTML = data;
    });

  
};

function UpdateServerList()  {

    fetch('https://peeky.glitch.me/server_list.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("ServerList").innerHTML = data;
    });

};

function UpdateServerLog()  {

    fetch('https://peeky.glitch.me/server_log.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("ServerList").innerHTML = data;
    });
  
};

function UpdateHome(text)  {
  
    fetch('https://peeky.glitch.me/stats.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("ServerCount").innerHTML = data
    });
  
    fetch('https://peeky.glitch.me/botdescription.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("botdescription").innerHTML = data
    });

    fetch('https://peeky.glitch.me/randomreview.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("Reviews").innerHTML = data
    });

    fetch('https://peeky.glitch.me/news.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("News").innerHTML = data;
    });

    fetch('https://peeky.glitch.me/staff.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("StaffList").innerHTML = data;
    });

    fetch('https://peeky.glitch.me/featured_profile.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("FeaturedProfile").innerHTML = data;
    });

    fetch('https://peeky.glitch.me/messageheader.txt')
    .then(response => response.text()).then((data) => {
       document.getElementById("messageheader").innerHTML = data;
    });
  
};

peeky.on('ready', () => {

	  console.log("PEEKY is now online.");
    peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));

    //Update Banned Users
    setTimeout(() => {
        function_UpdateBans();
        peeky.guilds.get(SupportServer).members.fetch();
    }, 10000);

    setInterval(() => {
      
        var GuildSize = peeky.guilds.size;
      
        //Set user info
        peeky.user.setAvatar(RandomAvatars[Math.floor(Math.random()*RandomAvatars.length)]).catch(error => ErrorBag.add(error));
        peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));
        console.log("Updated PEEKY's avatar.");

        //Post Server Counts - DDBL
        ddbl.postStats(GuildSize).catch(err => {console.log("Failed to post the server count to DDBL."); ErrorBag.add(err)});
      
        //Post Server Counts - BLS
        bls.postServerCount(GuildSize).catch(err => {console.log("Failed to post the server count to BLS."); ErrorBag.add(err)});

        //Post Server Counts - BFD
        node_fetch(`https://botsfordiscord.com/api/bot/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.BFD_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {console.log("Failed to post the server count to BFD."); ErrorBag.add(err)});

        //Post Server Counts - BD
        node_fetch(`https://discord.boats/api/v2/bot/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.BD_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {console.log("Failed to post the server count to DB."); ErrorBag.add(err)});

        //Post Server Counts - CL
        node_fetch(`https://www.cloudlist.xyz/api/stats/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.CL_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {console.log("Failed to post the server count to CL."); ErrorBag.add(err)});
      
        console.log("Stats posted to Bot Lists.");

        //Update Banned Users
        function_UpdateBans();
      
        //Fix ServerData
        peeky.guilds.forEach(guild => {
            function_ServerData(`${guild.id}`);
        });
      
        //Fix ChannelData
        peeky.channels.forEach(channel => {
            function_ChannelData(`${channel.id}`);
        });
      
    }, 7200000);
  
});

//Fixes
process.on('uncaughtException', function (err) {  ErrorBag.add(err)  });
peeky.on('error', function (err)  {  ErrorBag.add(err) });

//Stats System
peeky.on('message', async (message) => {
  
    if  (message.channel.type !== "dm")  {

    const key   = `${message.author.id}`;
    const keyCF = `${message.channel.id}`;
    const keySF = `${message.guild.id}`;
  
    if  (!message.author.bot && !message.webhookID)  {
      
    peeky.userData.ensure(key , {
        UserID: message.author.id,
        OverviewID: null,
        LanguageID: null,
        lastSeen: new Date(),

        Background: 1,
        Description: function_RandomDescription(),
        Inventory: [1],
        Gredit: 0,
        Karma: 0,
        Exp: 1,
        Level: 1,
        Chests: 0,
        Badges: 0,
        UpgradedServers: 0,
        SupporterSince: 0,
        SupporterLastPurchase: 0,
        BoosterStart: 0,
        DailyRewarded: 0,

        Playlist: [],
        PlaylistName: "Favorite Songs",
        PlaylistThumbnail: null,
      
        ContributorBadge: false,
        BugHunterBadge: false,
        VeteranBadge: false,
        GamblerBadge: 0,    
        CharityBadge: false,    
        FashionBadge: false,    
        VoterBadge: false,
        OwnershipBadge: false,  
        MedallistBadge: false,  
        MovieNighterBadge: false,
        CelebratorBadge: false,
        PollerBadge: false,
        PublisherBadge: false,
        PartyBadge: false,
        HorderBadge: false,
        PainterBadge: false,
        MinerBadge: false,
        GamerBadge: false,
        EvilBadge: false,
        GoodBadge: false,
        GopbotBadge: false,
        TranslatorBadge: false,
        UpgraderBadge: false,
      
        BadgeGredit: 0,
        BadgeExp: 0,
      
        ParticipatedEvents: [],
        Bans: 0
    });

    };

    if  (!message.author.bot && !message.webhookID)  {
      
    //Add Stats
    if  (!GainCooldown.has(message.author.id))  {

    GainCooldown.add(message.author.id);
    setTimeout(() => {GainCooldown.delete(message.author.id)}, 10000);

    var BadgeExpAmount    = 0;
    var BadgeGreditAmount = 0;
    var BadgesAmount      = 0;

    //Default gain
    BadgeGreditAmount += 5;
    BadgeExpAmount    += 5;

    //Upgraded Server
    if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
        BadgeGreditAmount += 2;
        BadgeExpAmount += 2;
    };

        //Staff
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(StaffRole))  {  BadgeExpAmount += 2;  BadgesAmount ++;  };
      
        //Translator
    if  (peeky.userData.get(key, "TranslatorBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Upgrader
    if  (peeky.userData.get(key, "UpgraderBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };

        //Veteran
    if  (peeky.userData.get(key, "VeteranBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Supporter
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Booster
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).premiumSince)  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Bug Hunter
    if  (peeky.userData.get(key, "BugHunterBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Contributor
    if  (peeky.userData.get(key, "ContributorBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Celebrator
    if  (peeky.userData.get(key, "CelebratorBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };

        //Movie Nighter
    if  (peeky.userData.get(key, "MovieNighterBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Medallist
    if  (peeky.userData.get(key, "MedallistBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };
      
        //Evil
    if  (peeky.userData.get(key, "EvilBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Good
    if  (peeky.userData.get(key, "GoodBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };
      
        //Party
    if  (peeky.userData.get(key, "PartyBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Poller
    if  (peeky.userData.get(key, "PollerBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Voter
    if  (peeky.userData.get(key, "VoterBadge") == true)  {  BadgeGreditAmount += 2;  BadgesAmount ++;  };
      
        //Publisher
    if  (peeky.userData.get(key, "PublisherBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };
      
        //Ownership
    if  (peeky.userData.get(key, "OwnershipBadge") == true)  {  BadgeExpAmount += 1;  BadgesAmount ++;  };
      
        //Gopbot
    if  (peeky.userData.get(key, "GopbotBadge") == true)  {  BadgeGreditAmount += 1;  BadgesAmount ++;  };
      
        //Miner
    if  (peeky.userData.get(key, "MinerBadge") == true)  {  BadgeGreditAmount += 1;  BadgesAmount ++;  };
      
        //Gamer
    if  (peeky.userData.get(key, "GamerBadge") == true)  {  BadgeExpAmount += 1;  BadgesAmount ++;  };
      
        //Horder
    if  (peeky.userData.get(key, "HorderBadge") == true)  {  BadgeGreditAmount += 1;  BadgesAmount ++;  };
      
        //Gambler
    if  (peeky.userData.get(key, "GamblerBadge") >= 10)  {  BadgeGreditAmount += 1;  BadgesAmount ++;  };
      
        //Charity
    if  (peeky.userData.get(key, "CharityBadge") == true)  {  BadgeGreditAmount += 1;  BadgesAmount ++;  };

        //Painter
    if  (peeky.userData.get(key, "PainterBadge") == true)  {  BadgeExpAmount += 1;  BadgesAmount ++;  };

        //Fashion
    if  (peeky.userData.get(key, "FashionBadge") == true)  {  BadgeExpAmount += 1;  BadgesAmount ++;  };
      
    BadgeExpAmount    += peeky.userData.get(key, "UpgradedServers");
    BadgeGreditAmount += peeky.userData.get(key, "UpgradedServers");
      
    //EVENT DOUBLE EXP
    if  (Setting.EventStatus == true)  {
        BadgeExpAmount = BadgeExpAmount * 2;
    };
      
    //PROFILE BOOSTER DOUBLE EXP
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(ProfileBoosterRole))  {
        BadgeExpAmount = BadgeExpAmount * 2;
    };

    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeGreditAmount), "Gredit");
    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeExpAmount), "Exp");
      
    peeky.userData.set(key, BadgeGreditAmount, "BadgeGredit");
    peeky.userData.set(key, BadgeExpAmount, "BadgeExp");
    peeky.userData.set(key, BadgesAmount, "Badges");

    };

    //Level Up
    if  (peeky.userData.get(key, "Exp") >= Setting.ExpNeeded * peeky.userData.get(key, "Level")) { 
        
        peeky.userData.set(key, 1, "Exp");
        peeky.userData.math(key, "+", 1, "Level");
        peeky.userData.math(key, "+", 1, "Chests");
    
    if  (peeky.serverData.get(keySF, "level_notifications") == true)  {
      
        //Level Up Message
        const canvas = Canvas.createCanvas(500, 95);
        const ctx = canvas.getContext('2d');
        var   Failed = false;

        ctx.globalAlpha = 0.75;

        var TheBannerShown = DefaultBackground;
        var ProfileName = message.member.displayName;

        message.channel.startTyping();

        var TheBannerShown = DefaultBackground;
        if  (peeky.userData.has(key))  {
            TheBannerShown = function_GetBackground(key);
        };

        const background = await Canvas.loadImage(TheBannerShown)//.catch(error => {Failed = true;  peeky.userData.set(message.author.id, DefaultBackground, "Background");});

        if  (Failed == false)  {

            ctx.drawImage(background, 0, 0, canvas.width, 300);  

            const layout = await Canvas.loadImage("http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Flevel_up_layout_2.png?v=1561018982613");
            ctx.drawImage(layout, 0, 0, canvas.width, canvas.height);

            //Setting
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 1; 
            ctx.shadowOffsetY = 1;
            ctx.globalAlpha = 1;
            ctx.textAlign = "left";

            //Draw Events

            //Name String
            ctx.font = "25px " + Setting.DefaultFont;
            ctx.fillStyle = "white";
            ctx.fillText(ProfileName, 125, 40, canvas.width - 125);

            //Level Up String
            ctx.font = "18px " + Setting.DefaultFont;
            ctx.fillStyle = "lightgreen";
            ctx.fillText("Has reached Level " + peeky.userData.get(key, "Level") + "!", 125, 75);

            //Avatar
            ctx.shadowOffsetX = 0; 
            ctx.shadowOffsetY = 0;
            const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }).replace("https", "http"));
            ctx.drawImage(avatar, 7, 7, 82, 82);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

            message.channel.send("", attachment).catch(error => ErrorBag.add(error));

            message.channel.stopTyping();

            console.log("The Notifications function has been triggered in " + message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

        };

    };  
  
    };
    };
  
};

//API
if  (!WebsiteCooldowns.has("api"))  {
      
    WebsiteCooldowns.add("api");
    setTimeout(() => {WebsiteCooldowns.delete("api")}, 300000);

    const UpdatedApi = {
      "botName": peeky.user.username,
      "botDescription": Setting.Description,
      "botShortDescription": Setting.ShortDescription,
      "botSummary": Setting.Summary,
      "botAvatar": peeky.user.avatarURL({ format: 'png' }),
      "botId": peeky.user.id,
      "ownerId": OwnerId,
      
      "defaultPrefix": Setting.DefaultPrefix,
      "ageCount": function_TimeLeft(peeky.user.createdAt, "days", null),
      "serverLimit": Setting.MaxServers,
      "serverCount": peeky.guilds.size,
      "upgradedServers": peeky.serverData.filter(i => i.server_upgraded == true).size,
      "profileCount": peeky.userData.count,
      "supporterCount": peeky.guilds.get(SupportServer).members.filter(m => m.roles.has(SupporterRole)).size,
      "backgroundsCount": Banners.length,

      "eventName": Setting.EventName,
      "eventStatus": Setting.EventStatus,

      "customBackground": Setting.CustomBackgroundPrice,
      "sellMultiplier": Setting.SellMultiplier,
      "expMultiplier": Setting.ExpNeeded
    };
  
    await fs.writeFile('public/api.json', JSON.stringify(UpdatedApi, null, 2), (err) => {
        if (err) console.log(err); 
    });
      
    console.log("The API has been updated.");
      
};

//Auto Wipe
if  (!WebsiteCooldowns.has("autowipe"))  {
      
    WebsiteCooldowns.add("autowipe");
    setTimeout(() => {WebsiteCooldowns.delete("autowipe")}, 3600000);
  
    const rightNow = Date.now();
  
    //Guilds
    var filtered       = peeky.serverData.filter( p => p.GuildID && p.lastSeen);
    var toRemoveGuilds = filtered.filter(data => rightNow - InactiveWipe > data.lastSeen);

    toRemoveGuilds.forEach(async data => {
      
        if  (data.server_upgraded !== true && !ImmuneServers.includes(data.GuildID))  {
      
            peeky.serverData.delete(data.GuildID);

            var Guild = peeky.guilds.get(data.GuildID);
            if  (Guild !== undefined)  {
                if  (Guild.owner)  {
                    const embed = {"description": "I'm leaving your server called **" + Guild.name + "** because of inactivity.", "footer": { "text": "https://peeky.glitch.me/tutorials.html#autowipe" }, "color": EmbedColor}; 
                    await function_DirectMessage(Guild.owner.user.id, { embed });
                };
                await Guild.leave();
            };

            console.log("I have removed an inactive server.");    
          
        };

    });
      
    //Profiles
    var filtered         = peeky.userData.filter( p => p.UserID && p.lastSeen );
    var toRemoveProfiles = filtered.filter(data => rightNow - InactiveWipe > data.lastSeen);

    toRemoveProfiles.forEach(data => {
        if  (!peeky.users.has(data.UserID) || data.FashionBadge == false)  {
            console.log("I have wiped an inactive profile.");
            peeky.userData.delete(`${data.UserID}`);
        };
    });
    
};

//Leaderboard
if  (!WebsiteCooldowns.has("leaderboard"))  {

    WebsiteCooldowns.add("leaderboard");
    setTimeout(() => {WebsiteCooldowns.delete("leaderboard")}, 600000);

    peeky.userData.filter( p => p.MedallistBadge == true ).array().forEach(data => {
        peeky.userData.set(`${data.UserID}`, false, "MedallistBadge");
    });
  
    var LeaderboardGredit = await UpdateLeaderboardTypes("Gredit");
    var LeaderboardKarma  = await UpdateLeaderboardTypes("Karma");
    var LeaderboardLevel  = await UpdateLeaderboardTypes("Levels");

    await fs.writeFile('public/leaderboard.txt', "<div id='gredit'>" +  LeaderboardGredit + "</div>  <div id='karma'>" +  LeaderboardKarma + "</div>  <div id='levels'>" +  LeaderboardLevel + "</div>", (err) => {
        if (err) console.log(err);
    });

    console.log("The leaderboard has been updated.");

};

//Backgrounds
if  (!WebsiteCooldowns.has("backgrounds"))  {

    WebsiteCooldowns.add("backgrounds");
    setTimeout(() => {WebsiteCooldowns.delete("backgrounds")}, 600000);

    const BackgroundList = [];
    var   Current        = 0;            
    var   Fillers        = 0;

    Banners.forEach(background_info => {

          Current ++;
      
          var CommandString = Setting.DefaultPrefix + 'seebackground ' + Current;
          var NewString     = "";
          var RevenueString = "";
          var Price         = "";

          if  (background_info[4] !== undefined && peeky.userData.has(background_info[4]))  {
              RevenueString = " <font color='lightgreen'>Revenue Enabled</font>";
          };

          if  (background_info[1] == Exclusive)  {
              Price = Exclusive;
          } else {
            Price = background_info[1] + " Gredit";
          };

          if  (Date.now() - background_info[5] < DayMs)  {
              NewString = " <font color='lightgreen'>New</font>";
          };
      
          var BackgroundString = '<div class="background">  <img src="' + background_info[0] + '"  width="500" height="300" class="background_image">  <div id="' + Current + '">  <div class="background_centered">  <b class="background_text">  <font size="3">  ' + background_info[2] + RevenueString + NewString + '  </font>  <br>  <font size="2" color="lightgray">' + background_info[3] + '</font>  <br><br>  <font size="2" color="lightgray">' + Price.toLocaleString('en') + '</font>  <br>  <font size="1" color="lightgray"> ' + CommandString + '</font></b> </div>  </div>  </div>';
    
          BackgroundList.push(BackgroundString);
    
    });

    await fs.writeFile('public/backgrounds.txt', "<div> " + BackgroundList.reverse().join(" ") + " </div>", (err) => {
        if (err) console.log(err);
    });

    console.log("The backgrounds have been updated.");

};
  
//Workshop
if  (!WebsiteCooldowns.has("workshop"))  {

    WebsiteCooldowns.add("workshop");
    setTimeout(() => {WebsiteCooldowns.delete("workshop")}, 600000);

    var WorkshopList = [];

    peeky.channels.get(WorkshopChannel).messages.fetch({ limit: 50 }).then(async (messages) => {
      
    messages.forEach(m => {
          
        if  (!m.reactions.find(r => r.emoji.name == "🏁") && m.reactions.find(r => r.emoji.id == DefaultUpvote) && m.reactions.find(r => r.emoji.id == DefaultDownvote) && m.attachments.size > 0 && m.content.includes("Name: ") && m.content.includes("Credit: ") && m.content.includes("Price: "))  {
        
            var BackgroundString = '<div class="background">  <img src="' + m.attachments.array()[0].url + '" width="500" height="300" class="background_image">  <div class="background_centered">  <b class="background_text">  <font size="3">  ' + function_FixCapitalization(m.content.split("\n")[0].replace("Name: ", "")) + '  </font>  <br>  <font size="2" color="lightgray">  ' + m.content.split("\n")[1].replace("Credit: ", "") + '  </font>  <br><br>  <font size="2">  ~ ' + m.content.split("\n")[2].replace("Price: ", "").toLocaleString('en') + ' Gredit </font>  <br>  <font size="1" color="lightgreen">  ' + (m.reactions.find(r => r.emoji.id == DefaultUpvote).count - 1) + '  Upvotes</font>  <font size="1">🞄</font>  <font size="1" color="pink">  ' + (m.reactions.find(r => r.emoji.id == DefaultDownvote).count - 1) + '  Downvotes</font>   </b>  </div>  </div>';
            WorkshopList.push(BackgroundString);

        };
    
    });

    await fs.writeFile('public/workshop.txt', "<div class='workshop'>" + WorkshopList.join(" ") + "</div>", (err) => {
        if (err) console.log(err);
    });  
      
    console.log("The workshop has been updated.");
    
    }).catch(error => ErrorBag.add(error));

};

//Message Header
if  (!WebsiteCooldowns.has("messageheader"))  {
  
    WebsiteCooldowns.add("messageheader");
    setTimeout(() => {WebsiteCooldowns.delete("messageheader")}, 300000);
    
    var Message = "";
  
    if  (Setting.EventStatus == true)  {
        Message = '<b class="messageheader">You can currently participate in the ' + Setting.EventName + ' event!</b>';  
    }
    else if  (Setting.Announcement !== "")  {
        Message = '<b class="messageheader">' + Setting.Announcement + ' </b>';  
    };

    await fs.writeFile('public/messageheader.txt', Message, (err) => {
        if (err) console.log(err);
    });

    console.log("The message header has been updated.");

};

//Random Songs
if  (!WebsiteCooldowns.has("randomsongs"))  {

    WebsiteCooldowns.add("randomsongs");

    const SongList = [];
    var   Current  = 0;

    RandomSongs.forEach(song_info => {
          Current ++;
          SongList.push('<iframe width="560" height="315" src="' + song_info.replace("watch?v=", "embed/") + '" frameborder="0"></iframe>');
    });


    await fs.writeFile('public/random_songs.txt', SongList.join(" <br> "), (err) => {
        if (err) console.log(err);
    });

    console.log("The random songs have been updated.");

};

//Server List
if  (!WebsiteCooldowns.has("serverlist"))  {

    WebsiteCooldowns.add("serverlist");
    setTimeout(() => {WebsiteCooldowns.delete("serverlist")}, 600000);

    var serverlist = peeky.serverData.filter( p => p.server_upgraded == true && p.GuildID ).array();
    var ServerList = []; 

    for (var data of serverlist)  {
      
        if  (peeky.guilds.has(data.GuildID))  {

            if  (peeky.serverData.get(`${data.GuildID}`, "server_invite") !== "no_invite")  {
                var ServerInfo = "<font size='2' color='lightgray'>" + peeky.guilds.get(data.GuildID).members.filter(m => !m.user.bot).size.toLocaleString('en') + " members</font>";
            }  else  {
                var ServerInfo = "<font size='2' color='pink'>No Invite</font>";    
            };

            ServerList.push("<a href='https://discordapp.com/invite/" + data.server_invite + "'>  <div class='displayitem' id='" + data.GuildID + "' style='background-image: url(" + peeky.guilds.get(data.GuildID).iconURL() + ")'>  <b class='displayname'>" + function_RemoveTags(peeky.guilds.get(data.GuildID).name) + "  <br>  " + ServerInfo + "  </b>  </div>  </a>");
      
        };
          
    };

    await fs.writeFile('public/server_list.txt', ServerList.join(" "), (err) => {
        if (err) console.log(err);
    });

    console.log("The server list has been updated.");

};
  
//Supporters
if  (!WebsiteCooldowns.has("supporters"))  {
      
    WebsiteCooldowns.add("supporters");
    setTimeout(() => {WebsiteCooldowns.delete("supporters")}, 600000);

    var SupporterList = [];
    peeky.guilds.get(SupportServer).members.filter(m => m.roles.has(SupporterRole)).forEach(m => {
    if  (peeky.userData.has(m.user.id))  {

        /*
        var TheBannerShown = DefaultBackground;
        TheBannerShown = function_GetBackground(m.user.id);
        */
      
        var SupporterDate = new Date();
        if  (peeky.userData.has(m.user.id, "SupporterSince"))  {
            var SupporterDate = peeky.userData.get(m.user.id, "SupporterSince");
        };

        SupporterList.push("<div class='displayitem' id='" + m.user.id + "' style='background-image: url(" + m.user.displayAvatarURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(m.user.username) + "  <br>  <font size='1' color='lightgray'>  Supporter for " + function_TimeLeft(peeky.userData.get(m.user.id, "SupporterSince"), "days", null).toLocaleString('en') + " days" + ".  </font>  </b>  </div>");
      
    };
    });
  
    if  (SupporterList.length == 0)  {
        SupporterList.push('<center><font size="4">  You can become a supporter in the store!  </font></center>')
    };

    await fs.writeFile('public/supporters.txt', SupporterList.join(" "), (err) => {
        if (err) console.log(err);
    });
      
    console.log("The supporters list has been updated.");

};

//Server Log
if  (!WebsiteCooldowns.has("serverlog"))  {

    WebsiteCooldowns.add("serverlog");
    setTimeout(() => {WebsiteCooldowns.delete("serverlog")}, 600000);

    var serverloglist = peeky.serverData.filter( p => p.GuildID ).array();
    var ServerLogList = [];

    serverloglist.forEach(data =>  {
      
        if  (peeky.guilds.has(data.GuildID))  {
          
            if  (ImmuneServers.includes(data.GuildID) || data.server_upgraded == true)  {
                var ImmuneString = "Immune";
            } else {
              var ImmuneString = "Not Immune";
            };

            ServerLogList.push("<div class='displayitem' style='background-image: url(" + peeky.guilds.get(data.GuildID).iconURL() + ")'>  <b class='displayname' value='" + data.GuildID + "'>" + function_RemoveTags(peeky.guilds.get(data.GuildID).name) + "  <br>  " + function_TimeLeft(peeky.serverData.get(data.GuildID, "lastSeen"), "days", InactiveTime) + " days left" + "  <br>  " + peeky.guilds.get(data.GuildID).members.filter(m => m.user.bot).size + " bots" + "  <br>  " + ImmuneString + "   </b></div>");
          
        };
      
    });

    await fs.writeFile('public/server_log.txt', ServerLogList.join(" "), (err) => {
        if (err) console.log(err);
    });

    console.log("The server log has been updated.");

};
  
//News
if  (!WebsiteCooldowns.has("news"))  {
      
    WebsiteCooldowns.add("news");
    setTimeout(() => {WebsiteCooldowns.delete("news")}, 600000);

    var NewsList = [];

    peeky.channels.get(AnnouncementsChannel).messages.fetch({ limit: 10 }).then(async (messages) => {
          
    await messages.forEach(m => {
        var Header = m.content.split("\n")[0];
        var Body   = m.content.split("\n").join(" ").replace(Header, "");
        var Image  = [];
        var PrefixImage = "";
        var ImageLink   = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fpattern_fog.png?v=1576095415615";
      
        if  (m.attachments.size > 0)  {
            ImageLink = m.attachments.array()[0].url;
        }

        NewsList.push('<div class="newsitem" style="background-image: url(' + ImageLink + ')">  <div class="textbackground">  <b class="newsheader">  ' + function_RemoveFormatting(Header, "other", true) + '  </b>  <br>  <b class="newsauthor">  <font color="#7289DA">' + m.author.tag + '</font> @ <font color="#7289DA">' + function_DateFormat(m.createdAt) + '</font>  </b>  <b class="newsbody">  ' + function_ProperSlice(function_RemoveFormatting(Body, "other", false), 250) + '  </b>  <a class="button" href="' + m.url + '">🔍</a>  </div>  </div>');
    });

    await fs.writeFile('public/news.txt', NewsList.join(""), (err) => {
        if (err) console.log(err);
    });    
    
    }).catch(error => ErrorBag.add(error));
      
    console.log("The news have been updated.");

};

//Staff
if  (!WebsiteCooldowns.has("staff"))  {
      
    WebsiteCooldowns.add("staff");
    setTimeout(() => {WebsiteCooldowns.delete("staff")}, 600000);

    var DevList    = [];
    var ModList    = [];

    peeky.guilds.get(SupportServer).members.forEach(m => {
      
      if  (m.roles.has(StaffRole))  {

          var CurrentContact = '<div class="container">  <img src=' + '"' + m.user.displayAvatarURL({ format: 'png' }) + '" width="200px" height="200px" class="stafficon">  <b class="description">  <font size="3"> ' + function_RemoveTags(m.displayName) + '  </font>  <br>  <font size="1" color="lightgray"> ' + function_RemoveTags(m.user.tag) + '  </font>  </b>  </div>';  

          if  (m.roles.has("574255080069398543"))  {
              DevList.push(CurrentContact);
          };

          if  (m.roles.has("574255771840282625"))  {
              ModList.push(CurrentContact);
          };

      };
      
    });
  
    if  (ModList.length == 0)  {
        ModList = ["There are currently no Moderators in the Support Server."];
    };

    await fs.writeFile('public/staff.txt', '<font size="5" class="item_header">Developers of PEEKY</font>  <br>  <div class="inlinediv">  ' + DevList.join(" ") + '  </div>  <font size="5" class="item_header">Moderators of the Support Server</font>  <br>  <div class="inlinediv">  ' + ModList.join(" ") + '  </div>', (err) => {
        if (err) console.log(err);
    });
      
    console.log("The staff has been updated.");

};

//Random Review
if  (!WebsiteCooldowns.has("randomreview"))  {
      
    WebsiteCooldowns.add("randomreview");
    setTimeout(() => {WebsiteCooldowns.delete("randomreview")}, 600000);
  
    node_fetch(`https://ls.terminal.ink/api/v2/bots/${peeky.user.id}`, {
        method: 'GET'
    }).then(response => response.json()).then(async (data) => {
      
    var FilteredReviews = data.data.reviews.filter(r => r.text.length >= Setting.MinReviewLength);
      
    var Length = FilteredReviews.length;
    var RandomReview = Math.round(Math.random() * Length);
      
    if  (RandomReview >= Length)  {  RandomReview = 0  };
      
    var DaysOld        = Math.ceil((new Date() - peeky.user.createdAt) / 8.64e7) - 1;
    var ReviewDate     = new Date(FilteredReviews[RandomReview].date);
    var ReviewFullDate = function_DateFormat(ReviewDate);
      
    await fs.writeFile('public/randomreview.txt',  "<font color='#7289DA' size='1'>Review with " + FilteredReviews[RandomReview].rating + "/5 Star rating from " + ReviewFullDate + ".</font>" + "<br>" + " <font color='white' size='3'>" + FilteredReviews[RandomReview].text + "</font>  <br><br>  <center><font color='#7289DA' size='1'>Your review must be atleast " + Setting.MinReviewLength + " characters long to show up.</font></center>", (err) => {
        if (err) console.log(err); 
    });
      
    }).catch(err => {
        ErrorBag.add(err);
    });
      
    console.log("The featured review have been updated.");
      
};

//Stats
if  (!WebsiteCooldowns.has("stats"))  {
      
    WebsiteCooldowns.add("stats");
    setTimeout(() => {WebsiteCooldowns.delete("stats")}, 600000);

    await fs.writeFile('public/stats.txt', "<a class='botstats'><font color='#7289DA'>" + peeky.guilds.size + " / " + Setting.MaxServers + "</font> Servers</a>  <br>  <a class='botstats'><font color='#7289DA'>" + peeky.userData.count + "</font> Profiles</a>  <br>  <a class='botstats'><font color='#7289DA'>" + function_TimeLeft(peeky.user.createdAt, "days", null) + "</font> Days Old</a>", (err) => {
        if (err) console.log(err); 
    });
      
    console.log("The stats have been updated.");
      
};

//Bot Description
if  (!WebsiteCooldowns.has("botdescription"))  {
      
    WebsiteCooldowns.add("botdescription");

    await fs.writeFile('public/botdescription.txt', Setting.Description, (err) => {
        if (err) console.log(err); 
    });
      
    console.log("The bot description has been updated.");
      
};

});

//MISC
peeky.on("guildCreate", async (guild) =>  {

const keySF = `${guild.id}`;
  
const embed = {"description": " I have been added to a server called **" + function_RemoveFormatting(guild.name, "other", true) + "** with **" + guild.members.filter(m => m.user.bot).size + " bots**.",  "footer": {  "text": guild.id  },  "color": 8311585};
peeky.channels.get(ServerLogChannel).send({ embed });
  
if  (peeky.guilds.size > Setting.MaxServers || BannedUsers.includes(guild.owner.user.id))  {
    const embed = {"description": "Something went wrong while joining your server, try again later.",  "color": EmbedColor}; 
    await function_DirectMessage(guild.owner.user.id, { embed });
    guild.leave();
} else {
  function_ServerData(keySF);
};

});

peeky.on("guildDelete", async (guild) =>  {
  
const keySF = `${guild.id}`;

const embed = {"description": " I have been removed from a server called **" + function_RemoveFormatting(guild.name, "other", true) + "**.",  "footer": {  "text": guild.id  },  "color": 12854839};
peeky.channels.get(ServerLogChannel).send({ embed });

});

peeky.on("channelDelete", async (channel) => {
  
const keyCF = `${channel.id}`;

if  (peeky.channelData.has(keyCF))  {
    console.log("I have wiped the settings of a channel because it got deleted.");
    peeky.channelData.delete(keyCF);
};

});

peeky.on("guildBanAdd", async (guild, user) => {
  
const key = `${user.id}`;

//Log Bans
if  (peeky.userData.has(key))  {
  
    if  (peeky.userData.has(key, "Bans"))  {
        peeky.userData.math(key, "+", 1, "Bans");
    }  else  {
       peeky.userData.set(key, 1, "Bans");
    };
  
};

});
//END

//FUNCTIONS

//MEMBER JOINED EVENTS
peeky.on('guildMemberAdd', async (member) => {
  
const key    = `${member.user.id}`;
const keySF  = `${member.guild.id}`;
var   Failed = false;
  
if (member.user.id !== PeekyId && peeky.serverData.has(keySF)) {
  
const VerificationLevels  = [  "None", "Low", "Medium", "High", "Very High"  ];
  
//Server Message
if  (peeky.serverData.get(keySF, "server_message_bonus") == true && !member.user.bot)  {
      
    const embed = {"description": peeky.serverData.get(keySF, "server_message_bonus_setting").replace(GuildNameTag, function_RemoveFormatting(member.guild.name, "other", true)).replace(GuildSizeTag, member.guild.members.filter(m => !m.user.bot).size).replace(GuildOwnerTag, member.guild.owner.user.tag).replace(GuildVerificationTag, VerificationLevels[member.guild.verificationLevel]).replace(GuildAcronymTag, member.guild.nameAcronym),  "footer":  {"text": "This message's content was not created by PEEKY."},  "color": EmbedColor}; 
    function_DirectMessage(member.user.id, { embed });

};

//Suspicion Alert
if  (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true && !member.user.bot)  {
      
    var owner      = member.guild.owner.user.id;
    var Suspicions = 0;
    var Reasons     = [];
    const BanLimit = peeky.serverData.get(keySF, "suspicion_alert_bonus_setting");
  
    //Account created less than 7 days ago
    if  (new Date() - new Date(member.user.createdAt) <= 604800000 )  {
        Reasons.push("Account created less than 7 days ago.");
    };

    //Account has alot of logged bans
    if  (peeky.userData.has(key) && peeky.userData.get(key, "Bans") >= BanLimit)  {
        Reasons.push("Has " + peeky.userData.get(key, "Bans") + " recorded bans.");
    };
  
    //Account is banned from using PEEKY
    if  (BannedUsers.includes(member.user.id))  {
        Reasons.push("Banned from using PEEKY.");
    };

    if  (Reasons.length > 0)  {
        function_DirectMessage(owner, "**Someone suspicious has joined " + function_RemoveFormatting(member.guild.name, "other", true) + "!**\nBe wary about this user but don't punish them just because you've got this message!\n\n**Suspect:** " + function_RemoveFormatting(member.user.tag, "other", true) + " (<@" + member.user.id + ">)\n**Reasons:** " + Reasons.join(" / ") + "\n­"); 
        
        console.log("The Suspicion Alert function has been triggered in " + member.guild.name + ".");
        function_UpdateAutowipe(keySF, "server");
    };
  
};
    
//Join Role
if  (peeky.serverData.get(keySF, "join_role_bonus") == true)  {
  
    if  (member.guild.me.permissions.has("MANAGE_ROLES"))  {

        var Role = member.guild.roles.find(role => role.name == peeky.serverData.get(keySF, "join_role_bonus_setting"));

        if  (Role) {
            member.roles.add(Role.id, "Triggered by the Join Role function.").catch(error => ErrorBag.add(error));
          
            console.log("The Join Role function has been triggered in " + member.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");
        };

    };

};
    
//Verification System
if  (peeky.serverData.get(keySF, "verification_system_bonus") == true)  {
  
    if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES") && member.guild.me.permissions.has("KICK_MEMBERS"))  {

        var Role = member.guild.roles.find(role => role.name == peeky.serverData.get(keySF, "verification_system_bonus_setting"));
        var Recaptcha = Math.random().toString(36).substr(2,10);

        if  (Role)  {
          
            const canvas = Canvas.createCanvas(250, 100);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage(MainBackground);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 1; 
            ctx.shadowOffsetY = 1;
            ctx.textAlign = "center";
            ctx.font = "20px " + Setting.DefaultFont;
            ctx.fillText(Recaptcha, 125, 55, canvas.width - 30);

            const attachment = await new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });
            
            const embed = {"description": "**Verification System**\nYou have 60 seconds to type the code below and obtain full access to the server.", "color": EmbedColor}; 
            await function_DirectMessage(member.user.id, { embed });
            await function_DirectMessage(member.user.id, attachment);
          
            member.user.createDM().then(channel =>  {
              
                QueuedSOSMessages.add(member.user.id);
              
                channel.awaitMessages(response => response.content == Recaptcha, {
                    max: 1,
                    time: 60000,
                    errors: ['time'],
                }).then(async (collected) => {
                    QueuedSOSMessages.delete(member.user.id);

                    const embed = {"description": SuccessIcon + " You have unlocked the full access to the server.",  "color": EmbedColor}; 
                    await function_DirectMessage(member.user.id, { embed });

                    member.roles.add(Role.id, "Triggered by the Verification System function.").catch(error => ErrorBag.add(error));

                }).catch(async () => {
                    QueuedSOSMessages.delete(member.user.id);
                  
                    if  (!member.roles.has(Role.id))  {
                        const embed = {"description": ErrorIcon + " Rejoin the server to restart the verfication process.",  "color": EmbedColor}; 
                        await function_DirectMessage(member.user.id, { embed });

                        member.kick("Triggered by the Verification System function.").catch(error => ErrorBag.add(error));
                    } else {
                      const embed = {"description": InfoIcon + " Seems like you have already verified yourself in this server.",  "color": EmbedColor}; 
                      await function_DirectMessage(member.user.id, { embed });
                    };
                });
              
            }).catch(error => ErrorBag.add(error));
      
            console.log("The Verification System function has been triggered in " + member.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");
          
        };

    };

};
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
  if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES"))  {
    
      if  (peeky.serverData.has(keySF, "role_saver_bonus_array"))  {
      
          var SavedRoles = peeky.serverData.get(keySF, "role_saver_bonus_array");
        
          SavedRoles.forEach(current => {
            
              if  (current[0] == member.user.id)  {
                
                  const ValidRoles = [];
                
                  current[1].forEach(role => {
                      
                    if  (member.guild.roles.find(r => r.id == role))  {
                        ValidRoles.push(role);
                    };                  
                    
                  });

                  if  (ValidRoles.length > 0)  {
                
                      member.roles.set(ValidRoles, "Triggered by the Role Saver function.").catch(error => ErrorBag.add(error));

                      console.log("The Role Saver function has been triggered in " + member.guild.name + ".");
                      function_UpdateAutowipe(keySF, "server");
                    
                  };
                
              };
            
          });  

      };

  };

};
    
//Nickname Saver
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {

    if  (member.guild.me.permissions.has("MANAGE_NICKNAMES"))  {

        if  (peeky.serverData.has(keySF, "nick_saver_array"))  {

            var SavedNicks = peeky.serverData.get(keySF, "nick_saver_array");

            SavedNicks.forEach(current => {

                if  (current[0] == member.user.id && current[1] !== null)  {

                    member.setNickname(current[1], "Triggered by the Nickname Saver function.");

                    console.log("The Nickname Saver function has been triggered in " + member.guild.name + ".");
                    function_UpdateAutowipe(keySF, "server");

                };

            });  
        };

    };

};
  
//Clear Nicknames
if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)  {

    if  (member.guild.me.permissions.has("MANAGE_NICKNAMES") && !member.user.bot)  {

        var Username = member.user.username.toLowerCase().toString();
        var NewNickname = Username.match(/[aábcčdďeéěfghiíjklmnňoópqrřsštuůúvwxyýzž0123465789 ]/g); 

        if  (NewNickname !== null)  {
            NewNickname = NewNickname.join("");
        };

        if  (Username !== NewNickname)  {

            var NotSaved = true;
            peeky.serverData.get(keySF, "nick_saver_array").forEach(current => {
              
                if  (current[0] == member.user.id && current[1] !== null)  {
                    NotSaved = false;
                };
              
            }); 
          
            if  (NotSaved == true)  {
              
                if  (NewNickname == null)  {
                    NewNickname = peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + " (" + Math.random().toString(36).substr(2, 6) + ")";
                } else {
                  NewNickname = function_FixCapitalization(NewNickname);
                };

                member.setNickname(NewNickname, "Triggered by the Clear Nicknames function.").catch(error => ErrorBag.add(error));

                console.log("The Clear Nicknames function has been triggered in " + member.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
              
            };

        };

    };

};

//Welcome Messages
if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)  {
    
    const guild     = member.guild;
    var ProfileName = member.user.username;
    const name      = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var Detected    = false;

    var channel = guild.channels.find(c=> c.name == name);
    
    if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES' && 'ATTACH_FILES'))  {
      
        if  (BlacklistedWebsites.some(word => function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
            Detected = true;
        };

        if  (Detected == true)  {

            await member.guild.members.ban(member.id, "Triggered by the Welcome Messages function.").catch(error => {
                  ErrorBag.add(error);
                  var Failed = true;
            });

            if  (Failed == true)  {
                const embed = {"description": "**You have been automatically banned for having a possible website advertisment in your username.**  \n  Contact the server owner " + member.guild.owner.user.tag + " to get your ban revoked.",  "color": EmbedColor}; 
                function_DirectMessage({ embed });
            };

        };

        await channel.send("", await function_WelcomeMessagesEmbed(member, "join", Detected)).catch(error => ErrorBag.add(error));

        console.log("The Welcome Messages function has been triggered in " + member.guild.name + ".");
        function_UpdateAutowipe(keySF, "server");
      
    };

};

};

});

//MEMBER LEFT EVENTS
peeky.on("guildMemberRemove", async (member) => {
  
const key = `${member.user.id}`;
const keySF = `${member.guild.id}`;

if (member.user.id !== PeekyId && peeky.serverData.has(keySF))  {
    
//Welcome Messages
if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)  {
    
    const guild     = member.guild;
    var ProfileName = member.user.username;
    const name      = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var Detected    = false;

    var channel = guild.channels.find(c=> c.name == name);
    
    if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES' && 'ATTACH_FILES'))  {
      
        if  (BlacklistedWebsites.some(word => function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
            Detected = true;
        };

        await channel.send("", await function_WelcomeMessagesEmbed(member, "leave", Detected)).catch(error => ErrorBag.add(error));

        console.log("The Welcome Messages function has been triggered in " + member.guild.name + ".");
        function_UpdateAutowipe(keySF, "server");

    };
  
};

};
});

//GUILD MEMBER UPDATE EVENTS
peeky.on("guildMemberUpdate", async (oldMember, newMember) => {
  
const key    = `${newMember.user.id}`;
const keySF  = `${newMember.guild.id}`;
const member = newMember;
  
//FUNCTIONS
if (member.user.id !== PeekyId && peeky.serverData.has(keySF))  {
    
//Role Saver System
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {

    if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES"))  {
  
        if  (peeky.serverData.has(keySF, "role_saver_bonus_array"))  {

            const SavedRoles  = peeky.serverData.get(keySF, "role_saver_bonus_array");
            const Setting = peeky.serverData.get(keySF, "role_saver_bonus_setting");
            const MemberIndex = SavedRoles.findIndex(i => i[0] == member.user.id);

            if  (MemberIndex >= 0)  {
                SavedRoles[MemberIndex][1] = member.roles.filter(r => r.name !== "@everyone" && !Setting.includes(r.name)).map(r => r.id);
            } else {
              SavedRoles.push([member.user.id, member.roles.filter(r => r.name !== "@everyone" && !Setting.includes(r.name)).map(r => r.id)]);
            };

        };
      
    };

};
    
//Nickname Saver System
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {

    if  (member.guild.me.permissions.has("MANAGE_NICKNAMES"))  {
  
        if  (peeky.serverData.has(keySF, "nick_saver_array"))  {

            var SavedNicks  = peeky.serverData.get(keySF, "nick_saver_array");
            var MemberIndex = SavedNicks.findIndex(i => i[0] == member.user.id);

            if  (MemberIndex >= 0)  {
                    SavedNicks[MemberIndex][1] = member.nickname;
            } else {
                  SavedNicks.push([member.user.id, member.nickname]);
            };

        };
      
    };

};
  
//Store Rewards System
if  (keySF == SupportServer)  {

    var PurchaseComplete = false;
    var Failed = false;
    var Rewards = [];
    var Notes = [];
  
    if  (new Date() - new Date(member.joinedAt) > 5000)  {

        //Server Boost
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.find(r => r.id == BoosterRole);
            var HasRole = newMember.roles.find(r => r.id == BoosterRole);

            if  (HadRole == null && HasRole)  {

                PurchaseComplete = true;

                var PurchaseHeader = "**You have Server Boosted the [Support Server](https://peeky.glitch.me/server.html)!**";
              
                Notes.push("Your reward expires once you stop boosting.");

            };

        };

        //Supporter
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.find(r => r.id == SupporterRole);
            var HasRole = newMember.roles.find(r => r.id == SupporterRole);

            if  (HadRole == null && HasRole)  {

                PurchaseComplete = true;

                var PurchaseHeader = "**You have purchased Supporter from the [store](https://peeky.glitch.me/store.html)!**";

                peeky.userData.set(key, new Date(), "SupporterLastPurchase");
                Notes.push("Your reward expires on **" + function_DateFormat(new Date().getTime() + (30 * DayMs)) + "**.");

                if  ( (peeky.userData.has(key, "SupporterSince") == false) || (peeky.userData.has(key, "SupporterSince") && (new Date(peeky.userData.get(key, "SupporterSince")) - new Date() > (MonthMs + (DayMs * 5)))) )  {
                    peeky.userData.set(key, new Date(), "SupporterSince");
                };


            };

        };

        //Server Upgrade
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.find(r => r.id == ServerUpgradeRole);
            var HasRole = newMember.roles.find(r => r.id == ServerUpgradeRole);

            if  (HadRole == null && HasRole)  {

                PurchaseComplete = true;

                var PurchaseHeader = "**You have purchased Server Upgrade from the [store](https://peeky.glitch.me/store.html)!**";

            };

        };

        //Profile Booster
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.find(r => r.id == ProfileBoosterRole);
            var HasRole = newMember.roles.find(r => r.id == ProfileBoosterRole);

            if  (HadRole == null && HasRole)  {

                PurchaseComplete = true;

                var PurchaseHeader = "**You have purchased Profile Booster from the [store](https://peeky.glitch.me/store.html)!**";
                Notes.push("Your reward expires on **" + function_DateFormat(new Date().getTime() + (1 * DayMs)) + "**.");

                peeky.userData.set(key, new Date(), "BoosterStart");

            };

        };

        //Chests
        if  (newMember.roles.has(RedeemRoleChests))  {

            newMember.roles.remove(RedeemRoleChests).catch(error => {ErrorBag.add(error); Failed = true});

            if  (Failed !== true)  {

                PurchaseComplete = true;

                var PurchaseHeader = "**You have purchased Additional Chests from the [store](https://peeky.glitch.me/store.html)!**";

                peeky.userData.math(key, "+", 10, "Chests");

            };

        }; 

        //Complete Purchase
        if  (PurchaseComplete == true)  {

            if  (peeky.userData.get(key, "ContributorBadge") == false)  {
                peeky.userData.set(key, true, "ContributorBadge");
                Rewards.push("The **Contributor** badge");
            };

            if  (Rewards.length == 0)  {
                Rewards = ["None"];
            };

            if  (Notes.length == 0)  {
                Notes = ["None"];
            };

            const embed = {
                "description": 
                      "" + PurchaseHeader
                    + "\n"
                    + "Thank you very much!"
                    + "\n\n"
                    + "**Bonus rewards:**"
                    + "\n"
                    + "" + Rewards.join("\n")
                    + "\n\n"
                    + "**Notes:**"
                    + "\n"
                    + "" + Notes.join("\n"),  

                "color": EmbedColor
            };

            function_DirectMessage(newMember.user.id, { embed });

        };        
         
    }

}; 
  
};
});

//CHANNEL CREATE EVENTS
peeky.on("channelCreate", async (channel) => {

if  (channel.guild)  {
  
const keySF = `${channel.guild.id}`;
const keyCF = `${channel.id}`;

function_ChannelData(keyCF, channel.id);

//FUNCTIONS

//Dash Remover
if  (peeky.serverData.has(keySF))  {

    if  (channel.guild.me.permissions.has('MANAGE_CHANNELS'))  {

        if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true && true == false)  {

            var FinalName = channel.name.replace(/[-]/g, "\u2005");

            if  (TextChannels.includes(channel.type) && channel.name !== FinalName)  {

                await channel.setName(FinalName, "Triggered by the Dash Remover function.").catch(error => ErrorBag.add(error));
                console.log("The Dash Remover function has been triggered in " + channel.guild.name + ".");
        
                function_UpdateAutowipe(keySF, "server");

            };

        };

    };

};
  
};

});

//CHANNEL UPDATE EVENTS
peeky.on("channelUpdate", async (oldChannel, newChannel) => {
  
const keySF   = `${newChannel.guild.id}`;
const channel = newChannel;

//FUNCTIONS

//Dash Remover
if  (peeky.serverData.has(keySF))  {

    if  (channel.guild.me.permissions.has('MANAGE_CHANNELS'))  {

        if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true && true == false)  {

            var FinalName = channel.name.replace(/[-]/g, "\u2005");

            if  (TextChannels.includes(channel.type) && channel.name !== FinalName)  {

                await channel.setName(FinalName, "Triggered by the Dash Remover function.").catch(error => ErrorBag.add(error));
                console.log("The Dash Remover function has been triggered in " + channel.guild.name + ".");
        
                function_UpdateAutowipe(keySF, "server");

            };

        };

    };

};

});

//PRESENCE UPDATE EVENTS
peeky.on("presenceUpdate", async (oldPresence, newPresence) => {

const member = newPresence.member;
  
const key   = `${member.user.id}`;
const keySF = `${member.guild.id}`;
  
//FUNCTIONS
if  (peeky.serverData.has(keySF))  {

//Streamer Role
if  (peeky.serverData.get(keySF, "streamer_role_bonus") == true)  {

    if  (member.guild.me.permissions.has('MANAGE_ROLES'))  {
  
        if  (!member.user.bot)  {

            var GuildRole = member.guild.roles.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));
            var HasRole = member.roles.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));
            var Activity = member.presence.activities.find(a => a.type !== "CUSTOM_STATUS");

            if  (Activity && Activity.type == "STREAMING" || member.voice.channel && member.voice.streaming == true)  {

            if  (!HasRole && !CurrentlyStreaming.has(member.user.id + member.guild.id + "SR"))  {
              
                 member.roles.add(GuildRole.id).catch(error => ErrorBag.add(error));

                 CurrentlyStreaming.add(member.user.id + member.guild.id + "SR");
                 setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SR")}, 1800000);

                 console.log("The Streamer Role function has been triggered in " + member.guild.name + ".");
                 function_UpdateAutowipe(keySF, "server");
              
            };

            }  else  { 

               if  (HasRole)  {
                   member.roles.remove(GuildRole.id).catch(error => ErrorBag.add(error));
               };

            };

        };

    };
      
};

//Stream Announcements
if  (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)  {
  
    if  (!member.user.bot && !CurrentlyStreaming.has(member.user.id + member.guild.id + "SA2"))  {

        var Channel = member.guild.channels.find(c => c.name == peeky.serverData.get(keySF, "stream_announcements_bonus_setting"));

        if  (Channel && Channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {
          
            var Activity = member.presence.activities.find(a => a.type !== "CUSTOM_STATUS");

            if  (Activity && Activity.type == "STREAMING" || member.voice.channel && member.voice.streaming == true)  {

                CurrentlyStreaming.add(member.user.id + member.guild.id + "SA2");
                setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SA2")}, 300000);
                  
                var SavedMember = member;

                const embed = function_StreamAnnouncements(member, Activity);
                Channel.send({ embed }).catch(error => ErrorBag.add(error));

                console.log("The Stream Announcements function has been triggered in " + member.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");

            };
  
        };
  
    };
      
};

//Game Roles
if  (peeky.serverData.get(keySF, "game_roles_bonus") == true)  {

    if  (member.guild.me.permissions.has('MANAGE_ROLES'))  {
  
    if  (!member.user.bot)  {
      
        peeky.serverData.get(keySF, "game_roles_bonus_setting").forEach(GameName => {

        var GameName = GameName.toLowerCase();
        var HasRole  = member.roles.find(r => r.name.toLowerCase() == GameName);
        var Role = member.guild.roles.find(r => r.name.toLowerCase() == GameName);

        if  (Role)  {
          
        if  (member.presence.activity && member.presence.activity.type == 0 && member.presence.activity.name.toLowerCase() == GameName)  {

            if  (!HasRole && !RoleCooldown.has(member.user.id + member.guild.id))  {
                member.roles.add(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
              
                console.log("The Game Roles function has been triggered in " + member.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
            };   

            RoleCooldown.add(member.user.id + member.guild.id);
            setTimeout(() => {RoleCooldown.delete(member.user.id + member.guild.id)}, RoleCooldownMS);         

        } else { 

          if  (HasRole)  {
                member.roles.remove(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
          };

        };
      
        } else {
          
          if  (!RoleCooldown.has(member.guild.id))  {

              member.guild.roles.create({
                  data: {
                    name: GameName,
                    color: Setting.Blurple
                  }
              }, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));

              RoleCooldown.add(member.guild.id);
              setTimeout(() => {RoleCooldown.delete(member.guild.id)}, RoleCooldownMS);

          };
          
        };
          
          
        });
      
    };
      
    };
      
};
  
};
});

//REACTION ADD EVENTS
peeky.on('messageReactionAdd', async (reaction, user) => {

const key = `${user.id}`;
const keyCF = `${reaction.message.channel.id}`;
const keySF = `${reaction.message.guild.id}`;
const Language = peeky.serverData.get(keySF, "language");

//Poller Badge
if  (!user.bot && reaction.message.channel.id == AnnouncementsChannel && reaction.message.content.toLowerCase().includes("**voting time**"))  {
    if  (peeky.userData.has(key) && peeky.userData.get(key, "PollerBadge") == false)  {
        peeky.userData.set(key, true, "PollerBadge");
    };
};
  
//Workshop Response
if  (reaction.message.channel.id == WorkshopChannel && user.id == OwnerId)  {
  
    if  (reaction.emoji.name == "🏁")  {

        const embed = {"description": SuccessIcon + " Your submission in the Workshop has been accepted and will be added shortly!",  "color": EmbedColor}; 
        function_DirectMessage(reaction.message.author.id, { embed });
        function_DirectMessage(OwnerId, '[NoBackground, ' + reaction.message.content.split('\n')[2].replace("Price: ", "") + ', "' + function_FixCapitalization(reaction.message.content.split("\n")[0].replace("Name: ", "")) + '", "' + reaction.message.content.split("\n")[1].replace("Credit: ", "") + '", ' + undefined + ', ' + Date.now() + ']');
      
    };
  
};
  
//Karma System
if  (!user.bot && KarmaImages.findIndex(i => i[0] == reaction.message.id) >= 0)  {

    var ReactionEmoji1 = reaction.message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote");
    var ReactionEmoji2 = reaction.message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote");
    var key2 = reaction.message.author.id;
  
    if  ((ReactionEmoji1 && reaction.emoji.name == ReactionEmoji1.name) || (reaction.emoji.id == DefaultUpvote))  {
      
        var Index = KarmaImages.findIndex(i =>  i[0] == reaction.message.id);

        if  (Index >= 0)  {
            
            var Index2 = KarmaImages[Index][1].indexOf(user.id);
            
            if  (Index2 == -1)  {

                KarmaImages[Index][1].push(user.id);
              
                if  (peeky.userData.has(key2))  {
                
                    peeky.userData.math(key2, "+", 1, "Karma");

                    if  (peeky.userData.get(key2, "Karma") == 50)  {

                        if  (peeky.userData.has(key2) && peeky.userData.get(key2, "GoodBadge") == false)  {
                            peeky.userData.set(key2, true, "GoodBadge");
                            peeky.userData.set(key2, false, "EvilBadge");
                        };                    

                    };
                  
                };
              
            };

        };
        
    };

    if  ((ReactionEmoji2 && reaction.emoji.name == ReactionEmoji2.name) || (reaction.emoji.id == DefaultDownvote))  {
      
        var Index = KarmaImages.findIndex(i =>  i[0] == reaction.message.id);

        if  (Index >= 0)  {
            
            var Index2 = KarmaImages[Index][1].indexOf(user.id);
            
            if  (Index2 == -1)  {

                KarmaImages[Index][1].push(user.id);
              
                if  (peeky.userData.has(key2))  {
                
                    peeky.userData.math(key2, "-", 1, "Karma");

                    if  (peeky.userData.get(key2, "Karma") == -50)  {

                        if  (peeky.userData.has(key2) && peeky.userData.get(key2, "EvilBadge") == false)  {
                            peeky.userData.set(key2, false, "GoodBadge");
                            peeky.userData.set(key2, true, "EvilBadge");
                        };                    

                    };
                  
                };
              
            };

        };
        
    };
  
};

if  (peeky.userData.has(key) && peeky.channelData.has(keyCF) && peeky.serverData.has(keySF) && reaction.message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {
  
//MISCELLAENOUS
  
//Overview Pages
if  (peeky.userData.has(key, "OverviewID") && reaction.message.id == peeky.userData.get(key, "OverviewID"))  {            
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("overview" + user.id))  {
         
        CommandCooldown.add("overview" + user.id);
        setTimeout(() => {CommandCooldown.delete("overview" + user.id)}, 2500);

        var EnabledAmount = 0;
        var ServerAmount  = 0;
        var ChannelAmount = 0;
        const Functions   = [];

        var ServerMessage = peeky.serverData.get(keySF, "server_message_bonus_setting");
      
        if (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)   { var AR = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var AR = DisabledIcon};
        if (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)       { var WM = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var WM = DisabledIcon};
        if (peeky.serverData.get(keySF, "member_counter_bonus") == true)         { var MC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var MC = DisabledIcon};
        if (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)        { var CN = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CN = DisabledIcon};
        if (peeky.serverData.get(keySF, "donor_wall_bonus") == true)             { var CW = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CW = DisabledIcon};
        if (peeky.serverData.get(keySF, "ticket_system_bonus") == true)          { var ST = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var ST = DisabledIcon};
        if (peeky.serverData.get(keySF, "verification_system_bonus") == true)    { var VS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VS = DisabledIcon};
        if (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true)        { var SA = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA = DisabledIcon};
        if (peeky.serverData.get(keySF, "flood_protection_bonus") == true)       { var FP = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var FP = DisabledIcon};
        if (peeky.serverData.get(keySF, "event_countdown_bonus") == true)        { var EC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var EC = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_message_bonus") == true)         { var SM = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SM = DisabledIcon};
        if (peeky.serverData.get(keySF, "dash_remover_bonus") == true)           { var DR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var DR = DisabledIcon};
        if (peeky.serverData.get(keySF, "vote_kick_bonus") == true)              { var VT = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VT = DisabledIcon};
        if (peeky.serverData.get(keySF, "join_role_bonus") == true)              { var JR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var JR = DisabledIcon};
        if (peeky.serverData.get(keySF, "game_roles_bonus") == true)             { var GR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var GR = DisabledIcon};
        if (peeky.serverData.get(keySF, "role_saver_bonus") == true)             { var RS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RS = DisabledIcon};
        if (peeky.serverData.get(keySF, "nick_saver_bonus") == true)             { var NS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var NS = DisabledIcon};
        if (peeky.serverData.get(keySF, "streamer_role_bonus") == true)          { var SR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SR = DisabledIcon};
        if (peeky.serverData.get(keySF, "reddit_posts_bonus") == true)           { var RP = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RP = DisabledIcon};
        if (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)   { var SA2 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA2 = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_age_bonus") == true)             { var SA3 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA3 = DisabledIcon};
        if (peeky.serverData.get(keySF, "spoiler_only_bonus") == true)           { var SL = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var SL = DisabledIcon};
        if (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)         { var RR = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var RR = DisabledIcon};
        if (peeky.channelData.get(keyCF, "message_log_bonus") == true)           { var ML = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var ML = DisabledIcon};
        if (peeky.channelData.get(keyCF, "image_only_bonus") == true)            { var IO = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var IO = DisabledIcon};
        if (peeky.channelData.get(keyCF, "banned_words_bonus") == true)          { var BW = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var BW = DisabledIcon};
        if (peeky.channelData.get(keyCF, "safe_chat_bonus") == true)             { var SC = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var SC = DisabledIcon};

        var BWArray = peeky.serverData.get(keySF, "banned_words_bonus_setting");
        if  (BWArray.length < 1)  {  BWArray = "None";  }  else  {  BWArray = BWArray.join("` `");  };

        var RRArray = peeky.serverData.get(keySF, "reaction_roles_bonus_setting");
        if  (RRArray.length < 1)  {  RRArray = "None";  }  else  {  "@" + RRArray.join("` `@");  };

        var GRArray = peeky.serverData.get(keySF, "game_roles_bonus_setting");
        if  (GRArray.length < 1)  {  GRArray = "None";  }  else  {  GRArray = "@" + GRArray.join("` `@");  };

        var RSArray = peeky.serverData.get(keySF, "role_saver_bonus_setting");
        if  (RSArray.length < 1)  {  RSArray = "None";  }  else  {  RSArray = "@" + RSArray.join("` `@");  };

        var GivenMinutes = peeky.serverData.get(keySF, "spoiler_lock_bonus_setting");
        if  (GivenMinutes == 0)  {GivenMinutes = "Never"}  else  {GivenMinutes = GivenMinutes + " minutes"};

        if  (reaction.emoji.name == "1️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Prefix** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "prefix") + "`" + "\n\n" +
                                "**Language** " + SettingsIcon + "\n" + "`" + Languages[Language] + "`" + "\n\n" +
                                "**Mute Role** " + SettingsIcon + "\n" + "`@" + peeky.serverData.get(keySF, "muted_role") + "`" + "\n\n" +
                                "**Highlighted Channel** " + SettingsIcon + "\n" + "`#" + peeky.serverData.get(keySF, "highlighted_channel") + "`" + "\n\n" +
                                "**Function Notifications** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "function_notifications").toString().replace("true", "Enabled").replace("false", "Disabled") + "`" + "\n\n" +
                                "**Level Notifications** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "level_notifications").toString().replace("true", "Enabled").replace("false", "Disabled") + "`" + "\n\n" +
                                "**Server State** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "server_upgraded").toString().replace("true", "Upgraded").replace("false", "Not Upgraded") + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Settings** `1/1`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "2️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Welcome Messages** " + WM + "\n" + "`#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting") + "`" + "\n\n" +
                                "**Member Counter** " + MC + "\n" + "`" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "`" + "\n\n" +
                                "**Server Age** " + SA3 + "\n" + "No setting" + "\n\n" +
                                "**Ticket System** " + ST + "\n" + "`@" + peeky.serverData.get(keySF, "ticket_system_bonus_setting") + "`" + "\n\n" +
                                "**Classification Wall** " + CW + "\n" + "`@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "` `#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "`" + "\n\n" +
                                "**Flood Protection** " + FP + "\n" + "`" + peeky.serverData.get(keySF, "flood_protection_bonus_setting") + " strikes`" + "\n\n" +
                                "**Spoiler Lock** " + SL + "\n" + "`" + GivenMinutes + "`" + "\n\n" +
                                "**Vote Kick** " + VT + "\n" + "`" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes`" + "\n\n" +
                                "**Verification System** " + VS + "\n" + "`" + peeky.serverData.get(keySF, "verification_system_bonus_setting") + "`" + "\n\n" +
                                "**Nickname Saver** " + NS + "\n" + "No Setting.",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Functions** `1/3`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "3️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Event Countdown** " + EC + "\n" + "`" + peeky.serverData.get(keySF, "event_countdown_bonus_setting") + "`" + "\n\n" +
                                "**Reddit Posts** " + RP + "\n" + "`r/" + peeky.serverData.get(keySF, "reddit_posts_bonus_setting") + "`" + "\n\n" +
                                "**Clear Nicknames** " + CN + "\n" + "`" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "`" + "\n\n" +
                                "**Reaction Roles** " + RR + "\n" + "`" + RRArray + "`" + "\n\n" +
                                "**Server Message** " + SM + "\n" + "`" + function_RemoveFormatting(ServerMessage, "sm", true) + "`" + "\n\n" +
                                "**Role Saver** " + RS + "\n" + "`" + RSArray + "`" + "\n\n" +
                                "**Game Roles** " + GR + "\n" + "`" + GRArray + "`" + "\n\n" +
                                "**Join Role** " + JR + "\n" + "`@" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "`" + "\n\n" +
                                "**Stream Announcements** " + SA2 + "\n" + "`#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "`" + "\n\n" +
                                "**Streamer Role** " + SR + "\n" + "`@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Functions** `2/3`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "4️⃣")  {        
          
            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Suspicion Alert** " + SA + "\n" + "`" + peeky.serverData.get(keySF, "suspicion_alert_bonus_setting") + " bans`" + "\n\n" +
                                "**Dash Remover (Temporarily Disabled)** " + DR + "\n" + "No setting",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Functions** `3/3`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "5️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Automatic Reactions** " + AR + "\n" + "`:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:` `:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:`" + "\n\n" +
                                "**Message Log** " + ML + "\n" + "`#" + peeky.serverData.get(keySF, "message_log_bonus_setting") + "`" + "\n\n" +
                                "**Safe Chat** " + SC + "\n" + "No setting." + "\n\n" +
                                "**Images Only** " + IO + "\n" + "No setting." + "\n\n" +
                                "**Banned Words** " + BW + "\n" + "`" + BWArray + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Channel Functions** `1/1`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "🇺🇸" && reaction.message.member.permissions.has("MANAGE_GUILD"))  {
            peeky.serverData.set(keySF, 0, "language");
        } else 
        if  (reaction.emoji.name == "🇨🇿" && reaction.message.member.permissions.has("MANAGE_GUILD"))  {
            peeky.serverData.set(keySF, 1, "language");
        };
      
  };
  
};
  
//Language Pages
if  (peeky.userData.has(key, "LanguageID") && reaction.message.id == peeky.userData.get(key, "LanguageID"))  {            
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("languages" + user.id))  {
         
        CommandCooldown.add("languages" + user.id);
        setTimeout(() => {CommandCooldown.delete("languages" + user.id)}, 2500);

        if  (reaction.emoji.name == "🇺🇸")  {
            peeky.serverData.set(keySF, 0, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Languages**" + "\n\n" + "The server language has been set to **English**.",
                  color: EmbedColor
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇨🇿")  {
            peeky.serverData.set(keySF, 1, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Languages**" + "\n\n" + "Jazyk serveru byl nastaven na **Češtinu**.",
                  color: EmbedColor
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        };
      
  };
  
};
  
//FUNCTIONS
  
//Vote Kick
if  (peeky.serverData.get(keySF, "vote_kick_bonus") == true) {

    if  (reaction.emoji.name == "🚪")  {
      
        var MemberExists = reaction.message.guild.members.find(m => m.id == reaction.message.author.id);
      
        if  (MemberExists && !MemberExists.user.bot && !reaction.message.member.permissions.has("KICK_MEMBERS"))  {
          
            if  (reaction.count >= peeky.serverData.get(keySF, "vote_kick_bonus_setting") && MemberExists.user.id !== PeekyId && reaction.message.guild.me.permissions.has("KICK_MEMBERS") && reaction.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

                await reaction.message.member.send("You have been vote kicked from **" + function_RemoveFormatting(reaction.message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));

                reaction.message.guild.members.get(reaction.message.member.user.id).kick("Triggered by the Vote Kick function.").catch(error => ErrorBag.add(error));   

                reaction.message.reactions.removeAll().catch(error => ErrorBag.add(error));
              
                if  (peeky.serverData.get(keySF, "function_notifications") == true)  {

                  
                    var TranslatedMessages = [InfoIcon + " **X001** has been vote kicked with **X002 votes**.", InfoIcon + " **X** byl vyhlasován ze serveru se **X002 hlasy**."];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(reaction.message.member.displayName, "other", true)).replace("X002", peeky.serverData.get(keySF, "vote_kick_bonus_setting")),  "color": EmbedColor};
                    reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
                  
                };

                console.log("The Vote Kick function has been triggered in " + reaction.message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");

            } else if (reaction.count == 1)  {

              if  (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(reaction.message.guild.id + "VK"))  {
         
                  ResponseCooldowns.add(reaction.message.guild.id + "VK");
                  setTimeout(() => {ResponseCooldowns.delete(reaction.message.guild.id + "VK")}, ResponseCooldownMS);

                  var TranslatedMessages = [InfoIcon + " **X001** has started a vote kick against **X002**.", InfoIcon + " **X001** začal hlasovat o vyhození **X002**."];
                  const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(user.username, "other", true)).replace("X002", function_RemoveFormatting(reaction.message.member.displayName, "other", true)),  "color": EmbedColor};
                  reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
                
              };
              
            };
 
        } else {
          var TranslatedMessages = [ErrorIcon + " You cannot start a vote kick against that user, **X001**.", ErrorIcon + " Tohoto uživatele nelze vyhlasovat ze serveru, **X001**."];
          const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(user.username, "other", true)).replace("X002", ""),  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
          
          reaction.message.reactions.removeAll().catch(error => ErrorBag.add(error));
        };

    };

};
  
//Ticket System
if  (peeky.serverData.get(keySF, "ticket_system_bonus") == true) {

    if  (reaction.emoji.name == "🎟️")  {
      
        if  (!user.bot & reaction.message.id == peeky.serverData.get(keySF, "ticket_system_bonus_id"))  {
          
            if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
                reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
            };
              
            if  (reaction.message.guild.me.permissions.has("MANAGE_CHANNELS") && !TicketSystemCooldown.has(user.id))  {
            
                TicketSystemCooldown.add(user.id);
                setTimeout(() => {TicketSystemCooldown.delete(user.id)}, 300000);
              
                const role = reaction.message.guild.roles.find(r => r.name == peeky.serverData.get(keySF, "ticket_system_bonus_setting"));
                const category = reaction.message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
                const owner = reaction.message.guild.owner.user;
                const TicketID = Math.random().toString(36).substr(2, 6);
              
                var TranslatedMessages = ["**X001 has created a ticket**" + "\n" + "Staff may close the ticket once the issue has been resolved.", "**X001 potřebuje pomoct**" + "\n" + "Jakmile se tento problém vyřeší, personál může tento lístek uzavřít."];
                const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(user.username, "other", true)),  "color": EmbedColor};

                reaction.message.guild.channels.create("Ticket_" + TicketID, { type: 'text', reason: "Channel created by @" + user.tag + " through a function." }).then(async function (channel)  {
                      if  (category && category.permissionsFor(peeky.user).has('VIEW_CHANNEL'))  {
                          channel.setParent(category.id).catch(error => ErrorBag.add(error));
                      };
                  
                      await channel.overwritePermissions(reaction.message.guild.members.find(r => r.id == PeekyId), {  VIEW_CHANNEL: true, MANAGE_CHANNEL: true  }).catch(error => ErrorBag.add(error));
                      await channel.overwritePermissions(reaction.message.guild.members.find(r => r.id == user.id), {  VIEW_CHANNEL: true  }).catch(error => ErrorBag.add(error));
                      await channel.overwritePermissions(reaction.message.guild.roles.find(r => r.name == role.name), {  VIEW_CHANNEL: true, MANAGE_CHANNEL: true  }).catch(error => ErrorBag.add(error));
                      await channel.overwritePermissions(reaction.message.guild.roles.find(r => r.name == '@everyone'), {  VIEW_CHANNEL: false, SEND_MESSAGES: true, MANAGE_MESSAGES: false  }).catch(error => ErrorBag.add(error));
                  
                      await channel.send({  embed  }).catch(error => ErrorBag.add(error));
                }).catch(function(err) {  ErrorBag.add(err);  });
              
                function_UpdateAutowipe(keySF, "server");
              
            };
          
        };

    };

};
  
//Reaction Roles
if  (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)  {

    if  (EmojiNumbers.includes(reaction.emoji.name))  {
      
        if  (!user.bot & reaction.message.id == peeky.serverData.get(keySF, "reaction_roles_bonus_id"))  {
          
            if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
                reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
            };
          
            if  (reaction.message.guild.me.permissions.has("MANAGE_ROLES"))  {

                if  (!ReactionRolesCooldown.has(user.id))  {

                    ReactionRolesCooldown.add(user.id);
                    setTimeout(() => {ReactionRolesCooldown.delete(user.id)}, 5000);

                    const Setting = peeky.serverData.get(keySF, "reaction_roles_bonus_setting");
                    const Index = EmojiNumbers.indexOf(reaction.emoji.name);
                    const role = reaction.message.guild.roles.find(r => r.name.toLowerCase() == Setting[Index].toLowerCase());

                    if  (role)  {

                        const Member = reaction.message.guild.members.get(user.id);
                        if  (!Member.roles.has(role.id))  {
                            Member.roles.add(role.id).catch(error => ErrorBag.add(error));
                        } else {
                          Member.roles.remove(role.id).catch(error => ErrorBag.add(error));
                        };

                        function_UpdateAutowipe(keySF, "server");

                    };

                };
              
            };
          
        };

    };

};
  
//Message Log
if  (peeky.channelData.get(keyCF, "message_log_bonus") == true)  {

    if  (!user.bot && reaction.message.author.id !== PeekyId && reaction.emoji.name == "📌" && reaction.count == 1)  {
      
    if  (!LoggedMessages.has(reaction.message.id))  {
      
    if  (!MessageLogCooldown.has(reaction.message.author.id))  {
        
        LoggedMessages.add(reaction.message.id);
         
        MessageLogCooldown.add(user.id);
        setTimeout(() => {MessageLogCooldown.delete(user.id)}, 30000);

        var   name                  = peeky.serverData.get(keySF, "message_log_bonus_setting");
        var   Channel               = reaction.message.guild.channels.find(c => c.name == name);
        const OriginalMessage       = reaction.message;
        const OriginalMessageEdited = OriginalMessage.content.replace(/<@?#?&?!?[0-9]{17,20}>/g, "­");
        var   image                 = "none";   
      
    if  (Channel && reaction.message.guild.me.permissions.has("MANAGE_WEBHOOKS"))  {

    if  (reaction.message.attachments.size > 0)  {  image = reaction.message.attachments.array()[0].url;  }  else  {  image = HollowImage;  }; 
            
        Channel.fetchWebhooks().then(webhook =>  {
            
              var FoundHook = webhook.find(w => w.name == "PEEKY");

              if  (!FoundHook)  {

                  Channel.createWebhook("PEEKY", peeky.user.displayAvatarURL({ format: 'png' })).catch(error => ErrorBag.add(error))
                  .then(Webhook => {

                  Webhook.send(OriginalMessageEdited + "\n­", {

                  "username": OriginalMessage.author.tag,
                  "avatarURL": OriginalMessage.author.displayAvatarURL({ format: 'png' }),
                  "files": [image],

                  "embeds":  [{
                      "description": "[🔍](" + reaction.message.url + ")",
                      "color": EmbedColor
                  }]

                  }).catch(error => ErrorBag.add(error));

                  });

              }
               else
              {
            
                 var Webhook = webhook.find(w => w.name == "PEEKY");

                 Webhook.send(OriginalMessageEdited + "\n­", {

                 "username": OriginalMessage.author.tag,
                 "avatarURL": OriginalMessage.author.displayAvatarURL({ format: 'png' }),
                 "files": [image],

                 "embeds":  [{
                     "description": "[🔍](" + reaction.message.url + ")",
                     "color": EmbedColor
                 }]

                 }).catch(error => ErrorBag.add(error));

              };
            
        });
  
        if  (peeky.serverData.get(keySF, "function_notifications") == true)  {
                  
            var TranslatedMessages = [InfoIcon + " **X001** has logged **X002**'s message.", InfoIcon + " **X001** připnul zprávu od **X002**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(user.username, "other", true)).replace("X002", function_RemoveFormatting(reaction.message.member.displayName, "other", true)),  "color": EmbedColor};  
            reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
                  
        };

            console.log("The Message Log function has been triggered in " + reaction.message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

    };
              
        reaction.users.remove(user).catch(error => ErrorBag.add(error));
            
        }
         else
        {
          reaction.users.remove(user).catch(error => ErrorBag.add(error));
            
          const embed = {"description": CooldownMessage4[Language],  "color": EmbedColor}; 
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
          
        };
            
        }
         else
        {
          reaction.users.remove(user).catch(error => ErrorBag.add(error));
          
          var TranslatedMessages = [ErrorIcon + " That message was already logged, **X001**.", ErrorIcon + " Tato zpráva je již připnutá, **X001**."];
          const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(user.username, "other", true)),  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
          
        };

    };
};

};
});

//MESSAGE  DELETE EVENTS
peeky.on("messageDelete", async (message) => {
if  (message)  {
  
//Workshop Response
if  (message.channel.id == WorkshopChannel && message.author.id !== PeekyId)  {
    const embed = {"description": ErrorIcon + " Your submission in the Workshop has been denied.",  "color": EmbedColor}; 
    function_DirectMessage(message.author.id, { embed });
};
  
};
});

//MESSAGE EVENTS
peeky.on('message', async (message) => {
  
if  (message.channel.type == "dm")  {

    if  (!QueuedSOSMessages.has(message.author.id) && !message.author.bot && !message.webhookID && message.content.toLowerCase() !== "accept")  {

        if  (!BannedUsers.includes(message.author.id))  {

            QueuedSOSMessages.add(message.author.id);

            const embed = {"description": "**Do you want to send your message to PEEKY's owner?**\nType `Accept` in under 30 seconds if you do.",  "color": EmbedColor}; 
            function_DirectMessage(message.author.id, { embed });

            message.channel.awaitMessages(response => response.content.toLowerCase() == "accept", {
              max: 1,
              time: 30000,
              errors: ['time'],
            }).then((collected) => {

                QueuedSOSMessages.delete(message.author.id);

                if  (message.attachments.size > 0) {
                    const image = message.attachments.array()[0].url;
                    function_DirectMessage(OwnerId, "**" + function_RemoveFormatting(message.author.tag, "other", true) + ":** " + message.content, {  files: [image]});
                }
                 else
                {
                    function_DirectMessage(OwnerId, "**" + function_RemoveFormatting(message.author.tag, "other", true) + ":** " + message.content);
                };

                const embed = {"description": SuccessIcon + " Your message has been successfuly sent to my owner!",  "color": EmbedColor}; 
                function_DirectMessage(message.author.id, { embed });

            }).catch(() => {
               QueuedSOSMessages.delete(message.author.id);

               const embed = {"description": ErrorIcon + " You did not respond in time.",  "color": EmbedColor}; 
               function_DirectMessage(message.author.id, { embed });
            });

        };

    };

}
 else if (TextChannels.includes(message.channel.type))
{

//SOME VARIABLES
const key      = `${message.author.id}`;
const keyCF    = `${message.channel.id}`;
const keySF    = `${message.guild.id}`;
const Language = peeky.serverData.get(keySF, "language");     
var   Failed   = false;

if  (!message.webhookID)  {
  
//MISCELLANEOUS

//Server Data Checker
if  (!CheckedDataCreations.has(message.guild.id))  {
    
    CheckedDataCreations.add(message.guild.id);
    function_ServerData(keySF);
  
};
  
//Channel Data Checker
if  (!CheckedDataCreations.has(message.channel.id))  {
    
    CheckedDataCreations.add(message.channel.id);
    function_ChannelData(keyCF);
  
};

//Badge Checkers
if  (message.guild.owner !== undefined && !message.author.bot)  {
  
    if  (!BadgeCheckCooldown.has(message.guild.id + message.author.id))  {

        BadgeCheckCooldown.add(message.guild.id + message.author.id);
        setTimeout(() => {BadgeCheckCooldown.delete(message.guild.id + message.author.id)}, 300000);

        //Ownership Badge
        if  (peeky.userData.get(key, "OwnershipBadge") == false && message.author.id == message.guild.owner.user.id)  {
            peeky.userData.set(key, true, "OwnershipBadge");
        };

        //Gopbot Badge
        if  (peeky.userData.get(key, "GopbotBadge") == false && message.author.id == message.guild.owner.user.id && message.guild.members.filter(m => m.user.id == GopbotId).size > 0)  {
            peeky.userData.set(key, true, "GopbotBadge");
        };

    };
  
};

//Workshop Auto-Management
if  (message.channel.id == WorkshopChannel && !message.author.bot)  {
  
    if  (message.attachments.size == 1 && message.content.split('\n').length == 3 && message.content.split('\n')[0].startsWith("Name: ") && message.content.split('\n')[1].startsWith("Credit: ") && message.content.split('\n')[2].startsWith("Price: ") && isNaN(message.content.split('\n')[2].replace("Price: ", "")) == false)  {  // && message.content.toLowerCase().split('\n')[3] == undefined
      
        //Publisher Badge
        if  (peeky.userData.has(key) && peeky.userData.get(key, "PublisherBadge") == false)  {
            peeky.userData.set(key, true, "PublisherBadge");
        };
 
    }
     else
    {
     message.delete().catch(error => ErrorBag.add(error));
    };

};
    
//Limited Roles Auto-Management
if  (!LimitedRolesCooldown.has("cooldown"))  {

    LimitedRolesCooldown.add("cooldown");
    setTimeout(() => {LimitedRolesCooldown.delete("cooldown")}, 1800000);
  
    //Supporter
    await peeky.guilds.get(SupportServer).members.filter(m => !m.user.bot && m.roles.has(SupporterRole)).forEach(m => {
      
        if  (peeky.userData.has(m.user.id, "SupporterLastPurchase") && (new Date() - new Date(peeky.userData.get(m.user.id, "SupporterLastPurchase")) >= MonthMs))  {
            m.roles.remove(SupporterRole).catch(error => ErrorBag.add(error));
          
            const embed = {"description": InfoIcon + " Your **Supporter** status has just expired.",  "color": EmbedColor}; 
            m.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    });
  
    //Profile Booster
    await peeky.guilds.get(SupportServer).members.filter(m => !m.user.bot && m.roles.has(ProfileBoosterRole)).forEach(m => {
      
        if  (peeky.userData.has(m.user.id, "BoosterStart") && (new Date() - new Date(peeky.userData.get(m.user.id, "BoosterStart")) >= DayMs))  {
            m.roles.remove(ProfileBoosterRole).catch(error => ErrorBag.add(error));
          
            const embed = {"description": InfoIcon + " Your **Profile Booster** has just expired.",  "color": EmbedColor}; 
            m.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    });

};  
    
//Random Treasures
if  (!RandomTreasuresCooldown.has("cooldown"))  {

    RandomTreasuresCooldown.add("cooldown");
    setTimeout(() => {RandomTreasuresCooldown.delete("cooldown")}, 3600000);
  
    var serverlist = peeky.serverData.filter( p => p.server_upgraded == true && p.GuildID ).array();
    var server = serverlist[Math.floor(Math.random()*serverlist.length)];

    if  (peeky.guilds.has(server.GuildID) && peeky.serverData.has(`${server.GuildID}`))  {

        var name = peeky.serverData.get(`${server.GuildID}`, "highlighted_channel");
        var guild = peeky.guilds.get(server.GuildID);
        var channel = guild.channels.find(c => c.name == name);
      
        if  (channel)  {

            if  (channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {

                var Rewards = [[GreditIcon, 250, "Gredit"], [ChestIcon, 1, "Chests"], ["Exp", 500, "Exp"]];
                var Index = Math.floor((Math.random() * Rewards.length));
                var Amount = Math.floor((Math.random() * Rewards[Index][1])) + 1;

                var embed = {"description": "**Random Treasure**" + "\n" + "Reward: " + Amount + " " + Rewards[Index][0],  "footer": {  "icon_url": TreasureImage, "text": "Type \"claim\" to claim this treasure!"  }, "color": EmbedColor}; 
                channel.send({  embed  }).catch(error => ErrorBag.add(error)).then(async m => {  

                    m.channel.awaitMessages(message => message.content.toLowerCase() == "claim", { max: 1, time: 3600000, errors: ['time'] }).then(collected => {

                        var member = collected.first().member;

                        if  (peeky.userData.has(member.user.id))  {

                            var embed = {"description": SuccessIcon + " **" + member.displayName + "** has claimed the treasure!", "color": EmbedColor}; 
                            m.channel.send({  embed  }).catch(error => ErrorBag.add(error));

                            peeky.userData.math(member.user.id, "+", Amount, Rewards[Index][2]);

                        };

                    }).catch(collected => {
                        var embed = {"description": ErrorIcon + " The treasure has expired.", "color": EmbedColor}; 
                        m.channel.send({  embed  }).catch(error => ErrorBag.add(error));
                    });

                });

            };
          
        };
          
    };

};  
  
//FUNCTIONS
if  (peeky.channelData.has(keyCF) && peeky.serverData.has(keySF) && message.channel.permissionsFor(peeky.user).has('EMBED_LINKS'))  {
  
//Automatic Reactions
if  (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)  {
  
    if  ((message.attachments.size > 0 || function_DetectLink(message.content) == true) && !message.author.bot)  {

    if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS', 'EXTERNAL_EMOJIS'))  {

        var ReactionEmoji1 = message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote");
        var ReactionEmoji2 = message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote");

    if  (ReactionEmoji1 && ReactionEmoji2)  {
         await message.react(ReactionEmoji1).catch(error => ErrorBag.add(error));
         await message.react(ReactionEmoji2).catch(error => ErrorBag.add(error));
      
         KarmaImages.push([message.id, [message.author.id]]);

         console.log("The Automatic Reactions function has been triggered in " + message.guild.name + ".");
         function_UpdateAutowipe(keySF, "server");
        }
         else
        { 
         await message.react(DefaultUpvote).catch(error => ErrorBag.add(error));
         await message.react(DefaultDownvote).catch(error => ErrorBag.add(error));
      
         KarmaImages.push([message.id, [message.author.id]]);

         console.log("The Automatic Reactions function has been triggered in " + message.guild.name + ".");
         function_UpdateAutowipe(keySF, "server");
        };

        };

    };

};
  
//Safe Chat
if  (peeky.channelData.get(keyCF, "safe_chat_bonus") == true)  {

    if  (message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES"))  {
      
            if  (VulgarPhrases.some(text => function_RemoveFormatting(message.content.toLowerCase(), "strict", false).includes(text)))  {

                message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

                if  (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(message.guild.id + "SC"))  {

                    ResponseCooldowns.add(message.guild.id + "SC");
                    setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "SC")}, ResponseCooldownMS);

                    var TranslatedMessages = [InfoIcon + " Please restrain yourself from using profanity, **X001**.", InfoIcon + " Přestaňte prosím mluvit sprostě, **X001**."];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

                };

                console.log("The Safe Chat function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");            
          
            };
          
        };

    };

};
  
//Images Only
if  (peeky.channelData.get(keyCF, "image_only_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES") && message.attachments.size < 1)  {

            message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

            if  (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(message.guild.id + "IO"))  {

                ResponseCooldowns.add(message.guild.id + "IO");
                setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "IO")}, ResponseCooldownMS);

                var TranslatedMessages = [InfoIcon + " You can only send images in this channel, **X001**.", InfoIcon + " V tomto kanále lze posílat pouze obrázky, **X001**."];
                const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

            };

            console.log("The Images Only function has been triggered in " + message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

        };
    };

};
    
//Reddit Posts
if  (peeky.serverData.get(keySF, "reddit_posts_bonus") == true)  {

    if  (!RedditPostsCooldown.has(message.guild.id))  {

        RedditPostsCooldown.add(message.guild.id);
        setTimeout(() => {RedditPostsCooldown.delete(message.guild.id)}, 1800000);

            var name    = peeky.serverData.get(keySF, "reddit_posts_bonus_setting");
            var channel = message.guild.channels.find(c => c.name == name);

            if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {
              
                const Channel = channel;
                      
                node_fetch("https://api.reddit.com/r/" + name + "/top.json?sort=top&limit=" + Setting.RedditLimit).then(response => response.json()).then(response => {
                  
                    for (i = 0; i < response.data.children.length; i++)  {
                  
                        var Post = response.data.children[i].data;

                        if  (!peeky.serverData.get(keySF, "reddit_posts_bonus_last").includes(Post.url) && Post.pinned == false)  {

                            if  (peeky.serverData.get(keySF, "reddit_posts_bonus_last").length > Setting.RedditLimit)  {
                                peeky.serverData.set(keySF, [], "reddit_posts_bonus_last");
                            };
                          
                            peeky.serverData.get(keySF, "reddit_posts_bonus_last").push(Post.url);

                            if  ((Post.url.includes(".png") || Post.url.includes(".gif") || Post.url.includes(".jpg")))  {  var image = Post.url;  }  else  {  var image = HollowImage;  }; 

                            const embed = {  
                              "title": function_FixCapitalization(function_RemoveFormatting(function_ProperSlice(Post.title, 100), "other", false)),
                              "description": "u/" + function_RemoveFormatting(Post.author, "other", false) + " \n ­",
                              "color": EmbedColor,
                              "image": {
                                "url": image
                              },
                              "fields": [
                                {
                                  "name": "Links",
                                  "value": "[Post](" + "https://www.reddit.com" + Post.permalink + ") \n [Media](" + Post.url + ")",
                                  "inline": true
                                },
                                {
                                  "name": "Rating",
                                  "value":  RedditUpvote + " " + Post.ups + " \n " + RedditDownvote + " " + Post.downs,
                                  "inline": true
                                }
                              ]
                            };

                            Channel.send({ embed }).catch(error => ErrorBag.add(error));
                          
                            break;

                        };
                    
                    };
                  
                });
              
                console.log("The Reddit Posts function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
            };

    };
  
};
    
//Server Age
if  (peeky.serverData.get(keySF, "server_age_bonus") == true)  {

    if  (!ServerAgeCooldown.has(message.guild.id))  {

        ServerAgeCooldown.add(message.guild.id);
        setTimeout(() => {ServerAgeCooldown.delete(message.guild.id)}, 3600000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id        = peeky.serverData.get(keySF, "server_age_bonus_id");
            var channel   = message.guild.channels.find(g => g.id == id);
            var TranslatedStrings = [["Server Age", "days"], ["Věk Serveru", "dní"]];
            var FinalName = TranslatedStrings[Language][0] + ": " + function_TimeLeft(message.guild.createdAt, "days", null).toLocaleString('en') + " " + TranslatedStrings[Language][1];

            if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                channel.setName(FinalName, "Triggered by the Server Age function.").catch(error => ErrorBag.add(error));
              
                console.log("The Server Age function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
            };

        };

    };
  
};
    
//Member Counter
if  (peeky.serverData.get(keySF, "member_counter_bonus") == true)  {

    if  (!MemberCounterCooldown.has(message.guild.id))  {

        MemberCounterCooldown.add(message.guild.id);
        setTimeout(() => {MemberCounterCooldown.delete(message.guild.id)}, 300000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id         = peeky.serverData.get(keySF, "member_counter_bonus_id");
            var Prefix     = peeky.serverData.get(keySF, "member_counter_bonus_setting");
            var channel    = message.guild.channels.find(g => g.id == id);
            var FinalName  = Prefix + ": " + message.guild.members.filter(m => !m.user.bot).size.toLocaleString('en');

            if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                channel.setName(FinalName, "Triggered by the Member Counter function.").catch(error => ErrorBag.add(error));    
              
                console.log("The Member Counter function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
            };

        };

    };
  
};

//Event Countdown
if  (peeky.serverData.get(keySF, "event_countdown_bonus") == true)  {

    if  (!EventCountdownCooldown.has(message.guild.id))  {

        var channel = message.guild.channels.find(c => c.id == peeky.serverData.get(keySF, "event_countdown_bonus_id"));

        if  (channel && channel.permissionsFor(peeky.user).has('CONNECT'))  {

            EventCountdownCooldown.add(message.guild.id);
            setTimeout(() => {EventCountdownCooldown.delete(message.guild.id)}, 300000);

            var TheDate = peeky.serverData.get(keySF, "event_countdown_bonus_setting") - new Date();
            const EndName = "The Countdown has ended.";

        if  (peeky.serverData.get(keySF, "event_countdown_bonus_setting") > 0 && TheDate > 0)  {

            var Time = peeky.serverData.get(keySF, "event_countdown_bonus_setting");
            var FixedTime = function_TimeLeft(Time, "hours", null);
            var LengthName = "hours";

            if  (FixedTime > 24)  {
                FixedTime = function_TimeLeft(Time, "days", null); LengthName = "days";

                if  (FixedTime >= 365)  {
                    FixedTime = "over"; LengthName = "a year";
                };

            };
          
            var FinalName = "Starting in " + FixedTime.toLocaleString('en') + " " + LengthName;
          
            if  (channel.name !== FinalName)  {
                channel.setName(FinalName, "Triggered by the Event Countdown function.").catch(error => ErrorBag.add(error));
              
                console.log("The Event Countdown function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");    
            };

            }
             else if (channel.name !== EndName)
            {
             channel.setName(EndName).catch(error => ErrorBag.add(error));
              
             console.log("The Event Countdown function has been triggered in " + message.guild.name + ".");
             function_UpdateAutowipe(keySF, "server");
            };

        };

    };

};

//Flood Protection
if  (peeky.serverData.get(keySF, "flood_protection_bonus") == true)  {

    if  (!message.member.permissions.has('MANAGE_MESSAGES') && message.guild.me.permissions.has('MANAGE_ROLES'))  {

        if  (!message.content.toLowerCase().startsWith(peeky.serverData.get(keySF, "prefix")))  {

            const LastMsgContent = peeky.channelData.get(keyCF, "flood_protection_bonus_lastmsg");
            const LastMsgUser    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastuser");
            const LastMsgDate    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastdate");
            const ThisMsgDate    = Date.now();

            if  (((LastMsgUser == message.author.id) && (ThisMsgDate - LastMsgDate <= 500)) || (message.content == LastMsgContent) || (isNaN(message.content) && message.content.toUpperCase() == message.content))  {

            if  (FloodProtectionStrikes.filter(i => i == message.author.id).map(i => "Strike").length == peeky.serverData.get(keySF, "flood_protection_bonus_setting"))  {

            const name = peeky.serverData.get(keySF, "muted_role");
            const Role = message.guild.roles.find(role => role.name == name);

            if  (Role && !message.member.roles.has(Role.id))  {

                message.member.roles.add(Role.id, "Triggered by the Flood Protection function.").catch(error => ErrorBag.add(error));

                if  (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(message.guild.id + "FP"))  {

                    ResponseCooldowns.add(message.guild.id + "FP");
                    setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "FP")}, ResponseCooldownMS);

                    var TranslatedMessages = [InfoIcon + " I have muted **X001** because of the **Flood Protection** function.", InfoIcon + " Ztlumil jsem **X001** kvůli **Flood Protection** funkci."];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", message.member.displayName),  "color": EmbedColor};
                    await message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))}); 

                };

                console.log("The Flood Protection function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");

            };

            }
             else
            {
             FloodProtectionStrikes.push(message.author.id);

             setTimeout(() => {
                 FloodProtectionStrikes.splice(peeky.userData.get(key, "Inventory").indexOf(i), 1);
             }, 30000); 

            };

            };

            peeky.channelData.set(keyCF, Date.now(), "flood_protection_bonus_lastdate");
            peeky.channelData.set(keyCF, message.author.id, "flood_protection_bonus_lastuser");

            if  (message.content == "")  {
                peeky.channelData.set(keyCF, null, "flood_protection_bonus_lastmsg");
            } else {
                peeky.channelData.set(keyCF, message.content, "flood_protection_bonus_lastmsg");    
            };

        };

    };

};

//Spoiler Lock
if  (peeky.serverData.get(keySF, "spoiler_only_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES"))  {

            if  ((message.attachments.size > 0 && !message.attachments.array()[0].name.startsWith("SPOILER_")) || function_DetectLink(message.content) == true)  {

                if  ((((new Date() - new Date(message.member.joinedAt)) / 60000) < peeky.serverData.get(keySF, "spoiler_lock_bonus_setting")) || peeky.serverData.get(keySF, "spoiler_lock_bonus_setting") == 0)  {

                     message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

                     if   (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(message.guild.id + "SO"))  {

                          ResponseCooldowns.add(message.guild.id + "SO");
                          setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "SO")}, ResponseCooldownMS);

                          var TranslatedMessages = [InfoIcon + " You have to mark your image as a spoiler, **X001**.", InfoIcon + " Musíte označit váš obrázek jako spoiler, **X001**."];
                          const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor}
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

                     };

                     console.log("The Spoiler Lock function has been triggered in " + message.guild.name + ".");
                     function_UpdateAutowipe(keySF, "server");

                };
              
            };
          
        };
      
    };
  
};
      
//Classification Wall
if  (peeky.serverData.get(keySF, "donor_wall_bonus") == true)  {

    const Role    = peeky.guilds.get(message.guild.id).roles.find(r => r.name == peeky.serverData.get(keySF, "donor_wall_bonus_setting"));
    const Channel = peeky.guilds.get(message.guild.id).channels.find(c => c.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    var WallList  = [];
    var Tags      = [];
    var EndString = "";

    if  (Role && Channel)  {

        if  (!DonorWallCooldown.has(message.guild.id))  {

            DonorWallCooldown.add(message.guild.id);
            setTimeout(() => {DonorWallCooldown.delete(message.guild.id)}, 300000);
          
            await message.guild.members.fetch();
            message.guild.members.forEach(m => {
              
              Tags = [];
              
              if  (m.roles.has(Role.id))  {
                  if  (m.user.id == message.guild.owner.user.id)  {  Tags.push(OwnerTag);  };
                  if  (m.premiumSince)  {  Tags.push(BoostTag);  };
                  if  (m.user.bot)  {  Tags.push(BotTag);  };
                
                  WallList.push("> " + function_RemoveFormatting(m.displayName, "other", true) +  " " + Tags.join(" "));
              };
            });

            Channel.messages.fetch({ limit: 1 }).then(messages => {

            const Message = messages.array()[0];
            const WallAmount = WallList.length;

            if  (WallAmount > Setting.ClassificationWallLimit)  {  EndString = "\n and " + (WallAmount - Setting.ClassificationWallLimit) + " more..."  };
            if  (WallAmount == 0)  {  WallList = ["No one."]  };

                if  (Message && Message.id == peeky.serverData.get(keySF, "donor_wall_bonus_id"))  {

                    var FinalText = "**" + function_RemoveFormatting(message.guild.name, "other", true) + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n" + WallList.slice(0, Setting.ClassificationWallLimit).join("\n") + "" + EndString;

                    if  (Message.content !== FinalText)  {
                        Message.edit(FinalText).catch(error => ErrorBag.add(error));

                        console.log("The Classification Wall function has been triggered in " + message.guild.name + ".");
                        function_UpdateAutowipe(keySF, "server");
                    };

                };

            }).catch(error => ErrorBag.add(error));

          };
      
      };
  
};
      
//Reaction Roles
if  (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)  {

    const Channel = peeky.guilds.get(message.guild.id).channels.find(c => c.name == "roles");

    if  (Channel)  {

        if  (!ReactionRolesCooldown.has(message.guild.id))  {

            ReactionRolesCooldown.add(message.guild.id);
            setTimeout(() => {ReactionRolesCooldown.delete(message.guild.id)}, 300000);
          
            Channel.messages.fetch({ limit: 1 }).then(async messages => {

            const Message = messages.array()[0];
            const Setting = peeky.serverData.get(keySF, "reaction_roles_bonus_setting");

            if  (Message && Message.id == peeky.serverData.get(keySF, "reaction_roles_bonus_id"))  {

                const Roles = function_NumarizeArray(Setting, ["", ""]);
              
                var FinalText = "**Reaction Roles**" + "\n" + Roles;

                if  (Message.content !== FinalText)  {
                    await Message.edit(FinalText).catch(error => ErrorBag.add(error));
                    await Message.reactions.removeAll().catch(error => ErrorBag.add(error));

                    if  (Setting.length > 0)  {
                        for (var i = 0; i < Setting.length; i++) {
                            await Message.react(EmojiNumbers[i]);
                        };
                    };

                };

            };

            }).catch(error => ErrorBag.add(error));

      };
      
  };
  
};
      
//Ticket System
if  (peeky.serverData.get(keySF, "ticket_system_bonus") == true)  {

    const Role    = peeky.guilds.get(message.guild.id).roles.find(r => r.name == peeky.serverData.get(keySF, "ticket_system_bonus_setting"));
    const Channel = peeky.guilds.get(message.guild.id).channels.find(c => c.name == "tickets");

    if  (Role && Channel)  {
      
        ActivatedTicketSystems.add(message.guild.id);
        Channel.messages.fetch({ limit: 1 });

    };
  
};

//Banned Words
if  (peeky.channelData.get(keyCF, "banned_words_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES") && peeky.serverData.get(keySF, "banned_words_bonus_setting").some(word => function_RemoveFormatting(message.content.toLowerCase(), "strict", false).includes(word)))  {

            message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

            if  (peeky.serverData.get(keySF, "function_notifications") == true && !ResponseCooldowns.has(message.guild.id + "BW"))  {

                ResponseCooldowns.add(message.guild.id + "BW");
                setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "BW")}, ResponseCooldownMS);

                var TranslatedMessages = [InfoIcon + " That phrase is blocked by the **Banned Words** function, **X001**.", InfoIcon + " Tato fráze je pomocí funkce **Banned Words** zablokována, **X001**."];
                const embed = {"description": TranslatedMessages[Language].replace("X001", message.member.displayName),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

            };

            console.log("The Banned Words function has been triggered in " + message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

        };

    };
  
};
  
};

//COMMANDS
if  (!message.webhookID && !message.author.bot && !BannedUsers.includes(message.author.id) && message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES' && 'EMBED_LINKS'))  {
  
//Mention Commands
  
//Help
if  ((message.mentions.members.first() && message.mentions.members.first().id == PeekyId) || (message.content == peeky.serverData.get(keySF, "prefix") + "help"))  {
    
    const WebsiteInfo = ["Visit the website to vote, read tutorials, browse the backgrounds, view the leaderboard and pretty much everything PEEKY related.", "Navštivte moji stránku aby jste mohli hlasovat, číst návody, koukat na pozadí, otevřit žebříček a vlastně všechno co se týče PEEKYho."];
    const StoreInfo = ["Support PEEKY by purchasing some neat items from the store!", "Podpořte PEEKYho tím, že si koupíte nějaké supr věcičky z obchodu!"];
    const SupportServerInfo = ["Join the Support Server for important announcements, assistance with the bot, giveaways and much more!", "Připojte se na můj Discord server pro důležitá upozornění, podporu s botem, soutěže a mnoho dalšího!"];
    const BotInvite = ["Add PEEKY to your server and get all the features for free and quick!", "Přidejte si PEEKYho na váš server a dostanete všechny funkce zdarma a rychle."];
  
    const embed = {  "description": 
                     "**Website** [[Open]](https://peeky.glitch.me/)\n" + WebsiteInfo[Language] +
                     "\n\n**Store** [[Open]](https://peeky.glitch.me/store.html) [[Checkout]](https://donatebot.io/checkout/" + SupportServer + ")\n" + StoreInfo[Language] +
                     "\n\n**Support Server** [[Join]](https://peeky.glitch.me/server.html)\n" + SupportServerInfo[Language] +
                     "\n\n**Bot Invite** [[Add]](https://peeky.glitch.me/invite.html)\n" + BotInvite[Language] +
                     "\n\n**Server Prefix: ** " + peeky.serverData.get(keySF, "prefix"),
                     "image": {  "url": "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fnew_header.png?1553884542855"  },
                     "color": 7506394 
    };
  
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
};
  
//Prefixed Commands
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix")))  {

const Prefix       = peeky.serverData.get(keySF, "prefix");
const CommandName  = message.content.replace(Prefix, "");
const InfoMessages = [];

function_UpdateAutowipe(key, "user");
function_UpdateAutowipe(keySF, "server");

//Eval
if  (CommandName.startsWith("eval "))  {
    
    if   (message.author.id == OwnerId) {

            function clean(text) {
            if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
            return text;
            };

            var EvalResult = CommandName.split("eval ")[1]

            try {
            const code = EvalResult;
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
            message.channel.send(`\`Error Detected\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            };

    }
    else
    {
    const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//EventRewards
if (CommandName == "eventrewards")  {
  
    if  (Setting.EventStatus == true)  {
      
        if  (!peeky.userData.get(key, "ParticipatedEvents").includes(Setting.EventName))  {
      
            peeky.userData.get(key, "ParticipatedEvents").push(Setting.EventName);
          
            //Setting
            var Background = 437;
            var Chests     = 25;
            var Gredit     = 0;
          
            if  (Setting.EventName.includes("PEEKY's Birthday") || Setting.EventName.includes("Christmas"))  {
                InfoMessages.push("•" + " The **Celebrator** badge.");
                peeky.userData.set(key, true, "CelebratorBadge");
            };
          
            if  (Setting.EventName.includes("Movie Nighter"))  {
                InfoMessages.push("•" + " The **Movie Nighter** badge.");
                peeky.userData.set(key, true, "MovieNighterBadge");
            };
          
            if  (Background > 0)  {
                InfoMessages.push("•" + " The **" + function_GetBackgroundInfo(Background, ["name", "id"]) + "** background.");
                peeky.userData.get(key, "Inventory").push(Background);
            };
          
            if  (Gredit > 0)  {
                InfoMessages.push("•" + " **" + Gredit + "** Gredit.");
                peeky.userData.math(key, "+", Gredit, "Gredit");
            };
          
            if  (Chests > 0)  {
                InfoMessages.push("•" + " **" + Chests + "** Chests.");
                peeky.userData.math(key, "+", Chests, "Chests");
            };

            const embed = {"description": "You have received some cool rewards from the **" + Setting.EventName + "** event!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));          
          
        };
      
    };
  
};

//Upgrade
if (CommandName.startsWith("upgrade"))  {

    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = PeekySupportServer.members.get(message.author.id);

    if  (PeekySupportServer.members.get(message.author.id))  {

    //Server Upgrade
    if  (TheUserWithRole.roles.has(ServerUpgradeRole) && peeky.serverData.get(keySF, "server_upgraded") == false)  {
        TheUserWithRole.roles.remove(ServerUpgradeRole).catch(error => {ErrorBag.add(error); Failed = true});

        if  (Failed == false)  {
            
            peeky.serverData.set(keySF, true, "server_upgraded");
            peeky.userData.math(key, "+", 1, "UpgradedServers");

            if  (peeky.userData.get(key, "UpgraderBadge") == false)  {
                peeky.userData.set(key, true, "UpgraderBadge");
                InfoMessages.push(InfoMessage1[Language]);
            };
          
            var TranslatedMessages = [SuccessIcon + " This server is now upgraded!", SuccessIcon + " Tento server je nyní vylepšen!"];
            const embed = {"description": TranslatedMessages[Language] + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.channels.get("663851702163734599").send("**" + function_RemoveFormatting(message.author.tag, "other", true) + "** has upgraded **" + function_RemoveFormatting(message.guild.owner.user.tag, "other", true) + "**'s server called **" + function_RemoveFormatting(message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));
        };
    }
     else 
    {
      var TranslatedMessages = [ErrorIcon + " You cannot upgrade this server.", ErrorIcon + " Tento server vylepšit nemůžete."];
      const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else 
    {
      const embed = {"description": ErrorMessage19[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//SetInvite
if (CommandName == "setinvite")  {
  
    if  (!SetInviteCooldown.has(message.guild.id))  {

        SetInviteCooldown.add(message.guild.id);
        setTimeout(() => {SetInviteCooldown.delete(message.guild.id)}, 60000);

        if  (message.author.id == message.guild.owner.user.id)  {

            if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {

                await message.channel.fetchInvites().then(function(Invites)  {
                Invites = Invites.array();

                if  (Invites.length > 0) {
                    peeky.serverData.set(keySF, Invites[0].code, "server_invite");
                    var TranslatedMessages = [InfoIcon + " The server's invite code has been set to **X001**.", InfoIcon + " Pozvánka tohoto server byla nastavea na **X001**."];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", Invites[0].code),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                } else {
                    var TranslatedMessages = [ErrorIcon + " I could not find any server invites in this channel.", ErrorIcon + " V tomto kanále jsem nenašel žádné pozvánky."];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            });

            }
             else
            {
             const embed = {"description": ErrorMessage21[Language],  "color": EmbedColor}; 
             message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }
         else
        {
         const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
     const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
      
//Overview
if (CommandName == "overview")  {
  
    if  (!CommandCooldown.has("overview" + message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {

            CommandCooldown.add("overview" + message.guild.id);
            setTimeout(() => {CommandCooldown.delete("overview" + message.guild.id)}, 10000);

            const embed = {"description": "**Overview Menu**" + "\n\n" + "1️⃣ Server Settings" + "\n\n" + "2️⃣ Server Functions `[1/3]`" + "\n\n" + "3️⃣ Server Functions `[2/3]`" + "\n\n" + "4️⃣ Server Functions `[3/3]`" + "\n\n" + "5️⃣ Channel Functions",  "color": EmbedColor}; 
            await message.channel.send({ embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                  peeky.userData.set(key, m.id, "OverviewID");
                  await m.react("1️⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("2️⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("3️⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("4️⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("5️⃣").catch(error => {ErrorBag.add(error)});

            }).catch(error => {ErrorBag.add(error)});
          
        };

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
      
//Languages
if (CommandName == "languages")  {
  
    if  (!CommandCooldown.has("languages" + message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {
          
            if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

                CommandCooldown.add("languages" + message.guild.id);
                setTimeout(() => {CommandCooldown.delete("languages" + message.guild.id)}, 10000);

                const embed = {"description": "**Languages**" + "\n\n" + "🇺🇸 English `100%`" + "\n\n" + "🇨🇿 Čeština `95%`",  "color": EmbedColor}; 
                await message.channel.send({ embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                      peeky.userData.set(key, m.id, "LanguageID");
                      await m.react("🇺🇸").catch(error => {ErrorBag.add(error)});
                      await m.react("🇨🇿").catch(error => {ErrorBag.add(error)});

                }).catch(error => {ErrorBag.add(error)});
              
            } else {
             const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
             message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };
          
        };

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Toggle
if (CommandName.startsWith("toggle"))  {
  
    var FunctioName = CommandName.split("toggle")[1];
  
if  (FunctioName.startsWith(" "))  {
  
    FunctioName = FunctioName.replace(" ", "");
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {
    
if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

    var ManageChannels = false;
    var ManageRoles = false;
    var TranslatedMessages = [SuccessIcon + " The **X001** function has been **X002**.", SuccessIcon + " Funkce **X001** je nyní **X002**."];
  
    if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {
        ManageChannels = true;  
      
        var TranslatedBonuses = [InfoIcon + " Created a channel called **#X001** for the **X002** function.", InfoIcon + " Vytvořil jsem kanál s názvem **#X001** pro funkci **X002**."];
        var ChannelCreation = TranslatedBonuses[Language]
    };
  
    if  (message.guild.me.permissions.has("MANAGE_ROLES"))  {
        ManageRoles = true;
      
        var TranslatedBonuses = [InfoIcon + " Created a role called **@X001** for the **X002** function.", InfoIcon + " Vytvořil jsem roli s názvem **@X001** pro funkci **X002**."];
        var RoleCreation = TranslatedBonuses[Language];
    };
      
//Toggle Automatic Reactions
if  (FunctioName == "automatic reactions")  {
        
    if   (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true) {peeky.channelData.set(keyCF, false, "automatic_reactions_bonus")}
    else peeky.channelData.set(keyCF, true, "automatic_reactions_bonus");
      
    if  (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Automatic Reactions").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Safe Chat
if  (FunctioName == "safe chat")  {
        
    if   (peeky.channelData.get(keyCF, "safe_chat_bonus") == true) {peeky.channelData.set(keyCF, false, "safe_chat_bonus")}
    else peeky.channelData.set(keyCF, true, "safe_chat_bonus");
      
    if  (peeky.channelData.get(keyCF, "safe_chat_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Safe Chat").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Welcome Messages
if  (FunctioName.startsWith("welcome messages"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var channel = guild.channels.find(c=> c.name == name);
        
    if   (peeky.serverData.get(keySF, "welcome_messages_bonus") == true) {peeky.serverData.set(keySF, false, "welcome_messages_bonus")}
    else peeky.serverData.set(keySF, true, "welcome_messages_bonus");
    
    //Channel Creating
    if (!channel)  {
    
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

            ChannelCooldown.add(message.guild.id);
            setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

            await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
            .then(async function (channel)  {
                  await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
                  await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
            }).catch(function(err) {  ErrorBag.add(err);  });

            InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Welcome Messages"));

            };
          
        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };
      
    if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Welcome Messages").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Classification Wall
if  (FunctioName.startsWith("classification wall"))  {
    
    const channel = message.guild.channels.find(channel => channel.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    const name = peeky.serverData.get(keySF, "donor_wall_bonus_channel");

    if(peeky.serverData.get(keySF, "donor_wall_bonus") == true) {  peeky.serverData.set(keySF, false, "donor_wall_bonus");  }
    else peeky.serverData.set(keySF, true, "donor_wall_bonus");
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

            ChannelCooldown.add(message.guild.id);
            setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

            await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
            .then(async function (channel)  {
                  await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false, MANAGE_MESSAGES: false  }).catch(error => ErrorBag.add(error));
                  await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true, MANAGE_MESSAGES: true  }).catch(error => ErrorBag.add(error));
                  await channel.send("**" + message.guild.name + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n\nPreparing... Come back in a few minutes!").catch(error => {ErrorBag.add(error);}).then(m => peeky.serverData.set(keySF, m.id, "donor_wall_bonus_id"));
            }).catch(function(err) {  ErrorBag.add(err);  });

            InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Classification Wall"));

            };
          
        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };

    if  (peeky.serverData.get(keySF, "donor_wall_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Classification Wall").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Ticket System
if  (FunctioName.startsWith("ticket system"))  {
    
    const name = "tickets";
    const channel = message.guild.channels.find(channel => channel.name == name);
    const category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");

    if(peeky.serverData.get(keySF, "ticket_system_bonus") == true) {  peeky.serverData.set(keySF, false, "ticket_system_bonus");  }
    else peeky.serverData.set(keySF, true, "ticket_system_bonus");
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

                ChannelCooldown.add(message.guild.id);
                setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

                await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
                .then(async function (channel)  {
                      await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true, MANAGE_MESSAGES: true, ADD_REACTIONS: true  }).catch(error => ErrorBag.add(error));
                      await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false, MANAGE_MESSAGES: false, ADD_REACTIONS: false  }).catch(error => ErrorBag.add(error));
                      await channel.send("**Need help with something?**" + "\n" + "Click on the reaction below to create a ticket.").catch(error => ErrorBag.add(error)).then(m => {  m.react("🎟️");  peeky.serverData.set(keySF, m.id, "ticket_system_bonus_id");  }).catch(error => ErrorBag.add(error));
                }).catch(function(err) {  ErrorBag.add(err);  });

                InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Ticket System"));

                if  (!category)  {
                    InfoMessages.push(InfoIcon + " Consider creating a category called **Tickets** to sort tickets.");
                };

            };

        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };

    if  (peeky.serverData.get(keySF, "ticket_system_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Ticket System").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Reaction Roles
if  (FunctioName.startsWith("reaction roles"))  {
    
    const name = "roles";
    const channel = message.guild.channels.find(channel => channel.name == name);

    if(peeky.serverData.get(keySF, "reaction_roles_bonus") == true) {  peeky.serverData.set(keySF, false, "reaction_roles_bonus");  }
    else peeky.serverData.set(keySF, true, "reaction_roles_bonus");
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

                ChannelCooldown.add(message.guild.id);
                setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

                await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
                .then(async function (channel)  {
                      await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
                      await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false, MANAGE_MESSAGES: false, ADD_REACTIONS: false  }).catch(error => ErrorBag.add(error));
                      await channel.send("**Reaction Roles**" + "\n" + "Preparing... Come back in a few minutes!").catch(error => ErrorBag.add(error)).then(m => {  peeky.serverData.set(keySF, m.id, "reaction_roles_bonus_id");  }).catch(error => ErrorBag.add(error));
                }).catch(function(err) {  ErrorBag.add(err);  });

                InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Reaction Roles"));

            };

        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };

    };

    if  (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Join role
if  (FunctioName.startsWith("join role"))  {
    
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "join_role_bonus_setting");
    var role = guild.roles.find(c=> c.name == name);
    
    if(peeky.serverData.get(keySF, "join_role_bonus") == true) {peeky.serverData.set(keySF, false, "join_role_bonus");}
    else peeky.serverData.set(keySF, true, "join_role_bonus");
      
    if (!role) {

        if  (!RoleCooldown.has(message.guild.id)) {

            if  (ManageRoles == true)  {

                RoleCooldown.add(message.guild.id);
                setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
                message.guild.roles.create({
                    data: {
                      name: name,
                      color: Setting.Blurple
                    }
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Join Role"));

            };

        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };
      
    if  (peeky.serverData.get(keySF, "join_role_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Join role").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Verification System
if  (FunctioName.startsWith("verification system"))  {
    
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "verification_system_bonus_setting");
    var role = guild.roles.find(c=> c.name == name);
    
    if(peeky.serverData.get(keySF, "verification_system_bonus") == true) {peeky.serverData.set(keySF, false, "verification_system_bonus");}
    else peeky.serverData.set(keySF, true, "verification_system_bonus");
      
    if (!role) {

        if  (!RoleCooldown.has(message.guild.id))  {

            if  (ManageRoles == true)  {

                RoleCooldown.add(message.guild.id);
                setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
                    message.guild.roles.create({
                    data: {
                      name: name,
                      color: Setting.Blurple
                    },
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(RoleCreation.replace("X001", name).replace("X002", "Verification System"));

            };
          
        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };
      
    if  (peeky.serverData.get(keySF, "verification_system_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Verification System").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Role Saver
if  (FunctioName.startsWith("role saver"))  {
    
    if(peeky.serverData.get(keySF, "role_saver_bonus") == true) {peeky.serverData.set(keySF, false, "role_saver_bonus");}
    else peeky.serverData.set(keySF, true, "role_saver_bonus");
      
    if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Images Only
if  (FunctioName.startsWith("images only"))  {

    if(peeky.channelData.get(keyCF, "image_only_bonus") == true) {peeky.channelData.set(keyCF, false, "image_only_bonus");}
    else peeky.channelData.set(keyCF, true, "image_only_bonus");
      
    if  (peeky.channelData.get(keyCF, "image_only_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Images Only").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Dash Remover
if  (FunctioName.startsWith("dash remover"))  {

    if(peeky.serverData.get(keySF, "dash_remover_bonus") == true) {peeky.serverData.set(keySF, false, "dash_remover_bonus");}
    else peeky.serverData.set(keySF, true, "dash_remover_bonus");
      
    if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Dash Remover").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Server Message
if  (FunctioName.startsWith("server message"))  {
        
    if(peeky.serverData.get(keySF, "server_message_bonus") == true) {peeky.serverData.set(keySF, false, "server_message_bonus");}
    else peeky.serverData.set(keySF, true, "server_message_bonus");
      
    if  (peeky.serverData.get(keySF, "server_message_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Server Message").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Message Log
if  (FunctioName.startsWith("message log"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "message_log_bonus_setting");
    var channel = guild.channels.find(c=> c.name == name);

    if(peeky.channelData.get(keyCF, "message_log_bonus") == true) {peeky.channelData.set(keyCF, false, "message_log_bonus");}
    else peeky.channelData.set(keyCF, true, "message_log_bonus");
      
    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Message Log"));
    
    };
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.channelData.get(keyCF, "message_log_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Message Log").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Stream Announcements
if  (FunctioName.startsWith("stream announcements"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "stream_announcements_bonus_setting");
    var channel = guild.channels.find(c=> c.name == name);

    if(peeky.serverData.get(keySF, "stream_announcements_bonus") == true) {peeky.serverData.set(keySF, false, "stream_announcements_bonus");}
    else peeky.serverData.set(keySF, true, "stream_announcements_bonus");
      
    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Stream Announcements"));
    
    };

    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Stream Announcements").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Member Counter
if  (FunctioName.startsWith("member counter"))  {
  
    const guild = message.guild;
    const name = peeky.serverData.get(keySF, "member_counter_bonus_setting") + ": ...";
    var id = peeky.serverData.get(keySF, "member_counter_bonus_id");
    var channel = guild.channels.find(c=> c.id == id);

    if(peeky.serverData.get(keySF, "member_counter_bonus") == true) {peeky.serverData.set(keySF, false, "member_counter_bonus");}
    else peeky.serverData.set(keySF, true, "member_counter_bonus");

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "member_counter_bonus_id");
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });     

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Member Counter"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.serverData.get(keySF, "member_counter_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Member Counter").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Reddit Posts
if  (FunctioName.startsWith("reddit posts"))  {
  
    const guild = message.guild;
    const name = peeky.serverData.get(keySF, "reddit_posts_bonus_setting");
    var channel = guild.channels.find(c=> c.name == name);

    if(peeky.serverData.get(keySF, "reddit_posts_bonus") == true) {peeky.serverData.set(keySF, false, "reddit_posts_bonus");}
    else peeky.serverData.set(keySF, true, "reddit_posts_bonus");

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.channels.create(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Reddit Posts"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.serverData.get(keySF, "reddit_posts_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reddit Posts").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Server Age
if  (FunctioName.startsWith("server age"))  {
  
    const guild = message.guild;
    const name = "Server Age: ...";
    var id = peeky.serverData.get(keySF, "server_age_bonus_id");
    var channel = guild.channels.find(c=> c.id == id);

    if(peeky.serverData.get(keySF, "server_age_bonus") == true) {peeky.serverData.set(keySF, false, "server_age_bonus");}
    else peeky.serverData.set(keySF, true, "server_age_bonus");

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id))  {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "server_age_bonus_id");
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });     

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Server Age"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.serverData.get(keySF, "server_age_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Server Age").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Event Countdown
if  (FunctioName.startsWith("event countdown"))  {
  
    const guild = message.guild;
    const name = "Countdown Starting Soon..."
    var id = peeky.serverData.get(keySF, "event_countdown_bonus_id");
    var channel = guild.channels.find(c=> c.id == id);

    if(peeky.serverData.get(keySF, "event_countdown_bonus") == true) {peeky.serverData.set(keySF, false, "event_countdown_bonus");}
    else peeky.serverData.set(keySF, true, "event_countdown_bonus");

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id))  {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "event_countdown_bonus_id");
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Event Countdown"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };
      
    if  (peeky.serverData.get(keySF, "event_countdown_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Event Countdown").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Game Roles
if  (FunctioName.startsWith("game roles"))  {
        
    if(peeky.serverData.get(keySF, "game_roles_bonus") == true) {peeky.serverData.set(keySF, false, "game_roles_bonus")}
    else peeky.serverData.set(keySF, true, "game_roles_bonus");

    if  (peeky.serverData.get(keySF, "game_roles_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Clear Nicknames
if  (FunctioName.startsWith("clear nicknames"))  {
        
    if(peeky.serverData.get(keySF, "clear_nicknames_bonus") == true) {peeky.serverData.set(keySF, false, "clear_nicknames_bonus");}
    else peeky.serverData.set(keySF, true, "clear_nicknames_bonus");
      
    if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Clear Nicknames").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
  
else

//Toggle Suspicion Alert
if  (FunctioName.startsWith("suspicion alert"))  {
        
    if(peeky.serverData.get(keySF, "suspicion_alert_bonus") == true) {peeky.serverData.set(keySF, false, "suspicion_alert_bonus");}
    else peeky.serverData.set(keySF, true, "suspicion_alert_bonus");
      
    if  (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Suspicion Alert").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
  
else

//Toggle Vote Kick
if  (FunctioName.startsWith("vote kick")) {
        
    if(peeky.serverData.get(keySF, "vote_kick_bonus") == true) {peeky.serverData.set(keySF, false, "vote_kick_bonus");}
    else peeky.serverData.set(keySF, true, "vote_kick_bonus");
      
    if  (peeky.serverData.get(keySF, "vote_kick_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Vote Kick").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Flood Protection
if  (FunctioName.startsWith("flood protection")) {

    if(peeky.serverData.get(keySF, "flood_protection_bonus") == true) {peeky.serverData.set(keySF, false, "flood_protection_bonus");}
    else peeky.serverData.set(keySF, true, "flood_protection_bonus");
      
    if  (peeky.serverData.get(keySF, "flood_protection_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Flood Protection").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Nickname Saver
if  (FunctioName.startsWith("nickname saver")) {

    if(peeky.serverData.get(keySF, "nick_saver_bonus") == true) {peeky.serverData.set(keySF, false, "nick_saver_bonus");}
    else peeky.serverData.set(keySF, true, "nick_saver_bonus");
      
    if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Nickname Saver").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Streamer Role
if  (FunctioName.startsWith("streamer role"))  {
        
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "streamer_role_bonus_setting");
    var role = guild.roles.find(c=> c.name == name);

    if(peeky.serverData.get(keySF, "streamer_role_bonus") == true) {peeky.serverData.set(keySF, false, "streamer_role_bonus");}
    else peeky.serverData.set(keySF, true, "streamer_role_bonus");
      
    if (!role) {

        if  (!RoleCooldown.has(message.guild.id)) {

            if  (ManageRoles == true)  {

                RoleCooldown.add(message.guild.id);
                setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                message.guild.roles.create({
                data: {
                  name: name,
                  color: Setting.Blurple
                }
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Streamer Role"));

            };

        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };
      
    if  (peeky.serverData.get(keySF, "streamer_role_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Streamer Role").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Banned Words
if  (FunctioName.startsWith("banned words"))  {
        
    if   (peeky.channelData.get(keyCF, "banned_words_bonus") == true) {peeky.channelData.set(keyCF, false, "banned_words_bonus")}
    else peeky.channelData.set(keyCF, true, "banned_words_bonus");
      
    if  (peeky.channelData.get(keyCF, "banned_words_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Spoiler Lock
if  (FunctioName.startsWith("spoiler lock"))  {
        
    if   (peeky.serverData.get(keySF, "spoiler_only_bonus") == true) {peeky.serverData.set(keySF, false, "spoiler_only_bonus")}
    else peeky.serverData.set(keySF, true, "spoiler_only_bonus");
      
    if  (peeky.serverData.get(keySF, "spoiler_only_bonus") == true)  {
        var StatusString = EnableStrings[Language];
    } else {
      var StatusString = DisableStrings[Language];
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Spoiler Lock").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
 else
{
 const embed = {"description": ErrorMessage10[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};

//Set
if (CommandName.startsWith("set"))  {
  
    var FunctioName = CommandName.split("set")[1];
  
if  (FunctioName.startsWith(" "))  {
  
    FunctioName = FunctioName.replace(" ", "");
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {
    
if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {
  
    var TranslatedMessages = [SuccessIcon + " The setting for the **X001** function is now **X002**.", SuccessIcon + " Nastavení pro funkci **X001** je nyní **X002**."];
    var TranslatedFullSetting = [ErrorIcon + " The setting for the **X001** function is full.", ErrorIcon + " Nastavení pro funcki **X001** je plné."];
      
//Set Welcome Messages
if  (FunctioName.startsWith("welcome messages "))  {

    var ChannelName = CommandName.split("welcome messages ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);
    peeky.serverData.set(keySF, FixedChannelName, "welcome_messages_bonus_setting");
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Welcome Messages").replace("X002", "#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
  
else

//Set Join Role
if  (FunctioName.startsWith("join role "))  {
    
    var RoleName = CommandName.split("join role ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "join_role_bonus_setting", true);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Join Role").replace("X002", "@" + peeky.serverData.get(keySF, "join_role_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Verification System
if  (FunctioName.startsWith("verification system "))  {
    
    var RoleName = CommandName.split("verification system ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "verification_system_bonus_setting", true);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Verification System").replace("X002", "@" + peeky.serverData.get(keySF, "verification_system_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Streamer Role
if  (FunctioName.startsWith("streamer role "))  {
    
    var RoleName = CommandName.split("streamer role ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "streamer_role_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Streamer Role").replace("X002", "@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Automatic Reactions
if  (FunctioName.startsWith("automatic reactions "))  {

    var ReactionName = CommandName.split("automatic reactions ")[1];
    var FixedReactionName = function_RemoveFormatting(ReactionName, "other", true);
    peeky.serverData.set(keySF, FixedReactionName, "automatic_reactions_bonus_setting");
    
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Automatic Reactions").replace("X002", ":" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:** and **:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:"),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Classification Wall
if  (FunctioName.startsWith("classification wall "))  {

    var ChannelName = CommandName.split("classification wall ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(ChannelName, "role"), "donor_wall_bonus_setting", true);
    peeky.serverData.set(keySF, function_RemoveFormatting(ChannelName, "channel") + "s", "donor_wall_bonus_channel", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Classification Wall").replace("X002", "#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "** and **@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Ticket System
if  (FunctioName.startsWith("ticket system "))  {

    var RoleName = CommandName.split("ticket system ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "ticket_system_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Ticket System").replace("X002", "" + peeky.serverData.get(keySF, "ticket_system_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
      
//Set Member Counter
if  (FunctioName.startsWith("member counter "))  {

    var CounterName = CommandName.split("member counter ")[1];
      
    peeky.serverData.set(keySF, function_RemoveFormatting(CounterName, "other"), "member_counter_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Member Counter").replace("X002", "" + peeky.serverData.get(keySF, "member_counter_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Event Countdown
if  (FunctioName.startsWith("event countdown "))  {

    var Timestamp = CommandName.split("event countdown ")[1];

    if  (!isNaN(Timestamp))  {

    var GivenDate = new Date(Number(Timestamp));

    peeky.serverData.set(keySF, GivenDate.getTime(), "event_countdown_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Event Countdown").replace("X002", "" + peeky.serverData.get(keySF, "event_countdown_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
     const embed = {"description": ErrorIcon + " The provided timestamp is invalid.",  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Spoiler Lock
if  (FunctioName.startsWith("spoiler lock "))  {

    var GivenMinutes = CommandName.split("spoiler lock ")[1];

    if  (!isNaN(GivenMinutes) && GivenMinutes >= 0)  {

        peeky.serverData.set(keySF, GivenMinutes, "spoiler_lock_bonus_setting");

        if  (GivenMinutes == 0)  {GivenMinutes = "never"}  else  {GivenMinutes = GivenMinutes + " minutes"}

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Spoiler Lock").replace("X002", "" + GivenMinutes),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
      const embed = {"description": ErrorMessage9[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Suspicion Alert
if  (FunctioName.startsWith("suspicion alert "))  {

    var BanAmount = CommandName.split("suspicion alert ")[1];

    if  (isNaN(BanAmount) == false) {

        peeky.serverData.set(keySF, Number(BanAmount), "suspicion_alert_bonus_setting");

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Suspicion Alert").replace("X002", "" + peeky.serverData.get(keySF, "suspicion_alert_bonus_setting") + " bans"),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    }
     else
    {
      const embed = {"description": ErrorMessage9[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Vote Kick
if  (FunctioName.startsWith("vote kick "))  {

    var VoteAmount = CommandName.split("vote kick ")[1];

    if  (isNaN(VoteAmount) == false && VoteAmount > 0) {

        peeky.serverData.set(keySF, Number(VoteAmount), "vote_kick_bonus_setting");

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Vote Kick").replace("X002", "" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes"),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
      const embed = {"description": ErrorIcon + " The provided amount must be greater than **1**.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else

//Set Message Log
if  (FunctioName.startsWith("message log "))  {
    
    var ChannelName = CommandName.split("message log ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "message_log_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Message Log").replace("X002", "#" + peeky.serverData.get(keySF, "message_log_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Stream Announcements
if  (FunctioName.startsWith("stream announcements "))  {

    var ChannelName = CommandName.split("stream announcements ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "stream_announcements_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Stream Announcements").replace("X002", "#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Reddit Posts
if  (FunctioName.startsWith("reddit posts "))  {

    var ChannelName = CommandName.split("reddit posts ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "reddit_posts_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reddit Posts").replace("X002", "r/" + peeky.serverData.get(keySF, "reddit_posts_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Clear Nicknames
if  (FunctioName.startsWith("clear nicknames "))  {

    var NewSetting = CommandName.split("clear nicknames ")[1];
    var FixedSetting = function_RemoveFormatting(NewSetting, "other", true);
    peeky.serverData.set(keySF, FixedSetting, "clear_nicknames_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Clear Nicknames").replace("X002", "" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Flood Protection
if  (FunctioName.startsWith("flood protection "))  {

    var NewSetting = CommandName.split("flood protection ")[1];
  
    if  (NewSetting > 0 && NewSetting <= 10)  {
      
        peeky.serverData.set(keySF, Number(NewSetting), "flood_protection_bonus_setting");

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Flood Protection").replace("X002", "" + peeky.serverData.get(keySF, "flood_protection_bonus_setting") + " strikes"),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    }
     else
    {
      const embed = {"description": ErrorIcon + " The provided amount must be between **1** and **10**.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Server Message
if  (FunctioName.startsWith("server message "))  {
   
    var ServerMessageContent = CommandName.split("server message ")[1];
    var ServerMessagePreview = ServerMessageContent;
    var FixedMsgEnd          = "";
    var TagString            = "";

    peeky.serverData.set(keySF, ServerMessageContent, "server_message_bonus_setting");

        ServerMessagePreview = function_RemoveFormatting(ServerMessagePreview, "sm", true);

    if  (ServerMessageContent.includes(GuildNameTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildNameTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildSizeTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildSizeTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildOwnerTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildOwnerTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildVerificationTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildVerificationTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildAcronymTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildAcronymTag + "** tag was detected."  };

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Server Message").replace("X002", ServerMessagePreview + FixedMsgEnd) + TagString,  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Banned Words
if  (FunctioName.startsWith("banned words "))  {
  
if  (peeky.serverData.get(keySF, "banned_words_bonus_setting").length < Setting.BannedWordsLimit)  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("banned words ")[1].toLowerCase(), "other", true);
    peeky.serverData.get(keySF, "banned_words_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "banned_words_bonus_setting");

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words").replace("X002", FixedArray.join("**, **") + EndString),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": TranslatedFullSetting[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
  
else
 
//Set Reaction Roles
if  (FunctioName.startsWith("reaction roles "))  {
  
if  (peeky.serverData.get(keySF, "reaction_roles_bonus_setting").length < Setting.ReactionRolesLimit)  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("reaction roles ")[1], "other", true);
    peeky.serverData.get(keySF, "reaction_roles_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "reaction_roles_bonus_setting");
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles").replace("X002", FixedArray.join("**, **") + EndString),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": TranslatedFullSetting[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
  
else
 
//Set Role Saver
if  (FunctioName.startsWith("role saver "))  {
  
if  (peeky.serverData.get(keySF, "role_saver_bonus_setting").length < Setting.RoleSaverLimit)  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("role saver ")[1], "other", true);
    peeky.serverData.get(keySF, "role_saver_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "role_saver_bonus_setting");
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver").replace("X002", FixedArray.join("**, **") + EndString),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": TranslatedFullSetting[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
  
else
 
//Set Game Roles
if  (FunctioName.startsWith("game roles "))  {
  
if  (peeky.serverData.get(keySF, "game_roles_bonus_setting").length < Setting.GameRolesLimit)  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("game roles ")[1], "other", true);
    peeky.serverData.get(keySF, "game_roles_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "game_roles_bonus_setting");
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles").replace("X002", "@" + FixedArray.join("**, **@") + EndString),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": TranslatedFullSetting[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage10[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};

//Clear
if  (CommandName.startsWith("clear"))  {
  
    var FunctioName = CommandName.split("clear")[1];
  
if  (FunctioName.startsWith(" "))  {
  
    FunctioName = FunctioName.replace(" ", "");
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

    var TranslatedMessages = [SuccessIcon + " Cleared the setting for the **X001** function.", SuccessIcon + " Nastavení pro funkci **X001** bylo vyčištěno."];
 
//Clear Banned Words
if  (FunctioName.startsWith("banned words"))  {
      
     peeky.serverData.set(keySF, [], "banned_words_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
 
//Clear Reaction Roles
if  (FunctioName.startsWith("reaction roles"))  {
      
     peeky.serverData.set(keySF, [], "reaction_roles_bonus_setting");

     const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
 
//Clear Role Saver
if  (FunctioName.startsWith("role saver"))  {
      
     peeky.serverData.set(keySF, [], "role_saver_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
  
//Clear Game Roles
if  (FunctioName.startsWith("game roles"))  {
      
     peeky.serverData.set(keySF, [], "game_roles_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
 else
{
 const embed = {"description": ErrorMessage10[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else
{
 const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//BuyDescription
if (CommandName.startsWith("buydescription"))  {
  
    var CommandArgument = CommandName.split("buydescription")[1];
  
if  (CommandArgument.startsWith(" "))  {
  
    CommandArgument = CommandArgument.replace(" ", "");

    var UpdatedAmount = CommandArgument.length;
    var NewLinesCount = 0;
    var MaxLines = "\n";
    var str = CommandArgument;
  
if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {  UpdatedAmount = 0;  };

    for(var i = NewLinesCount = 0; i<str.length; NewLinesCount+=+(MaxLines===str[i++]));
        
    if  (peeky.userData.get(key, "Gredit") >= UpdatedAmount)  {

        if  (CommandArgument !== RandomString)  {

            if  (NewLinesCount < 2)  {
              
                var TranslatedMessages = [SuccessIcon + " You have bought a new description for **X001" + " " + GreditIcon + "**.", SuccessIcon + " Koupil jste si nový popisek za **X001" + " " + GreditIcon + "**."];
                const embed = {"description": TranslatedMessages[Language].replace("X001", UpdatedAmount.toLocaleString('en')),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                peeky.userData.set(key, CommandArgument, "Description");
                peeky.userData.math(key, "-", UpdatedAmount, "Gredit");

                }
                 else 
                {
                  const embed = {"description": ErrorMessage2[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            }
             else
            {

              var TranslatedMessages = [SuccessIcon + " You have bought a random description for **X001**" + " " + GreditIcon + "**.", SuccessIcon + " Koupil jste si náhodny popisek za **X001**" + " " + GreditIcon + "**."];
              const embed = {"description": TranslatedMessages[Language].replace("X001", UpdatedAmount.toLocaleString('en')),  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              peeky.userData.set(key, function_RandomDescription(), "Description");
              peeky.userData.math(key, "-", UpdatedAmount, "Gredit");

            };

    }
     else
    {
     const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  
  
}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//BuyBackground  
if  (CommandName.startsWith("buybackground"))  {

    var Failed = true; 
  
    for(var i = 1; i <= Banners.length; i++)  {

        if  (message.content == Prefix + "buybackground " + i)  {
          
            Failed = false;

            if  ((i !== 1) && (Banners[i - 1][Banner.Price] !== Exclusive))  {

                if  (!peeky.userData.get(key, "Inventory").includes(i))  {

                    if  (peeky.userData.get(key, "Gredit") >= Banners[i - 1][Banner.Price])  {

                        var i = Number(i);

                        if  (isNaN(peeky.userData.get(key, "Background")) == true)  {
                            var CustomBackgroundAmount = 1;
                        } else {  var CustomBackgroundAmount = 0;  };

                        if  (peeky.userData.get(key, "HorderBadge") == false && (peeky.userData.get(key, "Inventory").length + CustomBackgroundAmount) >= 10)  {

                            InfoMessages.push(InfoMessage1[Language]);
                            peeky.userData.set(key, true, "HorderBadge");

                        };

                        if  (peeky.userData.get(key, "MinerBadge") == false && i == 283)  {

                            InfoMessages.push(InfoMessage1[Language]);
                            peeky.userData.set(key, true, "MinerBadge");

                        };

                        var RevenueID = Banners[i - 1][Banner.RevenueID];
                        if  (RevenueID !== undefined && peeky.userData.has(RevenueID) && message.author.id !== RevenueID && peeky.users.has(RevenueID))  {
                            peeky.userData.math(RevenueID, "-", (Banners[i - 1][Banner.Price] / Setting.SellMultiplier), "Gredit");
                            InfoMessages.push(InfoIcon + " Your purchase has generated **" + (Banners[i - 1][Banner.Price] / Setting.SellMultiplier).toLocaleString('en') + " " + GreditIcon + "** of revenue for **" + function_RemoveFormatting(peeky.users.get(RevenueID).username, "other", true) + "**.");
                        };

                        peeky.userData.math(key, "-", Banners[i - 1][Banner.Price], "Gredit");
                        peeky.userData.get(key, "Inventory").push(i);

                        var TranslatedMessages = [SuccessIcon + " You have bought the **X001** background for **X002" + " " + GreditIcon + "**.", SuccessIcon + " Koupil jste si pozadí **X001** za **X002" + " " + GreditIcon + "**."];
                        var embed = {"description": TranslatedMessages[Language].replace("X001", function_GetBackgroundInfo(i, ["name"])).replace("X002", function_GetBackgroundInfo(i, ["price"]).toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                        break;

                    } else {
                      const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                      break;
                    };

                } else { 
                  const embed = {"description": ErrorMessage14[Language], "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                  break;
            };

            } else {
              var TranslatedMessages = [ErrorIcon + " You cannot buy the default and exclusive backgrounds.", ErrorIcon + " Nemůžete si koupit základní a exlusivní pozadí."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              break;
            };

        };

    };
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[Language], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//CustomBackground
if (CommandName.startsWith("custombackground"))  {
  
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
  
        if  (peeky.userData.get(key, "Gredit") > Setting.CustomBackgroundPrice)  {

            if  (message.attachments.size > 0)  {
              
                var Thumbnail = message.attachments.array()[0].url;

                if  (function_DetectLink(Thumbnail) == true)  {

                    if  (peeky.userData.get(key, "PainterBadge") == false)  {

                        InfoMessages.push(InfoMessage1[Language]);
                        peeky.userData.set(key, true, "PainterBadge");

                    };

                    peeky.userData.math(key, "-", Setting.CustomBackgroundPrice, "Gredit");
                    peeky.userData.set(key, Thumbnail, "Background");

                    const embed = {"description": SuccessIcon + " You have set a **Custom Background** for **" + Setting.CustomBackgroundPrice.toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                } else {
                  const embed = {"description": ErrorIcon + " Failed to set your custom background.",  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            } else {
              const embed = {"description": ErrorMessage20[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage11[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//SetBackground
if (CommandName.startsWith("setbackground"))  {

    var Failed = true;

    for (var i = 1; i <= Banners.length; i++)  {

        if  (message.content == Prefix + "setbackground " + i)  {
          
            Failed = false;

            if  (peeky.userData.get(key, "Inventory").includes(i))  {
              
                var i = Number(i);

                if  (peeky.userData.get(key, "FashionBadge") == false && i !== 1)  {

                    InfoMessages.push(InfoMessage1[0]);
                    peeky.userData.set(key, true, "FashionBadge");    

                };

                /*if  (isNaN(peeky.userData.get(key, "Background")) == true)  {
                    InfoMessages.push(InfoIcon + " You have lost your **Custom Background**.");
                };*/

                peeky.userData.set(key, i, "Background");

                var TranslatedMessages = [SuccessIcon + " You have set the **X001** background.", SuccessIcon + " Nastavil jste si pozadí **X001**."];
                const embed = {"description": TranslatedMessages[Language].replace("X001", function_GetBackgroundInfo(i, ["name"])) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                break;

            }
             else
            { 

              const embed = {"description": ErrorMessage5[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              break;

            };

        };

    };
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[Language], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//SeeBackground
if (CommandName.startsWith("seebackground"))  {

    var Failed = true;

    for (var i = 1; i <= Banners.length; i++)  {

        if  (message.content == Prefix + "seebackground " + i)  {
          
            Failed = false;
          
            var Price = Exclusive;
            const Commands = [];
          
            if  (function_GetBackgroundInfo(i, ["price"]) !== Exclusive)  {
                Price = function_GetBackgroundInfo(i, ["price"]) + " " + GreditIcon;
                Commands.push(Prefix + "buybackground " + i);
            };
          
            Commands.push(Prefix + "setbackground " + i);
            Commands.push(Prefix + "sellbackground " + i);
          
            const embed = {
                "description": 
                "**" + function_GetBackgroundInfo(i, ["name"]) + "**"
                + "\n" 
                + "" + function_GetBackgroundInfo(i, ["credit"])
                + "\n\n"
                + "**Price**"
                + "\n"
                + Price
                + "\n\n"
                + "**Commands**"
                + "\n"
                + Commands.join("\n")
                + "\n­",
                "image": {
                    "url": function_GetBackgroundInfo(i, ["source"])
                },
                "color": EmbedColor
            }; 
                  
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
            break;

        };

    };
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[Language], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//SellBackground
if (CommandName.startsWith("sellbackground"))  {
  
    var i = CommandName.split("sellbackground ")[1];
  
if  (i !== AllString)  {

    for (var i = 1; i <= Banners.length; i++)  {
      
        if  (message.content == Prefix + "sellbackground " + i)  {
            
            Failed = false;

            if  (peeky.userData.get(key, "Inventory").includes(i))  {

                if  (i !== 1)  {

                    var BackgroundIndex  = peeky.userData.get(key, "Inventory").indexOf(i);
                    var FinalPrice       = function_GetBackgroundInfo(i, ["price"]);
                    var i                = Number(i);

                    if  (FinalPrice == Exclusive)  {
                        FinalPrice = 0;
                    } else {
                        FinalPrice = Math.round(FinalPrice / Setting.SellMultiplier);
                    };

                    peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
                    peeky.userData.math(key, "+", FinalPrice, "Gredit");

                    if  (i == peeky.userData.get(key, "Background"))  {
                        peeky.userData.set(key, 1, "Background");
                        InfoMessages.push(InfoMessage2[Language]);
                    };

                    var TranslatedMessages = [SuccessIcon + " You have sold the **X001** background for **X002" + " " + GreditIcon + "**.", SuccessIcon + " Prodal jste pozadí **X001** za **X002" + " " + GreditIcon + "**."];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_GetBackgroundInfo(i, ["name"])).replace("X002", FinalPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                }
                 else
                {
                  var TranslatedMessages = [ErrorIcon + " You cannot sell the default backgrounds.", ErrorIcon + " Nemůžete prodat základní pozadí."];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  
                  break;
                };

            }
             else
            {
              const embed = {"description": ErrorMessage5[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  
              break;
            };            
          
        };      
      
    };
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[Language], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

} else {
  
  if  (!ProfileCooldown.has(message.author.id))  {

      ProfileCooldown.add(message.author.id);
      setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

      var SetBackground = peeky.userData.get(key, "Background");
      var SavedBackgrounds  = [1];
      var MaxBackgrounds    = peeky.userData.get(key, "Inventory").length;
      var CurrentBackground = 0;
      var FullPrice         = 0;

      peeky.userData.get(key, "Inventory").forEach(i => {  //.filter(i => Banners[i - 1][Banner.Price] !== Exclusive)
          if  (Banners[i - 1][Banner.Price] == Exclusive || SetBackground == i)  {
              SavedBackgrounds.push(i);
          } else {
              FullPrice += Math.round(Banners[i - 1][Banner.Price] / Setting.SellMultiplier);   
          };     
      });

      peeky.userData.set(key, SavedBackgrounds, "Inventory");
      peeky.userData.math(key, "+", FullPrice, "Gredit");

      var TranslatedMessages = [SuccessIcon + " You have sold all your backgrounds for **X001" + " " + GreditIcon + "**.", SuccessIcon + " Prodal jste všechna svá pozadí za **X001" + " " + GreditIcon + "**."];
      const embed = {"description": TranslatedMessages[Language].replace("X001", FullPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));

  } else {
    const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  };

};
  
};

//Open
if (CommandName.startsWith("open ") || CommandName == "open")  {

    if  (!ProfileCooldown.has(message.author.id))  {

    if  (peeky.userData.get(key, "Chests") >= 1)  {

          ProfileCooldown.add(message.author.id);
          setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

          //Loot Variables
          var PeekyCoinsOpened = Math.round(Math.random() * 100);
          var PeekyCoinsSupporter = Math.round(Math.random() * 50);
          var PeekyCoinsUpgraded = Math.round(Math.random() * 25);
          var PeekyCoinsBooster = Math.round(Math.random() * 25);
          var PeekyCoinsLevel = peeky.userData.get(key, "Level");
          var TotalAmount = PeekyCoinsOpened + PeekyCoinsLevel;

          //Other
          var Tokens = CommandName.split("open ");

          //Supporter
          if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
              TotalAmount += PeekyCoinsSupporter;
          };

          //Server Booster
          if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(BoosterRole))  {
              TotalAmount += PeekyCoinsSupporter;
          };

          //Profile Booster
          if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(ProfileBoosterRole))  {
              TotalAmount += PeekyCoinsOpened;
          };

          //Upgraded Server
          if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
              TotalAmount += PeekyCoinsUpgraded;
          };

          var BadgeProgress = 0;

          //Opening System
          var ChestAmount = 1;
          if  (Tokens[1] == AllString)  {
              ChestAmount = peeky.userData.get(key, "Chests");
          };

          var CurrentChest = 0;
          var TotalLoot = 0;

          do {

              //Count Rewards
              TotalLoot += TotalAmount;
              CurrentChest ++;

              //Gambler Badge Progress
              peeky.userData.math(key, "+", 1, "GamblerBadge");

              if  (peeky.userData.get(key, "GamblerBadge") == 10)  {

                  InfoMessages.push(InfoMessage1[Language]);

              };
            
              //Background Drop
              var BackgroundNumber = 10;
            
              //Supporter
              if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
                  BackgroundNumber = BackgroundNumber - 1;
              };
            
              //Server Booster
              if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(BoosterRole))  {
                  BackgroundNumber = BackgroundNumber - 1;
              };
            
              //Profile Booster
              if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(ProfileBoosterRole))  {
                  BackgroundNumber = BackgroundNumber - 1;
              };
            
              var BackgroundChance = Math.round(Math.random() * BackgroundNumber) + 1;

              if  (BackgroundChance == 1)  {

                  var Background = Math.round(Math.random() * Banners.length);
                  console.log(Background)

                  if  (Background !== 0 && Banners[Background][Banner.Price] !== Exclusive)  {

                      peeky.userData.get(key, "Inventory").push(Background + 1);
                      InfoMessages.push(InfoIcon + " You have found the **" + function_GetBackgroundInfo(Background, ["name", "id"]) + "** background.");

                  };

              };
                
          } while (CurrentChest < ChestAmount);

          peeky.userData.math(key, "-", ChestAmount, "Chests");
          peeky.userData.math(key, "+", TotalLoot, "Gredit");

          var TranslatedMessages = [SuccessIcon + " You have opened **X001" + " " + ChestIcon + "** for **X002" + " " + GreditIcon +"**.", SuccessIcon + " Otevřel jste **X001" + " " + ChestIcon + "** a získal **X002" + " " + GreditIcon +"**."];
          const embed = {"description": TranslatedMessages[Language].replace("X001", ChestAmount.toLocaleString('en')).replace("X002", TotalLoot.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
          await message.channel.send({ embed }).catch(error => ErrorBag.add(error));

      }
       else
      {
        const embed = {"description": ErrorMessage6[Language],  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      };

    }
     else
    {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Daily
if (CommandName == "daily")  {

    let cooldown     = 8.64e+7;
    let lastDaily    = peeky.userData.get(key, "DailyRewarded");
    var CountedVotes = 0;

    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
      
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
  
    var TranslatedMessages = [InfoIcon + " Come back in **X001** and **X002** for your reward.", InfoIcon + " Vraťte se za **X001** a **X002** pro vaši odměnu."];
    var embed = {"description": TranslatedMessages[Language].replace("X001", timeObj.hours + "h").replace("X002", timeObj.minutes + "m"),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    } else {
      
    peeky.userData.set(key, Date.now(), "DailyRewarded");
      
    var Rewards = [[GreditIcon, 250, "Gredit"], [ChestIcon, 1, "Chests"], ["Exp", 1000, "Exp"]];
    var Index = Math.floor((Math.random() * Rewards.length));
    var Amount = Math.floor((Math.random() * Rewards[Index][1])) + 1;
      
    //Reward
    InfoMessages.push("•" + " You have received **" + Amount + " " + Rewards[Index][0] + "** as the Daily reward.");
    peeky.userData.math(key, "+", Amount, Rewards[Index][2]);

    //Vote DDBL
    await ddbl.getVotes().then(AllVotes => {
      
        var Now = new Date();
        AllVotes = AllVotes.filter(i => i.id == key && Now - new Date(i.timestamp) <= DayMs);

        if  (AllVotes.length > 0 == true)  {
          
            InfoMessages.push("• " + " You have received **1 " + ChestIcon + "** for voting on DDBL today.");
            peeky.userData.math(key, "+", 1, "Chests");
            CountedVotes ++;

        };
                  
    }).catch(err => ErrorBag.add(err));

    //Vote BLS
    await bls.getUpvotes().then(AllVotes => {
      
        var Now = new Date();
        AllVotes = AllVotes.filter(i => i.user.id == key && Now - new Date(i.timestamp) <= DayMs);

        if  (AllVotes.length > 0 == true)  {
          
            InfoMessages.push("•" + " You have received **1 " + ChestIcon + "** for voting on BLS today.");
            peeky.userData.math(key, "+", 1, "Chests");
            CountedVotes ++;

        };

    }).catch(err => ErrorBag.add(err));

    //Event Reward
    if  (Setting.EventStatus == true)  {
        peeky.userData.math(key, "+", 1, "Chests"); 
            InfoMessages.push("•" + " You have received **1 " + ChestIcon + "** from the event.");
    };

    //Supporter Reward
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
        peeky.userData.math(key, "+", 1, "Chests");
            InfoMessages.push("•" + " You have received **1 " + ChestIcon + "** for being a Supporter.");
    };

    //Server Booster Reward
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(BoosterRole))  {
        peeky.userData.math(key, "+", 1, "Chests");
            InfoMessages.push("•" + " You have received **1 " + ChestIcon + "** for being a Server Booster.");
    };

    var Footer = "Thank you for voting on PEEKY!";
    if  (CountedVotes == 0)  {
        Footer = "You can get more rewards by typing \"" + Prefix + "help\" and voting for me!";
    } else {
      if  (peeky.userData.get(key, "VoterBadge") == false)  {
          peeky.userData.set(key, true, "VoterBadge");  
            InfoMessages.push("•" + " You have received a new badge.");
      };    
    };
      
    const embed = {"description": InfoMessages.join("\n"),  "footer":  {"text": Footer},  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    };

};

//Gift
if (CommandName.startsWith("gift"))  {
  
    var CommandArgument = CommandName.split("gift")[1];
      
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");
  
if  (!ProfileCooldown.has(message.author.id))  {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var DonatedUser = message.mentions.members.first();
    
    if  (DonatedUser && DonatedUser.user.id !== message.author.id && !DonatedUser.bot)  {

        const key2 = `${DonatedUser.user.id}`;
        
    if  (peeky.userData.has(key2))  {

        var CommandArray = CommandName.split(" ");
      
        var DonatedItem = CommandArray[2];
        var DonatedAmount = Number(CommandArray[3]);
      
    if  (!isNaN(DonatedAmount))  {
          
    if  (DonatedAmount > 0)  {
      
        if  (DonatedItem == "gredit")  {
          
        if  (peeky.userData.get(key, "Gredit") >= DonatedAmount)  {

        if  (DonatedAmount >= 1000 && peeky.userData.get(key, "CharityBadge") == false)  {
      
            peeky.userData.set(key, true, "CharityBadge");
            InfoMessages.push(InfoMessage1[Language]);
      
        };

        peeky.userData.math(key, "-", DonatedAmount, "Gredit");
        peeky.userData.math(key2, "+", DonatedAmount, "Gredit");
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + GreditIcon + "** to **" + function_RemoveFormatting(DonatedUser.displayName, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));  
          
        }
         else
        {
         const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
        
        } else
      
        if  (DonatedItem == "chest")  {
          
        if  (peeky.userData.get(key, "Chests") >= DonatedAmount)  {

        peeky.userData.math(key, "-", DonatedAmount, "Chests");
        peeky.userData.math(key2, "+", DonatedAmount, "Chests");
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + ChestIcon + "** to **" + function_RemoveFormatting(DonatedUser.displayName, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        }
         else
        {
         const embed = {"description": ErrorMessage6[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
        
        } else
    
        if  (DonatedItem == "background")  {
          
        if  (peeky.userData.get(key, "Inventory").includes(DonatedAmount))  {
          
        if  ((DonatedAmount !== 1) && (DonatedAmount !== Exclusive))  {
          
        if  (!peeky.userData.get(key, "Inventory").includes(i))  {

            var BackgroundIndex = peeky.userData.get(key, "Inventory").indexOf(DonatedAmount);

            peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
            peeky.userData.get(key2, "Inventory").push(DonatedAmount);

            //Set Default Background
            if  (isNaN(peeky.userData.get(key, "Background")) == false && peeky.userData.get(key, "Background") == DonatedAmount)  {
                peeky.userData.set(key, 1, "Background");
                InfoMessages.push(InfoMessage2[Language]);
            };

            const embed = {"description": SuccessIcon + " You have given the **" + function_GetBackgroundInfo(DonatedAmount, ["name"]) + "** background to **" + function_RemoveFormatting(DonatedUser.displayName, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        }
         else
        {
         const embed = {"description": ErrorMessage14[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         const embed = {"description": ErrorIcon + " You cannot gift the default and exclusive backgrounds.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else {
          const embed = {"description": ErrorIcon + " Be sure to type the item's name in lowercase.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));          
        };

    }
     else
    {
     const embed = {"description": ErrorMessage9[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
     const embed = {"description": ErrorMessage9[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
      const embed = {"description": ErrorMessage7[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
     const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
  const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else if (CommandArgument == "")
{
  const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//Inventory
if  (CommandName.startsWith("inventory ") || CommandName == "inventory")  {
  
if  (!ProfileCooldown.has(message.author.id)) {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var SomeoneTagged = null;
    var MentionedMember = message.mentions.members.first();
    if  (MentionedMember !== undefined)  {  SomeoneTagged = MentionedMember  }  else  {  SomeoneTagged = message.member;  };

    const key2 = `${SomeoneTagged.user.id}`;
    
    if  (peeky.userData.has(key2))  {
      
    //Badges
    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id);
    var EndString            = "";
    var Badges               = [];
    var BadgesAmount         = null;

    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(StaffRole))       {  Badges.push(ModeratorEmote + " Staff")  };
    if  (peeky.userData.get(key2, "TranslatorBadge") == true)                                            {  Badges.push(TranslatorEmote + " Translator")  };
    if  (peeky.userData.get(key2, "VeteranBadge") == true)                                               {  Badges.push(VeteranEmote + " Veteran")  };
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(SupporterRole))   {  Badges.push(SupporterEmote + " Supporter")  };
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(BoosterRole))     {  Badges.push(BoosterEmote + " Booster")  };
    if  (peeky.userData.get(key2, "UpgraderBadge") == true)                                              {  Badges.push(UpgraderEmote + " Upgrader")  };
    if  (peeky.userData.get(key2, "BugHunterBadge") == true)                                             {  Badges.push(BugHunterEmote + " Bug Hunter")  };
    if  (peeky.userData.get(key2, "ContributorBadge") == true)                                           {  Badges.push(ContributorEmote + " Contributor")  };
    if  (peeky.userData.get(key2, "CelebratorBadge") == true)                                            {  Badges.push(CelebratorEmote + " Celebrator")  };
    if  (peeky.userData.get(key2, "MovieNighterBadge") == true)                                          {  Badges.push(MovieNighterEmote + " Movie Nighter")  };
    if  (peeky.userData.get(key2, "MedallistBadge") == true)                                             {  Badges.push(MedallistEmote + " Medallist")  };
    if  (peeky.userData.get(key2, "PollerBadge") == true)                                                {  Badges.push(PollerEmote + " Poller")  };
    if  (peeky.userData.get(key2, "VoterBadge") == true)                                                 {  Badges.push(VoterEmote + " Voter")  };
    if  (peeky.userData.get(key2, "PublisherBadge") == true)                                             {  Badges.push(PublisherEmote + " Publisher")  };
    if  (peeky.userData.get(key2, "PartyBadge") == true)                                                 {  Badges.push(PartyEmote + " Party")  };
    if  (peeky.userData.get(key2, "EvilBadge") == true)                                                  {  Badges.push(EvilEmote + " Evil")  };
    if  (peeky.userData.get(key2, "GoodBadge") == true)                                                  {  Badges.push(GoodEmote + " Good")  };
    if  (peeky.userData.get(key2, "OwnershipBadge") == true)                                             {  Badges.push(OwnershipEmote + " Ownership")  };
    if  (peeky.userData.get(key2, "GopbotBadge") == true)                                                {  Badges.push(GopbotEmote + " Gopbot")  };
    if  (peeky.userData.get(key2, "MinerBadge") == true)                                                 {  Badges.push(MinerEmote + " Miner")  };
    if  (peeky.userData.get(key2, "GamerBadge") == true)                                                 {  Badges.push(GamerEmote + " Gamer")  };
    if  (peeky.userData.get(key2, "HorderBadge") == true)                                                {  Badges.push(HorderEmote + " Horder")  };
    if  (peeky.userData.get(key2, "GamblerBadge") >= 10)                                                 {  Badges.push(GamblerEmote + " Gambler")  };
    if  (peeky.userData.get(key2, "CharityBadge") == true)                                               {  Badges.push(CharityEmote + " Charity")  };
    if  (peeky.userData.get(key2, "PainterBadge") == true)                                               {  Badges.push(PainterEmote + " Painter")  };
    if  (peeky.userData.get(key2, "FashionBadge") == true)                                               {  Badges.push(FashionEmote + " Fashion")  };
    if  (Badges.length == 0)  {Badges = ["None"]; BadgesAmount = 0;} else {BadgesAmount = peeky.userData.get(key2, "Badges")};
      
    //Backgrounds
    var FixedBackgrounds = [];
    var InventoryWorth = 0;
    var Current = 0;
      
    peeky.userData.get(key2, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).forEach(banner => {
        InventoryWorth += Banners[banner - 1][Banner.Price] / Setting.SellMultiplier;
    });
      
    if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
        FixedBackgrounds.push("Custom `0`");
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };

    peeky.userData.get(key2, "Inventory").slice(0, Setting.BackgroundInvLimit).forEach(banner => {
        Current ++;
        FixedBackgrounds.push(function_GetBackgroundInfo(banner, ["name"]) + " `" + banner + "`");
    });
      
    if  ((peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount) > Setting.BackgroundInvLimit)  {  EndString = " and some more.."  };

    const embed = {"description": "**" + function_RemoveFormatting(SomeoneTagged.displayName, "other", true) + "'s Inventory**" + "\n" + peeky.userData.get(key2, "BadgeGredit").toLocaleString('en') + " Gredit Gain, " + peeky.userData.get(key2, "BadgeExp").toLocaleString('en') + " Exp Gain" + "\n\n" + "**" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds (Worth " + InventoryWorth.toLocaleString('en')  + " Gredit)**\n" + FixedBackgrounds.join(", ") + "" + EndString + ".\n\n**" + BadgesAmount + " Badges**\n" + Badges.join(', ') + ".",  "color": EmbedColor}; 
    message.channel.send({  embed  }).catch(error => ErrorBag.add(error));

    }
     else 
    {
      const embed = {"description": ErrorMessage7[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
 const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Profile  
if  (CommandName.startsWith("profile ") || CommandName == "profile")  {
  
if  (!ProfileCooldown.has(message.author.id))  {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);
  
    if  (message.channel.permissionsFor(peeky.user).has('ATTACH_FILES'))  {
      
    const canvas         = Canvas.createCanvas(500, 300);
    const ctx            = canvas.getContext('2d');
    var   SomeoneTagged  = null;
    const StatsColor     = "lightgray"
    var   ProfileColor   = Setting.LessDark.replace("#", "");
    
    var MentionedMember = message.mentions.members.first();
    if  (MentionedMember !== undefined)  {  SomeoneTagged = MentionedMember  }  else  {  SomeoneTagged = message.member;  };

    //Vars
    const ProfileName        = SomeoneTagged.displayName;
    const key2               = SomeoneTagged.user.id;
    var   Failed             = false;
      
    if  (peeky.userData.has(key2))  {

    var TheBannerShown = function_GetBackground(key2);

    var background = await Canvas.loadImage(TheBannerShown)//.catch(error => {Failed = true;  peeky.userData.set(key2, DefaultBackground, "Background");  message.channel.stopTyping();  setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);});
      
    if  (Failed == false)  {
      
    message.channel.startTyping();

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
    var layout = await Canvas.loadImage("http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fprofile_layout_2.5.png");
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height);

    //Draw Events
      
    //String Setting
    ctx.fillStyle = StatsColor;
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 1; 
    ctx.shadowOffsetY = 1;
    ctx.globalAlpha = 1;

    //Name String
    ctx.font = "19px " + Setting.DefaultFont;
    ctx.fillText(ProfileName, 83, 25, canvas.width - 95);
      
    //Coins String
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Gredit").toLocaleString('en') + " Gredit", 45, 105, canvas.width / 2 - 50);
      
    //Chests String
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Chests").toLocaleString('en') + " Chests", 45, 140, canvas.width / 2 - 50);
      
    //Karma String
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Karma") + " Karma", canvas.width / 2 + 45, 105, canvas.width / 2 - 50);
      
    //Badges String
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Badges").toLocaleString('en') + " Badges", canvas.width / 2 + 45, 140, canvas.width / 2 - 50);

    /*
    //Exp String
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Exp").toLocaleString('en') + " Exp", canvas.width / 2 + 45, 175, canvas.width / 2 - 50);
    */

    //Backpack String
    if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };
      
    ctx.font = "15px " + Setting.DefaultFont;
    ctx.fillText("" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds", 45, 175, canvas.width / 2 - 50);
    
    //Description String
    var text = peeky.userData.get(key2, "Description");
    var fontsize = 16;
    var y_position = 50;      
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
      
    if (text.includes("\n")) {  y_position = 45;  };
    ctx.fillText(peeky.userData.get(key2, "Description"), 83, y_position, canvas.width - 95);
      
    //Draw Images
      
    //Coin Icon
    const coin_icon = await Canvas.loadImage(CoinImage);
    ctx.drawImage(coin_icon, 10, 85, 27, 27);
      
    //Chest Icon
    const chest_icon = await Canvas.loadImage(ChestImage);
    ctx.drawImage(chest_icon, 10, 120, 27, 27);

    //Backpack Icon
    const backpack_icon = await Canvas.loadImage(BackpackImage);
    ctx.drawImage(backpack_icon, 10, 155, 27, 27);

    //Karma Icon
    const karma_icon = await Canvas.loadImage(KarmaImage);
    ctx.drawImage(karma_icon, canvas.width / 2 + 10, 85, 27, 27);

    //Badges Icon
    const badges_icon = await Canvas.loadImage(BadgesImage);
    ctx.drawImage(badges_icon, canvas.width / 2 + 10, 120, 27, 27);

    /*
    //Exp Icon
    const exp_icon = await Canvas.loadImage(ExpImage);
    ctx.drawImage(exp_icon, canvas.width / 2 + 10, 155, 27, 27);
    */

    //Progress Bar
    const progress_bar = await Canvas.loadImage(XPImage);
    const progress_bar_background = await Canvas.loadImage(LightField);
      
    //Badges
    var   BadgeYpos    = 201.5;
    var   BadgeXpos    = -24;
    const BadgeXposAmt = 32.5;
    var   BadgeAmount  = 0;
    const MaxBadges    = 15;
    const BadgeSize    = 25;

    //Staff Icon
    if  (BadgeAmount < MaxBadges)  {
    const moderator_icon = await Canvas.loadImage(ModeratorImage);
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(StaffRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(moderator_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };
      
    //Translator Icon
    if  (BadgeAmount < MaxBadges)  {
    const gopbot_icon = await Canvas.loadImage(TranslatorImage);
    if  (peeky.userData.get(key2, "TranslatorBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(gopbot_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Veteran Icon
    if  (BadgeAmount < MaxBadges)  {
    const veteran_icon = await Canvas.loadImage(VeteranImage);
    if  (peeky.userData.get(key2, "VeteranBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(veteran_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Supporter Icon
    if  (BadgeAmount < MaxBadges)  {
    const supporter_icon = await Canvas.loadImage(SupporterImage);
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(SupporterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(supporter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Booster Icon
    if  (BadgeAmount < MaxBadges)  {
    const supporter_icon = await Canvas.loadImage(BoosterImage);
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(BoosterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(supporter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };
      
    //Upgrader Icon
    if  (BadgeAmount < MaxBadges)  {
    const upgrader_icon = await Canvas.loadImage(UpgraderImage);
    if  (peeky.userData.get(key2, "UpgraderBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(upgrader_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Bug Hunter Icon
    if  (BadgeAmount < MaxBadges)  {
    const bughunter_icon = await Canvas.loadImage(BugCHunterImage);
    if  (peeky.userData.get(key2, "BugHunterBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(bughunter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Contributor Icon
    if  (BadgeAmount < MaxBadges)  {
    const contributor_icon = await Canvas.loadImage(ContributorImage);
    if  (peeky.userData.get(key2, "ContributorBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(contributor_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Celebrator Icon
    if  (BadgeAmount < MaxBadges)  {
    const celebrator_icon = await Canvas.loadImage(CelebratorImage);
    if  (peeky.userData.get(key2, "CelebratorBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(celebrator_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Movie Nighter Icon
    if  (BadgeAmount < MaxBadges)  {
    const movienighter_icon = await Canvas.loadImage(MovieNighterImage);
    if  (peeky.userData.get(key2, "MovieNighterBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(movienighter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Medallist Icon
    if  (BadgeAmount < MaxBadges)  {
    const medalist_icon = await Canvas.loadImage(MedallistImage);
    if  (peeky.userData.get(key2, "MedallistBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(medalist_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Evil  Icon
    if  (BadgeAmount < MaxBadges)  {
    const evil_icon = await Canvas.loadImage(EvilImage);
    if  (peeky.userData.get(key2, "EvilBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(evil_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Good Icon
    if  (BadgeAmount < MaxBadges)  {
    const good_icon = await Canvas.loadImage(GoodImage);
    if  (peeky.userData.get(key2, "GoodBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(good_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Party Icon
    if  (BadgeAmount < MaxBadges)  {
    const publisher_icon = await Canvas.loadImage(PartyImage);
    if  (peeky.userData.get(key2, "PartyBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(publisher_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Poller Icon
    if  (BadgeAmount < MaxBadges)  {
    const poller_icon = await Canvas.loadImage(PollerImage);
    if  (peeky.userData.get(key2, "PollerBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(poller_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Voter Icon
    if  (BadgeAmount < MaxBadges)  {
    const voter_icon = await Canvas.loadImage(VoterImage);
    if  (peeky.userData.get(key2, "VoterBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(voter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Publisher Icon
    if  (BadgeAmount < MaxBadges)  {
    const publisher_icon = await Canvas.loadImage(PublisherImage);
    if  (peeky.userData.get(key2, "PublisherBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(publisher_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };
      
    //Ownership Icon
    if  (BadgeAmount < MaxBadges)  {
    const ownership_icon = await Canvas.loadImage(OwnershipImage);
    if  (peeky.userData.get(key2, "OwnershipBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(ownership_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };
      
    //Gopbot Icon
    if  (BadgeAmount < MaxBadges)  {
    const gopbot_icon = await Canvas.loadImage(GopbotImage);
    if  (peeky.userData.get(key2, "GopbotBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(gopbot_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Horder Icon
    if  (BadgeAmount < MaxBadges)  {
    const horder_icon = await Canvas.loadImage(HorderImage);
    if  (peeky.userData.get(key2, "HorderBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(horder_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Miner Icon
    if  (BadgeAmount < MaxBadges)  {
    const miner_icon = await Canvas.loadImage(MinerImage);
    if  (peeky.userData.get(key2, "MinerBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(miner_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Gamer Icon
    if  (BadgeAmount < MaxBadges)  {
    const gamer_icon = await Canvas.loadImage(GamerImage);
    if  (peeky.userData.get(key2, "GamerBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(gamer_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Gambler Icon
    if  (BadgeAmount < MaxBadges)  {
    const gambler_icon = await Canvas.loadImage(GamblerImage);
    if  (peeky.userData.get(key2, "GamblerBadge") >= 10)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(gambler_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Charity Icon
    if  (BadgeAmount < MaxBadges)  {
    const charity_icon = await Canvas.loadImage(CharityImage);
    if  (peeky.userData.get(key2, "CharityBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(charity_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //PainterIcon
    if  (BadgeAmount < MaxBadges)  {
    const painter_icon = await Canvas.loadImage(PainterImage);
    if  (peeky.userData.get(key2, "PainterBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(painter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Fashion Icon
    if  (BadgeAmount < MaxBadges)  {
    const fashion_icon = await Canvas.loadImage(FashionImage);
    if  (peeky.userData.get(key2, "FashionBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(fashion_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    ctx.globalAlpha = 1;
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = "#" + ProfileColor;
    ctx.fillRect(63, 253, peeky.userData.get(key2, "Exp") / (Setting.ExpNeeded * peeky.userData.get(key2, "Level")) * (canvas.width - 127), 26); //Body
  
    //Avatar
    const avatar = await Canvas.loadImage(SomeoneTagged.user.displayAvatarURL({ format: 'png' }).replace("https", "http"));
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;
    ctx.drawImage(avatar, 6, 6, 64, 64);

    //Exp Text
    ctx.font = "22px " + Setting.DefaultFont;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.shadowOffsetX = 1; 
    ctx.shadowOffsetY = 1;
    ctx.fillText(peeky.userData.get(key2, "Level").toLocaleString('en'), 34, 275);
    ctx.fillText((peeky.userData.get(key2, "Level") + 1).toLocaleString('en'), canvas.width - 34, 275);
      
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');
    await message.channel.send("", attachment).catch(error => ErrorBag.add(error)).then(async function (m)  {    

    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(ProfileBoosterRole))  {
        const embed = {"description": InfoIcon + " The **Profile Booster** for this profile will remain active for **" + function_TimeLeft(peeky.userData.get(key, "BoosterStart"),  "hours", ProfileBoosterTime) + " hours**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    if  (!WebsiteCooldowns.has("featuredprofile") && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(SupporterRole))  {
      
        WebsiteCooldowns.add("featuredprofile");
        setTimeout(() => {WebsiteCooldowns.delete("featuredprofile")}, 1800000);   

        fs.writeFile('public/featured_profile.txt', "<center>  <a href='https://peeky.glitch.me/store.html'><img src='" + m.attachments.array()[0].url + "' class='featuredprofile'></a>  </center>", (err) => {
            if (err) console.log(err); 
        });
      
        var TranslatedMessages = [InfoIcon + " This profile is now featured on the website.", InfoIcon + " Tento profil je nyní vystaven na strance."];
        const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
        console.log("The featured profile has been updated.");
          
        };

    }).catch(function(err) {  ErrorBag.add(err);  });

    message.channel.stopTyping();
      
    };

    } else {
      const embed = {"description": ErrorMessage7[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
};

//Play 
if (CommandName.startsWith("play"))  {
  
    var CommandArgument = CommandName.replace("play", ""); //split("play")[1];
      
    if  (CommandArgument.startsWith(" "))  {
      
        CommandArgument = CommandArgument.replace(" ", "");
  
    if  (!CurrentlyPlaying.has(message.guild.id) && !MusicCmdCooldown.has(message.guild.id))  {
      
        var Type = "Started";
        var DeleteMessage = false;
        var ChoosingMode = true;
        
        MusicCmdCooldown.add(message.guild.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.guild.id)}, 30000);
      
        peeky.serverData.set(keySF, [], "Queue");
      
        async function PlayMusic(voiceChannel)  {

                await ytdl.getBasicInfo(peeky.serverData.get(keySF, "Queue")[0]).then(async (info) => {
                info = info.player_response.videoDetails;

                const Thumbnail  = info.thumbnail.thumbnails[info.thumbnail.thumbnails.length - 1].url;
                const Title      = info.title;
                const Author     = info.author;
                const Length     = info.lengthSeconds;
                const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (Length / 60));
                const Started    = new Date();

                if  (Length <= 1800 && Length > 60)  { //1800

                    await voiceChannel.join().then(async connection => {

                        CurrentlyPlaying.add(message.guild.id);

                        peeky.serverData.set(keySF, Title, "Title");
                        peeky.serverData.set(keySF, Thumbnail, "Thumbnail");
                        peeky.serverData.set(keySF, Author, "Author");
                        peeky.serverData.set(keySF, LengthDate, "Length");
                        peeky.serverData.set(keySF, Started, "Started");
                        peeky.serverData.set(keySF, peeky.serverData.get(keySF, "Queue")[0], "Link");

                        if  (DeleteMessage == true)  {
                            message.delete().catch(error => ErrorBag.add(error));
                        };            

                        message.channel.startTyping();
                        await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, LengthDate, message.author.id, Type, peeky.serverData.get(keySF, "Queue"))).catch(error => ErrorBag.add(error));
                        message.channel.stopTyping();

                        if  (message.guild.me.permissions.has("CHANGE_NICKNAME") && ((message.guild.me.nickname !== null && message.guild.me.nickname.startsWith("🎵 ")) || message.guild.me.nickname == null))  {
                            message.guild.me.setNickname("🎵 " + " PEEKY " + "🎵");
                        };

                        const stream = ytdl(peeky.serverData.get(keySF, "Queue")[0]);
                        const dispatcher = await connection.play(stream, StreamOptions);

                        dispatcher.on('finish', async reason => {
                            
                            if  (peeky.serverData.get(keySF, "Looping") == false)  {
                                peeky.serverData.get(keySF, "Queue").shift();
                            } else {
                                peeky.serverData.get(keySF, "Queue").push(peeky.serverData.get(keySF, "Queue")[0]);
                                peeky.serverData.get(keySF, "Queue").shift();                     
                            };

                            if  (peeky.serverData.get(keySF, "Queue").length == 0 || message.guild.me.voice.channel.members.filter(m => !m.user.bot).map(m => m.id).length < 1)  {  //

                                peeky.serverData.set(keySF, [], "Queue");
                                CurrentlyPlaying.delete(message.guild.id);
                                voiceChannel.leave();

                                if  (message.guild.me.permissions.has("CHANGE_NICKNAME") && ((message.guild.me.nickname && message.guild.me.nickname.startsWith("🎵 "))))  {
                                    message.guild.me.setNickname(null);
                                };

                                const Listeners = voiceChannel.members.filter(m => !m.user.bot).map(m => m.id);

                                var TranslatedMessages = [InfoIcon + " The music has now finished with **X001** listeners.", InfoIcon + " Hudba právě skončila s **X001** posluchateli."];
                                const embed = {"description": TranslatedMessages[Language].replace("X001", Listeners.length),  "color": EmbedColor};
                                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                                if  (Listeners.length >= 5)  {

                                    Listeners.forEach(id => {

                                        if  (peeky.userData.has(id) && peeky.userData.get(id, "PartyBadge") == false)  {
                                            peeky.userData.set(id, true, "PartyBadge");
                                        };

                                    });

                                };

                            } else {

                              Type = "Queue";
                              PlayMusic(voiceChannel);

                            };

                        });

                    }).catch(error => { 
                        const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        ErrorBag.add(error);
                    });

                } else {
                  var TranslatedMessages = [ErrorIcon + " You can only play songs between 1 to 30 minutes.", ErrorIcon + " Můžete pouze hrát písničky které trvají 1 až 30 minut."];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            }).catch(async (error) => {
                ErrorBag.add(error);

                var TranslatedMessages = [ErrorIcon + " Failed to get the YouTube video.", ErrorIcon + " Nepodařilo se získat YouTube video."];
                const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            });
          
        };

        if  (CommandArgument.includes("youtube.com") || CommandArgument.includes("youtu.be"))  {
            DeleteMessage = true;
        };

        if  (CommandArgument == RandomString && ChoosingMode == true)  {

            ChoosingMode = false;
          
            CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
            Type = "Random";
              
            peeky.serverData.get(keySF, "Queue").push(CommandArgument);

        };

        if  (CommandArgument == "previous" && ChoosingMode == true)  {

            ChoosingMode = false;

            if  (peeky.serverData.has(keySF, "Link") && peeky.serverData.get(keySF, "Link") !== "None")  {  

                CommandArgument = peeky.serverData.get(keySF, "Link");
                Type = "Previous";
              
                peeky.serverData.get(keySF, "Queue").push(CommandArgument);

            } else {

              var TranslatedMessages = [InfoIcon + " Previous song not found - playing a random song.", InfoIcon + " Minulá písnička nenalezena - Pehrávám náhodnou písničku."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
              Type = "Random";
              
              peeky.serverData.get(keySF, "Queue").push(CommandArgument);
            };

        };

        if  (CommandArgument == "playlist" && ChoosingMode == true)  {

            ChoosingMode = false;

            if  (peeky.userData.get(key, "Playlist").length > 0)  {

                //CommandArgument = peeky.userData.get(key, "Playlist")[Math.floor(Math.random()*peeky.userData.get(key, "Playlist").length)];
              
                function_ShuffleArray(peeky.userData.get(key, "Playlist")).forEach(song => {
                    peeky.serverData.get(keySF, "Queue").push(song);
                });
                Type = "Playlist";

            } else {

              var TranslatedMessages = [InfoIcon + " Your playlist is empty - Playing a random song.", InfoIcon + " Váš playlist je prázdný - Přehrávám náhodnou písničku."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
              Type = "Random";
              
              peeky.serverData.get(keySF, "Queue").push(CommandArgument);

            };

        };

        search(CommandArgument, SearchOptions, async function(error, results)  {

            if  (error) return ErrorBag.add(error);

            if  (ChoosingMode == true)  {

                if  (results.length > 0)  {      
                    peeky.serverData.get(keySF, "Queue").push(results[0].link);
                };

            };
      
        var Queue = peeky.serverData.get(keySF, "Queue");

        if  ((Queue.length > 0) && (Queue[0].includes("youtube.com") || Queue[0].includes("youtu.be")) && !Queue[0].includes("?list=") && (ytdl.validateURL(Queue[0]) == true))  {

        if  (message.member.voice.channel)  {

            const voiceChannel  = message.member.voice.channel;

        if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {

            PlayMusic(voiceChannel);

        } else {
          const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else {
          const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else {
          const embed = {"description": ErrorMessage4[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        });      
      
    }
     else
    {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Current
if (CommandName == "current")  {
      
    if  (!MusicCmdCooldown.has(message.author.id))  {

    if  (CurrentlyPlaying.has(message.guild.id) && message.guild.me.voice.channel)  {
      
        MusicCmdCooldown.add(message.author.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.author.id)}, 5000);

        const Title     = peeky.serverData.get(keySF, "Title");
        const Thumbnail = peeky.serverData.get(keySF, "Thumbnail");
        const Author    = peeky.serverData.get(keySF, "Author");
        const Length    = peeky.serverData.get(keySF, "Length");
        const Started   = peeky.serverData.get(keySF, "Started");
        const Queue     = peeky.serverData.get(keySF, "Queue");

        message.channel.startTyping();
        await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, Length, "minutes left", "Current", peeky.serverData.get(keySF, "Queue"))).catch(error => ErrorBag.add(error));
        message.channel.stopTyping();
        
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Playlist
if (CommandName.startsWith("playlist ") || CommandName == "playlist")  {
  
    if  (message.channel.permissionsFor(peeky.user).has('ATTACH_FILES'))  {
  
        var CommandArgument = CommandName.split("playlist")[1];

        if  (CommandArgument.startsWith(" add "))  {

        if  (!MusicCmdCooldown.has(message.author.id))  {

            var PlaylistRequest = CommandArgument.replace(" add ", "");

            MusicCmdCooldown.add(message.author.id);
            setTimeout(() => {MusicCmdCooldown.delete(message.author.id)}, 30000);

        if  (PlaylistRequest == "current")  {

            if  (CurrentlyPlaying.has(message.guild.id) && peeky.serverData.get(keySF, "Link") !== "None")  {

                if  (peeky.userData.get(key, "Playlist").length < Setting.PlaylistLimit)  {

                    peeky.userData.get(key, "Playlist").push(peeky.serverData.get(keySF, "Link"));

                    var TranslatedMessages = [SuccessIcon + " Added the current song to your playlist.", SuccessIcon + " Současná písnička byla přidána do vašeho playlistu."];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));    

                } else {
                  const embed = {"description": ErrorMessage15[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };           

            } else {
              const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else

        if  (!PlaylistRequest.includes("?list="))  {

            if  ((PlaylistRequest.includes("youtube.com") || PlaylistRequest.includes("youtu.be")) && ytdl.validateURL(PlaylistRequest) == true)  {

                if  (peeky.userData.get(key, "Playlist").length < Setting.PlaylistLimit)  {

                    peeky.userData.get(key, "Playlist").push(PlaylistRequest);

                    var TranslatedMessages = [SuccessIcon + " Added the song to your playlist.", SuccessIcon + " Písnička byla přidána do vašeho playlistu."];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                } else {
                  const embed = {"description": ErrorMessage15[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                }; 

            } else {
              const embed = {"description": ErrorMessage4[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          var TranslatedMessages = [ErrorIcon + " You cannot add playlists to your playlist.", ErrorIcon + " Do svého playlistu nemůžete přidat playlisty."];
          const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else {
          const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else 
        if  (CommandArgument.startsWith(" remove "))  {

            var PlaylistRequest = CommandArgument.replace(" remove ", "");

            if  (peeky.userData.get(key, "Playlist").includes(PlaylistRequest))  {

            var BackgroundIndex = peeky.userData.get(key, "Playlist").indexOf(PlaylistRequest);

            peeky.userData.get(key, "Playlist").splice(BackgroundIndex, 1);  //Remove the background

            var TranslatedMessages = [SuccessIcon + " The song has been removed from your playlist.", SuccessIcon + " Písnička byla odebrána z vašeho playlistu."];
            const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            } else {
              var TranslatedMessages = [ErrorIcon + " That song is not in your playlist.", ErrorIcon + " Tato písnička ve vašem playlistu není."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else  
        if  (CommandArgument.startsWith(" rename "))  {

            var PlaylistRequest = function_RemoveFormatting(CommandArgument.replace(" rename ", ""), "other", true);

            peeky.userData.set(key, PlaylistRequest, "PlaylistName")

            var TranslatedMessages = [SuccessIcon + " Your playlist has been renamed to **X001**.", SuccessIcon + " Váš playlist byl přejmenován na **X001**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.userData.get(key, "PlaylistName")),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        } else
        if  (CommandArgument.startsWith(" thumbnail"))  {
          
            if  (message.attachments.size > 0)  {
          
                var Thumbnail = message.attachments.array()[0].url;
              
                if  (function_DetectLink(Thumbnail) == true)  {
                  
                    peeky.userData.set(key, Thumbnail, "PlaylistThumbnail");

                    var TranslatedMessages = [SuccessIcon + " You have set the thumbnail for your playlist.", SuccessIcon + " Nastavil jste miniaturu pro váš playlist"];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  
                } else {
                  var TranslatedMessages = [ErrorIcon + " Failed to set your playlist thumbnail.", ErrorIcon + " Nepodařilo se nastavit miniaturu pro váš playlist."];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };
                  
            } else {
              peeky.userData.set(key, null, "PlaylistThumbnail");

              var TranslatedMessages = [SuccessIcon + " You have set the default thumbnail for your playlist.", SuccessIcon + " Nastavil jste základní miniaturu pro váš playlist"];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else
        if  (CommandArgument.startsWith(" clear"))  {

            var TranslatedMessages = [SuccessIcon + " You have cleared your playlist of **X001 songs**.", SuccessIcon + " Vyčistili jste svůj playlist od **X001 písniček**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.userData.get(key, "Playlist").length),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.userData.set(key, [], "Playlist");

        } else  {

          var MentionedMember = message.mentions.members.first();
          var SomeoneTagged = message.member;

          if  (peeky.userData.has(SomeoneTagged.user.id))  {

              const Playlist = peeky.userData.get(SomeoneTagged.user.id, "Playlist");

              if  (Playlist.length > 0)  {
                  var FinalizedPlaylist = function_NumarizeArray(Playlist, ["<", ">"])
              }  else  {
                 var FinalizedPlaylist = "The playlist is empty.";
              };

              var Thumbnail = "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fplaylist_embed.png?v=1563967857471";
              if  (peeky.userData.get(key, "PlaylistThumbnail") !== null)  {
                  Thumbnail = peeky.userData.get(key, "PlaylistThumbnail");
              };

              const embed = {
              "image": {
                "url": Thumbnail
              },
              "fields": [
              {
                "name": peeky.userData.get(SomeoneTagged.user.id, "PlaylistName"),
                "value": function_RemoveFormatting(SomeoneTagged.displayName, "other", true)
              },
              {
                "name": "­\nSongs",
                "value": FinalizedPlaylist + "\n­"
              }],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

          } else {
            const embed = {"description": ErrorMessage7[Language],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          };

        };

    };

};

//Skip
if (CommandName == "skip")  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        if  (message.member.voice.channel)  {
      
            var OwnerActive = false;

            if  (message.guild.me.voice.channel && message.guild.me.voice.channel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
                OwnerActive = true;
            };

            if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {

                const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                if  (connection)  {
                    connection.dispatcher.end();
                };

            } else {
              var TranslatedMessages = [ErrorIcon + " Only the server owner can skip the song right now.", ErrorIcon + " Písniku může momentálně přeskočit pouze vlastník serveru."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Stop
if (CommandName == "stop")  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        if  (message.member.voice.channel)  {
      
            var OwnerActive = false;

            if  (message.guild.me.voice.channel && message.guild.me.voice.channel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
                OwnerActive = true;
            };

            if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {

                const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                if  (connection)  {
                    peeky.serverData.set(keySF, [], "Queue");
                    connection.dispatcher.end();
                    message.guild.me.voice.channel.leave();
                };

            } else {
              var TranslatedMessages = [ErrorIcon + " Only the server owner can stop the music right now.", ErrorIcon + " Hudbu může momentálně zastavit pouze vlastník serveru."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Loop
if (CommandName == "loop")  {
      
    if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
      
        if  (message.member.voice.channel)  {
      
            var OwnerActive = false;

            if  (message.guild.me.voice.channel && message.guild.me.voice.channel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
                OwnerActive = true;
            };

            if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {

                peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "Looping"), "Looping");

                var TranslatedMessages = [SuccessIcon + " Music looping has been **X001**.", SuccessIcon + " Smyčka u písniček byla **X001**."];
                if  (peeky.serverData.get(keySF, "Looping") == false)  {
                    var CurrentString = DisableStrings;
                } else {
                  var CurrentString = EnableStrings;
                };

                const embed = {"description": TranslatedMessages[Language].replace("X001", CurrentString[Language]),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            } else {
              var TranslatedMessages = [ErrorIcon + " Only the server owner can loop the music right now.", ErrorIcon + " Nastavit smyčku u písniček může pouze vlastník serveru."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage21[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//GuessTheSong  
if (CommandName == "guessthesong")  {

    if  (!CurrentlyPlaying.has(message.guild.id) && !ActiveMinigames.has(message.guild.id))  {

        if  (message.member.voice.channel)  {
          
            const voiceChannel  = message.member.voice.channel;
            var ChosenSong = Math.floor((Math.random() * GuessTheSong.length));
          
            InfoMessages.push(InfoIcon + " Full Song: <" + GuessTheSong[ChosenSong][0] + ">");

            CurrentlyPlaying.add(message.guild.id);
            ActiveMinigames.add(message.guild.id);
            setTimeout(() => {CurrentlyPlaying.delete(message.guild.id)
                              ActiveMinigames.delete(message.guild.id)}, 30000);
          
            if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {
  
                await voiceChannel.join().then(async connection => {

                    const stream = ytdl(GuessTheSong[ChosenSong][0]);
                    const dispatcher = await connection.play(stream, StreamOptions);
                    const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (30 / 60));
          
                    peeky.serverData.set(keySF, "Guess the Song", "Title");
                    peeky.serverData.set(keySF, DefaultBackground, "Thumbnail");
                    peeky.serverData.set(keySF, "", "Author");
                    peeky.serverData.set(keySF, LengthDate, "Length");
                    peeky.serverData.set(keySF, new Date(), "Started");
                    peeky.serverData.set(keySF, "", "Link");

                    var TranslatedMessages = ["**Try to guess the name of this song!**", "**Zkuste uhádnout jméno této písničky!**"];
                    const embed = {"description": TranslatedMessages[Language] + "\n" + GuessTheSong[ChosenSong][2],  "color": EmbedColor};
                    message.channel.send({ embed });

                    message.channel.awaitMessages(response => response.content.toLowerCase() == GuessTheSong[ChosenSong][1].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                      var key = collected.first().author.id;
                        
                      //Gamer Badge
                      if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                          peeky.userData.set(key, true, "GamerBadge");
                          InfoMessages.push(InfoMessage1[Language]);
                      };
                      
                      if  (peeky.userData.has(key))  {
                          peeky.userData.math(key, "+", 100, "Gredit");
                      };
                      
                      const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has guessed the song's name!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                      message.channel.send({ embed });

                      const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                      if  (connection)  {
                          connection.dispatcher.end();
                          message.guild.me.voice.channel.leave();
                      };
                      
                    })
                    .catch(collected => {
                      const embed = {"description": ErrorIcon + " The song's name was **" + GuessTheSong[ChosenSong][1] + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                      message.channel.send({ embed });

                      const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                      if  (connection)  {
                          connection.dispatcher.end();
                          message.guild.me.voice.channel.leave();
                      };
                    });

                });
              
            };

        } else {
          const embed = {"description": ErrorIcon + " You need to join a voice channel.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//TriviaQuestions  
if (CommandName == "triviaquestions")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        var ChosenQuestion = Math.floor((Math.random() * TriviaQuestions.length));
        var Answers = function_ShuffleArray(TriviaQuestions[ChosenQuestion].slice(1, 4));

        ActiveMinigames.add(message.guild.id);
        setTimeout(() => {ActiveMinigames.delete(message.guild.id)}, 30000);
      
        const embed = {"description": "**" + TriviaQuestions[ChosenQuestion][0] + "**\n" + TriviaQuestions[ChosenQuestion][4] + "\n\n" + function_NumarizeArray(Answers, ["", ""]),  "color": EmbedColor}; 
        message.channel.send({ embed });
    
        message.channel.awaitMessages(response => response.content.toLowerCase() == TriviaQuestions[ChosenQuestion][1][0].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
        .then(collected => {
             var key = collected.first().author.id;

             //Gamer Badge
             if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                 peeky.userData.set(key, true, "GamerBadge");
                 InfoMessages.push(InfoMessage1[Language]);
             };

             if  (peeky.userData.has(key))  {
                 peeky.userData.math(key, "+", 50, "Gredit");
             };

             const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has chosen the right answer!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
             message.channel.send({ embed });
        })
        .catch(collected => {
              const embed = {"description": ErrorIcon + " The question's answer was **" + TriviaQuestions[ChosenQuestion][1][0] + "**.",  "color": EmbedColor}; 
              message.channel.send({ embed });
        });

      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//DrawAndGuess  
if (CommandName == "drawandguess")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        var ChosenQuestion = Math.floor((Math.random() * RandomWords.length));
        var Active = false;

        ActiveMinigames.add(message.guild.id);
        setTimeout(() => {ActiveMinigames.delete(message.guild.id)}, 90000);
      
        var embed = {"description": InfoIcon + " Draw the word **" + RandomWords[ChosenQuestion] + "** in under **1 minute**.",  "color": EmbedColor}; 
        await function_DirectMessage(message.author.id, {  embed,  file: "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fempty_canvas.png"  });

        var embed = {"description": InfoIcon + " **" + function_RemoveFormatting(message.member.displayName, "other", true) + "** has **1 minute** to draw their word!",  "color": EmbedColor}; 
        message.channel.send({ embed });
    
        message.channel.awaitMessages(response => response.author.id == message.author.id && response.attachments.array().length > 0, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {

            const embed = {"description": InfoIcon + " Try to guess the word that **" + function_RemoveFormatting(message.member.displayName, "other", true) + "** has drawn!",  "color": EmbedColor}; 
            message.channel.send({ embed });
          
            Active = true;
          
            setTimeout(() => {
          
                if  (Active == true)  {
                  
                    var Hint = "";
                    
                    for (var i = 0; i < RandomWords[ChosenQuestion].length; i++) {
                      
                        if  (i == 0)  {
                            Hint = Hint + " " + RandomWords[ChosenQuestion][i] + " ";   
                        }
                         else  
                        {
                         Hint = Hint + " - ";   
                        };
                      
                    };

                    const embed = {"description": InfoIcon + " Time's running low, so here's a hint: " + Hint,  "color": EmbedColor}; 
                    message.channel.send({ embed });
                  
                };
            
            }, 20000);
          
            message.channel.awaitMessages(response => response.author.id !== message.author.id && response.content.toLowerCase() == RandomWords[ChosenQuestion].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                 var key = collected.first().author.id;
              
                Active = false;

                 //Gamer Badge
                 if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                     peeky.userData.set(key, true, "GamerBadge");
                     InfoMessages.push(InfoMessage1[Language]);
                 };

                 if  (peeky.userData.has(key))  {
                     peeky.userData.math(key, "+", 250, "Gredit");
                 };

                 const embed = {"description": SuccessIcon +  " Congratulations, **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has guessed the word!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                 message.channel.send({ embed });
            })
            .catch(collected => {
                const embed = {"description": ErrorIcon + " The word was **" + RandomWords[ChosenQuestion] + "**.",  "color": EmbedColor}; 
                message.channel.send({ embed });
            });
             
        })
        .catch(collected => {          
              const embed = {"description": ErrorIcon + " Sorry, but **" + function_RemoveFormatting(message.member.displayName, "other", true) + "** has ran out of time to draw.",  "color": EmbedColor}; 
              message.channel.send({ embed });
        });

      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Mute
if  (CommandName.startsWith("mute"))  {
  
    var CommandArgument = CommandName.split("mute")[1];
  
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");

    if  (message.member.permissions.has("MUTE_MEMBERS"))  {

        if  (message.guild.me.permissions.has("MANAGE_ROLES"))  {

            var MentionedMember = message.mentions.members.first();
            var name = peeky.serverData.get(keySF, "muted_role");
            var Role = message.guild.roles.find(role => role.name == name);

            if  (MentionedMember)  {

                if  (Role)  {

                    if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && !MentionedMember.roles.has(Role.id))  {

                        await MentionedMember.roles.add(Role.id, "Unmuted by " + message.author.tag + ".").catch(error => {
                            const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                            ErrorBag.add(error); Failed = true;
                        });

                    if  (Failed == false)  {
                        const embed = {"description": SuccessIcon + " I have muted **" + function_RemoveFormatting(MentionedMember.displayName, "other", true) + "** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));  
                    };

                    }
                     else
                    {
                     var TranslatedMessages = [ErrorIcon + " You cannot mute that user.", ErrorIcon + " Tohoto uživatele ztlumit nemůžete."];
                     const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

                }
                 else
                {
                  var TranslatedMessages = [ErrorIcon + " I cannot find a role called **X001**.", ErrorIcon + " Nemohu najít roli s jménem **X001**."];
                  const embed = {"description": TranslatedMessages[Language].replace("X001", name),  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
                };

                }
                 else
                {
                  const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor};  
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

        }
         else
        {
         const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
     const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Unmute
if  (CommandName.startsWith("unmute"))  {
  
    var CommandArgument = CommandName.split("unmute")[1];
  
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");

if  (message.member.permissions.has("MUTE_MEMBERS"))  {
    
if  (message.guild.me.permissions.has("MANAGE_ROLES"))  {
      
    var MentionedMember = message.mentions.members.first();
    var name = peeky.serverData.get(keySF, "muted_role");
    var Role = message.guild.roles.find(role => role.name == name);

    if  (MentionedMember)  {
  
    if  (Role)  {
      
    if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && MentionedMember.roles.has(Role.id))  {

        await MentionedMember.roles.remove(Role.id, "Unmuted by " + message.author.tag + ".").catch(error => { 
            const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            ErrorBag.add(error); Failed = true;
        });

        if  (Failed == false)  {
            const embed = {"description": SuccessIcon + " I have unmuted **" + function_RemoveFormatting(MentionedMember.displayName, "other", true) + "** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
          var TranslatedMessages = [ErrorIcon + " You cannot unmute that user.", ErrorIcon + " Tohoto uživatele odztlumit nemůžete."];
          const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
          var TranslatedMessages = [ErrorIcon + " I cannot find a role called **X001**.", ErrorIcon + " Nemohu najít roli s jménem **X001**."];
          const embed = {"description": TranslatedMessages[Language].replace("X001", name),  "color": EmbedColor};
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
        };
            
        }
         else
        {
          const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
  
}
 else
{
 const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{      
  const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//IDBan
if  (CommandName.startsWith("idban"))  {
  
    var CommandArgument = CommandName.split("idban")[1];

    if  (CommandArgument.startsWith(" "))  {
      
        CommandArgument = CommandArgument.replace(" ", "");

    if  (message.member.permissions.has("BAN_MEMBERS"))  {
    
    if  (message.guild.me.permissions.has("BAN_MEMBERS"))  {

        var ValidID = 0;

        await peeky.users.fetch(CommandArgument, true).catch(error => {  ErrorBag.add(error);  ValidID ++;  });
      
        if  (ValidID == 0) {

        if  (!message.guild.members.find(m => m.id == CommandArgument))  {

            await message.guild.members.ban(CommandArgument, "ID banned by " + message.author.tag + ".").catch(error => { 
                  const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  ErrorBag.add(error); Failed = true;
            });

            if  (Failed == false)  {
                const embed = {"description": SuccessIcon + " I have ID banned **" + function_RemoveFormatting(peeky.users.get(CommandArgument).username, "other", true) + "** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };
            
        }
         else
        {
         var TranslatedMessages = [ErrorIcon + " You cannot ID ban someone inside the server.", ErrorIcon + " Nemůžete ID Zabanovat někoho na serveru."];
         const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         var TranslatedMessages = [ErrorIcon + " You must enter a valid ID.", ErrorIcon + " Musíte zadat validní ID."];
         const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    }
     else
    {
     const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
   
    }
     else
    {
     const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Ban
if  (CommandName.startsWith("ban"))  {

    if  (message.member.permissions.has("BAN_MEMBERS"))  {

        if  (message.guild.me.permissions.has("BAN_MEMBERS"))  {

            var MentionedMember = message.mentions.members.first();

            if  (MentionedMember && MentionedMember.bannable && !MentionedMember.permissions.has("BAN_MEMBERS"))  {

                await message.guild.members.ban(MentionedMember.user.id, "Banned by " + message.author.tag + ".").catch(error => { 
                      const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                      ErrorBag.add(error); Failed = true;
                });

                if  (Failed == false)  {
                    const embed = {"description": SuccessIcon + " I have banned **" + function_RemoveFormatting(MentionedMember.displayName, "other", true) + "** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            }
             else
            {
              var TranslatedMessages = [ErrorIcon + " You cannot ban that user.", ErrorIcon + " Tohoto uživatele zabanovat nemůžete."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }
         else
        {
         const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
     const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Kick
if  (CommandName.startsWith("kick"))  {

    if  (message.member.permissions.has("KICK_MEMBERS"))  {

        if  (message.guild.me.permissions.has("KICK_MEMBERS"))  {

            var MentionedMember = message.mentions.members.first();

            if  (MentionedMember && MentionedMember.bannable && !MentionedMember.permissions.has("KICK_MEMBERS"))  {

                await MentionedMember.kick("Kicked by " + message.author.tag + ".").catch(error => { 
                      const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                      ErrorBag.add(error); Failed = true;
                });

                if  (Failed == false)  {
                    const embed = {"description": SuccessIcon + " I have kicked **" + function_RemoveFormatting(MentionedMember.displayName, "other", true) + "** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            }
             else
            {
              var TranslatedMessages = [ErrorIcon + " You cannot kick that user.", ErrorIcon + " Tohoto uživatele vykopnout nemůžete."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
            };

        }
         else
        {
         const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
     const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Purge
if  (CommandName.startsWith("purge"))  {
  
    var CommandArgument = CommandName.split("purge")[1];

    if  (CommandArgument.startsWith(" "))  {

    if  (message.member.permissions.has("MANAGE_MESSAGES"))  {
    
        if  (message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

            CommandArgument = CommandArgument.replace(" ", "");

            if  (isNaN(CommandArgument) == false && CommandArgument > 0 && CommandArgument <= 100)  {

                    await message.delete().catch(error => ErrorBag.add(error));

                    message.channel.bulkDelete(CommandArgument).catch(error => {
                        const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        ErrorBag.add(error); Failed = true;
                    });

                    if  (Failed == false)  {
                        const embed = {"description":  SuccessIcon + " I have purged **" + CommandArgument + " messages** at **" + function_RemoveFormatting(message.member.displayName, "other", true) + "**'s request.",  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

            }
             else
            {
              var TranslatedMessages = [ErrorIcon + " You can only purge 1 to 100 messages.", ErrorIcon + " Můžete vyčistit jenom 1 až 100 zpráv."];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }
         else
        {
         const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
   
        }
         else
        {
         const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Prefix
if  (CommandName.startsWith("prefix"))  {
  
    var CommandArgument = CommandName.split("prefix")[1];
  
    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = CommandArgument.replace(" ", "").slice(0, 5).toLowerCase();

    if  (message.member.user.id == message.guild.owner.user.id || message.author.id == OwnerId)  {

        if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

            const InfoMessages = [InfoIcon + " If the prefix is broken, join the Support Server."];

            peeky.serverData.set(keySF, CommandArgument, "prefix");
          
            var TranslatedMessages = [SuccessIcon + " The prefix is now **X001**.", SuccessIcon + " Prefix je teď **X001**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", CommandArgument) + InfoMessages.join("\n\n"),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        }
         else
        {
         const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
      const embed = {"description": PermissionsMessageError2[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
     else if (CommandArgument == "")
    {      
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

};
  
//HighlightedChannel
if  (CommandName.startsWith("highlightedchannel"))  {
  
    var CommandArgument = CommandName.split("highlightedchannel")[1];
  
    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = function_RemoveFormatting(CommandArgument.replace(" ", ""), "channel", true);

    if  (message.member.user.id == message.guild.owner.user.id || message.author.id == OwnerId)  {

        if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

            peeky.serverData.set(keySF, CommandArgument, "highlighted_channel");
          
            var TranslatedMessages = [SuccessIcon + " The highlighted channel is now **#X001**.", SuccessIcon + " Zvýrazněný kanál je teď **#X001**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", CommandArgument) + InfoMessages.join("\n\n"),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        }
         else
        {
         const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
      const embed = {"description": PermissionsMessageError2[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
     else if (CommandArgument == "")
    {      
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

};
  
//FunctionNotifications
if  (CommandName.startsWith("functionnotifications"))  {

    if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

        if(peeky.serverData.get(keySF, "function_notifications") == true) {peeky.serverData.set(keySF, false, "function_notifications");}
        else peeky.serverData.set(keySF, true, "function_notifications");

        var TranslatedMessages = [SuccessIcon + " The function notifications are now set to **X001**.", SuccessIcon + " Upozornění na funkce jsou teď nastaveny na **X001**."];
        const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.serverData.get(keySF, "function_notifications")),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {      
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//LevelNotifications
if  (CommandName.startsWith("levelnotifications"))  {

    if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

        if(peeky.serverData.get(keySF, "level_notifications") == true) {peeky.serverData.set(keySF, false, "level_notifications");}
        else peeky.serverData.set(keySF, true, "level_notifications");

        var TranslatedMessages = [SuccessIcon + " The level notifications are now set to **X001**.", SuccessIcon + " Upozornění na levely jsou teď nastaveny na **X001**."];
        const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.serverData.get(keySF, "function_notifications")),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {      
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//MuteRole
if  (CommandName.startsWith("muterole"))  {
  
    var CommandArgument = CommandName.split("muterole")[1];

    if  (CommandArgument.startsWith(" "))  {

    if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

        CommandArgument = CommandArgument.replace(" ", "");

        if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

            var FixedMutedRole = function_RemoveFormatting(CommandArgument, "role", true);
            var RoleExist = message.guild.roles.find(role => role.name == CommandArgument);
            var FilteredChannels = message.guild.channels.array().filter(channel => !TextChannels.includes(channel.type));

            if  (!RoleExist && message.guild.me.permissions.has("MANAGE_ROLES"))  {

                if  (!RoleCooldown.has(message.guild.id))  {

                    RoleCooldown.add(message.guild.id);
                    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                   await message.guild.roles.create({
                       data: {
                         name: CommandArgument,
                         color: Setting.Blurple
                       }
                   }).catch(error => ErrorBag.add(error));

                   InfoMessages.push(InfoIcon + " Created a role called **" + CommandArgument + "**.");

                   if  (message.guild.roles.find(role => role.name == CommandArgument) && message.guild.me.permissions.has("MANAGE_CHANNELS") && !RoleCooldown.has(message.guild.id + "muterole"))  {
                       
                       RoleCooldown.add(message.guild.id + "muterole");
                       setTimeout(() => {RoleCooldown.delete(message.guild.id + "muterole")}, 300000);
                         
                       var Amount = 0;
                       var MuteRole = message.guild.roles.find(role => role.name == CommandArgument);
                     
                       FilteredChannels.forEach(channel => {
                             
                          var Failed = false;
                             
                          if  (channel.type == "voice" && !channel.permissionsFor(message.guild.me).has("CONNECT"))  {
                                  Failed = true;
                          };
                             
                          if  (Failed == false && Amount < 25)  {
                             
                              channel.overwritePermissions(MuteRole, {
                                  'SEND_MESSAGES': false
                              }).catch(error => ErrorBag.add(error));
                            
                              Amount ++;
                              
                          };

                       });

                       var TranslatedMessages = [InfoIcon + " Edited **X001** channels for the **@X002** role.", InfoIcon + " Upravil jsem **X001** kanálu pro roli **X002**."];
                       InfoMessages.push(TranslatedMessages[Language].replace("X001", Amount + "/" + FilteredChannels.length).replace("X002", CommandArgument));     

                  }
                   else
                  {
                   var TranslatedMessages = [ErrorIcon + " Couldn't edit channels for the **@X001** role.", ErrorIcon + " Nemohl jsem upravit kanály pro roli **X001**."];
                   InfoMessages.push(TranslatedMessages[Language].replace("X001", CommandArgument));   
                  };

               }
                else
               {
                const embed = {"description": CooldownMessage3[Language],  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
               };
              
            };

            peeky.serverData.set(keySF, CommandArgument, "muted_role");
          
            var TranslatedMessages = [SuccessIcon + " The mute role is now set to **@X001**.", SuccessIcon + " Role na ztlumení je teď nastavena na **@X001**."];
            const embed = {"description": TranslatedMessages[Language].replace("X001", CommandArgument) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        }
         else
        {
         const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {      
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
     else if (CommandArgument == "")
    {      
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

};
  
};
  
};

};  
};
});
  
peeky.login(process.env.BOT_TOKEN).catch(console.error);