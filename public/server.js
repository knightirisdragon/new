 //DISCORD
const Discord = require("discord.js");
const peeky   = new Discord.Client();

//DDBL
const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI("482945063282802698", process.env.DDBL_TOKEN);

//BLS
const BotList = require('botlist.space');
const bls     = new BotList({ id: "482945063282802698", botToken: process.env.BLS_TOKEN });

//MUSIC
const ytdl_discord = require('ytdl-core-discord');
const ytdl         = require('ytdl-core');
const opus         = require('node-opus');

//CANVAS
const Canvas         = require('canvas');
const request        = require('request');
const dominant_color = require('dominant-color');

//ENMAP
const Enmap = require("enmap");
peeky.userData = new Enmap({name: "userData"});
peeky.serverData = new Enmap({name: "serverData"});
peeky.channelData = new Enmap({name: "channelData"});

//MISC.
const fs         = require('fs');
const ms         = require('parse-ms');
const node_fetch = require('node-fetch');
const https      = require('https');

//Sets and arrays
const ErrorBag               = new Set();
const FailedVoteChecks       = new Set();
const FalseMsgIDs            = new Set();
const FloodProtectionStrikes = [];
const LoggedMessages         = new Set();
const CurrentlyStreaming     = new Set();
const ClearedNames           = new Set();
const QueuedSOSMessages      = new Set();
const CurrentlyPlaying       = new Set();
const WebsiteCooldowns       = new Set();  //Auto Wipe, Website stats, Featured Profile, etc.
const GainCooldown           = new Set();
const OverviewCooldown       = new Set();
const SetInviteCooldown      = new Set();
const ProfileCooldown        = new Set();  const ProfileCooldownMS = 5000;
const MusicCmdCooldown       = new Set();
const PeekyCmdCooldown       = new Set();
const ChannelCooldown        = new Set();  const ChannelCooldownMS   = 10000;
const RoleCooldown           = new Set();  const RoleCooldownMS      = 10000;
const ServerTrialCooldown    = new Set();
const EventCountdownCooldown = new Set();
const MemberCounterCooldown  = new Set();
const MessageLogCooldown     = new Set();
const DonorWallCooldown      = new Set();
const ResponseCooldowns      = new Set();  const ResponseCooldownMS = 5000;

//Image Assets
const TwitterIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Ftwitter.png?1555574745120";
const RedditIcon    = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Freddit.png?1555575444018";
const InstagramIcon = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Finstagram.png?1555615973963";
const DiscordIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdiscord.png?1558635704218";

const DarkField  = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdarkfield.png?1558421870621";
const LightField = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Flightfield.png?1558421869640";

const DefaultBackground = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground1.png?1558721841453";
const PrismPattern      = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpattern_assets.png?1554545063162";
const CoinImage         = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_coins.png?1543767999542";
const ExpImage          = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_xp.png?1541260284097";
const LevelImage        = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_level.png?1541260281702";
const ChestImage        = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_chest.png?1541260288051";
const XPImage           = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2FScreenshot_141.png?1543781509470";
const BackpackImage     = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_backpack.png?1546614356449";

const SupporterImage    = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fsupporter.png?1548194367244";
const PeekyStaffImage   = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fpeekystaff.png?1548824803415";
const ModeratorImage    = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fmoderator.png?1548824732338";
const VeteranImage      = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fveteran.png?1548951084956";
const BugCHunterImage   = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbugcatcher.png?1548261764050";
const ContributorImage  = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fcontributor.png?1548786864495";
const VoterImage        = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fvoter.png?1551541314431";
const GamblerImage      = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fgambler.png?1549020492799";
const CharityImage      = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fcharity.png?1549020493264";
const FashionImage      = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Ffashion.png?1549531926172";
const OwnershipImage    = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fownership.png?1551641363134";
const MedallistImage    = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fmedallist.png?1556137409939";
const MovieNighterImage = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fmovienighter.png?1553099659112";
const CelebratorImage   = "http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fcelebrator.png?v=1560844023018";
const PollerImage       = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpoller.png?1556170526097";
const PublisherImage    = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpublisher.png?1555782065115";
const PartyImage        = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fparty.png?1558040749323";
const HorderImage       = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fhorder.png?1558727721673";
const PainterImage      = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpainter.png?1558728694985";
const MinerImage        = "http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2FMiner.png?1559015350668";
const BoosterImage      = "http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbooster.png?v=1560691400942";

//Config
const Config                = require("./config.json");
const OngoingEvent          = Config.event_status;
const Prefix                = Config.default_prefix;
const CustomBackgroundPrice = Config.custom_background;
const SellMultiplier        = Config.sell_multiplier;
const ExpNeeded             = Config.exp_multiplier;
const MaxServers            = Config.server_limit;
const InactiveWipe          = Config.autowipe_time;
const InactiveDays          = (InactiveWipe  / ( 24 * 60 * 60 * 1000 ));

//Arrays
const Days                = [  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ];
const MarkedUsers         = [  "251634374972276736"  ];
const blacklistedWebsites = [  "discord.gg", "discord.io", "discord.me", "twitch.tv", "bit.ly", "goo.gl", "youtu.be", "youtube.com", "twitter.com", "paypal.me", "paypal.com", "selly.gg", "tiny.cc", " evassmant.com", "urlzs.com"   ];
const whitelistedSymbols  = [  "a", "á", "b", "c", "č", "d", "ď", "e", "é", "ě", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "ň", "o", "ó", "p", "q", "r", "ř", "s", "š", "t", "u", "ů", "ú", "v", "w", "x", "y", "ý", "z", "ž", "0", "1", "2", "3", "4", "6", "5", "7", "8", "9", "_", "-", " ", ",", ".", "'", '"', "(", ")", "[", "]"  ];
const VerificationLevels  = [  "None", "Low", "Medium", "High", "Very High"  ];

const DefaultDescriptions = [  "I'm very busy and important.",
                               "I sip water quite slowly.",
                               "Battery low, I'm scared.",
                               "I have a car for each day of the month.",
                               "I make up a dream in my head before I go to bed.", "My life is a green screen.",
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
                               "Born at a very young age."
                            ];
const RandomAvatars       = [  "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_1.png?v=1560717936708",
                               "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_2.png?v=1560717937510",
                               "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fpeeky_icon_3.png?v=1560717937123"
                            ];
const RandomSongs         = [  "https://www.youtube.com/watch?v=tklQ47Hpfxw",
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
                               "https://www.youtube.com/watch?v=al1BNB8bKaE"
                            ];

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
const GamblerEmote      = "<:gambler:540851774920327168>";
const CharityEmote      = "<:charity:540851775188500480>";
const FashionEmote      = "<:fashion:543001884840034336>";
const VoterEmote        = "<:voter:551429736463859762>";
const OwnershipEmote    = "<:ownership:551848929730232351>";
const MedallistEmote    = "<:medallist:570706340901683220>";
const MovieNighterEmote = "<:movienighter:557968105494675456>";
const CelebratorEmote   = "<:celebrator:590447227013562368>";
const PollerEmote       = "<:poller:570845554758778880>";
const PublisherEmote    = "<:publisher:569215883109466143>";
const PartyEmote        = "<:party:578689336116248618>";
const HorderEmote       = "<:horder:581571252070776844>";
const PainterEmote      = "<:painter:581575158855368724>";
const MinerEmote        = "<:miner:582777441592934410>";
const BoosterEmote      = "<:booster:589786301759488050>";

//Other Emotes
const ErrorIcon    = "<:peeky_error:529412267343872031>";
const SuccessIcon  = "<:peeky_success:529415084804669487>";
const InfoIcon     = "<:peeky_info:529412267746394133>";
const Hollow       = "<:peeky_hollow:506921440067452928>";
const WhiteSquare  = "<:peeky_white:529305474604990464>";
const BotTag       = "<:bot:541014775468130336>";
const OwnerTag     = "<:owner:543001955921035274>";
const GreditIcon   = "<:gredit:558673809343774720>";
const ChestIcon    = "<:chest:561511603305185280>";
const EnabledIcon  = "<:enabled:538295053940948993>";
const DisabledIcon = "<:disabled:538295054431813662>";
const SettingsIcon = "<:settings:586612320839532573>";

//Role IDs
const StaffRole         = "494429609874685983";
const SupporterRole     = "504740473185894400";
const BoosterRole       = "589783851329650690";
const ServerUpgradeRole = "549190337437106176";
const RedeemRole1       = "505491936401162270";  //1000 Gredit
const RedeemRole2       = "527197436746268704";  //2000 Gredit
const RedeemRole3       = "536142807702831104";  //5000 Gredit
const RedeemRole4       = "536142889189638155";  //10000 Gredit

//Other IDs
const OwnerId              = "108899856889737216";
const PeekyId              = "482945063282802698";
const SupportServer        = "319891596772638744";
const AnnouncementsChannel = "346710479407808524";
const EmojiStorage         = "493048757286600716";
const WorkshopChannel      = "501130667078189066";
const PurchaseLog          = "583339225001492501";

//Server Message Tags
const GuildNameTag         = "[GuildName]";
const GuildSizeTag         = "[GuildSize]";
const GuildOwnerTag        = "[GuildOwner]";
const GuildVerificationTag = "[GuildLevel]";
const GuildAcronymTag      = "[GuildAcronym]";

//Strings
const AllString     = "all";
const RandomString  = "random";
const BadFormat     = "invalid";
const Exclusive     = "Exclusive";

//Other Variables
const DefaultFont        = "Verdana";
const Dark               = "#36393E";
const LessDark           = "#3f3f3f";
const Light              = "#424549";
const Blurple            = "#7289DA";
const EmbedColor         = 3093047;
const BackgroundInvLimit = 25;
const BannedWordsLimit   = 10;
const GameRolesLimit     = 10;
const AutoDeleteTime     = 250;

//WEBSITE
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

//RESPONSE MESSAGES
const CooldownMessage1 = [ErrorIcon + " You are currently on a cooldown for that command."];
const CooldownMessage2 = [ErrorIcon + " Automated channel creation is currently on a cooldown."];
const CooldownMessage3 = [ErrorIcon + " Automated role creation is currently on a cooldown."];
const CooldownMessage4 = [ErrorIcon + " You are currently on a cooldown for that function."];

const PermissionsMessageError1 = [ErrorIcon + " You are lacking the required permissions do that."];
const PermissionsMessageError2 = [ErrorIcon + " You need to be the owner of this server to do that."];
const PermissionsMessageError3 = [ErrorIcon + " I am missing required permissions to do that."];

const ErrorMessage1  = [ErrorIcon + " You need more Gredit to do that."]
const ErrorMessage2  = [ErrorIcon + " The new description is too large."];
const ErrorMessage3  = [ErrorIcon + " The provided mention is invalid."];
const ErrorMessage4  = [ErrorIcon + " You need to enter a valid YouTube URL."];
const ErrorMessage5  = [ErrorIcon + " You do not have that background in your inventory."];
const ErrorMessage6  = [ErrorIcon + " You do not have enough chests."];
const ErrorMessage7  = [ErrorIcon + " The mentioned user has no profile."];
const ErrorMessage8  = [ErrorIcon + " Mentions are not allowed for this command."];
const ErrorMessage9  = [ErrorIcon + " You must enter a valid amount."];
const ErrorMessage10 = [ErrorIcon + " Make sure the Function's name is all in lowercase."];
const ErrorMessage11 = [ErrorIcon + " You need to be a Supporter to do that."];
const ErrorMessage12 = [ErrorIcon + " There are no songs currently playing."];
const ErrorMessage13 = [ErrorIcon + " Something has gone unexpectedly wrong."];

const InfoMessage1 = [InfoIcon + " You have earned a new badge."];
const InfoMessage2 = [InfoIcon + " You have set the default background."];
//RESPONSE MESSAGES

