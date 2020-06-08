//Discord
const Discord = require('discord.js');
const peeky   = new Discord.Client({  disabledEvents: ["TYPING_START"], disableEveryone: true  });

//BLS
const BotList = require('botlist.space');
const bls = new BotList.Client({  id: "482945063282802698", botToken: process.env.BLS_TOKEN  });

//Music
const search = require('youtube-search');
const ytdl   = require('ytdl-core');
const opus   = require('node-opus');

//Canvas
const Canvas  = require('canvas');
const request = require('request');
const rgbHex  = require('rgb-hex');
const { getColorFromURL } = require('color-thief-node');

//Data
const Enmap = require("enmap");
peeky.userData = new Enmap({name: "userData"});
peeky.serverData = new Enmap({name: "serverData"});
peeky.channelData = new Enmap({name: "channelData"});
peeky.peekyData = new Enmap({name: "peekyData"});
const Setting = require('./data/setting.json');

//Website
const http    = require('http');
const express = require('express');
const app     = express();
const port    = process.env.PORT;
const url     = require('url');

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
  setInterval(() => { http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

http.createServer((req, res) => {
    let responseCode = 404;
    let content = '404 Error';

    if (req.url === '/') {
        responseCode = 200;
        content = fs.readFileSync('./index.html');
    }

    res.writeHead(responseCode, {
        'content-type': 'text/html;charset=utf-8',
    });

    res.write(content);
    res.end();
})

//Ambassador Program
var AmbassadorInvites = null;

//Miscellaneous Packages
const fs         = require('fs');
const ms         = require('parse-ms');
const node_fetch = require('node-fetch');
const https      = require('https');
const aki        = require('aki-api');

//Variables
var   EmbedColor            = 3093047  //3553599;
const AutoDeleteTime        = 250;
const MinuteMs              = 60000;
const DayMs                 = 86400000;
const WeekMs                = 604800000;  //7 Days
const MonthMs               = 2592000000;  //30 Days
const YearMs                = 31556952000;  //30 Days

//Sets and Arrays
var ErrorBag                = new Set();
var BannedUsers             = new Array();
var LeaderboardPositions    = new Array();
var WebsiteCooldowns        = new Set();
var FunctionCooldowns       = new Set();
var AutoManagementCooldown  = new Set();
var GainCooldown            = new Set();
var BadgeCheckCooldown      = new Set();
var CommandCooldown         = new Set();
var SetInviteCooldown       = new Set();
var MusicCmdCooldown        = new Set();
var ProfileCooldown         = new Set();  const ProfileCooldownMS = 5000;
var ChannelCooldown         = new Set();  const ChannelCooldownMS   = 10000;
var RoleCooldown            = new Set();  const RoleCooldownMS      = 10000;
var ResponseCooldowns       = new Set();  const ResponseCooldownMS = 5000;
var FloodProtectionStrikes  = new Array();
var KarmaImages             = new Array();
var CheckedDataCreations    = new Set();
var QueuedSOSMessages       = new Set();
var CallingServers          = new Set();
var ActiveMinigames         = new Set();
var CurrentlyPlaying        = new Set();
var CurrentlyStreaming      = new Set();
var ClearedNames            = new Set();
var FailedVoteChecks        = new Set();
var FailedDMs               = new Set();
var LoggedMessages          = new Set();
var ActivatedTicketSystems  = new Set();

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
const HollowImage       = "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2FHollowImage.png";

//Vote Emotes
const DefaultUpvote   = "529413730874949632";
const DefaultDownvote = "529413312862093322";

//Other Emotes
const ErrorIcon       = "<:peeky_error:529412267343872031>";
const SuccessIcon     = "<:peeky_success:529415084804669487>";
const InfoIcon        = "<:peeky_info:529412267746394133>";
const LoadingIcon     = "<:peeky_loading:688396910251344030>";
const EnabledIcon     = "<:enabled:538295053940948993>";
const DisabledIcon    = "<:disabled:538295054431813662>";
const SettingsIcon    = "<:settings:586612320839532573>";
const Hollow          = "<:peeky_hollow:506921440067452928>";
const WhiteSquare     = "<:peeky_white:529305474604990464>";
const TreasureIcon    = "<:treasure:623186257404755969>";
const GreditIcon      = "<:gredit:558673809343774720>";
const ChestIcon       = "<:chest:561511603305185280>";
const RedditUpvote    = "<:RedditUpvote:620124949855600640>";
const RedditDownvote  = "<:RedditDownvote:620122348745523200>";
const OwnerTag        = "<:owner:543001955921035274>";
const BoostTag        = "<:boost:642647004056518665>";
const BotTag          = "<:bot:541014775468130336>";

//Role IDs
const StaffRole          = "494429609874685983";
const VeteranRole        = "679051643756478539";
const PremiumRole        = "504740473185894400";
const BoosterRole        = "620654437081415686";
const ServerUpgradeRole  = "549190337437106176";

//Other IDs
const OwnerId              = "108899856889737216";
const PeekyId              = "482945063282802698";
const SupportServer        = "319891596772638744";
const AnnouncementsChannel = "346710479407808524";
const EmojiStorage1        = "493048757286600716";
const WorkshopChannel      = "501130667078189066";
const ServerLogChannel     = "610672449738244102";
const MainChatChannel      = "676843718539608077";

//Collaboration Bot IDs
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
const EnableStrings  = [  "enabled", "zapnutá", "zapnutá", "encender", "aktif", "Включено", "有効"  ];
const DisableStrings = [  "disabled", "vypnutá", "vypnutá", "apagado", "deaktif", "Включено", "無効"  ];
const Languages      = [  "English",  "Čeština", "Slovenčina", "Español", "Türkçe", "Русский", "日本語"  ];

//Response Messages
const CooldownMessage1 = [
  ErrorIcon + " You are currently on a cooldown for that command.",
  ErrorIcon + " Tento příkaz je pro vás momentálně zastaven.",
  ErrorIcon + " Nemôžeš teraz použiť tento command.",
  ErrorIcon + " Actualmente estás en un período de enfriamiento para ese comando.",
  ErrorIcon + " Şu anda bu komutun bekleme süresindesiniz.",
  ErrorIcon + " Вы сейчас на перезагрузке для этой команды.",
  ErrorIcon + " "
];
const CooldownMessage2 = [
  ErrorIcon + " Automated channel creation is currently on a cooldown.",
  ErrorIcon + " Automatická tvorba kanálů je momentálně zastavena.",
  ErrorIcon + " Automatickú tvorbu channelov nemôžeš teraz použiť.",
  ErrorIcon + " La creación de canales automatizada está actualmente en proceso de enfriamiento.",
  ErrorIcon + " Otomatik kanal oluşturma şu anda bir bekleme süresinde.",
  ErrorIcon + " Автоматизированное создание канала находится на перезагрузке.",
  ErrorIcon + " "
];
const CooldownMessage3 = [
  ErrorIcon + " Automated role creation is currently on a cooldown.",
  ErrorIcon + " Automatická tvorba rolí je momentálně zastavena.",
  ErrorIcon + " Automatické vytváranie rolí nemôžeš práve použiť.",
  ErrorIcon + " La creación automatizada de roles está actualmente en proceso de enfriamiento.",
  ErrorIcon + " Otomatik rol oluşturma şu anda bir bekleme süresinde.",
  ErrorIcon + " Автоматизированное создание ролей находится на перезагрузке.",
  ErrorIcon + " "
];
const CooldownMessage4 = [
  ErrorIcon + " You are currently on a cooldown for that function.",
  ErrorIcon + " Tato funkce je pro vás momentálně zastavena.",
  ErrorIcon + " Nemôžeš teraz použiť túto funkciu.",
  ErrorIcon + " Usted actualmente está en un período de enfriamiento para esa función.",
  ErrorIcon + " Şu anda bu işlev için bir bekleme süresindesiniz.",
  ErrorIcon + " Вы сейчас на перезагрузке для этой функции.",
  ErrorIcon + " "
];

const PermissionsMessageError1 = [
  ErrorIcon + " You are lacking the required permissions do that.",
  ErrorIcon + " Chybý vám požadovaná oprávnění.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " Usted no tiene los permisos necesarios para hacerlo.",
  ErrorIcon + " Bunu yapmak için gerekli izinlere sahip değilsiniz.",
  ErrorIcon + " У вас нет необходимых разрешений для этого.",
  ErrorIcon + " "
];
const PermissionsMessageError2 = [
  ErrorIcon + " You need to be the owner of this server to do that.",
  ErrorIcon + " Musíte být vlastníkem serveru.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " Usted necesita ser el dueño de este servidor para hacer eso.",
  ErrorIcon + " Bunu yapmak için bu sunucunun sahibi olmanız gerekir.",
  ErrorIcon + " Для этого вы должны быть владельцем этого сервера.",
  ErrorIcon + " "
];
const PermissionsMessageError3 = [
  ErrorIcon + " I am missing required permissions to do that.",
  ErrorIcon + " Chybý mi požadovaná opravnění.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " No tengo los permisos necesarios para hacerlo.",
  ErrorIcon + " Bunu yapmak için gerekli izinlere sahip değilim.",
  ErrorIcon + " У меня нет необходимых разрешений для этого.",
  ErrorIcon + " "
];

const ErrorMessage1 = [
  ErrorIcon + " You need more Gredit to do that.",
  ErrorIcon + " Potřebujete získat více Greditu.",
  ErrorIcon + " Potrebuješ viacej Greditov aby si toto mohol spraviť.",
  ErrorIcon + " Usted necesita más Gredit para hacer eso.",
  ErrorIcon + " Bunu yapmak için daha fazla Gredit'e ihtiyacınız var.",
  ErrorIcon + " Для этого вам нужно больше Gredit.",
  ErrorIcon + " それを行うためにより多くのGreditが必要です。"
];
const ErrorMessage2 = [
  ErrorIcon + " The new description is too large.",
  ErrorIcon + " Nový popisek je příliš dlouhý.",
  ErrorIcon + " Nový popisok je prílíš veľký.",
  ErrorIcon + " La nueva descripción es demasiada larga.",
  ErrorIcon + " Yeni açıklama çok büyük.",
  ErrorIcon + " Новое описание слишком большое.",
  ErrorIcon + " 新しい説明が大きすぎます。"
];
const ErrorMessage3 = [
  ErrorIcon + " The provided mention is invalid.",
  ErrorIcon + " Toto označení je invalidní.",
  ErrorIcon + " Zadaná zmienka je neplatná.",
  ErrorIcon + " La mención proporcionada es inválida.",
  ErrorIcon + " Verilen söz geçersiz.",
  ErrorIcon + " Приведенное упоминание недействительно.",
  ErrorIcon + " 指定されたメンションは無効です。"
];
const ErrorMessage4 = [
  ErrorIcon + " You need to enter a valid YouTube link.",
  ErrorIcon + " Vložte validní YouTube odkaz.",
  ErrorIcon + " Musíš zadať platný Youtube odkaz.",
  ErrorIcon + " Usted tiene que entrar en un enlace válido de YouTube.",
  ErrorIcon + " Geçerli bir YouTube bağlantısı girmeniz gerekiyor.",
  ErrorIcon + " Необходимо ввести действительную ссылку YouTube.",
  ErrorIcon + " 有効なYouTubeリンクを入力する必要があります。"
];
const ErrorMessage5 = [
  ErrorIcon + " You do not have that background in your inventory.",
  ErrorIcon + " Toto pozadí ještě nelastníte.",
  ErrorIcon + " Nemáš toto pozadie v tvojom inventári.",
  ErrorIcon + " Usted no tiene esos fondos en su inventario.",
  ErrorIcon + " nvanterinizde bu arka plan yok.",
  ErrorIcon + " У вас нет этого фона в вашем инвентаре.",
  ErrorIcon + " インベントリにその背景がありません。"
];
const ErrorMessage6 = [
  ErrorIcon + " You do not have enough chests.",
  ErrorIcon + " Nemáte dost truhel.",
  ErrorIcon + " Nemáš dostatok truhlí.",
  ErrorIcon + " Usted no tiene suficientes cofres.",
  ErrorIcon + " Yeterli sandığın yok.",
  ErrorIcon + " У вас недостаточно сундуков.",
  ErrorIcon + " チェストが足りません。"
];
const ErrorMessage7 = [
  ErrorIcon + " The mentioned user has no profile.",
  ErrorIcon + " Tento uživatel nemá žádný profil.",
  ErrorIcon + " Zmienený uživateľ nemá žiadny profil.",
  ErrorIcon + " El usuario mencionado no tiene un perfil.",
  ErrorIcon + " Söz konusu kullanıcının profili yok.",
  ErrorIcon + " У упомянутого пользователя нет профиля.",
  ErrorIcon + " 言及されたユーザーにはプロファイルがありません。"
];
const ErrorMessage8 = [
  ErrorIcon + " Mentions are not allowed for this command.",
  ErrorIcon + " Označení nejsou pro tento příkaz povoleny",
  ErrorIcon + " Zmienky niesú povolené pre tento command.",
  ErrorIcon + " No se permiten menciones para este comando.",
  ErrorIcon + " Bu komut için bahsetmeye izin verilmez.",
  ErrorIcon + " Упоминания для этой команды запрещены.",
  ErrorIcon + " このコマンドではメンションは許可されません。"
];
const ErrorMessage9 = [
  ErrorIcon + " You must enter a valid amount.",
  ErrorIcon + " Musíte vložit spravný počet.",
  ErrorIcon + " Musíš zadať platnú čiastku.",
  ErrorIcon + " Debe introducir una cantidad válida.",
  ErrorIcon + " Geçerli bir tutar girmelisiniz.",
  ErrorIcon + " Вы должны ввести действительную сумму.",
  ErrorIcon + " 有効な金額を入力してください。"
];
const ErrorMessage10 = [
  ErrorIcon + " Make sure the function's name is all in lowercase.",
  ErrorIcon + " Ujistěte se, že jméno funkce je v malých písmenkách.",
  ErrorIcon + " Uisti sa že mená funkcie su všetky malými písmenami.",
  ErrorIcon + " Asegúrate de que el nombre de la función esté en minúsculas.",
  ErrorIcon + " Fonksiyon adının küçük harfle yazıldığından emin olun.",
  ErrorIcon + " Убедитесь, что название функции написано в нижнем регистре.",
  ErrorIcon + " 関数の名前が小文字であることを確認します。"
];
const ErrorMessage11 = [
  ErrorIcon + " You need to become a Premium user to do that.",
  ErrorIcon + " Pro tohle musíte být Premium uživatel.",
  ErrorIcon + " Musíš sa stať Premium uživatelom aby si to mohol spraviť. ",
  ErrorIcon + " Necesitas convertirte en un usuario Premium para hacer eso.",
  ErrorIcon + " Bunu yapmak için Premium kullanıcı olmanız gerekir.",
  ErrorIcon + " Для этого вам нужно стать премиум-пользователем.",
  ErrorIcon + " そのためにはプレミアムユーザーになる必要があります。"
];
const ErrorMessage12 = [
  ErrorIcon + " There are no songs playing right now.",
  ErrorIcon + " Momentálně nehrajou žádné písničky.",
  ErrorIcon + " Teraz nehrajú žiadne piesne.",
  ErrorIcon + " No hay ninguna canción sonando ahora mismo.",
  ErrorIcon + " Şu anda çalan şarkı yok.",
  ErrorIcon + " Сейчас не играют песни.",
  ErrorIcon + " 今は曲が再生されません。"
];
const ErrorMessage13 = [
  ErrorIcon + " Something has gone unexpectedly wrong.",
  ErrorIcon + " Stalo se něco neočekáváného.",
  ErrorIcon + " Niečo sa nečakane pokazilo.",
  ErrorIcon + " Algo ha salido mal inesperadamente.",
  ErrorIcon + " Bir şey beklenmedik bir şekilde yanlış gitti.",
  ErrorIcon + "  Что-то пошло не так.",
  ErrorIcon + " 予期しない問題が発生しました。"
];
const ErrorMessage14 = [
  ErrorIcon + " I cannot find a role called **X001**.",
  ErrorIcon + " Nemohu najít roli s jménem **X001**.",
  ErrorIcon + " Nemôžem nájsť rolu pod menom **X001**.",
  ErrorIcon + " No puedo encontrar un papel llamado **X001**.",
  ErrorIcon + " **X001** adında bir rol bulamıyorum.",
  ErrorIcon + " Я не могу найти роль под названием **X001**.",
  ErrorIcon + " **X001**というロールが見つかりません。"
];
const ErrorMessage15 = [
  ErrorIcon + " You cannot add any more songs to your playlist.",
  ErrorIcon + " Do vašeho playlistu nelze přidat více písniček",
  ErrorIcon + " Už nemôžeš pridať žiadne piesne do tvojho playlistu.",
  ErrorIcon + " Usted no puede añadir más canciones a su lista de reproducción.",
  ErrorIcon + " Çalma listenize başka şarkı ekleyemezsiniz.",
  ErrorIcon + " Больше нельзя добавлять песни в плейлист.",
  ErrorIcon + " これ以上プレイリストに曲を追加することはできません。"
];
const ErrorMessage16 = [
  ErrorIcon + " That background doesn't exist.",
  ErrorIcon + " Toto pozadí neexistuje.",
  ErrorIcon + " To pozadie neexistuje.",
  ErrorIcon + " Ese fondo no existe.",
  ErrorIcon + " Bu arka plan yok.",
  ErrorIcon + " Этот фон не существует.",
  ErrorIcon + " その背景は存在しません。"
];
const ErrorMessage17 = [
  ErrorIcon + " You need to specify the function.",
  ErrorIcon + " Musíte upřesnit funkci.",
  ErrorIcon + " Musíš specifikovať funkciu.",
  ErrorIcon + " Es necesario especificar la función.",
  ErrorIcon + " Fonksiyon belirtmeniz gerekir.",
  ErrorIcon + " Вам необходимо указать функцию.",
  ErrorIcon + " 関数を指定する必要があります。"
];
const ErrorMessage18 = [
  ErrorIcon + " You need to provide valid arguments for the command.",
  ErrorIcon + " Musíte přidat spravný argumenty.",
  ErrorIcon + " Musíš zadať platné príkazy pre command.",
  ErrorIcon + " Tienes que proporcionar argumentos válidos para el comando.",
  ErrorIcon + " Komut için geçerli değişkenler sağlamanız gerekiyor.",
  ErrorIcon + " Вам необходимо предоставить действительные аргументы для команды.",
  ErrorIcon + " コマンドに有効な引数を指定する必要があります。"
];
const ErrorMessage19 = [
  ErrorIcon + " You need to join the Support Server.",
  ErrorIcon + " Musíte se připojit na můj server.",
  ErrorIcon + " Músíš sa pridať na Server Podpory.",
  ErrorIcon + " Tienes que unirte al Servidor de Soporte.",
  ErrorIcon + " Destek Sunucusuna katılmanız gerekir.",
  ErrorIcon + " Вам нужно присоединиться к серверу поддержки.",
  ErrorIcon + " サポートサーバーに参加する必要があります。"
];
const ErrorMessage20 = [
  ErrorIcon + " You need to upload a file.",
  ErrorIcon + " Musíte nahrát soubor.",
  ErrorIcon + " Musíš nahrať súbor.",
  ErrorIcon + " Tienes que subir un archivo.",
  ErrorIcon + " Bir dosya yüklemeniz gerekiyor.",
  ErrorIcon + " Вам нужно загрузить файл.",
  ErrorIcon + " ファイルをアップロードする必要があります。"
];
const ErrorMessage21 = [
  ErrorIcon + " You can only do that in upgraded servers.",
  ErrorIcon + " Tohle funguje jenom ve vylepšených serverech.",
  ErrorIcon + " Toto môžeš robiť iba v vylepšených serveroch.",
  ErrorIcon + " Sólo puedes hacer eso en servidores actualizados.",
  ErrorIcon + " Bunu yalnızca yükseltilmiş sunucularda yapabilirsiniz.",
  ErrorIcon + " Это можно сделать только на обновленных серверах.",
  ErrorIcon + " アップグレードされたサーバーでのみ実行できます。"
];
const ErrorMessage22 = [
  ErrorIcon + " You need to join a voice channel.",
  ErrorIcon + " Musíte se připojt se do hlasového kanálu.",
  ErrorIcon + " Musíš sa pripojiť do voice channelu.",
  ErrorIcon + " Usted necesita unirse a un canal de voz.",
  ErrorIcon + " Bir ses kanalına katılmanız gerekir.",
  ErrorIcon + " Вы должны присоединиться к голосовому каналу.",
  ErrorIcon + " 音声チャンネルに参加する必要があります。"
];
const ErrorMessage23 = [
  ErrorIcon + " This command only works in NSFW channels.",
  ErrorIcon + " Tento příkaz funguje pouze v NSFW kanálech.",
  ErrorIcon + " This command only works in NSFW channels.",
  ErrorIcon + " This command only works in NSFW channels.",
  ErrorIcon + " Bu komut sadece NSFW kanalında çalışır.",
  ErrorIcon + " This command only works in NSFW channels.",
  ErrorIcon + " このコマンドはNSFWチャネルでのみ機能します。"
];

const InfoMessage1 = [
  InfoIcon + " You have earned a new badge.",
  InfoIcon + " Dostal jste nový odznak.",
  InfoIcon + " Získal si nový odznak.",
  InfoIcon + " Usted ha ganado una nueva placa.",
  InfoIcon + " Yeni bir rozet kazandın.",
  InfoIcon + " Вы заработали новый значок.",
  InfoIcon + " 新しいバッジを獲得しました。"
];
const InfoMessage2 = [
  InfoIcon + " You have set the default background.",
  InfoIcon + " Nastavil jste si základní pozadí.",
  InfoIcon + " Nastavil si štandardné pozadie.",
  InfoIcon + " Usted ha establecido el fondo predeterminado.",
  InfoIcon + " Varsayılan arka planı belirlediniz.",
  InfoIcon + " Вы установили фон по умолчанию.",
  InfoIcon + " デフォルト背景を設定しました。"
];
const InfoMessage3 = [
  InfoIcon + " You have lost your custom background.",
  InfoIcon + " Ztratili jste vaše vlastní pozadí",
  InfoIcon + " Stratil si svoje vlastné pozadie",
  InfoIcon + " Usted ha perdido su fondo personalizado.",
  InfoIcon + " Üzerinde bulunan özel arkaplanı kaybettin.",
  InfoIcon + " Вы потеряли свой пользовательский опыт.",
  InfoIcon + " カスタム背景が失われました。"
];
const InfoMessage4 = [
  InfoIcon + " You have completed the daily challenge.",
  InfoIcon + " Dokončili jste denní výzvu.",
  InfoIcon + " You have completed the daily challenge.",
  InfoIcon + " You have completed the daily challenge.",
  InfoIcon + " You have completed the daily challenge.",
  InfoIcon + " You have completed the daily challenge.",
  InfoIcon + " You have completed the daily challenge."
];
const InfoMessage5 = [
  InfoIcon + " You have completed the weekly challenge.",
  InfoIcon + " Dokončili jste týddení výzvu.",
  InfoIcon + " You have completed the weekly challenge.",
  InfoIcon + " You have completed the weekly challenge.",
  InfoIcon + " You have completed the weekly challenge.",
  InfoIcon + " You have completed the weekly challenge.",
  InfoIcon + " You have completed the weekly challenge."
];

//Small Arrays
const Days                = [  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ];
const BlacklistedWebsites = [  "discord.gg", "discord.io", "discord.me", "twitch.tv", "bit.ly", "goo.gl", "youtu.be", "youtube.com", "twitter.com", "paypal.me", "paypal.com", "selly.gg", "tiny.cc", " evassmant.com", "urlzs.com"   ];
const VulgarPhrases       = [  "anal", "anus", "arse", "ass", "ballsack", "balls", "bastard", "bitch", "biatch", "bloody", "blowjob", "boner", "boob", "bugger", "bum", "butt", "buttplug", "clitoris", "cock", "coon", "crap", "cunt", "damn", "dick", "dildo", "dyke", "fag", "feck", "fellate", "fellatio", "felching", "fuck", "fudgepacker", "fudge", "packer", "flange", "Goddamn", "God", "damn", "hell", "homo", "jerk", "jizz", "knobend", "knob", "end", "labia", "lmao", "lmfao", "muff", "nigger", "nigga", "penis", "piss", "poop", "prick", "pube", "pussy", "queer", "scrotum", "sex", "shit", "sh1t", "slut", "smegma", "spunk", "tit", "tosser", "turd", "twat", "vagina", "wank", "whore", "wtf"  ];
const EmojiNumbers        = [  "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"  ];
const TextChannels        = [  "text", "news"  ];

//Small Objects
var Banner          = {  Source: 0, Price: 1, Name: 2, Credit: 3, RevenueID: 4, AddedDate: 5  };
var StreamOptions   = {  volume: 1  };
var SearchOptions   = {  maxResults: 1, type: "video", key: process.env.YT_TOKEN  };

var Banners = require("./lists/backgrounds.json");
const Badges = require("./lists/badges.json");
const DefaultDescriptions = require("./lists/descriptions.json");
const YoutubeSongs = require("./lists/songs.json");
const TriviaQuestions = require("./lists/trivia.json");
const RandomWords = require("./lists/randomwords.json");

const WeeklyChallenges = require("./challenges/weekly.json");
const DailyChallenges = require("./challenges/daily.json");

//WEBSITE STUFF
async function WebsiteStuff()  {

    //API
    setInterval(async () => {

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
          "serverCount": peeky.guilds.cache.size,
          "upgradedServers": peeky.serverData.filter(i => i.server_upgraded == true).size,
          "profileCount": peeky.userData.count,
          "premiumCount": peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(PremiumRole)).size,
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

    }, 300000);

    //Leaderboard
    setInterval(async () => {

        peeky.userData.filter( p => p.MedallistBadge == true ).array().forEach(data => {
            peeky.userData.delete(`${data.UserID}`, "MedallistBadge");
        });

        function UpdateLeaderboardTypes(type)  {

            if  (type == "Gredit")  {
                var filtered = peeky.userData.filter( p => p.FashionBadge == true && p.LeaderboardRank && peeky.users.cache.has(p.UserID) ).array();
                var sorted   = filtered.sort((a, b) => b.LeaderboardRank - a.LeaderboardRank);
            };

            const top            = sorted.splice(0, Setting.LeaderboardLimit);
            var currentplace     = 0;
            var CurrentID        = 0;
            var GotBadge         = true;
            const Leaderboard    = [];
            const LeaderboardTop = [];

            LeaderboardPositions = [];

            for (var data of top)  {

                currentplace ++;

                LeaderboardPositions.push(data.UserID);

            if  (currentplace == 1)  {CurrentID = "first"} else if  (currentplace == 2)  {CurrentID = "second"}  else if  (currentplace == 3){CurrentID = "third"}  else  {CurrentID = "other"};
            if  (currentplace > 3)  {GotBadge = false};

                var CurrentUser = peeky.users.cache.get(data.UserID);

                if  (type == "Gredit")  {
                    var PlaceInfo = peeky.userData.get(`${data.UserID}`, 'LeaderboardRank').toLocaleString('en');
                };

                if  (GotBadge == true)  {
                    peeky.userData.set(`${data.UserID}`, true, "MedallistBadge");
                };

                var TheBannerShown = DefaultBackground;
                TheBannerShown = function_GetBackground(data.UserID);

                var SavedProfile = "<div class='leaderboarditem' id='" + CurrentID + "' style='background-image: url(" + TheBannerShown + ")'>  <b class='leaderboardname' id='" + CurrentUser.id + "'>  <img src='" + CurrentUser.displayAvatarURL({ format: 'png' }) + "' class='leaderboardicon'>  " + function_RemoveTags(CurrentUser.username) + "</b>  <br><br>  <b class='leaderboardstats'>" + currentplace + ". place with " + PlaceInfo + " score.</b>  </div>";
                if  (currentplace == 1 || currentplace == 2 || currentplace == 3)  {
                    LeaderboardTop.push(SavedProfile);
                } else  {
                    Leaderboard.push(SavedProfile);
                };

            };

            if  (type == "Gredit")  {
                return "<center> <div class='leaderboardtop'>" + LeaderboardTop.join("<br><br>") + "  <br><br>  <b class='toptext'> Get in the TOP 3 for the Medallist badge! </b>  </div> </center>" + Leaderboard.join("<br><br>");
            };

        };

        var LeaderboardGredit = await UpdateLeaderboardTypes("Gredit");
        //var LeaderboardKarma  = await UpdateLeaderboardTypes("Karma");
        //var LeaderboardLevel  = await UpdateLeaderboardTypes("Levels");

        //<div id='karma'>" +  LeaderboardKarma + "</div>  <div id='levels'>" +  LeaderboardLevel + "</div>
        await fs.writeFile('public/leaderboard.txt', "<div id='gredit'>" +  LeaderboardGredit + "</div>", (err) => {
            if (err) console.log(err);
        });

        console.log("The leaderboard has been updated.");

    }, 600000);

    //Backgrounds
    setInterval(async () => {

        var BackgroundList = [];

        var backgroundsincategory = 0;
        var backgroundspercategory = 100;
        var category = 1;
        var BannersReversed = Banners.slice().reverse();

        for (var i = 0; i < BannersReversed.length; i++)  {//.reverse()

            var backgroundnumber = i;
            var backgroundinfo = BannersReversed[backgroundnumber];
          
            if  (backgroundsincategory == 0)  {
                BackgroundList.push("<div class='background_category' id='category" + category + "'>");
            };
          
            var CommandString = Setting.DefaultPrefix + 'seebackground ' + (Banners.findIndex(i => i[0] == backgroundinfo[0]) + 1);

            if  (backgroundinfo[4] && peeky.userData.has(backgroundinfo[4]))  {
                var RevenueString = " <font color='lightgreen'>Revenue Enabled</font>";
            } else {
              var RevenueString = "";
            };

            if  (backgroundinfo[1] == Exclusive)  {
                var Price = Exclusive;
            } else {
              var Price = backgroundinfo[1].toLocaleString('en') + " Gredit";
            };

            if  (Date.now() - backgroundinfo[5] < DayMs)  {
                var NewString = " <font color='lightgreen'>New</font>";
            } else {
              var NewString = "";
            };

            var BackgroundString = '<div class="background">  <img src="' + backgroundinfo[0] + '"  width="500" height="300" class="background_image">  <div id="' + backgroundnumber + '">  <div class="background_centered">  <b class="background_text">  <font size="3">  ' + backgroundinfo[2] + RevenueString + NewString + '  </font>  <br>  <font size="2" color="lightgray">' + backgroundinfo[3] + '</font>  <br><br>  <font size="2" color="lightgray">' + Price.toLocaleString('en') + '</font>  <br>  <font size="1" color="lightgray"> ' + CommandString + '</font></b> </div>  </div>  </div>';

            BackgroundList.push(BackgroundString);

            backgroundsincategory = backgroundsincategory + 1; 
            if  (backgroundsincategory > backgroundspercategory)  {
                backgroundsincategory = 0;
                category = category + 1;
                BackgroundList.push("</div>");
            };
          
        };

        await fs.writeFile('public/backgrounds.txt', "<div> " + BackgroundList.join(" ") + " </div>", (err) => {
            if (err) console.log(err);
        });

        console.log("The backgrounds have been updated.");

    }, 600000);

    //Workshop
    setInterval(async () => {

        var WorkshopList = [];

        peeky.channels.cache.get(WorkshopChannel).messages.fetch({ limit: 50 }).then(async (messages) => {

        messages.forEach(m => {

            if  (!m.reactions.cache.find(r => r.emoji.name == "🏁") && m.reactions.cache.find(r => r.emoji.id == DefaultUpvote) && m.reactions.cache.find(r => r.emoji.id == DefaultDownvote) && m.attachments.size > 0 && m.content.includes("Name: ") && m.content.includes("Credit: ") && m.content.includes("Price: "))  {

                var BackgroundString = '<div class="background">  <img src="' + m.attachments.array()[0].url + '" width="500px" height="300px" class="background_image">  <div class="background_centered">  <b class="background_text">  <font size="3">  ' + function_FixCapitalization(m.content.split("\n")[0].replace("Name: ", "")) + '  </font>  <br>  <font size="2" color="lightgray">  ' + m.content.split("\n")[1].replace("Credit: ", "") + '  </font>  <br><br>  <font size="2">  ~ ' + m.content.split("\n")[2].replace("Price: ", "").toLocaleString('en') + ' Gredit </font>  <br>  <font size="1" color="lightgreen">  ' + (m.reactions.cache.find(r => r.emoji.id == DefaultUpvote).count - 1) + '  Upvotes</font>  <font size="1">🞄</font>  <font size="1" color="pink">  ' + (m.reactions.cache.find(r => r.emoji.id == DefaultDownvote).count - 1) + '  Downvotes</font>   </b>  </div>  </div>';
                WorkshopList.push(BackgroundString);

            };

        });
          
        if  (WorkshopList.length == 0)  {
            WorkshopList = ["There are no new submissions in the Workshop right now."];
        };

        await fs.writeFile('public/workshop.txt', "<div class='workshop'>" + WorkshopList.join(" ") + "</div>", (err) => {
            if (err) console.log(err);
        });  

        console.log("The workshop has been updated.");

        }).catch(error => ErrorBag.add(error));

    }, 600000);

    //Message Header
    setInterval(async () => {

        var Message = "";

        if  (Setting.EventStatus == true)  {
            Message = '<b class="messageheader">You can currently participate in the ' + Setting.EventName + ' event!</b>';  
        }
        else if  (Setting.Message !== "")  {
            Message = '<b class="messageheader">' + Setting.Announcement + ' </b>';  
        };

        await fs.writeFile('public/messageheader.txt', Message, (err) => {
            if (err) console.log(err);
        });

        console.log("The message header has been updated.");

    }, 300000);

    //Server List
    setInterval(async () => {

        var serverlist = peeky.serverData.filter( p => p.server_upgraded == true && p.GuildID ).array();
        var ServerList = []; 

        for (var data of serverlist)  {

            if  (peeky.guilds.cache.has(data.GuildID) && peeky.serverData.get(`${data.GuildID}`, "server_invite") !== "no_invite")  {

                var ServerInfo = "<font size='2' color='lightgray'>" + peeky.guilds.cache.get(data.GuildID).members.cache.filter(m => !m.user.bot).size.toLocaleString('en') + " members</font>";
                ServerList.push("<a href='https://discordapp.com/invite/" + data.server_invite + "'>  <div class='displayitem' id='" + data.GuildID + "' style='background-image: url(" + peeky.guilds.cache.get(data.GuildID).iconURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(peeky.guilds.cache.get(data.GuildID).name) + "  <br>  " + ServerInfo + "  </b>  </div>  </a>");

            };

        };

        await fs.writeFile('public/server_list.txt', ServerList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("The server list has been updated.");

    }, 600000);

    //Premium Users
    setInterval(async () => {

        var PremiumUsersList = [];
        peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(PremiumRole)).forEach(m => {
            if  (peeky.userData.has(m.user.id))  {
                PremiumUsersList.push("<div class='displayitem' id='" + m.user.id + "' style='background-image: url(" + m.user.displayAvatarURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(m.displayName) + "  <br>  <font size='1' color='lightgray'>  " + function_RemoveFormatting(peeky.userData.get(`${m.user.id}`, "Description"), "other", true) + "  </font>  </b>  </div>");
            };
        });

        await fs.writeFile('public/premiumusers.txt', PremiumUsersList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("The list of premium users has been updated.");

    }, 600000);

    //Boosters
    setInterval(async () => {

        var PremiumUsersList = [];
        peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(BoosterRole)).forEach(m => {
        if  (peeky.userData.has(m.user.id))  {

            PremiumUsersList.push("<div class='displayitem' id='" + m.user.id + "' style='background-image: url(" + m.user.displayAvatarURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(m.displayName) + "  <br>  <font size='1' color='lightgray'>  " + function_RemoveFormatting(peeky.userData.get(`${m.user.id}`, "Description"), "other", true) + "  </font>  </b>  </div>");

        };
        });

        await fs.writeFile('public/boosters.txt', PremiumUsersList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("The list of server boosters has been updated.");

    }, 600000);

    //Server Log
    setInterval(async () => {

        var serverloglist = peeky.serverData.filter( p => p.GuildID ).array();
        var ServerLogList = [];

        serverloglist.forEach(data =>  {

            if  (peeky.guilds.cache.has(data.GuildID))  {

                var guild = peeky.guilds.cache.get(data.GuildID);

                ServerLogList.push("<div class='displayitem' style='background-image: url(" + guild.iconURL({ format: 'png' }) + ")'>  <b class='displayname' value='" + data.GuildID + "'>" + function_RemoveTags(guild.name) + "  <br>  " + Languages[peeky.serverData.get(`${guild.id}`, "language")] + "  <br>  " + guild.members.cache.filter(m => m.user.bot).size + " bots" + "  <br>  " + guild.id + "   </b></div>");

            };

        });

        await fs.writeFile('public/server_log.txt', ServerLogList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("The server log has been updated.");

    }, 600000);

    //News
    setInterval(async () => {

        var NewsList = [];

        peeky.channels.cache.get(AnnouncementsChannel).messages.fetch({ limit: 10 }).then(async (messages) => {

        await messages.forEach(m => {
            var Header = m.content.split("\n")[0];
            var Body   = m.content.split("\n").join(" ").replace(Header, "");
            var Image  = [];
            var PrefixImage = "";
            var ImageLink   = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fpattern_fog.png?v=1576095415615";

            if  (m.attachments.size > 0)  {
                ImageLink = m.attachments.array()[0].url;
            }

            NewsList.push('<div class="newsitem" style="background-image: url(' + ImageLink 