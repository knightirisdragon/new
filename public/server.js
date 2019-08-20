//API Tokens
const DiscordToken = process.env.BOT_TOKEN;
const DDBLToken = process.env.DDBL_TOKEN;
const BLSToken = process.env.BLS_TOKEN;
const BFDToken = process.env.BFD_TOKEN;
const DBToken = process.env.DB_TOKEN;
const YoutubeToken = process.env.YT_TOKEN;

//Discord
const Discord = require('discord.js');
const peeky   = new Discord.Client({  disabledEvents: ["TYPING_START"], disableEveryone: true  });

//DDBL
const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI("482945063282802698", DDBLToken);

//BLS
const BotList = require('botlist.space');
const bls     = new BotList({  id: "482945063282802698", botToken: BLSToken  });

//Music
const ytdl_discord = require('ytdl-core-discord');
const search       = require('youtube-search');
const ytdl         = require('ytdl-core');
const opus         = require('node-opus');

//Canvas
const Canvas         = require('canvas');
const request        = require('request');
const dominant_color = require('dominant-color');

//Enmap
const Enmap = require("enmap");
peeky.userData = new Enmap({name: "userData"});
peeky.serverData = new Enmap({name: "serverData"});
peeky.channelData = new Enmap({name: "channelData"});

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

//Miscellaneous
const fs         = require('fs');
const ms         = require('parse-ms');
const node_fetch = require('node-fetch');
const https      = require('https');

//Setting Variables
const Prefix                = "p!";
const EventName             = "PEEKY's Birthday";
const EventStatus           = false;
const MaxServers            = 1000;
const CustomBackgroundPrice = 1000;
const SellMultiplier        = 2.5;
const ExpNeeded             = 125;
const InactiveWipe          = 1728000000;
const ProfileBoosterLength  = 86400000;
const InactiveTime          = (InactiveWipe  / ( 24 * 60 * 60 * 1000 ));
const ProfileBoosterTime    = (ProfileBoosterLength  / ( 60 * 60 * 1000 ));
const DefaultFont           = "Verdana";
const Dark                  = "#36393E";
const LessDark              = "#3f3f3f";
const Light                 = "#424549";
const Blurple               = "#7289DA";
const EmbedColor            = 3093047;
const MinReviewLength       = 200;
const BackgroundInvLimit    = 25;
const BannedWordsLimit      = 10;
const PlaylistLimit         = 10;
const GameRolesLimit        = 10;
const AutoDeleteTime        = 250;

//Sets and Arrays
const ErrorBag               = new Set();
const BannedUsers            = new Array();
const WebsiteCooldowns       = new Set();
const GainCooldown           = new Set();
const ProfileBoosterCooldown = new Set();
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
const ServerAgeCooldown      = new Set();
const ResponseCooldowns      = new Set();  const ResponseCooldownMS = 5000;
const FloodProtectionStrikes = new Array();
const KarmaImages            = new Array();
const CheckedDataCreations   = new Set();
const QueuedSOSMessages      = new Set();
const ActiveMinigames        = new Set();
const CurrentlyPlaying       = new Set();
const CurrentlyStreaming     = new Set();
const ClearedNames           = new Set();
const FailedVoteChecks       = new Set();
const FailedDMs              = new Set();
const LoggedMessages         = new Set();

//Image Assets
const TwitterIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Ftwitter.png?1555574745120";
const RedditIcon    = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Freddit.png?1555575444018";
const InstagramIcon = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Finstagram.png?1555615973963";
const DiscordIcon   = "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdiscord.png?1558635704218";

const DarkField  = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fdarkfield.png?1558421870621";
const LightField = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Flightfield.png?1558421869640";

const DefaultBackground = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground1.png?1558721841453";
const NoBackground      = "http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2FNA%20Background.png?v=1563929199191"
const PrismPattern      = "http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpattern_assets.png?1554545063162";
const CoinImage         = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_coins.png?1543767999542";
const ExpImage          = "https://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fexp.png?v=1564224431507";
const LevelImage        = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_level.png?1541260281702";
const ChestImage        = "http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_chest.png?1541260288051";
const BadgesImage       = "http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbadges.png?v=1564245176155";
const KarmaImage        = "http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fkarma.png?v=1564244903816";
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
const GamerImage        = "http://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2FGamer.png?v=1564176885010";
const EvilImage         = "http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fevil.png?v=1564270118631";
const GoodImage         = "http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fgood.png?v=1564346700581";

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
const GamerEmote        = "<:gamer:604426153524068354>";
const EvilEmote         = "<:evil:604817305247023117>";
const GoodEmote         = "<:good:605138883138551838>";

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
const StaffRole          = "494429609874685983";
const SupporterRole      = "504740473185894400";
const BoosterRole        = "589783851329650690";
const ServerUpgradeRole  = "549190337437106176";
const ProfileBoosterRole = "603249410532442116";
const RedeemRoleGredit   = "505491936401162270";

//Other IDs
const OwnerId              = "108899856889737216";
const PeekyId              = "482945063282802698";
const SupportServer        = "319891596772638744";
const AnnouncementsChannel = "346710479407808524";
const EmojiStorage1        = "493048757286600716";
const WorkshopChannel      = "501130667078189066";
const ServerLogChannel     = "610672449738244102";

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

//Response Messages
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
const ErrorMessage10 = [ErrorIcon + " Make sure the function's name is all in lowercase."];
const ErrorMessage11 = [ErrorIcon + " You need to be a Supporter to do that."];
const ErrorMessage12 = [ErrorIcon + " There are no songs currently playing."];
const ErrorMessage13 = [ErrorIcon + " Something has gone unexpectedly wrong."];
const ErrorMessage14 = [ErrorIcon + " You already own that background."];
const ErrorMessage15 = [ErrorIcon + " You cannot add any more songs to your playlist."];
const ErrorMessage16 = [ErrorIcon + " That background doesn't exist."]
const ErrorMessage17 = [ErrorIcon + " You need to specify the function."];
const ErrorMessage18 = [ErrorIcon + " Please provide arguments for the command."];

const InfoMessage1 = [InfoIcon + " You have earned a new badge."];
const InfoMessage2 = [InfoIcon + " You have set the default background."];

//Small Arrays
const Days                = [  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ];
const BlacklistedWebsites = [  "discord.gg", "discord.io", "discord.me", "twitch.tv", "bit.ly", "goo.gl", "youtu.be", "youtube.com", "twitter.com", "paypal.me", "paypal.com", "selly.gg", "tiny.cc", " evassmant.com", "urlzs.com"   ];
const ImmuneServers       = [  SupportServer, EmojiStorage1, 454933217666007052, 264445053596991498, 330777295952543744, 387812458661937152  ];

//Small Objects
var Banner          = {  Source : 0,  Price : 1 ,  Name : 2 ,  Credit : 3,  RevenueID : 4  };
var StreamOptions   = {  volume: 0.25  };
var SearchOptions   = {  maxResults: 1,  key: YoutubeToken  };