//Banner List
var Banner  = {  Source : 0,  Price : 1 ,  Name : 2 ,  Credit : 3,  RevenueID : 4  };
var Banners = [

    [DefaultBackground, 0, "Default", "Steam", undefined], //Default
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground2.jpg?1537950866619", 475, "Welcome to NYC", "The Division", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground3.jpg?1535302285990", 400, "Henry the knight", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground4.jpg?1535333614451", 425, "Fallout's garage", "Fallout 4", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground5.jpg?1537816491802", 375, "Encounter with Stalkers", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground6.jpg?1535285894346", 275, "The Whalers", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground7.jpg?1535290804866", 400, "Mysterious Man", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground8.jpg?1537816628115", 425, "Escape of noobs", "ROBLOX", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground9.jpg?1537888709532", 375, "The last crusade", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground10.jpg?1535334052918", 450, "The last of them", "The Last of Us", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground11.jpg?1535334267005", 400, "Birch Forest", "Minecraft", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground12.png?1537814782102", 475, "Epidemic", "Rainbow Six Sige", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground13.jpg?1537814934225", 500, "Hostage Situation", "Rainbow Six Sige", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground14.jpg?1537950866487", 350, "The province of Skyrim", "The Elder Scrolls 5 Skyrim", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground15.jpg?1535404090262", 450, "The silent assassin", "Dishonored", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground16.jpg?1535404088759", 425, "Out of this world", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground17.jpg?1537873790199", 400, "First bank robbery", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground18.jpg?1535481872824", 350, "The Saints", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground19.jpg?1535481874193", 350, "Secret burial", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground20.jpg?1535481872090", 400, "Kane and Lynch", "Kane and Lynch Dog Days", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground21.jpg?1535569846831", 350, "Helicopter escape", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground22.jpg?1535990062310", 300, "Tough welcome", "Killing Floor 1", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground23.jpg?1536565142261", 425, "Crashed helicopter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground24.jpg?1536565143281", 400, "The horde", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground25.png?1536600827686", 425, "Abandoned city", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground26.jpg?1536603983804", 450, "The space", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground27.jpg?1536934121522", 400, "Lake of peace", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground28.jpg?1536934103891", 450, "King Slime", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground29.png?1537047514422", 425, "Gladiator fights", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground30.jpg?1537814773898", 300, "Ambush", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground31.jpg?1537815016132", 400, "Red pattern", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground32.jpg?1537950866063", 450, "Close Cry", "Far Cry 4", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground33.jpg?1537950866386", 425, "Dark knight", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground34.jpg?1539510881741", 300, "Orc genocide", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground35.jpg?1539518504422", 350, "Village raid", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground36.jpg?1539518559631", 420, "M e m e ­ H o u s e", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground37.png?1539543378623", 350, "Supply royale", "Player Unknown's Battle Royale", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground38.png?1539546582730", 300, "Counter attack", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground39.jpg?1539623688927", 400, "Into the battle", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground40.jpg?1539879968743", 400, "Cool ferrets", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground41.png?1558777240101", 250, "You right now", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground42.jpg?1539871005083", 475, "Father and daughter", "Dishnored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground43.jpg?1539885633665", 250, "Lighten up forest", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground44.jpg?1539885633627", 250, "Chill lake", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground45.jpg?1539885635308", 425, "Fire forest", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground46.jpg?1540021324998", 350, "Pepe's sky", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground47.jpg?1540027329670", 400, "Lost world", "Fornite", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground48.jpg?1540033276474", 200, "Dragon slayer", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground49.jpg?1540033274127", 275, "Rush through a village", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground50.png?1540650384768", 250, "USSR", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground51.jpg?1540107026526", 350, "Lizard Wizard", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground52.jpg?1540309332233", 250, "Left unturned", "Unturned", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground53.jpg?1540106992532", 400, "Home invasion", "Telltale's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground54.jpg?1540132038895", 425, "Dungeon explorers", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground55.jpg?1540132031244", 400, "Realm of peace", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground56.jpg?1540133298644", 450, "Lonely Stalker", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground57.png?1540135651911", 450, "Darkest knight", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground58.jpg?1540135654277", 450, "Dragon fighter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground59.jpg?1540135656509", 475, "Lost giants", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground60.jpg?1540135658192", 450, "Ragnarok", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground61.jpg?1540143872268", 425, "World full of fantasy", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground62.png?1540150284329", 450, "Cyberpunk", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground63.jpg?1540151664457", 475, "Survival of the fittest", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground64.jpg?1540152341562", 475, "New Vegas", "Fallout New Vegas", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground65.jpg?1540153114935", 450, "Dungeon keep", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground66.jpg?1540238680343", 450, "Clear view", "Dying Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground67.jpg?1540238738204", 425, "Silent thief", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground68.jpg?1540239775507", 500, "Mighty assassin", "Assassins Creed Odyssey", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground69.png?1540240323226", 450, "Power armor", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground70.jpg?1540240540188", 400, "Horse poker", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground71.png?1540240626824", 350, "War never changes", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground72.png?1540309268628", 400, "Peace and calm", "Not credited", undefined],  
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground73.jpg?1540328071975", 500, "The last light", "Metro Last Light", undefined],  
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground74.jpg?1540326671899", 450, "Max's race", "Mad Max", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground75.jpg?1540327235631", 475, "Overlook on Mordor", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground76.jpg?1540456781085", 450, "Raid ship", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground77.jpg?1540543916309", 425, "Drew crash", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground78.png?1540576871453", 425, "Feared knight", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground79.png?1540577542371", 400, "Bohemian raid", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground80.jpg?1540578179868", 450, "Patient hunter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground81.jpg?1540584390436", 450, "Training duels", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground82.png?1540912286983", 200, "Goal!!!", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground83.jpg?1540592361761", 425, "The catacombs", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground84.jpg?1540639642216", 350, "Frost troll encounter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground85.png?1540640316587", 300, "SCP background", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground86.jpg?1540908052580", 250, "The Avengers", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground87.jpg?1540716574310", 400, "Store outbreak", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground88.png?1540724038256", 500, "Dry blood", "Dying Light Bad Blood", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground89.png?1540724452325", 500, "The swarm", "Dying Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground90.jpg?1540724504181", 500, "The Moonlord", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground91.jpg?1540732418318", 475, "Wastelanders", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground92.png?1540732542780", 300, "Shad rage", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground93.png?1540732797407", 250, "Five Finger Death Punch", "Five Finger Death Punch", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground94.png?1540732802324", 250, "Slza", "Slza", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground95.png?1540732804837", 250, "Hollywood Undead", "Hollywood Undead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground96.png?1540733411430", 350, "Carnival infestation", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground97.png?1540738875332", 475, "Last Man Battalion", "The Division", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground98.jpeg?1540751959042", 400, "Cake liar", "Portal", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground99.jpg?1540906544488", 450, "Fallout together", "Fallout 76", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground100.jpg?1540906676579", 500, "Rigged game", "Fallout New Vegas", undefined],  
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground_101.jpg?1540909984834", 375, "Cursed brothers", "Fear 3", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground102.png?1540910240235", 425, "Dangerous follower", "Outlast 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground103.png?1540910702105", 350, "Three cowboys", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground104.jpg?1540921032023", 425, "Cursed forest", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground105.png?1540922347614", 450, "Blocky bridge", "Minecraft", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground106.png?1540922585363", 450, "Four survivors", "Left 4 Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground107.png?1540922676410", 450, "Genocide in mordor", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground108.jpg?1540922769333", 500, "Robot hunter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground109.png?1540922913032", 450, "The big crusade", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground110.jpg?1540923010977", 250, "Imagine Dragons", "Imagine Dragons", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground111.png?1540923189976", 425, "Securing the corner", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground112.png?1540923310896", 425, "Cursed with knowledge", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground113.png?1540923433944", 500, "Outbreak siege", "Rainbow Six Siege", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground114.png?1540923593655", 450, "The Postal dude", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground115.png?1540923783605", 400, "Sunset", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground116.jpg?1540997970518", 425, "Sky planets", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground117.jpg?1540997969729", 425, "Chill view", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground118.jpg?1540998120961", 500, "Sea wyren", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground119.jpg?1540998420614", 475, "Doomed", "DOOM", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground120.png?1540999231874", 350, "Sci-fi guards", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground121.png?1546534600249", 450, "Corvo", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground122.jpg?1541102671802", 425, "Dragon siege", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground123.jpg?1541102674654", 425, "Trade market", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground124.jpg?1541174620357", 250, "LSD", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground125.jpg?1541248189955", 500, "Bloom", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground126.png?1541253186637", 425, "Restaurant raid", "Kane and Lynch Dog Days", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground127.png?1541253652465", 500, "The burial", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground128.png?1541257973255", 300, "Leeeroooyyy", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground129.jpg?1541259754960", 250, "Dragonborn badge", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground130.png?1541259841365", 250, "Metro survivor badge", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground131.png?1541260761215", 450, "Fight between lords", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground132.jpg?1541268325643", 450, "Contaminated", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground133.png?1541274217777", 450, "The witcher", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground134.png?1541274466250", 475, "Sacred place", "Dragon Age Inquisition", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground135.png?1541279158138", 425, "Collapsed underground", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground136.png?1541279163436", 450, "The end", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground137.png?1541279940853", 300, "Psycho", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground138.png?1541328912882", 475, "Hight tech security", "PAYDAY The Heist", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground139.png?1541328918999", 450, "Street extraction", "PAYDAY The Heist", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground140.png?1541336274881", 300, "Minecraft mill", "Bersekr21", `266579411162103808`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground141.jpg?1541336309752", 500, "Village defense", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground142.jpg?1541336335410", 375, "The high king", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground143.jpg?1541336560436", 500, "Frost curser", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground144.jpg?1541336878452", 425, "Wolf pack", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground145.png?1541337473161", 450, "The walking survivors", "Overkill's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground146.png?1541338501230", 450, "Stone age hunter", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground147.png?1541338504448", 475, "Spec ops", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground148.jpg?1541522367987", 450, "Damned", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground149.jpg?1541522466281", 425, "Primal hunter", "Far Cry Primal", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground150.jpg?1541522585002", 400, "Express", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground151.png?1543134979962", 400, "Kekistan", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground152.png?1543134982640", 425, "Bandit standoff", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground153.png?1543135038818", 475, "Modern warfare", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground154.jpg?1543135041735", 275, "Some ninja idk", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground155.png?1543135044488", 450, "Riding the mountain", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground156.png?1543173013894", 475, "Captain Price", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground157.jpg?1544049162186", 450, "Miraak the dragonborn", "The Elder Scrolls 5 Skyrim", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground158.png?1543854878909", 500, "Living together", "Don't Starve Together", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground159.png?1543854878765", 450, "One man's land", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground160.png?1543940936704", 500, "Metro ruins", "Metro Last Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground161.png?1543940992259", 450, "Wumpus' homeland", "Discord", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground162.png?1544301727115", 300, "Deployment", "Counter Strike Global Offensive", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground163.png?1544592035867", 400, "Orbit", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground164.png?1545024402425", 375, "Kovac's community", "How to Survive 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground165.png?1545166008425", 500, "Proper burial", "Kingdom Come Deliverance", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground166.jpg?1545421965715", 450, "Goblin slayer", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground167.png?1545631212316", 425, "Home killer", "Resident Evil 7", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground168.png?1545638575351", 150, "Weird cat", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground169.png?1545779120615", 500, "White masks", "Rainbow Six Siege", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground170.png?1545823111874", 475, "This is a robbery!", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground171.png?1546128297923", 450, "This war of theirs", "This War of Mine", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground172.png?1546253733572", 450, "Breaking the deal", "Mafia 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground173.png?1546253734432", 425, "Safehouse", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground174.png?1546253736286", 400, "Project Origin", "Fear 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground175.jpeg?1546258339431", 450, "Mars colonation", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground176.png?1546540411645", 475, "The Contract", "A Hat in Time", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground177.png?1546617365441", 475, "Emily the empress", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground178.png?1546640352552", 475, "Castle far away", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground179.jpg?1546640356081", 425, "Before the batte", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground180.png?1546901086923", 425, "Standing", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground181.png?1546901088480", 500, "Roof fights", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground182.jpg?1547152599803", 500, "Robot guards", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground183.jpg?1547555333469", 475, "Connected", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground184.png?1547809508673", 100, "Snens", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground185.jpg?1547809510214", 350, "Queres puppers", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground186.jpg?1548191942331", 375, "Zombie virus", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground187.png?1548198438043", 400, "Prism pattern", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground188.png?1548440856335", 300, "Gamers arise!", "TheVoiceOverPete", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground189.png?1548787581218", 300, "End stronghold", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground190.png?1548787620678", 425, "The hat", "Telltale's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground191.png?1549491879583", 250, "Retribution", "SpectreGames", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground192.png?1550519837303", 450, "Sunset view", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground193.png?1550954101975", 300, "OwOcnic", "SickWheeny Nick", `298551254978789378`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground194.png?1551123539987", 425, "Daze", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground195.jpg?1551209003330", 350, "Real view", "vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground196.png?1551481112722", 450, "Revolution", "Homefront Revolution", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground197.png?1551517314470", 500, "Doomsday", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground198.png?1551896626588", 200, "Redline", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground199.png?1551896628681", 450, "Hallway", "Resident Evil 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground200.png?1551896635268", 425, "Underground palace", "Undertale", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground201.png?1552129507121", 350, "Dirt", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground202.png?1552129513754", 500, "Freedome", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground203.png?1552129515227", 375, "This is it Chief", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground204.png?1552129516913", 350, "Boy", "God of War", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground205.png?1552138972456", 275, "PEEKY's old pals", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground206.png?1552138978087", 250, "XXL Plushies", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground207.png?1552151256169", 500, "Jackpot!", "Devil May Cry 5", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground208.png?1552233925577", 150, "Pixelvince", "Pixelvince", `354617102394720266`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground209.png?1552752810447", 200, "FeelsGoodMom", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground210.png?1552809489475", 400, "Airsoft", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground211.png?1552809489603", 400, "Orange pattern", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground212.png?1552809503603", 500, "In the battlefield", "Battlefield 1", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground213.png?1552809504469", 350, "Tom & Jerry's claims", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground214.png?1552941923769", 500, "Adored knight", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground215.png?1552941932967", 250, "Redditor", "Not credited", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground216.jpg?1552969694470", 500, "Que sera, sera", "Mary and Max", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground217.png?1553336264273", 350, "Odd one", "TheOdd1sOut", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground218.png?1553436376818", 425, "At the club", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground219.png?1553623065418", 425, "Robotics", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground220.png?1554321575443", 500, "The savior psycho", "Borderlands 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground221.png?1554546451654", 400, "The vault hunters", "Borderlands 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground222.png?1554546456700", 450, "Firestorm", "Battlefield 1", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground223.png?1554546446408", 500, "Sleeping shadows", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground224.png?1555012380297", 500, "Zer0", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground225.png?1555147436467", 425, "Dude's caravan", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground226.png?1555147437707", 350, "Blamed skeleton", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground227.png?1555147440060", 325, "Stronghold raid", "AMC's The Walking Dead", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground228.png?1555231021661", 450, "Welcome to Vietnam", "Rising Storm 2 Vietnam", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground229.png?1555231025303", 400, "Devil trigger", "Devil May Cry 5", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground230.png?1555231029488", 325, "Villager camp", "Plobster", `268826232806703106`],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground231.png?1555690400218", 100, "King sheep", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground232.png?1555690405127", 425, "Contagion", "Contagion", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground233.png?1555690407657", 450, "Notre Dame", "Assassins Creed Unity", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground234.png?1555758393410", 375, "Phantom's force", "Phantom Forces", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground235.png?1555788520771", 250, "No Thanks Incels", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground236.jpg?1555788525534", 425, "Crazy Doggo", "Lola Woudenberg", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground237.jpg?1555788526781", 250, "Isle Of Dogs", "Wes Anderson", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground238.png?1555788529003", 375, "Ghosts", "Phantom Forces", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground239.png?1555881581795", 400, "Pillar man Richard", "Dan Man Jenkins", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground240.png?1555881583428", 425, "Galaxy boy", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground241.png?1556138322772", 350, "Staredown", "E.Y.E.: Divine Cybermancy", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground242.png?1556142651459", 400, "Dead end", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground243.png?1556379776934", 500, "Fires fade", "Dark Souls", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground244.jpg?1556379779436", 400, "The Bay city", "Altered Carbon", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground245.png?1556379786683", 350, "Airport security", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground246.png?1556379788689", 475, "New wave", "The Division", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground247.png?1557333122021", 475, "Dragonhearted", "Captainsparklez", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground248.png?1558020522402", 500, "Blocky team", "Minecraft", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground249.png?1558020557790", 425, "Amigos", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground250.png?1558020564397", 425, "Saloon", "Red Dead Redemption 1", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground251.png?1558020569519", 450, "Frost mage", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground252.png?1558020571967", 450, "Last stand", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground253.png?1558020744639", 500, "Skull trooper", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground254.png?1558020748286", 350, "The fire dude", "League of Legends", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground255.png?1558174296475", 450, "Storm Walk", "Ryan Shirley", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground256.png?1558038095405", 425, "Evolved", "Evolve", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground257.png?1558038099146", 450, "Stormy night", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground258.png?1558038101105", 475, "Demon of dark", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground259.png?1558038103055", 450, "Floor full of killers", "Killing Floor 2", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground260.png?1558038106758", 325, "Revolution", "We. The Revolution", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground261.png?1558103378145", 450, "Contract delivery", "A Hat in Time", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground262.png?1558103379729", 425, "Ashen", "Ashen", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground263.png?1558103382341", 500, "Roll out!", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground264.png?1558103383792", 475, "The Ghost", "Call of Duty Ghosts", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground265.jpg?1558783572490", 150, "Gun Kid", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground266.jpg?1558783583054", 375, "Sleeping King", "Shrek", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground267.png?1558783596081", 400, "Gaming Pattern", "Discord", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground268.png?1558783610734", 425, "Afterthoughts", "Discord", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground269.png?1558783624153", 375, "Tales of the Borderlands", "Tales from the Borderlands", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground270.png?1558783636471", 475, "Deep in the Shadows", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground271.png?1558783647904", 425, "Stupid little prick named Rick", "AMC's The Walking Dead", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground272.png?1558783659166", 450, "Fallen kingdom", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground273.png?1558783669451", 450, "Why?", "Just Cause", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground274.png?1558783679870", 425, "Toy gang", "To Story 4", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground275.png?1558783691312", 475, "Mad lad", "Mad Max", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground276.png?1558783702786", 450, "Abyss", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground277.png?1558783726173", 425, "Nowadays Rick", "Rick Astley", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground278.png?1558783748699", 500, "Point blank", "Battlefield Hardline", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground279.png?1558783759802", 400, "Abstract pattern", "Not credited", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground280.png?1558783770529", 450, "Spirit tower", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground281.png?1558874631584", 500, "Isaac's nightmare", "not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground282.png?1558874666863", 400, "Spiritual butterflies", "Judith Haddad", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground283.png?1558877694122", 10000, "Golden", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground284.png?1558874673658", 500, "World war zombies", "World War Z", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground285.png?1558888970896", 450, "Morning", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground286.png?1558888974600", 475, "Zoink", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground287.png?1558888976922", 500, "Paladin", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground288.png?1558986681527", 475, "Factory", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground289.png?1558986683278", 500, "Firewatch tower", "Firewatch", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground290.png?1558986687005", 500, "On the edge", "Tomb Raider", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground291.png?1558986689511", 450, "Flower field", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground292.png?1558986693656", 375, "Distant island", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground293.png?1558987597972", 50, "Pink red", "No one", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground294.png?1558987600482", 50, "Dye blue", "No one", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground295.png?1558987601832", 50, "Colorblind orange", "No one", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground296.png?1559103056756", 500, "Robotic warfare", "Sarahhamyied", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground297.png?1559189577583", 200, "Ahhhhh", "Five nights at Freddy's", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground298.png?1559231851015", 400, "The other elves", "Forgotten Realms", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground299.png?1559231854665", 455, "Victarion's charge", "A Song of Ice and Fire", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground300.png?1559237158322", 250, "Space gamer", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground301.png?1559234593103", 425, "Batman", "Batman: Arkham Knight", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground302.png?1559234599790", 500, "Atom apocalypse", "Atom", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground303.png?1559234617296", 500, "Wondering bear", "Samorost 3", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground304.png?1559234625544", 475, "Hidden peace", "Indivisible", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground305.png?1559274593485", 75, "Blurple", "No one", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground306.png?1559274595817", 250, "Wall of flesh", "Doom", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground307.png?1559274597356", 475, "Wearing gold", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground308.png?1559274598337", 475, "Modernized", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground309.png?1559312632224", 500, "Intermission", "Prey", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground310.png?1559312635724", 500, "Street war", "Battlefield 3", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground311.png?1559326557864", 350, "Just joking", "Not credited", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground312.jpg?1559331433267", 450, "Oiled Down", "Not credited", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground313.png", 500, "Lara Croft", "Shadow of the Tomb Raider", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground314.png", 500, "Servant", "Dark Souls 2", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground315.png", 400, "Bean Gansta", "Killer Bean Animation", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground316.png?v=1559999276673", 375, "Deer sighting", "Luboš Houska", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground317.png?v=1559999302765", 450, "This... is... Minecraft!", "Not credited", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground318.png?v=1559999314369", 500, "Futuristic police", "Detroit Cecome Human", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground319.png?v=1559999328518", 425, "Impacted", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground320.png?v=1560087604377", 500, "Consumption", "Black Mirror", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground321.png?v=1560087605507", 500, "Going dark", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground322.png?v=1560087608782", 425, "Extraction", "The Division", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground323.png?v=1560087610295", 400, "The rune", "Deltarune", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground324.png?v=1560087614558", 425, "Jungle crysis", "Crysis", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground325.png?v=1560280962628", 50, "Skin from Fortnite", "Jameskii", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground326.jpg?v=1560281017823", 50, "Grass", "WHASonYT", `339177677326123018`],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground327.png?v=1560283107053", 500 , "Camp liberation", "Kingdom Come Deliverance", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground328.png?v=1560283108264", 475, "Commander Lilith", "Borderlands 2", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground329.png?v=1560716844287", 350 , "Pet fox", "Vojttěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground330.png?v=1560703323947", 500, "Nuke", "Counter Strike Global Offensive", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground331.png?v=1560768909337", 200, "Creeper Buddy", "Not credited", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground332.png?v=1560768910957", 500, "Flare Abyss", "The Division", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground333.png?v=1560777175191", Exclusive, "First Year", "Vojtěch Jílovec", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground334.png?v=1560779898774", 450, "Hype beast", "Counter Strike Global Offensive ", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground335.png?v=1560779904859", 425, "Roblox gang", "ROBLOX", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground336.png?v=1560779909615", 400, "Sanctuary leader", "Joji", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground337.png?v=1560779912403", 350, "Raven buds", "Not credited", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground338.png?v=1560964929302", 500, "Hold Tight", "World War Z", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground339.png?v=1560964938885", 400, "Knight's Camp", "Shovel Knight", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground340.jpg?v=1560964940754", 475, "The Legion", "Watchdogs 3 Legion", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground340.png?v=1562161809660", 250, "Green Shapes", "Gerd Altmann", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground341.png?v=1563487780080", 425, "Aw man", "CaptainSparklez", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground342.png?v=1563487804389", 475, "Surrounded", "Alien Isolation", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground343.png?v=1563487814497", 450, "High-Tech", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground344.png?v=1563487825049", 500, "Midnight breakfast", "Vampyr", undefined]

];

//FUNCTIONS

//Remove Formatting
function Function_RemoveFormatting(text, type, sliced)  {
    
    if  (type == "sm")  {

    var FixedText = text.replace(/\n/g, ' ').replace(/\*/g, '').replace(/`/g, '').replace(/|/g, '').replace(/~/g, '');

    if  (FixedText !== "")  {
      
        if  (FixedText.length > 100)  {
            FixedText = FixedText.slice(0, 100) + "...";
        };

        return FixedText;
    } else {
        return BadFormat;
    };

    } else
  
    if  (type == "get")  {

    var FixedText = text.toLowerCase().replace(/`/g, '');
      
    if  (sliced == true)  {
        FixedText.slice(0, 1900);
    };

    if  (FixedText !== "")  {

        return FixedText;
    } else {
        return BadFormat;
    };
      
    } else
  
    if  (type == "channel")  {

    var FixedText = text.toLowerCase().replace(/[~*|` ]/g, '').replace(/\n/g, '');
      
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
        FixedText.slice(0, 100);
    };

    if  (FixedText !== "")  {
        return FixedText;
    } else {
        return BadFormat;
    };
      
    } else
      
    if  (type == "bw")  {

    var FixedText = text.replace(/[ ]/g, '').replace(/\n/g, '');
      
    if  (sliced == true)  {
        FixedText.slice(0, 50);
    };

        return FixedText;
      
    } else

    if  (type == "cw")  {

    var FixedText = text.replace(/[~*|`_]/g, '').replace(/\n/g, '');
      
    if  (FixedText.length > 100)  {
        FixedText = FixedText.slice(0, 100) + "...";
    };

    if  (FixedText !== "")  {
        return FixedText;
    } else {
        return BadFormat;
    };
      
    };

};

//Remove HTML Tags
function function_RemoveTags(text)  {
      return text.replace(/(<([^>]+)>)/ig, "");
};

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

    const background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(member.id, DefaultBackground, "Background");});
      
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
    ctx.font = "20px " + DefaultFont;
    ctx.textAlign = "right";
    ctx.fillStyle = "white";

    if  (type == "join")  {  ctx.fillStyle = "lightgreen";  }  
    else if (type == "leave")  {  ctx.fillStyle = "pink";  };

    ctx.fillText("●", canvas.width - 5, 18);
      
    //Name String
    ctx.font = "25px " + DefaultFont;
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
  
    if  (detected == true)  {
        ctx.fillStyle = "pink";
        var NameString = "Censored";    
    } else {
        ctx.fillStyle = "white";
        var NameString = peeky.users.get(key).username;
    };
  
    ctx.fillText(NameString, 125, 40);
      
    if  (peeky.userData.has(key))  {
    
    //Description String
    var text = peeky.userData.get(key, "Description");
    var fontsize=18;
    var y_position = 75;

    do {
         fontsize--;
         ctx.font=fontsize+"px " + DefaultFont;
       
       } while  (ctx.measureText(text).width > (canvas.width - 125));
      
    if (text.includes("\n")) {
                              y_position = 62.5;
                             };
        
    ctx.fillStyle = "white";
    ctx.fillText(peeky.userData.get(key, "Description"), 125, y_position);
    }
    else if (!member.user.bot) {
    ctx.font = "18px " + DefaultFont;
    ctx.fillStyle = "pink";
    ctx.fillText("No Profile" , 125, 75);
    }
    else {
    ctx.font = "18px " + DefaultFont;
    ctx.fillStyle = "lightblue";
    ctx.fillText("Bot" , 125, 75);
    };

    //Avatar
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL.replace("https", "http"));
    ctx.drawImage(avatar, 7, 7, 82, 82);

    return attachment = new Discord.Attachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });
      
    };

};

//CANVAS: Music embed
async function function_MusicEmbed(Title, Thumbnail, Author, Length, User, Type)  {
  
            var attachment = null;
  
            var Now = new Date();
  
            const canvas = Canvas.createCanvas(500, 370);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage(PrismPattern);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            /*ctx.globalAlpha = 0.5;
            ctx.fillRect(5, 5, canvas.width - 10, canvas.height - 10);

            ctx.stroke();*/

            ctx.fillStyle = Dark;
            ctx.globalAlpha = 1;
            ctx.fillRect(10, 10, canvas.width - 20, 270);

            ctx.stroke();

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
            ctx.font = "15px " + DefaultFont;
            if  (Type == "Started")  {
                ctx.fillText(peeky.users.get(User).username + " has requested " + Author + "'s song.", 15, 310);
            }  else if  (Type == "Playlist")  {
                ctx.fillText(peeky.users.get(User).username + " has requested a random song from their playlist.", 15, 310);
            }  else if  (Type == "Random")  {
                ctx.fillText(peeky.users.get(User).username + " has requested a random song.", 15, 310);
            }  else if  (Type == "Previous")  {
                ctx.fillText(peeky.users.get(User).username + " has requested the previous song.", 15, 310);
            }  else if  (Type == "Current")  {
                ctx.fillText("Currently playing with approximately " + function_TimeLeft(Length, "minutes") + " minutes left.", 15, 310);
            };

            //Song Name
            ctx.font = "20px " + DefaultFont;
            ctx.fillText(Title, 15, 345);

            return attachment = new Discord.Attachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

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

function function_DetectLink(string)  {

  if  (string.length > 0)  {
    
      if  (string.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g) !== null)  {
          return true;
        
      } else {
          return false;
      };
    
  };
  
};

//Date Format
function function_DateFormat(value)  {
      
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
function function_TimeLeft(value, type)  {
  
    if  (!isNaN(value))  {
      
    if  (type == "days")  {

        return InactiveDays - (Math.abs((new Date() - new Date(value)) / (1000 * 60 * 60 * 24)).toFixed(0));
      
    }  else if  (type == "minutes")  {

        return (Math.abs((new Date() - new Date(value)) / (1000 * 60)).toFixed(0));
      
    };
      
    }  else  {

       return "Invalid Date"; 
      
    };

};

//Numarize Array
function function_NumarizeArray(array, brackets)  {

    var Current = 0; var List = [];

    array.forEach(i => {
        Current ++;
        List.push(Current + ". " + brackets[0] + i + brackets[1] + "\n");
    });

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

function UpdateHome(text)  {
  
fetch('https://peeky.glitch.me/stats.txt')
.then(response => response.text()).then((data) => {
   document.getElementById("ServerCount").innerHTML = data
});
  
fetch('https://peeky.glitch.me/reviews.txt')
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
  
};

peeky.on('ready', () => {

	  console.log("Ready.");
    peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));

    setInterval(() => {
      
        //Set user info
        peeky.user.setAvatar(RandomAvatars[Math.floor(Math.random()*RandomAvatars.length)]).catch(error => ErrorBag.add(error));
        peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));

        //DDBL
        ddbl.postStats(peeky.guilds.size).catch(err => {console.log("Failed to post the serverCount to DDBL."); ErrorBag.add(err)});

        //BLS
        bls.postServerCount(peeky.guilds.size).catch(err => {console.log("Failed to post the serverCount to BLS."); ErrorBag.add(err)});
      
    }, 7200000);
  
});

peeky.on('reconnecting', () => {
	  console.log('Reconnecting.');
});

peeky.on('disconnect', () => {
	  console.log('Disconnected.');
});

/*peeky.on('debug', info => {
	  console.log(info.replace(process.env.BOT_TOKEN, "TOKEN"));
});*/

//Fixes
process.on('uncaughtException', function (err) {  ErrorBag.add(err)  });
peeky.on('error', function (err)  {  ErrorBag.add(err) });

//Stats System
peeky.on('message', async (message) => {
  
    if(message.channel.type !== "dm") {

    const key   = `${message.author.id}`;
    const keyCF = `${message.channel.id}`;
    const keySF = `${message.guild.id}`;
  
    if  (!message.author.bot && !message.webhookID)  {
      
    peeky.userData.ensure(key , {
        UserID: message.author.id,
        OverviewID: null,
        lastSeen: new Date(),
        DailyRewarded: 0,

        Background: 1,
        Description: function_RandomDescription(),
        Inventory: [1],
        Gredit: 0,
        Exp: 1,
        Level: 1,
        Chests: 0,
        UpgradedServers: 0,
      
        //Music
        Playlist: [],
        PlaylistName: "Favorite Songs",
      
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
      
        BadgeGredit: 0,
        BadgeExp: 0,
      
        Bans: 0
    });

    };

    if  (!message.author.bot && !message.webhookID)  {
      
    //Add Stats
    if  (!GainCooldown.has(message.author.id))  {

    GainCooldown.add(message.author.id);
    setTimeout(() => {GainCooldown.delete(message.author.id)}, 10000);

    peeky.userData.set(key, Date.now(), 'lastSeen');
    peeky.serverData.set(keySF, Date.now(), 'lastSeen');
      
    peeky.serverData.set(keySF, message.guild.id, 'GuildID');

    var BadgeExpAmount    = 0;
    var BadgeGreditAmount = 0;

    //Default gain
    BadgeGreditAmount += 5;
    BadgeExpAmount    += 5;

    //Upgraded Server
    if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
        BadgeGreditAmount += 2;
        BadgeExpAmount += 2;
    };

        //Staff
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(StaffRole))  {  BadgeExpAmount += 2;  };

        //Veteran
    if  (peeky.userData.get(key, "VeteranBadge") == true)  {  BadgeExpAmount += 2;  };

        //Supporter
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  };

        //Booster
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(BoosterRole))  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  };

        //Bug Hunter
    if  (peeky.userData.get(key, "BugHunterBadge") == true)  {  BadgeExpAmount += 2;  };

        //Contributor
    if  (peeky.userData.get(key, "ContributorBadge") == true)  {  BadgeExpAmount += 2;  };

        //Celebrator
    if  (peeky.userData.get(key, "CelebratorBadge") == true)  {  BadgeGreditAmount += 2;  };

        //Movie Nighter
    if  (peeky.userData.get(key, "MovieNighterBadge") == true)  {  BadgeGreditAmount += 2;  };
      
        //Medallist
    if  (peeky.userData.get(key, "MedallistBadge") == true)  {  BadgeExpAmount += 2;  };
      
        //Party
    if  (peeky.userData.get(key, "PartyBadge") == true)  {  BadgeGreditAmount += 2;  };
      
        //Poller
    if  (peeky.userData.get(key, "PollerBadge") == true)  {  BadgeGreditAmount += 2;  };
      
        //Voter
    if  (peeky.userData.get(key, "VoterBadge") == true)  {  BadgeGreditAmount += 2;  };
      
        //Publisher
    if  (peeky.userData.get(key, "PublisherBadge") == true)  {  BadgeExpAmount += 2;  };
      
        //Ownership
    if  (peeky.userData.get(key, "OwnershipBadge") == true)  {  BadgeExpAmount += 1;  };
      
        //Miner
    if  (peeky.userData.get(key, "MinerBadge") == true)  {  BadgeGreditAmount += 1;  };
      
        //Horder
    if  (peeky.userData.get(key, "HorderBadge") == true)  {  BadgeGreditAmount += 1;  };
      
        //Gambler
    if  (peeky.userData.get(key, "GamblerBadge") >= 10)  {  BadgeGreditAmount += 1;  };
      
        //Charity
    if  (peeky.userData.get(key, "CharityBadge") == true)  {  BadgeGreditAmount += 1;  };

        //Painter
    if  (peeky.userData.get(key, "PainterBadge") == true)  {  BadgeExpAmount += 1;  };

        //Fashion
    if  (peeky.userData.get(key, "FashionBadge") == true)  {  BadgeExpAmount += 1;  };
      
    BadgeExpAmount    += peeky.userData.get(key, "UpgradedServers");
    BadgeGreditAmount += peeky.userData.get(key, "UpgradedServers");
      
    peeky.userData.set(key, BadgeGreditAmount, "BadgeGredit");
    peeky.userData.set(key, BadgeExpAmount, "BadgeExp");

    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeGreditAmount), "Gredit");
    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeExpAmount), "Exp");
      
    //EVENT DOUBLE EXP
    if  (OngoingEvent == true)  {
        peeky.userData.math(key, "+", Math.round(Math.random() * BadgeExpAmount), "Exp");
    };

    };

    if  (peeky.userData.get(key, "Exp") >= ExpNeeded * peeky.userData.get(key, "Level")) {  //Level Up    
        
        peeky.userData.set(key, 1, "Exp");
        peeky.userData.math(key, "+", 1, "Level");
        peeky.userData.math(key, "+", 1, "Chests");
    
    if  (peeky.serverData.get(keySF, "notifications") == true) {  //Level Up Notification
        
    const canvas = Canvas.createCanvas(500, 95);
    const ctx = canvas.getContext('2d');
    var   Failed = false;
      
    ctx.globalAlpha = 0.75;

    var TheBannerShown = DefaultBackground;
    var ProfileName = message.author.username;

    message.channel.startTyping();
      
    var TheBannerShown = DefaultBackground;
    if  (peeky.userData.has(key))  {
        TheBannerShown = function_GetBackground(key);
    };

    const background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(message.author.id, DefaultBackground, "Background");});
      
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
    ctx.font = "25px " + DefaultFont;
    ctx.fillStyle = "white";
    ctx.fillText(ProfileName, 125, 40);
    
        //Level Up String
    ctx.font = "18px " + DefaultFont;
    ctx.fillStyle = "lightgreen";
    ctx.fillText("Has leveled up to Level " + peeky.userData.get(key, "Level") + "!", 125, 75);
    
      //Avatar
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;
    const avatar = await Canvas.loadImage(message.author.displayAvatarURL.replace("https", "http"));
    ctx.drawImage(avatar, 7, 7, 82, 82);
    
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });
      
    message.channel.send("", attachment).catch(error => ErrorBag.add(error));
      
    message.channel.stopTyping();
            
    console.log("The Notifications function has been triggered in " + message.guild.name + ".");

    };

    };  
    };
    };
  
};

    //Auto Wipe System
    if  (!WebsiteCooldowns.has("autowipe"))  {
      
    WebsiteCooldowns.add("autowipe");
    setTimeout(() => {WebsiteCooldowns.delete("autowipe")}, 3600000);
  
    const rightNow = Date.now();
  
    //Guilds
    var filtered = peeky.serverData.filter( p => p.GuildID && p.GuildID !== EmojiStorage && p.lastSeen );
    var toRemoveGuilds = filtered.filter(data => {
        return rightNow - InactiveWipe > data.lastSeen;
    });

    toRemoveGuilds.forEach(data => {
      
        var ChosenGuild = peeky.guilds.get(data.GuildID);

        if  (ChosenGuild !== undefined)  {
            ChosenGuild.leave().catch(error => ErrorBag.add(error));
        };
      
        if  (data.server_upgraded == false)  {
            peeky.serverData.delete(data.GuildID);
            console.log("I have wiped the settings of a guild and left it because it was inactive.");
        }  else  {
           console.log("I have left a guild it because it was inactive but also ugpraded.");        
        }

    });
      
    //Profiles
    var filtered = function_ShuffleArray(peeky.userData.filter( p => p.UserID && p.lastSeen ));  // && p.FashionBadge == false
    var toRemoveProfiles = filtered.filter(data => {
        return (rightNow - InactiveWipe > data.lastSeen);
    });

    toRemoveProfiles.forEach(data => {
        if  (!peeky.users.has(data.UserID) || data.FashionBadge == false)  {
            console.log("I have wiped a profile because it was inactive and unavailable.");
            peeky.userData.delete(`${data.UserID}`);
        };
    });
    
    };

if  (!WebsiteCooldowns.has("leaderboard"))  {

    WebsiteCooldowns.add("leaderboard");
    setTimeout(() => {WebsiteCooldowns.delete("leaderboard")}, 600000);
  
    //Update leadeboard
    var filtered         = peeky.userData.filter( p => p.Gredit && p.FashionBadge == true ).array();
    var sorted           = filtered.sort((a, b) => b.Gredit - a.Gredit);
    const top            = sorted.splice(0, 50);
    var currentplace     = 0;
    var CurrentID        = 0;
    var GotBadge         = false;
    const Leaderboard    = [];
    const LeaderboardTop = [];
    const FillersList    = [];
  
    const toRemove = filtered.filter(data => {
          return data.MedallistBadge == true;
    });

    toRemove.forEach(data => {
        peeky.userData.set(`${data.UserID}`, false, "MedallistBadge");
    });

    for (var data of top)  {

        currentplace ++;
      
    if  (currentplace == 1)  {CurrentID = "first";  GotBadge = true;} else if  (currentplace == 2)  {CurrentID = "second";  GotBadge = true;}  else if  (currentplace == 3){CurrentID = "third";  GotBadge = true;}  else  {CurrentID = "other";  GotBadge = false;};

    if  (peeky.users.has(data.UserID))  {
        
        var CurrentUser = peeky.users.get(data.UserID);
      
        if  (GotBadge == true && peeky.userData.get(`${data.UserID}`, "MedallistBadge") == false)  {
            peeky.userData.set(`${data.UserID}`, true, "MedallistBadge")
        };

        var TheBannerShown = DefaultBackground;
        TheBannerShown = function_GetBackground(data.UserID);

        var SavedProfile = "<div class='leaderboarditem' id='" + CurrentID + "' style='background-image: url(" + TheBannerShown + ")'>  <b class='leaderboardname'>  <img src='" + CurrentUser.displayAvatarURL + "' class='leaderboardicon'>  " + function_RemoveTags(CurrentUser.tag) + "</b>  <br><br>  <b class='leaderboardstats'>" + currentplace + ". place with " + peeky.userData.get(`${data.UserID}`, 'Gredit').toLocaleString('en') + " Gredit</b>  </div>";
        if  (currentplace == 1 || currentplace == 2 || currentplace == 3)  {
            LeaderboardTop.push(SavedProfile);
        } else  {
            Leaderboard.push(SavedProfile);
        };

    }
     else
    {
     Leaderboard.push("<div class='leaderboarditem' id='" + CurrentID + "'  style='background-image: url(" + DefaultBackground + ")'>  <b class='unknown'>UNAVAILABLE PROFILE  <br>  <font size='2'>  If this profiles stays unavailable for " + function_TimeLeft(peeky.userData.get(data.UserID, "lastSeen"), "days") + " more days, it will get deleted.  </font></b>  </div>");
    };
      
    };
      
    var Fillers = 50 - (Leaderboard.length + LeaderboardTop.length);
      
    while (Fillers > 0)  {
          FillersList.push("<div class='leaderboarditem' id='" + currentplace + "  style='background-image: url(" + DefaultBackground + ")'>  <b class='unknown'>EMPTY PROFILE  <br>  <font size='2'>  Your profile will show up here once you get the Fashion badge.  </font></b>  </div>");
          Fillers -= 1;
    };

    await fs.writeFile('public/leaderboard.txt', "<center> <div class='leaderboardtop'>" + LeaderboardTop.join("<br><br>") + "  <br><br>  <b class='toptext'> Get in the TOP 3 for the Medallist badge! </b>  </div> </center>" + Leaderboard.join("<br><br>") + "  <br><br>  " + FillersList.join("<br><br>"), (err) => {
        if (err) console.log(err);
    });

    console.log("The leaderboard has been updated.");

};

if  (!WebsiteCooldowns.has("backgrounds"))  {

    WebsiteCooldowns.add("backgrounds");
    setTimeout(() => {WebsiteCooldowns.delete("backgrounds")}, 600000);

    const BackgroundList            = [];
    const FeaturedList              = [];
    const CheapBackgrounds          = [];
    const RevenueBackgrounds        = [];
    var ExclusiveBackgrounds        = [];
    var AddToExclusiveBackgrounds   = [];
    var   Current                   = 0;            
    var   Fillers                   = 0;

    Banners.forEach(background_info => {

          Current ++;

          if  (background_info[4] !== undefined && peeky.userData.has(background_info[4]))  {
              var RevenueString = "<br>  Revenue Enabled";              
          } else {
            var RevenueString = "";
          };
      
          var FixedPrice    = background_info[1];
          var CommandString = Prefix + 'setbackground ' + Current;

          if  (FixedPrice !== Exclusive)  {
              FixedPrice    = FixedPrice.toLocaleString('en') + " Gredit";
              CommandString = Prefix + 'buybackground ' + Current;
          };
      
          var BackgroundString = '<div class="background">  <img src="' + background_info[0] + '"  width="500" height="300" class="background_image">  <div id="full">  <div class="background_centered">  <b class="background_text">  <font size="3"> ' + background_info[2] + '  </font>  <br>  <font size="2" color="lightgray">  ' + background_info[3] + '  </font>  <br><br>  <font size="2">  ' + FixedPrice + ' ' + RevenueString + '  </font>  <br>  <font size="1" color="lightgray"> ' + CommandString + '</font></b> </div>  </div>  </div>';
    
          BackgroundList.push(BackgroundString);

          if  (Current == peeky.userData.get(OwnerId, "Background"))  {
              FeaturedList.push(BackgroundString);

              Fillers = 0;
              while (Fillers < 99)  {
              	    Fillers ++;
                    FeaturedList.push('<div class="filler">  <img src="' + DarkField + '"  width="500" height="300" class="background_image">  </div>')
              };
                
          };

          if  (background_info[1] <= 200 && Current !== 1)  {
              CheapBackgrounds.push(BackgroundString);
          };

          if  (background_info[4] !== undefined)  {
              RevenueBackgrounds.push(BackgroundString);
          };

          if  (background_info[1] == Exclusive)  {
              AddToExclusiveBackgrounds.push(BackgroundString);
          };
    
    });

    AddToExclusiveBackgrounds.reverse();
    Fillers = 100 - AddToExclusiveBackgrounds.length;
    if  (AddToExclusiveBackgrounds.length < 100)  {
        while (Fillers > 0)  {
            Fillers --;
            ExclusiveBackgrounds.push('<div class="filler">  <img src="' + DarkField + '"  width="500" height="300" class="background_image">  </div>')
        };
    };
    AddToExclusiveBackgrounds = AddToExclusiveBackgrounds.join(" ");
    ExclusiveBackgrounds.push(AddToExclusiveBackgrounds);

    await fs.writeFile('public/backgrounds.txt', "<div id='sort_old'> " + BackgroundList.join(" ") + " </div>" + "<div id='sort_new'> " + BackgroundList.reverse().join(" ") + " </div>" + "<div id='sort_random'> " + function_ShuffleArray(BackgroundList).join(" ") + " </div>" + "<div id='sort_featured'> " + FeaturedList.join(" ") + " </div>" + "<div id='sort_cheap'> " + CheapBackgrounds.reverse().join(" ") + " </div>" + "<div id='sort_revenue'> " + RevenueBackgrounds.reverse().join(" ") + " </div>" + "<div id='sort_exclusive'> " + ExclusiveBackgrounds.reverse().join(" ") + " </div>", (err) => {
        if (err) console.log(err);
    });

    console.log("The backgrounds have been updated.");

};
  
if  (!WebsiteCooldowns.has("workshop"))  {

    WebsiteCooldowns.add("workshop");
    setTimeout(() => {WebsiteCooldowns.delete("workshop")}, 600000);

    var WorkshopList = [];

    peeky.channels.get(WorkshopChannel).fetchMessages({ limit: 50 }).then(async (messages) => {
      
    messages.forEach(m => {
          
        if  (!m.reactions.find(r => r.emoji.name == "🏁") && m.reactions.find(r => r.emoji.id == DefaultUpvote) && m.reactions.find(r => r.emoji.id == DefaultDownvote) && m.attachments.size > 0 && m.content.includes("Name: ") && m.content.includes("Credit: ") && m.content.includes("Price: "))  {
        
            var BackgroundString = '<div class="background">  <img src="' + m.attachments.array()[0].url + '" width="500" height="300" class="background_image">  <div class="background_centered">  <b class="background_text">  <font size="3">  ' + m.content.split("\n")[0].replace("Name: ", "") + '  </font>  <br>  <font size="2" color="lightgray">  ' + m.content.split("\n")[1].replace("Credit: ", "") + '  </font>  <br><br>  <font size="2">  ~ ' + m.content.split("\n")[2].replace("Price: ", "").toLocaleString('en') + ' Gredit </font>  <br>  <font size="1" color="lightgreen">  ' + (m.reactions.find(r => r.emoji.id == DefaultUpvote).count - 1) + '  Upvotes</font>  <font size="1">🞄</font>  <font size="1" color="pink">  ' + (m.reactions.find(r => r.emoji.id == DefaultDownvote).count - 1) + '  Downvotes</font>   </b>  </div>  </div>';
            WorkshopList.push(BackgroundString);

        };
    
    });

    await fs.writeFile('public/workshop.txt', "<div class='workshop'>" + WorkshopList.join(" ") + "</div>", (err) => {
        if (err) console.log(err);
    });  
      
    console.log("The workshop has been updated.");
    
    }).catch(error => ErrorBag.add(error));

};

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

if  (!WebsiteCooldowns.has("serverlist"))  {

    WebsiteCooldowns.add("serverlist");
    setTimeout(() => {WebsiteCooldowns.delete("serverlist")}, 600000);
  
    //Update leadeboard
    var serverlist = peeky.serverData.filter( p => p.server_upgraded == true ).array();
    var currentplace = 0;
    var CurrentID = 0;
    var GotBadge = false;
    const ServerList = [];

    for (var data of serverlist) {

    if  (peeky.guilds.has(data.GuildID))  {
        
        var CurrentUser = peeky.users.get(data.UserID);
  
        if  (peeky.serverData.get(`${data.GuildID}`, "server_invite") !== "no_invite")  {
            var ServerInfo = "<font size='2' color='lightgray'>" + peeky.guilds.get(data.GuildID).members.filter(m => !m.user.bot).size.toLocaleString('en') + " members</font>";
        }  else  {
            var ServerInfo = "<font size='2' color='pink'>No Invite</font>";    
        };

        ServerList.push("<a href='https://discordapp.com/invite/" + data.server_invite + "'><div class='serveritem' style='background-image: url(" + peeky.guilds.get(data.GuildID).iconURL + ")'>  <b class='servername' id='" + data.GuildID + "'>" + function_RemoveTags(peeky.guilds.get(data.GuildID).name) + "  <br>  " + ServerInfo + "  </b></div></a>");
    
    };
      
    };

    await fs.writeFile('public/server_list.txt', ServerList.join(" "), (err) => {
        if (err) console.log(err);
    });

    console.log("The server list has been updated.");

};
  
if  (!WebsiteCooldowns.has("supporters"))  {
      
    WebsiteCooldowns.add("supporters");
    setTimeout(() => {WebsiteCooldowns.delete("supporters")}, 600000);

    var SupporterList = [];
    peeky.guilds.get(SupportServer).members.forEach(function(guildMember, guildMemberId) {
    if  (guildMember.roles.has(SupporterRole) && peeky.userData.has(guildMemberId))  {

        var TheBannerShown = DefaultBackground;
        TheBannerShown = function_GetBackground(guildMemberId);

        SupporterList.push('<div class="supporter" style="background-image: url(' + TheBannerShown + ')">  <div class="supporterinfo">  <img src=' + '"' + guildMember.user.displayAvatarURL + '" width="30px" height="30px" class="supportericon"' + '>  <b>' + function_RemoveTags(guildMember.user.username) + '</b>  </div>  </div>');
    
    };
    });
  
    if  (SupporterList.length == 0)  {
        SupporterList.push('<center><font size="4">  You can become a supporter in the store!  </font></center>')
    };

    await fs.writeFile('public/supporters.txt', SupporterList.join("<br><br>"), (err) => {
        if (err) console.log(err);
    });
      
    console.log("The supporters list has been updated.");

};
  
if  (!WebsiteCooldowns.has("news"))  {
      
    WebsiteCooldowns.add("news");
    setTimeout(() => {WebsiteCooldowns.delete("news")}, 600000);

    var NewsList = [];

    peeky.channels.get(AnnouncementsChannel).fetchMessages({ limit: 4 }).then(async (messages) => {
          
    await messages.forEach(m => {
        var Header = m.content.split("\n")[0];
        var Body   = m.content.split("\n").join("<br>").replace(Header, "");
        var Image = [];
        var PrefixImage = "";
      
        if  (m.attachments.size > 0)  {
          
            PrefixImage = "<br><br>";
          
            m.attachments.forEach(a => {

            Image.push('<img class="newsimage" src="' + a.url + '">');

            });
        };

        NewsList.push('<div class="newsitem">  <b class="newsheader">  ' + Function_RemoveFormatting(Header, "other", false) + '  </b>  <br>  <b class="newsauthor">  Posted by <font color="#7289DA">' + m.author.tag + '</font> on <font color="#7289DA">' + function_DateFormat(m.createdAt) + '</font> with <font size="1" color="lightgreen">  ' + (m.reactions.find(r => r.emoji.id == DefaultUpvote).count - 1) + '  Upvotes</font>  <font size="1">🞄</font> and <font size="1" color="pink">  ' + (m.reactions.find(r => r.emoji.id == DefaultDownvote).count - 1) + '  Downvotes</font>.  </b>  <br>  <b class="newsbody">  ' + Function_RemoveFormatting(Body, "other", false) + '  </b>  ' + PrefixImage + Image.join(" ") + '  <br><br><br>  <a class="button" href="' + m.url + '">Open in Discord</a>  </div>');
    });

    await fs.writeFile('public/news.txt', NewsList.join("<br><br>"), (err) => {
        if (err) console.log(err);
    });    
    
    }).catch(error => ErrorBag.add(error));
      
    console.log("The news list has been updated.");

};

if  (!WebsiteCooldowns.has("staff"))  {
      
    WebsiteCooldowns.add("staff");
    setTimeout(() => {WebsiteCooldowns.delete("staff")}, 600000);

    var DevList    = [];
    var ModList    = [];

    peeky.guilds.get(SupportServer).members.forEach(function(guildMember, guildMemberId) {
    if  (guildMember.roles.has(StaffRole))  {
      
        var StaffTag = [];
        var StaffButton = [];
      
        var TwitterBody = '<img src=' + TwitterIcon + ' class="staffbutton"> <b class="contacttext">Twitter</b>';
        var RedditBody = '<img src=' + RedditIcon + ' class="staffbutton"> <b class="contacttext">Reddit</b>';
        var InstagramBody = '<img src=' + InstagramIcon + ' class="staffbutton"> <b class="contacttext">Instagram</b>';

        //Vojtěch
        if  (guildMemberId == OwnerId)  {
            StaffButton.push('<a href="https://twitter.com/vojtech_jilovec" target="_blank">  ' + TwitterBody + '  </a>');
            StaffButton.push('<a href="https://www.reddit.com/user/vojtasonic" target="_blank">  ' + RedditBody + '  </a>');
        } else

        //Nick
        if  (guildMemberId == "298551254978789378")  {
            StaffButton.push('<a href="https://twitter.com/MRArmy4" target="_blank">  ' + TwitterBody + '  </a>');
            StaffButton.push('<a href="https://www.reddit.com/user/MrArmy_" target="_blank">  ' + RedditBody + '  </a>');
        } else

        //Nixen
        if  (guildMemberId == "244160350889443338")  {
            StaffButton.push('<a href="https://twitter.com/NixenFin" target="_blank">  ' + TwitterBody + '  </a>');
            StaffButton.push('<a href="https://www.reddit.com/user/Nixenn" target="_blank">  ' + RedditBody + '  </a>');
        } else
      
        //Sabi
        if  (guildMemberId == "180090347421040640")  {
            StaffButton.push('<a href="https://www.reddit.com/user/Sabinyan" target="_blank">  ' + RedditBody + '  </a>');
        } else
      
        //Annika
        if  (guildMemberId == "351314991028371457")  {
            StaffButton.push('<a href="https://twitter.com/vraagtekenss" target="_blank">  ' + TwitterBody + '  </a>');
            StaffButton.push('<a href="https://www.instagram.com/vraagtekenss/" target="_blank">  ' + InstagramBody + '  </a>');
        };
      
        var CurrentContact = '<div class="staffwindow" id="' + guildMemberId + '_window" style="background-image: url(' + function_GetBackground(guildMemberId) + '); background-size: cover;  background-repeat: no-repeat;">  <a class="close" onclick="MoreInfo(`none`)">Close</a>  <img class="stafficon_w" src="' + guildMember.user.avatarURL +'">  <b class="staffname_w">' + guildMember.user.username + '<font color="#7289DA">#' + guildMember.user.discriminator + '</font> </b>  <b class="staffdesc_w">' + function_RemoveTags(peeky.userData.get(guildMemberId).Description) + '</b>  <div class="staffcontacts">' + StaffButton.join("<br>") + '</div>  </div>' + '<div class="container">  <img src=' + '"' + guildMember.user.displayAvatarURL + '" width="200px" height="200px" class="stafficon"' + '>   <b class="description">  <font size="3"> ' + function_RemoveTags(guildMember.user.username) + '  </font>  <br>  <a style="font-size: 10px;" id="' + guildMemberId + '" onclick="MoreInfo(this.id)">Staff Profile</a>  </b>  </div>';  
      
        if  (guildMember.roles.has("574255080069398543"))  {
            DevList.push(CurrentContact);
        };
    
        if  (guildMember.roles.has("574255771840282625"))  {
            ModList.push(CurrentContact);
        };

    };
    });

    await fs.writeFile('public/staff.txt', '<font size="5" class="item_header">Developers of PEEKY</font>  <br>  <div class="staffroom">  ' + DevList.join(" ") + '  </div>  <br>  <font size="5" class="item_header">Moderators of the Support Server</font>  <br>  <div class="staffroom">  ' + ModList.join(" ") + '  </div>', (err) => {
        if (err) console.log(err);
    });
      
    console.log("The staff list has been updated.");

};
  
//Update website stats
if  (!WebsiteCooldowns.has("stats"))  {
      
    WebsiteCooldowns.add("stats");
    setTimeout(() => {WebsiteCooldowns.delete("stats")}, 600000);
      
    WebsiteCooldowns.add("reviews");
    setTimeout(() => {WebsiteCooldowns.delete("reviews")}, 600000);
    
    node_fetch('https://ls.terminal.ink/api/v2/bots/482945063282802698').then(response => response.json()).then(async (data) => {
      
    var FilteredReviews = data.data.reviews.filter(r => r.text.length >= 200);
      
    var Length = FilteredReviews.length;
    var RandomReview = Math.round(Math.random() * Length);
      
    if  (RandomReview >= Length)  {  RandomReview = 0  };
      
    var DaysOld        = Math.ceil((new Date() - peeky.user.createdAt) / 8.64e7) - 1;
    var ReviewDate     = new Date(FilteredReviews[RandomReview].date);
    var ReviewFullDate = function_DateFormat(ReviewDate);
      
    await fs.writeFile('public/reviews.txt',  "<font color='#7289DA' size='1'>Random Review with " + FilteredReviews[RandomReview].rating + " Star rating from " + ReviewFullDate + ".</font>" + "<br>" + " <font color='white' size='3'>" + FilteredReviews[RandomReview].text + "</font>  <br><br>  <center><font color='#7289DA' size='1'>Your review must be atleast 200 characters long to show up here.</font></center>", (err) => {
        if (err) console.log(err); 
    });

    await fs.writeFile('public/stats.txt', "<a class='botstats'><font color='#7289DA'>" + peeky.guilds.size + " / " + MaxServers + "</font> Servers</a> <br> <a class='botstats'><font color='#7289DA'>" + data.data.reviews.length + "</font> Reviews</a> <br> <a class='botstats'><font color='#7289DA'>" + peeky.userData.count + "</font> Profiles</a> <br> <a class='botstats'><font color='#7289DA'>" + DaysOld + "</font> Days Old</a>", (err) => {
        if (err) console.log(err); 
    });
      
    });
      
    console.log("The stats and reviews have been updated.");
      
};

});