//Large Arrays
const Banners = [

    [DefaultBackground, 0, "Default", "Steam", undefined], //Default
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground2.jpg?1537950866619", 475, "Welcome to NYC", "The Division", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground3.jpg?1535302285990", 400, "Henry the knight", "Kingdom Come Deliverence", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground4.jpg?1535333614451", 425, "Fallout's garage", "Fallout 4", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground5.jpg?1537816491802", 375, "Encounter with Stalkers", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground6.jpg?1535285894346", 275, "The Whalers", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground7.jpg?1535290804866", 400, "Mysterious Man", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground8.jpg?1537816628115", 425, "Escape of noobs", "ROBLOX", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground9.jpg?1537888709532", 375, "The last crusade", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground10.jpg?1535334052918", 450, "The last of them", "The Last of Us", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground11.jpg?1535334267005", 400, "Birch Forest", "Minecraft", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground12.png?1537814782102", 475, "Epidemic", "Rainbow Six Sige", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground13.jpg?1537814934225", 500, "Hostage Situation", "Rainbow Six Sige", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground14.jpg?1537950866487", 350, "The province of Skyrim", "The Elder Scrolls 5 Skyrim", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground15.jpg?1535404090262", 450, "The silent assassin", "Dishonored", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground16.jpg?1535404088759", 425, "Out of this world", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground17.jpg?1537873790199", 400, "First bank robbery", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground18.jpg?1535481872824", 350, "The Saints", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground19.jpg?1535481874193", 350, "Secret burial", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground20.jpg?1535481872090", 400, "Kane and Lynch", "Kane and Lynch Dog Days", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground21.jpg?1535569846831", 350, "Helicopter escape", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground22.jpg?1535990062310", 300, "Tough welcome", "Killing Floor 1", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground23.jpg?1536565142261", 425, "Crashed helicopter", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground24.jpg?1536565143281", 400, "The horde", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground25.png?1536600827686", 425, "Abandoned city", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground26.jpg?1536603983804", 450, "The space", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground27.jpg?1536934121522", 400, "Lake of peace", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground28.jpg?1536934103891", 450, "King Slime", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground29.png?1537047514422", 425, "Gladiator fights", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground30.jpg?1537814773898", 300, "Ambush", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground31.jpg?1537815016132", 400, "Red pattern", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground32.jpg?1537950866063", 450, "Close Cry", "Far Cry 4", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground33.jpg?1537950866386", 425, "Dark knight", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground34.jpg?1539510881741", 300, "Orc genocide", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground35.jpg?1539518504422", 350, "Village raid", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground36.jpg?1539518559631", 420, "M e m e ­ H o u s e", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground37.png?1539543378623", 350, "Supply royale", "Player Unknown's Battle Royale", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground38.png?1539546582730", 300, "Counter attack", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground39.jpg?1539623688927", 400, "Into the battle", "Guild Wars 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground40.jpg?1539879968743", 400, "Cool ferrets", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground41.png?1558777240101", 250, "You right now", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground42.jpg?1539871005083", 475, "Father and daughter", "Dishnored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground43.jpg?1539885633665", 250, "Lighten up forest", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground44.jpg?1539885633627", 250, "Chill lake", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground45.jpg?1539885635308", 425, "Fire forest", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground46.jpg?1540021324998", 350, "Pepe's sky", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground47.jpg?1540027329670", 400, "Lost world", "Fornite", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground48.jpg?1540033276474", 200, "Dragon slayer", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground49.jpg?1540033274127", 275, "Rush through a village", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground50.png?1540650384768", 250, "USSR", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground51.jpg?1540107026526", 350, "Lizard Wizard", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground52.jpg?1540309332233", 250, "Left unturned", "Unturned", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground53.jpg?1540106992532", 400, "Home invasion", "Telltale's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground54.jpg?1540132038895", 425, "Dungeon explorers", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground55.jpg?1540132031244", 400, "Realm of peace", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground56.jpg?1540133298644", 450, "Lonely Stalker", "S.T.A.L.K.E.R.", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground57.png?1540135651911", 450, "Darkest knight", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground58.jpg?1540135654277", 450, "Dragon fighter", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground59.jpg?1540135656509", 475, "Lost giants", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground60.jpg?1540135658192", 450, "Ragnarok", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground61.jpg?1540143872268", 425, "World full of fantasy", "Darksiders 3", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground62.png?1540150284329", 450, "Cyberpunk", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground63.jpg?1540151664457", 475, "Survival of the fittest", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground64.jpg?1540152341562", 475, "New Vegas", "Fallout New Vegas", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground65.jpg?1540153114935", 450, "Dungeon keep", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground66.jpg?1540238680343", 450, "Clear view", "Dying Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground67.jpg?1540238738204", 425, "Silent thief", "Thief", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground68.jpg?1540239775507", 500, "Mighty assassin", "Assassins Creed Odyssey", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground69.png?1540240323226", 450, "Power armor", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground70.jpg?1540240540188", 400, "Horse poker", "A Song of Ice and Fire", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground71.png?1540240626824", 350, "War never changes", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground72.png?1540309268628", 400, "Peace and calm", "Unknown", undefined],  
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground73.jpg?1540328071975", 500, "The last light", "Metro Last Light", undefined],  
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground74.jpg?1540326671899", 450, "Max's race", "Mad Max", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground75.jpg?1540327235631", 475, "Overlook on Mordor", "Shadow of Mordor", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground76.jpg?1540456781085", 450, "Raid ship", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground77.jpg?1540543916309", 425, "Drew crash", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground78.png?1540576871453", 425, "Feared knight", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground79.png?1540577542371", 400, "Bohemian raid", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground80.jpg?1540578179868", 450, "Patient hunter", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground81.jpg?1540584390436", 450, "Training duels", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground82.png?1540912286983", 200, "Goal!!!", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground83.jpg?1540592361761", 425, "The catacombs", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground84.jpg?1540639642216", 350, "Frost troll encounter", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground85.png?1540640316587", 300, "SCP background", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground86.jpg?1540908052580", 250, "The Avengers", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground87.jpg?1540716574310", 400, "Store outbreak", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground88.png?1540724038256", 500, "Dry blood", "Dying Light Bad Blood", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground89.png?1540724452325", 500, "The swarm", "Dying Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground90.jpg?1540724504181", 500, "The Moonlord", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground91.jpg?1540732418318", 475, "Wastelanders", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground92.png?1540732542780", 300, "Shad rage", "Shadiversity", undefined],
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
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground103.png?1540910702105", 350, "Three cowboys", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground104.jpg?1540921032023", 425, "Cursed forest", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground105.png?1540922347614", 450, "Blocky bridge", "Minecraft", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground106.png?1540922585363", 450, "Four survivors", "Left 4 Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground107.png?1540922676410", 450, "Genocide in mordor", "Shadow of Mordor", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground108.jpg?1540922769333", 500, "Robot hunter", "Horizon Zero Dawn", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground109.png?1540922913032", 450, "The big crusade", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground110.jpg?1540923010977", 250, "Imagine Dragons", "Imagine Dragons", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground111.png?1540923189976", 425, "Securing the corner", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground112.png?1540923310896", 425, "Cursed with knowledge", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground113.png?1540923433944", 500, "Outbreak siege", "Rainbow Six Siege", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground114.png?1540923593655", 450, "The Postal dude", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground115.png?1540923783605", 400, "Sunset", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground116.jpg?1540997970518", 425, "Sky planets", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground117.jpg?1540997969729", 425, "Chill view", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground118.jpg?1540998120961", 500, "Sea wyren", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground119.jpg?1540998420614", 475, "Doomed", "DOOM", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground120.png?1540999231874", 350, "Sci-fi guards", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground121.png?1546534600249", 450, "Corvo", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground122.jpg?1541102671802", 425, "Dragon siege", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground123.jpg?1541102674654", 425, "Trade market", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground124.jpg?1541174620357", 250, "LSD", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground125.jpg?1541248189955", 500, "Bloom", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground126.png?1541253186637", 425, "Restaurant raid", "Kane and Lynch Dog Days", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground127.png?1541253652465", 500, "The burial", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground128.png?1541257973255", 300, "Leeeroooyyy", "Hearthstone", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground129.jpg?1541259754960", 250, "Dragonborn badge", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground130.png?1541259841365", 250, "Metro survivor badge", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground131.png?1541260761215", 450, "Fight between lords", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground132.jpg?1541268325643", 450, "Contaminated", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground133.png?1541274217777", 450, "The witcher", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground134.png?1541274466250", 475, "Sacred place", "Dragon Age Inquisition", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground135.png?1541279158138", 425, "Collapsed underground", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground136.png?1541279163436", 450, "The end", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground137.png?1541279940853", 300, "Psycho", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground138.png?1541328912882", 475, "Hight tech security", "PAYDAY The Heist", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground139.png?1541328918999", 450, "Street extraction", "PAYDAY The Heist", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground140.png?1541336274881", 300, "Minecraft mill", "Bersekr21", `266579411162103808`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground141.jpg?1541336309752", 500, "Village defense", "The Elder Scrolls Legends", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground142.jpg?1541336335410", 375, "The high king", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground143.jpg?1541336560436", 500, "Frost curser", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground144.jpg?1541336878452", 425, "Wolf pack", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground145.png?1541337473161", 450, "The walking survivors", "Overkill's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground146.png?1541338501230", 450, "Stone age hunter", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground147.png?1541338504448", 475, "Spec ops", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground148.jpg?1541522367987", 450, "Damned", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground149.jpg?1541522466281", 425, "Primal hunter", "Far Cry Primal", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground150.jpg?1541522585002", 400, "Express", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground151.png?1543134979962", 400, "Kekistan", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground152.png?1543134982640", 425, "Bandit standoff", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground153.png?1543135038818", 475, "Modern warfare", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground154.jpg?1543135041735", 275, "Some ninja idk", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground155.png?1543135044488", 450, "Riding the mountain", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground156.png?1543173013894", 475, "Captain Price", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground157.jpg?1544049162186", 450, "Miraak the dragonborn", "The Elder Scrolls 5 Skyrim", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground158.png?1543854878909", 500, "Living together", "Don't Starve Together", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground159.png?1543854878765", 450, "One man's land", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground160.png?1543940936704", 500, "Metro ruins", "Metro Last Light", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground161.png?1543940992259", 450, "Wumpus' homeland", "Discord", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground162.png?1544301727115", 300, "Deployment", "Counter Strike Global Offensive", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground163.png?1544592035867", 400, "Orbit", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground164.png?1545024402425", 375, "Kovac's community", "How to Survive 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground165.png?1545166008425", 500, "Proper burial", "Kingdom Come Deliverance", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground166.jpg?1545421965715", 450, "Goblin slayer", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground167.png?1545631212316", 425, "Home killer", "Resident Evil 7", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground168.png?1545638575351", 150, "Weird cat", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground169.png?1545779120615", 500, "White masks", "Rainbow Six Siege", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground170.png?1545823111874", 475, "This is a robbery!", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground171.png?1546128297923", 450, "This war of theirs", "This War of Mine", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground172.png?1546253733572", 450, "Breaking the deal", "Mafia 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground173.png?1546253734432", 425, "Safehouse", "PAYDAY 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground174.png?1546253736286", 400, "Project Origin", "Fear 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground175.jpeg?1546258339431", 450, "Mars colonation", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground176.png?1546540411645", 475, "The Contract", "A Hat in Time", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground177.png?1546617365441", 475, "Emily the empress", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground178.png?1546640352552", 475, "Castle far away", "Dragon Age Inquisition", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground179.jpg?1546640356081", 425, "Before the batte", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground180.png?1546901086923", 425, "Standing", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground181.png?1546901088480", 500, "Roof fights", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground182.jpg?1547152599803", 500, "Robot guards", "Dishonored 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground183.jpg?1547555333469", 475, "Connected", "Dragon Age 4", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground184.png?1547809508673", 100, "Snens", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground185.jpg?1547809510214", 350, "Queres puppers", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground186.jpg?1548191942331", 375, "Zombie virus", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground187.png?1548198438043", 400, "Prism pattern", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground188.png?1548440856335", 300, "Gamers arise!", "TheVoiceOverPete", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground189.png?1548787581218", 300, "End stronghold", "Jeracraft", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground190.png?1548787620678", 425, "The hat", "Telltale's The Walking Dead", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground191.png?1549491879583", 250, "Retribution", "SpectreGames", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground192.png?1550519837303", 450, "Sunset view", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground193.png?1550954101975", 300, "OwOcnic", "SickWheeny Nick", `298551254978789378`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground194.png?1551123539987", 425, "Daze", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground195.jpg?1551209003330", 350, "Real view", "vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground196.png?1551481112722", 450, "Revolution", "Homefront Revolution", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground197.png?1551517314470", 500, "Doomsday", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground198.png?1551896626588", 200, "Redline", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground199.png?1551896628681", 450, "Hallway", "Resident Evil 2", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground200.png?1551896635268", 425, "Underground palace", "Undertale", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground201.png?1552129507121", 350, "Dirt", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground202.png?1552129513754", 500, "Freedome", "Grand Theft Auto Online", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground203.png?1552129515227", 375, "This is it Chief", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground204.png?1552129516913", 350, "Boy", "God of War", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground205.png?1552138972456", 275, "PEEKY's old pals", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground206.png?1552138978087", 250, "XXL Plushies", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground207.png?1552151256169", 500, "Jackpot!", "Devil May Cry 5", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground208.png?1552233925577", 150, "Pixelvince", "Pixelvince", `354617102394720266`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground209.png?1552752810447", 200, "FeelsGoodMom", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground210.png?1552809489475", 400, "Airsoft", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground211.png?1552809489603", 400, "Orange pattern", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground212.png?1552809503603", 500, "In the battlefield", "Battlefield 1", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground213.png?1552809504469", 350, "Tom & Jerry's claims", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground214.png?1552941923769", 500, "Adored knight", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground215.png?1552941932967", 250, "Redditor", "Unknown", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground216.jpg?1552969694470", 500, "Que sera, sera", "Mary and Max", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground217.png?1553336264273", 350, "Odd one", "TheOdd1sOut", undefined],
    ["http://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fbackground218.png?1553436376818", 425, "At the club", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground219.png?1553623065418", 425, "Robotics", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground220.png?1554321575443", 500, "The savior psycho", "Borderlands 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground221.png?1554546451654", 400, "The vault hunters", "Borderlands 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground222.png?1554546456700", 450, "Firestorm", "Battlefield 1", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground223.png?1554546446408", 500, "Sleeping shadows", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground224.png?1555012380297", 500, "Zer0", "Borderlands 2", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground225.png?1555147436467", 425, "Dude's caravan", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground226.png?1555147437707", 350, "Blamed skeleton", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground227.png?1555147440060", 325, "Stronghold raid", "AMC's The Walking Dead", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground228.png?1555231021661", 450, "Welcome to Vietnam", "Rising Storm 2 Vietnam", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground229.png?1555231025303", 400, "Devil trigger", "Devil May Cry 5", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground230.png?1555231029488", 325, "Villager camp", "Plobster", `268826232806703106`],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground231.png?1555690400218", 100, "King sheep", "Vojtěch Jílovec", `108899856889737216`],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground232.png?1555690405127", 425, "Contagion", "Contagion", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground233.png?1555690407657", 450, "Notre Dame", "Assassins Creed Unity", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground234.png?1555758393410", 375, "Phantom's force", "Phantom Forces", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground235.png?1555788520771", 250, "No Thanks Incels", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground236.jpg?1555788525534", 425, "Crazy Doggo", "Lola Woudenberg", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground237.jpg?1555788526781", 250, "Isle Of Dogs", "Wes Anderson", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground238.png?1555788529003", 375, "Ghosts", "Phantom Forces", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground239.png?1555881581795", 400, "Pillar man Richard", "Dan Man Jenkins", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground240.png?1555881583428", 425, "Galaxy boy", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground241.png?1556138322772", 350, "Staredown", "E.Y.E.: Divine Cybermancy", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground242.png?1556142651459", 400, "Dead end", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground243.png?1556379776934", 500, "Fires fade", "Dark Souls", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground244.jpg?1556379779436", 400, "The Bay city", "Altered Carbon", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground245.png?1556379786683", 350, "Airport security", "SAS Zombie Assault 3", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground246.png?1556379788689", 475, "New wave", "The Division", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground247.png?1557333122021", 475, "Dragonhearted", "Captainsparklez", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground248.png?1558020522402", 500, "Blocky team", "Minecraft", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground249.png?1558020557790", 425, "Amigos", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground250.png?1558020564397", 425, "Saloon", "Red Dead Redemption 1", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground251.png?1558020569519", 450, "Frost mage", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground252.png?1558020571967", 450, "Last stand", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground253.png?1558020744639", 500, "Skull trooper", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground254.png?1558020748286", 350, "The fire dude", "League of Legends", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground255.png?1558174296475", 450, "Storm Walk", "Ryan Shirley", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground256.png?1558038095405", 425, "Evolved", "Evolve", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground257.png?1558038099146", 450, "Stormy night", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground258.png?1558038101105", 475, "Dahaka", "Prince of Persia", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground259.png?1558038103055", 450, "Floor full of killers", "Killing Floor 2", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground260.png?1558038106758", 325, "Revolution", "We. The Revolution", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground261.png?1558103378145", 450, "Contract delivery", "A Hat in Time", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground262.png?1558103379729", 425, "Ashen", "Ashen", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground263.png?1558103382341", 500, "Roll out!", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground264.png?1558103383792", 475, "The Ghost", "Call of Duty Ghosts", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground265.jpg?1558783572490", 150, "Gun Kid", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground266.jpg?1558783583054", 375, "Sleeping King", "Shrek", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground267.png?1558783596081", 400, "Gaming Pattern", "Discord", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground268.png?1558783610734", 425, "Afterthoughts", "Discord", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground269.png?1558783624153", 375, "Tales of the Borderlands", "Tales from the Borderlands", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground270.png?1558783636471", 475, "Deep in the Shadows", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground271.png?1558783647904", 425, "Stupid little prick named Rick", "AMC's The Walking Dead", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground272.png?1558783659166", 450, "Fallen kingdom", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground273.png?1558783669451", 450, "Why?", "Just Cause", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground274.png?1558783679870", 425, "Toy gang", "To Story 4", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground275.png?1558783691312", 475, "Mad lad", "Mad Max", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground276.png?1558783702786", 450, "Abyss", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground277.png?1558783726173", 425, "Nowadays Rick", "Rick Astley", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground278.png?1558783748699", 500, "Point blank", "Battlefield Hardline", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground279.png?1558783759802", 400, "Abstract pattern", "Unknown", undefined],
    ["http://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fbackground280.png?1558783770529", 450, "Spirit tower", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground281.png?1558874631584", 500, "Isaac's nightmare", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground282.png?1558874666863", 400, "Spiritual butterflies", "Judith Haddad", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground283.png?1558877694122", 10000, "Golden", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground284.png?1558874673658", 500, "World war zombies", "World War Z", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground285.png?1558888970896", 450, "Morning", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground286.png?1558888974600", 475, "Zoink", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground287.png?1558888976922", 500, "Paladin", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground288.png?1558986681527", 475, "Factory", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground289.png?1558986683278", 500, "Firewatch tower", "Firewatch", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground290.png?1558986687005", 500, "On the edge", "Tomb Raider", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground291.png?1558986689511", 450, "Flower field", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground292.png?1558986693656", 375, "Distant island", "Unknown", undefined],
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
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground311.png?1559326557864", 350, "Just joking", "Unknown", undefined],
    ["http://cdn.glitch.com/46947ddd-36b7-479e-8616-87eb256d5e93%2Fbackground312.jpg?1559331433267", 450, "Oiled Down", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground313.png", 500, "Lara Croft", "Shadow of the Tomb Raider", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground314.png", 500, "Servant", "Dark Souls 2", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground315.png", 400, "Bean Gansta", "Killer Bean Animation", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground316.png?v=1559999276673", 375, "Deer sighting", "Luboš Houska", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground317.png?v=1559999302765", 450, "This... is... Minecraft!", "Unknown", undefined],
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
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground331.png?v=1560768909337", 200, "Creeper Buddy", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground332.png?v=1560768910957", 500, "Flare Abyss", "The Division", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground333.png?v=1560777175191", Exclusive, "First Year", "Vojtěch Jílovec", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground334.png?v=1560779898774", 450, "Hype beast", "Counter Strike Global Offensive ", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground335.png?v=1560779904859", 425, "Roblox gang", "ROBLOX", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground336.png?v=1560779909615", 400, "Sanctuary leader", "Joji", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground337.png?v=1560779912403", 350, "Raven buds", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground338.png?v=1560964929302", 500, "Hold Tight", "World War Z", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground339.png?v=1560964938885", 400, "Knight's Camp", "Shovel Knight", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground340.jpg?v=1560964940754", 475, "The Legion", "Watchdogs 3 Legion", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground341.png?v=1563911692560", 250, "Green Shapes", "Gerd Altmann", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground342.png?v=1563911684073", 425, "Aw man", "CaptainSparklez", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground343.png?v=1563911683620", 475, "Surrounded", "Alien Isolation", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground344.png?v=1563911687667", 450, "High-Tech", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground345.png?v=1563911688280", 500, "Midnight breakfast", "Vampyr", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground346.png?v=1563911687954", 450, "Joseph Joestart", "JoJo's Bizarre Adventures Battle Tendency", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground347.jpg?v=1563911682560", 500, "Village discovery", "Minecraft", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground348.png?v=1563922180572", 500, "Water Sheep's memorial", "u/neytirixx", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground349.jpg?v=1563911682933", 500, "Bird's cage", "Resident Evil 7", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground350.png?v=1563922201014", 450, "The beach", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground351.jpg?v=1563911683311", 425, "The plan of attack", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground352.png?v=1563930075225", 500, "Washington survivors", "The Division 2", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground353.png?v=1563930630325", 425, "Roots of a tragedy", "Jojo's Bizarre Adventures Phantom Blood", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground354.png?v=1563930629902", 425, "Farm club", "Stardew Valley", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground355.png?v=1563930633397", 500, "Cthulhu", "Andrée Wallin", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground356.png?v=1563931884386", 400, "PewDiePie's pattern", "PewDiePie", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground357.jpg?v=1563931889909", 400, "Neon ride", "u/mattystoe", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground358.png?v=1563931895048", 450, "Robot spider", "The Surge 2", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground359.png?v=1563964603301", 500, "Gun play", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground360.png?v=1563964903981", 500, "Dragon's return", "The Elder Scrolls Online", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground361.png?v=1563964756492", 500, "The prophecy", "The Elder Scrolls Online", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground362.png?v=1563970489879", 400, "Dragon rider", "Unknown", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground363.png?v=1563983696291", 420, "The inferno", "Endless Legend", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground364.png?v=1564017185333", 150, "Office night", "Five Nights at Freddy's", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground365.png?v=1564058813872", 475, "Joergen's rollercoaster", "u/neytirixx", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground366.png?v=1564058885585", 500, "Dangerous hunt", "Monster Hunters World", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground367.png?v=1564068410313", 300, "Pillar men", "Jojo's Bizarre Adventure Battle Tendency", undefined],
    ["http://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fbackground368.png?v=1564068462711", 350, "Canary", "Unknown", undefined],
    ["http://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fbackground369.png?v=1564222331497", 500, "Dead men", "Kane and Lynch Dead Men", undefined],
    ["http://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fbackground370.png?v=1564225161116", 475, "Journey", "u/BeastScrollGames", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground371.png?v=1564261114754", 500, "Campfire tales", "Unknown", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground372.jpg?v=1564261330942", 425, "Orcs vs. humans", "Unknown", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground373.jpg?v=1564261391413", 450, "The fire sorcerer", "Unknown", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground374.jpg?v=1564346562475", 400, "Startdust battle", "Jojo's Bizarre Adventures Stardust Crusaders", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground375.jpg?v=1564395161731", 450, "Deadra warrior", "The Elder Scrolls V Skyrim", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground376.jpg?v=1564395226382", 400, "Kunětická hora", "Bersekr21", `266579411162103808`],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground377.jpg?v=1564395286909", 425, "Bunny rabbit", "Unknown", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground378.jpg?v=1564447926358", 500, "New contract", "Hitman 2", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground379.jpg?v=1564447989239", 250, "Horse friend", "Unknown", undefined],  
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground380.jpg?v=1564448048338", 425, "Japaneese terrace", "Unknown", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground381.png?v=1564448236674", 400, "Desolate park", "Zach Soza", undefined],
    ["http://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbackground382.jpg?v=1564448921669", 250, "Playful dogs", "Unknown", undefined],
    ["http://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground383.png?v=1565240397152", 500, "Dedicated", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground384.png?v=1565616356300", 500, "Breaking point", "Ghost Recon Breakpoint", undefined],
    ["http://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground385.png?v=1565616359450", 450, "Conflict", "Total War", undefined],
    ["http://cdn.glitch.com/b3d0aad8-d8f7-425f-8098-d1660ab6a43d%2Fbackground386.png?v=1565616365518", 475, "Interrogation", "Ghost Recon Wildlands", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground387.png?v=1565961253024", 400, "Father's pose", "JoJo's Bizarre Adventure Golden Wind", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground388.png?v=1565715181405", 500, "Beyond", "No Man's Sky", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground389.png?v=1565715183258", 425, "Steve hunt", "RobenSikk", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground390.png?v=1565715470915", 500, "Right ahead", "Call of Duty Modern Warfare", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground391.png?v=1565715547975", 450, "Samurai", "u/vrtman", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground392.png?v=1565715555358", 450, "Preloaded", "Borderlands 3", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground393.png?v=1565715558429", 500, "Seeking", "GreedFall", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground394.jpg?v=1565715561043", 300, "Elven kingdom", "Unknown", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground395.png?v=1565715568265", 475, "Three kingdoms", "Total War", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground396.png?v=1565844170105", 475, "Midnight", "u/SnookyZun", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground397.png?v=1565844176033", 450, "Turtle friend", "Jojo's Bizarre Adventures Golden Wind", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground398.jpg?v=1565844185444", 450, "Penguin trip", "Unknown", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground399.png?v=1565844196700", 425, "Quail", "Unknown", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground400.png?v=1565844199887", 450, "Tiger", "Jack Merlin", undefined],
    ["http://cdn.glitch.com/25a353a8-b52c-4952-b9ff-833fcdaee8f2%2Fbackground401.png?v=1565953633386", 500, "Monster of the east", "Fallout New Vegas", undefined],
    ["http://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground402.png?v=1566128627988", 450, "Los thanos", "Harry Osborn", undefined],
    ["http://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground403.png?v=1566128632167", 475, "To the rescue", "Ghost Recond Breakpoint", undefined],
    ["http://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fbackground404.png?v=1566128626627", 225, "Torture dance", "u/Arbitrarium_", undefined],

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
    "https://www.youtube.com/watch?v=Sk-U8ruIQyA"
  
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
    ["https://www.youtube.com/watch?v=Sk-U8ruIQyA", "Blood // Water", "hard"]
  
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

const DrawAndGuess = [
  
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
    "Golfing",
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
    "Fruit"
  
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
  
    ctx.fillText(NameString, 125, 40, canvas.width - 175);
      
    if  (peeky.userData.has(key))  {
    
    //Description String
    var text = peeky.userData.get(key, "Description");
    var y_position = 75;
    ctx.fillStyle = "white";
      
    if (text.includes("\n")) {  y_position = 62.5;  };
    ctx.font = "18px " + DefaultFont;
    ctx.fillText(text, 125, y_position, canvas.width - 175);
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
                //ctx.font = "13px " + DefaultFont;
                ctx.fillText(peeky.users.get(User).username + " has requested a random song from " + peeky.userData.get(User, "PlaylistName") + ".", 15, 310, canvas.width - 30);
            }  else if  (Type == "Random")  {
                ctx.fillText(peeky.users.get(User).username + " has requested a random song.", 15, 310);
            }  else if  (Type == "Previous")  {
                ctx.fillText(peeky.users.get(User).username + " has requested the previous song.", 15, 310);
            }  else if  (Type == "Current")  {
                ctx.fillText("Currently playing with approximately " + function_TimeLeft(Length, "minutes", null) + " minutes left.", 15, 310);
            };

            //Song Name
            ctx.font = "20px " + DefaultFont;
            ctx.fillText(Title, 15, 345, canvas.width - 30);

            return attachment = new Discord.Attachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

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

            var SavedProfile = "<div class='leaderboarditem' id='" + CurrentID + "' style='background-image: url(" + TheBannerShown + ")'>  <b class='leaderboardname'>  <img src='" + CurrentUser.displayAvatarURL + "' class='leaderboardicon'>  " + function_RemoveTags(CurrentUser.tag) + "</b>  <br><br>  <b class='leaderboardstats'>" + currentplace + ". place with " + PlaceInfo + "</b>  </div>";
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

function function_StreamAnnouncements(type, member)  {
                  
    CurrentlyStreaming.add(member.user.id + member.guild.id + "SA2");
    setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SA2")}, 1800000);
    
    const TwitchBanner = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fsa_twitch.png?v=1566236062639";
    const DiscordBanner = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Fsa_discord.png?v=1566236061585";

    if  (type == "twitch")  {

        var GameName   = member.presence.game.name;
        var GameLink   = member.presence.game.url;
        var GameColor  = 6570404;
        var GameBanner = TwitchBanner;
        var GameHost   = "Twitch";

    } else

    if  (type == "discord")  {

        var GameName   = member.presence.game.name;
        var GameLink   = member.presence.game.url;
        var GameColor  = 7506394;
        var GameBanner = DiscordBanner;
        var GameHost   = "Discord";

    };
                  
    return embed = {  "description": "­ \n **Name:** " + GameName + " \n **Link:** " + GameLink + " \n\n ­",  "color": GameColor,  "image": {  "url": GameBanner  },  "author": {  "name": function_RemoveFormatting(member.user.username, "other", true) + " has started live streaming on " + GameHost + "!",  "icon_url": member.user.displayAvatarURL  }  };

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
            event_countdown_bonus: false,
            event_countdown_bonus_setting: 0,
            event_countdown_bonus_id: 0,
            vote_kick_bonus_bonus: false,
            vote_kick_bonus_setting: 10,
            stream_announcements_bonus: false,
            stream_announcements_bonus_setting: "twitch",
            role_saver_bonus: false,
            role_saver_array: [],
            game_roles_bonus: false,
            game_roles_bonus_setting: [],
            nick_saver_bonus: false,
            nick_saver_array: [],
            server_age_bonus: false,
            server_age_bonus_id: null,
            dash_remover_bonus: false
        });
  
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
            spoiler_only_bonus: false,
            flood_protection_bonus_lastdate: null,
            flood_protection_bonus_lastuser: null,
            flood_protection_bonus_lastmsg: null
        });
      
    };
  
};

//Remove HTML Tags
function function_RemoveTags(text)  {
      return text.replace(/(<([^>]+)>)/ig, "");
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
    };

    if  (type == "user")  {
        peeky.userData.set(key, Date.now(), 'lastSeen');
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
                'Authorization': BFDToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {console.log("Failed to post the server count to CBL."); ErrorBag.add(err)});

        //Post Server Counts - BD
        node_fetch(`https://discord.boats/api/v2/bot/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': DBToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {console.log("Failed to post the server count to DB."); ErrorBag.add(err)});
      
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

peeky.on('reconnecting', () => {
	  console.log("PEEKY is now reconnecting.");
});

peeky.on('disconnect', () => {
	  console.log("PEEKY is now disconnected.");
});

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
        Karma: 0,
        Exp: 1,
        Level: 1,
        Chests: 0,
        Badges: 0,
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
        GamerBadge: false,
        EvilBadge: false,
        GoodBadge: false,
      
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
      
    peeky.serverData.set(keySF, message.guild.id, 'GuildID');

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

        //Veteran
    if  (peeky.userData.get(key, "VeteranBadge") == true)  {  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Supporter
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  BadgesAmount ++;  };

        //Booster
    if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(BoosterRole))  {  BadgeGreditAmount += 2;  BadgeExpAmount += 2;  BadgesAmount ++;  };

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
    if  (EventStatus == true)  {
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
    if  (peeky.userData.get(key, "Exp") >= ExpNeeded * peeky.userData.get(key, "Level")) { 
        
        peeky.userData.set(key, 1, "Exp");
        peeky.userData.math(key, "+", 1, "Level");
        peeky.userData.math(key, "+", 1, "Chests");
    
    if  (peeky.serverData.get(keySF, "notifications") == true)  {
        
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
        ctx.fillText(ProfileName, 125, 40, canvas.width - 125);

        //Level Up String
        ctx.font = "18px " + DefaultFont;
        ctx.fillStyle = "lightgreen";
        ctx.fillText("Has reached Level " + peeky.userData.get(key, "Level") + "!", 125, 75);

        //Avatar
        ctx.shadowOffsetX = 0; 
        ctx.shadowOffsetY = 0;
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL.replace("https", "http"));
        ctx.drawImage(avatar, 7, 7, 82, 82);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

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
      "botDesc": "PEEKY is a fancy Discord bot that comes prepared to enhance your Discord servers.",
      "botAvatar": peeky.user.avatarURL,
      "defaultPrefix": Prefix,

      "serverLimit": MaxServers,
      "serverCount": peeky.guilds.size,
      "profileCount": peeky.userData.count,
      "ageCount": function_TimeLeft(peeky.user.createdAt, "days", null),
      "backgroundsCount": Banners.length,

      "eventName": "PEEKY's Birthday",
      "eventStatus": EventStatus,

      "customBackground": CustomBackgroundPrice,
      "sellMultiplier": SellMultiplier,
      "expMultiplier": ExpNeeded,
      "autowipeTime": InactiveWipe,
      "boosterTime": ProfileBoosterLength
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
    var filtered       = peeky.serverData.filter( p => p.GuildID && p.lastSeen && !p.server_Upgraded && !ImmuneServers.includes(p.GuildID) );
    var toRemoveGuilds = filtered.filter(data => rightNow - InactiveWipe > data.lastSeen && !ImmuneServers.includes(data.GuildID));

    toRemoveGuilds.forEach(async data => {
      
        peeky.serverData.delete(data.GuildID);
      
        var Guild = peeky.guilds.get(data.GuildID);
        if  (Guild !== undefined)  {
            if  (Guild.owner)  {
                await function_DirectMessage(Guild.owner.user.id, "I'm leaving your server called **" + Guild.name + "** because of inactivity.");
            };
            Guild.leave();
        };
      
        console.log("I have left an inactive server.");    

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

    const BackgroundList            = [];
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

    peeky.channels.get(WorkshopChannel).fetchMessages({ limit: 50 }).then(async (messages) => {
      
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
    
    var Message = "";
  
    if  (EventStatus == true)  {
        Message = '<div class="messageheader">You can currently participate in the ' + EventName + ' event!</div>';  
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

            ServerList.push("<a href='https://discordapp.com/invite/" + data.server_invite + "'><div class='serveritem' style='background-image: url(" + peeky.guilds.get(data.GuildID).iconURL + ")'>  <b class='servername' value='" + data.GuildID + "'>" + function_RemoveTags(peeky.guilds.get(data.GuildID).name) + "  <br>  " + ServerInfo + "  </b></div></a>");
      
        };
          
    };

    await fs.writeFile('public/server_list.txt', ServerList.join(" "), (err) => {
        if (err) console.log(err);
    });

    console.log("The server list has been updated.");

};

//Server Log
if  (!WebsiteCooldowns.has("serverlog"))  {

    WebsiteCooldowns.add("serverlog");
    setTimeout(() => {WebsiteCooldowns.delete("serverlog")}, 600000);

    var serverloglist = peeky.serverData.filter( p => p.server_upgraded == false && p.GuildID ).array();
    var ServerLogList = [];

    serverloglist.forEach(data =>  {
      
        if  (peeky.guilds.has(data.GuildID))  {
          
            if  (ImmuneServers.includes(data.GuildID))  {} elsse {}

            ServerLogList.push("<div class='serveritem' style='background-image: url(" + peeky.guilds.get(data.GuildID).iconURL + ")'>  <b class='servername' value='" + data.GuildID + "'>" + function_RemoveTags(peeky.guilds.get(data.GuildID).name) + "  <br>  " + function_TimeLeft(peeky.serverData.get(data.GuildID, "lastSeen"), "days", InactiveTime) + " days left" + "  <br>  " + peeky.guilds.get(data.GuildID).members.filter(m => m.user.bot).size + " bots" + "   </b></div>");
            console.log(ServerLogList.length);
          
        };
      
    });

    await fs.writeFile('public/server_log.txt', ServerLogList.join(" "), (err) => {
        if (err) console.log(err);
    });

    console.log("The server log has been updated.");

};
  
//Supporters
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
  
//News
if  (!WebsiteCooldowns.has("news"))  {
      
    WebsiteCooldowns.add("news");
    setTimeout(() => {WebsiteCooldowns.delete("news")}, 600000);

    var NewsList = [];

    peeky.channels.get(AnnouncementsChannel).fetchMessages({ limit: 5 }).then(async (messages) => {
          
    await messages.forEach(m => {
        var Header = m.content.split("\n")[0];
        var Body   = m.content.split("\n").join(" ").replace(Header, "");
        var Image  = [];
        var PrefixImage = "";
        var ImageLink   = PrismPattern;
      
        if  (m.attachments.size > 0 && false == false)  {
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

        //Ber
        if  (guildMemberId == "266579411162103808")  {
            StaffButton.push('<a href="https://twitter.com/Bersekr21" target="_blank">  ' + TwitterBody + '  </a>');
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
      
        var CurrentContact = '<div class="staffwindow" id="' + guildMemberId + '_window" style="background-image: url(' + function_GetBackground(guildMemberId) + '); background-size: cover;  background-repeat: no-repeat;">  <a class="close" onclick="MoreInfo(`none`)">Close</a>  <img class="stafficon_w" src="' + guildMember.user.avatarURL +'">  <b class="staffname_w">' + function_RemoveTags(guildMember.user.username) + '<font color="#7289DA">#' + guildMember.user.discriminator + '</font> </b>  <b class="staffdesc_w">' + function_RemoveTags(peeky.userData.get(guildMemberId).Description) + '</b>  <div class="staffcontacts">' + StaffButton.join("<br>") + '</div>  </div>' + '<div class="container">  <img src=' + '"' + guildMember.user.displayAvatarURL + '" width="200px" height="200px" class="stafficon"' + '>   <b class="description">  <font size="3"> ' + function_RemoveTags(guildMember.user.username) + '  </font>  <br>  <a style="font-size: 10px;" id="' + guildMemberId + '" onclick="MoreInfo(this.id)">Staff Profile</a>  </b>  </div>';  
      
        if  (guildMember.roles.has("574255080069398543"))  {
            DevList.push(CurrentContact);
        };
    
        if  (guildMember.roles.has("574255771840282625"))  {
            ModList.push(CurrentContact);
        };

    };
    });

    await fs.writeFile('public/staff.txt', '<font size="5" class="item_header">Developers of PEEKY</font>  <br>  <div class="inlinediv">  ' + DevList.join(" ") + '  </div>  <font size="5" class="item_header">Moderators of the Support Server</font>  <br>  <div class="inlinediv">  ' + ModList.join(" ") + '  </div>', (err) => {
        if (err) console.log(err);
    });
      
    console.log("The staff have been updated.");

};

//Random Review
if  (!WebsiteCooldowns.has("randomreview"))  {
      
    WebsiteCooldowns.add("randomreview");
    setTimeout(() => {WebsiteCooldowns.delete("randomreview")}, 600000);
  
    node_fetch(`https://ls.terminal.ink/api/v2/bots/${peeky.user.id}`, {
        method: 'GET'
    }).then(response => response.json()).then(async (data) => {
      
    var FilteredReviews = data.data.reviews.filter(r => r.text.length >= MinReviewLength);
      
    var Length = FilteredReviews.length;
    var RandomReview = Math.round(Math.random() * Length);
      
    if  (RandomReview >= Length)  {  RandomReview = 0  };
      
    var DaysOld        = Math.ceil((new Date() - peeky.user.createdAt) / 8.64e7) - 1;
    var ReviewDate     = new Date(FilteredReviews[RandomReview].date);
    var ReviewFullDate = function_DateFormat(ReviewDate);
      
    await fs.writeFile('public/randomreview.txt',  "<font color='#7289DA' size='1'>Review with " + FilteredReviews[RandomReview].rating + " Star rating from " + ReviewFullDate + ".</font>" + "<br>" + " <font color='white' size='3'>" + FilteredReviews[RandomReview].text + "</font>  <br><br>  <center><font color='#7289DA' size='1'>Your review must be atleast " + MinReviewLength + " characters long to show up.</font></center>", (err) => {
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

    await fs.writeFile('public/stats.txt', "<a class='botstats'><font color='#7289DA'>" + peeky.guilds.size + " / " + MaxServers + "</font> Servers</a> <br> <a class='botstats'><font color='#7289DA'>" + peeky.userData.count + "</font> Profiles</a> <br> <a class='botstats'><font color='#7289DA'>" + function_TimeLeft(peeky.user.createdAt, "days", null) + "</font> Days Old</a>", (err) => {
        if (err) console.log(err); 
    });
      
    console.log("The stats have been updated.");
      
};

});

//MISC
peeky.on("guildCreate", async (guild) =>  {

const keySF = `${guild.id}`;
  
if  (peeky.guilds.size > MaxServers)  {
  
    await function_DirectMessage(guild.owner.user.id, "I have left your server because there are no open server slots.");
    guild.leave();

} else {
  
  function_ServerData(keySF);
  
  const embed = {"description": SuccessIcon + " I have joined **" + function_RemoveFormatting(guild.name, "other", true) + "**.",  "color": EmbedColor}; 
  peeky.channels.get(ServerLogChannel).send({ embed });

};

});

peeky.on("guildDelete", async (guild) =>  {
  
const keySF = `${guild.id}`;
  
const embed = {"description": ErrorIcon + " I have left **" + function_RemoveFormatting(guild.name, "other", true) + "**.",  "color": EmbedColor}; 
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
       peeky.userData.set(key, 0, "Bans");
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
      
    function_DirectMessage(member.user.id, peeky.serverData.get(keySF, "server_message_bonus_setting").replace(GuildNameTag, function_RemoveFormatting(member.guild.name, "other", true)).replace(GuildSizeTag, member.guild.members.filter(m => !m.user.bot).size).replace(GuildOwnerTag, member.guild.owner.user.tag).replace(GuildVerificationTag, VerificationLevels[member.guild.verificationLevel]).replace(GuildAcronymTag, member.guild.nameAcronym));

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
        Reasons.push("Banned more than " + peeky.userData.get(key, "Bans") + " times in other servers.");
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
  
    if  (member.guild.me.hasPermission("MANAGE_ROLES"))  {
      
        var name = peeky.serverData.get(keySF, "join_role_bonus_setting");
        var Role = member.guild.roles.find(role => role.name == name);

        if  (Role) {
            member.addRole(Role.id, "Triggered by the Join Role function.").catch(error => ErrorBag.add(error));
          
            console.log("The Join Role function has been triggered in " + member.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");
        };

    };

};
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
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
                
                  member.setRoles(ValidRoles, "Triggered by the Role Saver function.").catch(error => ErrorBag.add(error));
    
                  console.log("The Role Saver function has been triggered in " + member.guild.name + ".");
                  function_UpdateAutowipe(keySF, "server");
                
              };
            
          });  
      };

  };

};
    