//MISC
peeky.on("guildCreate", async (guild) =>  {

const keySF = `${guild.id}`;
  
if  (peeky.guilds.size > MaxServers)  {
  
    await guild.owner.user.send("I have left your server because there are no open server slots.").catch(error => ErrorBag.add(error));
    guild.leave().catch(error => ErrorBag.add(error));

} else {
      
    peeky.serverData.ensure(keySF , {
        GuildID: guild.id,
        lastSeen: Date.now(),
        server_invite: "no_invite",
        prefix: Prefix,
        muted_role: "Muted",
      
        Title: "None",
        Thumbnail: DefaultBackground,
        Author: "No one",
        Length: 60,
        Started: new Date(),
        Link: "None",

        welcome_messages_bonus: false,
        welcome_messages_bonus_setting: "user_feed",
        join_role_bonus: false,
        join_role_bonus_setting: "Member",
        streamer_role_bonus: false,
        streamer_role_bonus_setting: "Streamer",
        automatic_reactions_bonus_setting: "peeky",
        server_message_bonus: false,
        image_only_bonus_setting: 0,
        server_message_bonus_setting: "Welcome to **" + GuildNameTag + "**!",
        notification_bonus: false,
        message_log_bonus_setting: "message_log",
        member_counter_bonus: false,
        member_counter_bonus_setting: "Members",
        member_counter_bonus_id: null,
        clear_nicknames_bonus: false,
        clear_nicknames_bonus_setting: "Cleared Nickname",
        suspicion_alert_bonus: false,
        suspicion_alert_bonus_setting: 10,
        flood_protection_bonus: false,
        donor_wall_bonus_setting: "Moderator",
        donor_wall_bonus: false,
        donor_wall_bonus_id: null,
        donor_wall_bonus_channel: "moderators",
        donor_wall_bonus_array: [],
        banned_words_bonus_setting: [],
        spoiler_lock_bonus_setting: 0,
        server_upgraded: false,
        event_countdown_bonus: false,
        event_countdown_bonus_setting: 0,
        event_countdown_bonus_id: 0,
        vote_kick_bonus_bonus: false,
        vote_kick_bonus_setting: 10,
        server_trial_bonus_bonus: false,
        server_trial_bonus_setting: 60,
        stream_announcements_bonus: false,
        stream_announcements_bonus_setting: "twitch",
        role_saver_bonus: false,
        role_saver_array: [],
        game_roles_bonus: false,
        game_roles_bonus_setting: []
    });
  
};

});

peeky.on("channelCreate", async (channel) => {

const keyCF = `${channel.id}`;

peeky.channelData.ensure(keyCF , {
    ChannelID: channel.id,

    automatic_reactions_bonus: false,
    image_only_bonus: false,
    message_log_bonus: false,
    banned_words_bonus: false,
    spoiler_only_bonus: false,
    flood_protection_bonus_lastdate: null,
    flood_protection_bonus_lastuser: null,
    flood_protection_bonus_lastmsg: null
});

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

//Log the ban
if  (peeky.userData.has(key))  {
    peeky.userData.math(key, "+", 1, "Bans");
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
  
//Server Message
if  (peeky.serverData.get(keySF, "server_message_bonus") == true && !member.user.bot)  {
      
    member.send((peeky.serverData.get(keySF, "server_message_bonus_setting")).replace(GuildNameTag, Function_RemoveFormatting(member.guild.name, "other", true)).replace(GuildSizeTag, member.guild.members.filter(m => !m.user.bot).size).replace(GuildOwnerTag, member.guild.owner.user.tag).replace(GuildVerificationTag, VerificationLevels[member.guild.verificationLevel]).replace(GuildAcronymTag, member.guild.nameAcronym))
    .catch(error => ErrorBag.add(error));

};

//Suspicion Alert
if  (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true && !member.user.bot)  {
      
    var owner      = member.guild.owner.user.id;
    var Suspicions = 0;
    var String     = [];
    const BanLimit = peeky.serverData.get(keySF, "suspicion_alert_bonus_setting");
  
    //Account created less than 30 days ago
    if  (new Date() - new Date(member.user.createdAt) <= 2592000000 )  {
        Suspicions ++;
        String.push("Account created less than 30 days ago.");
    };

    //Account has alot of logged bans
    if  (peeky.userData.has(key) && peeky.userData.get(key, "Bans") >= BanLimit)  {
        Suspicions ++;
        String.push("Banned more than " + peeky.userData.get(key, "Bans") + " times in other servers.");
    };
  
    //Account is marked
    MarkedUsers.forEach(i => {
    if  (i == member.user.id)  {
        Suspicions ++;
        String.push("Manually marked as potentially dangerous to your server.");
    };
    });

    if  (Suspicions > 0)  {
        peeky.users.get(owner).send("**Someone suspicious has joined " + Function_RemoveFormatting(member.guild.name, "other", true) + "!**\nBe aware of this user but don't ban them just because you've got this message!\n\n**User:** " + Function_RemoveFormatting(member.user.tag, "other", true) + " (<@" + member.user.id + ">)\n**Suspicions:** " + (String.join(" / ") + "\n­")).catch(error => ErrorBag.add(error));   
        console.log("The Suspicion Alert function has been triggered in " + member.guild.name + ".");
    };
  
};
    
//Member Counter (JOIN)
if  (peeky.serverData.get(keySF, "member_counter_bonus") == true)  {
  
if  (!MemberCounterCooldown.has(member.guild.id))  {

    MemberCounterCooldown.add(member.guild.id);
    setTimeout(() => {MemberCounterCooldown.delete(member.guild.id)}, 5000);

    //Permission Checking
    if  (member.guild.me.hasPermission("MANAGE_CHANNELS"))  {

        var id = peeky.serverData.get(keySF, "member_counter_bonus_id");
        var Prefix = peeky.serverData.get(keySF, "member_counter_bonus_setting");

        var channel = member.guild.channels.find(g => g.id == id);

        if (channel && channel.permissionsFor(peeky.user).has('CONNECT')) {
            channel.setName(Prefix + ": " + member.guild.members.filter(m => !m.user.bot).size).catch(error => ErrorBag.add(error));

            console.log("The Member Counter function has been triggered in " + member.guild.name + ".");
        };

    };
};
};
    
//Join Role
if  (peeky.serverData.get(keySF, "join_role_bonus") == true)  {
  
    //Permission Checking
    if  (member.guild.me.hasPermission("MANAGE_ROLES"))  {
      
        var name = peeky.serverData.get(keySF, "join_role_bonus_setting");
        var RoleExist = member.guild.roles.find(role => role.name == name);

        if  (RoleExist) {
            member.addRole(RoleExist, "Triggered by the Join Role function.").catch(error => ErrorBag.add(error));

            console.log("The Join Role function has been triggered in " + member.guild.name + ".");
        };

    };

};
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
    //Permission Checking
  if  (member.guild.me.hasPermission("MANAGE_ROLES"))  {
    
      if  (peeky.serverData.has(keySF, "role_saver_array"))  {
      
          var SavedRoles = peeky.serverData.get(keySF, "role_saver_array");
        
          SavedRoles.forEach(current => {
            
              if  (current[0] == member.user.id)  {
                
                  const ValidRoles = [];
                
                  current[1].forEach(role => {
                      
                    if  (member.guild.roles.find(r => r.id == role))  {
                        ValidRoles.push(role);
                    };                  
                    
                  });
                
                  member.setRoles(ValidRoles).catch(error => ErrorBag.add(error));
    
                  console.log("The Role Saver function has been triggered in " + member.guild.name + ".");
                
              };
            
          });  
      };

  };

};
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
    //Permission Checking
  if  (member.guild.me.hasPermission("MANAGE_ROLES"))  {
    
      if  (peeky.serverData.has(keySF, "role_saver_array"))  {
      
          var SavedRoles = peeky.serverData.get(keySF, "role_saver_array");
        
          SavedRoles.forEach(current => {
            
              if  (current[0] == member.user.id)  {
                
                  const ValidRoles = [];
                
                  current[1].forEach(role => {
                      
                    if  (member.guild.roles.find(r => r.id == role))  {
                        ValidRoles.push(role);
                    };                  
                    
                  });
                
                  member.setRoles(ValidRoles).catch(error => ErrorBag.add(error));
    
                  console.log("The Role Saver function has been triggered in " + member.guild.name + ".");
                
              };
            
          });  
      };

  };

};
    
//Nickname Saver
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {
  
    //Permission Checking
  if  (member.guild.me.hasPermission("MANAGE_NICKNAMES"))  {
    
      if  (peeky.serverData.has(keySF, "nick_saver_array"))  {
      
          var SavedNicks = peeky.serverData.get(keySF, "nick_saver_array");
        
          SavedNicks.forEach(current => {
            
              if  (current[0] == member.user.id && current[1] !== null)  {
                
                  member.setNickname(current[1]);
    
                  console.log("The Nickname Saver function has been triggered in " + member.guild.name + ".");
                
              };
            
          });  
      };

  };

};
    
//Server Trial
if  (peeky.serverData.get(keySF, "server_trial_bonus") == true)  {

      //Permission Checking
    if  (member.guild.me.hasPermission("MANAGE_ROLES")) {

        var name = "Trial";
        var RoleExist = member.guild.roles.find(role => role.name == name);

        if  (RoleExist) {
            member.addRole(RoleExist, "Triggered by the Server Trial function.").catch(error => ErrorBag.add(error));
        };

    };

};

//Welcome Messages
if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)  {
  
    //Permission Checking
    if(member.guild.me.hasPermission("SEND_MESSAGES")) {
    
    const guild     = member.guild;
    var ProfileName = member.user.username;
    const name      = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var Detected    = false;

    var channel = guild.channels.find(c=> c.name == name);
    
    if (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES') && channel.permissionsFor(peeky.user).has('ATTACH_FILES')) {
      
    if  (blacklistedWebsites.some(word => Function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
        Detected = true;
    };

    if  (Detected == true)  {
      
        await member.guild.ban(member.id, {  reason: "Triggered by the Welcome Messages function.", days: 0  }).catch(error => {
              ErrorBag.add(error);
              var Failed = true;
        });

        if  (Failed == true)  {
            member.send("**You have been automatically banned for having a possible website advertisment in your username.**  \n  Contact the server owner " + member.guild.owner.user.tag + " to get your ban revoked.").catch(error => ErrorBag.add(error));
        };

    };

    await channel.send("", await function_WelcomeMessagesEmbed(member, "join", Detected)).catch(error => ErrorBag.add(error));
    
    console.log("The Welcome Messages function has been triggered in " + member.guild.name + ".");
      
    };
    };

};

};

});

//MEMBER LEFT EVENTS
peeky.on("guildMemberRemove", async (member) => {
  
const key = `${member.user.id}`;
const keySF = `${member.guild.id}`;

if (member.user.id !== PeekyId && peeky.serverData.has(keySF))  {
    
//Member Counter (LEFT)
if  (peeky.serverData.get(keySF, "member_counter_bonus") == true)  {

if  (!MemberCounterCooldown.has(member.guild.id))  {

    MemberCounterCooldown.add(member.guild.id);
    setTimeout(() => {MemberCounterCooldown.delete(member.guild.id)}, 5000);

    //Permission Checking
    if  (member.guild.me.hasPermission("MANAGE_CHANNELS")) {
      
        var id = peeky.serverData.get(keySF, "member_counter_bonus_id");
        var Prefix = peeky.serverData.get(keySF, "member_counter_bonus_setting");

        var channel = member.guild.channels.find(g => g.id == id);

        if (channel && channel.permissionsFor(peeky.user).has('CONNECT')) {
            channel.setName(Prefix + ": " + member.guild.members.filter(m => !m.user.bot).size).catch(error => ErrorBag.add(error));

            console.log("The Member Counter function has been triggered in " + member.guild.name + ".");
        };
    
    };

};
};
    
//Welcome Messages
if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)  {
  
    //Permission Checking
    if(member.guild.me.hasPermission("SEND_MESSAGES"))  {
    
    const guild     = member.guild;
    var ProfileName = member.user.username;
    const name      = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var Detected    = false;

    var channel = guild.channels.find(c=> c.name == name);
    
    if (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES') && channel.permissionsFor(peeky.user).has('ATTACH_FILES')) {
      
    if  (blacklistedWebsites.some(word => Function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
        Detected = true;
    };

    await channel.send("", await function_WelcomeMessagesEmbed(member, "leave", Detected)).catch(error => ErrorBag.add(error));
    
    console.log("The Welcome Messages function has been triggered in " + member.guild.name + ".");
      
    };
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
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
    if  (peeky.serverData.has(keySF, "role_saver_array"))  {

        var SavedRoles  = peeky.serverData.get(keySF, "role_saver_array");
        var MemberIndex = SavedRoles.findIndex(i => i[0] == member.user.id);
      
        if  (MemberIndex >= 0)  {
            SavedRoles[MemberIndex][1] = member.roles.filter(r => r.name !== "@everyone").map(r => r.id);
        } else {
          SavedRoles.push([member.user.id, member.roles.filter(r => r.name !== "@everyone").map(r => r.id)]);
        };
      
    };

};
    
//Nickname Saver
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {
  
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
  
//Supporter Date
if  (keySF == SupportServer)  {

var ExpAmount    = 100;
var Failed       = false;
var InfoMessages = [];

//Supporter
if  (peeky.userData.has(key))  {
    
    var HadRole = oldMember.roles.find(r => r.id == SupporterRole);
    var HasRole = newMember.roles.find(r => r.id == SupporterRole);
  
    if  (HadRole == null && HasRole)  {

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };
      
        const embed = {"description": SuccessIcon + " You have been awarded the **Supporter status** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **Supporter**.").catch(error => ErrorBag.add(error));
    };
  
};

//Server Upgrade
if  (peeky.userData.has(key))  {
    
    var HadRole = oldMember.roles.find(r => r.id == ServerUpgradeRole);
    var HasRole = newMember.roles.find(r => r.id == ServerUpgradeRole);
  
    if  (HadRole == null && HasRole)  {

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };

        const embed = {"description": SuccessIcon + " You have been awarded a **Server Upgrade** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **Server Upgrade**.").catch(error => ErrorBag.add(error));
    };
  
};
  
//1,000 Gredit
if  (newMember.roles.has(RedeemRole1))  {
    newMember.removeRole(RedeemRole1).catch(error => {ErrorBag.add(error); Failed = true});
      
    if  (Failed !== true)  {
        peeky.userData.math(key, "+", 1000, "Gredit");

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };
      
        const embed = {"description": SuccessIcon + " You have been awarded **1,000 " + GreditIcon + "** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **1,000 Gredit**.").catch(error => ErrorBag.add(error));
    };

}; 
  
//2,000 Gredit
if  (newMember.roles.has(RedeemRole2))  {
    newMember.removeRole(RedeemRole2).catch(error => {ErrorBag.add(error); Failed = true});
      
    if  (Failed !== true)  {
        peeky.userData.math(key, "+", 2000, "Gredit");

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };
      
        const embed = {"description": SuccessIcon + " You have been awarded **2,000 " + GreditIcon + "** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **2,000 Gredit**.").catch(error => ErrorBag.add(error));

    };

}; 

//5,000 Gredit
if  (newMember.roles.has(RedeemRole3))  {
    newMember.removeRole(RedeemRole3).catch(error => {ErrorBag.add(error); Failed = true});
      
    if  (Failed !== true)  {
        peeky.userData.math(key, "+", 5000, "Gredit");

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };
      
        const embed = {"description": SuccessIcon + " You have been awarded **5,000 " + GreditIcon + "** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **5,000 Gredit**.").catch(error => ErrorBag.add(error));
    };

}; 
  
//10,000 Gredit
if  (newMember.roles.has(RedeemRole4))  {
    newMember.removeRole(RedeemRole4).catch(error => {ErrorBag.add(error); Failed = true});
      
    if  (Failed !== true)  {
        peeky.userData.math(key, "+", 10000, "Gredit");

        peeky.userData.math(key, "+", ExpAmount, "Exp");
      
        if  (peeky.userData.get(key, "ContributorBadge") == false)  {
            peeky.userData.set(key, true, "ContributorBadge");
            InfoMessages.push(InfoMessage1[0]);
        };
      
        const embed = {"description": SuccessIcon + " You have been awarded **10,000 " + GreditIcon + "** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        newMember.user.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.channels.get(PurchaseLog).send(" **" + Function_RemoveFormatting(newMember.user.username, "other", true) + "** has purchased **10,000 Gredit**.").catch(error => ErrorBag.add(error));
    };

}; 

};
  
};
});

//PRESENCE UPDATE EVENTS
peeky.on("presenceUpdate", async (oldMember, newMember) => {
  
const key = `${newMember.user.id}`;
const keySF = `${newMember.guild.id}`;
  
//FUNCTIONS
if  (peeky.serverData.has(keySF))  {

const member = newMember;

//Streamer Role
if  (peeky.serverData.get(keySF, "streamer_role_bonus") == true)  {

    if  (member.guild.me.hasPermission('MANAGE_ROLES'))  {
  
    if  (!member.user.bot)  {

        var   HasRole = member.roles.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));
        var   GuildRole = member.guild.roles.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));

        if  (member.presence.game !== null && member.presence.game.streaming == true)  {

        if  (!HasRole && !CurrentlyStreaming.has(member.user.id + member.guild.id + "SR"))  {
             member.addRole(GuildRole).catch(error => ErrorBag.add(error));
                  
             CurrentlyStreaming.add(member.user.id + member.guild.id + "SR");
             setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SR")}, 300000);

             console.log("The Streamer Role function has been triggered in " + member.guild.name + ".");
        };

        }  else  { 

           if  (HasRole)  {
               member.removeRole(GuildRole).catch(error => ErrorBag.add(error));
           };

        };
  
    };

    };
      
};

//Stream Announcements
if  (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)  {
  
    if  (!member.user.bot && !CurrentlyStreaming.has(member.user.id + member.guild.id + "SA2"))  {

        var   Channel = member.guild.channels.find(c => c.name == peeky.serverData.get(keySF, "stream_announcements_bonus_setting"));    

        if  (Channel)  {
      
            if  (member.presence.game !== null && member.presence.game.streaming == true)  {

                if  (oldMember.presence.game !== null && oldMember.presence.game.streaming == true)  {
                    var AlreadyStreaming = true;
                };

                if  (AlreadyStreaming !== true)  {
                  
                    CurrentlyStreaming.add(member.user.id + member.guild.id + "SA2");
                    setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SA2")}, 300000);
                  
                    const embed = {  "description": "­ \n **Name:** " + member.presence.game.name + " \n **Link:** " + member.presence.game.url + " \n\n ­",  "color": 6570404,  "image": {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fheader.jpg"  },  "author": {  "name": Function_RemoveFormatting(member.user.username, "other", true) + " has started live streaming on Twitch!",  "icon_url": member.user.displayAvatarURL  }  };
                    Channel.send({ embed }).catch(error => ErrorBag.add(error));

                    console.log("The Stream Announcements function has been triggered in " + member.guild.name + ".");
                };

            };
  
        };
  
    };
      
};

//Game Roles
if  (peeky.serverData.get(keySF, "game_roles_bonus") == true)  {

    if  (member.guild.me.hasPermission('MANAGE_ROLES'))  {
  
    if  (!member.user.bot)  {
      
        peeky.serverData.get(keySF, "game_roles_bonus_setting").forEach(GameName => {

        var GameName   = GameName.toLowerCase();
        var HasRole    = member.roles.find(r => r.name.toLowerCase() == GameName);
        var RoleExists = member.guild.roles.find(r => r.name.toLowerCase() == GameName);

        if  (RoleExists)  {
          
        if  (member.presence.game !== null && member.presence.game.name.toLowerCase() == GameName)  {

            if  (!HasRole && !RoleCooldown.has(member.user.id + member.guild.id))  {
                member.addRole(RoleExists).catch(error => ErrorBag.add(error));
                console.log("The Game Roles function has been triggered in " + member.guild.name + ".");
            };   

            RoleCooldown.add(member.user.id + member.guild.id);
            setTimeout(() => {RoleCooldown.delete(member.user.id + member.guild.id)}, RoleCooldownMS);         

        } else { 

          if  (HasRole)  {
                member.removeRole(RoleExists).catch(error => ErrorBag.add(error));
          };

        };
      
        } else {
          
          if  (!RoleCooldown.has(member.guild.id))  {

              member.guild.createRole({
              name: GameName
              }).catch(error => ErrorBag.add(error));

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

//REACTION EVENTS
peeky.on('messageReactionAdd', async (reaction, user) => {

const key = `${user.id}`;
const keyCF = `${reaction.message.channel.id}`;
const keySF = `${reaction.message.guild.id}`;

//Poller Badge
if  (!user.bot && reaction.message.channel.id == AnnouncementsChannel && reaction.message.content.toLowerCase().includes("**voting time**"))  {
    if  (peeky.userData.has(key) && peeky.userData.get(key, "PollerBadge") == false)  {
        peeky.userData.set(key, true, "PollerBadge");
    };
};
  
//Workshop Response
if  (reaction.message.channel.id == WorkshopChannel && reaction.emoji.name == "🏁" & reaction.count == 1)  {

    const embed = {"description": SuccessIcon + " Your submission in the Workshop has been accepted!",  "color": EmbedColor}; 
    reaction.message.author.send({ embed }).catch(error => ErrorBag.add(error)).catch(error => ErrorBag.add(error));

};

if  (peeky.userData.has(key) && peeky.channelData.has(keyCF) && peeky.serverData.has(keySF) && reaction.message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {
  
//COMMANDS
  
//Overview Pages
if  (peeky.userData.has(key, "OverviewID") && reaction.message.id == peeky.userData.get(key, "OverviewID"))  {
  
    if  (!OverviewCooldown.has(user.id))  {
         
        OverviewCooldown.add(user.id);
        setTimeout(() => {OverviewCooldown.delete(user.id)}, 2500);

        var EnabledAmount = 0;
        var ServerAmount  = 0;
        var ChannelAmount = 0;
        const Functions   = [];

        var ServerMessage = peeky.serverData.get(keySF, "server_message_bonus_setting");

        var BWArray = peeky.serverData.get(keySF, "banned_words_bonus_setting");
        if  (BWArray.length < 1)  {  BWArray = "none";  }  else  {  BWArray = BWArray.join("` `");  };

        var GRArray = peeky.serverData.get(keySF, "game_roles_bonus_setting");
        if  (GRArray.length < 1)  {  GRArray = "none";  }  else  {  GRArray = GRArray.join("` `");  };

        var GivenMinutes = peeky.serverData.get(keySF, "spoiler_lock_bonus_setting");
        if  (GivenMinutes == 0)  {GivenMinutes = "never"}  else  {GivenMinutes = GivenMinutes + " minutes"}
      
        if (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)   { var AR = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var AR = DisabledIcon};
        if (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)       { var WM = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var WM = DisabledIcon};
        if (peeky.serverData.get(keySF, "member_counter_bonus") == true)         { var MC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var MC = DisabledIcon};
        if (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)        { var CN = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CN = DisabledIcon};
        if (peeky.serverData.get(keySF, "donor_wall_bonus") == true)             { var CW = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CW = DisabledIcon};
        if (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true)        { var SA = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA = DisabledIcon};
        if (peeky.serverData.get(keySF, "flood_protection_bonus") == true)       { var FP = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var FP = DisabledIcon};
        if (peeky.serverData.get(keySF, "event_countdown_bonus") == true)        { var EC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var EC = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_message_bonus") == true)         { var SM = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SM = DisabledIcon};
        if (peeky.serverData.get(keySF, "vote_kick_bonus") == true)              { var VT = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VT = DisabledIcon};
        if (peeky.serverData.get(keySF, "join_role_bonus") == true)              { var JR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var JR = DisabledIcon};
        if (peeky.serverData.get(keySF, "game_roles_bonus") == true)             { var GR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var GR = DisabledIcon};
        if (peeky.serverData.get(keySF, "role_saver_bonus") == true)             { var RS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RS = DisabledIcon};
        if (peeky.serverData.get(keySF, "nick_saver_bonus") == true)             { var NS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var NS = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_trial_bonus") == true)           { var ST = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var ST = DisabledIcon};
        if (peeky.serverData.get(keySF, "streamer_role_bonus") == true)          { var SR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SR = DisabledIcon};
        if (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)   { var SA2 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA2 = DisabledIcon};
        if (peeky.channelData.get(keyCF, "message_log_bonus") == true)           { var ML = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var ML = DisabledIcon};
        if (peeky.channelData.get(keyCF, "image_only_bonus") == true)            { var IO = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var IO = DisabledIcon};
        if (peeky.channelData.get(keyCF, "banned_words_bonus") == true)          { var BW = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var BW = DisabledIcon};
        if (peeky.channelData.get(keyCF, "spoiler_only_bonus") == true)          { var SL = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var SL = DisabledIcon};
        if (peeky.serverData.get(keySF, "notifications") == true)                { var N_ = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var N_ = DisabledIcon};

        if  (reaction.emoji.name == "1⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Prefix** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "prefix") + "`" + "\n\n" +
                                "**Mute Role** " + SettingsIcon + "\n" + "`@­" + peeky.serverData.get(keySF, "muted_role") + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Settings**", newEmbed).catch(error => ErrorBag.add(error));
            reaction.remove(user).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "2⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Welcome Messages** " + WM + "\n" + "`#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting") + "`" + "\n\n" +
                                "**Member Counter** " + MC + "\n" + "`" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "`" + "\n\n" +
                                "**Clear Nicknames** " + CN + "\n" + "`" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "`" + "\n\n" +
                                "**Classification Wall** " + CW + "\n" + "`@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "` `#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "`." + "\n\n" +
                                "**Suspicion Alert** " + SA + "\n" + "`" + peeky.serverData.get(keySF, "suspicion_alert_bonus_setting") + " bans`" + "\n\n" +
                                "**Server Trial** " + ST + "\n" + "`" + peeky.serverData.get(keySF, "server_trial_bonus_setting") + " minutes`" + "\n\n" +
                                "**Stream Announcements** " + SA2 + "\n" + "`#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "`" + "\n\n" +
                                "**Flood Protection** " + FP + "\n" + "No Setting." + "\n\n" +
                                "**Role Saver** " + RS + "\n" + "No Setting." + "\n\n" +
                                "**Nickname Saver** " + NS + "\n" + "No Setting.",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server functions** `Page 1/2`", newEmbed).catch(error => ErrorBag.add(error));
            reaction.remove(user).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "3⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Event Countdown** " + EC + "\n" + "`" + peeky.serverData.get(keySF, "event_countdown_bonus_setting") + "`" + "\n\n" +
                                "**Server Message** " + SM + "\n" + "`" + Function_RemoveFormatting(ServerMessage, "sm", true) + "`" + "\n\n" +
                                "**Vote Kick** " + VT + "\n" + "`" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes`" + "\n\n" +
                                "**Game Roles** " + GR + "\n" + "`" + GRArray + "`" + "\n\n" +
                                "**Join Role** " + JR + "\n" + "`@" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "`" + "\n\n" +
                                "**Streamer Role** " + SR + "\n" + "`@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "`" + "\n\n" +
                                "**Notifications** " + N_ + "\n" + "No setting",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server functions** `Page 2/2`", newEmbed).catch(error => ErrorBag.add(error));
            reaction.remove(user).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "4⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Automatic Reactions** " + AR + "\n" + "`:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:` `:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:`" + "\n\n" +
                                "**Message Log** " + ML + "\n" + "`#" + peeky.serverData.get(keySF, "message_log_bonus_setting") + "`" + "\n\n" +
                                "**Images Only** " + IO + "\n" + "No setting." + "\n\n" +
                                "**Spoiler Lock** " + SL + "\n" + "`" + GivenMinutes + "`" + "\n\n" +
                                "**Banned Words** " + BW + "\n" + "`" + BWArray + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Channel functions**", newEmbed).catch(error => ErrorBag.add(error));
            reaction.remove(user).catch(error => ErrorBag.add(error));

        };
      
  };
  
};
  
  
//FUNCTIONS
  
//Vote Kick
if  (peeky.serverData.get(keySF, "vote_kick_bonus") == true) {

    if  (reaction.emoji.name == "🚪")  {
      
        var MemberExists = reaction.message.guild.members.find(m => m.id == reaction.message.author.id);
      
        if  (MemberExists.user.id !== PeekyId)  {
      
        if  (MemberExists && !reaction.message.member.permissions.has("KICK_MEMBERS"))  {
          
            if  (reaction.count >= peeky.serverData.get(keySF, "vote_kick_bonus_setting") && MemberExists.user.id !== PeekyId && reaction.message.guild.me.hasPermission("KICK_MEMBERS"))  {

                await reaction.message.member.send("You have been vote kicked from **" + Function_RemoveFormatting(reaction.message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));

                reaction.message.guild.members.get(reaction.message.member.user.id).kick({  reason: "Triggered by the Vote Kick function."  }).catch(error => ErrorBag.add(error));   

                reaction.message.clearReactions().catch(error => ErrorBag.add(error));
              
                if  (peeky.serverData.get(keySF, "notifications") == true)  {

                    const embed = {"description": InfoIcon + " **" + Function_RemoveFormatting(reaction.message.author.username, "other", true) + "** has been vote kicked with **" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes**.",  "color": EmbedColor};
                    reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                  
                };

                console.log("The Vote Kick function has been triggered in " + reaction.message.guild.name + ".");

            } else if (reaction.count == 1)  {

              if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(reaction.message.guild.id + "VK"))  {
         
                  ResponseCooldowns.add(reaction.message.guild.id + "VK");
                  setTimeout(() => {ResponseCooldowns.delete(reaction.message.guild.id + "VK")}, ResponseCooldownMS);
              
                  const embed = {"description": InfoIcon + " **" + Function_RemoveFormatting(user.username, "other", true) + "** has started a vote kick against **" + Function_RemoveFormatting(reaction.message.author.username, "other", true) + "**.",  "color": EmbedColor};
                  reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                
              };
              
            };
 
        } else {
          const embed = {"description": ErrorIcon + " You cannot start a vote kick against that user, **" + Function_RemoveFormatting(user.username, "other", true) + "**.",  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
          reaction.message.clearReactions().catch(error => ErrorBag.add(error));
        };
 
        } else {
          const embed = {"description": ErrorIcon + " Why do you hate me so much, **" + Function_RemoveFormatting(user.username, "other", true) + "**?",  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
          reaction.message.clearReactions().catch(error => ErrorBag.add(error));
        };

    };

};
  
//Message Log
if  (peeky.channelData.get(keyCF, "message_log_bonus") == true) {

    if  (!user.bot && reaction.emoji.name == "📌" && reaction.count == 1)  {
      
    if  (!LoggedMessages.has(reaction.message.id))  {
      
    if  (!MessageLogCooldown.has(reaction.message.author.id))  {
      
    if  (!reaction.message.content.includes("@everyone") && !reaction.message.content.includes("@here") && reaction.message.mentions.users.size == 0)  {
        
        LoggedMessages.add(reaction.message.id);
         
        MessageLogCooldown.add(user.id);
        setTimeout(() => {MessageLogCooldown.delete(user.id)}, 30000);

        var   name                  = peeky.serverData.get(keySF, "message_log_bonus_setting");
        var   Channel               = reaction.message.guild.channels.find(channel => channel.name == name);
        const OriginalMessage       = reaction.message;
        const OriginalMessageEdited = OriginalMessage.content//.replace((/(<@((!)?)\d+)(>)/), "Someone");
        var   image                 = "none";   
      
    if  (Channel && reaction.message.guild.me.hasPermission("MANAGE_WEBHOOKS"))  {

    if  (reaction.message.attachments.size > 0)  {  image = reaction.message.attachments.array()[0].url;  }  else  {  image = "https://cdn.discordapp.com/attachments/471346376089927700/508681498271154198/unknown.png";  }; 
            
        Channel.fetchWebhooks().then(webhook =>  {
            
              var FoundHook = webhook.find(w => w.name == "PEEKY");

              if  (!FoundHook)  {

                  Channel.createWebhook("PEEKY", peeky.user.displayAvatarURL).catch(error => ErrorBag.add(error))
                  .then(Webhook => {

                  Webhook.send(OriginalMessageEdited + "\n­", {

                  "username": OriginalMessage.author.tag,
                  "avatarURL": OriginalMessage.author.displayAvatarURL,
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
                 "avatarURL": OriginalMessage.author.displayAvatarURL,
                 "files": [image],

                 "embeds":  [{
                     "description": "[🔍](" + reaction.message.url + ")",
                     "color": EmbedColor
                 }]

                 }).catch(error => ErrorBag.add(error));

              };
            
            });
  
            if  (peeky.serverData.get(keySF, "notifications") == true)  {
                  
                const embed = {"description": InfoIcon + " **" + Function_RemoveFormatting(user.username, "other", true) + "** has logged **" + Function_RemoveFormatting(reaction.message.author.username, "other", true) + "**'s message.",  "color": EmbedColor}; 
                reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                  
            };

            console.log("The Message Log function has been triggered in " + reaction.message.guild.name + ".");

    };
              
        reaction.remove(user).catch(error => ErrorBag.add(error));
            
        }
         else
        {
          reaction.remove(user).catch(error => ErrorBag.add(error));
            
          const embed = {"description": ErrorIcon + " I cannot log messages with mentions, **" + Function_RemoveFormatting(user.username, "other", true) + "**.",  "color": EmbedColor}; 
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
        };
            
        }
         else
        {
          reaction.remove(user).catch(error => ErrorBag.add(error));
            
          const embed = {"description": CooldownMessage4[0],  "color": EmbedColor}; 
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
        };
            
        }
         else
        {
          reaction.remove(user).catch(error => ErrorBag.add(error));
            
          const embed = {"description": ErrorIcon + " That message was already logged, **" + Function_RemoveFormatting(user.username, "other", true) + "**.",  "color": EmbedColor}; 
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
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
    message.author.send({ embed }).catch(error => ErrorBag.add(error)).catch(error => ErrorBag.add(error));
};
  
};
});

//MESSAGE EVENTS
peeky.on('message', async (message) => {
  
if  (message.channel.type == "dm")  {
if  (!QueuedSOSMessages.has(message.author.id) && !message.author.bot && !message.webhookID && message.content.toLowerCase() !== "accept")  {

        const embed = {"description": InfoIcon + " Do you want to send your message to PEEKY's owner?\n" + Hollow + " Type **Accept** in under 30 seconds if you do.",  "color": EmbedColor}; 
        message.channel.send({ embed }).then(() => {
          
          QueuedSOSMessages.add(message.author.id);
          message.channel.awaitMessages(response => response.content.toLowerCase() == "accept", {
            max: 1,
            time: 30000,
            errors: ['time'],
          }).then((collected) => {

          if  (message.attachments.size > 0) {
               const image = message.attachments.array()[0].url;
               peeky.users.get("108899856889737216").send("**" + message.author.tag + ":** " + message.content, {  files: [image]}) .catch(error => ErrorBag.add(error));
              }
               else
              {
               peeky.users.get("108899856889737216").send("**" + message.author.tag + ":** " + message.content) 
               .catch(error => ErrorBag.add(error));
              };

              const embed = {"description": SuccessIcon + " Your message has been successfuly sent to my owner!",  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            
              QueuedSOSMessages.delete(message.author.id);
          
          })
          .catch(() => {
           QueuedSOSMessages.delete(message.author.id);

           const embed = {"description": ErrorIcon + " Your message was not sent because the time limit has ran out.",  "color": EmbedColor}; 
           message.channel.send({ embed })
          });
      });
    };
}
 else if (message.channel.type == "text")
{

//SOME VARIABLES
const key    = `${message.author.id}`;
const keyCF  = `${message.channel.id}`;
const keySF  = `${message.guild.id}`;
var   Failed = false;

if  (!message.webhookID)  {

//BADGES
if  (!message.author.bot && message.guild.owner !== undefined)  {
  
    //Publisher Badge
    if  (message.channel.id == WorkshopChannel && message.attachments.size == 1 && message.content.toLowerCase().includes("name:") && message.content.toLowerCase().includes("credit:") && message.content.toLowerCase().includes("price:"))  {
        if  (peeky.userData.has(key) && peeky.userData.get(key, "PublisherBadge") == false)  {
            peeky.userData.set(key, true, "PublisherBadge");
        };
    };

    //Ownership Badge
    if  (peeky.userData.get(key, "OwnershipBadge") == false && message.author.id == message.guild.owner.user.id)  {
        peeky.userData.set(key, true, "OwnershipBadge");
    };
  
};
  
//FUNCTIONS
if  (peeky.channelData.has(keyCF) && peeky.serverData.has(keySF))  {
  
//Automatic Reactions
if  (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)  {
  
    if  ((message.attachments.size > 0 || function_DetectLink(message.content) == true) && !message.author.bot)  {

    if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS') && message.channel.permissionsFor(peeky.user).has('EXTERNAL_EMOJIS'))  {

        var ReactionEmoji1 = message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote");
        var ReactionEmoji2 = message.guild.emojis.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote");

    if  (ReactionEmoji1 && ReactionEmoji2)  {
         await message.react(ReactionEmoji1).catch(error => ErrorBag.add(error));
         await message.react(ReactionEmoji2).catch(error => ErrorBag.add(error));

         console.log("The Automatic Reactions function has been triggered in " + message.guild.name + ".");
        }
         else
        { 
         await message.react(DefaultUpvote).catch(error => ErrorBag.add(error));
         await message.react(DefaultDownvote).catch(error => ErrorBag.add(error));

         console.log("The Automatic Reactions function has been triggered in " + message.guild.name + ".");
        };

        };

    };

};
  
//Images Only
if  (peeky.channelData.get(keyCF, "image_only_bonus") == true)  {
  
if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

if  (!message.member.permissions.has("MANAGE_MESSAGES") && message.attachments.size < 1)  {

    message.delete(AutoDeleteTime).catch(error => ErrorBag.add(error));
  
    if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "IO"))  {
        
        ResponseCooldowns.add(message.guild.id + "IO");
        setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "IO")}, ResponseCooldownMS);

        const embed = {"description": InfoIcon + " You can only send images in this channel, **" + Function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

    };

    console.log("The Images Only function has been triggered in " + message.guild.name + ".");

};
};

};

//Event Countdown
if  (peeky.serverData.get(keySF, "event_countdown_bonus") == true)  {

if  (!EventCountdownCooldown.has(message.guild.id) && !message.author.bot)  {

    var ChannelExists = message.guild.channels.find(c => c.id == peeky.serverData.get(keySF, "event_countdown_bonus_id"));

    if  (ChannelExists && ChannelExists.permissionsFor(peeky.user).has('CONNECT'))  {

        EventCountdownCooldown.add(message.guild.id);
        setTimeout(() => {EventCountdownCooldown.delete(message.guild.id)}, 300000);

        var TheDate = peeky.serverData.get(keySF, "event_countdown_bonus_setting") - new Date();
        const EndName = "The Countdown has ended.";

    if  (peeky.serverData.get(keySF, "event_countdown_bonus_setting") > 0 && TheDate > 0)  {

        var Time = (new Date(peeky.serverData.get(keySF, "event_countdown_bonus_setting")) - Date.now());
        var FixedTime = (Math.abs(Time / (1000 * 60 * 60)).toFixed(1));
        var LengthName = "hours";

        if  (FixedTime > 24)  {
            FixedTime = (Math.abs(Time / (1000 * 60 * 60 * 24)).toFixed(1)); LengthName = "days";

            if  (FixedTime >= 365)  {
                    FixedTime = "over"; LengthName = "a year";
            };

        };

        ChannelExists.setName("Starting in " + FixedTime + " " + LengthName).catch(error => ErrorBag.add(error));
        console.log("The Event Countdown function has been triggered in " + message.guild.name + ".");

        }
         else if (ChannelExists.name !== EndName)
        {
         ChannelExists.setName(EndName).catch(error => ErrorBag.add(error));
         console.log("The Event Countdown function has been triggered in " + message.guild.name + ".");
        };

    };

};

};

//Server Trial
if  (peeky.serverData.get(keySF, "server_trial_bonus") == true)  {

if  (!ServerTrialCooldown.has("cooldown"))  {

    ServerTrialCooldown.add("cooldown");
    setTimeout(() => {ServerTrialCooldown.delete("cooldown")}, 600000);
    
    var filtered = peeky.serverData.filter( p => p.server_trial_bonus == true );
    var ValidGuilds = function_ShuffleArray(filtered.map(i => i.GuildID));

    ValidGuilds.forEach(g => {

    if  (peeky.guilds.has(g))  {
        
        var Guild = peeky.guilds.get(g);
        
    if  (Guild.me.hasPermission('KICK_MEMBERS'))  {

        var OnTrial = function_ShuffleArray((Guild.members.filter(m => !m.user.bot && !m.permissions.has('MANAGE_GUILD') && m.roles.find(r => r.name == "Trial")).map(m => m))).slice(0, 5);
        var TrialTime = peeky.serverData.get(keySF, "server_trial_bonus_setting");
      
        OnTrial.forEach(async m => {

            if  (new Date() - m.joinedAt >= (TrialTime * 60 * 1000))  {

                setTimeout(async () => {

                await m.send("Your trial on **" + Function_RemoveFormatting(Guild.name, "other", true) + "** has ended.").catch(error => ErrorBag.add(error));  
                m.kick({  reason: "Triggered by the Server Trial function."  }).catch(error => ErrorBag.add(error));

                console.log("The Server Trial function has been triggered in " + m.guild.name + ".");                

                }, 5000);

            };
          
        });
    };
      
    };

    });

};

};

//Flood Protection
if  (peeky.serverData.get(keySF, "flood_protection_bonus") == true)  {

if  (!message.member.permissions.has('MANAGE_MESSAGES') && message.guild.me.hasPermission('MANAGE_ROLES'))  {
  
if  (!message.content.toLowerCase().startsWith(peeky.serverData.get(keySF, "prefix")))  {

    const LastMsgContent = peeky.channelData.get(keyCF, "flood_protection_bonus_lastmsg");
    const LastMsgUser    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastuser");
    const LastMsgDate    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastdate");
    const ThisMsgDate    = Date.now();

    if  (((LastMsgUser == message.author.id) && (ThisMsgDate - LastMsgDate <= 500)) || (message.content == LastMsgContent))  {
      
    if  (FloodProtectionStrikes.filter(i => i == message.author.id).map(i => "Strike").length >= 2)  {

    const name       = peeky.serverData.get(keySF, "muted_role");
    const RoleExists = message.guild.roles.find(role => role.name == name);

    if  (RoleExists) {
            
        message.member.send("You have been muted in **" + Function_RemoveFormatting(message.guild.name, "other", true) + "** by the **Flood Protection** function.").catch(error => ErrorBag.add(error));

        message.member.addRole(message.member.guild.roles.find(role => role.name == name), "Triggered by the Flood Protection function.").catch(error => ErrorBag.add(error));
      
        if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "FP"))  {
         
            ResponseCooldowns.add(message.guild.id + "FP");
            setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "FP")}, ResponseCooldownMS);
            
            const embed = {"description": InfoIcon + " I have muted **" + message.member.user.username + "** because of the **Flood Protection** function.",  "color": EmbedColor};
            await message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))}); 

        };

        console.log("The Flood Protection function has been triggered in " + message.guild.name + ".");

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
      
//Classification Wall
if  (peeky.serverData.get(keySF, "donor_wall_bonus") == true)  {

    const Role    = peeky.guilds.get(message.guild.id).roles.find(r => r.name == peeky.serverData.get(keySF, "donor_wall_bonus_setting"));
    const Channel = peeky.guilds.get(message.guild.id).channels.find(c => c.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    var WallList = [];
    var EndString = "";
    var Tag       = "";

    if  (Role && Channel)  {

    if  (!DonorWallCooldown.has(message.guild.id))  {

        DonorWallCooldown.add(message.guild.id);
        setTimeout(() => {DonorWallCooldown.delete(message.guild.id)}, 300000);

        peeky.guilds.get(message.guild.id).members.forEach(function(guildMember, guildMemberId) {
        if  (guildMember.roles.has(Role.id))  {
        if  (guildMember.user.bot)                                {  Tag = BotTag;  };
        if  (guildMember.user.id == message.guild.owner.user.id)  {  Tag = OwnerTag;  };
            WallList.push(Function_RemoveFormatting(guildMember.user.username, "cw", true) +  "#" + guildMember.user.discriminator + " " + Tag);
            Tag = "";
        };
        });

        const SupportersAmount = WallList.length;

        if  (SupportersAmount >= 50)  {  EndString = " and " + (SupportersAmount - 50) + " more..."  };
        if  (SupportersAmount == 0)  {  WallList = ["No one."]  };

        Channel.fetchMessages({ limit: 1 }).then(messages => {

        var Message = messages.array()[0];

        if  (Message.id == peeky.serverData.get(keySF, "donor_wall_bonus_id"))  {

            Message.edit("**" + Function_RemoveFormatting(message.guild.name, "other", true) + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n\n" + WallList.join("\n") + "" + EndString).catch(error => ErrorBag.add(error));

            console.log("The Classification Wall function has been triggered in " + message.guild.name + ".");

        };

        }).catch(error => ErrorBag.add(error));

      };
      };
  
};
  
//Clear Nicknames
if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)  {

    if  (message.guild.me.hasPermission("MANAGE_NICKNAMES") && !message.member.permissions.has("MANAGE_NICKNAMES") && message.member.nickname == null && !message.author.bot)  {

    if  (!ClearedNames.has(message.author.tag)) {

        ClearedNames.add(message.author.tag);

        var Username = message.author.username.toLowerCase().toString();
        var NewNickname = Username.match(/[aábcčdďeéěfghiíjklmnňoópqrřsštuůúvwxyýzž0123465789 ]/g)
        
        if  (NewNickname !== null) {
            NewNickname = NewNickname.join("");
        };
      
        if  (Username !== NewNickname)  {
          
            if  (NewNickname == null)  {
                NewNickname = peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + " (" + Math.random().toString(36).substr(2, 6) + ")";
            };

            message.member.setNickname(NewNickname, {reason: "Triggered by the Clear Nicknames function."}).catch(error => ErrorBag.add(error));

            const embed = {"description": InfoIcon + " I have cleared **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s nickname of fancy letters.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

            console.log("The Clear Nicknames function has been triggered in " + message.guild.name + ".");
          
        };

    };
    };

};

//Banned Words
if  (peeky.channelData.get(keyCF, "banned_words_bonus") == true)  {
  
if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
    
if  (!message.member.permissions.has("MANAGE_MESSAGES") && peeky.serverData.get(keySF, "banned_words_bonus_setting").some(word => Function_RemoveFormatting(message.content.toLowerCase(), "bw", true).includes(word)))  {

     message.delete(AutoDeleteTime).catch(error => ErrorBag.add(error));
  
     if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "BW"))  {
         
         ResponseCooldowns.add(message.guild.id + "BW");
         setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "BW")}, ResponseCooldownMS);
       
         const embed = {"description": InfoIcon + " You cannot say that in here, **" + Function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

     };

     console.log("The Banned Words function has been triggered in " + message.guild.name + ".");
      
    };

};
  
};

//Spoiler Lock
if  (peeky.channelData.get(keyCF, "spoiler_only_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES"))  {

            if  ((message.attachments.size > 0 && !message.attachments.array()[0].filename.startsWith("SPOILER_")) || function_DetectLink(message.content) == true)  {

                if  ((((new Date() - new Date(message.member.joinedAt)) / 60000) < peeky.serverData.get(keySF, "spoiler_lock_bonus_setting")) || peeky.serverData.get(keySF, "spoiler_lock_bonus_setting") == 0)  {

                     message.delete(AutoDeleteTime).catch(error => ErrorBag.add(error));

                     if   (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "SO"))  {

                         ResponseCooldowns.add(message.guild.id + "SO");
                         setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "SO")}, ResponseCooldownMS);

                         const embed = {"description": InfoIcon + " You have to mark your image as a spoiler, **" + Function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
                         message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

                     };

                     console.log("The Spoiler Lock function has been triggered in " + message.guild.name + ".");

                };
            };
        };
    };
};
  
};

//COMMANDS
if  (message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES') && message.content.startsWith(peeky.serverData.get(keySF, "prefix")) && !message.webhookID && !message.author.bot)  {
  
//Misc. Commands

//Help
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "help"))  {

    const embed = {
                    "description": "**Website** [[Open]](https://peeky.glitch.me/)\nYou can visit the website to vote, read tutorials, browse the backgrounds, view the leaderboard and pretty much everything PEEKY related." + 
                                   "\n\n**Store** [[Open]](https://peeky.glitch.me/store.html) [[Checkout]](https://donatebot.io/checkout/" + SupportServer + "?buyer=" + message.author.id + ")\nYou can support PEEKY by purchasing some neat items from the store!" +
                                   "\n\n**Support Server** [[Join]](https://peeky.glitch.me/server.html)\nYou can join the Support Server for important announcements, assistance with the bot, giveaways and much more!" +
                                   "\n\n**Bot Invite** [[Add]](https://peeky.glitch.me/invite.html)\nYou can add PEEKY to your server and get all the features for free and under a minute!",
                    "image": {  "url": "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fnew_header.png?1553884542855"  },
                    "color": 7506394
      };

      message.channel.send({ embed }).catch(error => ErrorBag.add(error));

};
  
//Get
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "get "))  {
    message.channel.send("`" + Function_RemoveFormatting(message.content.split(peeky.serverData.get(keySF, "prefix") + "get ")[1], "get", true) + "`").catch(error => ErrorBag.add(error));
};

//Eval
if (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "eval "))  {
    
    if (message.author.id == OwnerId) {
       
    function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
    };
       
    var EvalResult = message.content.split(peeky.serverData.get(keySF, "prefix") + "eval ")[1]

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
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//EventRewards
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "eventrewards"))  {
  
    if  (OngoingEvent == true && peeky.userData.get(key, "CelebratorBadge") == false)  {
      
        peeky.userData.set(key, true, "CelebratorBadge");
        peeky.userData.get(key, true, "Inventory").push(333);
      
        const embed = {"description": SuccessIcon + " You have received the event rewards!"
                                      + "\n\n" + InfoIcon + " The **" + Banners[333 - 1][Banner.Name] + "** background."
                                      + "\n\n" + InfoIcon + " The **Celebrator** badge.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    };
  
};

//Upgrade
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "upgrade"))  {

    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = PeekySupportServer.members.get(message.author.id);
    var   Failed             = false;

    if  (PeekySupportServer.members.get(message.author.id))  {

    //Server Upgrade
    if  (TheUserWithRole.roles.has(ServerUpgradeRole) && peeky.serverData.get(keySF, "server_upgraded") == false)  {
        TheUserWithRole.removeRole(ServerUpgradeRole).catch(error => {ErrorBag.add(error); Failed = true});

        if  (Failed == false)  {
            peeky.userData.math(key, "+", 1, "UpgradedServers");
          
            const embed = {"description": SuccessIcon + " This server is now upgraded!",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.channels.get(AnnouncementsChannel).send("**" + Function_RemoveFormatting(message.author.tag, "other", true) + "** has upgraded **" + Function_RemoveFormatting(message.guild.owner.user.tag, "other", true) + "**'s server called **" + Function_RemoveFormatting(message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));
        };
    }
     else 
    {
      const embed = {"description": ErrorIcon + " You cannot upgrade this server.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else 
    {
      const embed = {"description": ErrorIcon + " You have to join PEEKY's support server for that command to work.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//SetInvite
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "setinvite"))  {
  
if  (!SetInviteCooldown.has(message.guild.id))  {

    SetInviteCooldown.add(message.guild.id);
    setTimeout(() => {SetInviteCooldown.delete(message.guild.id)}, 300000);

if  (message.author.id == message.guild.owner.user.id)  {
    
if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {

    await message.channel.fetchInvites().then(function(Invites)  {
    Invites = Invites.array();

    if  (Invites.length > 0) {
        peeky.serverData.set(keySF, Invites[0].code, "server_invite");
        const embed = {"description": SuccessIcon + " The server's invite code has been set to **" + Invites[0].code + "**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    } else {
        const embed = {"description": ErrorIcon + " I could not find any server invites in this channel.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

});

}
 else
{
 const embed = {"description": ErrorIcon + " This command is only allowed on upgraded servers.",  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Function Commands
      
//Overview
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "overview"))  {
  
if  (!OverviewCooldown.has(message.guild.id))  {
         
    OverviewCooldown.add(message.guild.id);
    setTimeout(() => {OverviewCooldown.delete(message.guild.id)}, 10000);
  
    const embed = {"description": "**Overview Menu**" + "\n\n" + "1⃣ Server Settings" + "\n\n" + "2⃣ Server Functions `[1/2]`" + "\n\n" + "3⃣ Server Functions `[2/2]`" + "\n\n" + "4⃣ Channel Functions",  "color": EmbedColor}; 
    await message.channel.send({  embed  }).catch(error => {ErrorBag.add(error);}).then(async m => {
            
          await m.react("1⃣").catch(error => {ErrorBag.add(error)});
          await m.react("2⃣").catch(error => {ErrorBag.add(error)});
          await m.react("3⃣").catch(error => {ErrorBag.add(error)});
          await m.react("4⃣").catch(error => {ErrorBag.add(error)});
          peeky.userData.set(key, m.id, "OverviewID");
            
    }).catch(error => {ErrorBag.add(error)});
  
}
 else 
{
  const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//TOGGLE COMMANDS
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "toggle "))  {
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {
    
if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {
  
    var FunctioName = message.content.split(peeky.serverData.get(keySF, "prefix") + "toggle ")[1];
    var InfoMessages = [];
      
//Toggle Automatic Reactions
if  (FunctioName.startsWith("automatic reactions")) {
        
    if   (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true) {peeky.channelData.set(keyCF, false, "automatic_reactions_bonus")}
    else peeky.channelData.set(keyCF, true, "automatic_reactions_bonus");
      
    if  (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Automatic Reactions** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Welcome Messages
if  (FunctioName.startsWith("welcome messages")) {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var channel = guild.channels.find(c=> c.name == name);
        
    if   (peeky.serverData.get(keySF, "welcome_messages_bonus") == true) {peeky.serverData.set(keySF, false, "welcome_messages_bonus")}
    else peeky.serverData.set(keySF, true, "welcome_messages_bonus");
    
    //Channel Creating
    if (!channel) {
    
    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (message.guild.me.hasPermission("MANAGE_CHANNELS")) {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.createChannel(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });
      
    InfoMessages.push(InfoIcon + " Created a channel called **#" + name + "** for the **Welcome Messages** function.");
    
    };
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed })
     .catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "welcome_messages_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Welcome Messages** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Classification Wall
if  (FunctioName.startsWith("classification wall"))  {
    
    const channel = peeky.guilds.get(message.guild.id).channels.find(channel => channel.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    const name = peeky.serverData.get(keySF, "donor_wall_bonus_channel");

    if(peeky.serverData.get(keySF, "donor_wall_bonus") == true) {  peeky.serverData.set(keySF, false, "donor_wall_bonus");  }
    else peeky.serverData.set(keySF, true, "donor_wall_bonus");
  
    //Channel Creating    
    if (!channel) {
      
    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.createChannel(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error))
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error))
          await channel.send("**" + message.guild.name + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n\nPreparing the Wall. Check back in under a few minutes!").catch(error => {ErrorBag.add(error);}).then(m => peeky.serverData.set(keySF, m.id, "donor_wall_bonus_id"));
    }).catch(function(err) {  ErrorBag.add(err);  });
      
    InfoMessages.push(InfoIcon + " Created a channel called **#" + name + "** for the **Classification Wall** function.");

    };
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
    };

    if  (peeky.serverData.get(keySF, "donor_wall_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Classification Wall** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
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
      
    //Permission Checking
    if(message.guild.me.hasPermission("MANAGE_ROLES")) {

    RoleCooldown.add(message.guild.id);
    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
    
    message.guild.createRole({
    name: name,
    color: Blurple
    }).catch(error => ErrorBag.add(error));
      
    InfoMessages.push(InfoIcon + " Created a role called **" + name + "** with the default Permissions for the **Join Role** function.");

    };
    }
     else
    {
     const embed = {"description": CooldownMessage3[0],  "color": EmbedColor}; 
     message.channel.send({ embed })
     .catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "join_role_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Join role** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Role Saver
if  (FunctioName.startsWith("role saver"))  {
    
    if(peeky.serverData.get(keySF, "role_saver_bonus") == true) {peeky.serverData.set(keySF, false, "role_saver_bonus");}
    else peeky.serverData.set(keySF, true, "role_saver_bonus");
      
    if  (peeky.serverData.get(keySF, "role_saver_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Role Saver** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Images Only
if  (FunctioName.startsWith("images only")) {

    if(peeky.channelData.get(keyCF, "image_only_bonus") == true) {peeky.channelData.set(keyCF, false, "image_only_bonus");}
    else peeky.channelData.set(keyCF, true, "image_only_bonus");
      
    if  (peeky.channelData.get(keyCF, "image_only_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Images Only** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Server Message
if  (FunctioName.startsWith("server message")) {
        
    if(peeky.serverData.get(keySF, "server_message_bonus") == true) {peeky.serverData.set(keySF, false, "server_message_bonus");}
    else peeky.serverData.set(keySF, true, "server_message_bonus");
      
    if  (peeky.serverData.get(keySF, "server_message_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Server Message** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
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

    if(message.guild.me.hasPermission("MANAGE_CHANNELS")) {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.createChannel(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });
      
    InfoMessages.push(InfoIcon + " Created a channel called **#" + name + "** for the **Message Log** function.")
    
    };
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed })
     .catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.channelData.get(keyCF, "message_log_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Message Log** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
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

    if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);
      
    await message.guild.createChannel(name, { type: 'text', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
          await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
          await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });
      
    InfoMessages.push(InfoIcon + " Created a channel called **#" + name + "** for the **Stream Announcements** function.")
    
    };

    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed })
     .catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "stream_announcements_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Stream Announcements** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Member Counter
if  (FunctioName.startsWith("member counter")) {
  
    const guild = message.guild;
    const name = peeky.serverData.get(keySF, "member_counter_bonus_setting") + ": " + message.guild.members.filter(m => !m.user.bot).size;
    var id = peeky.serverData.get(keySF, "member_counter_bonus_id");
    var channel = guild.channels.find(c=> c.id == id);

    if(peeky.serverData.get(keySF, "member_counter_bonus") == true) {peeky.serverData.set(keySF, false, "member_counter_bonus");}
    else peeky.serverData.set(keySF, true, "member_counter_bonus");

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if(message.guild.me.hasPermission("MANAGE_CHANNELS")) {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.createChannel(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "member_counter_bonus_id");
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });     
      
    InfoMessages.push(InfoIcon + " Created a channel called **" + name + "** for the **Member Counter** function.");
    
    };
    
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed })
     .catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "member_counter_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Member Counter** function has been **"  + StatusString + "**."+ "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
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

    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (message.guild.me.hasPermission("MANAGE_CHANNELS")) {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.createChannel(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "event_countdown_bonus_id");
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });
      
    InfoMessages.push(InfoIcon + " Created a channel called **" + name + "** for the **Event Countdown** function.");
    
    };
    
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "event_countdown_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Event Countdown** function has been **"  + StatusString + "**."+ "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Notifications
if  (FunctioName.startsWith("notifications")) {
        
    if(peeky.serverData.get(keySF, "notifications") == true) {peeky.serverData.set(keySF, false, "notifications")}
    else peeky.serverData.set(keySF, true, "notifications");

    if  (peeky.serverData.get(keySF, "notifications") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Notifications** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Notifications
if  (FunctioName.startsWith("game roles")) {
        
    if(peeky.serverData.get(keySF, "game_roles_bonus") == true) {peeky.serverData.set(keySF, false, "game_roles_bonus")}
    else peeky.serverData.set(keySF, true, "game_roles_bonus");

    if  (peeky.serverData.get(keySF, "game_roles_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Game Roles** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Clear Nicknames
if  (FunctioName.startsWith("clear nicknames")) {
        
    if(peeky.serverData.get(keySF, "clear_nicknames_bonus") == true) {peeky.serverData.set(keySF, false, "clear_nicknames_bonus");}
    else peeky.serverData.set(keySF, true, "clear_nicknames_bonus");
      
    if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Clear Nicknames** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
  
else

//Toggle Suspicion Alert
if  (FunctioName.startsWith("suspicion alert")) {
        
    if(peeky.serverData.get(keySF, "suspicion_alert_bonus") == true) {peeky.serverData.set(keySF, false, "suspicion_alert_bonus");}
    else peeky.serverData.set(keySF, true, "suspicion_alert_bonus");
      
    if  (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Suspicion Alert** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 

    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
  
else

//Toggle Vote Kick
if  (FunctioName.startsWith("vote kick")) {
        
    if(peeky.serverData.get(keySF, "vote_kick_bonus") == true) {peeky.serverData.set(keySF, false, "vote_kick_bonus");}
    else peeky.serverData.set(keySF, true, "vote_kick_bonus");
      
    if  (peeky.serverData.get(keySF, "vote_kick_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Vote Kick** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Flood Protection
if  (FunctioName.startsWith("flood protection")) {

    if(peeky.serverData.get(keySF, "flood_protection_bonus") == true) {peeky.serverData.set(keySF, false, "flood_protection_bonus");}
    else peeky.serverData.set(keySF, true, "flood_protection_bonus");
      
    if  (peeky.serverData.get(keySF, "flood_protection_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Flood Protection** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Nickname Saver
if  (FunctioName.startsWith("nickname saver")) {

    if(peeky.serverData.get(keySF, "nick_saver_bonus") == true) {peeky.serverData.set(keySF, false, "nick_saver_bonus");}
    else peeky.serverData.set(keySF, true, "nick_saver_bonus");
      
    if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Nickname Saver** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 

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
      
    //Permission Checking
    if(message.guild.me.hasPermission("MANAGE_ROLES")) {

    RoleCooldown.add(message.guild.id);
    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
      
    message.guild.createRole({
    name: name,
    color: "#6441A4"
    }).catch(error => ErrorBag.add(error));
      
    InfoMessages.push(InfoIcon + " Created a role called **" + name + "** with the default Permissions for the **Streamer Role** function.");

    };
    }
     else
    {
     const embed = {"description": CooldownMessage3[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "streamer_role_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Streamer Role** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Server Trial
if  (FunctioName.startsWith("server trial"))  {
        
    const guild = message.guild;
    var name = "Trial";
    var role = guild.roles.find(c=> c.name == name);

    if(peeky.serverData.get(keySF, "server_trial_bonus") == true) {peeky.serverData.set(keySF, false, "server_trial_bonus");}
    else peeky.serverData.set(keySF, true, "server_trial_bonus");
      
    if (!role) {

    if  (!RoleCooldown.has(message.guild.id)) {
      
    //Permission Checking
    if(message.guild.me.hasPermission("MANAGE_ROLES")) {

    RoleCooldown.add(message.guild.id);
    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
      
    message.guild.createRole({
    name: name,
    color: "#d3d3d3"
    }).catch(error => ErrorBag.add(error));
      
    InfoMessages.push(InfoIcon + " Created a role called **" + name + "** with the default Permissions for the **Server server_trial** function.");

    };
    }
     else
    {
     const embed = {"description": CooldownMessage3[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "server_trial_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Server Trial** function has been **"  + StatusString + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Banned Words
if  (FunctioName.startsWith("banned words"))  {
        
    if   (peeky.channelData.get(keyCF, "banned_words_bonus") == true) {peeky.channelData.set(keyCF, false, "banned_words_bonus")}
    else peeky.channelData.set(keyCF, true, "banned_words_bonus");
      
    if  (peeky.channelData.get(keyCF, "banned_words_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Banned Words** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Spoiler Lock
if  (FunctioName.startsWith("spoiler lock"))  {
        
    if   (peeky.channelData.get(keyCF, "spoiler_only_bonus") == true) {peeky.channelData.set(keyCF, false, "spoiler_only_bonus")}
    else peeky.channelData.set(keyCF, true, "spoiler_only_bonus");
      
    if  (peeky.channelData.get(keyCF, "spoiler_only_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Spoiler Lock** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 

    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
 else
{
 const embed = {"description": ErrorMessage10[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}; //END

//SET COMMANDS
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "set "))  {
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {
    
if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {
  
    var FunctioName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set ")[1];
      
//Set Welcome Messages
if  (FunctioName.startsWith("welcome messages "))  {

    var ChannelName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set welcome messages ")[1];
    var FixedChannelName = Function_RemoveFormatting(ChannelName, "channel", true);
    peeky.serverData.set(keySF, FixedChannelName, "welcome_messages_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Welcome Messages** setting has been set to **#­" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting")+ "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
  
else

//Set Join Role
if  (FunctioName.startsWith("join role "))  {
    
    var RoleName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set join role ")[1];
    peeky.serverData.set(keySF, Function_RemoveFormatting(RoleName, "role"), "join_role_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Join Role** setting has been set to **@­" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Streamer Role
if  (FunctioName.startsWith("streamer role "))  {
    
    var RoleName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set streamer role ")[1];
    peeky.serverData.set(keySF, Function_RemoveFormatting(RoleName, "role"), "streamer_role_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Streamer Role** setting has been set to **@­" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Automatic Reactions
if  (FunctioName.startsWith("automatic reactions "))  {

    var ReactionName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set automatic reactions ")[1];
    var FixedReactionName = Function_RemoveFormatting(ReactionName, "other", true);
    peeky.serverData.set(keySF, FixedReactionName, "automatic_reactions_bonus_setting");
    
    const embed = {"description": SuccessIcon + " The **Automatic Reactions** setting has been set to **:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:** and **:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Classification Wall
if  (FunctioName.startsWith("classification wall "))  {

    var ChannelName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set classification wall ")[1];
    peeky.serverData.set(keySF, Function_RemoveFormatting(ChannelName, "role"), "donor_wall_bonus_setting", true);
    peeky.serverData.set(keySF, Function_RemoveFormatting(ChannelName, "channel") + "s", "donor_wall_bonus_channel", true);

    const embed = {"description": SuccessIcon + " The **Classification Wall** setting has been set to **#­" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "** and **@­" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
      
//Set Member Counter
if  (FunctioName.startsWith("member counter "))  {

    var CounterName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set member counter ")[1];
    let foundWord = false;
      
    peeky.serverData.set(keySF, Function_RemoveFormatting(CounterName, "other"), "member_counter_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Member Counter** setting has been set to **" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Event Countdown
if  (FunctioName.startsWith("event countdown "))  {

    var Timestamp = message.content.split(peeky.serverData.get(keySF, "prefix") + "set event countdown ")[1];

    if  (!isNaN(Timestamp))  {

    var GivenDate = new Date(Number(Timestamp));

    peeky.serverData.set(keySF, GivenDate.getTime(), "event_countdown_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Event Countdown** setting has been set to **" + Timestamp + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
     const embed = {"description": ErrorIcon + " The timestamp is invalid.",  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Spoiler Lock
if  (FunctioName.startsWith("spoiler lock "))  {

    var GivenMinutes = message.content.split(peeky.serverData.get(keySF, "prefix") + "set spoiler lock ")[1];

    if  (!isNaN(GivenMinutes) && GivenMinutes >= 0)   {

        peeky.serverData.set(keySF, GivenMinutes, "spoiler_lock_bonus_setting");

        if  (GivenMinutes == 0)  {GivenMinutes = "never"}  else  {GivenMinutes = GivenMinutes + " minutes"}

        const embed = {"description": SuccessIcon + " The **Spoiler Lock** setting has been set to **" + GivenMinutes + "**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
      const embed = {"description": ErrorMessage9[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Server Trial
if  (FunctioName.startsWith("server trial "))  {
    
    var GivenMinutes = message.content.split(peeky.serverData.get(keySF, "prefix") + "set server trial ")[1];

    if  (!isNaN(GivenMinutes) && GivenMinutes > 0)   {

        peeky.serverData.set(keySF, GivenMinutes, "server_trial_bonus_setting");

        const embed = {"description": SuccessIcon + " The **Server Trial** setting has been set to **" + GivenMinutes + " minutes**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
     const embed = {"description": ErrorMessage9[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Suspicion Alert
if  (FunctioName.startsWith("suspicion alert "))  {

    var BanAmount = message.content.split(peeky.serverData.get(keySF, "prefix") + "set suspicion alert ")[1];

    if  (isNaN(BanAmount) == false) {

        peeky.serverData.set(keySF, Number(BanAmount), "suspicion_alert_bonus_setting");

        const embed = {"description": SuccessIcon + " The **Suspicion Alert** setting has been set to **" + peeky.serverData.get(keySF, "suspicion_alert_bonus_setting") + " bans**.",  "color": EmbedColor};  
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    }
     else
    {
      const embed = {"description": ErrorMessage9[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else
      
//Set Vote Kick
if  (FunctioName.startsWith("vote kick "))  {

    var VoteAmount = message.content.split(peeky.serverData.get(keySF, "prefix") + "set vote kick ")[1];

    if  (isNaN(VoteAmount) == false && VoteAmount > 0) {

        peeky.serverData.set(keySF, Number(VoteAmount), "vote_kick_bonus_setting");

        const embed = {"description": SuccessIcon + " The **Vote Kick** setting has been set to **" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes**.",  "color": EmbedColor};  
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    }
     else
    {
      const embed = {"description": ErrorIcon + " The provided amount must be greater than 1.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else

//Set Message Log
if  (FunctioName.startsWith("message log "))  {
    
    var ChannelName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set message log ")[1];
    var FixedChannelName = Function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "message_log_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Message Log** setting has been set to **#­" + peeky.serverData.get(keySF, "message_log_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Message Log
if  (FunctioName.startsWith("stream announcements "))  {

    var ChannelName = message.content.split(peeky.serverData.get(keySF, "prefix") + "set stream announcements ")[1];
    var FixedChannelName = Function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "stream_announcements_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Stream Announcements** setting has been set to **#­" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Clear Nicknames
if  (FunctioName.startsWith("clear nicknames "))  {

    var NewSetting = message.content.split(peeky.serverData.get(keySF, "prefix") + "set clear nicknames ")[1];
    peeky.serverData.set(keySF, Function_RemoveFormatting(NewSetting, "other"), "clear_nicknames_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Clear Nicknames** setting has been set to **" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Server Message
if  (FunctioName.startsWith("server message "))  {
   
    var ServerMessageContent = message.content.split(peeky.serverData.get(keySF, "prefix") + "set server message ")[1];
    var ServerMessagePreview = ServerMessageContent;
    var FixedMsgEnd          = "";
    var TagString            = "";

    peeky.serverData.set(keySF, ServerMessageContent, "server_message_bonus_setting");

        ServerMessagePreview = Function_RemoveFormatting(ServerMessagePreview, "sm", true);

    if  (ServerMessageContent.includes(GuildNameTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildNameTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildSizeTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildSizeTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildOwnerTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildOwnerTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildVerificationTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildVerificationTag + "** tag was detected."  };
    if  (ServerMessageContent.includes(GuildAcronymTag)) {  TagString += "\n\n" + InfoIcon + " The **" + GuildAcronymTag + "** tag was detected."  };

        const embed = {"description": SuccessIcon + " The **Server Message** setting has been set to **" + ServerMessagePreview + FixedMsgEnd + "**." + TagString,  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Banned Words
if  (FunctioName.startsWith("banned words "))  {
  
if  (peeky.serverData.get(keySF, "banned_words_bonus_setting").length < BannedWordsLimit)  {

    var ReceivedArray = Function_RemoveFormatting(message.content.split(peeky.serverData.get(keySF, "prefix") + "set banned words ")[1].toLowerCase(), "other", true);
    peeky.serverData.get(keySF, "banned_words_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "banned_words_bonus_setting");
  
    const embed = {"description": SuccessIcon + " The **Banned Words** setting has been set to **" + FixedArray.join("**, **") + EndString + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": ErrorIcon + " The setting for the **Banned Words** function is full.",  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
  
else
 
//Set Game Roles
if  (FunctioName.startsWith("game roles "))  {
  
if  (peeky.serverData.get(keySF, "game_roles_bonus_setting").length < GameRolesLimit)  {

    var ReceivedArray = Function_RemoveFormatting(message.content.split(peeky.serverData.get(keySF, "prefix") + "set game roles ")[1], "other", true);
    peeky.serverData.get(keySF, "game_roles_bonus_setting").push(ReceivedArray);

    var EndString = "";  var FixedArray = peeky.serverData.get(keySF, "game_roles_bonus_setting");
  
    const embed = {"description": SuccessIcon + " The **Game Roles** setting has been set to **" + FixedArray.join("**, **") + EndString + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": ErrorIcon + " The setting for the **Game Roles** function is full.",  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage10[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}; //END

//CLEAR COMMANDS
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "clear "))  {
  
    var FunctioName = message.content.split(peeky.serverData.get(keySF, "prefix") + "clear ")[1];
  
if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {
 
//Clear Banned Words
if  (FunctioName.startsWith("banned words"))  {
      
     peeky.serverData.set(keySF, [], "banned_words_bonus_setting");
  
     const embed = {"description": SuccessIcon + " Cleared the setting for the **Banned Words** function.",  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
  
//Clear Game Roles
if  (FunctioName.startsWith("game roles"))  {
      
     peeky.serverData.set(keySF, [], "game_roles_bonus_setting");
  
     const embed = {"description": SuccessIcon + " Cleared the setting for the **Game Roles** function.",  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
 else
{
 const embed = {"description": ErrorMessage10[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{
 const embed = {"description": ErrorMessage8[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};
      
//Profile Commands

//BuyDescription
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "buydescription "))  {
      
    var NewDescription = message.content.split(peeky.serverData.get(keySF, "prefix") + "buydescription ")[1];

    var UpdatedAmount = NewDescription.length;
    var NewLinesCount = 0;
    var MaxLines = "\n";
    var str = NewDescription;
  
if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {  UpdatedAmount = 0;  };

    for(var i = NewLinesCount = 0; i<str.length; NewLinesCount+=+(MaxLines===str[i++]));
        
if  (peeky.userData.get(key, "Gredit") >= UpdatedAmount)  {
  
if  (NewDescription !== RandomString)  {
  
if  (NewLinesCount < 2)  {
  
    const embed = {"description": SuccessIcon + " You have bought a new description for **" + UpdatedAmount.toLocaleString('en') + " " + GreditIcon + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    peeky.userData.set(key, NewDescription, "Description");
    peeky.userData.math(key, "-", UpdatedAmount, "Gredit");
      
    }
     else 
    {
      const embed = {"description": ErrorMessage2[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
  
  const embed = {"description": SuccessIcon + " You have bought a random description for **" + UpdatedAmount.toLocaleString('en') + " " + GreditIcon + "**.",  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

  peeky.userData.set(key, function_RandomDescription(), "Description");
  peeky.userData.math(key, "-", UpdatedAmount, "Gredit");

};

}
 else
{
 const embed = {"description": ErrorMessage1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//BuyBackground  
if  (message.content.startsWith( peeky.serverData.get(keySF, "prefix") + "buybackground "))  {

for(var i = 1; i <= Banners.length; i++) {
  
if  (message.content == peeky.serverData.get(keySF, "prefix") + "buybackground " + i)  {
  
if  ((i !== 1) && (Banners[i - 1][Banner.Price] !== Exclusive))  {
  
if  (!peeky.userData.get(key, "Inventory").includes(i))  {
  
if  (peeky.userData.get(key, "Gredit") >= Banners[i - 1][Banner.Price])  {
  
    var InfoMessages = [];
    var i = Number(i);
  
    if  (isNaN(peeky.userData.get(key, "Background")) == true)  {
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };

    if  (peeky.userData.get(key, "HorderBadge") == false && (peeky.userData.get(key, "Inventory").length + CustomBackgroundAmount) >= 10)  {
    
        InfoMessages.push(InfoMessage1[0]);
        peeky.userData.set(key, true, "HorderBadge");
      
    };

    if  (peeky.userData.get(key, "MinerBadge") == false && i == 283)  {
    
        InfoMessages.push(InfoMessage1[0]);
        peeky.userData.set(key, true, "MinerBadge");
      
    };

    var RevenueID = Banners[i - 1][Banner.RevenueID];
    if  (RevenueID !== undefined && peeky.userData.has(RevenueID) && message.author.id !== RevenueID && peeky.users.has(RevenueID))  {
        peeky.userData.math(RevenueID, "-", (Banners[i - 1][Banner.Price] / SellMultiplier), "Gredit");
            InfoMessages.push(InfoIcon + " Your purchase has generated **" + (Banners[i - 1][Banner.Price] / SellMultiplier).toLocaleString('en') + " " + GreditIcon + "** of revenue for **" + Function_RemoveFormatting(peeky.users.get(RevenueID).username, "other", true) + "**.");
    };
      
    peeky.userData.math(key, "-", Banners[i - 1][Banner.Price], "Gredit");
    peeky.userData.get(key, "Inventory").push(i);
  
    var embed = {"description": SuccessIcon + " You have bought the **" + Banners[i - 1][Banner.Name] + "** background bought for **" + Banners[i - 1][Banner.Price].toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
    break;
  
} else {
  const embed = {"description": ErrorMessage1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
  break;
};
  
} else { 
  const embed = {"description": ErrorIcon + " You already own that background.", "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

  break;
};
  
} else {
  const embed = {"description": ErrorIcon + " You cannot buy the default and exclusive backgrounds.", "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

  break;
};

};
};

};
  
//CustomBackground
if  (message.content.startsWith( peeky.serverData.get(keySF, "prefix") + "custombackground"))  {
  
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
  
    if  (peeky.userData.get(key, "Gredit") > CustomBackgroundPrice)  {
    
    if  (message.attachments.size > 0)  {
  
        var InfoMessages = [];
  
        if  (peeky.userData.get(key, "PainterBadge") == false)  {

            InfoMessages.push(InfoMessage1[0]);
            peeky.userData.set(key, true, "PainterBadge");

        };
      
        peeky.userData.math(key, "-", CustomBackgroundPrice, "Gredit");
        peeky.userData.set(key, message.attachments.array()[0].url.replace("https", "http"), "Background");

        const embed = {"description": SuccessIcon + " You have bought a **Custom Background** for **" + CustomBackgroundPrice.toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    }
     else
    {
      const embed = {"description": ErrorIcon + " You need to upload a file.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
     else
    {
      const embed = {"description": ErrorMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
     else
    {
      const embed = {"description": ErrorMessage11[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//SetBackground
if  (message.content.startsWith( peeky.serverData.get(keySF, "prefix") + "setbackground "))  {

for (var i = 1; i <= Banners.length; i++) {
  
if  (message.content == peeky.serverData.get(keySF, "prefix") + "setbackground " + i)  {

if  (peeky.userData.get(key, "Inventory").includes(i))  {
  
    var InfoMessages = [];
    var i = Number(i);
  
    if  (peeky.userData.get(key, "FashionBadge") == false && i !== 1)  {

        InfoMessages.push(InfoMessage1[0]);
        peeky.userData.set(key, true, "FashionBadge");    

    };

    if  (isNaN(peeky.userData.get(key, "Background")) == true)  {
        InfoMessages.push(InfoIcon + " You have lost your custom background.");
    };

    peeky.userData.set(key, i, "Background");
  
    const embed = {"description": SuccessIcon + " You have set the **" + Banners[i - 1][Banner.Name] + "** background." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
    break;
  
    }
     else
    { 
  
      const embed = {"description": ErrorMessage5[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    
      break;

    };
  
};
};
};
  
//SellBackground
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "sellbackground "))  {
  
    var i = message.content.split(peeky.serverData.get(keySF, "prefix") + "sellbackground ")[1]; 
    var InfoMessages = []; 
  
if  (i !== AllString)  {
  
if  (isNaN(i) == false)  {  i = Number(i)  };
  
if  (peeky.userData.get(key, "Inventory").includes(i))  {
  
if  (i !== 1)  {
  
    var BackgroundIndex  = peeky.userData.get(key, "Inventory").indexOf(i);
    var FinalPrice       = Banners[i - 1][Banner.Price];
    var i                = Number(i);
  
    if  (FinalPrice = Exclusive)  {
        FinalPrice = 0;
    } else {
        FinalPrice = Math.round(FinalPrice / SellMultiplier);
    };

    peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
    peeky.userData.math(key, "+", FinalPrice, "Gredit");

    if  (i == peeky.userData.get(key, "Background"))  {
        peeky.userData.set(key, 1, "Background");
        InfoMessages.push(InfoMessage2[0]);
    };

    const embed = {"description": SuccessIcon + " You have sold the **" + Banners[i - 1][Banner.Name] + "** background for **" + FinalPrice.toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
    }
     else
    {
      const embed = {"description": ErrorIcon + " You cannot sell the default background.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
      const embed = {"description": ErrorMessage5[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
  if  (peeky.userData.get(key, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).length > 1)  {
  
  if (!ProfileCooldown.has(message.author.id)) {
      
      ProfileCooldown.add(message.author.id);
      setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);
    
      var MaxBackgrounds    = peeky.userData.get(key, "Inventory").length;
      var CurrentBackground = 0;
      var FullPrice         = 0;
    
      peeky.userData.get(key, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).forEach(i => {
          FullPrice += Math.round(Banners[i - 1][Banner.Price] / SellMultiplier);        
      });

      peeky.userData.set(key, [1], "Inventory");
      peeky.userData.math(key, "+", FullPrice, "Gredit");

      if  (isNaN(peeky.userData.get(key, "Background")) == false)  {
          peeky.userData.set(key, 1, "Background");
          InfoMessages.push(InfoMessage2[0]);
      };
      
      const embed = {"description": SuccessIcon + " You have sold all your backgrounds for **" + FullPrice.toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    
  }
   else
  {
    const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  };
        
  }
   else
  {
    const embed = {"description": ErrorIcon + " You cannot sell the default background.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  };

};
  
};

//Open
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "open"))  {  

if  (!ProfileCooldown.has(message.author.id))  {
  
if  (peeky.userData.get(key, "Chests") >= 1)  {

      ProfileCooldown.add(message.author.id);
      setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

      //Loot Variables
      var PeekyCoinsOpened = Math.round(Math.random() * 100);
      var PeekyCoinsSupporter = Math.round(Math.random() * 50);
      var PeekyCoinsUpgraded = Math.round(Math.random() * 25);
      var PeekyCoinsLevel = peeky.userData.get(key, "Level");
      var TotalAmount = PeekyCoinsOpened + PeekyCoinsLevel;
      
      //Other
      var Tokens = message.content.split(peeky.serverData.get(keySF, "prefix") + "open ");
      var InfoMessages = [];
      
      //Supporter
      if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
          TotalAmount += PeekyCoinsSupporter;
      };

      //Upgraded Server
      if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
          TotalAmount += PeekyCoinsUpgraded;
      };

      var ChestAmount   = 0;
      var BadgeProgress = 0;
  
      //Count Rewards
      if  (Tokens[1] == AllString)  {
        
          ChestAmount = peeky.userData.get(key, "Chests");
          var CurrentChest = 0;
          var TotalLoot = 0;

          do {            
            TotalLoot += TotalAmount;
            CurrentChest ++;
            
            peeky.userData.math(key, "+", 1, "GamblerBadge");

            if  (peeky.userData.get(key, "GamblerBadge") == 10)  {

                InfoMessages.push(InfoMessage1[0]);

            };
          } while (CurrentChest < ChestAmount);
          
      }
       else  
      {
        ChestAmount = 1;
        TotalLoot = TotalAmount;
        
        peeky.userData.math(key, "+", 1, "GamblerBadge");
        
        if  (peeky.userData.get(key, "GamblerBadge") == 10)  {

            InfoMessages.push(InfoMessage1[0]);

        };
      };
  
      peeky.userData.math(key, "-", ChestAmount, "Chests");
      peeky.userData.math(key, "+", TotalLoot, "Gredit");

      const embed = {"description": SuccessIcon + " You have opened **" + ChestAmount.toLocaleString('en') + " " + ChestIcon + "** for **" + TotalLoot.toLocaleString('en') + " " + GreditIcon + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
      await message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
  }
   else
  {
    const embed = {"description": ErrorMessage6[0],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  };

}
 else
{
  const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};

//Daily
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "daily"))  {

    let cooldown     = 8.64e+7;
    let lastDaily    = peeky.userData.get(key, "DailyRewarded");
    var InfoMessages = [];
    var CountedVotes = 0;

    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
      
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
  
    var embed = {"description": InfoIcon + " You can come back in" + ` **${timeObj.hours} hours** and **${timeObj.minutes} minutes** for your reward!`,  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    } else {
      
    peeky.userData.set(key, Date.now(), "DailyRewarded");
    peeky.userData.set(key, 0, "VotesToday");
      
    //Reward
    InfoMessages.push(SuccessIcon + " Here's your daily reward, a chest!");
    peeky.userData.math(key, "+", 1, "Chests");

    //Vote DDBL
    await ddbl.getVotes().then(AllVotes => {
      
        var Now = new Date();
        AllVotes = AllVotes.filter(i => i.id == message.author.id && Now - new Date(i.timestamp) <= 86400000);

        if  (AllVotes.length > 0 == true)  {
          
            InfoMessages.push(InfoIcon + " Added a bonus reward for voting on DDB today.");

            peeky.userData.math(key, "+", 1, "Chests");
            CountedVotes ++;

        };
                  
    });

    //Vote BLS
    await bls.getUpvotes().then(AllVotes => {
      
        var Now = new Date();
        AllVotes = AllVotes.filter(i => i.user.id == message.author.id && Now - new Date(i.timestamp) <= 86400000);

        if  (AllVotes.length > 0 == true)  {
          
            InfoMessages.push(InfoIcon + " Added a bonus reward for voting on BLS today.");

            peeky.userData.math(key, "+", 1, "Chests");
            CountedVotes ++;

        };
                  
    });

    //Event Reward
    if  (OngoingEvent == true)  {
        peeky.userData.math(key, "+", 1, "Chests"); 
        InfoMessages.push(InfoIcon + " Added a bonus reward from the event.");   
    };

    //Supporter Reward
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
        peeky.userData.math(key, "+", 1, "Chests");
        InfoMessages.push(InfoIcon + " Added a bonus reward for being a Supporter.");   
    };

    if  (CountedVotes == 0)  {
        InfoMessages.push(InfoIcon + " Vote for me using the **" + peeky.serverData.get(keySF, "prefix") + "help** command to get more rewards!");
    } else {
      if  (peeky.userData.get(key, "VoterBadge") == false)  {
          peeky.userData.set(key, true, "VoterBadge");       
          InfoMessages.push(InfoMessage1[0]);
      };    
    };
      
    const embed = {"description": InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    };

};

//Gift
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "gift "))  {

if  (!ProfileCooldown.has(message.author.id))  {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var DonatedUser = message.mentions.members.first();
    var InfoMessages = [];
    
    if  (DonatedUser && DonatedUser.id !== message.author.id && !DonatedUser.bot)  {

    const key2 = `${DonatedUser.id}`;
        
    if  (peeky.userData.has(key2))  {

        var CommandArray = message.content.split(" ");
      
        var DonatedItem = CommandArray[2];
        var DonatedAmount = Number(CommandArray[3]);
      
    if  (!isNaN(DonatedAmount))  {
          
    if  (DonatedAmount > 0)  {
      
        if  (DonatedItem == "gredit")  {
          
        if  (peeky.userData.get(key, "Gredit") >= DonatedAmount)  {

        if  (DonatedAmount >= 1000 && peeky.userData.get(key, "CharityBadge") == false)  {
      
            peeky.userData.set(key, true, "CharityBadge");
            InfoMessages.push(InfoMessage1[0]);
      
        };

        peeky.userData.math(key, "-", DonatedAmount, "Gredit");
        peeky.userData.math(key2, "+", DonatedAmount, "Gredit");
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + GreditIcon + "** to **" + Function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));  
          
        }
         else
        {
         const embed = {"description": ErrorMessage1[0],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
        
        } else
      
        if  (DonatedItem == "chest")  {
          
        if  (peeky.userData.get(key, "Chests") >= DonatedAmount)  {

        peeky.userData.math(key, "-", DonatedAmount, "Chests");
        peeky.userData.math(key2, "+", DonatedAmount, "Chests");
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + ChestIcon + "** to **" + Function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        }
         else
        {
         const embed = {"description": ErrorMessage6[0],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
        
        } else
    
        if  (DonatedItem == "background")  {
          
        if  (peeky.userData.get(key, "Inventory").includes(DonatedAmount))  {
          
        if  ((DonatedAmount !== 1) && (DonatedAmount !== Exclusive))  {

        var BackgroundIndex = peeky.userData.get(key, "Inventory").indexOf(DonatedAmount);

        peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
        peeky.userData.get(key2, "Inventory").push(DonatedAmount);

        //Set Default Background
        if  (isNaN(peeky.userData.get(key, "Background")) == false && peeky.userData.get(key, "Background") == DonatedAmount)  {
            peeky.userData.set(key, 1, "Background");
            InfoMessages.push(InfoMessage2[0]);
        };

        const embed = {"description": SuccessIcon + " You have given the **" + Banners[DonatedAmount - 1][Banner.Name] + "** background to **" + Function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        }
         else
        {
         const embed = {"description": ErrorIcon + " You cannot gift the default and exclusive backgrounds.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         const embed = {"description": ErrorMessage1[0],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        } else {
          const embed = {"description": ErrorIcon + " Be sure to type the item's name in lowercase.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));          
        };

    }
     else
    {
     const embed = {"description": ErrorMessage9[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
     const embed = {"description": ErrorMessage9[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
      const embed = {"description": ErrorMessage7[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
     const embed = {"description": ErrorMessage3[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
  const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//Inventory
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "inventory"))  {
  
if  (!ProfileCooldown.has(message.author.id)) {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var SomeoneTagged = null;
    var MentionedMember = message.mentions.users.first();
    if  (MentionedMember !== undefined) SomeoneTagged = MentionedMember;
    if  (MentionedMember == undefined) SomeoneTagged = message.author;
    const key2 = `${SomeoneTagged.id}`;
    
    if  (peeky.userData.has(key2))  {
      
    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id);
    var EndString            = "";
    var Badges               = [];
    var BadgesAmount         = null;

    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(StaffRole))       {  Badges.push(ModeratorEmote + " Staff")  };
    if  (peeky.userData.get(key2, "VeteranBadge") == true)                                               {  Badges.push(VeteranEmote + " Veteran")  };
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(SupporterRole))   {  Badges.push(SupporterEmote + " Supporter")  };
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(BoosterRole))     {  Badges.push(BoosterEmote + " Booster")  };
    if  (peeky.userData.get(key2, "BugHunterBadge") == true)                                             {  Badges.push(BugHunterEmote + " Bug Hunter")  };
    if  (peeky.userData.get(key2, "ContributorBadge") == true)                                           {  Badges.push(ContributorEmote + " Contributor")  };
    if  (peeky.userData.get(key2, "CelebratorBadge") == true)                                            {  Badges.push(CelebratorEmote + " Celebrator")  };
    if  (peeky.userData.get(key2, "MovieNighterBadge") == true)                                          {  Badges.push(MovieNighterEmote + " Movie Nighter")  };
    if  (peeky.userData.get(key2, "MedallistBadge") == true)                                             {  Badges.push(MedallistEmote + " Medallist")  };
    if  (peeky.userData.get(key2, "PollerBadge") == true)                                                {  Badges.push(PollerEmote + " Poller")  };
    if  (peeky.userData.get(key2, "VoterBadge") == true)                                                 {  Badges.push(VoterEmote + " Voter")  };
    if  (peeky.userData.get(key2, "PublisherBadge") == true)                                             {  Badges.push(PublisherEmote + " Publisher")  };
    if  (peeky.userData.get(key2, "PartyBadge") == true)                                                 {  Badges.push(PartyEmote + " Party")  };
    if  (peeky.userData.get(key2, "OwnershipBadge") == true)                                             {  Badges.push(OwnershipEmote + " Ownership")  };
    if  (peeky.userData.get(key2, "MinerBadge") == true)                                                 {  Badges.push(MinerEmote + " Miner")  };
    if  (peeky.userData.get(key2, "HorderBadge") == true)                                                {  Badges.push(HorderEmote + " Horder")  };
    if  (peeky.userData.get(key2, "GamblerBadge") >= 10)                                                 {  Badges.push(GamblerEmote + " Gambler")  };
    if  (peeky.userData.get(key2, "CharityBadge") == true)                                               {  Badges.push(CharityEmote + " Charity")  };
    if  (peeky.userData.get(key2, "PainterBadge") == true)                                               {  Badges.push(PainterEmote + " Painter")  };
    if  (peeky.userData.get(key2, "FashionBadge") == true)                                               {  Badges.push(FashionEmote + " Fashion")  };
    if  (Badges.length == 0)  {Badges = ["None"]; BadgesAmount = 0;} else {BadgesAmount = Badges.length};
      
    var FixedBackgrounds = [];
    var InventoryWorth = 0;
    var Current = 0;
      
    peeky.userData.get(key2, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).forEach(banner => {
        InventoryWorth += Banners[banner - 1][Banner.Price] / SellMultiplier;
    });
      
    if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
        FixedBackgrounds.push("Custom `0`");
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };

    peeky.userData.get(key2, "Inventory").slice(0, BackgroundInvLimit).forEach(banner => {
        Current ++;
        FixedBackgrounds.push(Banners[banner - 1][Banner.Name] + " `" + banner + "`");
    });
      
    if  ((peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount) > BackgroundInvLimit)  {  EndString = " and some more.."  };

    message.channel.send("**" + Function_RemoveFormatting(SomeoneTagged.username, "other", true) + "'s Inventory**" + "\n" + peeky.userData.get(key2, "BadgeGredit").toLocaleString('en') + " Gredit Gain, " + peeky.userData.get(key2, "BadgeExp").toLocaleString('en') + " Exp Gain" + "\n\n" + "**" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds (Worth " + InventoryWorth.toLocaleString('en')  + " Gredit)**\n" + FixedBackgrounds.join(", ") + "" + EndString + ".\n\n**" + BadgesAmount + " Badges**\n" + Badges.join(', ') + ".").catch(error => ErrorBag.add(error));

    }
     else 
    {
      const embed = {"description": ErrorMessage7[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
    else {
          const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
         };

};

//Profile
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "profile"))  {
  
if (!ProfileCooldown.has(message.author.id)) {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);
  
    //Permission Checking
    if  (message.guild.me.hasPermission("ATTACH_FILES"))  {
      
    const canvas        = Canvas.createCanvas(500, 300);
    const ctx           = canvas.getContext('2d');
    var   SomeoneTagged = null;
    const StatsColor    = "lightgray"
    var   ProfileColor  = null;
    
    var MentionedMember = message.mentions.users.first();
    if  (MentionedMember !== undefined)  {  SomeoneTagged = MentionedMember  }  else  {  SomeoneTagged = message.author;  };

    //Vars
    const ProfileName        = SomeoneTagged.username;
    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id);
    const key2               = SomeoneTagged.id;
    var   Failed             = false;
      
    if  (peeky.userData.has(key2))  {

    var TheBannerShown = function_GetBackground(key2);

    var background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(key2, DefaultBackground, "Background");  message.channel.stopTyping();  setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);});
      
    if  (Failed == false)  {
      
    message.channel.startTyping();

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    await dominant_color(TheBannerShown, {format: 'hex'}, function(err, color)  {
              
          ProfileColor = color;

          if  (color == "000000")  {
              ProfileColor = LessDark.replace("#", "");            
          };

    });
      
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
    ctx.font = "19px " + DefaultFont;
    ctx.fillText(ProfileName, 83, 25);
      
    //Coins String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Gredit").toLocaleString('en') + " Gredit", 45, 105);
      
    //Chests String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Chests").toLocaleString('en') + " Chests", 45, 140);

    //Backpack String
    if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };
      
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds", 45, 175);
    
        //Description String
    var text = peeky.userData.get(key2, "Description");
    var fontsize = 16;
    var y_position = 50;

    do {

         fontsize--;
         ctx.font=fontsize+"px " + DefaultFont;
       
       } while  (ctx.measureText(text).width > (canvas.width - 83));
      
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
      
    if (text.includes("\n")) {  y_position = 45;  };
        
    ctx.fillText(peeky.userData.get(key2, "Description"), 83, y_position);
      
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

        //Progress Bar
    const progress_bar = await Canvas.loadImage(XPImage);
    const progress_bar_background = await Canvas.loadImage(LightField);
      
    //Badges
    var   BadgeYpos    = 201.5;
    var   BadgeXpos    = -26.5;
    const BadgeXposAmt = 35;
    var   BadgeAmount  = 0;
    const MaxBadges    = 14;
    const BadgeSize    = 25;

        //PEEKY Staff Icon
    if  (BadgeAmount < MaxBadges)  {
    const moderator_icon = await Canvas.loadImage(ModeratorImage);
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(StaffRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(moderator_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
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
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(SupporterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(supporter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

        //Booster Icon
    if  (BadgeAmount < MaxBadges)  {
    const supporter_icon = await Canvas.loadImage(BoosterImage);
    if  (PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(BoosterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(supporter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
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
    const gambler_icon = await Canvas.loadImage(OwnershipImage);
    if  (peeky.userData.get(key2, "OwnershipBadge") == true)  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(gambler_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
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
    ctx.fillRect(63, 253, peeky.userData.get(key2, "Exp") / (ExpNeeded * peeky.userData.get(key2, "Level")) * (canvas.width - 127), 26); //Body
  
        //Avatar
    const avatar = await Canvas.loadImage(SomeoneTagged.displayAvatarURL.replace("https", "http"));
    ctx.shadowOffsetX = 0; 
    ctx.shadowOffsetY = 0;
    ctx.drawImage(avatar, 6, 6, 64, 64);

    //Exp Text
    ctx.font = "22px " + DefaultFont;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.shadowOffsetX = 1; 
    ctx.shadowOffsetY = 1;
    ctx.fillText(peeky.userData.get(key2, "Level").toLocaleString('en'), 34, 275);
    ctx.fillText((peeky.userData.get(key2, "Level") + 1).toLocaleString('en'), canvas.width - 34, 275);

    const attachment = new Discord.Attachment(canvas.toBuffer(), "peeky.png", { quality: 0.1 });
      
    await message.channel.send("", attachment).catch(error => ErrorBag.add(error)).then(async function (m)  {

    if  (!WebsiteCooldowns.has("featuredprofile") && PeekySupportServer.members.get(SomeoneTagged.id) && TheUserWithRole.roles.has(SupporterRole))  {
      
        WebsiteCooldowns.add("featuredprofile");

        var FeaturedDate = new Date();
        var data = "<font size='4' class='headersub'>" + Function_RemoveFormatting(SomeoneTagged.username, "other", true) + "'s profile got featured on " + function_DateFormat(FeaturedDate) + ".</font>  <br><br><br>  <img src='" + m.attachments.array()[0].url + "' class='featuredprofile'>";

        fs.writeFile('public/featured_profile.txt', data, (err) => {
            if (err) console.log(err); 
        });
      
        const embed = {"description": InfoIcon + " The profile has been featured!",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
        console.log("The featured profile has been updated.");
    
        setTimeout(() => {
            WebsiteCooldowns.delete("featuredprofile")
        }, 1800000);   
          
        };

    }).catch(function(err) {  ErrorBag.add(err);  });

    message.channel.stopTyping();
      
    };

    }
    else {
           const embed = {"description": ErrorMessage7[0],  "color": EmbedColor}; 
           message.channel.send({ embed }).catch(error => ErrorBag.add(error));
         };
      
    } else {
      const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    }
    else {
          const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
         };
};

//Music Commands

//Play 
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "play "))  {
  
    if  (!CurrentlyPlaying.has(message.guild.id))  {

    var GivenSong = message.content.split(peeky.serverData.get(keySF, "prefix") + "play ")[1];
    var Type = "Started";
    var DeleteMessage = true;
    var ChoosingMode = true;
  
    if  (GivenSong == RandomString && ChoosingMode == true)  {
        GivenSong = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
        Type = "Random";
        DeleteMessage = false;
        ChoosingMode = false;
    };
  
    if  (GivenSong == "previous" && ChoosingMode == true)  {
    if  (peeky.serverData.has(keySF, "Link") && peeky.serverData.get(keySF, "Link") !== "None")  {    
      
        GivenSong = peeky.serverData.get(keySF, "Link");
        DeleteMessage = false;
        Type = "Previous";
        
    } else {
      const embed = {"description": InfoIcon + " Previous song not found, playing a random song.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            
      GivenSong = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
      Type = "Random";
    };
    };
  
    if  ((GivenSong == "playlist" || GivenSong == peeky.userData.get(key, "PlaylistName").toLowerCase()) && ChoosingMode == true)  {
    if  (peeky.userData.get(key, "Playlist").length > 0)  {
      
        GivenSong = peeky.userData.get(key, "Playlist")[Math.floor(Math.random()*peeky.userData.get(key, "Playlist").length)];
        Type = "Playlist";
        DeleteMessage = false;
        ChoosingMode = false;
      
    } else {
      const embed = {"description": InfoIcon + " Your playlist is empty, playing a random song.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            
      GivenSong = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
      Type = "Random";
    };
    };
      
    if  (!GivenSong.includes("?list="))  {
      
    if  ((GivenSong) && (ytdl.validateURL(GivenSong) == true))  {

    if  (message.member.voiceChannel)  {

        const voiceChannel  = message.member.voiceChannel;
    
    if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT') && voiceChannel.permissionsFor(peeky.user).has('SPEAK'))  {

        await ytdl.getBasicInfo(GivenSong).then(async (info) => {
              
            const Thumbnail  = info.player_response.videoDetails.thumbnail.thumbnails[info.player_response.videoDetails.thumbnail.thumbnails.length - 1].url;
            const Title      = info.title;
            const Author     = info.author.name;
            const Length     = info.length_seconds;
            const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (Length / 60));
            const Started    = new Date();
          
            if  (Length <= 3600000 && Length > 0)  {
              
            await voiceChannel.join().then(async connection => {

            await CurrentlyPlaying.add(message.guild.id);
          
            peeky.serverData.set(keySF, Title, "Title");
            peeky.serverData.set(keySF, Thumbnail, "Thumbnail");
            peeky.serverData.set(keySF, Author, "Author");
            peeky.serverData.set(keySF, LengthDate, "Length");
            peeky.serverData.set(keySF, Started, "Started");
            peeky.serverData.set(keySF, GivenSong, "Link");
              
            if  (DeleteMessage == true)  {
                message.delete().catch(error => ErrorBag.add(error));
            };            

            message.channel.startTyping();
            await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, LengthDate, message.author.id, Type)).catch(error => ErrorBag.add(error));
            message.channel.stopTyping();
              
            if  (message.guild.me.hasPermission("CHANGE_NICKNAME") && ((message.guild.me.nickname !== null && message.guild.me.nickname.startsWith("🎵 ")) || message.guild.me.nickname == null))  {
                message.guild.me.setNickname("🎵 " + "Playing in " + Function_RemoveFormatting(voiceChannel.name, "other", false).slice(0, 14) + " 🎵");
            };

            const stream = ytdl(GivenSong);
            const dispatcher = await connection.playStream(stream);

            dispatcher.on('end', async reason => {
              
            CurrentlyPlaying.delete(message.guild.id);
            voiceChannel.leave();
              
            if  (message.guild.me.hasPermission("CHANGE_NICKNAME") && ((message.guild.me.nickname !== null && message.guild.me.nickname.startsWith("🎵 "))))  {
                message.guild.me.setNickname(null);
            };
              
            const Listeners = voiceChannel.members.filter(m => !m.user.bot).map(m => m.id)
              
            const embed = {"description": InfoIcon + " The song has now finished with **" + Listeners.length + " listeners**.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
              
            if  (Listeners.length >= 5)  {
              
                Listeners.forEach(id => {

                    if  (peeky.userData.has(id) && peeky.userData.get(id, "PartyBadge") == false)  {
                        peeky.userData.set(id, true, "PartyBadge");
                    };

                });

            };
               
            });

            }).catch(error => { 
                const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                ErrorBag.add(error);
            });

            } else {
              const embed = {"description": ErrorIcon + " You cannot play livestreams or songs longer than 1 hour.",  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }).catch(async (error) => {
            ErrorBag.add(error);
          
            const embed = {"description": ErrorIcon + " Failed to get the YouTube video.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        });

    } else {
      const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    } else {
      const embed = {"description": ErrorIcon + " You need to join a voice channel.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
    } else {
      const embed = {"description": ErrorMessage4[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
    } else {
      const embed = {"description": ErrorIcon + " You cannot play a YouTube playlist.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
    }
     else
    {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Current
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "current"))  {
      
    if  (!MusicCmdCooldown.has(message.author.id))  {

    if  (CurrentlyPlaying.has(message.guild.id) && message.guild.me.voiceChannel)  {
      
        MusicCmdCooldown.add(message.author.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.author.id)}, 5000);

        const Title     = peeky.serverData.get(keySF, "Title");
        const Thumbnail = peeky.serverData.get(keySF, "Thumbnail");
        const Author    = peeky.serverData.get(keySF, "Author");
        const Length    = peeky.serverData.get(keySF, "Length");
        const Started   = peeky.serverData.get(keySF, "Started");

        message.channel.startTyping();
        await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, Length, "minutes left", "Current")).catch(error => ErrorBag.add(error));
        message.channel.stopTyping();
        
    } else {
      const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Playlist
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "playlist"))  {
      
    if  (!MusicCmdCooldown.has(message.author.id))  {

    var PlaylistAction = message.content.split(peeky.serverData.get(keySF, "prefix") + "playlist")[1];
  
    if  (PlaylistAction.startsWith(" add "))  {
      
        var PlaylistRequest = PlaylistAction.replace(" add ", "");
      
    if  (PlaylistRequest == "current")  {

        if  (CurrentlyPlaying.has(message.guild.id) && peeky.serverData.get(keySF, "Link") !== "None")  {
          
            peeky.userData.get(key, "Playlist").push(peeky.serverData.get(keySF, "Link"));

            const embed = {"description": SuccessIcon + " Added the current song to your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));                
              
        } else {
          const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
            
    } else
      
    if  (!PlaylistRequest.includes("?list="))  {
      
        if  (ytdl.validateURL(PlaylistRequest) == true)  {
          
            peeky.userData.get(key, "Playlist").push(PlaylistRequest);

            const embed = {"description": SuccessIcon + " Added the song to your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        } else {
          const embed = {"description": ErrorMessage4[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
    
    } else {
      const embed = {"description": ErrorIcon + " You cannot add playlists to your playlist.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    } else 
    if  (PlaylistAction.startsWith(" remove "))  {
      
        var PlaylistRequest = PlaylistAction.replace(" remove ", "");

        if  (peeky.userData.get(key, "Playlist").includes(PlaylistRequest))  {

        var BackgroundIndex = peeky.userData.get(key, "Playlist").indexOf(PlaylistRequest);

        peeky.userData.get(key, "Playlist").splice(BackgroundIndex, 1);  //Remove the background

        const embed = {"description": SuccessIcon + " The song has been removed from your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        console.log(peeky.userData.get(key, "Playlist") + " /// " + BackgroundIndex);
          
        } else {
          const embed = {"description": ErrorIcon + " That song is not in your playlist.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
    
    } else  
    if  (PlaylistAction.startsWith(" rename "))  {
      
        var PlaylistRequest = Function_RemoveFormatting(PlaylistAction.replace(" rename ", ""), "other", true);

        peeky.userData.set(key, PlaylistRequest, "PlaylistName")

        const embed = {"description": SuccessIcon + " Your playlist has renamed to **" + peeky.userData.get(key, "PlaylistName") + "**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    } else
    if  (PlaylistAction.startsWith(" clear"))  {

        const embed = {"description": SuccessIcon + " You have cleared **" + peeky.userData.get(key, "Playlist").length + " songs** from your playlist.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.userData.set(key, [], "Playlist");
      
    } else  {
      
      var MentionedMember = message.mentions.members.first();
      var SomeoneTagged = message.author;
      
      if  (MentionedMember) {
          SomeoneTagged = MentionedMember.user;
      };

      const Playlist = peeky.userData.get(SomeoneTagged.id, "Playlist");
  
      if  (Playlist.length > 0)  {
          var FinalizedPlaylist = function_NumarizeArray(Playlist, ["<", ">"])
      }  else  {
         var FinalizedPlaylist = "The playlist is empty.";
      };

      message.channel.send("**" + Function_RemoveFormatting(SomeoneTagged.username, "other", true) + "'s playlist called " + peeky.userData.get(SomeoneTagged.id, "PlaylistName") + "**" + "\n\n" + FinalizedPlaylist).catch(error => ErrorBag.add(error));
      
    };

    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Skip
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "skip"))  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        CurrentlyPlaying.delete(message.guild.id);
      
        if  (message.guild.me.voiceChannel)  {
            message.guild.me.voiceChannel.leave();
        };
      
    } else {
      const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Moderation Commands

//Mute
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "mute "))  {

if  (message.member.permissions.has("MUTE_MEMBERS"))  {
    
if  (message.guild.me.hasPermission("MANAGE_ROLES"))  {
      
    var MentionedMember = message.mentions.members.first();
    var name = peeky.serverData.get(keySF, "muted_role");
    var RoleExists = message.guild.roles.find(role => role.name == name);

    if  (MentionedMember) {

    if  (RoleExists) {
      
    if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id)  {

        await MentionedMember.addRole(message.member.guild.roles.find(role => role.name == name), "Unmuted by " + message.author.tag + ".").catch(error => {
            const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            ErrorBag.add(error); Failed = true;
        });

        if  (Failed == false)  {
            MentionedMember.user.send("You have been muted in **" + Function_RemoveFormatting(message.guild.name, "other", true) + "** by **" + Function_RemoveFormatting(message.author.username, "other", true) + "**.").catch(error => ErrorBag.add(error));
          
            const embed = {"description": SuccessIcon + " I have muted **" + Function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));  
        };

        }
         else
        {
          const embed = {"description": ErrorIcon + " You cannot mute that user.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
          const embed = {"description": ErrorIcon + " I cannot find a role called **" + name + "**.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
        };

        }
         else
        {
          const embed = {"description": ErrorMessage3[0],  "color": EmbedColor};  
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
  
}
 else
{
 const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
      
}
 else
{
        const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Unmute
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "unmute "))  {

if  (message.member.permissions.has("MUTE_MEMBERS"))  {
    
if  (message.guild.me.hasPermission("MANAGE_ROLES"))  {
      
    var MentionedMember = message.mentions.members.first();
    var name = peeky.serverData.get(keySF, "muted_role");
    var RoleExists = message.guild.roles.find(role => role.name == name);

    if  (MentionedMember) {
  
    if  (RoleExists) {
      
    if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id)  {

        await MentionedMember.removeRole(message.member.guild.roles.find(role => role.name == name), "Unmuted by " + message.author.tag + ".").catch(error => { 
            const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            ErrorBag.add(error); Failed = true;
        });

        if  (Failed == false)  {
            MentionedMember.user.send("You have been unmuted in **" + Function_RemoveFormatting(message.guild.name, "other", true) + "** by **" + Function_RemoveFormatting(message.author.username, "other", true) + "**.").catch(error => ErrorBag.add(error));
          
            const embed = {"description": SuccessIcon + " I have unmuted **" + Function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
          const embed = {"description": ErrorIcon + " You cannot unmute that user.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
          const embed = {"description": ErrorIcon + " I cannot find a role called **" + name + "**.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
        };
            
        }
         else
        {
          const embed = {"description": ErrorMessage3[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
  
}
 else
{
 const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
      
}
 else
{      
  const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//IDBan
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "idban "))  {

    if  (message.member.permissions.has("BAN_MEMBERS")) {
    
    if  (message.guild.me.hasPermission("BAN_MEMBERS"))  {

        var GivenID = message.content.split(peeky.serverData.get(keySF, "prefix") + "idban ")[1];
        var ValidID = 0;

        await peeky.fetchUser(GivenID, true).catch(error => {  ErrorBag.add(error);  ValidID ++;  });
      
        if  (ValidID == 0) {

        if  (!message.guild.members.find(m => m.id == GivenID))  {

            await message.guild.ban(GivenID, {  reason: "ID banned by " + message.author.tag + ".", days: 0  }).catch(error => { 
                  const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  ErrorBag.add(error); Failed = true;
            });

            if  (Failed == false)  {
                const embed = {"description": SuccessIcon + " I have ID banned **" + Function_RemoveFormatting(peeky.users.get(GivenID).username, "other", true) + "** at **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };
            
        }
         else
        {
         const embed = {"description": ErrorIcon + " You cannot ID ban someone inside the server.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         const embed = {"description": ErrorIcon + " You must enter a valid user ID.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    }
     else
    {
     const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
   
    }
     else
    {
     const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Ban
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "ban "))  {

if  (message.member.permissions.has("BAN_MEMBERS"))  {
    
if  (message.guild.me.hasPermission("BAN_MEMBERS"))  {

    var MentionedMember = message.mentions.members.first();
          
if  (MentionedMember && MentionedMember.bannable && !MentionedMember.permissions.has("BAN_MEMBERS")) {

    await message.guild.ban(MentionedMember.user.id, {  reason: " banned by " + message.author.tag + ".", days: 0  }).catch(error => { 
          const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          ErrorBag.add(error); Failed = true;
    });

    if  (Failed == false)  {
        message.guild.ban(MentionedMember, { reason: "Banned by " + message.author.tag + ".", days: 0  }).catch(error => ErrorBag.add(error));
      
        const embed = {"description": SuccessIcon + " I have banned **" + Function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else
    {
      const embed = {"description": ErrorIcon + " You cannot ban that user.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
}
 else
{
 const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
   
}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//purge
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "purge "))  {

    if  (message.member.permissions.has("MANAGE_MESSAGES"))  {
    
    if  (message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        var BulkAmount = message.content.split(peeky.serverData.get(keySF, "prefix") + "purge ")[1];

        if  (isNaN(BulkAmount) == false && BulkAmount > 0 && BulkAmount <= 100) {

            await message.delete().catch(error => ErrorBag.add(error));

            message.channel.bulkDelete(BulkAmount).catch(error => ErrorBag.add(error)).then(() => {

            const embed = {"description":  SuccessIcon + " I have purged **" + BulkAmount + " messages** at **" + Function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            });
          
        }
         else
        {
          
         const embed = {"description": ErrorIcon + " You can only purge between 1 and 100 messages.",  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        
        };
      
    }
     else
    {
     const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
   
}
 else
{
 const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};
  
//Lockdown
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix") + "lockdown "))  {

if  (message.member.permissions.has("MANAGE_CHANNELS")) {
    
if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {

    var GivenRole = message.mentions.roles.first();
          
if  (GivenRole && GivenRole.name !== "@everyone") {
  
    const embed = {"description": SuccessIcon + " The channel is now locked down for everyone except **@­" + Function_RemoveFormatting(GivenRole.name, "other", true) + "**.",  "color": EmbedColor}; 
    await message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
    message.channel.setName(message.channel.name + "_locked", ["Locked by @" + message.author.tag + "."]).catch(error => ErrorBag.add(error));
    
    message.channel.overwritePermissions(message.guild.roles.find(r => r.name == "@everyone"), {  SEND_MESSAGES: false  }).catch(error => ErrorBag.add(error));
    message.channel.overwritePermissions(message.guild.roles.find(r => r.id == GivenRole.id), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));
    message.channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  SEND_MESSAGES: true  }).catch(error => ErrorBag.add(error));

}
 else
{
  const embed = {"description": ErrorMessage3[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};  
  
}
 else
{
 const embed = {"description": PermissionsMessageError3[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
   
}
 else
{      
  const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
};
  
//Prefix
if  (message.content.startsWith(Prefix + "prefix "))  {

if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined) {
  
    var NewPrefix = message.content.split(Prefix + "prefix ")[1].toLowerCase();
  
    peeky.serverData.set(keySF, NewPrefix, "prefix");
  
    const embed = {"description": SuccessIcon + " The server prefix is now **" + NewPrefix + "**.",  "color": EmbedColor}; 
    await message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
 else
{
 const embed = {"description": ErrorMessage8[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
}
 else
{      
  const embed = {"description": PermissionsMessageError2[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
};
  
//MuteRole
if  (message.content.startsWith(Prefix + "muterole "))  {

if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined) {
  
    var MutedRole = message.content.split(Prefix + "muterole ")[1];
    var FixedMutedRole = Function_RemoveFormatting(MutedRole, "role", true);
    var RoleExist = message.guild.roles.find(role => role.name == MutedRole);
    var InfoMessages = [];
  
    if  (!RoleExist && message.guild.me.hasPermission("MANAGE_ROLES")) {

    if  (!RoleCooldown.has(message.guild.id)) {

        RoleCooldown.add(message.guild.id);
        setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

        message.guild.createRole({
            name: MutedRole,
            color: "#943148"
       }).catch(error => ErrorBag.add(error));

        InfoMessages.push(InfoIcon + " Created a role called **" + MutedRole + "** with the default Permissions.");

        }
         else
        {
         InfoMessages.push(CooldownMessage3[0]);
        };

    };

    peeky.serverData.set(keySF, MutedRole, "muted_role");
  
    const embed = {"description": SuccessIcon + " The server's mute role is now called **@­" + MutedRole + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    await message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
 else
{
 const embed = {"description": ErrorMessage8[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

}
 else
{      
  const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

  
};
};  
};
});
  
peeky.login(process.env.BOT_TOKEN).catch(console.error);