//Nickname Saver
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {

    if  (member.guild.me.hasPermission("MANAGE_NICKNAMES"))  {

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
      
        await member.guild.ban(member.id, "Triggered by the Welcome Messages function.").catch(error => {
              ErrorBag.add(error);
              var Failed = true;
        });

        if  (Failed == true)  {
            member.send("**You have been automatically banned for having a possible website advertisment in your username.**  \n  Contact the server owner " + member.guild.owner.user.tag + " to get your ban revoked.").catch(error => ErrorBag.add(error));
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

    if  (member.guild.me.hasPermission("MANAGE_ROLES"))  {
  
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

};
    
//Nickname Saver System
if  (peeky.serverData.get(keySF, "nick_saver_bonus") == true)  {

    if  (member.guild.me.hasPermission("MANAGE_NICKNAMES"))  {
  
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
  
//Store Roles System
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

            const embed = {"description": SuccessIcon + " You have been promoted to **Supporter** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            function_DirectMessage(newMember.user.id, { embed });

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
            function_DirectMessage(newMember.user.id, { embed });

        };

    };

    //Profile Booster
    if  (peeky.userData.has(key))  {

        var HadRole = oldMember.roles.find(r => r.id == ProfileBoosterRole);
        var HasRole = newMember.roles.find(r => r.id == ProfileBoosterRole);

        if  (HadRole == null && HasRole)  {

            peeky.userData.math(key, "+", ExpAmount, "Exp");

            if  (peeky.userData.get(key, "ContributorBadge") == false)  {
                peeky.userData.set(key, true, "ContributorBadge");
                InfoMessages.push(InfoMessage1[0]);
            };

            peeky.userData.set(key, new Date(), "BoosterStart");

            const embed = {"description": SuccessIcon + " You have been awarded a **Profile Booster** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            function_DirectMessage(newMember.user.id, { embed });

        };

    };

    //Gredit
    if  (newMember.roles.has(RedeemRoleGredit))  {
        newMember.removeRole(RedeemRoleGredit).catch(error => {ErrorBag.add(error); Failed = true});

        if  (Failed !== true)  {

            peeky.userData.math(key, "+", 1000, "Gredit");
            peeky.userData.math(key, "+", ExpAmount, "Exp");

            if  (peeky.userData.get(key, "ContributorBadge") == false)  {
                peeky.userData.set(key, true, "ContributorBadge");
                InfoMessages.push(InfoMessage1[0]);
            };

            const embed = {"description": SuccessIcon + " You have been awarded **1,000 " + GreditIcon + "** for your purchase!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            function_DirectMessage(newMember.user.id, { embed });

        };

    }; 

}; 
  
};
});

peeky.on("voiceStateUpdate", async (oldMember, newMember) => {
  
  const member = newMember;
    
  if  (oldMember.voiceChannel && !newMember.voiceChannel)  {
    
      var ChannelMap = oldMember.voiceChannel.members.map(member => member.id);
    
      if  (ChannelMap.length == 1 && ChannelMap.includes(PeekyId))  {
          oldMember.voiceChannel.leave();
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

    if  (channel.guild.me.hasPermission('MANAGE_CHANNELS'))  {

        if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true)  {

            var FinalName = channel.name.replace(/[-]/g, ' ');

            if  (channel.type == "text" && channel.name !== FinalName)  {

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

    if  (channel.guild.me.hasPermission('MANAGE_CHANNELS'))  {

        if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true)  {

            var FinalName = channel.name.replace(/[-]/g, ' ');

            if  (channel.type == "text" && channel.name !== FinalName)  {

                await channel.setName(FinalName, "Triggered by the Dash Remover function.").catch(error => ErrorBag.add(error));
                console.log("The Dash Remover function has been triggered in " + channel.guild.name + ".");
        
                function_UpdateAutowipe(keySF, "server");

            };

        };

    };

};

});

//PRESENCE UPDATE EVENTS
peeky.on("presenceUpdate", async (oldMember, newMember) => {
  
const key   = `${newMember.user.id}`;
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
                 member.addRole(GuildRole.id).catch(error => ErrorBag.add(error));

                 CurrentlyStreaming.add(member.user.id + member.guild.id + "SR");
                 setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SR")}, 1800000);

                 console.log("The Streamer Role function has been triggered in " + member.guild.name + ".");
                 function_UpdateAutowipe(keySF, "server");
            };

            }  else  { 

               if  (HasRole)  {
                   member.removeRole(GuildRole.id).catch(error => ErrorBag.add(error));
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
      
            if  (member.presence.game !== null && member.presence.game.streaming == true)  {

                if  (oldMember.presence.game !== null && oldMember.presence.game.streaming == true)  {
                    var AlreadyStreaming = true;
                };

                if  (AlreadyStreaming !== true)  {

                    const embed = function_StreamAnnouncements("twitch", member);
                    Channel.send({ embed }).catch(error => ErrorBag.add(error));

                    console.log("The Stream Announcements function has been triggered in " + member.guild.name + ".");
                    function_UpdateAutowipe(keySF, "server");

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
        var Role = member.guild.roles.find(r => r.name.toLowerCase() == GameName);

        if  (Role)  {
          
        if  (member.presence.game !== null && member.presence.game.name.toLowerCase() == GameName)  {

            if  (!HasRole && !RoleCooldown.has(member.user.id + member.guild.id))  {
                member.addRole(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
              
                console.log("The Game Roles function has been triggered in " + member.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");
            };   

            RoleCooldown.add(member.user.id + member.guild.id);
            setTimeout(() => {RoleCooldown.delete(member.user.id + member.guild.id)}, RoleCooldownMS);         

        } else { 

          if  (HasRole)  {
                member.removeRole(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
          };

        };
      
        } else {
          
          if  (!RoleCooldown.has(member.guild.id))  {

              member.guild.createRole({
              name: GameName
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
if  (reaction.message.channel.id == WorkshopChannel && user.id == OwnerId)  {
  
    if  (reaction.emoji.name == "🏁")  {

        const embed = {"description": SuccessIcon + " Your submission in the Workshop has been accepted and will be added shortly!",  "color": EmbedColor}; 
        function_DirectMessage(reaction.message.author.id, { embed });
      
        function_DirectMessage(OwnerId, '[NoBackground, ' + reaction.message.content.split('\n')[2].replace("Price: ", "") + ', "' + function_FixCapitalization(reaction.message.content.split("\n")[0].replace("Name: ", "")) + '", "' + reaction.message.content.split("\n")[1].replace("Credit: ", "") + '", ' + undefined + ']');
      
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
        if (peeky.serverData.get(keySF, "dash_remover_bonus") == true)           { var DR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var DR = DisabledIcon};
        if (peeky.serverData.get(keySF, "vote_kick_bonus") == true)              { var VT = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VT = DisabledIcon};
        if (peeky.serverData.get(keySF, "join_role_bonus") == true)              { var JR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var JR = DisabledIcon};
        if (peeky.serverData.get(keySF, "game_roles_bonus") == true)             { var GR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var GR = DisabledIcon};
        if (peeky.serverData.get(keySF, "role_saver_bonus") == true)             { var RS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RS = DisabledIcon};
        if (peeky.serverData.get(keySF, "nick_saver_bonus") == true)             { var NS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var NS = DisabledIcon};
        if (peeky.serverData.get(keySF, "streamer_role_bonus") == true)          { var SR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SR = DisabledIcon};
        if (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)   { var SA2 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA2 = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_age_bonus") == true)             { var SA3 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA3 = DisabledIcon};
        if (peeky.channelData.get(keyCF, "message_log_bonus") == true)           { var ML = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var ML = DisabledIcon};
        if (peeky.channelData.get(keyCF, "image_only_bonus") == true)            { var IO = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var IO = DisabledIcon};
        if (peeky.channelData.get(keyCF, "banned_words_bonus") == true)          { var BW = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var BW = DisabledIcon};
        if (peeky.channelData.get(keyCF, "spoiler_only_bonus") == true)          { var SL = EnabledIcon; EnabledAmount ++; ChannelAmount ++; } else { var SL = DisabledIcon};
        if (peeky.serverData.get(keySF, "notifications") == true)                { var N_ = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var N_ = DisabledIcon};

        if  (reaction.emoji.name == "1⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Prefix** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "prefix") + "`" + "\n\n" +
                                "**Mute Role** " + SettingsIcon + "\n" + "`@" + peeky.serverData.get(keySF, "muted_role") + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Settings** `1/1`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "2⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Welcome Messages** " + WM + "\n" + "`#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting") + "`" + "\n\n" +
                                "**Member Counter** " + MC + "\n" + "`" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "`" + "\n\n" +
                                "**Server Age** " + SA3 + "\n" + "No setting" + "\n\n" +
                                "**Clear Nicknames** " + CN + "\n" + "`" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "`" + "\n\n" +
                                "**Classification Wall** " + CW + "\n" + "`@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "` `#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "`." + "\n\n" +
                                "**Suspicion Alert** " + SA + "\n" + "`" + peeky.serverData.get(keySF, "suspicion_alert_bonus_setting") + " bans`" + "\n\n" +
                                "**Flood Protection** " + FP + "\n" + "No Setting." + "\n\n" +
                                "**Vote Kick** " + VT + "\n" + "`" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes`" + "\n\n" +
                                "**Role Saver** " + RS + "\n" + "No Setting." + "\n\n" +
                                "**Nickname Saver** " + NS + "\n" + "No Setting.",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Functions** `1/2`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
        if  (reaction.emoji.name == "3⃣")  {

            const newEmbed = new Discord.RichEmbed({
                  description:  "**Event Countdown** " + EC + "\n" + "`" + peeky.serverData.get(keySF, "event_countdown_bonus_setting") + "`" + "\n\n" +
                                "**Server Message** " + SM + "\n" + "`" + function_RemoveFormatting(ServerMessage, "sm", true) + "`" + "\n\n" +
                                "**Dash Remover** " + DR + "\n" + "No setting" + "\n\n" +
                                "**Game Roles** " + GR + "\n" + "`" + GRArray + "`" + "\n\n" +
                                "**Join Role** " + JR + "\n" + "`@" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "`" + "\n\n" +
                                "**Stream Announcements** " + SA2 + "\n" + "`#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "`" + "\n\n" +
                                "**Streamer Role** " + SR + "\n" + "`@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "`" + "\n\n" +
                                "**Notifications** " + N_ + "\n" + "No setting",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Foverview_embed.png"  }
            });

            reaction.message.edit("**Server Functions** `2/2`", newEmbed).catch(error => ErrorBag.add(error));

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

            reaction.message.edit("**Channel Functions** `1/1`", newEmbed).catch(error => ErrorBag.add(error));

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
          
            if  (reaction.count >= peeky.serverData.get(keySF, "vote_kick_bonus_setting") && MemberExists.user.id !== PeekyId && reaction.message.guild.me.hasPermission("KICK_MEMBERS") && reaction.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

                await reaction.message.member.send("You have been vote kicked from **" + function_RemoveFormatting(reaction.message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));

                reaction.message.guild.members.get(reaction.message.member.user.id).kick("Triggered by the Vote Kick function.").catch(error => ErrorBag.add(error));   

                reaction.message.clearReactions().catch(error => ErrorBag.add(error));
              
                if  (peeky.serverData.get(keySF, "notifications") == true)  {

                    const embed = {"description": InfoIcon + " **" + function_RemoveFormatting(reaction.message.author.username, "other", true) + "** has been vote kicked with **" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes**.",  "color": EmbedColor};
                    reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                  
                };

                console.log("The Vote Kick function has been triggered in " + reaction.message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");

            } else if (reaction.count == 1)  {

              if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(reaction.message.guild.id + "VK"))  {
         
                  ResponseCooldowns.add(reaction.message.guild.id + "VK");
                  setTimeout(() => {ResponseCooldowns.delete(reaction.message.guild.id + "VK")}, ResponseCooldownMS);
              
                  const embed = {"description": InfoIcon + " **" + function_RemoveFormatting(user.username, "other", true) + "** has started a vote kick against **" + function_RemoveFormatting(reaction.message.author.username, "other", true) + "**.",  "color": EmbedColor};
                  reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                
              };
              
            };
 
        } else {
          const embed = {"description": ErrorIcon + " You cannot start a vote kick against that user, **" + function_RemoveFormatting(user.username, "other", true) + "**.",  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
          reaction.message.clearReactions().catch(error => ErrorBag.add(error));
        };
 
        } else {
          const embed = {"description": ErrorIcon + " Why do you hate me so much, **" + function_RemoveFormatting(user.username, "other", true) + "**?",  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
          
          reaction.message.clearReactions().catch(error => ErrorBag.add(error));
        };

    };

};
  
//Message Log
if  (peeky.channelData.get(keyCF, "message_log_bonus") == true)  {

    if  (!user.bot && reaction.emoji.name == "📌" && reaction.count == 1)  {
      
    if  (!LoggedMessages.has(reaction.message.id))  {
      
    if  (!MessageLogCooldown.has(reaction.message.author.id))  {
        
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
                  
                const embed = {"description": InfoIcon + " **" + function_RemoveFormatting(user.username, "other", true) + "** has logged **" + function_RemoveFormatting(reaction.message.author.username, "other", true) + "**'s message.",  "color": EmbedColor}; 
                reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});
                  
            };

            console.log("The Message Log function has been triggered in " + reaction.message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

    };
              
        reaction.remove(user).catch(error => ErrorBag.add(error));
            
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
            
          const embed = {"description": ErrorIcon + " That message was already logged, **" + function_RemoveFormatting(user.username, "other", true) + "**.",  "color": EmbedColor}; 
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

        const embed = {"description": InfoIcon + " Do you want to send your message to PEEKY's owner?\n" + Hollow + " Type **Accept** in under 30 seconds if you do.",  "color": EmbedColor}; 
        function_DirectMessage(message.author.id, { embed });

        message.channel.awaitMessages(response => response.content.toLowerCase() == "accept", {
          max: 1,
          time: 30000,
          errors: ['time'],
        }).then((collected) => {

            QueuedSOSMessages.delete(message.author.id);

            if  (message.attachments.size > 0) {
                const image = message.attachments.array()[0].url;
                function_DirectMessage(OwnerId, "**" + function_RemoveFormatting(message.author.tag, "other", true), {  files: [image]});
            }
             else
            {
                function_DirectMessage(OwnerId, "**" + function_RemoveFormatting(message.author.tag, "other", true) + ":** " + message.content);
            };

            const embed = {"description": SuccessIcon + " Your message has been successfuly sent to my owner!",  "color": EmbedColor}; 
            function_DirectMessage(message.author.id, { embed });
          
        }).catch(() => {
           QueuedSOSMessages.delete(message.author.id);

           const embed = {"description": ErrorIcon + " Your message was not sent because the time limit has ran out.",  "color": EmbedColor}; 
           function_DirectMessage(message.author.id, { embed });
        });
      
    };

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

    //Ownership Badge
    if  (peeky.userData.get(key, "OwnershipBadge") == false && message.author.id == message.guild.owner.user.id)  {
        peeky.userData.set(key, true, "OwnershipBadge");
    };
  
};
  
//MISCELLANEOUS

//Server Data Checker
if  (!CheckedDataCreations.has(message.guild.id))  {
    
    CheckedDataCreations.add(message.guild.id);
    function_ServerData(keyCF);
  
};
  
//Channel Data Checker
if  (!CheckedDataCreations.has(message.channel.id))  {
    
    CheckedDataCreations.add(message.channel.id);
    function_ChannelData(keyCF);
  
};
    
//Workshop Auto-Management
if  (message.channel.id == WorkshopChannel)  {
  
    if  (message.attachments.size == 1 && message.content.split('\n')[0].startsWith("Name: ") && message.content.split('\n')[1].startsWith("Credit: ") && message.content.split('\n')[2].startsWith("Price: ") && isNaN(message.content.split('\n')[2].replace("Price: ", "")) == false && message.content.toLowerCase().split('\n')[3] == undefined)  {
      
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
    
//Profile Booster Auto-Management
if  (!ProfileBoosterCooldown.has("cooldown"))  {

    ProfileBoosterCooldown.add("cooldown");
    setTimeout(() => {ProfileBoosterCooldown.delete("cooldown")}, 1800000);
  
    peeky.guilds.get(SupportServer).members.filter(m => !m.user.bot && m.roles.has(ProfileBoosterRole)).forEach(m => {
      
        if  (peeky.userData.has(m.user.id, "BoosterStart") && new Date() - new Date(peeky.userData.get(m.user.id, "BoosterStart")) >= ProfileBoosterLength)  {
            m.removeRole(ProfileBoosterRole).catch(error => ErrorBag.add(error));
          
            const embed = {"description": InfoIcon + " Your **Profile Booster** has just expired.",  "color": EmbedColor}; 
            m.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    });

};  
  
//FUNCTIONS
if  (peeky.channelData.has(keyCF) && peeky.serverData.has(keySF) && message.channel.permissionsFor(peeky.user).has('EMBED_LINKS'))  {
  
//Automatic Reactions
if  (peeky.channelData.get(keyCF, "automatic_reactions_bonus") == true)  {
  
    if  ((message.attachments.size > 0 || function_DetectLink(message.content) == true) && !message.author.bot)  {

    if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS' && 'EXTERNAL_EMOJIS'))  {

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
  
//Images Only
if  (peeky.channelData.get(keyCF, "image_only_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES") && message.attachments.size < 1)  {

            message.delete(AutoDeleteTime).catch(error => ErrorBag.add(error));

            if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "IO"))  {

                ResponseCooldowns.add(message.guild.id + "IO");
                setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "IO")}, ResponseCooldownMS);

                const embed = {"description": InfoIcon + " You can only send images in this channel, **" + function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

            };

            console.log("The Images Only function has been triggered in " + message.guild.name + ".");
            function_UpdateAutowipe(keySF, "server");

        };
    };

};
    
//Server Age
if  (peeky.serverData.get(keySF, "server_age_bonus") == true)  {

    if  (!ServerAgeCooldown.has(message.guild.id))  {

        ServerAgeCooldown.add(message.guild.id);
        setTimeout(() => {ServerAgeCooldown.delete(message.guild.id)}, 3600000);

        if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {

            var id        = peeky.serverData.get(keySF, "server_age_bonus_id");
            var channel   = message.guild.channels.find(g => g.id == id);
            var FinalName = "Server Age: " + function_TimeLeft(message.guild.createdAt, "days", null) + " days";

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

        if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {

            var id         = peeky.serverData.get(keySF, "member_counter_bonus_id");
            var Prefix     = peeky.serverData.get(keySF, "member_counter_bonus_setting");
            var channel    = message.guild.channels.find(g => g.id == id);
            var FinalName  = Prefix + ": " + message.guild.members.filter(m => !m.user.bot).size;

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
          
            var FinalName = "Starting in " + FixedTime + " " + LengthName;
          
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

    if  (!message.member.permissions.has('MANAGE_MESSAGES') && message.guild.me.hasPermission('MANAGE_ROLES'))  {

        if  (!message.content.toLowerCase().startsWith(peeky.serverData.get(keySF, "prefix")))  {

            const LastMsgContent = peeky.channelData.get(keyCF, "flood_protection_bonus_lastmsg");
            const LastMsgUser    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastuser");
            const LastMsgDate    = peeky.channelData.get(keyCF, "flood_protection_bonus_lastdate");
            const ThisMsgDate    = Date.now();

            if  (((LastMsgUser == message.author.id) && (ThisMsgDate - LastMsgDate <= 500)) || (message.content == LastMsgContent))  {

            if  (FloodProtectionStrikes.filter(i => i == message.author.id).map(i => "Strike").length >= 2)  {

            const name = peeky.serverData.get(keySF, "muted_role");
            const Role = message.guild.roles.find(role => role.name == name);

            if  (Role && !message.member.roles.has(Role.id))  {

                //function_DirectMessage(message.member.user.id, "You have been muted in **" + function_RemoveFormatting(message.guild.name, "other", true) + "** by the **Flood Protection** function.");

                message.member.addRole(Role.id, "Triggered by the Flood Protection function.").catch(error => ErrorBag.add(error));

                if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "FP"))  {

                    ResponseCooldowns.add(message.guild.id + "FP");
                    setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "FP")}, ResponseCooldownMS);

                    const embed = {"description": InfoIcon + " I have muted **" + message.member.user.username + "** because of the **Flood Protection** function.",  "color": EmbedColor};
                    await message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))}); 

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
                WallList.push(function_RemoveFormatting(guildMember.user.username, "other", true) +  "#" + guildMember.user.discriminator + " " + Tag);
                Tag = "";
            };
            });

            const SupportersAmount = WallList.length;

            if  (SupportersAmount >= 50)  {  EndString = " and " + (SupportersAmount - 50) + " more..."  };
            if  (SupportersAmount == 0)  {  WallList = ["No one."]  };

            Channel.fetchMessages({ limit: 1 }).then(messages => {

            var Message = messages.array()[0];

            if  (Message.id == peeky.serverData.get(keySF, "donor_wall_bonus_id"))  {
              
                var FinalText = "**" + function_RemoveFormatting(message.guild.name, "other", true) + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n\n" + WallList.join("\n") + "" + EndString;

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
  
//Clear Nicknames
if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)  {

    if  (message.guild.me.hasPermission("MANAGE_NICKNAMES") && !message.member.permissions.has("MANAGE_NICKNAMES") && message.member.nickname == null && !message.author.bot)  {

        if  (!ClearedNames.has(message.author.tag))  {

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

                message.member.setNickname(NewNickname, "Triggered by the Clear Nicknames function.").catch(error => ErrorBag.add(error));

                const embed = {"description": InfoIcon + " I have cleared **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s nickname of fancy letters.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

                console.log("The Clear Nicknames function has been triggered in " + message.guild.name + ".");
                function_UpdateAutowipe(keySF, "server");

            };

        };

    };

};

//Banned Words
if  (peeky.channelData.get(keyCF, "banned_words_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES") && peeky.serverData.get(keySF, "banned_words_bonus_setting").some(word => function_RemoveFormatting(message.content.toLowerCase(), "other", false).includes(word)))  {

             message.delete(AutoDeleteTime).catch(error => ErrorBag.add(error));

             if  (peeky.serverData.get(keySF, "notifications") == true && !ResponseCooldowns.has(message.guild.id + "BW"))  {

                 ResponseCooldowns.add(message.guild.id + "BW");
                 setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "BW")}, ResponseCooldownMS);

                 const embed = {"description": InfoIcon + " You cannot say that in here, **" + function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
                 message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

             };

             console.log("The Banned Words function has been triggered in " + message.guild.name + ".");
             function_UpdateAutowipe(keySF, "server");

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

                         const embed = {"description": InfoIcon + " You have to mark your image as a spoiler, **" + function_RemoveFormatting(message.author.username, "other", true) + "**.",  "color": EmbedColor}; 
                         message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete(10000).catch(error => ErrorBag.add(error))});

                     };

                     console.log("The Spoiler Lock function has been triggered in " + message.guild.name + ".");
                     function_UpdateAutowipe(keySF, "server");

                };
              
            };
          
        };
      
    };
  
};
  
};

//COMMANDS
if  (!message.webhookID && !message.author.bot && !BannedUsers.includes(message.author.id) && message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES' && 'EMBED_LINKS'))  {
  
//Mention Commands
  
//Help
if  ((message.mentions.members.first() && message.mentions.members.first().id == PeekyId) || (message.content == peeky.serverData.get(keySF, "prefix") + "help"))  {
    
    const embed = {  "description": 
                     "**Website** [[Open]](https://peeky.glitch.me/)\nYou can visit the website to vote, read tutorials, browse the backgrounds, view the leaderboard and pretty much everything PEEKY related." + 
                     "\n\n**Store** [[Open]](https://peeky.glitch.me/store.html) [[Checkout]](https://donatebot.io/checkout/" + SupportServer + ")\nYou can support PEEKY by purchasing some neat items from the store!" +
                     "\n\n**Support Server** [[Join]](https://peeky.glitch.me/server.html)\nYou can join the Support Server for important announcements, assistance with the bot, giveaways and much more!" +
                     "\n\n**Bot Invite** [[Add]](https://peeky.glitch.me/invite.html)\nYou can add PEEKY to your server and get all the features for free and under a minute!" +
                     "\n\n**Server Prefix: ** " + peeky.serverData.get(keySF, "prefix"),
                     "image": {  "url": "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fnew_header.png?1553884542855"  },
                     "color": 7506394 
    };
  
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
};
  
//Prefixed Commands
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix")))  {

var CommandName = message.content.replace(peeky.serverData.get(keySF, "prefix"), "");

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
    const embed = {"description": PermissionsMessageError1[0],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//EventRewards
if (CommandName == "eventrewards")  {
  
    if  (EventStatus == true)  {
      
        if  (peeky.userData.get(key, "CelebratorBadge") == false)  {
      
            peeky.userData.set(key, true, "CelebratorBadge");
            peeky.userData.get(key, true, "Inventory").push(333);

            const embed = {"description": SuccessIcon + " You have received the rewards for the **" + EventName + "** event!"
                                          + "\n\n" + InfoIcon + " The **" + Banners[333 - 1][Banner.Name] + "** background."
                                          + "\n\n" + InfoIcon + " The **Celebrator** badge.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));          
          
        };
      
    };
  
};

//Upgrade
if (CommandName.startsWith("upgrade"))  {

    const PeekySupportServer = peeky.guilds.get(SupportServer);
    const TheUserWithRole    = PeekySupportServer.members.get(message.author.id);
    var   Failed             = false;

    if  (PeekySupportServer.members.get(message.author.id))  {

    //Server Upgrade
    if  (TheUserWithRole.roles.has(ServerUpgradeRole) && peeky.serverData.get(keySF, "server_upgraded") == false)  {
        TheUserWithRole.removeRole(ServerUpgradeRole).catch(error => {ErrorBag.add(error); Failed = true});

        if  (Failed == false)  {
            
            peeky.serverData.set(keySF, true, "server_upgraded")
            peeky.userData.math(key, "+", 1, "UpgradedServers");
          
            const embed = {"description": SuccessIcon + " This server is now upgraded!",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.channels.get("319891596772638744").send("**" + function_RemoveFormatting(message.author.tag, "other", true) + "** has upgraded **" + function_RemoveFormatting(message.guild.owner.user.tag, "other", true) + "**'s server called **" + function_RemoveFormatting(message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));
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
      
//Overview
if (CommandName == "overview")  {
  
    if  (!OverviewCooldown.has(message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {

            OverviewCooldown.add(message.guild.id);
            setTimeout(() => {OverviewCooldown.delete(message.guild.id)}, 10000);

            const embed = {"description": "**Overview Menu**" + "\n\n" + "1⃣ Server Settings" + "\n\n" + "2⃣ Server Functions `[1/2]`" + "\n\n" + "3⃣ Server Functions `[2/2]`" + "\n\n" + "4⃣ Channel Functions",  "color": EmbedColor}; 
            await message.channel.send({ embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                  peeky.userData.set(key, m.id, "OverviewID");
                  await m.react("1⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("2⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("3⃣").catch(error => {ErrorBag.add(error)});
                  await m.react("4⃣").catch(error => {ErrorBag.add(error)});

            }).catch(error => {ErrorBag.add(error)});
          
        };

    }
     else 
    {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
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

    var InfoMessages = [];
    var ManageChannels = false;
    var ManageRoles = false;
  
    if  (message.guild.me.hasPermission("MANAGE_CHANNELS"))  {
        ManageChannels = true;  
    };
  
    if  (message.guild.me.hasPermission("MANAGE_ROLES"))  {
        ManageRoles = true;
    };
      
//Toggle Automatic Reactions
if  (FunctioName == "automatic reactions")  {
        
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
      
    if  (ManageChannels == true)  {

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

    if  (ManageChannels == true)  {

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
      
    if  (ManageRoles == true)  {

    RoleCooldown.add(message.guild.id);
    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
    
    message.guild.createRole({
    name: name,
    color: Blurple
    }).catch(error => ErrorBag.add(error));
      
    InfoMessages.push(InfoIcon + " Created a role called **" + name + "** for the **Join Role** function.");

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
if  (FunctioName.startsWith("images only"))  {

    if(peeky.channelData.get(keyCF, "image_only_bonus") == true) {peeky.channelData.set(keyCF, false, "image_only_bonus");}
    else peeky.channelData.set(keyCF, true, "image_only_bonus");
      
    if  (peeky.channelData.get(keyCF, "image_only_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Images Only** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Dash Remover
if  (FunctioName.startsWith("dash remover"))  {

    if(peeky.serverData.get(keySF, "dash_remover_bonus") == true) {peeky.serverData.set(keySF, false, "dash_remover_bonus");}
    else peeky.serverData.set(keySF, true, "dash_remover_bonus");
      
    if  (peeky.serverData.get(keySF, "dash_remover_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Dash Remover** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
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

    if  (ManageChannels == true)  {

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

    if  (ManageChannels == true)  {

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

    await message.guild.createChannel(name, { type: 'voice', reason: "Channel created by @" + message.author.tag + " through a function." })
    .then(async function (channel)  {
         peeky.serverData.set(keySF, channel.id, "server_age_bonus_id");
         await channel.overwritePermissions(message.guild.roles.find(r => r.name == '@everyone'), {  CONNECT: false  }).catch(error => ErrorBag.add(error));
         await channel.overwritePermissions(message.guild.members.find(r => r.id == PeekyId), {  CONNECT: true  }).catch(error => ErrorBag.add(error));
    }).catch(function(err) {  ErrorBag.add(err);  });     
      
    InfoMessages.push(InfoIcon + " Created a channel called **" + name + "** for the **Server Age** function.");
    
    };
    
    }
     else
    {
     const embed = {"description": CooldownMessage2[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
    };
      
    if  (peeky.serverData.get(keySF, "server_age_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Server Age** function has been **"  + StatusString + "**."+ "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
    
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
if  (FunctioName.startsWith("notifications"))  {
        
    if(peeky.serverData.get(keySF, "notifications") == true) {peeky.serverData.set(keySF, false, "notifications")}
    else peeky.serverData.set(keySF, true, "notifications");

    if  (peeky.serverData.get(keySF, "notifications") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Notifications** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Game Roles
if  (FunctioName.startsWith("game roles"))  {
        
    if(peeky.serverData.get(keySF, "game_roles_bonus") == true) {peeky.serverData.set(keySF, false, "game_roles_bonus")}
    else peeky.serverData.set(keySF, true, "game_roles_bonus");

    if  (peeky.serverData.get(keySF, "game_roles_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Game Roles** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Clear Nicknames
if  (FunctioName.startsWith("clear nicknames"))  {
        
    if(peeky.serverData.get(keySF, "clear_nicknames_bonus") == true) {peeky.serverData.set(keySF, false, "clear_nicknames_bonus");}
    else peeky.serverData.set(keySF, true, "clear_nicknames_bonus");
      
    if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true) {var StatusString = "enabled"} else {var StatusString = "disabled"};
    const embed = {"description": SuccessIcon + " The **Clear Nicknames** function has been **"  + StatusString + "**.",  "color": EmbedColor}; 
    
    message.channel.send({ embed })
    .catch(error => ErrorBag.add(error));

}
  
else

//Toggle Suspicion Alert
if  (FunctioName.startsWith("suspicion alert"))  {
        
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
      
    if  (ManageRoles == true)  {

    RoleCooldown.add(message.guild.id);
    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);
      
    message.guild.createRole({
    name: name,
    color: "#6441A4"
    }).catch(error => ErrorBag.add(error));
      
    InfoMessages.push(InfoIcon + " Created a role called **" + name + "** for the **Streamer Role** function.");

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
  
}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[0],  "color": EmbedColor}; 
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
      
//Set Welcome Messages
if  (FunctioName.startsWith("welcome messages "))  {

    var ChannelName = CommandName.split("welcome messages ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);
    peeky.serverData.set(keySF, FixedChannelName, "welcome_messages_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Welcome Messages** setting has been set to **#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting")+ "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
}
  
else

//Set Join Role
if  (FunctioName.startsWith("join role "))  {
    
    var RoleName = CommandName.split("join role ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "join_role_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Join Role** setting has been set to **@" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Streamer Role
if  (FunctioName.startsWith("streamer role "))  {
    
    var RoleName = CommandName.split("streamer role ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "streamer_role_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Streamer Role** setting has been set to **@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Automatic Reactions
if  (FunctioName.startsWith("automatic reactions "))  {

    var ReactionName = CommandName.split("automatic reactions ")[1];
    var FixedReactionName = function_RemoveFormatting(ReactionName, "other", true);
    peeky.serverData.set(keySF, FixedReactionName, "automatic_reactions_bonus_setting");
    
    const embed = {"description": SuccessIcon + " The **Automatic Reactions** setting has been set to **:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:** and **:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Classification Wall
if  (FunctioName.startsWith("classification wall "))  {

    var ChannelName = CommandName.split("classification wall ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(ChannelName, "role"), "donor_wall_bonus_setting", true);
    peeky.serverData.set(keySF, function_RemoveFormatting(ChannelName, "channel") + "s", "donor_wall_bonus_channel", true);

    const embed = {"description": SuccessIcon + " The **Classification Wall** setting has been set to **#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "** and **@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
      
//Set Member Counter
if  (FunctioName.startsWith("member counter "))  {

    var CounterName = CommandName.split("member counter ")[1];
      
    peeky.serverData.set(keySF, function_RemoveFormatting(CounterName, "other"), "member_counter_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Member Counter** setting has been set to **" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Event Countdown
if  (FunctioName.startsWith("event countdown "))  {

    var Timestamp = CommandName.split("event countdown ")[1];

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

    var GivenMinutes = CommandName.split("spoiler lock ")[1];

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
      
//Set Suspicion Alert
if  (FunctioName.startsWith("suspicion alert "))  {

    var BanAmount = CommandName.split("suspicion alert ")[1];

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

    var VoteAmount = CommandName.split("vote kick ")[1];

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
    
    var ChannelName = CommandName.split("message log ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "message_log_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Message Log** setting has been set to **#" + peeky.serverData.get(keySF, "message_log_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Message Log
if  (FunctioName.startsWith("stream announcements "))  {

    var ChannelName = CommandName.split("stream announcements ")[1];
    var FixedChannelName = function_RemoveFormatting(ChannelName, "channel", true);

    peeky.serverData.set(keySF, FixedChannelName, "stream_announcements_bonus_setting");

    const embed = {"description": SuccessIcon + " The **Stream Announcements** setting has been set to **#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Set Clear Nicknames
if  (FunctioName.startsWith("clear nicknames "))  {

    var NewSetting = CommandName.split("clear nicknames ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(NewSetting, "other"), "clear_nicknames_bonus_setting", true);

    const embed = {"description": SuccessIcon + " The **Clear Nicknames** setting has been set to **" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "**.",  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

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

        const embed = {"description": SuccessIcon + " The **Server Message** setting has been set to **" + ServerMessagePreview + FixedMsgEnd + "**." + TagString,  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Banned Words
if  (FunctioName.startsWith("banned words "))  {
  
if  (peeky.serverData.get(keySF, "banned_words_bonus_setting").length < BannedWordsLimit)  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("banned words ")[1].toLowerCase(), "other", true);
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

    var ReceivedArray = function_RemoveFormatting(CommandName.split("game roles ")[1], "other", true);
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
  
}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[0],  "color": EmbedColor}; 
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

}
 else if (FunctioName == "")
{
 const embed = {"description": ErrorMessage17[0],  "color": EmbedColor}; 
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

                const embed = {"description": SuccessIcon + " You have bought a new description for **" + UpdatedAmount.toLocaleString('en') + " " + GreditIcon + "**.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                peeky.userData.set(key, CommandArgument, "Description");
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
  
}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//BuyBackground  
if  (CommandName.startsWith("buybackground"))  {

    var Failed = true;
  
    for(var i = 1; i <= Banners.length; i++)  {

        if  (message.content == peeky.serverData.get(keySF, "prefix") + "buybackground " + i)  {
          
            Failed = false;

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
                                InfoMessages.push(InfoIcon + " Your purchase has generated **" + (Banners[i - 1][Banner.Price] / SellMultiplier).toLocaleString('en') + " " + GreditIcon + "** of revenue for **" + function_RemoveFormatting(peeky.users.get(RevenueID).username, "other", true) + "**.");
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
                  const embed = {"description": ErrorMessage14[0], "color": EmbedColor}; 
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
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[0], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//CustomBackground
if (CommandName.startsWith("custombackground"))  {
  
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
if (CommandName.startsWith("setbackground"))  {

    var Failed = true;

    for (var i = 1; i <= Banners.length; i++)  {

        if  (message.content == peeky.serverData.get(keySF, "prefix") + "setbackground " + i)  {
          
            Failed = false;

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
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[0], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//SellBackground
if (CommandName.startsWith("sellbackground"))  {
  
    var i = CommandName.split("sellbackground ")[1];
  
if  (i !== AllString)  {

    for (var i = 1; i <= Banners.length; i++)  {
      
        if  (message.content == peeky.serverData.get(keySF, "prefix") + "sellbackground " + i)  {
            
            Failed = false;

            if  (peeky.userData.get(key, "Inventory").includes(i))  {

                if  (i !== 1)  {

                    var BackgroundIndex  = peeky.userData.get(key, "Inventory").indexOf(i);
                    var FinalPrice       = Banners[i - 1][Banner.Price];
                    var i                = Number(i);
                    var InfoMessages = [];

                    if  (FinalPrice == Exclusive)  {
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
                  
                  break;
                };

            }
             else
            {
              const embed = {"description": ErrorMessage5[0],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  
              break;
            };            
          
        };      
      
    };
  
    if  (Failed == true)  {
        const embed = {"description": ErrorMessage16[0], "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
  if  (peeky.userData.get(key, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).length > 1)  {
  
      if (!ProfileCooldown.has(message.author.id))  {

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
if (CommandName.startsWith("open ") || CommandName == "open")  {

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
          var Tokens = CommandName.split("open ");
          var InfoMessages = [];

          //Supporter
          if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(SupporterRole))  {
              TotalAmount += PeekyCoinsSupporter;
          };

          //Upgraded Server
          if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
              TotalAmount += PeekyCoinsUpgraded;
          };

          //Profile Booster
          if  (peeky.guilds.get(SupportServer).members.get(message.author.id) && peeky.guilds.get(SupportServer).members.get(message.author.id).roles.has(ProfileBoosterRole))  {
              TotalAmount += PeekyCoinsOpened;
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
if (CommandName == "daily")  {

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
                  
    }).catch(err => ErrorBag.add(err));

    //Vote BLS
    await bls.getUpvotes().then(AllVotes => {
      
        var Now = new Date();
        AllVotes = AllVotes.filter(i => i.user.id == message.author.id && Now - new Date(i.timestamp) <= 86400000);

        if  (AllVotes.length > 0 == true)  {
          
            InfoMessages.push(InfoIcon + " Added a bonus reward for voting on BLS today.");

            peeky.userData.math(key, "+", 1, "Chests");
            CountedVotes ++;

        };

    }).catch(err => ErrorBag.add(err));

    //Event Reward
    if  (EventStatus == true)  {
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
if (CommandName.startsWith("gift"))  {
  
    var CommandArgument = CommandName.split("gift")[1];
      
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");
  
if  (!ProfileCooldown.has(message.author.id))  {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var DonatedUser = message.mentions.members.first();
    var InfoMessages = [];
    
    if  (DonatedUser && DonatedUser.id !== message.author.id && !DonatedUser.bot)  {

    const key2 = `${DonatedUser.id}`;
        
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
            InfoMessages.push(InfoMessage1[0]);
      
        };

        peeky.userData.math(key, "-", DonatedAmount, "Gredit");
        peeky.userData.math(key2, "+", DonatedAmount, "Gredit");
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + GreditIcon + "** to **" + function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
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
  
        const embed = {"description": SuccessIcon + " You have given **" + DonatedAmount.toLocaleString('en') + " " + ChestIcon + "** to **" + function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
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
          
        if  (!peeky.userData.get(key, "Inventory").includes(i))  {

            var BackgroundIndex = peeky.userData.get(key, "Inventory").indexOf(DonatedAmount);

            peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
            peeky.userData.get(key2, "Inventory").push(DonatedAmount);

            //Set Default Background
            if  (isNaN(peeky.userData.get(key, "Background")) == false && peeky.userData.get(key, "Background") == DonatedAmount)  {
                peeky.userData.set(key, 1, "Background");
                InfoMessages.push(InfoMessage2[0]);
            };

            const embed = {"description": SuccessIcon + " You have given the **" + Banners[DonatedAmount - 1][Banner.Name] + "** background to **" + function_RemoveFormatting(DonatedUser.user.username, "other", true) + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        }
         else
        {
         const embed = {"description": ErrorMessage14[0],  "color": EmbedColor}; 
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
  
}
 else if (CommandArgument == "")
{
  const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};
  
};
  
//Inventory
if  (CommandName.startsWith("inventory ") || CommandName == "inventory")  {
  
if  (!ProfileCooldown.has(message.author.id)) {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

    var SomeoneTagged = null;
    var MentionedMember = message.mentions.users.first();
    if  (MentionedMember !== undefined) SomeoneTagged = MentionedMember;
    if  (MentionedMember == undefined) SomeoneTagged = message.author;
    const key2 = `${SomeoneTagged.id}`;
    
    if  (peeky.userData.has(key2))  {
      
    //Badges
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
    if  (peeky.userData.get(key2, "EvilBadge") == true)                                                  {  Badges.push(EvilEmote + " Evil")  };
    if  (peeky.userData.get(key2, "GoodBadge") == true)                                                  {  Badges.push(GoodEmote + " Good")  };
    if  (peeky.userData.get(key2, "OwnershipBadge") == true)                                             {  Badges.push(OwnershipEmote + " Ownership")  };
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

    message.channel.send("**" + function_RemoveFormatting(SomeoneTagged.username, "other", true) + "'s Inventory**" + "\n" + peeky.userData.get(key2, "BadgeGredit").toLocaleString('en') + " Gredit Gain, " + peeky.userData.get(key2, "BadgeExp").toLocaleString('en') + " Exp Gain" + "\n\n" + "**" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds (Worth " + InventoryWorth.toLocaleString('en')  + " Gredit)**\n" + FixedBackgrounds.join(", ") + "" + EndString + ".\n\n**" + BadgesAmount + " Badges**\n" + Badges.join(', ') + ".").catch(error => ErrorBag.add(error));

    }
     else 
    {
      const embed = {"description": ErrorMessage7[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
 else
{
 const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Profile
if  (CommandName.startsWith("profile ") || CommandName == "profile")  {
  
if (!ProfileCooldown.has(message.author.id))  {
      
    ProfileCooldown.add(message.author.id);
    setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);
  
    if  (message.channel.permissionsFor(peeky.user).has('ATTACH_FILES'))  {
      
    const canvas         = Canvas.createCanvas(500, 300);
    const ctx            = canvas.getContext('2d');
    var   SomeoneTagged  = null;
    const StatsColor     = "lightgray"
    var   ProfileColor   = null;
    
    var MentionedMember = message.mentions.users.first();
    if  (MentionedMember !== undefined)  {  SomeoneTagged = MentionedMember  }  else  {  SomeoneTagged = message.author;  };

    //Vars
    const ProfileName        = SomeoneTagged.username;
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
    ctx.fillText(ProfileName, 83, 25, canvas.width - 95);
      
    //Coins String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Gredit").toLocaleString('en') + " Gredit", 45, 105, canvas.width / 2 - 50);
      
    //Chests String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Chests").toLocaleString('en') + " Chests", 45, 140, canvas.width / 2 - 50);
      
    //Karma String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Karma") + " Karma", canvas.width / 2 + 45, 105, canvas.width / 2 - 50);
      
    //Badges String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Badges").toLocaleString('en') + " Badges", canvas.width / 2 + 45, 140, canvas.width / 2 - 50);

    /*
    //Exp String
    ctx.font = "15px " + DefaultFont;
    ctx.fillText("" + peeky.userData.get(key2, "Exp").toLocaleString('en') + " Exp", canvas.width / 2 + 45, 175, canvas.width / 2 - 50);
    */

    //Backpack String
    if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
        var CustomBackgroundAmount = 1;
    } else {  var CustomBackgroundAmount = 0;  };
      
    ctx.font = "15px " + DefaultFont;
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

    //PEEKY Staff Icon
    if  (BadgeAmount < MaxBadges)  {
    const moderator_icon = await Canvas.loadImage(ModeratorImage);
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(StaffRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
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
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(SupporterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
    ctx.drawImage(supporter_icon, BadgeXpos, BadgeYpos, BadgeSize, BadgeSize);
    };

    //Booster Icon
    if  (BadgeAmount < MaxBadges)  {
    const supporter_icon = await Canvas.loadImage(BoosterImage);
    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(BoosterRole))  {  ctx.globalAlpha = 1; BadgeXpos += BadgeXposAmt; BadgeAmount ++;  }  else  {  ctx.globalAlpha = 0;  };
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

    if  (peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(ProfileBoosterRole))  {
        const embed = {"description": InfoIcon + " The **Profile Booster** for this profile will remain active for **" + function_TimeLeft(peeky.userData.get(key, "BoosterStart"),  "hours", ProfileBoosterTime) + " hours**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    if  (!WebsiteCooldowns.has("featuredprofile") && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id) && peeky.guilds.get(SupportServer).members.get(SomeoneTagged.id).roles.has(SupporterRole))  {
      
        WebsiteCooldowns.add("featuredprofile");

        var FeaturedDate = new Date();
        var data = "<font size='4' class='headersub'>" + function_RemoveFormatting(SomeoneTagged.username, "other", true) + "'s profile got featured on " + function_DateFormat(FeaturedDate) + ".</font>  <br><br><br>  <img src='" + m.attachments.array()[0].url + "' class='featuredprofile'>";

        fs.writeFile('public/featured_profile.txt', data, (err) => {
            if (err) console.log(err); 
        });
      
        const embed = {"description": InfoIcon + " This profile is now featured!",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
        console.log("The featured profile has been updated.");
    
        setTimeout(() => {
            WebsiteCooldowns.delete("featuredprofile");
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

//Play 
if (CommandName.startsWith("play"))  {
  
    var CommandArgument = CommandName.split("play")[1];
      
    if  (CommandArgument.startsWith(" "))  {
      
        CommandArgument = CommandArgument.replace(" ", "");
  
    if  (!CurrentlyPlaying.has(message.guild.id) && !MusicCmdCooldown.has(message.guild.id))  {
      
        var Type = "Started";
        var DeleteMessage = false;
        var ChoosingMode = true;
        var IsRandom = false;

        MusicCmdCooldown.add(message.guild.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.guild.id)}, 30000);

        if  (CommandArgument.includes("youtube.com") || CommandArgument.includes("youtu.be"))  {
            DeleteMessage = true;
        };

        if  (CommandArgument == RandomString && ChoosingMode == true)  {

            CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
            Type = "Random";
            ChoosingMode = false;

        };

        if  ((CommandArgument == "previous" || IsRandom == true) && ChoosingMode == true)  {

            ChoosingMode = false;

            if  (peeky.serverData.has(keySF, "Link") && peeky.serverData.get(keySF, "Link") !== "None")  {  

                CommandArgument = peeky.serverData.get(keySF, "Link");
                Type = "Previous";

            } else {
              const embed = {"description": InfoIcon + " Previous song not found, playing a random song.",  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
              Type = "Random";
            };

        };

        if  ((CommandArgument == "playlist" || CommandArgument == peeky.userData.get(key, "PlaylistName").toLowerCase()) && ChoosingMode == true)  {

            DeleteMessage = false;

            if  (peeky.userData.get(key, "Playlist").length > 0)  {

                CommandArgument = peeky.userData.get(key, "Playlist")[Math.floor(Math.random()*peeky.userData.get(key, "Playlist").length)];
                Type = "Playlist";

            } else {

              const embed = {"description": InfoIcon + " Your playlist is empty, playing a random song.",  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = RandomSongs[Math.floor(Math.random()*RandomSongs.length)];
              Type = "Random";

            };

        };

        search(CommandArgument, SearchOptions, async function(error, results)  {

            if  (error) return ErrorBag.add(error);

            if  (ChoosingMode == true)  {

                if  (results.length > 0)  {      
                    CommandArgument = results[0].link;
                };

            };

        if  (!CommandArgument.includes("?list="))  {

        if  ((CommandArgument) && (ytdl.validateURL(CommandArgument) == true))  {

        if  (message.member.voiceChannel)  {

            const voiceChannel  = message.member.voiceChannel;

        if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {

                await ytdl.getBasicInfo(CommandArgument).then(async (info) => {
                info = info.player_response.videoDetails;

                const Thumbnail  = info.thumbnail.thumbnails[info.thumbnail.thumbnails.length - 1].url;
                const Title      = info.title;
                const Author     = info.author;
                const Length     = info.lengthSeconds;
                const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (Length / 60));
                const Started    = new Date();

                if  (Length <= 600 && Length > 0)  {

                await voiceChannel.join().then(async connection => {

                CurrentlyPlaying.add(message.guild.id);

                peeky.serverData.set(keySF, Title, "Title");
                peeky.serverData.set(keySF, Thumbnail, "Thumbnail");
                peeky.serverData.set(keySF, Author, "Author");
                peeky.serverData.set(keySF, LengthDate, "Length");
                peeky.serverData.set(keySF, Started, "Started");
                peeky.serverData.set(keySF, CommandArgument, "Link");

                if  (DeleteMessage == true)  {
                    message.delete().catch(error => ErrorBag.add(error));
                };            

                message.channel.startTyping();
                await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, LengthDate, message.author.id, Type)).catch(error => ErrorBag.add(error));
                message.channel.stopTyping();

                if  (message.guild.me.hasPermission("CHANGE_NICKNAME") && ((message.guild.me.nickname !== null && message.guild.me.nickname.startsWith("🎵 ")) || message.guild.me.nickname == null))  {
                    message.guild.me.setNickname("🎵 " + "Playing in " + function_RemoveFormatting(voiceChannel.name, "other", false).slice(0, 14) + " 🎵");
                };

                const stream = ytdl(CommandArgument);
                const dispatcher = await connection.playStream(stream, StreamOptions);

                dispatcher.on('end', async reason => {

                CurrentlyPlaying.delete(message.guild.id);
                voiceChannel.leave();

                if  (message.guild.me.hasPermission("CHANGE_NICKNAME") && ((message.guild.me.nickname !== null && message.guild.me.nickname.startsWith("🎵 "))))  {
                    message.guild.me.setNickname(null);
                };

                const Listeners = voiceChannel.members.filter(m => !m.user.bot).map(m => m.id);

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
                  const embed = {"description": ErrorIcon + " You cannot play livestreams or songs longer than 10 minutes.",  "color": EmbedColor}; 
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

        });      
      
    }
     else
    {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Current
if (CommandName == "current")  {
      
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
if (CommandName.startsWith("playlist ") || CommandName == "playlist")  {
  
    var CommandArgument = CommandName.split("playlist")[1];
  
    if  (CommandArgument.startsWith(" add "))  {
      
    if  (!MusicCmdCooldown.has(message.author.id))  {
      
        var PlaylistRequest = CommandArgument.replace(" add ", "");
      
        MusicCmdCooldown.add(message.author.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.author.id)}, 30000);
      
    if  (PlaylistRequest == "current")  {

        if  (CurrentlyPlaying.has(message.guild.id) && peeky.serverData.get(keySF, "Link") !== "None")  {
          
            if  (peeky.userData.get(key, "Playlist").length < PlaylistLimit)  {
          
                peeky.userData.get(key, "Playlist").push(peeky.serverData.get(keySF, "Link"));

                const embed = {"description": SuccessIcon + " Added the current song to your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));    
                
            } else {
              const embed = {"description": ErrorMessage15[0],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };           
              
        } else {
          const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
            
    } else
      
    if  (!PlaylistRequest.includes("?list="))  {
      
        if  (ytdl.validateURL(PlaylistRequest) == true)  {
          
            if  (peeky.userData.get(key, "Playlist").length < PlaylistLimit)  {
          
                peeky.userData.get(key, "Playlist").push(PlaylistRequest);

                const embed = {"description": SuccessIcon + " Added the song to your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                
            } else {
              const embed = {"description": ErrorMessage15[0],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            }; 
          
        } else {
          const embed = {"description": ErrorMessage4[0],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
    
    } else {
      const embed = {"description": ErrorIcon + " You cannot add playlists to your playlist.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

    } else 
    if  (CommandArgument.startsWith(" remove "))  {
      
        var PlaylistRequest = CommandArgument.replace(" remove ", "");

        if  (peeky.userData.get(key, "Playlist").includes(PlaylistRequest))  {

        var BackgroundIndex = peeky.userData.get(key, "Playlist").indexOf(PlaylistRequest);

        peeky.userData.get(key, "Playlist").splice(BackgroundIndex, 1);  //Remove the background

        const embed = {"description": SuccessIcon + " The song has been removed from your **" + peeky.userData.get(key, "PlaylistName") + "** playlist.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        } else {
          const embed = {"description": ErrorIcon + " That song is not in your playlist.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
    
    } else  
    if  (CommandArgument.startsWith(" rename "))  {
      
        var PlaylistRequest = function_RemoveFormatting(CommandArgument.replace(" rename ", ""), "other", true);

        peeky.userData.set(key, PlaylistRequest, "PlaylistName")

        const embed = {"description": SuccessIcon + " Your playlist has renamed to **" + peeky.userData.get(key, "PlaylistName") + "**.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    } else
    if  (CommandArgument.startsWith(" clear"))  {

        const embed = {"description": SuccessIcon + " You have cleared **" + peeky.userData.get(key, "Playlist").length + " songs** from your playlist.",  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
        peeky.userData.set(key, [], "Playlist");
      
    } else  {
      
      var MentionedMember = message.mentions.members.first();
      var SomeoneTagged = message.author;
      
      if  (MentionedMember) {
          SomeoneTagged = MentionedMember.user;
      };
      
      if  (peeky.userData.has(SomeoneTagged.id))  {

          const Playlist = peeky.userData.get(SomeoneTagged.id, "Playlist");

          if  (Playlist.length > 0)  {
              var FinalizedPlaylist = function_NumarizeArray(Playlist, ["<", ">"])
          }  else  {
             var FinalizedPlaylist = "The playlist is empty.";
          };

          const embed = {
          "image": {
            "url": "https://cdn.glitch.com/ea3328c2-6730-46f6-bc6f-bd2820c32afc%2Fplaylist_embed.png?v=1563967857471"
          },
          "fields": [
          {
            "name": peeky.userData.get(SomeoneTagged.id, "PlaylistName"),
            "value": function_RemoveFormatting(SomeoneTagged.username, "other", true)
          },
          {
            "name": "­\nSongs",
            "value": FinalizedPlaylist + "\n­"
          }],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
      } else {
        const embed = {"description": ErrorMessage7[0],  "color": EmbedColor}; 
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      };
      
    };

};

//Skip
if (CommandName == "skip")  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        var OwnerActive = false;
      
        if  (message.guild.me.voiceChannel && message.guild.me.voiceChannel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
            OwnerActive = true;
        };
      
        if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {
          
            CurrentlyPlaying.delete(message.guild.id);

            if  (message.guild.me.voiceChannel)  {
                message.guild.me.voiceChannel.leave();
            };
          
        } else {
          const embed = {"description": ErrorIcon + " Only the server owner can skip the song.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage12[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//GuessTheSong  
if (CommandName == "guessthesong")  {

    if  (!CurrentlyPlaying.has(message.guild.id) && !ActiveMinigames.has(message.guild.id))  {

        if  (message.member.voiceChannel)  {
          
            const voiceChannel  = message.member.voiceChannel;
            var ChosenSong = Math.floor((Math.random() * GuessTheSong.length));
            var InfoMessages = [InfoIcon + " Full Song: <" + GuessTheSong[ChosenSong][0] + ">"];

            CurrentlyPlaying.add(message.guild.id);
            ActiveMinigames.add(message.guild.id);
            setTimeout(() => {CurrentlyPlaying.delete(message.guild.id)
                              ActiveMinigames.delete(message.guild.id)}, 30000);
          
            if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {
  
                await voiceChannel.join().then(async connection => {

                    const stream = ytdl(GuessTheSong[ChosenSong][0]);
                    const dispatcher = await connection.playStream(stream, StreamOptions);
                    const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (30 / 60));
                  
                    //dispatcher.on('end', async reason => {});
          
                    peeky.serverData.set(keySF, "Guess the Song", "Title");
                    peeky.serverData.set(keySF, DefaultBackground, "Thumbnail");
                    peeky.serverData.set(keySF, "", "Author");
                    peeky.serverData.set(keySF, LengthDate, "Length");
                    peeky.serverData.set(keySF, new Date(), "Started");
                    peeky.serverData.set(keySF, "", "Link");

                    const embed = {"description": "**Try to guess the name of this song!**" + "\n" + GuessTheSong[ChosenSong][2],  "color": EmbedColor}; 
                    message.channel.send({ embed });

                    message.channel.awaitMessages(response => response.content.toLowerCase() == GuessTheSong[ChosenSong][1].toLowerCase(), { maxMatches: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                      var key = collected.first().author.id;
                        
                      //Gamer Badge
                      if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                          peeky.userData.set(key, true, "GamerBadge");
                          InfoMessages.push(InfoMessage1[0]);
                      };
                      
                      if  (peeky.userData.has(key))  {
                          peeky.userData.math(key, "+", 25, "Gredit");
                      };
                      
                      voiceChannel.leave();
                      
                      const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().author.username, "other", true) + "** has guessed the song's name!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                      message.channel.send({ embed });
                      
                    })
                    .catch(collected => {
                      const embed = {"description": ErrorIcon + " The song's name was **" + GuessTheSong[ChosenSong][1] + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                      message.channel.send({ embed });
                      
                      voiceChannel.leave();
                    });

                });
              
            };

        } else {
          const embed = {"description": ErrorIcon + " You need to join a voice channel.",  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

      
    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//TriviaQuestions  
if (CommandName == "triviaquestions")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        var ChosenQuestion = Math.floor((Math.random() * TriviaQuestions.length));
        var InfoMessages = [];
        var Answers = function_ShuffleArray(TriviaQuestions[ChosenQuestion].slice(1, 4));

        ActiveMinigames.add(message.guild.id);
        setTimeout(() => {ActiveMinigames.delete(message.guild.id)}, 30000);
      
        const embed = {"description": "**" + TriviaQuestions[ChosenQuestion][0] + "**\n" + TriviaQuestions[ChosenQuestion][4] + "\n\n" + function_NumarizeArray(Answers, ["", ""]),  "color": EmbedColor}; 
        message.channel.send({ embed });
    
        message.channel.awaitMessages(response => response.content.toLowerCase() == TriviaQuestions[ChosenQuestion][1][0].toLowerCase(), { maxMatches: 1, time: 30000, errors: ['time'] })
        .then(collected => {
             var key = collected.first().author.id;

             //Gamer Badge
             if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                 peeky.userData.set(key, true, "GamerBadge");
                 InfoMessages.push(InfoMessage1[0]);
             };

             if  (peeky.userData.has(key))  {
                 peeky.userData.math(key, "+", 25, "Gredit");
             };

             const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().author.username, "other", true) + "** has chosen the right answer!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
             message.channel.send({ embed });
        })
        .catch(collected => {
              const embed = {"description": ErrorIcon + " The question's answer was **" + TriviaQuestions[ChosenQuestion][1][0] + "**.",  "color": EmbedColor}; 
              message.channel.send({ embed });
        });

      
    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//DrawAndGuess  
if (CommandName == "drawandguess")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        var ChosenQuestion = Math.floor((Math.random() * DrawAndGuess.length));
        var InfoMessages = [];

        ActiveMinigames.add(message.guild.id);
        setTimeout(() => {ActiveMinigames.delete(message.guild.id)}, 90000);
      
        var embed = {"description": InfoIcon + " Draw the word **" + DrawAndGuess[ChosenQuestion] + "** in under **1 minute**.",  "color": EmbedColor}; 
        await function_DirectMessage(message.author.id, {  embed,  file: "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fempty_canvas.png"  });

        var embed = {"description": InfoIcon + " **" + function_RemoveFormatting(message.author.username, "other", true) + "** has **1 minute** to draw their word!",  "color": EmbedColor}; 
        message.channel.send({ embed });
    
        message.channel.awaitMessages(response => response.author.id == message.author.id && response.attachments.array().length > 0, { maxMatches: 1, time: 60000, errors: ['time'] })
        .then(collected => {

            const embed = {"description": InfoIcon + " Try to guess the word that **" + function_RemoveFormatting(message.author.username, "other", true) + "** has drawn!",  "color": EmbedColor}; 
            message.channel.send({ embed });
          
            message.channel.awaitMessages(response => response.author.id !== message.author.id && response.content.toLowerCase() == DrawAndGuess[ChosenQuestion].toLowerCase(), { maxMatches: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                 var key = collected.first().author.id;

                 //Gamer Badge
                 if  (peeky.userData.has(key) && peeky.userData.get(key, "GamerBadge") == false)  {
                     peeky.userData.set(key, true, "GamerBadge");
                     InfoMessages.push(InfoMessage1[0]);
                 };

                 if  (peeky.userData.has(key))  {
                     peeky.userData.math(key, "+", 50, "Gredit");
                 };

                 const embed = {"description": SuccessIcon +  " Congratulations, **" + function_RemoveFormatting(collected.first().author.username, "other", true) + "** has guessed the word!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                 message.channel.send({ embed });
            })
            .catch(collected => {
                const embed = {"description": ErrorIcon + " The word was **" + DrawAndGuess[ChosenQuestion] + "**.",  "color": EmbedColor}; 
                message.channel.send({ embed });
            });
             
        })
        .catch(collected => {          
              const embed = {"description": ErrorIcon + " Sorry, but **" + function_RemoveFormatting(message.author.username, "other", true) + "** has ran out of time to draw.",  "color": EmbedColor}; 
              message.channel.send({ embed });
        });

      
    } else {
      const embed = {"description": CooldownMessage1[0],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Mute
if  (CommandName.startsWith("mute"))  {
  
    var CommandArgument = CommandName.split("mute")[1];
  
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");

if  (message.member.permissions.has("MUTE_MEMBERS"))  {

if  (message.guild.me.hasPermission("MANAGE_ROLES"))  {

            var MentionedMember = message.mentions.members.first();
            var name = peeky.serverData.get(keySF, "muted_role");
            var Role = message.guild.roles.find(role => role.name == name);

            if  (MentionedMember)  {

            if  (Role)  {

            if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && !MentionedMember.roles.has(Role.id))  {

                await MentionedMember.addRole(Role.id, "Unmuted by " + message.author.tag + ".").catch(error => {
                    const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    ErrorBag.add(error); Failed = true;
                });

                if  (Failed == false)  {
                    //function_DirectMessage(MentionedMember.user.id, "You have been muted in **" + function_RemoveFormatting(message.guild.name, "other", true) + "** by **" + function_RemoveFormatting(message.author.username, "other", true) + "**.");

                    const embed = {"description": SuccessIcon + " I have muted **" + function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
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

}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//Unmute
if  (CommandName.startsWith("unmute"))  {
  
    var CommandArgument = CommandName.split("unmute")[1];
  
if  (CommandArgument.startsWith(" "))  {
      
    CommandArgument = CommandArgument.replace(" ", "");

if  (message.member.permissions.has("MUTE_MEMBERS"))  {
    
if  (message.guild.me.hasPermission("MANAGE_ROLES"))  {
      
    var MentionedMember = message.mentions.members.first();
    var name = peeky.serverData.get(keySF, "muted_role");
    var Role = message.guild.roles.find(role => role.name == name);

    if  (MentionedMember)  {
  
    if  (Role)  {
      
    if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && MentionedMember.roles.has(Role.id))  {

        await MentionedMember.removeRole(Role.id, "Unmuted by " + message.author.tag + ".").catch(error => { 
            const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            ErrorBag.add(error); Failed = true;
        });

        if  (Failed == false)  {
            //function_DirectMessage(MentionedMember.user.id, "You have been unmuted in **" + function_RemoveFormatting(message.guild.name, "other", true) + "** by **" + function_RemoveFormatting(message.author.username, "other", true) + "**.");
          
            const embed = {"description": SuccessIcon + " I have unmuted **" + function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
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

}
 else if (CommandArgument == "")
{
 const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
};

};

//IDBan
if  (CommandName.startsWith("idban"))  {
  
    var CommandArgument = CommandName.split("idban")[1];

    if  (CommandArgument.startsWith(" "))  {
      
        CommandArgument = CommandArgument.replace(" ", "");

    if  (message.member.permissions.has("BAN_MEMBERS"))  {
    
    if  (message.guild.me.hasPermission("BAN_MEMBERS"))  {

        var ValidID = 0;

        await peeky.fetchUser(CommandArgument, true).catch(error => {  ErrorBag.add(error);  ValidID ++;  });
      
        if  (ValidID == 0) {

        if  (!message.guild.members.find(m => m.id == CommandArgument))  {

            await message.guild.ban(CommandArgument, "ID banned by " + message.author.tag + ".").catch(error => { 
                  const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  ErrorBag.add(error); Failed = true;
            });

            if  (Failed == false)  {
                const embed = {"description": SuccessIcon + " I have ID banned **" + function_RemoveFormatting(peeky.users.get(CommandArgument).username, "other", true) + "** at **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
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
      
    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Ban
if (CommandName.startsWith("ban"))  {

    if  (message.member.permissions.has("BAN_MEMBERS"))  {

        if  (message.guild.me.hasPermission("BAN_MEMBERS"))  {

            var MentionedMember = message.mentions.members.first();

            if  (MentionedMember && MentionedMember.bannable && !MentionedMember.permissions.has("BAN_MEMBERS"))  {

                await message.guild.ban(MentionedMember.user.id, "Banned by " + message.author.tag + ".").catch(error => { 
                      const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                      ErrorBag.add(error); Failed = true;
                });

                if  (Failed == false)  {
                    const embed = {"description": SuccessIcon + " I have banned **" + function_RemoveFormatting(MentionedMember.user.username, "other", true) + "** at **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
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
                        const embed = {"description": ErrorMessage13[0],  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        ErrorBag.add(error); Failed = true;
                    });

                    if  (Failed == false)  {
                        const embed = {"description":  SuccessIcon + " I have purged **" + CommandArgument + " messages** at **" + function_RemoveFormatting(message.author.username, "other", true) + "**'s request.",  "color": EmbedColor}; 
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

            }
             else
            {
              const embed = {"description": ErrorIcon + " You can only purge 1 to 100 messages.",  "color": EmbedColor}; 
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

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Prefix
if (CommandName.startsWith("prefix"))  {
  
    var CommandArgument = CommandName.split("prefix")[1];
  
    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = CommandArgument.replace(" ", "").slice(0, 5).toLowerCase();

    if  (message.member.user.id == message.guild.owner.user.id || message.author.id == OwnerId)  {

        if  (message.mentions.channels.first() == undefined && message.mentions.roles.first() == undefined && message.mentions.members.first() == undefined)  {

            const InfoMessages = [InfoIcon + " If the server prefix is broken, join the Support Server."];

            peeky.serverData.set(keySF, CommandArgument, "prefix");

            const embed = {"description": SuccessIcon + " The server prefix is now **" + CommandArgument + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
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
  
    }
     else if (CommandArgument == "")
    {      
     const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
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
            var InfoMessages = [];
            var FilteredChannels = message.guild.channels.array().filter(channel => channel.type == "text" || channel.type == "voice");

            if  (!RoleExist && message.guild.me.hasPermission("MANAGE_ROLES"))  {

                if  (!RoleCooldown.has(message.guild.id))  {

                    RoleCooldown.add(message.guild.id);
                    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                   await message.guild.createRole({
                        name: CommandArgument,
                        color: "#943148"
                   }).catch(error => ErrorBag.add(error));

                   InfoMessages.push(InfoIcon + " Created a role called **" + CommandArgument + "**.");

                   if  (message.guild.roles.find(role => role.name == CommandArgument) && message.guild.me.hasPermission("MANAGE_CHANNELS") && !RoleCooldown.has(message.guild.id + "muterole"))  {
                       
                       RoleCooldown.add(message.guild.id + "muterole");
                       setTimeout(() => {RoleCooldown.delete(message.guild.id + "muterole")}, 300000);
                         
                       var Amount = 0;
                       var MuteRole = message.guild.roles.find(role => role.name == CommandArgument);
                     
                       FilteredChannels.forEach(channel => {
                             
                          var Failed = false;
                             
                          if  (channel.type == "voice" && !channel.permissionsFor(message.guild.me).has("CONNECT"))  {
                                  Failed = true;
                          };
                             
                          if  (Failed == false && Amount <= 20)  {
                             
                              channel.overwritePermissions(MuteRole, {
                                  'SEND_MESSAGES': false,
                              }).catch(error => ErrorBag.add(error));
                            
                              Amount ++;
                              
                          };

                       });

                       InfoMessages.push(InfoIcon + " Edited **" + Amount + "/" + FilteredChannels.length + " channels** for the **" + CommandArgument + "** role.");     

                  }
                   else
                  {
                   InfoMessages.push(ErrorIcon + " Couldn't edit channels for the **" + CommandArgument + "** role.");  
                  };

               }
                else
               {
                const embed = {"description": CooldownMessage3[0],  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
               };
              
            };

            peeky.serverData.set(keySF, CommandArgument, "muted_role");
          
            const embed = {"description": SuccessIcon + " The Mute Role for this server is now **@" + CommandArgument + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
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
  
    }
     else if (CommandArgument == "")
    {      
     const embed = {"description": ErrorMessage18[0],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

};
  
};
  
};

};  
};
});
  
peeky.login(DiscordToken).catch(console.error);