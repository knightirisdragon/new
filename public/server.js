console.log("⚙️ Project started.");

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
const { registerFont } = Canvas;
registerFont('public/fonts/Roboto-Regular.ttf', { family: 'Roboto' });

//Data
const Enmap = require("enmap");
peeky.userData = new Enmap({name: "userData"});
peeky.serverData = new Enmap({name: "serverData"});
peeky.channelData = new Enmap({name: "channelData"});
peeky.peekyData = new Enmap({name: "peekyData"});
const Setting = require('./data/setting.json');
const DefaultServerData = require('./data/defaultserverdata.json');

//Website
const http    = require('http');
const express = require('express');
const app     = express();
const port    = process.env.PORT;
const url     = require('url');

//Ambassador Program
var AmbassadorInvites = null;

app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
  response.sendStatus(200);
});
app.listen(process.env.PORT);

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

//Miscellaneous Packages
const fs         = require('fs');
const node_fetch = require('node-fetch');
const https      = require('https');
const aki        = require('aki-api');

//Variables
var   EmbedColor         = 3093047  //3553599;
const AutoDeleteTime     = 250;
const MinuteMs           = 60000;
const DayMs              = 86400000;
const WeekMs             = 604800000;  //7 Days
const MonthMs            = 2592000000;  //30 Days
const YearMs             = 31556952000;  //30 Days
const ProfileWipe        = MonthMs;
const ServerWipe         = MonthMs * 3;

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
var FetchingServers         = new Set();
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
const EnabledIcon     = "<:enabled:538295053940948993>";
const DisabledIcon    = "<:disabled:538295054431813662>";
const SettingsIcon    = "<:settings:586612320839532573>";
const Hollow          = "<:peeky_hollow:506921440067452928>";
const TreasureIcon    = "<:treasure:623186257404755969>";
const GreditIcon      = "<:gredit:558673809343774720>";
const ChestIcon       = "<:chest:561511603305185280>";
const RedditUpvote    = "<:RedditUpvote:620124949855600640>";
const RedditDownvote  = "<:RedditDownvote:620122348745523200>";
const OwnerTag        = "<:owner:543001955921035274>";
const BoostTag        = "<:boost:642647004056518665>";
const BotTag          = "<:bot:541014775468130336>";

//Role IDs
const StaffRole            = "713539779224010802";
const VeteranRole          = "760621597395517450";
const PremiumRole          = "759839046158647347";
const TrialRole            = "787063191519625266";
const BoosterRole          = "760871079685128274";
const ServerUpgradeRole    = "787061748989558855";
const AmbassadorSkipRole   = "787061851996815391";
const DonationRole         = "787061956992565308";

//Other IDs
const OwnerId              = "108899856889737216";
const PeekyId              = "741865644605177899" //"482945063282802698";
const SupportServer        = "713538424954552423";
const AnnouncementsChannel = "787052463232516117";
const EmojiStorage1        = "493048757286600716";
const WorkshopChannel      = "787054460932849713";
const ServerLogChannel     = "787054725215813652";
const MainChatChannel      = "732649869021282344";

//Collaboration Bot IDs
const GopbotId = "458404920970969098";

//Strings
const AllString      = "all";
const RandomString   = "random";
const BadFormat      = "invalid";
const Exclusive      = "Exclusive";
const EnableStrings  = [  "enabled", "zapnutá", "zapnutá", "encender", "aktif", "Включено", "有効"  ];
const DisableStrings = [  "disabled", "vypnutá", "vypnutá", "apagado", "deaktif", "Включено", "無効"  ];
const Languages      = [  "English",  "Čeština", "Slovenčina", "Español", "Türkçe", "Русский", "日本語"  ];
const Booleans       = [  "true", "false"  ];

//Response Messages
const CooldownMessage1 = [
  ErrorIcon + " You are currently on a cooldown for that command.",
  ErrorIcon + " Tento příkaz je pro vás momentálně zastaven.",
  ErrorIcon + " Nemôžeš teraz použiť tento command.",
  ErrorIcon + " Actualmente estás en un período de enfriamiento para ese comando.",
  ErrorIcon + " Şu anda bu komutun bekleme süresindesiniz.",
  ErrorIcon + " Вы сейчас на перезагрузке для этой команды.",
  ErrorIcon + " 現在、そのコマンドのクールダウンを行っています。"
];
const CooldownMessage2 = [
  ErrorIcon + " Automated channel creation is currently on a cooldown.",
  ErrorIcon + " Automatická tvorba kanálů je momentálně zastavena.",
  ErrorIcon + " Automatickú tvorbu channelov nemôžeš teraz použiť.",
  ErrorIcon + " La creación de canales automatizada está actualmente en proceso de enfriamiento.",
  ErrorIcon + " Otomatik kanal oluşturma şu anda bir bekleme süresinde.",
  ErrorIcon + " Автоматизированное создание канала находится на перезагрузке.",
  ErrorIcon + " 現在、自動チャネル作成はクールダウン状態です。"
];
const CooldownMessage3 = [
  ErrorIcon + " Automated role creation is currently on a cooldown.",
  ErrorIcon + " Automatická tvorba rolí je momentálně zastavena.",
  ErrorIcon + " Automatické vytváranie rolí nemôžeš práve použiť.",
  ErrorIcon + " La creación automatizada de roles está actualmente en proceso de enfriamiento.",
  ErrorIcon + " Otomatik rol oluşturma şu anda bir bekleme süresinde.",
  ErrorIcon + " Автоматизированное создание ролей находится на перезагрузке.",
  ErrorIcon + " 現在、自動ロール作成はクールダウン状態です。"
];
const CooldownMessage4 = [
  ErrorIcon + " You are currently on a cooldown for that function.",
  ErrorIcon + " Tato funkce je pro vás momentálně zastavena.",
  ErrorIcon + " Nemôžeš teraz použiť túto funkciu.",
  ErrorIcon + " Usted actualmente está en un período de enfriamiento para esa función.",
  ErrorIcon + " Şu anda bu işlev için bir bekleme süresindesiniz.",
  ErrorIcon + " Вы сейчас на перезагрузке для этой функции.",
  ErrorIcon + " 現在、その関数のクールダウンを行っています。"
];

const PermissionsMessageError1 = [
  ErrorIcon + " You are lacking the required permissions do that.",
  ErrorIcon + " Chybý vám požadovaná oprávnění.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " Usted no tiene los permisos necesarios para hacerlo.",
  ErrorIcon + " Bunu yapmak için gerekli izinlere sahip değilsiniz.",
  ErrorIcon + " У вас нет необходимых разрешений для этого.",
  ErrorIcon + " 現在、自動ロール作成はクールダウン状態です。"
];
const PermissionsMessageError2 = [
  ErrorIcon + " You need to be the owner of this server to do that.",
  ErrorIcon + " Musíte být vlastníkem serveru.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " Usted necesita ser el dueño de este servidor para hacer eso.",
  ErrorIcon + " Bunu yapmak için bu sunucunun sahibi olmanız gerekir.",
  ErrorIcon + " Для этого вы должны быть владельцем этого сервера.",
  ErrorIcon + " これを行うには、このサーバーの所有者である必要があります。"
];
const PermissionsMessageError3 = [
  ErrorIcon + " I am missing required permissions to do that.",
  ErrorIcon + " Chybý mi požadovaná opravnění.",
  ErrorIcon + " Chýbajú mi požadované povolenia aby som to mohol spraviť.",
  ErrorIcon + " No tengo los permisos necesarios para hacerlo.",
  ErrorIcon + " Bunu yapmak için gerekli izinlere sahip değilim.",
  ErrorIcon + " У меня нет необходимых разрешений для этого.",
  ErrorIcon + " 私はそれを行うために必要な権限が欠落しています。"
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
  "unused"
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
  ErrorIcon + " You need to join the Community Server.",
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
var StreamOptions   = {  volume: false  };
var SearchOptions   = {  maxResults: 1, type: "video", key: process.env.YT_TOKEN  };

var Banners = require("./data/backgrounds.json");
const Badges = require("./data/badges.json");
const YoutubeSongs = require("./data/songs.json");
const TriviaQuestions = require("./data/trivia.json");
const RandomWords = require("./data/randomwords.json");

const WeeklyChallenges = require("./challenges/weekly.json");
const DailyChallenges = require("./challenges/daily.json");

//WEBSITE STUFF
async function WebsiteStuff()  {
  
  //Auto Wipe
    setInterval(async () => {

        //Guilds
        var filtered       = peeky.serverData.filter(p => p.GuildID && p.lastSeen);
        var toRemoveGuilds = filtered.filter(data => new Date() - new Date(data.lastSeen) > ServerWipe);

        toRemoveGuilds.forEach(async data => {

            if  (!data.server_upgraded)  {

                peeky.serverData.delete(data.GuildID);

                var Guild = peeky.guilds.cache.get(data.GuildID);
                if  (Guild)  {
                    if  (Guild.owner)  {
                        const embed = {"description": "I'm leaving one of your servers because of long inactivity.", "footer": { "text": "https://peeky.glitch.me/pages/tutorials.html#autowipe" }, "color": EmbedColor}; 
                        await function_DirectMessage(Guild.owner.user.id, { embed });
                    };
                    await Guild.leave();
                };

                console.log("📝 I have removed an inactive server.");    

            };

        });

        //Profiles
        var filtered = peeky.userData.filter( p => p.UserID && p.lastSeen );
        var toRemoveProfiles = filtered.filter(data => new Date() - new Date(data.lastSeen) > ProfileWipe);

        toRemoveProfiles.forEach(data => {
            if  (!peeky.users.cache.has(data.UserID) || !data.FashionBadge)  {
                peeky.userData.delete(`${data.UserID}`);
                console.log("📝 I have wiped an inactive profile.");
            };
        });

        console.log("⚙️ The Auto Wipe system has been activated.");

    }, 3600000);

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
            "maxServerCount": Setting.MaxServers,
            "maxBotCount": Setting.MaxBots,
            "upgradedServers": peeky.serverData.filter(i => i.server_upgraded == true).size,
            "profileCount": peeky.userData.count,
            "premiumCount": peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(PremiumRole)).size,

            "event": Setting.event,

            "customBackground": Setting.CustomBackgroundPrice,
            "sellMultiplier": Setting.SellMultiplier,
            "expMultiplier": Setting.ExpNeeded,
            
            "badges":  Badges,
            "backgrounds":  Banners
        };

        await fs.writeFile('public/website_data/api.json', JSON.stringify(UpdatedApi, null, 2), (err) => {
            if (err) console.log(err); 
        });

        console.log("📡 The API has been updated.");

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

            const top            = sorted.slice(0, Setting.LeaderboardLimit);
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
        await fs.writeFile('public/website_data/leaderboard.txt', "<div id='gredit'>" +  LeaderboardGredit + "</div>", (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The leaderboard has been updated.");

    }, 300000);

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

            if  (backgroundinfo[4] && peeky.userData.has(backgroundinfo[4]) && backgroundinfo[1] !== Exclusive)  {
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

        await fs.writeFile('public/website_data/backgrounds.txt', "<div> " + BackgroundList.join(" ") + " </div>", (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The backgrounds have been updated.");

    }, 300000);

    //Workshop
    setInterval(async () => {

        var WorkshopList = [];
          var Setting = peeky.serverData.get(SupportServer, "automatic_reactions_bonus_setting");

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

        await fs.writeFile('public/website_data/workshop.txt', "<div class='workshop'>" + WorkshopList.join(" ") + "</div>", (err) => {
            if (err) console.log(err);
        });  

        console.log("📡 The workshop has been updated.");

        }).catch(error => ErrorBag.add(error));

    }, 300000);

    //Message Header
    setInterval(async () => {

        var Message = "";

        if  (Setting.event.status)  {
            Message = '<b class="messageheader">You can currently participate in the ' + Setting.event.name + ' event!</b>';  
        }
        else if  (Setting.Message !== "")  {
            Message = '<b class="messageheader">' + Setting.Message + ' </b>';  
        };

        await fs.writeFile('public/website_data/messageheader.txt', Message, (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The message header has been updated.");

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

        await fs.writeFile('public/website_data/server_list.txt', ServerList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The server list has been updated.");

    }, 300000);

    //Premium Users
    setInterval(async () => {

        var PremiumUsersList = [];
        peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(PremiumRole) && peeky.userData.get(`${m.user.id}`, "PremiumLength") !== "Trial").forEach(m => {
            if  (peeky.userData.has(m.user.id))  {
                PremiumUsersList.push("<div class='displayitem' id='" + m.user.id + "' style='background-image: url(" + m.user.displayAvatarURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(m.displayName) + "  <br>  <font size='1' color='lightgray'>  " + function_RemoveFormatting(peeky.userData.get(`${m.user.id}`, "Description"), "other", true) + "  </font>  </b>  </div>");
            };
        });

        await fs.writeFile('public/website_data/premiumusers.txt', PremiumUsersList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The list of premium users has been updated.");

    }, 300000);

    //Boosters
    setInterval(async () => {

        var PremiumUsersList = [];
        peeky.guilds.cache.get(SupportServer).members.cache.filter(m => m.roles.cache.has(BoosterRole)).forEach(m => {
        if  (peeky.userData.has(m.user.id))  {

            PremiumUsersList.push("<div class='displayitem' id='" + m.user.id + "' style='background-image: url(" + m.user.displayAvatarURL({ format: 'png' }) + ")'>  <b class='displayname'>" + function_RemoveTags(m.displayName) + "  <br>  <font size='1' color='lightgray'>  " + function_RemoveFormatting(peeky.userData.get(`${m.user.id}`, "Description"), "other", true) + "  </font>  </b>  </div>");

        };
        });

        await fs.writeFile('public/website_data/boosters.txt', PremiumUsersList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The list of server boosters has been updated.");

    }, 300000);

    //Server Log
    setInterval(async () => {

        var serverloglist = peeky.serverData.filter( p => p.GuildID ).array();
        var ServerLogList = [];

        serverloglist.forEach(data =>  {

            if  (peeky.guilds.cache.has(data.GuildID))  {

                var guild = peeky.guilds.cache.get(data.GuildID);
              
                var DaysLeft = Math.floor(function_TimeLeft(peeky.serverData.get(data.GuildID, "lastSeen"), "days", ServerWipe  / ( 24 * 60 * 60 * 1000 ))) + " days left";
                if  (peeky.serverData.get(data.GuildID, "server_upgraded") == true)  {
                    DaysLeft = "Upgraded";
                };

                ServerLogList.push("<div class='displayitem' style='background-image: url(" + guild.iconURL({ format: 'png' }) + ")'>  <b class='displayname' value='" + data.GuildID + "'>" + function_RemoveTags(guild.name) + "  <br>  " + Languages[peeky.serverData.get(`${guild.id}`, "language")] + "  <br>  " + guild.members.cache.filter(m => m.user.bot).size + " bots, " + DaysLeft + "  <br>  " + guild.id + "   </b></div>");

            };

        });

        await fs.writeFile('public/website_data/server_log.txt', ServerLogList.join(" "), (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The server log has been updated.");

    }, 300000);

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

            NewsList.push('<div class="newsitem" style="background-image: url(' + ImageLink + ')">  <div class="textbackground">  <b class="newsheader">  ' + function_RemoveFormatting(Header, "other", true) + '  </b>  <br>  <b class="newsauthor">  <font color="#7289DA">' + m.author.tag + '</font> @ <font color="#7289DA">' + function_DateFormat(m.createdAt, "Date", 0) + '</font>  </b>  <b class="newsbody">  ' + function_ProperSlice(function_RemoveFormatting(Body, "other", false), 250) + '  </b>  <a class="button" href="' + m.url + '">🔍</a>  </div>  </div>');
        });

        await fs.writeFile('public/website_data/news.txt', NewsList.join(""), (err) => {
            if (err) console.log(err);
        });    

        }).catch(error => ErrorBag.add(error));

        console.log("📡 The news have been updated.");

    }, 300000);

    //Staff
    setInterval(async () => {

        var DevList    = [];
        var ModList    = [];

        peeky.guilds.cache.get(SupportServer).members.cache.forEach(m => {

          if  (m.roles.cache.has(StaffRole))  {

              var CurrentContact = '<div class="container" style="background-image: url(\'' + m.user.displayAvatarURL({ format: 'png' }) + '\');">  <b class="description">  <font size="3"> ' + function_RemoveTags(m.displayName) + '  </font>  <br>  <font size="1" color="lightgray"> ' + function_RemoveTags(m.user.tag) + '  </font>  </b>  </div>';  
              ModList.push(CurrentContact);

          };

        });

        await fs.writeFile('public/website_data/staff.txt', '<div class="inlinediv">  ' + ModList.join(" ") + '  </div>', (err) => {
            if (err) console.log(err);
        });

        console.log("📡 The staff has been updated.");

    }, 300000);

    //PEEKY Stats
    setInterval(async () => {

        await fs.writeFile('public/website_data/stats.txt', "<a class='botstats'><font color='#7289DA'>" + peeky.guilds.cache.size + " / " + Setting.MaxServers + "</font> Servers</a>  <br>  <a class='botstats'><font color='#7289DA'>" + peeky.userData.count + "</font> Profiles</a>  <br>  <a class='botstats'><font color='#7289DA'>" + function_TimeLeft(peeky.user.createdAt, "days", null) + "</font> Days old</a>", (err) => {
            if (err) console.log(err); 
        });

        console.log("📡 The stats have been updated.");

    }, 300000);

    //Random Songs
    const SongList = [];

    YoutubeSongs.forEach(song_info => {
        SongList.push('<iframe width="560px" height="315px" src="' + song_info[0].replace("watch?v=", "embed/") + '" frameborder="0"></iframe>');
    });

    await fs.writeFile('public/website_data/random_songs.txt', SongList.join(" <br> "), (err) => {
        if (err) console.log(err);
    });

    console.log("📡 The random songs have been updated.");

    //Badges
    const BadgeList = [];
  
    Badges.forEach(badge => {          
        BadgeList.push("<div class='itemdiv'>  <font size='4'>  <img src='" + badge[2] + "' class='img_badge'>  " + badge[7] + "</font>  <br>  <font size='2'>" + badge[8] + "</font>  <br><br>  <font size='1'>" + badge[3] + " Gredit gain, " + badge[4] + " Exp gain</font>  </div>");
    });

    await fs.writeFile('public/website_data/badges.txt', BadgeList.join(" <br> "), (err) => {
        if (err) console.log(err);
    });

    console.log("📡 The badges have been updated.");

    //Miscellaneous
    await fs.writeFile('public/website_data/supportedlanguages.txt', Languages.join(", ") + ".", (err) => {
        if (err) console.log(err); 
    });

    await fs.writeFile('public/website_data/botdescription.txt', Setting.Description, (err) => {
        if (err) console.log(err); 
    });

    console.log("📡 The miscellaneous stuff has been updated.");

};

//FUNCTIONS

//JSON Variables
function JsonVars()  {
  
  //Default Background
  Banners[0][0] = DefaultBackground;
  
  //Other Variables
  Banners.forEach(banner => {
    
      if  (banner[1] == "EXCLUSIVE")  {
          banner[1] = Exclusive;
      };
    
      if  (banner[0] == "NO_BACKGROUND")  {
          banner[0] = NoBackground;
      };
                 
  });
  
};

//Create Server Data
function function_ServerData(key)  {
  
    if  (!peeky.serverData.has(key))  {

        peeky.serverData.ensure(key, DefaultServerData);
        peeky.serverData.set(key, key, "GuildID");
        peeky.serverData.set(key, Setting.DefaultPrefix, "prefix");
        peeky.serverData.set(key, Date.now(), "lastSeen");
        
        console.log("📝 Created server data for " + key + ".");
  
    } else {
      
      //Remove invalid stuff
      for  (const item in peeky.serverData.get(key))  {
        
          if  (!(item in DefaultServerData))  {
              peeky.serverData.delete(key, item);
          };
        
      };
      
      //Add missing stuff
      for  (const item in DefaultServerData)  {
        
          if  (!peeky.serverData.has(key, item))  {
              peeky.serverData.set(key, DefaultServerData[item], item);
          };
        
      };
      
    };
  
};

//Create Channel Data
function function_ChannelData(key)  {
  
    if  (!peeky.channelData.has(key))  {

        peeky.channelData.ensure(key , {
            ChannelID: key,

            flood_protection_bonus_lastdate: null,
            flood_protection_bonus_lastuser: null,
            flood_protection_bonus_lastmsg: null,
        });
      
        console.log("📝 Created channel data for " + key + ".");
      
    };
  
};

//Function Notification
function FunctionNotification(guild, type)  {

    console.log("🛠️ The " + type + " function has been triggered in " + function_RemoveFormatting(guild.name, "other", false) + ".");
  
};

//Update AutoWipe
function function_UpdateAutowipe(key, type)  {

    if  (type == "server")  {
        peeky.serverData.set(key, Date.now(), "lastSeen");
        //console.log("Updated autowipe for " + key + ".");
    };

    if  (type == "user")  {
        peeky.userData.set(key, Date.now(), "lastSeen");
        //console.log("Updated autowipe for " + key + ".");
    };
  
};

//Update Bans
function function_UpdateBans()  {
  
    BannedUsers.slice(0, BannedUsers.length);
    peeky.guilds.cache.get(SupportServer).fetchBans().then(banned => {
        
        banned.array().forEach(i => {
            BannedUsers.push(i.id);
        });

    });
      
    console.log("📡 The banned users have been updated.");
  
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

//Get Background Info
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
                Background.push(Banners[i][Banner.Price].toLocaleString('en'));
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

//Direct Message
function function_DirectMessage(key, message)  {
  
    if  (!FailedDMs.has(key))  {
      
        peeky.users.cache.get(key).send(message).catch(err => {
            ErrorBag.add(err); 

            FailedDMs.add(key);
            setTimeout(() => {FailedDMs.delete(key)}, 300000);          
        });
      
    };
  
};

async function CheckWebhook(name, channel, message, messagetext)  {

    channel.fetchWebhooks().then(async webhook =>  {

        var Webhook = webhook.find(w => w.name == name);
        if  (message.attachments.size > 0)  {  var image = message.attachments.array()[0].url;  }  else  {  var image = HollowImage;  }; 

        if  (!Webhook)  {

            await channel.createWebhook(name, { avatar: peeky.user.displayAvatarURL({ format: 'png' }) });

            Webhook = webhook.find(w => w.name == name);

        };

        if  (Webhook)  {

            if  (name == "PEEKY: Message Log")  {
                
                Webhook.send(messagetext + "\n­", {

                   "username": message.member.displayName,
                   "avatarURL": message.author.displayAvatarURL({ format: 'png' }),
                   "files": [image],
                    
                    "embeds":  [{
                        "description": "[🔍](" + message.url + ")",
                        "color": EmbedColor
                    }]

                }).catch(error => ErrorBag.add(error));
              
            } else {
              Webhook.send(messagetext + "\n­", {

                 "username": message.member.displayName,
                 "avatarURL": message.author.displayAvatarURL({ format: 'png' }),
                 "files": [image]

              }).catch(error => ErrorBag.add(error));
            };

        };

    });
  
};

//FUNCTIONS [[

//Welcome Messages embed
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

    const background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(member.id, 1, "Background");});
      
    if  (Failed == false)  {

    ctx.drawImage(background, 0, 0, canvas.width, 300);       
    
    const layout = await Canvas.loadImage("https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fwelcome_messages_layout_4.1.png?v=1584230264421");
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

    ctx.font = "64px " + Setting.DefaultFont;
    ctx.fillText("•", canvas.width - 2, 36);
      
    //Name String
    ctx.font = "25px " + Setting.DefaultFont;
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
  
    if  (detected == true)  {
        ctx.fillStyle = "pink";
        var NameString = "Censored";    
    } else {
        ctx.fillStyle = "white";
        var NameString = peeky.users.cache.get(key).username;
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

//Banned Words
async function BannedWords(keySF, message, Language)  {
  
    if  (peeky.serverData.get(keySF, "banned_words_bonus") == true)  {

        if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

            if  (!message.member.permissions.has("MANAGE_MESSAGES") && peeky.serverData.get(keySF, "banned_words_bonus_setting").some(word => message.content.toLowerCase().includes(word)))  {  //function_RemoveFormatting(message.content.toLowerCase(), "strict", false)

                message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

                if  (message.channel.permissionsFor(peeky.user).has('MANAGE_WEBHOOKS'))  {

                    CheckWebhook("PEEKY: Banned Words", message.channel, message, "[Original Message Redacted]");

                } else

                if  (!ResponseCooldowns.has(message.guild.id + "BW"))  {

                    ResponseCooldowns.add(message.guild.id + "BW");
                    setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "BW")}, ResponseCooldownMS);

                    var TranslatedMessages = [InfoIcon + " That phrase is blocked by the **Banned Words** function, **X001**.", InfoIcon + " Tato fráze je pomocí funkce **Banned Words** zablokována, **X001**.", InfoIcon + " Táto fráza je zablokovaná kvôli **Banned Words** funkcii, **X001**.", InfoIcon + " Táto fráza je zablokovaná kvôli **Banned Words** funkcii, **X001**.", InfoIcon + " Esa frase está bloqueada por la función **Banned Words**, **X001**.", InfoIcon + " Bu ifade **Banned Words** fonksiyonu yüzünden engellendi, **X001**.", InfoIcon + " Эта фраза блокируется функцией **Banned Words**, **X001**.", InfoIcon + " そのフレーズは**Banned Words**関数によってブロックされています、**X001**。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", message.member.displayName),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

                };

                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(message.guild, "Banned Words");

            };

        };

    };

};

//Stream Announcements
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
      
        if  (activity)  {
            GameName = function_RemoveFormatting(activity.name, "other", false);
        };

    };

    return {  "description": "­ \n **Name:** " + GameName + " \n **Link:** " + GameLink + " \n\n ­",  "color": GameColor,  "author": {  "name": function_RemoveFormatting(member.displayName, "other", true) + " has started live streaming on " + GameHost + "!",  "icon_url": member.user.displayAvatarURL({ "format": "png" })  }  };

};

// FUNCTIONS  ]]

//Music embed
async function function_MusicEmbed(Title, Thumbnail, Author, Length, User, Type, Queue, Member, LastPlaylist)  {

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
    ctx.fillText("Playing a song from " + Author + ".", 15, 310);
    /*if  (Type == "Started")  {
        ctx.fillText(Member.displayName + " has requested " + Author + "'s song.", 15, 310);
    }  else if  (Type == "Playlist")  {
        //ctx.font = "13px " + Setting.DefaultFont;
        ctx.fillText(Member.displayName + " has requested " + peeky.userData.get(User, "Playlist").length + " songs from " + LastPlaylist + ".", 15, 310, canvas.width - 30);
    }  else if  (Type == "Queue")  {
        ctx.fillText("Playing the next song from " + Member.displayName + "'s playlist.", 15, 310);
    }  else if  (Type == "Random")  {
        ctx.fillText(Member.displayName + " has requested a random song.", 15, 310);
    }  else if  (Type == "Previous")  {
        ctx.fillText(Member.displayName + " has requested the previous song.", 15, 310);
    }  else if  (Type == "Current")  {
        if  (Queue.length <= 1)  {
            ctx.fillText("Currently playing with approximately " + function_TimeLeft(Length, "minutes", null) + " minutes left.", 15, 310);
        } else {
          ctx.fillText("Next song is starting in approximately " + function_TimeLeft(Length, "minutes", null) + " minutes.", 15, 310);
        };
    };*/

    //Song Name
    ctx.font = "20px " + Setting.DefaultFont;
    ctx.fillText(Title, 15, 345, canvas.width - 30);

    return attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });

};

//Ambassador Program
function function_AmbassadorProgram(member, real)  {
  
    var key = `${member.user.id}`;
  
    member.guild.fetchInvites().then(guildInvites => {

        const ei = AmbassadorInvites;
        AmbassadorInvites = guildInvites;
      
        var invite;
        var inviter;
        var invitermember = member;
        var key2 = key;

        if  (real)  {
            invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
            invitermember = peeky.guilds.cache.get(SupportServer).members.cache.find(m => m.user.id == invite.inviter.id);

            key2 = invite.inviter.id;
        };

        if  ((real && invitermember && !peeky.userData.get(key2, "AmbassadorInvites").includes(member.user.id)) || (!real))  {
          
            //Seasonal Reset
            if  (peeky.userData.get(key2, "AmbassadorSeason") !== peeky.peekyData.get("ambassadorprogram", "season"))  {              
                peeky.userData.set(key2, peeky.peekyData.get("ambassadorprogram", "season"), "AmbassadorSeason");
                peeky.userData.set(key2, [], "AmbassadorInvites");
            };

            var invites = peeky.userData.get(key2, "AmbassadorInvites");
          
            if  (invites.length < 50)  {
              
                if  (real)  {
                    peeky.userData.observe(key2, "AmbassadorInvites").push(member.user.id);

                    //Receiver Rewards
                    if  (!["vqPERwzn9k"].includes(invite.code) && peeky.userData.has(key) )  {

                        if  (!peeky.userData.get(key, "ReceiverBadge"))  {
                            peeky.userData.set(key, true, "ReceiverBadge");
                        };

                    };
                } else {
                   peeky.userData.observe(key2, "AmbassadorInvites").push("Purchased");
                };

                //Inviter Rewards
                if  (!peeky.userData.get(key2, "AmbassadorBadge") && real)  {
                    peeky.userData.set(key2, true, "AmbassadorBadge");
                };

                const Rewards = peeky.peekyData.get("ambassadorprogram", "data");
                var RewardName = "";
              
                var index = 0;
                peeky.peekyData.get("ambassadorprogram", "data").forEach(reward => {
                    
                    index ++;
                  
                    if  (invites.length == index * 5)  {
                        
                        var RewardName = "You have received X as a reward.";
                      
                        if  (reward[0] == "gredit")  {
                            peeky.userData.math(key2, "+", reward[1], "Gredit");
                            RewardName = RewardName.replace("X", reward[1] + " Gredit");
                        } else
                      
                        if  (reward[0] == "chest")  {
                            peeky.userData.math(key2, "+", reward[1], "Chests");
                            RewardName = RewardName.replace("X", reward[1] + " Chest");
                        } else
                      
                        if  (reward[0] == "exp")  {
                            peeky.userData.math(key2, "+", reward[1], "Exp");
                            RewardName = RewardName.replace("X", reward[1] + " Exp");
                        } else
                      
                        if  (reward[0] == "background")  {
                            peeky.userData.observe(key2, "Inventory").push(reward[1] + 1);
                            RewardName = RewardName.replace("X", "The \"" + function_GetBackgroundInfo(69, ["name"]) + "\" Background");
                        } else
                        if  (reward[0] == "premiumtrial")  {
                            RewardName = RewardName.replace("X", reward[1] + " Premium Trial");
                            invitermember.roles.add(TrialRole).catch(error => ErrorBag.add(error));
                        };
                      
                    };
                  
                });
              
                if  (real)  {

                    const embed = {"description": "**Ambassador Program**" + "\n" + "Someone has used your invite link to join the Community Server!" + RewardName,  "color": EmbedColor}; 
                    function_DirectMessage(key2, { embed });

                };
          
            };

        };

    });
  
};

//Challenge Rewards
function function_ChallengeRewards(key, challenge, type)  {
    
    if  (type && peeky.userData.get(key, type) !== challenge[0])  {
    
        peeky.userData.set(key, challenge[0], type);

        var RewardAmount = challenge[3];
        var RewardName = challenge[4];
        var TotalReward = RewardAmount;

        if  (RewardName !== "Background")  {

            if  (peeky.guilds.cache.get(SupportServer).members.cache.has(key) && peeky.guilds.cache.get(SupportServer).members.cache.get(key).roles.cache.has(PremiumRole))  {
                TotalReward = TotalReward + RewardAmount;
            };

            if  (peeky.guilds.cache.get(SupportServer).members.cache.has(key) && peeky.guilds.cache.get(SupportServer).members.cache.get(key).roles.cache.has(BoosterRole))  {
                TotalReward = TotalReward + RewardAmount;
            };

            peeky.userData.math(key, "+", TotalReward, RewardName);

        } else {

          peeky.userData.observe(key, "Inventory").push(TotalReward);

        };

        if  (peeky.userData.get(key, "CompletionistBadge"))  {
            peeky.userData.set(key, true, "CompletionistBadge");
        };
      
        return true;
      
    } else {
      return false;
    };
  
};

//Remove Formatting
function function_RemoveFormatting(text, type, sliced)  {
    
    if  (text.length > 0)  {
  
        if  (type == "channel")  {

            var FixedText = text.toLowerCase().replace(/[~*|`]/g, '').replace(/[ ]/g, '_').replace(/\n/g, '');

            if  (sliced == true)  {
                FixedText.slice(0, 100);
            };

            if  (FixedText !== "" && FixedText)  {
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

            if  (FixedText !== "" && FixedText)  {
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

            if  (FixedText !== "" && FixedText)  {
                return FixedText;
            } else {
                return BadFormat;
            };

        } else

        if  (type == "strict")  {

            var FixedText = text.replace(/[ ~*|`_]/g, '').replace(/\n/g, '');

            if  (FixedText !== "" && FixedText)  {
                return FixedText;
            } else {
                return BadFormat;
            };

        };
      
    } else {
      return undefined;
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

//Array Items
function function_ArrayItems(array, limit, joiner)  {
  
    if  (!limit)  {
        var limit = 10;
    };
  
    if  (array.length < 1)  {
        array = "None";
    } else {
      
      if  (array.length > limit)  {
          array = array.slice(0, limit);
          array.push(" and more...");
          array = array.join(joiner);
      } else {
        array = array.join(joiner);
      };

    };
  
    return array;
  
};

//Numarize Array
function function_NumarizeArray(array, brackets, index)  {

    var Current = 0; var List = [];

    if  (index)  {
  
        if  (array.length > 0)  {
            array.forEach(i => {
                Current ++;
                List.push(Current + ". " + brackets[0] + i[index] + brackets[1] + "\n");
            });
        } else {
          return "None";
        }

        return List.join("");      
      
    } else {
  
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

};

//Date Format
function function_DateFormat(value, type, timezone)  {
  
    value = new Date(value + (timezone * 3600000));

  
    if  (type == "Both")  {
      
      var ThisHour  = value.getUTCHours();
      var ThisMinute = value.getUTCMinutes();
      
      var ThisDate  = value.getUTCDate();
      var ThisMonth = value.getUTCMonth() + 1;

      if  (ThisHour < 10)  {
          ThisHour = "0" + ThisHour;
      };

      if  (ThisMinute < 10)  {
          ThisMinute = "0" + ThisMinute;
      };

      if  (ThisDate < 10)  {
          ThisDate = "0" + ThisDate;
      };

      if  (ThisMonth < 10)  {
          ThisMonth = "0" + ThisMonth;
      };

      return Days[value.getUTCDay()] + ", " + ThisDate + "/" + ThisMonth + "/" + value.getFullYear() + " (" + ThisHour + ":" + ThisMinute + ")";
        
    } else
  
    if  (type == "Time")  {
      
      var ThisHour  = value.getUTCHours();
      var ThisMinute = value.getUTCMinutes();

      if  (ThisHour < 10)  {
          ThisHour = "0" + ThisHour;
      };

      if  (ThisMinute < 10)  {
          ThisMinute = "0" + ThisMinute;
      };

      return Days[value.getUTCDay()] + ", " + ThisHour + ":" + ThisMinute;
        
    } else
  
    if  (type == "JustTime")  {
      
      var ThisHour  = value.getUTCHours();
      var ThisMinute = value.getUTCMinutes();

      if  (ThisHour < 10)  {
          ThisHour = "0" + ThisHour;
      };

      if  (ThisMinute < 10)  {
          ThisMinute = "0" + ThisMinute;
      };

      return ThisHour + ":" + ThisMinute;
        
    } else {
      
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

//Detect Link
function function_DetectLink(string)  {

  if  (string.length > 0)  {
    
      if  (string.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g) || string.match(/(http(s?):\/\/tenor.com)/g))  {
          return true;
      } else {
        return false;
      };
    
  };
  
};

peeky.on('ready', () => {

	  console.log("⚙️ PEEKY is now online.");
    peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));
  
    //Functions
    JsonVars();

    //Update Ambassador Program Invites
    setTimeout(() => {
        peeky.guilds.cache.get(SupportServer).fetchInvites().then(guildInvites => {
            AmbassadorInvites = guildInvites;
        });
    }, 1000);

    //Update Banned Users
    setTimeout(() => {
        peeky.guilds.cache.get(SupportServer).members.fetch().then(m => {
            function_UpdateBans();
        });
    }, 1000);
  
    //Clear Queues
    var filtered = peeky.serverData.filter( p => p.GuildID && p.Queue && p.Queue.length > 0);
    filtered.forEach(data => {
        peeky.serverData.set(data.GuildID, [], "Queue");
    });
  
    WebsiteStuff();

    //Fix ServerData
    peeky.guilds.cache.forEach(guild => {
        function_ServerData(`${guild.id}`);
    });

    //Fix ChannelData
    peeky.channels.cache.forEach(channel => {
        function_ChannelData(`${channel.id}`);
    });
  
    //Miscellaneous Interval
    setInterval(() =>  {        

        //Update Banned Users
        function_UpdateBans();
      
    }, 3600000);

    //Bot Stats
    setInterval(() => {
      
        var GuildSize = peeky.guilds.cache.size;
      
        //Set user info
        peeky.user.setActivity('people type p!help', { type: 'WATCHING' }).catch(error => ErrorBag.add(error));
        /*peeky.user.setAvatar(RandomAvatars[Math.floor(Math.random()*RandomAvatars.length)]).catch(error => ErrorBag.add(error));
        console.log("Updated PEEKY's avatar.");*/
      
        //Post Server Counts - BLS
        bls.postServerCount(GuildSize).catch(err => {
            console.log("🔌 Failed to post the server count to BLS."); ErrorBag.add(err);
        });

        //Post Server Counts - BFD
        node_fetch(`https://botsfordiscord.com/api/bot/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.BFD_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {
            console.log("🔌 Failed to post the server count to BFD."); ErrorBag.add(err);
        });

        //Post Server Counts - BD
        node_fetch(`https://discord.boats/api/v2/bot/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.BD_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {
            console.log("🔌 Failed to post the server count to DB."); ErrorBag.add(err);
        });

        /*//Post Server Counts - CDL
        node_fetch(`https://www.cloudlist.xyz/api/stats/${peeky.user.id}`, {
            method: 'POST',
            headers: {
                'Authorization': process.env.CDL_TOKEN,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  server_count: GuildSize  })
        }).catch(err => {
            console.log("🔌 Failed to post the server count to CDL."); ErrorBag.add(err);
        });*/
      
        console.log("📡 Stats posted to the bot lists.");
      
    }, 3600000);
  
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
  
    if  (peeky.serverData.has(keySF) && !message.author.bot && !message.webhookID)  {
      
        peeky.userData.ensure(key , {

            //Database
            UserID: message.author.id,
            lastSeen: Date.now(),

            //Profile
            Background: 1,
            Description: "No description.",
            Inventory: [1],
            Badges: [],
            Gredit: 0,
            Karma: 0,
            Exp: 1,
            Level: 1,
            Chests: 0,
            Votes: 0,
            UpgradedServers: 0,
            SupporterLastPurchase: 0,
            PremiumLength: "Month",
            BoosterStart: 0,
            DailyRewarded: 0,
            LeaderboardRank: 1,
            LastDailyChallenge: "",
            LastWeeklyChallenge: "",
            InventoryInfo: ["message_id", "page_type", "page_number", "key"],

            //Playlist
            Playlist: [],
            PlaylistName: "Favorite Songs",
            PlaylistThumbnail: null,

            //Badges
            BadgeGredit: 0,
            BadgeExp: 0,

            //Other
            EssentialsEnabled: false,
            ParticipatedEvents: [],
            AmbassadorInvites: [],
            AmbassadorSeason: peeky.peekyData.get("ambassadorprogram", "season")

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
    var CollectedBadges   = [];

    //Default gain
    BadgeGreditAmount += 5;
    BadgeExpAmount    += 5;

    //Upgraded Server
    if  (peeky.serverData.get(keySF, "server_upgraded") == true)  {
        BadgeGreditAmount += 2;
        BadgeExpAmount += 2;
    };
      
    Badges.forEach(badge => {

        if  ((badge[5] == false && peeky.userData.get(key, badge[0]) == true) || (badge[5] == true && peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(badge[6])))  {
          
            CollectedBadges.push([badge[1], badge[2]]);
            BadgeGreditAmount = BadgeGreditAmount + badge[3];
            BadgeExpAmount = BadgeExpAmount + badge[4];
          
        };

    });
      
    //BadgeExpAmount    += peeky.userData.get(key, "UpgradedServers");
    //BadgeGreditAmount += peeky.userData.get(key, "UpgradedServers");

    //EVENT DOUBLE EXP
    if  (Setting.event.status)  {
        BadgeExpAmount = BadgeExpAmount * 2;
    };

    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeGreditAmount), "Gredit");
    peeky.userData.math(key, "+", Math.round(Math.random() * BadgeExpAmount), "Exp");
      
    peeky.userData.set(key, BadgeGreditAmount, "BadgeGredit");
    peeky.userData.set(key, BadgeExpAmount, "BadgeExp");
    peeky.userData.set(key, CollectedBadges, "Badges");
      
    //LEADERBOARD SCORE
    var LeaderboardRank = 1;
    var Factors = [["Gredit", 50000, false], ["Karma", 250, false], ["Levels", 10, false], ["Inventory", 10, true], ["Badges", 5, true], ["UpgradedServers", 1, false]];
    
    Factors.forEach(factor => {
        if  (factor[2] !== true && peeky.userData.get(key, factor[0]) > 0) {
            LeaderboardRank = LeaderboardRank + peeky.userData.get(key, factor[0]) / factor[1];
        } else if  (factor[2] == true && peeky.userData.get(key, factor[0]).length > 0) {
          LeaderboardRank = LeaderboardRank + peeky.userData.get(key, factor[0]).length / factor[1];
        };
    });
      
    peeky.userData.set(key, LeaderboardRank, "LeaderboardRank");

    };

    //Level Up
    if  (peeky.userData.get(key, "Exp") >= Setting.ExpNeeded * peeky.userData.get(key, "Level") && TextChannels.includes(message.channel.type) && message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY')) { 
        
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

        var TheBannerShown = DefaultBackground;
        if  (peeky.userData.has(key))  {
            TheBannerShown = function_GetBackground(key);
        };

        const background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(key, 1, "Background");});

        if  (Failed == false)  {

            ctx.drawImage(background, 0, 0, canvas.width, 300);  

            const layout = await Canvas.loadImage("https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel_up_layout_4.1.png?v=1584230267500");
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

        };

    };  
  
    };
    };
  
};

});

//GUILD CREATED EVENT
peeky.on("guildCreate", async (guild) =>  {

const keySF = `${guild.id}`;

const embed = {"description": " I have been added to a server called **" + function_RemoveFormatting(guild.name, "other", true) + "** with **" + guild.members.cache.filter(m => m.user.bot).size + " bots**.",  "footer": {  "text": guild.id  },  "color": 8311585};
peeky.channels.cache.get(ServerLogChannel).send({ embed });

if  (peeky.guilds.cache.size > Setting.MaxServers || guild.members.cache.filter(m => m.user.bot).size > Setting.MaxBots || BannedUsers.includes(guild.owner.user.id))  {

    const embed = {"description": "**Failed joining your server, here's probably why...**"
                                  + "\n" + "• The bot has reached the maximum server amount."
                                  + "\n" + "• You have way too many bots in your server."
                                  + "\n" + "• You have been banned from using the bot.",
                   "color": EmbedColor}; 
    await function_DirectMessage(guild.owner.user.id, { embed });
    guild.leave();

} else {

  function_ServerData(keySF);

  guild.channels.cache.forEach(channel => {
      function_ChannelData(`${channel.id}`);
  });

};

});

//GUILD DELETED EVENT
peeky.on("guildDelete", async (guild) =>  {
  
const keySF = `${guild.id}`;

const embed = {"description": " I have been removed from a server called **" + function_RemoveFormatting(guild.name, "other", true) + "**.",  "footer": {  "text": guild.id  },  "color": 12854839};
peeky.channels.cache.get(ServerLogChannel).send({ embed });

});

//MEMBER JOINED EVENTS
peeky.on('guildMemberAdd', async (member) => {
  
const key    = `${member.user.id}`;
const keySF  = `${member.guild.id}`;
var   Failed = false;

//AMBASSADOR PROGRAM
if  (member.guild.id == SupportServer)  {
  
    function_AmbassadorProgram(member, true);
  
};
  
if (member.user.id !== PeekyId && peeky.serverData.has(keySF))  {

//Suspicion Alert
if  (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true && !member.user.bot)  {
      
    var owner      = member.guild.owner.user.id;
    var Suspicions = 0;
    var Reasons    = [];
  
    //Account created less than 7 days ago
    if  (new Date() - new Date(member.user.createdAt) <= WeekMs )  {
        Reasons.push("Account created less than 7 days ago.");
    };
  
    //Account is banned from using PEEKY
    if  (BannedUsers.includes(member.user.id))  {
        Reasons.push("Banned from using PEEKY.");
    };

    if  (Reasons.length > 0)  {
        const embed = {"description": "**Someone suspicious has joined " + function_RemoveFormatting(member.guild.name, "other", true) + "!**\nBe wary about this user but don't punish them just yet!\n\n**Suspect:** " + function_RemoveFormatting(member.user.tag, "other", true) + " (<@" + member.user.id + ">)\n**Reasons:** " + Reasons.join(" / "), "color": EmbedColor}; 
        function_DirectMessage(owner, { embed }); 
          
        function_UpdateAutowipe(keySF, "server");
        FunctionNotification(member.guild, "Suspicion Alert");
      
    };
  
};
    
//Join Role
if  (peeky.serverData.get(keySF, "join_role_bonus") == true)  {
  
    if  (member.guild.me.permissions.has("MANAGE_ROLES"))  {

        var Role = member.guild.roles.cache.find(role => role.name == peeky.serverData.get(keySF, "join_role_bonus_setting"));

        if  (Role) {
            member.roles.add(Role.id, "Triggered by the Join Role function.").catch(error => ErrorBag.add(error));
          
            function_UpdateAutowipe(keySF, "server");
            FunctionNotification(member.guild, "Join Role");
        };

    };

};
    
//Verification System
if  (peeky.serverData.get(keySF, "verification_system_bonus") == true)  {
  
    if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES") && member.guild.me.permissions.has("KICK_MEMBERS"))  {

        var Role = member.guild.roles.cache.find(role => role.name == peeky.serverData.get(keySF, "verification_system_bonus_setting"));
        var Recaptcha = Math.random().toString(36).substr(2,6);

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
            ctx.font = "32px " + Setting.DefaultFont;
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
                  
                    if  (!member.roles.cache.has(Role.id))  {
                        const embed = {"description": ErrorIcon + " Rejoin the server to restart the verfication process.",  "color": EmbedColor}; 
                        await function_DirectMessage(member.user.id, { embed });

                        member.kick("Triggered by the Verification System function.").catch(error => ErrorBag.add(error));
                    };
                });
              
            }).catch(error => ErrorBag.add(error));
      
            function_UpdateAutowipe(keySF, "server");
            FunctionNotification(member.guild, "Verification System");
          
        };

    };

};
    
//Role Saver
if  (peeky.serverData.get(keySF, "role_saver_bonus") == true)  {
  
  if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES"))  {
    
      if  (peeky.serverData.has(keySF, "role_saver_bonus_array"))  {
      
          var SavedRoles = peeky.serverData.get(keySF, "role_saver_bonus_array");
          var FunctionSetting = peeky.serverData.get(keySF, "role_saver_bonus_setting");
        
          SavedRoles.forEach(current => {
            
              if  (current[0] == member.user.id)  {
                
                  const ValidRoles = [];
                
                  current[1].forEach(role => {
                    
                      var r = member.guild.roles.cache.find(r => r.id == role);
                      if  (r && r.name.toLowerCase() !== peeky.serverData.get(keySF, "verification_system_bonus_setting").toLowerCase() && !FunctionSetting.includes(r.name))  {
                          ValidRoles.push(role);
                      };                  
                    
                  });

                  if  (ValidRoles.length > 0)  {
                
                      member.roles.set(ValidRoles, "Triggered by the Role Saver function.").catch(error => ErrorBag.add(error));

                      function_UpdateAutowipe(keySF, "server");
                      FunctionNotification(member.guild, "Role Saver");
                    
                  };
                
              };
            
          });  

      };

  };

};
  
//Clear Nicknames
if  (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)  {

    if  (member.guild.me.permissions.has("MANAGE_NICKNAMES") && !member.user.bot && !member.nickname)  {

        var Username = member.user.username.toLowerCase().toString();
        var NewNickname = Username.match(/[aábcčçdďeéěfgğhiíİıjklmnňoóöpqrřsšştuůúüvwxyýzž0123465789_ ]/g); 

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

                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(member.guild, "Clear Nicknames");
              
            };

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

                    function_UpdateAutowipe(keySF, "server");
                    FunctionNotification(member.guild, "Nickname Saver");

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

    var channel = guild.channels.cache.find(c=> c.name == name);
    
    if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES', 'ATTACH_FILES'))  {
      
        if  (BlacklistedWebsites.some(word => function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
            Detected = true;
        };

        await channel.send("", await function_WelcomeMessagesEmbed(member, "join", Detected)).catch(error => ErrorBag.add(error));

        function_UpdateAutowipe(keySF, "server");
        FunctionNotification(member.guild, "Welcome Messages");
      
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

    var channel = guild.channels.cache.find(c=> c.name == name);
    
    if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES' && 'ATTACH_FILES'))  {
      
        if  (BlacklistedWebsites.some(word => function_RemoveFormatting(member.user.username.toLowerCase(), "other", false).includes(word)))  {
            Detected = true;
        };

        await channel.send("", await function_WelcomeMessagesEmbed(member, "leave", Detected)).catch(error => ErrorBag.add(error));

        function_UpdateAutowipe(keySF, "server");
        FunctionNotification(member.guild, "Welcome Messages");

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

    if  (!member.user.bot && member.guild.me.permissions.has("MANAGE_ROLES"))  {
  
        if  (peeky.serverData.has(keySF, "role_saver_bonus_array"))  {

            const SavedRoles  = peeky.serverData.get(keySF, "role_saver_bonus_array");
            const MemberIndex = SavedRoles.findIndex(i => i[0] == member.user.id);

            if  (MemberIndex >= 0)  {
                SavedRoles[MemberIndex][1] = member.roles.cache.filter(r => r.name !== "@everyone").map(r => r.id);
            } else {
              SavedRoles.push([member.user.id, member.roles.cache.filter(r => r.name !== "@everyone").map(r => r.id)]);
            };

        };
      
    };

};

//Nickname Saver
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
    var Contributor = false;
    var TransactionInfo = [];
  
    if  (new Date() - new Date(member.joinedAt) > 5000)  {

        //Server Boost
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.cache.find(r => r.id == BoosterRole);
            var HasRole = newMember.roles.cache.find(r => r.id == BoosterRole);

            if  (!HadRole && HasRole)  {

                PurchaseComplete = true;
                TransactionInfo = ["Server Boost", "serverboost", "For boosting the Community Server you receive a few cool little bonuses and help us stay boosted!", "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fstore_serverboost.png?v=1585077082090"];
                //"Your reward expires once you stop boosting."

            };

        };

        //Premium
        if  (peeky.userData.has(key))  {
          
            var PremiumRoles = [TrialRole, "787062829533495328", "787062882306621520", "787062928448159766"];
            var HadRole = undefined;
            var HasRole = undefined;
          
            newMember.roles.cache.map(r => r.id).forEach(role => {
              
                if  (PremiumRoles.includes(role))  {

                    HadRole = oldMember.roles.cache.find(r => r.id == role);
                    HasRole = newMember.roles.cache.find(r => r.id == role);
                  
                };
              
            });

            if  (!HadRole && HasRole)  {
              
                if  (HasRole.id == PremiumRoles[0]) {
                    peeky.userData.set(key, "Trial", "PremiumLength");
                    Contributor = false;
                } else 
                  
                if  (HasRole.id == PremiumRoles[1]) {
                    peeky.userData.set(key, "Month", "PremiumLength");
                } else 
                  
                if  (HasRole.id == PremiumRoles[2]) {
                    peeky.userData.set(key, "Year", "PremiumLength");
                } else 
                  
                if  (HasRole.id == PremiumRoles[3]) {
                    peeky.userData.set(key, "Lifetime", "PremiumLength");
                };

                peeky.userData.set(key, Date.now(), "SupporterLastPurchase");

                PurchaseComplete = true;
                TransactionInfo = ["Premium", "premium", "You can now enjoy all of the exciting Premium features that PEEKY has to offer for a " + peeky.userData.get(key, "PremiumLength").toLowerCase() + "!", "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fstore_premium.png?v=1585086074815"];
              
                newMember.roles.add(PremiumRole).catch(error => ErrorBag.add(error));
                newMember.roles.remove(HasRole.id).catch(error => ErrorBag.add(error));
              
            };

        };

        //Server Upgrade
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.cache.find(r => r.id == ServerUpgradeRole);
            var HasRole = newMember.roles.cache.find(r => r.id == ServerUpgradeRole);

            if  (!HadRole && HasRole)  {

                PurchaseComplete = true;
                TransactionInfo = ["Server Upgrade", "serverupgrade", "You are now able to upgrade one of your favorite servers and unlock a bunch of neat bonuses for it!", "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fstore_serverupgrade.png?v=1585078211679"];

            };

        };
      
        //Ambassador Skip
          if  (peeky.userData.has(key))  {

              var HadRole = oldMember.roles.cache.find(r => r.id == AmbassadorSkipRole);
              var HasRole = newMember.roles.cache.find(r => r.id == AmbassadorSkipRole);

              if  (!HadRole && HasRole)  {

                  for (var i = 0; i < 5; i++)  {

                      function_AmbassadorProgram(member, false);

                  };

                  PurchaseComplete = true;
                  TransactionInfo = ["Ambassador Skip", "ambassadorskip", "You have skipped 5 invites in the Ambassador Program, which has helped you earn a cool reward!", "https://cdn.glitch.com/e2b3bafd-96e2-44bc-a3bf-c5a8414594d3%2Fstore_tierskip.png?v=1594308683082"];

                  newMember.roles.remove(HasRole.id).catch(error => ErrorBag.add(error));

              };

        };

        //Donation
        if  (peeky.userData.has(key))  {

            var HadRole = oldMember.roles.cache.find(r => r.id == DonationRole);
            var HasRole = newMember.roles.cache.find(r => r.id == DonationRole);

            if  (!HadRole && HasRole)  {
                
                newMember.roles.remove(HasRole.id).catch(error => ErrorBag.add(error));

                const embed = {"description": InfoIcon + " Thank you **" + function_RemoveFormatting(newMember.displayName, "other", true) + "** for your donation!",  "color": EmbedColor}; 
                peeky.channels.cache.get(MainChatChannel).send({ embed }).catch(error => ErrorBag.add(error));
                
            };

        };

        //Complete Purchase
        if  (PurchaseComplete == true)  {
          
            console.log("🏷️ The " + TransactionInfo[0] +" product has been purchased by " + newMember.user.tag +".");

            if  (!peeky.userData.get(key, "ContributorBadge") && Contributor)  {
                peeky.userData.set(key, true, "ContributorBadge");
            };
                        
            if  (peeky.userData.get(key, "PremiumLength") !== "Trial")  {
                function_AmbassadorProgram(member, false);
            };

            const embed = {
                "description": /*"­\n" + */ "**Thank you for the purchase of " + TransactionInfo[0] + "!**" + "\n" +
                  TransactionInfo[2] /*+ " " + "You can view all the rewards by clicking [here](" + Setting.Domain + "/pages/store/#" + TransactionInfo[1] + ")."*/,
                "thumbnail": { "url": TransactionInfo[3] },
                //"footer": {  "text": Setting.Domain + "/pages/store/#" + TransactionInfo[1]  },
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
  
};

});

//CHANNEL DELETE EVENTS
peeky.on("channelDelete", async (channel) => {
  
const keyCF = `${channel.id}`;
const keySF = `${channel.guild.id}`;

if  (peeky.channelData.has(keyCF))  {
    console.log("📝 I have wiped the settings of a channel because it got deleted.");
    peeky.channelData.delete(keyCF);
};
  
if  (peeky.serverData.has(keySF))  {
    
    if  (peeky.serverData.get(keySF, "auto_channels_bonus_channels").includes(channel.id))  {
        var index = peeky.serverData.get(keySF, "auto_channels_bonus_channels").indexOf(channel.id);
        peeky.serverData.observe(keySF, "auto_channels_bonus_channels").splice(index, 1);
    };
    
    if  (peeky.serverData.get(keySF, "ticket_system_bonus_channels").includes(channel.id))  {
        var index = peeky.serverData.get(keySF, "ticket_system_bonus_channels").indexOf(channel.id);
        peeky.serverData.observe(keySF, "ticket_system_bonus_channels").splice(index, 1);
    };
  
};

});

//VOICE STATE UPDATE EVENTS
peeky.on("voiceStateUpdate", async (oldState, newState) => {
  
const keySF   = `${newState.member.guild.id}`;
const member  = newState.member;
const channel = newState.member.voice.channel;
  
//Deaf Self
if  (member.user.id == PeekyId && newState.channel && !newState.deaf)  {
    newState.setSelfDeaf(true);    
};

//FUNCTIONS
  
//Auto Channels
if  (peeky.serverData.get(keySF, "auto_channels_bonus") == true)  {
  
    var filteredChannels = member.guild.channels.cache.filter(channel => peeky.serverData.get(keySF, "auto_channels_bonus_channels").includes(channel.id) && channel.members.size < 1).map(i => i.id);
    if  (filteredChannels.length > 0 && peeky.serverData.get(keySF, "auto_channels_bonus_setting") == "Delete empty channels")  {
        member.guild.channels.cache.get(filteredChannels[0]).delete().catch(error => ErrorBag.add(error));
    };
  
    if  (channel && !FunctionCooldowns.has("autochannels" + member.user.id) && peeky.serverData.get(keySF, "auto_channels_bonus_id") == channel.id && member.guild.me.permissions.has("MOVE_MEMBERS") && channel.permissionsFor(peeky.user).has("MANAGE_CHANNELS"))  {

        FunctionCooldowns.add("autochannels" + member.user.id);
        setTimeout(() => {FunctionCooldowns.delete("autochannels" + member.user.id)}, 10000);
      
        channel.guild.channels.create(function_RemoveFormatting(member.displayName, "other", true) + "'s Channel", { type: 'voice', permissionOverwrites: [
            {id: PeekyId, allow: ['CONNECT', 'MANAGE_CHANNELS', 'MANAGE_ROLES']},
            {id: member.id, allow: ['CONNECT', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MOVE_MEMBERS']},
            {id: channel.guild.id, allow: ['CONNECT']}
        ], reason: "Channel created by @" + member.user.tag + " through a function." })
        .then(newchannel =>  {

            peeky.serverData.observe(keySF, "auto_channels_bonus_channels").push(newchannel.id);

            if  (channel.parentID)  {
                newchannel.setParent(channel.parentID, { lockPermissions: false }).catch(error => ErrorBag.add(error));
            };

            member.voice.setChannel(newchannel).catch(error => ErrorBag.add(error));

        }).catch(error => ErrorBag.add(error));

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

            var GuildRole = member.guild.roles.cache.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));
            var HasRole = member.roles.cache.find(r => r.name == peeky.serverData.get(keySF, "streamer_role_bonus_setting"));
            var Activity = member.presence.activities.find(a => a.type !== "CUSTOM_STATUS");

            if  ((Activity && Activity.type == "STREAMING" || member.voice.channel && member.voice.streaming == true) && peeky.userData.get(key, "EssentialsEnabled"))  {

                if  (!HasRole && !CurrentlyStreaming.has(member.user.id + member.guild.id + "SR"))  {

                    member.roles.add(GuildRole.id).catch(error => ErrorBag.add(error));

                    CurrentlyStreaming.add(member.user.id + member.guild.id + "SR");
                    setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SR")}, 1800000);

                    function_UpdateAutowipe(keySF, "server");
                    FunctionNotification(member.guild, "Streamer Role");

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

        var Channel = member.guild.channels.cache.find(c => c.name == peeky.serverData.get(keySF, "stream_announcements_bonus_setting"));

        if  (Channel && Channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {
          
            var Activity = member.presence.activities.find(a => a.type !== "CUSTOM_STATUS");

            if  ((Activity && Activity.type == "STREAMING" || member.voice.channel && member.voice.streaming == true) && peeky.userData.get(key, "EssentialsEnabled"))  {

                CurrentlyStreaming.add(member.user.id + member.guild.id + "SA2");
                setTimeout(() => {CurrentlyStreaming.delete(member.user.id + member.guild.id + "SA2")}, 1800000);
                  
                var SavedMember = member;

                const embed = function_StreamAnnouncements(member, Activity);
                Channel.send({ embed }).catch(error => ErrorBag.add(error));

                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(member.guild, "Streamer Announcements");

            };
  
        };
  
    };
      
};

//Game Roles
/*if  (peeky.serverData.get(keySF, "game_roles_bonus") == true)  {

    if  (member.guild.me.permissions.has('MANAGE_ROLES') && !member.user.bot)  {
      
        peeky.serverData.get(keySF, "game_roles_bonus_setting").forEach(GameName => {

            var GameName = GameName.toLowerCase();
            var HasRole  = member.roles.cache.find(r => r.name.toLowerCase() == GameName);
            var Role = member.guild.roles.cache.find(r => r.name.toLowerCase() == GameName);

            if  (Role)  {

                if  (member.presence.activity && member.presence.activity.type == 0 && member.presence.activity.name.toLowerCase() == GameName)  {

                    if  (!HasRole && !RoleCooldown.has(member.user.id + member.guild.id))  {
                        member.roles.add(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
                    };   

                    RoleCooldown.add(member.user.id + member.guild.id);
                    setTimeout(() => {RoleCooldown.delete(member.user.id + member.guild.id)}, RoleCooldownMS);         

                } else { 

                  if  (HasRole)  {
                      member.roles.remove(Role.id, "Triggered by the Game Roles function.").catch(error => ErrorBag.add(error));
                  };

                };

                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(member.guild, "Game Roles");
              
            };
          
        });
      
    };
      
};*/

//Veteran Role
if  (peeky.serverData.get(keySF, "veteran_role_bonus") == true)  {

    if  (!FunctionCooldowns.has("veteranrole" + member.guild.id) && member.guild.me.permissions.has('MANAGE_ROLES'))  {

        FunctionCooldowns.add("veteranrole" + member.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("veteranrole" + member.guild.id)}, 300000);
  
        if  (!member.user.bot && (new Date() - new Date(member.joinedAt) >= YearMs))  {

            var Role = member.guild.roles.cache.find(r => r.name.toLowerCase() == peeky.serverData.get(keySF, "veteran_role_bonus_setting").toLowerCase());

            if  (Role && !member.roles.cache.has(Role.id))  {

                member.roles.add(Role.id, "Triggered by the Veteran Role function.").catch(error => ErrorBag.add(error));

            };

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
const member = reaction.message.guild.members.cache.find(m => m.user.id == user.id);
const message = reaction.message;

//Poller Badge
if  (!user.bot && reaction.message.channel.id == AnnouncementsChannel && reaction.message.content.toLowerCase().includes("**voting time**"))  {
    if  (!peeky.userData.has(key) && peeky.userData.get(key, "PollerBadge"))  {
        peeky.userData.set(key, true, "PollerBadge");
    };
};
  
//Workshop Response
if  (reaction.message.channel.id == WorkshopChannel && user.id == OwnerId)  {
  
    if  (reaction.emoji.name == "🏁")  {

        const embed = {"description": "**Workshop**" + "\n" + " Your submission has been accepted and will be added shortly!",  "color": EmbedColor}; 
        function_DirectMessage(reaction.message.author.id, { embed });
        function_DirectMessage(OwnerId, '[ \n "NO_BACKGROUND", \n ' + reaction.message.content.split('\n')[2].replace("Price: ", "") + ', \n "' + function_FixCapitalization(reaction.message.content.split("\n")[0].replace("Name: ", "")) + '", \n "' + reaction.message.content.split("\n")[1].replace("Credit: ", "") + '", \n ' + null + ', \n ' + Date.now() + ' \n ]');
      
    };
  
};
  
//Karma System
if  (!user.bot && KarmaImages.findIndex(i => i[0] == reaction.message.id) >= 0)  {

    var ReactionEmoji1 = reaction.message.guild.emojis.cache.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote");
    var ReactionEmoji2 = reaction.message.guild.emojis.cache.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote");
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

                        if  (!peeky.userData.has(key2) && peeky.userData.get(key2, "GoodBadge"))  {
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

                        if  (!peeky.userData.has(key2) && peeky.userData.get(key2, "EvilBadge"))  {
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
if  (peeky.userData.has(key, "OverviewID") && reaction.message.id == peeky.userData.get(key, "OverviewID") && reaction.message.embeds.length > 0)  {            
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("overview" + user.id))  {
         
        CommandCooldown.add("overview" + user.id);
        setTimeout(() => {CommandCooldown.delete("overview" + user.id)}, 2500);

        var EnabledAmount = 0;
        var ServerAmount  = 0;
        var ChannelAmount = 0;
 
        if (peeky.serverData.get(keySF, "automatic_reactions_bonus") == true)    { var AR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var AR = DisabledIcon};
        if (peeky.serverData.get(keySF, "welcome_messages_bonus") == true)       { var WM = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var WM = DisabledIcon};
        if (peeky.serverData.get(keySF, "member_counter_bonus") == true)         { var MC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var MC = DisabledIcon};
        if (peeky.serverData.get(keySF, "clear_nicknames_bonus") == true)        { var CN = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CN = DisabledIcon};
        if (peeky.serverData.get(keySF, "donor_wall_bonus") == true)             { var CW = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CW = DisabledIcon};
        if (peeky.serverData.get(keySF, "ticket_system_bonus") == true)          { var ST = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var ST = DisabledIcon};
        if (peeky.serverData.get(keySF, "verification_system_bonus") == true)    { var VS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VS = DisabledIcon};
        if (peeky.serverData.get(keySF, "suspicion_alert_bonus") == true)        { var SA = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA = DisabledIcon};
        if (peeky.serverData.get(keySF, "flood_protection_bonus") == true)       { var FP = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var FP = DisabledIcon};
        if (peeky.serverData.get(keySF, "event_countdown_bonus") == true)        { var EC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var EC = DisabledIcon};
        if (peeky.serverData.get(keySF, "vote_kick_bonus") == true)              { var VK = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VK = DisabledIcon};
        if (peeky.serverData.get(keySF, "join_role_bonus") == true)              { var JR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var JR = DisabledIcon};
        if (peeky.serverData.get(keySF, "veteran_role_bonus") == true)           { var VR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var VR = DisabledIcon};
        if (peeky.serverData.get(keySF, "game_roles_bonus") == true)             { var GR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var GR = DisabledIcon};
        if (peeky.serverData.get(keySF, "role_saver_bonus") == true)             { var RS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RS = DisabledIcon};
        if (peeky.serverData.get(keySF, "nick_saver_bonus") == true)             { var NS = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var NS = DisabledIcon};
        if (peeky.serverData.get(keySF, "streamer_role_bonus") == true)          { var SR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SR = DisabledIcon};
        if (peeky.serverData.get(keySF, "reddit_posts_bonus") == true)           { var RP = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RP = DisabledIcon};
        if (peeky.serverData.get(keySF, "weekend_channels_bonus") == true)       { var WC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var WC = DisabledIcon};
        if (peeky.serverData.get(keySF, "stream_announcements_bonus") == true)   { var SA2 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA2 = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_age_bonus") == true)             { var SA3 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SA3 = DisabledIcon};
        if (peeky.serverData.get(keySF, "spoiler_lock_bonus") == true)           { var SL = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var SL = DisabledIcon};
        if (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)         { var RR = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var RR = DisabledIcon};
        if (peeky.serverData.get(keySF, "banned_words_bonus") == true)           { var BW = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var BW = DisabledIcon};
        if (peeky.serverData.get(keySF, "message_log_bonus") == true)            { var ML = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var ML = DisabledIcon};
        if (peeky.serverData.get(keySF, "images_only_bonus") == true)            { var IO = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var IO = DisabledIcon};
        if (peeky.serverData.get(keySF, "server_timezone_bonus") == true)        { var ST2 = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var ST2 = DisabledIcon};
        if (peeky.serverData.get(keySF, "auto_channels_bonus") == true)          { var AC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var AC = DisabledIcon};
        if (peeky.serverData.get(keySF, "follow_cleaner_bonus") == true)         { var FC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var FC = DisabledIcon};
        if (peeky.serverData.get(keySF, "classification_counter_bonus") == true) { var CC = EnabledIcon; EnabledAmount ++; ServerAmount ++; } else { var CC = DisabledIcon};

        var GivenMinutes = peeky.serverData.get(keySF, "spoiler_lock_bonus_setting");
        if  (GivenMinutes == 0)  {GivenMinutes = "Never"}  else  {GivenMinutes = GivenMinutes + " minutes"};
          
        const Functions = [
             "**Welcome Messages** " + WM + "\n" + "`#" + peeky.serverData.get(keySF, "welcome_messages_bonus_setting") + "`",
             "**Join Role** " + JR + "\n" + "`@" + peeky.serverData.get(keySF, "join_role_bonus_setting") + "`",
             "**Veteran Role** " + JR + "\n" + "`@" + peeky.serverData.get(keySF, "veteran_role_bonus_setting") + "`",
             "**Automatic Reactions** " + AR + "\n" + "`:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote:` `:" + peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote:`",
             "**Verification System** " + VS + "\n" + "`" + peeky.serverData.get(keySF, "verification_system_bonus_setting") + "`",
             "**Suspicion Alert** " + SA + "\n" + "No setting",
             "**Flood Protection** " + FP + "\n" + "`" + peeky.serverData.get(keySF, "flood_protection_bonus_setting") + " strikes`",
             "**Spoiler Lock** " + SL + "\n" + "`" + GivenMinutes + "`",
             "**Banned Words** " + BW + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "banned_words_bonus_setting"), Setting.BannedWordsLimit, "` `") + "`",
             "**Reaction Roles** " + RR + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "reaction_roles_bonus_setting"), Setting.ReactionRolesLimit, "` `") + "`",
             "**Ticket System** " + ST + "\n" + "`@" + peeky.serverData.get(keySF, "ticket_system_bonus_setting") + "`",
             "**Auto Channels** " + AC + "\n" + "`" + peeky.serverData.get(keySF, "auto_channels_bonus_setting") + "`",
             "**Weekend Channels** " + WC + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "weekend_channels_bonus_setting"), Setting.WeekendChannelsLimit, "` `") + "`",
             "**Classification Wall** " + CW + "\n" + "`@" + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "` `#" + peeky.serverData.get(keySF, "donor_wall_bonus_channel") + "`",
             "**Vote Kick** " + VK + "\n" + "`" + peeky.serverData.get(keySF, "vote_kick_bonus_setting") + " votes`",
             "**Message Log** " + ML + "\n" + "`#" + peeky.serverData.get(keySF, "message_log_bonus_setting") + "`",
             "**Follow Cleaner** " + FC + "\n" + "No Setting.",
             "**Reddit Posts** " + RP + "\n" + "`r/" + peeky.serverData.get(keySF, "reddit_posts_bonus_setting") + "`",
             "**Clear Nicknames** " + CN + "\n" + "`" + peeky.serverData.get(keySF, "clear_nicknames_bonus_setting") + "`",
             "**Nickname Saver** " + NS + "\n" + "No Setting.",
             "**Role Saver** " + RS + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "role_saver_bonus_setting"), Setting.RoleSaverLimit, "` `") + "`",
             //"**Game Roles** " + GR + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "game_roles_bonus_setting"), Setting.GameRolesLimit, "` `") + "`",
             "**Event Countdown** " + EC + "\n" + "`" + function_DateFormat(peeky.serverData.get(keySF, "event_countdown_bonus_setting"), "Date", 0) + "`",
             "**Classification Counter** " + MC + "\n" + "`@" + peeky.serverData.get(keySF, "classification_counter_bonus_setting") + "`",
             "**Member Counter** " + MC + "\n" + "`" + peeky.serverData.get(keySF, "member_counter_bonus_setting") + "`",
             "**Server Time** " + ST2 + "\n" + "No setting",
             "**Server Age** " + SA3 + "\n" + "No setting",
             "**Stream Announcements** " + SA2 + "\n" + "`#" + peeky.serverData.get(keySF, "stream_announcements_bonus_setting") + "`",
             "**Streamer Role** " + SR + "\n" + "`@" + peeky.serverData.get(keySF, "streamer_role_bonus_setting") + "`",
             "**Images Only** " + IO + "\n" + "`" + function_ArrayItems(peeky.serverData.get(keySF, "images_only_bonus_setting"), Setting.ImagesOnlyLimit, "` `") + "`",
        ];

        if  (reaction.emoji.name == "1️⃣")  {
          
            var TimeZone = peeky.serverData.get(keySF, "timezone");
            if  (TimeZone > 0)  {
                TimeZone = "+" + TimeZone;
            };

            const newEmbed = new Discord.MessageEmbed({
                  description:  "**Prefix** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "prefix") + "`" + "\n\n" +
                                "**Language** " + SettingsIcon + "\n" + "`" + Languages[Language] + "`" + "\n\n" +
                                "**Time Zone** " + SettingsIcon + "\n" + "`" + TimeZone + "`" + "\n\n" +
                                "**Server State** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "server_upgraded").toString().replace("true", "Upgraded").replace("false", "Not Upgraded") + "`" + "\n\n" +
                                "**Mute Role** " + SettingsIcon + "\n" + "`@" + peeky.serverData.get(keySF, "muted_role") + "`" + "\n\n" +
                                "**Treasure Channel** " + SettingsIcon + "\n" + "`#" + peeky.serverData.get(keySF, "treasure_channel") + "`" + "\n\n" +
                                "**Level Notifications** " + SettingsIcon + "\n" + "`" + peeky.serverData.get(keySF, "level_notifications").toString().replace("true", "Enabled").replace("false", "Disabled") + "`",
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fneedhelp_functions.png?v=1584183423303"  }
            });

            reaction.message.edit("**Overview: Server Settings** `1/1`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
          
        if  (reaction.emoji.name == "2️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  Functions.slice(0,10).join("\n\n"),
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fneedhelp_functions.png?v=1584183423303"  }
            });

            reaction.message.edit("**Overview: Functions** `1/3`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
          
        if  (reaction.emoji.name == "3️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  Functions.slice(10,20).join("\n\n"),
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fneedhelp_functions.png?v=1584183423303"  }
            });

            reaction.message.edit("**Overview: Functions** `2/3`", newEmbed).catch(error => ErrorBag.add(error));

        } else 
          
        if  (reaction.emoji.name == "4️⃣")  {

            const newEmbed = new Discord.MessageEmbed({
                  description:  Functions.slice(20,30).join("\n\n"),
                  color: EmbedColor,
                  image: {  "url": "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fneedhelp_functions.png?v=1584183423303"  }
            });

            reaction.message.edit("**Overview: Functions** `3/3`", newEmbed).catch(error => ErrorBag.add(error));

        };
      
  };
  
};
  
//Inventory Menu
if  (peeky.userData.has(key, "InventoryInfo") && reaction.message.id == peeky.userData.get(key, "InventoryInfo")[0] && peeky.userData.has(peeky.userData.get(key, "InventoryInfo")[3]) && reaction.message.embeds.length > 0)  {          
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("inventorymenu" + user.id))  {
         
        CommandCooldown.add("inventorymenu" + user.id);
        setTimeout(() => {CommandCooldown.delete("inventorymenu" + user.id)}, 2500);

        const key2 = peeky.userData.get(key, "InventoryInfo")[3];
        var NewDesc = "";
        var Refresh = false;
      
        function RefreshDesc(type) {
          
            var Page = peeky.userData.get(key, "InventoryInfo")[2];
            
            if  (type == "Backgrounds")  {
 
                NewDesc = function_ArrayItems(peeky.userData.get(key2, "Inventory").map(b => "**" + function_GetBackgroundInfo(b, ["name"]) + "** \n" + peeky.serverData.get(keySF, "prefix") + "seebackground " + b).slice((Page - 1) * 10, Page * 10), false, "\n\n");
              
            } else if  (type == "Badges")  {

              NewDesc = function_ArrayItems(peeky.userData.get(key2, "Badges").map(b => "**" + b[0] + "** \n" + Hollow + " " + Badges.find(badge => badge[1] == b[0])[8]).slice((Page - 1) * 10, Page * 10), false, "\n\n");
              
            };
          
        };
      
        if  (reaction.emoji.name == "1️⃣")  {
              
            Refresh = true;

            peeky.userData.observe(key, "InventoryInfo")[1] = "Backgrounds";
            peeky.userData.observe(key, "InventoryInfo")[2] = 1;
          
            await RefreshDesc("Backgrounds");
          
        } else
      
        if  (reaction.emoji.name == "2️⃣")  {
              
            Refresh = true;

            peeky.userData.observe(key, "InventoryInfo")[1] = "Badges";
            peeky.userData.observe(key, "InventoryInfo")[2] = 1;

            await RefreshDesc("Badges");

        }
      
        if  (reaction.emoji.name == "3️⃣")  {
              
            Refresh = true;

            peeky.userData.observe(key, "InventoryInfo")[1] = "Statistics";
            peeky.userData.observe(key, "InventoryInfo")[2] = 1;

            NewDesc = "**Ambassador Program score (Season " + peeky.userData.get(key2, "AmbassadorSeason") + ")** \n" + peeky.userData.get(key2, "AmbassadorInvites").length + "/50" 
                      + "\n\n **Gredit Gain** \n" + peeky.userData.get(key2, "BadgeGredit")
                      + "\n\n **Exp Gain** \n" + peeky.userData.get(key2, "BadgeExp")
                      + "\n\n **Gredit** \n" + peeky.userData.get(key2, "Gredit")
                      + "\n\n **Experience** \n" + peeky.userData.get(key2, "Exp") + "/" + peeky.userData.get(key2, "Level") * Setting.ExpNeeded
                      + "\n\n **Karma** \n" + peeky.userData.get(key2, "Karma")
                      + "\n\n **Chests** \n" + peeky.userData.get(key2, "Chests")
                      + "\n\n **Backgrounds** \n" + peeky.userData.get(key2, "Inventory").length
                      + "\n\n **Badges** \n" + peeky.userData.get(key2, "Badges").length;

        } else
      
        if  (reaction.emoji.name == "⬅️")  {
          
            if  (["Backgrounds", "Badges"].includes(peeky.userData.get(key, "InventoryInfo")[1]) && peeky.userData.get(key, "InventoryInfo")[2] > 1)  {
              
                Refresh = true;
            
                peeky.userData.observe(key, "InventoryInfo")[2] = peeky.userData.get(key, "InventoryInfo")[2] - 1;

                await RefreshDesc(peeky.userData.get(key, "InventoryInfo")[1]);
              
            };

        } else
      
        if  (reaction.emoji.name == "➡️")  {
          
            if  (["Backgrounds", "Badges"].includes(peeky.userData.get(key, "InventoryInfo")[1]))  {
              
                Refresh = true;
            
                peeky.userData.observe(key, "InventoryInfo")[2] = peeky.userData.get(key, "InventoryInfo")[2] + 1;

                await RefreshDesc(peeky.userData.get(key, "InventoryInfo")[1]);
              
            };

        };
            
        if  (Refresh == true)  {
            const newEmbed = new Discord.MessageEmbed({"description": "" + NewDesc,  "color": EmbedColor});
            reaction.message.edit("**Inventory: " + peeky.userData.observe(key, "InventoryInfo")[1] + " `" + peeky.userData.observe(key, "InventoryInfo")[2] + "`**", newEmbed).catch(error => ErrorBag.add(error));
        };
        
    };
  
};
  
//Music Menu
if  (peeky.userData.has(key, "MusicMenuID") && reaction.message.id == peeky.userData.get(key, "MusicMenuID") && reaction.message.embeds.length > 0)  {          
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("musicmenu" + user.id))  {
         
        CommandCooldown.add("musicmenu" + user.id);
        setTimeout(() => {CommandCooldown.delete("musicmenu" + user.id)}, 2500);

        if  (reaction.emoji.name == "🔁")  {

            if  (peeky.serverData.get(keySF, "MusicMode") == "Normal")  {
                peeky.serverData.set(keySF, "Looping", "MusicMode");
            } else 
            if  (peeky.serverData.get(keySF, "MusicMode") == "Looping")  {
                peeky.serverData.set(keySF, "Automated", "MusicMode");
            } else {
            //if  (peeky.serverData.get(keySF, "MusicMode") == "Automated")  {
                peeky.serverData.set(keySF, "Normal", "MusicMode");
            };

        } else

        if  (reaction.emoji.name == "🔀")  {
          
            peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "RandomPlaylists"), "RandomPlaylists");
            var StatusString = peeky.serverData.get(keySF, "RandomPlaylists").toString().replace("true", EnableStrings[0]).replace("false", DisableStrings[0]);
          
        };
            
        const newEmbed = new Discord.MessageEmbed({"description": "🔁 **Music Mode `" + peeky.serverData.get(keySF, "MusicMode") +"`** \n " + Hollow + " " + peeky.serverData.get(keySF, "MusicMode").replace("Normal", "Removes songs from the queue when they finish playing.").replace("Looping", "Moves songs to the end of the queue when they end.").replace("Automated", "Automatically plays another song when one finishes playing.") + "\n\n" + "**🔀 Randomized Playlists " + peeky.serverData.get(keySF, "RandomPlaylists").toString().replace("true", EnabledIcon).replace("false", DisabledIcon) + "** \n " + Hollow + " Whenever playlists get shuffled when added to the queue.",  "color": EmbedColor});
        reaction.message.edit("**Music**", newEmbed).catch(error => ErrorBag.add(error));
      
    };
  
};
  
//Prefix Troubleshoot Menu
if  (peeky.userData.has(key, "PrefixTroubleshootID") && reaction.message.id == peeky.userData.get(key, "PrefixTroubleshootID") && reaction.message.embeds.length > 0)  {           
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("prefixtroubleshoot" + user.id))  {
         
        CommandCooldown.add("prefixtroubleshoot" + user.id);
        setTimeout(() => {CommandCooldown.delete("prefixtroubleshoot" + user.id)}, 2500);

        if  (reaction.emoji.id == DefaultUpvote)  {
          
            var Description = SuccessIcon + " The server prefix has been set to the default prefix.";
            peeky.serverData.set(keySF, Setting.DefaultPrefix, "prefix");
            peeky.userData.set(key, null, "PrefixTroubleshootID");
          
        } else

        if  (reaction.emoji.id == DefaultDownvote)  {
          
            var Description = SuccessIcon + " The prefix is still **" + peeky.serverData.get(keySF, "prefix") + "** on this server.";
            peeky.userData.set(key, null, "PrefixTroubleshootID");
            
        };
            
        const newEmbed = new Discord.MessageEmbed({"description": Description, "color": EmbedColor});
        reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
      
        if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
            reaction.message.reactions.removeAll().catch(error => ErrorBag.add(error));
        };
      
  };
  
};
  
//Language Pages
if  (peeky.userData.has(key, "LanguageID") && reaction.message.id == peeky.userData.get(key, "LanguageID") && reaction.message.embeds.length > 0)  {           
  
    if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
    };
  
    if  (!CommandCooldown.has("languages" + user.id))  {
         
        CommandCooldown.add("languages" + user.id);
        setTimeout(() => {CommandCooldown.delete("languages" + user.id)}, 2500);
      
        var Footer = "Be sure to report invalid translations by creating a Ticket in the Community Server.";

        if  (reaction.emoji.name == "🇬🇧")  {
            peeky.serverData.set(keySF, 0, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "The server language has been set to **English**.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇨🇿")  {
            peeky.serverData.set(keySF, 1, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "Jazyk serveru byl nastaven na **Češtinu**.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇸🇰")  {
            peeky.serverData.set(keySF, 2, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "Jazyk serveru bol nastavený na **Slovenčina**.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇪🇸")  {
            peeky.serverData.set(keySF, 3, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "El idioma del servidor ha sido cambiado a **Español**.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇹🇷")  {
            peeky.serverData.set(keySF, 4, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "Sunucu dili **Türkçe** olarak değiştirildi.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇷🇺")  {
            peeky.serverData.set(keySF, 5, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "Язык сервера установлен на **Русский**.",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        } else 
        if  (reaction.emoji.name == "🇯🇵")  {
            peeky.serverData.set(keySF, 6, "language");

            const newEmbed = new Discord.MessageEmbed({
                  description:  "サーバー言語が**日本語**に設定されました",
                  color: EmbedColor,
                  footer: { "text": Footer }
            });

            reaction.message.edit("", newEmbed).catch(error => ErrorBag.add(error));
        };
      
  };
  
};
  
//FUNCTIONS
  
//Vote Kick
if  (peeky.serverData.get(keySF, "vote_kick_bonus") == true) {

    if  (reaction.emoji.name == "🚪")  {
      
        var MemberExists = reaction.message.guild.members.cache.find(m => m.id == reaction.message.author.id);
      
        if  (MemberExists && !MemberExists.user.bot && !reaction.message.member.permissions.has("KICK_MEMBERS"))  {
          
            if  (reaction.count >= peeky.serverData.get(keySF, "vote_kick_bonus_setting") && MemberExists.user.id !== PeekyId && reaction.message.guild.me.permissions.has("KICK_MEMBERS") && reaction.message.channel.permissionsFor(reaction.message.guild.me).has('MANAGE_MESSAGES'))  {

                await reaction.message.member.send("You have been vote kicked from **" + function_RemoveFormatting(reaction.message.guild.name, "other", true) + "**.").catch(error => ErrorBag.add(error));

                reaction.message.guild.members.cache.get(reaction.message.member.user.id).kick("Triggered by the Vote Kick function.").catch(error => ErrorBag.add(error));   

                reaction.message.reactions.removeAll().catch(error => ErrorBag.add(error));

                var TranslatedMessages = [InfoIcon + " **X001** has been vote kicked with **X002 votes**.", InfoIcon + " **X** byl vyhlasován ze serveru se **X002 hlasy**.", InfoIcon + " **X001** bol hlasovo-vyhodený s **X002 hlasami**.", InfoIcon + " **X001** ha sido expulsado con **X002 votos**.", InfoIcon + " **X002 oy** adlı kişi **X001** adlı kişiye oy ile atılmasını istedi.", InfoIcon + " **X001**は**X002票**でキックされています。"];
                const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(reaction.message.member.displayName, "other", true)).replace("X002", peeky.serverData.get(keySF, "vote_kick_bonus_setting")),  "color": EmbedColor};
                reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(reaction.message.guild, "Vote Kick");

            } else if (reaction.count == 1)  {

              if  (!ResponseCooldowns.has(reaction.message.guild.id + "VK"))  {
         
                  ResponseCooldowns.add(reaction.message.guild.id + "VK");
                  setTimeout(() => {ResponseCooldowns.delete(reaction.message.guild.id + "VK")}, ResponseCooldownMS);

                  var TranslatedMessages = [InfoIcon + " **X001** has started a vote kick against **X002**.", InfoIcon + " **X001** začal hlasovat o vyhození **X002**.", InfoIcon + " **X001** začal hlasovanie za vyhodenie proti **X002**.", InfoIcon + " **X001** ha iniciado una kickeado de voto contra **X002**.", InfoIcon + " **X001** adlı kişi **X002** adlı kişiye karşı oy ile atılmasını istedi.", InfoIcon + " **X001**は**X002**に投票キックを開始しました。"];
                  const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(member.displayName, "other", true)).replace("X002", function_RemoveFormatting(reaction.message.member.displayName, "other", true)),  "color": EmbedColor};
                  reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
                
              };
              
            };
 
        } else {
          var TranslatedMessages = [ErrorIcon + " You cannot start a vote kick against that user, **X001**.", ErrorIcon + " Tohoto uživatele nelze vyhlasovat ze serveru, **X001**.", ErrorIcon + " Nemožeš začať hlasovanie za vyhodenie proti tomu uživateľovi; **X001**.", ErrorIcon + " No puedes iniciar un kick de voto contra ese usuario, **X001**.", ErrorIcon + " **X001**, bu kişiye karşı oy ile atılmasını isteyemezsiniz.", ErrorIcon + " そのユーザーに対して投票キックを開始することはできません、**X001**。"];
          const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(member.displayName, "other", true)).replace("X002", ""),  "color": EmbedColor};
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
              
            if  (reaction.message.guild.me.permissions.has("MANAGE_CHANNELS") && !FunctionCooldowns.has("ticketsystem" + user.id))  {
            
                FunctionCooldowns.add("ticketsystem" + user.id);
                setTimeout(() => {FunctionCooldowns.delete("ticketsystem" + user.id)}, 300000);
              
                const role = reaction.message.guild.roles.cache.find(r => r.name == peeky.serverData.get(keySF, "ticket_system_bonus_setting"));
                const category = reaction.message.guild.channels.cache.find(c => c.name.includes("Tickets") && c.type == "category");
                const owner = reaction.message.guild.owner.user;
                const TicketID = Math.random().toString(36).substr(2, 6);
              
                if  (role)  {
              
                    var TranslatedMessages = ["**X001 has created a ticket**" + "\n" + "Staff may close the ticket once the issue has been resolved.", "**X001 potřebuje pomoct**" + "\n" + "Jakmile se tento problém vyřeší, personál může tento lístek uzavřít.", "**X001 vytvoril lístok**" + "\n" + "\"Staff\" môže uzavrieť lístok akonáhle bude problém vyriešený.", "**X001 ha creado un ticket**" + "\n" + "\"Staff\" El personal puede cerrar el ticket una vez que el asunto haya sido resuelto.", "**X001 adlı kişi yardım istiyor**" + "\n" + "\"Staff\" Yönetici sorun çözüldüğünde yardım çağrısını kapatabilir.", "**X001 создал тикет**" + "\n" + "Персонал может закрыть билет, как только вопрос будет решен.", "**X001はチケットを作成しました**" + "\n" + "問題が解決された後、スタッフはチケットを閉じる場合があります。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(member.displayName, "other", true)),  "color": EmbedColor};

                    await reaction.message.guild.channels.create("Ticket_" + TicketID, { type: 'text', permissionOverwrites: [
                        {id: PeekyId, allow: ['VIEW_CHANNEL']},
                        {id: user.id, allow: ['VIEW_CHANNEL']},
                        {id: role.id, allow: ['VIEW_CHANNEL']},
                        {id: reaction.message.guild.id, deny: ['VIEW_CHANNEL', 'MANAGE_MESSAGES'], allow: ['SEND_MESSAGES']}
                    ], reason: "Channel created by @" + reaction.message.author.tag + " through a function." })
                    .then(channel =>  {
          
                        peeky.serverData.observe(keySF, "ticket_system_bonus_channels").push(channel.id);;
                      
                        if  (category && category.permissionsFor(peeky.user).has('VIEW_CHANNEL'))  {
                            channel.setParent(category.id, { lockPermissions: false }).catch(error => ErrorBag.add(error));
                        };
                        
                        channel.send({  embed  }).catch(error => ErrorBag.add(error)).then(m => m.react("❌")).catch(error => ErrorBag.add(error));
                      
                    }).catch(error => ErrorBag.add(error));
                  
                };
              
            };
          
        };

    }
  
    else

    if  (reaction.emoji.name == "❌")  {
      
        if  (!user.bot & peeky.serverData.get(keySF, "ticket_system_bonus_channels").includes(reaction.message.channel.id) && reaction.message.author.id == PeekyId)  {
              
            if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_CHANNELS') || reaction.message.guild.me.permissions.has("MANAGE_CHANNELS"))  {
              
                reaction.message.channel.delete().catch(error => ErrorBag.add(error));
              
            };
          
        };

    };

};
  
//Reaction Roles
if  (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)  {
      
    if  (!user.bot & reaction.message.id == peeky.serverData.get(keySF, "reaction_roles_bonus_id"))  {

        if  (reaction.message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
            reaction.users.remove(user.id).catch(error => ErrorBag.add(error));
        };

        if  (reaction.message.guild.me.permissions.has("MANAGE_ROLES"))  {

            if  (!FunctionCooldowns.has("reactionroles" + user.id))  {

                FunctionCooldowns.add("reactionroles" + user.id)
                setTimeout(() => {FunctionCooldowns.delete("reactionroles" + user.id)}, 5000);

                const FunctionSetting = peeky.serverData.get(keySF, "reaction_roles_bonus_setting").map(r => r.toLowerCase());
                const member = reaction.message.guild.members.cache.find(m => m.user.id == user.id);

                if  (reaction.emoji.name == "🔠")  {

                    const embed = {"description": "**Reaction Roles**\nThese are all the reaction roles in " + function_RemoveFormatting(reaction.message.guild.name, "other", true) + ", type the name of the one you'd like.\n\n" + reaction.message.guild.roles.cache.filter(r => FunctionSetting.includes(r.name.toLowerCase())).map(r => r.name).join(", "), "color": EmbedColor}; 
                    await function_DirectMessage(user.id, { embed });

                    user.createDM().then(channel =>  {

                        QueuedSOSMessages.add(member.user.id);

                        channel.awaitMessages(response => response.content, {
                            max: 1,
                            time: 30000,
                            errors: ['time'],
                        }).then(async (collected) => {
                            QueuedSOSMessages.delete(member.user.id);

                            const response = collected.first();
                            const role = reaction.message.guild.roles.cache.find(r => r.name.toLowerCase() == response.content.toLowerCase());

                            if  (member && role && FunctionSetting.includes(role.name.toLowerCase()))  {

                                if  (!member.roles.cache.has(role.id))  {

                                    member.roles.add(role.id).catch(error => ErrorBag.add(error));

                                    const embed = {"description": SuccessIcon + " You have been given the **" + function_RemoveFormatting(role.name, "other", true) + "** role.",  "color": EmbedColor}; 
                                    await function_DirectMessage(user.id, { embed });

                                } else {

                                  member.roles.remove(role.id).catch(error => ErrorBag.add(error));

                                  const embed = {"description": SuccessIcon + " You have lost the **" + function_RemoveFormatting(role.name, "other", true) + "** role.",  "color": EmbedColor}; 
                                  await function_DirectMessage(user.id, { embed });

                                };

                            } else {

                              const embed = {"description": ErrorIcon + " I couldn't find find that role.",  "color": EmbedColor}; 
                              await function_DirectMessage(user.id, { embed });

                            };

                        }).catch(async () => {
                            QueuedSOSMessages.delete(member.user.id);

                            const embed = {"description": ErrorIcon + " You have ran out of time to respond.",  "color": EmbedColor}; 
                            await function_DirectMessage(user.id, { embed });
                        });

                    }).catch(error => ErrorBag.add(error));

                } else if  (EmojiNumbers.includes(reaction.emoji.name)) {
                    const Index = EmojiNumbers.indexOf(reaction.emoji.name);
                    const role = reaction.message.guild.roles.cache.find(r => r.name.toLowerCase() == FunctionSetting[Index].toLowerCase());

                    if  (role)  {

                        if  (!member.roles.cache.has(role.id))  {
                            member.roles.add(role.id, "Triggered by the Reaction Roles function.").catch(error => ErrorBag.add(error));
                        } else {
                          member.roles.remove(role.id, "Triggered by the Reaction Roles function.").catch(error => ErrorBag.add(error));
                        };

                    };

                };

            };

        };

    };

};
  
//Message Log
if  (peeky.serverData.get(keySF, "message_log_bonus") == true)  {

    if  (!user.bot && !reaction.message.webhookID && reaction.message.author.id !== PeekyId && reaction.emoji.name == "📌" && reaction.count == 1)  {
      
    if  (!LoggedMessages.has(reaction.message.id))  {
      
    if  (!FunctionCooldowns.has("messagelog" + reaction.message.guild.id))  {
        
        LoggedMessages.add(reaction.message.id);
        FunctionCooldowns.add("messagelog" + reaction.message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("messagelog" + reaction.message.guild.id)}, 10000);

        var   name                  = peeky.serverData.get(keySF, "message_log_bonus_setting");
        var   Channel               = reaction.message.guild.channels.cache.find(c => c.name == name);
        const OriginalMessage       = reaction.message;
        const OriginalMessageEdited = OriginalMessage.content.replace(/<@?#?&?!?[0-9]{17,20}>/g, "­").replace(/@everyone/g, "").replace(/@here/g, "");
      
        if  (Channel && reaction.message.guild.me.permissions.has("MANAGE_WEBHOOKS"))  {
            
            CheckWebhook("PEEKY: Message Log", Channel, OriginalMessage, OriginalMessageEdited);

            var TranslatedMessages = [InfoIcon + " **X001** has logged **X002**'s message.", InfoIcon + " **X001** připnul zprávu od **X002**.", InfoIcon + " **X001** zanamenal správu od **X002**.", InfoIcon + " **X001** ha registrado el mensaje de **X002**.", InfoIcon + " **X001** giriş yaptı mesajı **X002**.", InfoIcon + " **X001** зарегистрировал **X002** сообщение.", InfoIcon + " **X001** は**X002**のメッセージを記録しました。"];
            const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(member.displayName, "other", true)).replace("X002", function_RemoveFormatting(reaction.message.member.displayName, "other", true)),  "color": EmbedColor};  
            reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

            function_UpdateAutowipe(keySF, "server");
            FunctionNotification(reaction.message.guild, "Message Log");

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
          
          var TranslatedMessages = [ErrorIcon + " That message was already logged, **X001**.", ErrorIcon + " Tato zpráva je již připnutá, **X001**.", ErrorIcon + " Tá správa už bola zaznamenaná, **X001**.", ErrorIcon + " Ese mensaje ya fue registrado, **X001**.", ErrorIcon + " Bu mesaj zaten girildi, **X001**.", ErrorIcon + " Это сообщение уже зарегистрировано, **X001**.", ErrorIcon + " そのメッセージは既に記録されています、**X001**。"];
          const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(member.displayName, "other", true)),  "color": EmbedColor};
          reaction.message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
          
        };

    };
};

};
});

//MESSAGE  DELETE EVENTS
peeky.on("messageDelete", async (message) => {

if  (message && TextChannels.includes(message.channel.type))  {

    //Workshop Response
    if  (message.channel.id == WorkshopChannel && message.author.id !== PeekyId)  {
        if  (new Date() - new Date(message.createdAt) < 5000)  {
            var embed = {"description": "**Workshop**" + "\n" + " Your submission has been removed for having an incorrect format.",  "color": EmbedColor}; 
        } else {
          var embed = {"description": "**Workshop**" + "\n" + " Your submission has been denied and removed.",  "color": EmbedColor}; 
        };
        function_DirectMessage(message.author.id, { embed });
    };

};

});

//MESSAGE UPDATE EVENTS
peeky.on("messageUpdate", async (oldmessage, message) => {

if  (message && TextChannels.includes(message.channel.type))  {

    //SOME VARIABLES
    const key = `${message.author.id}`;
    const keyCF = `${message.channel.id}`;
    const keySF = `${message.guild.id}`;
    const Language = peeky.serverData.get(keySF, "language");   
    const InfoMessages = [];  
    var Failed = false;

    if  (!message.webhookID)  {

        //Banned Words
        BannedWords(keySF, message, Language);
      
    } else {
      
      //Follow Cleaner
      if  (peeky.serverData.get(keySF, "follow_cleaner_bonus") == true)  {
        
          if  (message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
        
              if  (message.content == "[Original Message Deleted]")  {
                  message.delete().catch(error => ErrorBag.add(error));
              };

              function_UpdateAutowipe(keySF, "server");
              FunctionNotification(message.guild, "Follow Cleaner");
            
          };

      };

    };   

};

});

//MESSAGE EVENTS
peeky.on("message", async (message) => {
  
if  (message.channel.type == "dm")  {

    if  (!QueuedSOSMessages.has(message.author.id) && !message.author.bot && !message.webhookID && message.content.toLowerCase() !== "accept")  {

        if  (!BannedUsers.includes(message.author.id))  {

            QueuedSOSMessages.add(message.author.id);

            const embed = {"description": "**Do you want to send your message to PEEKY's owner?**\nType `accept` in under 30 seconds if you do.",  "color": EmbedColor}; 
            function_DirectMessage(message.author.id, { embed });

            message.channel.awaitMessages(response => response.content.toLowerCase() == "accept", {
              max: 1,
              time: 30000,
              errors: ['time'],
            }).then((collected) => {

                QueuedSOSMessages.delete(message.author.id);

                if  (message.attachments.size > 0) {
                    var image = message.attachments.array()[0].url;
                    var embed = {"description": "**" + function_RemoveFormatting(message.author.tag, "other", true) + ":** " + message.content, "footer": { "text": message.author.id }, image: { "url": image }, "color": EmbedColor};
                    function_DirectMessage(OwnerId, { embed });
                } else {
                  var embed = {"description": "**" + function_RemoveFormatting(message.author.tag, "other", true) + ":** " + message.content, "footer": { "text": message.author.id }, "color": EmbedColor};
                  function_DirectMessage(OwnerId, { embed });
                };

                var embed = {"description": SuccessIcon + " Your message has been successfuly sent to my owner!",  "color": EmbedColor}; 
                function_DirectMessage(message.author.id, { embed });

            }).catch(() => {
               QueuedSOSMessages.delete(message.author.id);

               const embed = {"description": ErrorIcon + " You did not respond in time.",  "color": EmbedColor}; 
               function_DirectMessage(message.author.id, { embed });
            });

        };

    };

} else
  
if (TextChannels.includes(message.channel.type) && peeky.serverData.has(`${message.guild.id}`))  {

//SOME VARIABLES
const key = `${message.author.id}`;
const keyCF = `${message.channel.id}`;
const keySF = `${message.guild.id}`;
const Language = peeky.serverData.get(keySF, "language");   
const InfoMessages = [];  
var Failed = false;
  
/*if  (!message.guild.owner && !FetchingServers.has(message.guild.id))  {
    FetchingServers.add(message.guild.id);
    await message.guild.members.fetch();
};*/
  
if  (message.guild.owner && BannedUsers.includes(message.guild.owner.user.id))  {

    message.guild.leave();
  
}
  
else

//Server Data Checker
if  (!CheckedDataCreations.has(message.guild.id))  {
    
    CheckedDataCreations.add(message.guild.id);
    await function_ServerData(keySF);
  
};
  
//Channel Data Checker
if  (!CheckedDataCreations.has(message.channel.id))  {
    
    CheckedDataCreations.add(message.channel.id);
    await function_ChannelData(keyCF);
  
};
  
//Follower Badge
if  (message.webhookID && message.reference && message.reference.guildID == SupportServer && message.guild.owner)  {  // && message.reference.channelID == AnnouncementsChannel
  
    var key2 = message.guild.owner.user.id;
  
    if  (peeky.userData.has(key2) && !peeky.userData.get(key2, "FollowerBadge"))  {
        peeky.userData.set(key2, true, "FollowerBadge");
    };
  
};

if  (peeky.serverData.has(keySF) && !message.webhookID)  {
  
//MISCELLANEOUS
  
//Badge Checkers
if  (message.guild.owner && !message.author.bot && peeky.userData.has(key))  {
  
    if  (!BadgeCheckCooldown.has(message.guild.id + message.author.id))  {

        BadgeCheckCooldown.add(message.guild.id + message.author.id);
        setTimeout(() => {BadgeCheckCooldown.delete(message.guild.id + message.author.id)}, 300000);
      
        var key2 = message.guild.owner.user.id;

        //Gopbot Badge
        if  (!peeky.userData.get(key, "GopbotBadge") && message.guild.members.cache.filter(m => m.user.id == GopbotId).size > 0)  {
            peeky.userData.set(key, true, "GopbotBadge");
        };

        //Ownership Badge
        if  (!peeky.userData.get(key, "OwnershipBadge"))  {
            peeky.userData.set(key, true, "OwnershipBadge");
        };

    };
  
};
  
//Challenges Auto-Management
if  (!AutoManagementCooldown.has("challenges"))  {

    AutoManagementCooldown.add("challenges");
    setTimeout(() => {AutoManagementCooldown.delete("challenges")}, 1800000);
  
    if  (new Date() - new Date(peeky.peekyData.get("dailychallenge", "started")) >= DayMs)  {

        var ChallengeChosen = function_ShuffleArray(DailyChallenges.filter(i => i[0] !== peeky.peekyData.get("dailychallenge", "data")[0]))[0];
        peeky.peekyData.set("dailychallenge", ChallengeChosen, "data");
        peeky.peekyData.set("dailychallenge", new Date(), "started");

        fs.writeFile('public/website_data/dailychallenge.txt', [

            "<b class='itemdiv'>  <font size='5'>" + ChallengeChosen[1] + "</font>",
            "<font size='2'>" + ChallengeChosen[2] + "</font>",
            "",
            "<font size='1'>  Complete this daily challenge for " + ChallengeChosen[3] + " " + ChallengeChosen[4] + ".  </font>  </b>"

        ].join("<br>"), (err) => {
            if (err) console.log(err); 
        });

        console.log("📡 The new Daily Challenge is \"" + peeky.peekyData.get("dailychallenge", "data")[1] + "\".");
      
    };
  
    if  (new Date() - new Date(peeky.peekyData.get("weeklychallenge", "started")) >= WeekMs)  {

        var ChallengeChosen = function_ShuffleArray(WeeklyChallenges.filter(i => i[0] !== peeky.peekyData.get("weeklychallenge", "data")[0]))[0];
        peeky.peekyData.set("weeklychallenge", ChallengeChosen, "data");
        peeky.peekyData.set("weeklychallenge", new Date(), "started");

        fs.writeFile('public/website_data/weeklychallenge.txt', [
          
            "<b class='itemdiv'>  <font size='5'>" + ChallengeChosen[1] + "</font>",
            "<font size='2'>" + ChallengeChosen[2] + "</font>",
            "",
            "<font size='1'>  Complete this weekly challenge for " + ChallengeChosen[3] + " " + ChallengeChosen[4] + ".  </font>  </b>"

        ].join("<br>"), (err) => {
            if (err) console.log(err); 
        });

        console.log("📡 The new Weekly Challenge is \"" + peeky.peekyData.get("weeklychallenge", "data")[1] + "\".");
      
    };
  
    if  (new Date() - new Date(peeky.peekyData.get("ambassadorprogram", "started")) >= MonthMs)  {

        const Rewards = ["background", "background", "background", "chest", "exp", "gredit"];
        var FinishedRewards = [];
      
        for (var i = 1; i <= 10; i++)  {
          
            var amount = i;

            if  (i == 10)  {

                FinishedRewards.push(["premiumtrial", "store"]);             
              
            } else {
              
              var Reward = Rewards[Math.round(Math.random() * Rewards.length)];
              
              if  (Reward == "background")  {
                
                  var Background = Math.round(Math.random() * Banners.length);
                  if  (Background !== 0 && Banners[Background][Banner.Price] !== Exclusive)  {
                    
                      FinishedRewards.push(["background", Background]);
                    
                  } else {
                    
                    FinishedRewards.push(["background", 1]);
                    
                  };
                
              } else
              
              if  (Reward == "chest")  {

                  FinishedRewards.push(["chest", 1]);
                    
              } else
              
              if  (Reward == "exp")  {
                  
                  FinishedRewards.push(["exp", 250 * amount]);
                
              } else  {
                  
                  FinishedRewards.push(["gredit", 100 * amount]);

              };
              
            };

        };
      
        peeky.peekyData.set("ambassadorprogram", FinishedRewards, "data");
        peeky.peekyData.set("ambassadorprogram", new Date(), "started");
        peeky.peekyData.math("ambassadorprogram", "+", 1, "season");

        console.log("📡 The Ambassador Program has been updated.");
      
    };
  
    var AllRewards = peeky.peekyData.get("ambassadorprogram", "data");
    var VisualizedRewards = [];
  
    var Template = "<div class='container' style='background-image: url(TEMPLATE_ICON)'>  <b class='description'>  <font size='4'>TEMPLATE_NAME</font>  <br>  <font size='2'>TEMPLATE_DESC</font>  </b>  </div>";

    VisualizedRewards.push(Template.replace("TEMPLATE_ICON", "https://cdn.glitch.com/fe9dc061-f995-42cd-9ec2-2758398cb29b%2Freceiver.png?v=1591453720618").replace("TEMPLATE_NAME", "Receiver Badge").replace("TEMPLATE_DESC", "Join the Community Server using your friend's link."));
    VisualizedRewards.push(Template.replace("TEMPLATE_ICON", "https://cdn.glitch.com/fe9dc061-f995-42cd-9ec2-2758398cb29b%2Fambassador.png?v=1591434442413").replace("TEMPLATE_NAME", "Ambassador Badge").replace("TEMPLATE_DESC", "Have a friend use your invite link."));
    
    var Invites = 0; 
    AllRewards.forEach(data =>  {
        Invites ++;

        var Icon = HollowImage;
        var Name = "Unknown";
      
        if  (data[0] == "chest")  {
            Icon = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_chest.png?v=1541260288051";
            Name = data[1] + " Chests";
        } else
        if  (data[0] == "gredit")  {
            Icon = "https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_coins.png?v=1543767999542";
            Name = data[1] + " Gredit";
        } else
        if  (data[0] == "exp")  {
            Icon = "https://cdn.glitch.com/bb3aad24-5d49-4fdf-ba07-725b7b1750e9%2Fexp.png?v=1564224431507";
            Name = data[1] + " Exp";
        } else
        if  (data[0] == "background")  {
            Icon = Banners[data[1]][0];
            Name = /*Banners[data[1]][2] + " "*/ "Background";
        } else
        if  (data[0] == "premiumtrial")  {
            Icon = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fstore_premium.png?v=1585086074815";
            Name = "Premium Trial";
        };
        
        VisualizedRewards.push(Template.replace("TEMPLATE_ICON", Icon).replace("TEMPLATE_NAME", Name).replace("TEMPLATE_DESC", (Invites * 5) + " Invites"));

    });

    await fs.writeFile('public/website_data/ambassaddorrewards.txt', VisualizedRewards.join(" "), (err) => {
        if (err) console.log(err);
    });

    await fs.writeFile('public/website_data/ambassaddorseason.txt', "Season " + peeky.peekyData.get("ambassadorprogram", "season"), (err) => {
        if (err) console.log(err);
    });

};

//Workshop Auto-Management
if  (message.channel.id == WorkshopChannel && !message.author.bot)  {
  
    if  (message.attachments.size == 1 && message.content.split('\n').length == 3 && message.content.split('\n')[0].startsWith("Name: ") && message.content.split('\n')[1].startsWith("Credit: ") && message.content.split('\n')[2].startsWith("Price: ") && isNaN(message.content.split('\n')[2].replace("Price: ", "")) == false)  {  // && message.content.toLowerCase().split('\n')[3] == undefined
      
        //Publisher Badge
        if  (!peeky.userData.has(key) && peeky.userData.get(key, "PublisherBadge"))  {
            peeky.userData.set(key, true, "PublisherBadge");
        };
 
    }
     else
    {
       message.delete().catch(error => ErrorBag.add(error));
    };

};
    
//Limited Roles Auto-Management
if  (!AutoManagementCooldown.has("limitedroles"))  {

    AutoManagementCooldown.add("limitedroles");
    setTimeout(() => {AutoManagementCooldown.delete("limitedroles")}, 1800000);

    //Premium
    await peeky.guilds.cache.get(SupportServer).members.cache.filter(m => !m.user.bot && m.roles.cache.has(PremiumRole)).forEach(m => {
        
        if  (peeky.userData.get(m.user.id, "PremiumLength") == "Lifetime")  {
            var ExpirationMs = YearMs * 100;
        } else if  (peeky.userData.get(m.user.id, "PremiumLength") == "Year")  {
          var ExpirationMs = YearMs;
        } else if  (peeky.userData.get(m.user.id, "PremiumLength") == "Trial")  {
          var ExpirationMs = DayMs * 7;
        } else  {
          var ExpirationMs = MonthMs;
        };

        if  (peeky.userData.has(m.user.id, "SupporterLastPurchase") && (new Date() - new Date(peeky.userData.get(m.user.id, "SupporterLastPurchase")) >= ExpirationMs))  {
            m.roles.remove(PremiumRole).catch(error => ErrorBag.add(error));

            const embed = {"description": InfoIcon + " Your Premium has just expired, but you can renew it by going to the [store](" + Setting.Domain + "/pages/store/#premium)!",  "color": EmbedColor}; 
            m.send({ embed }).catch(error => ErrorBag.add(error));
        };

    });

};

//Giveaway Auto-Management
if  (!message.author.bot)  {
  
    if  (!AutoManagementCooldown.has(message.guild.id + "giveaways"))  {

        AutoManagementCooldown.add(message.guild.id + "giveaways");
        setTimeout(() => {AutoManagementCooldown.delete(message.guild.id + "giveaways")}, 300000);
        
        var Giveaways = peeky.serverData.get(keySF, "ActiveGiveaways");
        var FinishedGiveaway = false;
      
        if  (Giveaways.length > 0)  {

            var currentgiveaway = 0;
            Giveaways.forEach(giveaway => {

                if  (FinishedGiveaway == false)  {

                    if  (new Date() - new Date(giveaway[3]) >= giveaway[2])  {

                        FinishedGiveaway = true;
                        peeky.serverData.observe(keySF, "ActiveGiveaways").splice(currentgiveaway, 1);

                        if  (peeky.channels.cache.has(giveaway[5]) && giveaway[4] > 0)  {

                            var channel = peeky.channels.cache.get(giveaway[5]);
                          
                            if  (channel.permissionsFor(peeky.user).has('SEND_MESSAGES', 'ADD_REACTIONS'))  {

                                channel.messages.fetch(giveaway[4]).then(async message => {

                                  var reaction = message.reactions.cache.find(e => e.emoji.name == "🎁");

                                  if  (reaction)  {

                                      var RawParticipants = null;

                                      await reaction.users.fetch({ limit: 100 }).then(r => {
                                          RawParticipants = r.filter(i => !i.bot && message.guild.members.cache.has(i.id)).map(u => u.id);
                                      });

                                      var Participants = function_ShuffleArray(RawParticipants); 
                                      var Winners = [];
                                      var FixedWinners = [];

                                      var current = 0;
                                      if  (Participants.length > 0)  {
                                          Participants.forEach(user => {

                                              if  (current < giveaway[1])  {

                                                  var participants = Participants.filter(i => !Winners.includes(i));

                                                  if  (participants.length > 0)  {
                                                      var winner = participants[Math.floor(Math.random() * participants.length)];

                                                      Winners.push(winner);
                                                      FixedWinners.push("<@" + winner + ">");

                                                      var embed = {"description": "You have won a giveaway for **" + giveaway[0] + "** in the **" + function_RemoveFormatting(message.guild.name, "other", true) + "** server!", "color": EmbedColor}; 
                                                      function_DirectMessage(winner, { embed });
                                                  };

                                              };

                                              current ++;

                                          });
                                      } else {
                                        FixedWinners = ["Nobody"];
                                      };
                                    
                                      var WinnerSeparator = " ";
                                      if  (FixedWinners.length > 1)  {
                                          WinnerSeparator = "\n";
                                      };

                                      const newEmbed = new Discord.MessageEmbed({
                                          "description": 
                                            "**" + giveaway[0] + "**" + "\n" +
                                            "Host: " + "<@" + giveaway[6] + ">" + "\n" +
                                            "Winners:" + WinnerSeparator + FixedWinners.join("\n"),
                                          "thumbnail":  {  "url": giveaway[7]  },
                                          "footer": { "text": "This giveaway has ended." },
                                          "color": EmbedColor
                                      });
                                      message.edit(newEmbed).catch(error => ErrorBag.add(error));
                                    
                                      var TranslatedMessages = [
                                          "Congratulations to X001 for winning the **X002** giveaway!",
                                          "Gratulace pro X001 za to že vyhráli soutež o **X002**!",
                                          "Blahoželanie pre X001 za vyhratie X002 rozdávania!",
                                          "¡Felicitaciones a X001 por ganar el sorteo de **X002**!",
                                          "X001 Tebrikler **X002** çekilişini kazandiniz.",
                                          "Поздравляем X001 с выигрышем подарка **X002**!",
                                          "**X002**プレゼントを獲得したX001おめでとうございます!",
                                      ];

                                      var embed = {"description": TranslatedMessages[Language].replace("X001", FixedWinners.join(" ")).replace("X002", giveaway[0]), "color": EmbedColor}; 
                                      channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {
                                          m.react("🎉").catch(error => ErrorBag.add(error));
                                      });

                                  };

                                })
                                .catch(error => {
                                    ErrorBag.add(error);
                                })
                              
                            };

                        };

                    };

                };

                currentgiveaway ++;

          });

      };

    };

};
    
//Random Treasures Auto-Management
if  (!AutoManagementCooldown.has("randomtreasures"))  {

    AutoManagementCooldown.add("randomtreasures");
    setTimeout(() => {AutoManagementCooldown.delete("randomtreasures")}, 3600000);
  
    var serverlist = peeky.serverData.filter( p => p.server_upgraded == true && p.GuildID ).array();
    var server = serverlist[Math.floor(Math.random()*serverlist.length)];

    if  (peeky.guilds.cache.has(server.GuildID) && peeky.serverData.has(`${server.GuildID}`))  {

        var name = peeky.serverData.get(`${server.GuildID}`, "treasure_channel");
        var guild = peeky.guilds.cache.get(server.GuildID);
        var channel = guild.channels.cache.find(c => c.name == name);
      
        if  (channel)  {

            if  (channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {

                var Rewards = [[GreditIcon, 500, "Gredit"], [ChestIcon, 1, "Chests"], ["Exp", 1000, "Exp"]];
                var Index = Math.floor((Math.random() * Rewards.length));
                var Amount = Math.floor((Math.random() * Rewards[Index][1])) + 1;

                var embed = {"description": "**Random Treasure**" + "\n" + "Reward: " + Amount + " " + Rewards[Index][0],  "thumbnail": {  "url": "https://cdn.glitch.com/42356302-206d-447f-8c79-4ee43df1a258%2Ftreasures.png?v=1568646809345"  },  "footer": {  "text": "Type \"claim\" to claim this treasure!"  }, "color": EmbedColor}; 
                channel.send({  embed  }).catch(error => ErrorBag.add(error)).then(async m => {  

                    m.channel.awaitMessages(message => message.content.toLowerCase() == "claim", { max: 1, time: 3600000, errors: ['time'] }).then(collected => {

                        var member = collected.first().member;
                        var key2 = `${member.user.id}`;

                        if  (peeky.userData.has(member.user.id))  {
                            
                            if  (peeky.peekyData.get("dailychallenge", "data")[0] == "treasure_hunt" && function_ChallengeRewards(key2, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
                                InfoMessages.push(InfoMessage4[Language]);
                            };

                            peeky.userData.math(key2, "+", Amount, Rewards[Index][2]);

                            var embed = {"description": SuccessIcon + " **" + function_RemoveFormatting(member.displayName, "other", true) + "** has claimed the treasure!" + "\n\n" + InfoMessages.join("\n\n"), "color": EmbedColor}; 
                            m.channel.send({  embed  }).catch(error => ErrorBag.add(error));

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
if  (peeky.serverData.get(keySF, "automatic_reactions_bonus") == true)  {
  
    if  ((message.attachments.size > 0 || function_DetectLink(message.content)) && !message.author.bot)  {

        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS', 'EXTERNAL_EMOJIS'))  {

            var ReactionEmoji1 = message.guild.emojis.cache.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_upvote");
            var ReactionEmoji2 = message.guild.emojis.cache.find(c=> c.name == peeky.serverData.get(keySF, "automatic_reactions_bonus_setting") + "_downvote");

            if  (ReactionEmoji1 && ReactionEmoji2 && message.channel.id !== WorkshopChannel)  {

                await message.react(ReactionEmoji1).catch(error => ErrorBag.add(error));
                await message.react(ReactionEmoji2).catch(error => ErrorBag.add(error));

                KarmaImages.push([message.id, [message.author.id]]);

                function_UpdateAutowipe(keySF, "server");

            } else { 

              await message.react(DefaultUpvote).catch(error => ErrorBag.add(error));
              await message.react(DefaultDownvote).catch(error => ErrorBag.add(error));

              KarmaImages.push([message.id, [message.author.id]]);

              function_UpdateAutowipe(keySF, "server");

            };
          
            FunctionNotification(message.guild, "Automatic Reactions");

        };

    };

};
  
//Images Only
if  (peeky.serverData.get(keySF, "images_only_bonus") == true)  {
  
    if  (peeky.serverData.get(keySF, "images_only_bonus_setting").map(c => c.toLowerCase()).includes(message.channel.name.toLowerCase()))  {
    
        if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

            if  (!message.member.permissions.has("MANAGE_MESSAGES") && message.attachments.size < 1)  {

                message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

                if  (!ResponseCooldowns.has(message.guild.id + "IO"))  {

                    ResponseCooldowns.add(message.guild.id + "IO");
                    setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "IO")}, ResponseCooldownMS);

                    var TranslatedMessages = [InfoIcon + " You can only send images in this channel, **X001**.", InfoIcon + " V tomto kanále lze posílat pouze obrázky, **X001**.", InfoIcon + " V tomto channeli môžeš posielať iba obrázky, **X001**.", InfoIcon + " Sólo puedes enviar imágenes en este canal, **X001**.", InfoIcon + " Bu kanalda sadece resim gönderebilirsiniz, **X001**.", InfoIcon + " Вы можете отправлять изображения только в этом канале, **X001**.", InfoIcon + " このチャンネルでは画像を送信することしかできません、**X001**。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});

                };

                function_UpdateAutowipe(keySF, "server");          
                FunctionNotification(message.guild, "Images Only");

            };
        };
         
    };

};
    
//Reddit Posts
if  (peeky.serverData.get(keySF, "reddit_posts_bonus") == true)  {

    if  (!FunctionCooldowns.has("redditposts" + message.guild.id))  {

        FunctionCooldowns.add("redditposts" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("redditposts" + message.guild.id)}, 1800000);

        var name    = peeky.serverData.get(keySF, "reddit_posts_bonus_setting");
        var channel = message.guild.channels.cache.find(c => c.name == name);

        if  (channel && channel.permissionsFor(peeky.user).has('SEND_MESSAGES'))  {

            const Channel = channel;

            node_fetch("https://api.reddit.com/r/" + name + "/top.json?sort=top&limit=" + Setting.RedditLimit).then(response => response.json()).then(response => {

                if  (response.data.children.length > 0)  {

                    for (i = 0; i < response.data.children.length; i++)  {

                        var Post = response.data.children[i].data;

                        if  (!peeky.serverData.get(keySF, "reddit_posts_bonus_last").includes(Post.url) && Post.pinned == false)  {

                            if  (peeky.serverData.get(keySF, "reddit_posts_bonus_last").length > Setting.RedditLimit)  {
                                peeky.serverData.set(keySF, [], "reddit_posts_bonus_last");
                            };

                            peeky.serverData.observe(keySF, "reddit_posts_bonus_last").push(Post.url);

                            if  ((Post.url.includes(".png") || Post.url.includes(".gif") || Post.url.includes(".jpg")))  {  var image = Post.url;  }  else  {  var image = null;  }; 

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

                };

            });

            function_UpdateAutowipe(keySF, "server");
            FunctionNotification(message.guild, "Reddit Posts");

        };

    };
  
};
    
//Server Age
if  (peeky.serverData.get(keySF, "server_age_bonus") == true)  {

    if  (!FunctionCooldowns.has("serverage" + message.guild.id))  {

        FunctionCooldowns.add("serverage" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("serverage" + message.guild.id)}, 3600000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id        = peeky.serverData.get(keySF, "server_age_bonus_id");
            var channel   = message.guild.channels.cache.find(g => g.id == id);
            var TranslatedStrings = [["Server Age", "days"], ["Věk Serveru", "dní"], ["Vek Serveru", "dní"], ["Edad del servidor", "días"], ["Sunucu yaşı", "gün"], ["Возраст сервера", "дней"], ["サーバーの経過時間", "日"]];
            var FinalName = TranslatedStrings[Language][0] + ": " + function_TimeLeft(message.guild.createdAt, "days", null).toLocaleString('en') + " " + TranslatedStrings[Language][1];

            if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                channel.setName(FinalName, "Triggered by the Server Age function.").catch(error => ErrorBag.add(error));
              
                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(message.guild, "Server Age");
            };

        };

    };
  
};
    
//Member Counter
if  (peeky.serverData.get(keySF, "member_counter_bonus") == true)  {

    if  (!FunctionCooldowns.has("membercounter" + message.guild.id))  {

        FunctionCooldowns.add("membercounter" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("membercounter" + message.guild.id)}, 300000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id         = peeky.serverData.get(keySF, "member_counter_bonus_id");
            var Prefix     = peeky.serverData.get(keySF, "member_counter_bonus_setting");
            var channel    = message.guild.channels.cache.find(g => g.id == id);
            var FinalName  = Prefix + ": " + message.guild.members.cache.filter(m => !m.user.bot).size.toLocaleString('en');

            if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                channel.setName(FinalName, "Triggered by the Member Counter function.").catch(error => ErrorBag.add(error));    
              
                function_UpdateAutowipe(keySF, "server");
                FunctionNotification(message.guild, "Member Counter");
            };

        };

    };
  
};
    
//Classification Counter
if  (peeky.serverData.get(keySF, "classification_counter_bonus") == true)  {

    if  (!FunctionCooldowns.has("classificationcounter" + message.guild.id))  {

        FunctionCooldowns.add("classificationcounter" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("classificationcounter" + message.guild.id)}, 300000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id = peeky.serverData.get(keySF, "classification_counter_bonus_id");
            var Prefix = peeky.serverData.get(keySF, "classification_counter_bonus_setting") + "s";
            var role = message.guild.roles.cache.find(r => r.name == peeky.serverData.get(keySF, "classification_counter_bonus_setting"));
            var channel = message.guild.channels.cache.find(g => g.id == id);
          
            if  (role)  {
              
              var FinalName  = Prefix + ": " + message.guild.members.cache.filter(m => m.roles.cache.has(role.id)).size.toLocaleString('en');

              if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                  channel.setName(FinalName, "Triggered by the Classification Counter function.").catch(error => ErrorBag.add(error));    

                  function_UpdateAutowipe(keySF, "server");
                  FunctionNotification(message.guild, "Classification Counter");
              };
              
            };

        };

    };
  
};
    
//Server Time
if  (peeky.serverData.get(keySF, "server_timezone_bonus") == true)  {

    if  (!FunctionCooldowns.has("servertimezone" + message.guild.id))  {

        FunctionCooldowns.add("servertimezone" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("servertimezone" + message.guild.id)}, 300000);

        if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {

            var id         = peeky.serverData.get(keySF, "server_timezone_bonus_id");
            var channel    = message.guild.channels.cache.find(g => g.id == id);
            var TranslatedStrings = [["Server Time"], ["Čas Serveru"], ["Čas Serveru"], ["Server Time"], ["Sunucu Süresi"], ["Server Time"]];
            var FinalName = TranslatedStrings[Language] + ": " + function_DateFormat(Date.now(), "JustTime", peeky.serverData.get(keySF, "timezone"));

            if  (channel && channel.name !== FinalName && channel.permissionsFor(peeky.user).has('CONNECT'))  {
                channel.setName(FinalName, "Triggered by the Server Time function.").catch(error => ErrorBag.add(error));    
              
                FunctionNotification(message.guild, "Server Time");
            };

        };

    };
  
};

//Event Countdown
if  (peeky.serverData.get(keySF, "event_countdown_bonus") == true)  {

    if  (!FunctionCooldowns.has("eventcountdown" + message.guild.id))  {

        var channel = message.guild.channels.cache.find(c => c.id == peeky.serverData.get(keySF, "event_countdown_bonus_id"));

        if  (channel && channel.permissionsFor(peeky.user).has('CONNECT'))  {

            FunctionCooldowns.add("eventcountdown" + message.guild.id)
            setTimeout(() => {FunctionCooldowns.delete("eventcountdown" + message.guild.id)}, 300000);

            var TheDate = peeky.serverData.get(keySF, "event_countdown_bonus_setting") - Date.now();
            const EndName = "The Countdown has ended.";

            if  (peeky.serverData.get(keySF, "event_countdown_bonus_setting") > 0 && TheDate > 0)  {

                var Time = peeky.serverData.get(keySF, "event_countdown_bonus_setting");

                var FixedTime = function_TimeLeft(Time, "minutes", null);
                var LengthName = "minutes";

                if  (FixedTime > 60)  {  

                    var FixedTime = function_TimeLeft(Time, "hours", null);
                    var LengthName = "hours";

                    if  (FixedTime > 24)  {
                        FixedTime = function_TimeLeft(Time, "days", null); LengthName = "days";

                        if  (FixedTime >= 365)  {
                            FixedTime = "over"; LengthName = "a year";
                        };

                    };

                };

                var FinalName = "Starting in " + FixedTime.toLocaleString('en') + " " + LengthName;

                if  (channel.name !== FinalName)  {
                    channel.setName(FinalName, "Triggered by the Event Countdown function.").catch(error => ErrorBag.add(error));
                };

            }
             else if (channel.name !== EndName)
            {
             channel.setName(EndName).catch(error => ErrorBag.add(error));
            };

            function_UpdateAutowipe(keySF, "server");
            FunctionNotification(message.guild, "Event Countdown");
          
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
            const ThisMsgDate    = new Date();

            if  (((LastMsgUser == message.author.id) && (ThisMsgDate - LastMsgDate <= 500)) || (message.content == LastMsgContent) || (isNaN(message.content) && message.content.toUpperCase() == message.content))  {

                if  (FloodProtectionStrikes.filter(i => i == message.author.id).map(i => "Strike").length == peeky.serverData.get(keySF, "flood_protection_bonus_setting"))  {

                    const name = peeky.serverData.get(keySF, "muted_role");
                    const Role = message.guild.roles.cache.find(role => role.name == name);

                    if  (Role && !message.member.roles.cache.has(Role.id))  {

                        message.member.roles.add(Role.id, "Triggered by the Flood Protection function.").catch(error => ErrorBag.add(error));

                        if  (!ResponseCooldowns.has(message.guild.id + "FP"))  {

                            ResponseCooldowns.add(message.guild.id + "FP");
                            setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "FP")}, ResponseCooldownMS);

                            var TranslatedMessages = [InfoIcon + " I have muted **X001** because of the **Flood Protection** function.", InfoIcon + " Ztlumil jsem **X001** kvůli **Flood Protection** funkci.", InfoIcon + " Mutol som **X001** kvôli **Flood Protection** funkcii.", InfoIcon + " He silenciado a **X001** por la función de **Flood Protection**.", InfoIcon + " **Flood Protection** fonksiyonu yüzünden **X001** adlı kişi susturuldu.", InfoIcon + " Я приглушил **X001** из-за функции **Защита от наводнений**.", InfoIcon + " **Flood Protection**関数のため、**X001**はミュートされました。"];
                            const embed = {"description": TranslatedMessages[Language].replace("X001", message.member.displayName),  "color": EmbedColor};
                            await message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))}); 

                        };

                        function_UpdateAutowipe(keySF, "server");
                        FunctionNotification(message.guild, "Flood Protection");

                    };

                } else {

                  FloodProtectionStrikes.push(message.author.id);

                  setTimeout(() => {
                     FloodProtectionStrikes.splice(FloodProtectionStrikes.indexOf(message.author.id), 1);
                  }, 30000); 

                };

            };

            peeky.channelData.set(keyCF, new Date(), "flood_protection_bonus_lastdate");
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
if  (peeky.serverData.get(keySF, "spoiler_lock_bonus") == true)  {
  
    if  (message.author.id !== PeekyId && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

        if  (!message.member.permissions.has("MANAGE_MESSAGES"))  {

            if  ((message.attachments.size > 0 && !message.attachments.array()[0].name.startsWith("SPOILER_")) || function_DetectLink(message.content))  {

                if  ((((new Date() - new Date(message.member.joinedAt)) / 60000) < peeky.serverData.get(keySF, "spoiler_lock_bonus_setting")) || peeky.serverData.get(keySF, "spoiler_lock_bonus_setting") == 0)  {

                    message.delete({ timeout: AutoDeleteTime}).catch(error => ErrorBag.add(error));

                    if  (!ResponseCooldowns.has(message.guild.id + "SO"))  {
                      
                        ResponseCooldowns.add(message.guild.id + "SO");
                        setTimeout(() => {ResponseCooldowns.delete(message.guild.id + "SO")}, ResponseCooldownMS);
                        
                        var TranslatedMessages = [InfoIcon + " You have to mark your image as a spoiler, **X001**.", InfoIcon + " Musíte označit váš obrázek jako spoiler, **X001**.", InfoIcon + " Tienes que marcar tu imagen como un spoiler, **X001**.", InfoIcon + " Lütfen resminizi spoiler olarak işaretleyin, **X001**.", InfoIcon + " Вы должны отметить свое изображение как спойлер, **X001**.", InfoIcon + " スポイラーとしてあなたのイメージをマークする必要があります、**X001**。"];
                       
                        const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor}
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {m.delete({ timeout: 10000}).catch(error => ErrorBag.add(error))});
                    };

                    function_UpdateAutowipe(keySF, "server");
                    FunctionNotification(message.guild, "Spoiler Lock");

                };
              
            };
          
        };
      
    };
  
};
      
//Classification Wall
if  (peeky.serverData.get(keySF, "donor_wall_bonus") == true)  {

    const Role    = peeky.guilds.cache.get(message.guild.id).roles.cache.find(r => r.name == peeky.serverData.get(keySF, "donor_wall_bonus_setting"));
    const Channel = peeky.guilds.cache.get(message.guild.id).channels.cache.find(c => c.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    var WallList  = [];
    var Tags      = [];
    var EndString = "";

    if  (Role && Channel)  {

        if  (!FunctionCooldowns.has("classificationwall" + message.guild.id))  {

            FunctionCooldowns.add("classificationwall" + message.guild.id)
            setTimeout(() => {FunctionCooldowns.delete("classificationwall" + message.guild.id)}, 300000);

            message.guild.members.cache.forEach(m => {
              
              Tags = [];
              
              if  (m.roles.cache.has(Role.id))  {
                  if  (m.user.id == message.guild.owner.user.id)  {  Tags.push(OwnerTag);  };
                  if  (m.premiumSince)  {  Tags.push(BoostTag);  };
                  if  (m.user.bot)  {  Tags.push(BotTag);  };
                
                  WallList.push("" + function_RemoveFormatting(m.displayName, "other", true) +  " " + Tags.join(" "));
              };
            });

            Channel.messages.fetch({ limit: 1 }).then(messages => {

            const Message = messages.array()[0];
            const WallAmount = WallList.length;

            if  (WallAmount > Setting.ClassificationWallLimit)  {  EndString = "\n and " + (WallAmount - Setting.ClassificationWallLimit) + " more..."  };
            if  (WallAmount == 0)  {  WallList = ["Nobody."]  };

                if  (Message && Message.id == peeky.serverData.get(keySF, "donor_wall_bonus_id"))  {

                    var FinalText = /*"**" + function_RemoveFormatting(message.guild.name, "other", true) + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n" +*/ WallList.slice(0, Setting.ClassificationWallLimit).join("\n") + "" + EndString;

                    if  (Message.content !== FinalText)  {
                        Message.edit(FinalText).catch(error => ErrorBag.add(error));

                        function_UpdateAutowipe(keySF, "server");
                        FunctionNotification(message.guild, "Classification Wall");
                    };

                };

            }).catch(error => ErrorBag.add(error));

          };
      
      };
  
};
      
//Weekend Channels
if  (peeky.serverData.get(keySF, "weekend_channels_bonus") == true)  {
  
    if  (!FunctionCooldowns.has("weekendchannels" + message.guild.id) && message.guild.me.permissions.has('MANAGE_CHANNELS'))  {

        FunctionCooldowns.add("weekendchannels" + message.guild.id);
        setTimeout(() => {FunctionCooldowns.delete("weekendchannels" + message.guild.id)}, 3600000);

        var Channels = message.guild.channels.cache.filter(c => TextChannels.includes(c.type) && peeky.serverData.get(keySF, "weekend_channels_bonus_setting").includes(c.name)).array();

        Channels.forEach(async channel => {

            await channel.updateOverwrite(message.guild.members.cache.get(PeekyId), { VIEW_CHANNEL: true }).catch(error => ErrorBag.add(error));
            await channel.updateOverwrite(message.guild.id, { VIEW_CHANNEL: ["Saturday", "Sunday"].includes(Days[new Date().getDay()]) }).catch(error => ErrorBag.add(error));
            
        });
      
    };
  
};
      
//Reaction Roles
if  (peeky.serverData.get(keySF, "reaction_roles_bonus") == true)  {

    const Channel = peeky.guilds.cache.get(message.guild.id).channels.cache.find(c => c.id == peeky.serverData.get(keySF, "reaction_roles_bonus_channel"));

    if  (Channel)  {

        if  (!FunctionCooldowns.has("reactionroles" + message.guild.id))  {

            FunctionCooldowns.add("reactionroles" + message.guild.id);
            setTimeout(() => {FunctionCooldowns.delete("reactionroles" + message.guild.id)}, 300000);
          
            Channel.messages.fetch({ limit: 1 }).then(async messages => {

            const Message = messages.array()[0];
            const FunctionSetting = peeky.serverData.get(keySF, "reaction_roles_bonus_setting").slice(0, Setting.ReactionRolesLimit);  //.fitler(r => message.guild.roles.cache.find(role => role.name.toLowerCase() == r.toLowerCase()));

            if  (Message && Message.id == peeky.serverData.get(keySF, "reaction_roles_bonus_id"))  {

                const Roles = function_NumarizeArray(FunctionSetting, ["", ""], null);
              
                var FinalText = Roles + "\n" + "Click the 🔠 reaction to view all the roles.";

                if  (Message.content !== FinalText)  {
                    await Message.edit(FinalText).catch(error => ErrorBag.add(error));
                    await Message.reactions.removeAll().catch(error => ErrorBag.add(error));

                    if  (FunctionSetting.length > 0)  {
                        for (var i = 0; i < FunctionSetting.length; i++) {
                            await Message.react(EmojiNumbers[i]);
                        };
                    };
                  
                    Message.react("🔠");

                };

            };

            }).catch(error => ErrorBag.add(error));

      };
      
  };
  
};

//Banned Words
BannedWords(keySF, message, Language);
      
//Ticket System
if  (peeky.serverData.get(keySF, "ticket_system_bonus") == true)  {

    const Role    = peeky.guilds.cache.get(message.guild.id).roles.cache.find(r => r.name == peeky.serverData.get(keySF, "ticket_system_bonus_setting"));
    const Channel = peeky.guilds.cache.get(message.guild.id).channels.cache.find(c => c.id == peeky.serverData.get(keySF, "ticket_system_bonus_channel"));

    if  (!ActivatedTicketSystems.has(message.guild.id) && Role && Channel)  {
      
        ActivatedTicketSystems.add(message.guild.id);
        Channel.messages.fetch({ limit: 1 });

    };
  
};
  
};

//COMMANDS
if  (!message.webhookID && !message.author.bot && !BannedUsers.includes(message.author.id) && message.channel.permissionsFor(peeky.user).has('SEND_MESSAGES', 'EMBED_LINKS'))  {
  
//Mention Commands
  
//Prefix Troubleshoot
if  ((message.mentions.members.first() && message.mentions.members.first().id == PeekyId))  {
  
    if  (!CommandCooldown.has("prefixtroubleshoot" + message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {

            CommandCooldown.add("prefixtroubleshoot" + message.guild.id);
            setTimeout(() => {CommandCooldown.delete("prefixtroubleshoot" + message.guild.id)}, 10000);
          
            var HasPermissions = false;

            var Description = " The current prefix is **" + peeky.serverData.get(keySF, "prefix") + "** in this server.";
            if  (message.member.permissions.has("MANAGE_GUILD"))  {
                HasPermissions = true;
                Description = " The current prefix is **" + peeky.serverData.get(keySF, "prefix") + "**, wanna change it to **" + Setting.DefaultPrefix + "**?";
            };
          
            const embed = new Discord.MessageEmbed({"description": InfoIcon + Description, "color": EmbedColor});
            await message.channel.send({ embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                if  (HasPermissions)  {
                    await m.react(DefaultUpvote).catch(error => {ErrorBag.add(error)});
                    await m.react(DefaultDownvote).catch(error => {ErrorBag.add(error)});

                    peeky.userData.set(key, m.id, "PrefixTroubleshootID");
                };

            }).catch(error => {ErrorBag.add(error)});
          
        };

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};
  
//Prefixed Commands
if  (message.content.startsWith(peeky.serverData.get(keySF, "prefix")))  {

    const Prefix = peeky.serverData.get(keySF, "prefix");
    const CommandName = message.content.replace(Prefix, "");

    function_UpdateAutowipe(keySF, "server");
    function_UpdateAutowipe(key, "user");
  
    console.log("📋 The " + function_FixCapitalization(message.content.split(" ")[0].replace(Prefix, "")) + " command has been used in " + function_RemoveFormatting(message.guild.name, "other", false) + ".");

/*
//Command Template
if  (CommandName.startsWith("commandtemplate"))  {
  
    var CommandArgument = CommandName.split("commandtemplate")[1];
  
    if  (CommandArgument.startsWith(" "))  {
  
        CommandArgument = CommandArgument.replace(" ", "");        

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
*/

//Eval
if  (CommandName.startsWith("eval"))  {
  
    var CommandArgument = CommandName.split("eval")[1];
  
    if  (CommandArgument.startsWith(" "))  {
  
        CommandArgument = CommandArgument.replace(" ", "");
      
        if  (message.author.id == OwnerId)  {

            function clean(text) {
            if  (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
            };

            var EvalResult = CommandArgument;

            try {
            const code = EvalResult;
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
            message.channel.send(`\`Error Detected\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            };

        } else {
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

//Help
if (CommandName == "help")  {
  
    const WebsiteInfo = [
      "Visit the website to vote, read tutorials, browse the backgrounds, view the leaderboard and pretty much everything PEEKY related.",
      "Navštivte moji stránku aby jste mohli hlasovat, získat pomoc s botem, surfovat profilová pozadí, zkouknout profilový žebíček a vlastně všechno, co se týče PEEKYho.",
      "Navštívte webovú stránku, kde môžete hlasovať, prečítať si návody, prehliadať pozadia, prezerať výsledkové tabuľky a takmer všetko, čo sa týka PEEKYho.",
      "Visita el sitio web para votar, leer tutoriales, navegar por los fondos, ver la tabla de clasificación y casi todo relacionado con PEEKY.",
      "Oy vermek, öğretici sayfaları okumak, arka planlara göz atmak, Sıralama tablosu ve PEEKY ile ilgili hemen hemen her şeyi görüntülemek için web sitesini ziyaret edin.",
      "Посетите сайт, чтобы проголосовать, прочитать учебники, просмотреть фоны, просмотреть доску объявлений и многое другое, что связано с PEEKY.",
      "投票、チュートリアルを読んで、背景を閲覧し、リーダーボードを表示し、ほとんどすべてPEEKY関連を閲覧するために、ウェブサイトを訪問します。"
    ];
    const StoreInfo = [
      "Support PEEKY by purchasing some neat items from the store!",
      "Podpořte PEEKYho tím, že si koupíte nějaké vylepšení z obchodu!",
      "Navštívte webovú stránku, kde môžete hlasovať, prečítať si návody, prehliadať pozadia, prezerať výsledkové tabuľky a takmer všetko, čo sa týka PEEKYho.",
      "¡Apoya a PEEKY comprando algunos artículos de la tienda!",
      "Mağazadan bazı ürünler satın alarak PEEKY'yi destekleyin.",
      "Поддержите PEEKY, купив несколько аккуратных вещей в магазине!",
      "店からいくつかのきちんとしたアイテムを購入することでPEEKYをサポート!"
    ];
    const SupportServerInfo = [
      "Join the Community Server for important announcements, assistance with the bot, giveaways and much more!",
      "Připojte se na můj Discord server pro důležité upozornění, podporu s botem, akce a mnoho dalšího!",
      "Pripojte sa k serveru podpory a získajte dôležité oznámenia, pomoc s botom, darčeky a oveľa viac.",
      "Únete al Servidor de Soporte para anuncios importantes, asistencia con el bot, regalos y mucho más!",
      "Önemli duyurular, botla ilgili yardım, hediyeler ve çok daha fazlası için Destek Sunucusuna katılın!",
      "Присоединяйтесь к серверу поддержки для важных объявлений, помощи с ботом, подарков и многого другого!",
      "重要なお知らせ、ボットの支援、プレゼントなど、サポートサーバーにご参加ください!"
    ];
    const BotInvite = [
      "Add PEEKY to your server and get all the features for free and quick!",
      "Přidejte si PEEKYho na váš server a dostaňte přístup k jeho funkcím - Rychle a zdarma!",
      "Pridaj PEEKYho na tvôj server a získaj všetky funkcie.",
      "Añade a PEEKY a tu servidor y obtén todas las características de forma rápida y gratuita!",
      "Sunucunuza PEEKY ekleyin ve tüm özellikleri ücretsiz ve hızlı bir şekilde alın!",
      "Добавьте PEEKY на свой сервер и получите все функции бесплатно и быстро!",
      "あなたのサーバーにPEEKYを追加し、無料かつ迅速にすべての機能を取得!"
    ];
  
    const embed = {  "description": 
                     "**Website** [[Open]](" + Setting.Domain + ")\n" + WebsiteInfo[Language] +
                     "\n\n**Store** [[Open]](" + Setting.Domain + "/pages/store/)" +  // [[Checkout]](https://donatebot.io/checkout/" + SupportServer + ")\n" + StoreInfo[Language]
                     "\n\n**Community Server** [[Join]](" + Setting.Domain + "/pages/join_server/)\n" + SupportServerInfo[Language] +
                     "\n\n**Add Bot** [[Add]](" + Setting.Domain + "/pages/add_peeky/)\n" + BotInvite[Language],
                     "image": {  "url": "https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fnew_header.png?1553884542855"  },
                     "color": 7506394 
    };
  
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  
};

//Essentials
if  (CommandName == "essentials")  {
  
    var Status = peeky.userData.set(key, !peeky.userData.get(key, "EssentialsEnabled"), "EssentialsEnabled");

    const embed = {"description": SuccessIcon + " You have successfully " + peeky.userData.get(key, "EssentialsEnabled").toString().replace("false", "opted out").replace("true", "opted in") + " to some of the bot's essential services.",  "footer": {"text": "Visit the Tutorials page for more info."},  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));     
  
};

//Challenges
if (CommandName == "challenges")  {
  
    message.channel.send(Setting.Domain + "/pages/challenges/").catch(error => ErrorBag.add(error));
  
};

//Backgrounds
if (CommandName == "backgrounds")  {
  
    message.channel.send(Setting.Domain + "/pages/backgrounds/").catch(error => ErrorBag.add(error));
  
};

//Leaderboard
if (CommandName == "leaderboard")  {
  
    message.channel.send(Setting.Domain + "/pages/leaderboard/").catch(error => ErrorBag.add(error));
  
};

//Store
if (CommandName == "store")  {
  
    message.channel.send(Setting.Domain + "/pages/store/").catch(error => ErrorBag.add(error));
  
};

//Tutorials
if (CommandName == "tutorials")  {
  
    message.channel.send(Setting.Domain + "/pages/tutorials/").catch(error => ErrorBag.add(error));
  
};

//Commands
if (CommandName == "commands")  {
  
    message.channel.send(Setting.Domain + "/pages/commands/").catch(error => ErrorBag.add(error));
  
};

//Functions
if (CommandName == "functions")  {
  
    message.channel.send(Setting.Domain + "/pages/functions/").catch(error => ErrorBag.add(error));
  
};
  
//Say
if  (CommandName.startsWith("say"))  {

    if  (message.author.id == message.guild.owner.user.id)  {
  
        var CommandArgument = CommandName.split("say")[1];

        if  (CommandArgument.startsWith(" "))  {

            message.channel.send(message.content.split("say")[1]).catch(error => ErrorBag.add(error));

        }
         else if (CommandArgument == "")
        {
         const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    }  else  {
       const embed = {"description": PermissionsMessageError2[Language],  "color": EmbedColor}; 
       message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//EventRewards
if (CommandName == "eventrewards")  {
  
    if  (Setting.event.status)  {
      
        if  (!peeky.userData.get(key, "ParticipatedEvents").includes(Setting.event.name))  {
      
            peeky.userData.observe(key, "ParticipatedEvents").push(Setting.event.name);
          
            //Setting
            var Badge = Setting.event.badge;
            var Background = Setting.event.background;
            var Chests = Setting.event.chests;
            var Gredit = Setting.event.gredit;
            var Exp = Setting.event.exp;
          
            if  (Badge)  {
                InfoMessages.push("•" + " The **" + Badge + "** badge.");
                peeky.userData.set(key, true, Badge + "Badge");
            };
          
            if  (Background > 0)  {
                InfoMessages.push("•" + " The **" + function_GetBackgroundInfo(Background, ["name", "id"]) + "** background.");
                peeky.userData.observe(key, "Inventory").push(Background);
            };
          
            if  (Chests > 0)  {
                InfoMessages.push("•" + " " + Chests + " Chests.");
                peeky.userData.math(key, "+", Chests, "Chests");
            };
          
            if  (Gredit > 0)  {
                InfoMessages.push("•" + " " + Gredit + " Gredit.");
                peeky.userData.math(key, "+", Gredit, "Gredit");
            };
          
            if  (Exp > 0)  {
                InfoMessages.push("•" + " " + Exp + " Exp.");
                peeky.userData.math(key, "+", Exp, "Exp");
            };

            const embed = {"description": InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));          
          
        };
      
    };
  
};

//Upgrade
if (CommandName.startsWith("upgrade"))  {

    const PeekySupportServer = peeky.guilds.cache.get(SupportServer);
    const TheUserWithRole    = PeekySupportServer.members.cache.get(message.author.id);

    if  (PeekySupportServer.members.cache.has(message.author.id))  {

    //Server Upgrade
    if  (TheUserWithRole.roles.cache.has(ServerUpgradeRole) && peeky.serverData.get(keySF, "server_upgraded") == false)  {
        TheUserWithRole.roles.remove(ServerUpgradeRole).catch(error => {ErrorBag.add(error); Failed = true});

        if  (Failed == false)  {
            
            peeky.serverData.set(keySF, true, "server_upgraded");
            peeky.userData.math(key, "+", 1, "UpgradedServers");

            if  (!peeky.userData.get(key, "UpgraderBadge"))  {
                peeky.userData.set(key, true, "UpgraderBadge");
                InfoMessages.push(InfoMessage1[Language]);
            };
          
            var TranslatedMessages = [SuccessIcon + " This server is now upgraded!", SuccessIcon + " Tento server je nyní vylepšen!", SuccessIcon + " Tento server je teraz vylepšený!", SuccessIcon + " ¡Este servidor está ahora actualizado!", SuccessIcon + " Bu sunucu şimdi yükseltildi.", SuccessIcon + " Этот сервер теперь обновлен!", SuccessIcon + " このサーバーはアップグレードされました。"];
            var embed = {"description": TranslatedMessages[Language] + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            var embed = {"description": InfoIcon + " **" + function_RemoveFormatting(message.member.displayName, "other", true) + "** has upgraded **" + function_RemoveFormatting(message.guild.owner.user.username, "other", true) + "**'s server.",  "color": EmbedColor}; 
            peeky.channels.cache.get(MainChatChannel).send({ embed }).catch(error => ErrorBag.add(error));
            
        };
    }
     else 
    {
      var TranslatedMessages = [ErrorIcon + " You cannot upgrade this server.", ErrorIcon + " Tento server vylepšit nemůžete.", ErrorIcon + " Nemôžeš vylepšiť tento server.", ErrorIcon + " No puedes actualizar este servidor.", ErrorIcon + " Bu sunucuyu yükseltemezsiniz.", ErrorIcon + " Вы не можете обновить этот сервер.", ErrorIcon + " このサーバーをアップグレードできません。"];
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
                    var TranslatedMessages = [SuccessIcon + " The server's invite code has been set to **X001**.", SuccessIcon + " Pozvánka tohoto server byla nastavea na **X001**.", SuccessIcon + " Kód pozvania pre tento server bol nastavený na **X001**.", SuccessIcon + " El código de invitación del servidor se ha fijado en **X001**.", SuccessIcon + " Sunucunun davet kodu **X001** olarak ayarlandı.", SuccessIcon + " Код приглашения сервера установлен на **X001**.", SuccessIcon + " サーバーの招待コードが **X001** に設定されています。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", Invites[0].code),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                } else {
                    var TranslatedMessages = [ErrorIcon + " I could not find any server invites in this channel.", ErrorIcon + " V tomto kanále jsem nenašel žádné pozvánky.", ErrorIcon + " Nemohol som nájsť žiadne pozvánky pre tento channel.", ErrorIcon + " No pude encontrar invitaciones de servidor en este canal.", ErrorIcon + " Bu kanalda hiçbir sunucu davetiyesi bulamadım.", ErrorIcon + " Я не смог найти никаких серверных приглашений в этом канале.", ErrorIcon + " このチャネルにサーバー招待が見つかりません。"];
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
         const embed = {"description": PermissionsMessageError2[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else
    {
     const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Ticket
/*if  (CommandName.startsWith("ticket"))  {
  
    if  (peeky.serverData.get(keySF, "ticket_system_bonus_channels").includes(message.channel.id))  {
  
        var CommandArgument = CommandName.split("ticket")[1];
        var CommandArray = CommandName.split(" ");

        if  (CommandArgument.startsWith(" "))  {

            if  (message.channel.permissionsFor(message.guild.me).has("MANAGE_CHANNELS"))  {
            
                if  (CommandArray[1] == "rename" && CommandArray[2])  {
                    await message.channel.setName(function_RemoveFormatting(CommandArray.join(" ").replace("ticket rename ", ""), "channel", true)).catch(error => {ErrorBag.add(error)});

                    var TranslatedMessages = [SuccessIcon + " The ticket has been renamed to **#X001**.", SuccessIcon + " Lístek byl přejmenován na **#X001**.", SuccessIcon + " Lístok bol premenovaný na**#X001**.", SuccessIcon + " El ticket ha sido renombrado a **#X001**.", SuccessIcon + " Yardım çağrısı **#X001** olarak yeniden adlandırıldı.", SuccessIcon + " Билет был переименован в **#X001**.", SuccessIcon + " チケットの名前が**#X001**に変更されました。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", message.channel.name),  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

                if  (CommandArray[1] == "cancel")  {
                    message.channel.delete().catch(error => {ErrorBag.add(error)});
                };
              
            }
             else 
            {
             const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
             message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }
         else if (CommandArgument == "")
        {
         const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
        
    };

};*/
      
//Overview
if (CommandName == "overview")  {
  
    if  (!CommandCooldown.has("overview" + message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {

            CommandCooldown.add("overview" + message.guild.id);
            setTimeout(() => {CommandCooldown.delete("overview" + message.guild.id)}, 10000);

            const embed = {"description": "1️⃣ **Server Settings** \n " + Hollow + " View the server's bot settings." + "\n\n" + "**2️⃣ Functions `[1/3]`** \n " + Hollow + " View the 1st page of functions." + "\n\n" + "**3️⃣ Functions `[2/3]`** \n " + Hollow + " View the 2nd page of functions." + "\n\n" + "**4️⃣ Functions `[3/3]`** \n " + Hollow + "  View the 3rd page of functions.",  "color": EmbedColor};
            await message.channel.send("**Overview**", { embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                await m.react("1️⃣");
                await m.react("2️⃣");
                await m.react("3️⃣");
                await m.react("4️⃣");

                peeky.userData.set(key, m.id, "OverviewID");

            }).catch(error => {ErrorBag.add(error)});
          
        };

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
      
//Music
if (CommandName == "music")  {
  
    if  (!CommandCooldown.has("music" + message.guild.id))  {
      
        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {

            CommandCooldown.add("music" + message.guild.id);
            setTimeout(() => {CommandCooldown.delete("music" + message.guild.id)}, 10000);

            var ModeDescription = "Removes songs from the queue when they stop playing.";
            var Mode = peeky.serverData.get(keySF, "MusicMode");
            
            if  (Mode == "Looping")  {
                ModeDescription = "Moves songs to the end of the queue when they end.";
            } else
            if  (Mode == "Automated")  {
                ModeDescription = "Automatically plays another song if one finished playing.";
            };

            const embed = new Discord.MessageEmbed({"description": "🔁 **Music Mode `" + peeky.serverData.get(keySF, "MusicMode") +"`** \n " + Hollow + " " + ModeDescription + "\n\n" + "**🔀 Randomized Playlists " + peeky.serverData.get(keySF, "RandomPlaylists").toString().replace("true", EnabledIcon).replace("false", DisabledIcon) + "** \n " + Hollow + " Whenever playlists get shuffled when added to the queue.",  "color": EmbedColor});
            await message.channel.send("**Music**", { embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                await m.react("🔁").catch(error => {ErrorBag.add(error)});
                await m.react("🔀").catch(error => {ErrorBag.add(error)});

                peeky.userData.set(key, m.id, "MusicMenuID");

            }).catch(error => {ErrorBag.add(error)});
          
        };

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
      
//Languages
if  (CommandName == "languages")  {
      
    if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS'))  {
  
        if  (!CommandCooldown.has("languages" + message.guild.id))  {
          
            if  (message.member.permissions.has("MANAGE_GUILD") || message.author.id == OwnerId)  {

                CommandCooldown.add("languages" + message.guild.id);
                setTimeout(() => {CommandCooldown.delete("languages" + message.guild.id)}, 10000);
              
                var English = "🇬🇧";
                var Czech = "🇨🇿";
                var Slovak = "🇸🇰";
                var Dutch = "🇳🇱";
                var French = "🇫🇷";
                var Spanish = "🇪🇸";
                var Turk = "🇹🇷";
                var German = "🇩🇪";
                var Russian = "🇷🇺";
                var Japanese = "🇯🇵";
              
                if  (Math.round(Math.random() * 20) == 0)  {
                    French = "🥖";
                };

                const embed = {
                  "description": English + " English `Vojtěch Jílovec`"
                                + "\n\n" +
                                Czech +" Čeština `Vojtěch Jílovec`"
                                + "\n\n" +
                                Slovak +" Slovenčina `Adriane Jack`"
                                + "\n\n" +
                                Spanish + " Español `TheSongList`"
                                + "\n\n" + 
                                Turk + " Türkçe `Bae`"
                                + "\n\n" + 
                                Russian + " Русский `TheSongList`"
                                + "\n\n" + 
                                Japanese + " Japanese `TheSongList`",
                  "color": EmbedColor
                }; 
              
                await message.channel.send({ embed }).catch(error => {ErrorBag.add(error);}).then(async m => {

                      await m.react(English).catch(error => {ErrorBag.add(error)});
                      await m.react(Czech).catch(error => {ErrorBag.add(error)});
                      await m.react(Slovak).catch(error => {ErrorBag.add(error)});
                      await m.react(Spanish).catch(error => {ErrorBag.add(error)});
                      await m.react(Turk).catch(error => {ErrorBag.add(error)});
                      await m.react(Russian).catch(error => {ErrorBag.add(error)});
                      await m.react(Japanese).catch(error => {ErrorBag.add(error)});

                      peeky.userData.set(key, m.id, "LanguageID");

                }).catch(error => {ErrorBag.add(error)});

            } else {
              const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
         const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
          
    };

};

//Toggle
if (CommandName.startsWith("toggle"))  {
  
    var FunctioName = CommandName.split("toggle")[1];
  
if  (FunctioName.startsWith(" "))  {
  
    FunctioName = FunctioName.replace(" ", "");
  
if  (message.member.permissions.has("MANAGE_GUILD"))  {  // || message.author.id == OwnerId
    
if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {

    var ManageChannels = false;
    var ManageRoles = false;
    var TranslatedMessages = [SuccessIcon + " The **X001** function has been **X002**.", SuccessIcon + " Funkce **X001** je nyní **X002**.", SuccessIcon + " **X001** funkcia bola **X002**.", SuccessIcon + " La función **X001** ha sido **X002**.", SuccessIcon + " **X001** fonksiyonu artık **X002**.", SuccessIcon + " Функция **X001** была **X002**.", SuccessIcon + " **X001**関数は**X002**です。チャネル"];
  
    if  (message.guild.me.permissions.has("MANAGE_CHANNELS"))  {
        ManageChannels = true;  
      
        var TranslatedBonuses = [InfoIcon + " Created a channel called **X001** for the **X002** function.", InfoIcon + " Vytvořil jsem kanál s názvem **X001** pro funkci **X002**.", InfoIcon + " Vytvoril som channel pod menom **#X001** pre **X002** funkciu.", InfoIcon + " Fue creado un canal llamado **#X001** para la función **X002**.", InfoIcon + " **X002** fonksiyonu için **#X001** adlı bir kanal oluşturuldu.", InfoIcon + " Создал канал с именем **#X001** для функции **X002**.", InfoIcon + " **X002**関数に**#X001**という名前のチャネルを作成しました。"];
        var ChannelCreation = TranslatedBonuses[Language]
    };
  
    if  (message.guild.me.permissions.has("MANAGE_ROLES"))  {
        ManageRoles = true;
      
        var TranslatedBonuses = [InfoIcon + " Created a role called **@X001** for the **X002** function.", InfoIcon + " Vytvořil jsem roli s názvem **@X001** pro funkci **X002**.", InfoIcon + " Vytvoril som rolu pod menom **#X001** pre **X002** funkciu.", InfoIcon + " Fue creado un papel llamado **X001** para la función **@X002**.", InfoIcon + " **@X002** işlevi için **X001** adlı bir rol oluşturdu.", InfoIcon + " Создал роль под названием **X001** для функции **@X002**.", InfoIcon + " **@X002**関数に**X001**という名前のロールを作成しました。"];
        var RoleCreation = TranslatedBonuses[Language];
    };
  
    if  (!peeky.userData.get(key, "FunctionalBadge"))  {
        peeky.userData.set(key, true, "FunctionalBadge");
        InfoMessages.push(InfoMessage1[Language]);
    };
      
//Toggle Automatic Reactions
if  (FunctioName == "automatic reactions")  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "automatic_reactions_bonus"), "automatic_reactions_bonus");
    var StatusString = peeky.serverData.get(keySF, "automatic_reactions_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Automatic Reactions").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Welcome Messages
if  (FunctioName.startsWith("welcome messages"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "welcome_messages_bonus_setting");
    var channel = guild.channels.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "welcome_messages_bonus"), "welcome_messages_bonus");
    var StatusString = peeky.serverData.get(keySF, "welcome_messages_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
    
    //Channel Creating
    if (!channel)  {
    
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

            ChannelCooldown.add(message.guild.id);
            setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

            await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
                {id: PeekyId, allow: ['SEND_MESSAGES']},
                {id: message.guild.id, deny: ['SEND_MESSAGES']}
            ], reason: "Channel created by @" + message.author.tag + " through a function." })

            InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Welcome Messages"));

            };
          
        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Welcome Messages").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Classification Wall
if  (FunctioName.startsWith("classification wall"))  {
    
    const channel = message.guild.channels.cache.find(channel => channel.name == peeky.serverData.get(keySF, "donor_wall_bonus_channel"));
    const name = peeky.serverData.get(keySF, "donor_wall_bonus_channel");

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "donor_wall_bonus"), "donor_wall_bonus");
    var StatusString = peeky.serverData.get(keySF, "donor_wall_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

            ChannelCooldown.add(message.guild.id);
            setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

            await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
                {id: PeekyId, allow: ['SEND_MESSAGES', 'MANAGE_MESSAGES']},
                {id: message.guild.id, deny: ['SEND_MESSAGES', 'MANAGE_MESSAGES']}
            ], reason: "Channel created by @" + message.author.tag + " through a function." })

            .then(async channel =>  {
              
                setTimeout(async () => {
                    await channel.send(/*"**" + message.guild.name + "'s " + peeky.serverData.get(keySF, "donor_wall_bonus_setting") + "s:**\n\nP*/"Preparing... Come back in a few minutes!").catch(error => {ErrorBag.add(error);}).then(m => peeky.serverData.set(keySF, m.id, "donor_wall_bonus_id"));
                }, 10000);
                
            })

            InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Classification Wall"));

            };
          
        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Classification Wall").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Ticket System
if  (FunctioName.startsWith("ticket system"))  {
    
    const name = "tickets";
    const channel = message.guild.channels.cache.find(channel => channel.id == peeky.serverData.get(keySF, "ticket_system_bonus_channel"));
    const category = message.guild.channels.cache.find(c => c.name.includes("Tickets") && c.type == "category");

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "ticket_system_bonus"), "ticket_system_bonus");
    var StatusString = peeky.serverData.get(keySF, "ticket_system_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

                ChannelCooldown.add(message.guild.id);
                setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

                await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
                    {id: PeekyId, allow: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'ADD_REACTIONS']},
                    {id: message.guild.id, deny: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'ADD_REACTIONS']}
                ], reason: "Channel created by @" + message.author.tag + " through a function." })

                .then(channel =>  {
                  
                    peeky.serverData.set(keySF, channel.id, "ticket_system_bonus_channel");
                      
                    setTimeout(async () => {
                      
                        var Header = "";
                        /*if  (message.channel.lastMessage)  {    
                            Header = "**Ticket System**" + "\n";
                        };*/              
                      
                        await channel.send(Header + "Click on the reaction below to create a ticket.").catch(error => ErrorBag.add(error)).then(m => {  m.react("🎟️");  peeky.serverData.set(keySF, m.id, "ticket_system_bonus_id");  }).catch(error => ErrorBag.add(error));
                    
                    }, 10000);
                        
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Ticket System"));

                if  (!category)  {
                    InfoMessages.push(InfoIcon + " Consider creating a category called **Tickets** to sort tickets.");
                };

            };

        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };
      
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Ticket System").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Reaction Roles
if  (FunctioName.startsWith("reaction roles"))  {
    
    const name = "roles";
    const channel = message.guild.channels.cache.find(channel => channel.id == peeky.serverData.get(keySF, "reaction_roles_bonus_channel"));

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "reaction_roles_bonus"), "reaction_roles_bonus");
    var StatusString = peeky.serverData.get(keySF, "reaction_roles_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    //Channel Creating    
    if (!channel)  {
      
        if  (!ChannelCooldown.has(message.guild.id))  {

            if  (ManageChannels == true)  {

                ChannelCooldown.add(message.guild.id);
                setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

                await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
                    {id: PeekyId, allow: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'ADD_REACTIONS']},
                    {id: message.guild.id, deny: ['SEND_MESSAGES', 'MANAGE_MESSAGES', 'ADD_REACTIONS']}
                ], reason: "Channel created by @" + message.author.tag + " through a function." })
                  
                .then(channel =>  {
                  
                    peeky.serverData.set(keySF, channel.id, "reaction_roles_bonus_channel");
                      
                    setTimeout(async () => {
                        channel.send("Preparing... Come back in a few minutes!").catch(error => ErrorBag.add(error)).then(m => {  peeky.serverData.set(keySF, m.id, "reaction_roles_bonus_id");  }).catch(error => ErrorBag.add(error));
                    }, 10000);
                  
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Reaction Roles"));

            };

        } else {
          InfoMessages.push(CooldownMessage2[Language]);
        };

    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Join role
if  (FunctioName.startsWith("join role"))  {
    
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "join_role_bonus_setting");
    var role = guild.roles.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "join_role_bonus"), "join_role_bonus");
    var StatusString = peeky.serverData.get(keySF, "join_role_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
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

                InfoMessages.push(RoleCreation.replace("X001", name).replace("X002", "Join Role"));

            };

        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Join role").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Verification System
if  (FunctioName.startsWith("verification system"))  {
    
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "verification_system_bonus_setting");
    var role = guild.roles.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "verification_system_bonus"), "verification_system_bonus");
    var StatusString = peeky.serverData.get(keySF, "verification_system_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
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

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Verification System").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Role Saver
if  (FunctioName.startsWith("role saver"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "role_saver_bonus"), "role_saver_bonus");
    var StatusString = peeky.serverData.get(keySF, "role_saver_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Images Only
if  (FunctioName.startsWith("images only"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "images_only_bonus"), "images_only_bonus");
    var StatusString = peeky.serverData.get(keySF, "images_only_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Images Only").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Follow Cleaner
if  (FunctioName.startsWith("follow cleaner"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "follow_cleaner_bonus"), "follow_cleaner_bonus");
    var StatusString = peeky.serverData.get(keySF, "follow_cleaner_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Follow Cleaner").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Message Log
if  (FunctioName.startsWith("message log"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "message_log_bonus_setting");
    var channel = guild.channels.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "message_log_bonus"), "message_log_bonus");
    var StatusString = peeky.serverData.get(keySF, "message_log_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
    //Channel Creating    
    if  (!channel)  {

    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
        {id: PeekyId, allow: ['SEND_MESSAGES']},
        {id: message.guild.id, deny: ['SEND_MESSAGES']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Message Log"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Message Log").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
   
//Toggle Stream Announcements
if  (FunctioName.startsWith("stream announcements"))  {
  
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "stream_announcements_bonus_setting");
    var channel = guild.channels.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "stream_announcements_bonus"), "stream_announcements_bonus");
    var StatusString = peeky.serverData.get(keySF, "stream_announcements_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
        {id: PeekyId, allow: ['SEND_MESSAGES']},
        {id: message.guild.id, deny: ['SEND_MESSAGES']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Stream Announcements"));
    
    };

    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
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
    var channel = guild.channels.cache.find(c => c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "member_counter_bonus"), "member_counter_bonus");
    var StatusString = peeky.serverData.get(keySF, "member_counter_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, deny: ['CONNECT']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "member_counter_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Member Counter"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Member Counter").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Classification Counter
if  (FunctioName.startsWith("classification counter"))  {
  
    const guild = message.guild;
    const name = peeky.serverData.get(keySF, "classification_counter_bonus_setting") + ": ...";
    var id = peeky.serverData.get(keySF, "classification_counter_bonus_id");
    var channel = guild.channels.cache.find(c => c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "classification_counter_bonus"), "classification_counter_bonus");
    var StatusString = peeky.serverData.get(keySF, "classification_counter_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, deny: ['CONNECT']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "classification_counter_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Classification Counter"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Classification Counter").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Server Time
if  (FunctioName.startsWith("server time"))  {
  
    const guild = message.guild;
    const name = "Server Time" + ": ...";
    var id = peeky.serverData.get(keySF, "server_timezone_bonus_id");
    var channel = guild.channels.cache.find(c=> c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "server_timezone_bonus"), "server_timezone_bonus");
    var StatusString = peeky.serverData.get(keySF, "server_timezone_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, deny: ['CONNECT']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "server_timezone_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Server Time"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Server Time").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Auto Channels
if  (FunctioName.startsWith("auto channels"))  {
  
    const guild = message.guild;
    var id = peeky.serverData.get(keySF, "auto_channels_bonus_id");
    var name = "Join to create a channel.";
    var channel = guild.channels.cache.find(c=> c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "auto_channels_bonus"), "auto_channels_bonus");
    var StatusString = peeky.serverData.get(keySF, "auto_channels_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, allow: ['CONNECT'], deny: ['SPEAK']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })
    
    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "auto_channels_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Auto Channels"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Auto Channels").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Toggle Reddit Posts
if  (FunctioName.startsWith("reddit posts"))  {
  
    const guild = message.guild;
    const name = peeky.serverData.get(keySF, "reddit_posts_bonus_setting");
    var channel = guild.channels.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "reddit_posts_bonus"), "reddit_posts_bonus");
    var StatusString = peeky.serverData.get(keySF, "reddit_posts_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id)) {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'text', permissionOverwrites: [
        {id: PeekyId, allow: ['SEND_MESSAGES']},
        {id: message.guild.id, deny: ['SEND_MESSAGES']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    InfoMessages.push(ChannelCreation.replace("X001", "#" + name).replace("X002", "Reddit Posts"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
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
    var channel = guild.channels.cache.find(c=> c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "server_age_bonus"), "server_age_bonus");
    var StatusString = peeky.serverData.get(keySF, "server_age_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id))  {
      
    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, deny: ['CONNECT']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "server_age_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Server Age"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
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
    var channel = guild.channels.cache.find(c=> c.id == id);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "event_countdown_bonus"), "event_countdown_bonus");
    var StatusString = peeky.serverData.get(keySF, "event_countdown_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    //Channel Creating    
    if (!channel) {

    if  (!ChannelCooldown.has(message.guild.id))  {

    if  (ManageChannels == true)  {

    ChannelCooldown.add(message.guild.id);
    setTimeout(() => {ChannelCooldown.delete(message.guild.id)}, ChannelCooldownMS);

    await message.guild.channels.create(name, { type: 'voice', permissionOverwrites: [
        {id: PeekyId, allow: ['CONNECT']},
        {id: message.guild.id, deny: ['CONNECT']}
    ], reason: "Channel created by @" + message.author.tag + " through a function." })

    .then(channel =>  {
        peeky.serverData.set(keySF, channel.id, "event_countdown_bonus_id");
    }).catch(error => ErrorBag.add(error));

    InfoMessages.push(ChannelCreation.replace("X001", name).replace("X002", "Event Countdown"));
    
    };
    
    } else {
      InfoMessages.push(CooldownMessage2[Language]);
    };
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Event Countdown").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Game Roles
/*if  (FunctioName.startsWith("game roles"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "game_roles_bonus"), "game_roles_bonus");
    var StatusString = peeky.serverData.get(keySF, "game_roles_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else*/
  
//Toggle Weekend Channels
if  (FunctioName.startsWith("weekend channels"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "weekend_channels_bonus"), "weekend_channels_bonus");
    var StatusString = peeky.serverData.get(keySF, "weekend_channels_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Weekend Channels").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Clear Nicknames
if  (FunctioName.startsWith("clear nicknames"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "clear_nicknames_bonus"), "clear_nicknames_bonus");
    var StatusString = peeky.serverData.get(keySF, "clear_nicknames_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Clear Nicknames").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
    
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Suspicion Alert
if  (FunctioName.startsWith("suspicion alert"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "suspicion_alert_bonus"), "suspicion_alert_bonus");
    var StatusString = peeky.serverData.get(keySF, "suspicion_alert_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Suspicion Alert").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Vote Kick
if  (FunctioName.startsWith("vote kick"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "vote_kick_bonus"), "vote_kick_bonus");
    var StatusString = peeky.serverData.get(keySF, "vote_kick_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Vote Kick").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Flood Protection
if  (FunctioName.startsWith("flood protection"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "flood_protection_bonus"), "flood_protection_bonus");
    var StatusString = peeky.serverData.get(keySF, "flood_protection_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Flood Protection").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Nickname Saver
if  (FunctioName.startsWith("nickname saver"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "nickname_saver_bonus"), "nickname_saver_bonus");
    var StatusString = peeky.serverData.get(keySF, "nickname_saver_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Nickname Saver").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Streamer Role
if  (FunctioName.startsWith("streamer role"))  {
        
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "streamer_role_bonus_setting");
    var role = guild.roles.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "streamer_role_bonus"), "streamer_role_bonus");
    var StatusString = peeky.serverData.get(keySF, "streamer_role_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
    if (!role) {

        if  (!RoleCooldown.has(message.guild.id))  {

            if  (ManageRoles == true)  {

                RoleCooldown.add(message.guild.id);
                setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                message.guild.roles.create({
                data: {
                  name: name,
                  color: Setting.Blurple
                }
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(RoleCreation.replace("X001", name).replace("X002", "Streamer Role"));

            };

        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Streamer Role").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Banned Words
if  (FunctioName.startsWith("banned words"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "banned_words_bonus"), "banned_words_bonus");
    var StatusString = peeky.serverData.get(keySF, "banned_words_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
  
//Toggle Veteran Role
if  (FunctioName.startsWith("veteran role"))  {
        
    const guild = message.guild;
    var name = peeky.serverData.get(keySF, "veteran_role_bonus_setting");
    var role = guild.roles.cache.find(c=> c.name == name);

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "veteran_role_bonus"), "veteran_role_bonus");
    var StatusString = peeky.serverData.get(keySF, "veteran_role_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
      
    if (!role) {

        if  (!RoleCooldown.has(message.guild.id))  {

            if  (ManageRoles == true)  {

                RoleCooldown.add(message.guild.id);
                setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                message.guild.roles.create({
                data: {
                  name: name,
                  color: Setting.Blurple
                }
                }).catch(error => ErrorBag.add(error));

                InfoMessages.push(RoleCreation.replace("X001", name).replace("X002", "Veteran Role"));

            };

        } else {
          InfoMessages.push(CooldownMessage3[Language]);
        };
      
    };
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Veteran Role").replace("X002", StatusString) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};

    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else

//Toggle Spoiler Lock
if  (FunctioName.startsWith("spoiler lock"))  {

    peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "spoiler_lock_bonus"), "spoiler_lock_bonus");
    var StatusString = peeky.serverData.get(keySF, "spoiler_lock_bonus").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language]);
  
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
  
if  (message.member.permissions.has("MANAGE_GUILD"))  {  // || message.author.id == OwnerId
    
if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {
  
    var TranslatedMessages = [SuccessIcon + " The setting for the **X001** function is now **X002**.", SuccessIcon + " Nastavení pro funkci **X001** je nyní **X002**.", SuccessIcon + " Nastavenie pre **X001** funkciu je teraz **X002*.", SuccessIcon + " El ajuste de la función **X001** es ahora **X002**.", SuccessIcon + " **X001** fonksiyonu **X002** olarak ayarlandı.", SuccessIcon + " Настройка для функции **X001** теперь составляет **X002**.", SuccessIcon + " **X001**関数の設定は**X002**になりました。"];
    var TranslatedFullSetting = [ErrorIcon + " The setting for the **X001** function is full.", ErrorIcon + " Nastavení pro funcki **X001** je plné.", ErrorIcon + " Nastavenie pre **X001** funkciu je plné.", ErrorIcon + " El ajuste de la función **X001** está lleno.", ErrorIcon + " **X001** fonksiyonu için ayar dolu.", ErrorIcon + " Настройка для функции **X001** заполнена.", ErrorIcon + " **X001**関数の設定がいっぱいです。"];
  
    if  (!peeky.userData.get(key, "FunctionalBadge"))  {
        peeky.userData.set(key, true, "FunctionalBadge");
        InfoMessages.push(InfoMessage1[Language]);
    };
      
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
      
//Set Veteran Role
if  (FunctioName.startsWith("veteran role "))  {

    var ChannelName = CommandName.split("veteran role ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(ChannelName, "role"), "veteran_role_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Veteran Role").replace("X002", "@" + peeky.serverData.get(keySF, "veteran_role_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Ticket System
if  (FunctioName.startsWith("ticket system "))  {

    var RoleName = CommandName.split("ticket system ")[1];
    peeky.serverData.set(keySF, function_RemoveFormatting(RoleName, "role"), "ticket_system_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Ticket System").replace("X002", "@" + peeky.serverData.get(keySF, "ticket_system_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
      
//Set Member Counter
if  (FunctioName.startsWith("member counter "))  {

    var CounterName = CommandName.split("member counter ")[1];
      
    peeky.serverData.set(keySF, function_RemoveFormatting(CounterName, "other"), "member_counter_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Member Counter").replace("X002", "@" + peeky.serverData.get(keySF, "member_counter_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
      
//Set Classification Counter
if  (FunctioName.startsWith("classification counter "))  {

    var CounterName = CommandName.split("classification counter ")[1];
      
    peeky.serverData.set(keySF, function_RemoveFormatting(CounterName, "other"), "classification_counter_bonus_setting", true);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Classification Counter").replace("X002", "@" + peeky.serverData.get(keySF, "classification_counter_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
      
//Set Event Countdown
if  (FunctioName.startsWith("event countdown "))  {

    var Timestamp = CommandName.split("event countdown ")[1];
    Timestamp = Number(Timestamp);

    if  (!isNaN(Timestamp) && Timestamp > Date.now())  {

        peeky.serverData.set(keySF, Timestamp, "event_countdown_bonus_setting");

        const embed = {"description": TranslatedMessages[Language].replace("X001", "Event Countdown").replace("X002", function_DateFormat(peeky.serverData.get(keySF, "event_countdown_bonus_setting"), "Date", 0)),  "color": EmbedColor};
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
      const embed = {"description": ErrorIcon + " The provided amount must be between 1 and 10.",  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

}
  
else

//Set Auto Channels
if  (FunctioName.startsWith("auto channels "))  {

    var NewSetting = CommandName.split("auto channels ")[1];
  
    if  (NewSetting.toLowerCase() == "delete")  {
        peeky.serverData.set(keySF, "Delete empty channels", "auto_channels_bonus_setting");
    } else
    if  (NewSetting.toLowerCase() == "keep")  {
    peeky.serverData.set(keySF, "Keep empty channels", "auto_channels_bonus_setting");
    };

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Auto Channels").replace("X002", peeky.serverData.get(keySF, "auto_channels_bonus_setting")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Banned Words
if  (FunctioName.startsWith("banned words "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("banned words ")[1].toLowerCase(), "other", true);
    peeky.serverData.observe(keySF, "banned_words_bonus_setting").push(ReceivedArray);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "banned_words_bonus_setting"), Setting.BannedWordsLimit, "**, **")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Weekend Channels
if  (FunctioName.startsWith("weekend channels "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("weekend channels ")[1].toLowerCase(), "channel", true);
    peeky.serverData.observe(keySF, "weekend_channels_bonus_setting").push(ReceivedArray);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Weekend Channels").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "weekend_channels_bonus_setting"), Setting.WeekendChannelsLimit, "**, **")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Images Only
if  (FunctioName.startsWith("images only "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("images only ")[1].toLowerCase(), "channel", true);
    peeky.serverData.observe(keySF, "images_only_bonus_setting").push(ReceivedArray);

    const embed = {"description": TranslatedMessages[Language].replace("X001", "Images Only").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "images_only_bonus_setting"), Setting.ImagesOnlyLimit, "**, **")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
else
 
//Set Reaction Roles
if  (FunctioName.startsWith("reaction roles "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("reaction roles ")[1], "other", true);
    peeky.serverData.observe(keySF, "reaction_roles_bonus_setting").push(ReceivedArray);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "reaction_roles_bonus_setting"), Setting.ReactionRolesLimit, "**, **")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}
  
/*else

//Set Game Roles
if  (FunctioName.startsWith("game roles "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("game roles ")[1], "other", true);
    peeky.serverData.observe(keySF, "game_roles_bonus_setting").push(ReceivedArray);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "game_roles_bonus_setting"), Setting.GameRolesLimit, "**, **")),  "color": EmbedColor};
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}*/
  
else
 
//Set Role Saver
if  (FunctioName.startsWith("role saver "))  {

    var ReceivedArray = function_RemoveFormatting(CommandName.split("role saver ")[1], "other", true);
    peeky.serverData.observe(keySF, "role_saver_bonus_setting").push(ReceivedArray);
  
    const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver").replace("X002", function_ArrayItems(peeky.serverData.get(keySF, "role_saver_bonus_setting"), Setting.RoleSaverLimit, "**, **")),  "color": EmbedColor};
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

//Clear
if  (CommandName.startsWith("clear"))  {
  
    var FunctioName = CommandName.split("clear")[1];
  
if  (FunctioName.startsWith(" "))  {
  
    FunctioName = FunctioName.replace(" ", "");
  
if  (message.member.permissions.has("MANAGE_GUILD"))  {  // || message.author.id == OwnerId

if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {

    var TranslatedMessages = [SuccessIcon + " Cleared the setting for the **X001** function.", SuccessIcon + " Nastavení pro funkci **X001** bylo vyčištěno.", SuccessIcon + " Vymazal som nastavenie pre **X001** funkciu.", SuccessIcon + " Despejó la configuración de la función **X001**.", SuccessIcon + " **X001** adlı fonksiyonun ayarı sıfırlandı.", SuccessIcon + " Очистили настройку для функции **X001**.", SuccessIcon + " **X001**関数の設定をクリアしました。"];

//Clear Banned Words
if  (FunctioName.startsWith("banned words"))  {
      
     peeky.serverData.set(keySF, [], "banned_words_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Banned Words"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
 
//Clear Images Only
if  (FunctioName.startsWith("images only"))  {
      
     peeky.serverData.set(keySF, [], "images_only_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Images Only"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
 
//Clear Weekend Channels
if  (FunctioName.startsWith("weekend channels"))  {
      
     peeky.serverData.set(keySF, [], "weekend_channels_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Weekend Channels"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

else
 
//Clear Reaction Roles
if  (FunctioName.startsWith("reaction roles"))  {
      
     peeky.serverData.set(keySF, [], "reaction_roles_bonus_setting");

     const embed = {"description": TranslatedMessages[Language].replace("X001", "Reaction Roles"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}

/*else
  
//Clear Game Roles
if  (FunctioName.startsWith("game roles"))  {
      
     peeky.serverData.set(keySF, [], "game_roles_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Game Roles"),  "color": EmbedColor};
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));

}*/

else
 
//Clear Role Saver
if  (FunctioName.startsWith("role saver"))  {
      
     peeky.serverData.set(keySF, [], "role_saver_bonus_setting");
  
     const embed = {"description": TranslatedMessages[Language].replace("X001", "Role Saver"),  "color": EmbedColor};
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
  
if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(PremiumRole))  {  UpdatedAmount = 0;  };

    for(var i = NewLinesCount = 0; i<str.length; NewLinesCount+=+(MaxLines===str[i++]));
        
    if  (peeky.userData.get(key, "Gredit") >= UpdatedAmount)  {

        if  (NewLinesCount < 2)  {

            var TranslatedMessages = [SuccessIcon + " You have bought a new description for **X001" + " " + GreditIcon + "**.", SuccessIcon + " Koupil jste si nový popisek za **X001" + " " + GreditIcon + "**.", SuccessIcon + " Kúpil si nový popisok pre **X001" + " " + GreditIcon + "**.", SuccessIcon + " Usted ha comprado una nueva descripción para **X001" + " " + GreditIcon + "**.", SuccessIcon + " **X001" + " " + GreditIcon + "** için yeni bir açıklama aldınız.", SuccessIcon + " Вы купили новое описание для **X001" + " " + GreditIcon + "**.", SuccessIcon + " **X001" + " " + GreditIcon + "**の新しい説明を購入しました。"];
            const embed = {"description": TranslatedMessages[Language].replace("X001", UpdatedAmount.toLocaleString('en')),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.userData.set(key, CommandArgument, "Description");
            peeky.userData.math(key, "-", UpdatedAmount, "Gredit");

        }
         else 
        {
          var TranslatedMessages = [ErrorIcon + " The new description is too large.",  ErrorIcon + " Nový popisek je příliš dlouhý.",  ErrorIcon + " Nový popisok je prílíš veľký.",  ErrorIcon + " La nueva descripción es demasiada larga.",  ErrorIcon + " Yeni açıklama çok büyük.",  ErrorIcon + " Новое описание слишком большое.",  ErrorIcon + " 新しい説明が大きすぎます。"];
          const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
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

                if  (peeky.userData.get(key, "Gredit") >= Banners[i - 1][Banner.Price])  {

                    var i = Number(i);

                    if  (isNaN(peeky.userData.get(key, "Background")) == true)  {
                        var CustomBackgroundAmount = 1;
                    } else {  var CustomBackgroundAmount = 0;  };

                    if  (!peeky.userData.get(key, "HorderBadge") && (peeky.userData.get(key, "Inventory").length) >= 10)  {
                        InfoMessages.push(InfoMessage1[Language]);
                        peeky.userData.set(key, true, "HorderBadge");
                    };

                    var RevenueID = Banners[i - 1][Banner.RevenueID];
                    if  (RevenueID && peeky.userData.has(RevenueID) && message.author.id !== RevenueID && peeky.users.cache.has(RevenueID) && Banners[i - 1][Banner.Price] !== Exclusive)  {
                        peeky.userData.math(RevenueID, "-", Math.floor((Banners[i - 1][Banner.Price] / Setting.SellMultiplier)), "Gredit");
                        InfoMessages.push(InfoIcon + " Your purchase has generated **" + Math.floor((Banners[i - 1][Banner.Price] / Setting.SellMultiplier)).toLocaleString('en') + " " + GreditIcon + "** of revenue for **" + function_RemoveFormatting(peeky.users.cache.get(RevenueID).username, "other", true) + "**.");
                    };
                  
                    if  (peeky.peekyData.get("dailychallenge", "data")[0] == "buy_background" && function_ChallengeRewards(key, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
                        InfoMessages.push(InfoMessage4[Language]);
                    };

                    peeky.userData.math(key, "-", Banners[i - 1][Banner.Price], "Gredit");
                    peeky.userData.observe(key, "Inventory").push(i);

                    var TranslatedMessages = [SuccessIcon + " You have bought the **X001** background for **X002" + " " + GreditIcon + "**.", SuccessIcon + " Koupil jste si pozadí **X001** za **X002" + " " + GreditIcon + "**.", SuccessIcon + " Kupil si **X001** pozadie pre **X002" + " " + GreditIcon + "**.", SuccessIcon + " Usted ha comprado el fondo **X001** para **X002" + " " + GreditIcon + "**.", SuccessIcon + " **X002" + " " + GreditIcon + "** için **X001** arka planını satın aldınız.", SuccessIcon + " Вы купили фон **X001** за **X002" + " " + GreditIcon + "**.", SuccessIcon + " **X002" + " " + GreditIcon + "**の**X001**背景を購入しました。"];
                    var embed = {"description": TranslatedMessages[Language].replace("X001", function_GetBackgroundInfo(i, ["name"])).replace("X002", function_GetBackgroundInfo(i, ["price"])) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                    break;

                } else {
                  const embed = {"description": ErrorMessage1[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                  break;
                };

            } else {
              var TranslatedMessages = [ErrorIcon + " You cannot buy the default and exclusive backgrounds.", ErrorIcon + " Nemůžete si koupit základní a exlusivní pozadí.", ErrorIcon + " Nemôžeš kúpiť štandardné a exkluzívne pozadia.", ErrorIcon + " Usted no puede comprar los fondos predeterminados y exclusivos.", ErrorIcon + " Varsayılan ve özel arka planları satın alamazsınız.", ErrorIcon + " Вы не можете купить стандартный и эксклюзивный фон.", ErrorIcon + " デフォルトの背景と排他的背景は購入できません。"];
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
  
    if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(PremiumRole))  {
  
        if  (peeky.userData.get(key, "Gredit") > Setting.CustomBackgroundPrice)  {

            if  (message.attachments.size > 0)  {
              
                var Thumbnail = message.attachments.array()[0].url;

                if  (function_DetectLink(Thumbnail))  {

                    if  (!peeky.userData.get(key, "PainterBadge"))  {

                        InfoMessages.push(InfoMessage1[Language]);
                        peeky.userData.set(key, true, "PainterBadge");

                    };

                    peeky.userData.math(key, "-", Setting.CustomBackgroundPrice, "Gredit");
                    peeky.userData.set(key, Thumbnail, "Background");
                    var TranslatedMessages = [SuccessIcon + " You have set your custom background for **X001 " + GreditIcon + "**.", SuccessIcon + " Nastavil jste si vlastní pozadí za **X001 " + GreditIcon + "**.", SuccessIcon + " Nastavil si **Vlastné pozadie** pre **X001 " + GreditIcon + "**.", SuccessIcon + " Usted ha establecido un **Fondo personalizado** para **X001 " + GreditIcon + "**.", SuccessIcon + " **X001 " + GreditIcon + "** için bir **Özel Arkaplan** ayarladınız.", SuccessIcon + " Вы установили пользовательский фон для **X001 " + GreditIcon + "**.", SuccessIcon + " **X001 " + GreditIcon + "**のカスタム背景を設定しました。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", Setting.CustomBackgroundPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                } else {
                  var TranslatedMessages = [ErrorIcon + " Failed to set your custom background.", ErrorIcon + " Nepodařilo se nastavit vaše vlastní pozadí.", ErrorIcon + " Nepodarilo s nastavit vlastné pozadie.", ErrorIcon + " Fallo de establecer su fondo personalizado.", ErrorIcon + " Özel arka planınız ayarlanamadı.", ErrorIcon + " Вы потеряли свой пользовательский опыт.", ErrorIcon + " カスタム背景を設定できませんでした。"];
                  const embed = {"description": TranslatedMessages[Language].replace("X001", Setting.CustomBackgroundPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
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

                if  (!peeky.userData.get(key, "FashionBadge") && i !== 1)  {
                    InfoMessages.push(InfoMessage1[0]);
                    peeky.userData.set(key, true, "FashionBadge");    
                };

                if  (!peeky.userData.get(key, "ExclusiveBadge") && function_GetBackgroundInfo(i, ["price"]) == Exclusive)  {
                    InfoMessages.push(InfoMessage1[0]);
                    peeky.userData.set(key, true, "ExclusiveBadge");    
                };

                if  (!peeky.userData.get(key, "MinerBadge") && i == 283)  {
                    InfoMessages.push(InfoMessage1[0]);
                    peeky.userData.set(key, true, "MinerBadge");    
                };

                if  (isNaN(peeky.userData.get(key, "Background")))  {
                    InfoMessages.push(InfoIcon + " You have lost your **Custom Background**.");
                };

                peeky.userData.set(key, i, "Background");

                var TranslatedMessages = [SuccessIcon + " You have set the **X001** background.", SuccessIcon + " Nastavil jste si pozadí **X001**.", SuccessIcon + " Nastavil si **X001** pozadie.", SuccessIcon + " Usted ha puesto el fondo **X001**.", SuccessIcon + " **X001** arka planını ayarladınız.", SuccessIcon + " Вы установили фон **X001**.", SuccessIcon + " **X001**の背景を設定しました。"];
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
                        FinalPrice = Math.floor(FinalPrice / Setting.SellMultiplier);
                    };

                    peeky.userData.get(key, "Inventory").splice(BackgroundIndex, 1);
                    peeky.userData.math(key, "+", FinalPrice, "Gredit");

                    if  (i == peeky.userData.get(key, "Background"))  {
                        peeky.userData.set(key, 1, "Background");
                        InfoMessages.push(InfoMessage2[Language]);
                    };

                    var TranslatedMessages = [SuccessIcon + " You have sold the **X001** background for **X002 " + GreditIcon + "**.", SuccessIcon + " Prodal jste pozadí **X001** za **X002 " + GreditIcon + "**.", SuccessIcon + " Predal si **X001** pozadie za **X002 " + GreditIcon + "**.", SuccessIcon + " Usted ha vendido el fondo **X001** por **X002 " + GreditIcon + "**.", SuccessIcon + " **X002** için **X001 " + GreditIcon + "** arka planını sattınız.", SuccessIcon + " Вы продали фон **X001** за **X002 " + GreditIcon + "**.", SuccessIcon + " **X002 " + GreditIcon + "**の**X001**背景を販売しました。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", function_GetBackgroundInfo(i, ["name"])).replace("X002", FinalPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                }
                 else
                {
                  var TranslatedMessages = [ErrorIcon + " You cannot sell the default backgrounds.", ErrorIcon + " Nemůžete prodat základní pozadí.", ErrorIcon + " Nemôžeš predať štandardné pozadia.", ErrorIcon + " Usted no puede vender los fondos predeterminados.", ErrorIcon + " Varsayılan arka planları satamazsınız.", ErrorIcon + " Вы не можете продать фоны по умолчанию.", ErrorIcon + " デフォルトの背景は販売できません。"];
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
              FullPrice += Math.floor(Banners[i - 1][Banner.Price] / Setting.SellMultiplier);   
          };     
      });

      peeky.userData.set(key, SavedBackgrounds, "Inventory");
      peeky.userData.math(key, "+", FullPrice, "Gredit");

      var TranslatedMessages = [SuccessIcon + " You have sold all your backgrounds for **X001 " + GreditIcon + "**.", SuccessIcon + " Prodal jste všechna svá pozadí za **X001 " + GreditIcon + "**.", SuccessIcon + " Predal si všetky tvoje pozadia za **X001 " + GreditIcon + "**.", SuccessIcon + " Usted ha vendido todos sus fondos por **X001 " + GreditIcon + "**.", SuccessIcon + " **X001 " + GreditIcon + "** için tüm arka planlarınızı sattınız.", SuccessIcon + " Вы продали все свои фоны за **X001 " + GreditIcon + "**.", SuccessIcon + " **X001 " + GreditIcon + "**のすべての背景を販売しました。"];
      const embed = {"description": TranslatedMessages[Language].replace("X001", FullPrice.toLocaleString('en')) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));

  } else {
    const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
  };

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

//Daily
if  (CommandName == "daily")  {
  
    var DailyDate = new Date().getDate() + "/" + new Date().getMonth();

    if  (peeky.userData.get(key, "LastDaily") !== DailyDate)  {
      
        peeky.userData.set(key, DailyDate, "LastDaily");
        peeky.userData.math(key, "+", 1, "Chests");
      
        var TranslatedMessages = [SuccessIcon + " You have retrieved your daily reward!", SuccessIcon + " Dostali jste vaši denní odměnu!", SuccessIcon + " Získali ste svoju dennú odmenu!", SuccessIcon + " Has recuperado tu recompensa diaria!", SuccessIcon + " Günlük ödülünü aldın!", SuccessIcon + " Вы получили ваше ежедневное вознаграждениe", SuccessIcon + " 毎日の報酬を受け取りましたが！"];
                  
        if  (peeky.peekyData.get("dailychallenge", "data")[0] == "do_daily" && function_ChallengeRewards(key, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
            InfoMessages.push(InfoMessage4[Language]);
        };
      
        const embed = {"description": TranslatedMessages[Language] + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    } else {
      
      var TranslatedMessages = [ErrorIcon + " Come back later to retrieve your daily reward.", ErrorIcon + " Pro vaši odměnu si můžete přijít později.", ErrorIcon + " Vráťte sa neskôr aby ste získali svoju dennú odmenu.", ErrorIcon + " Vuelva más tarde para recibir su recompensa diaria.", ErrorIcon + " Günlük ödülünüzü almak için daha sonra tekrar gelin.", ErrorIcon + " Приходите позже, чтобы получить вашу ежедневную награду.", ErrorIcon + " 毎日のご褒美は後で取りに来てください。"];
      
      const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
      
    };
  
};

//Open
if  (CommandName.startsWith("open ") || CommandName == "open")  {

    if  (!ProfileCooldown.has(message.author.id))  {

    if  (peeky.userData.get(key, "Chests") >= 1)  {

          ProfileCooldown.add(message.author.id);
          setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);

          //Loot Variables
          var PeekyCoinsOpened = Math.round(Math.random() * 100);
          var PeekyCoinsPremium = Math.round(Math.random() * 50);
          var PeekyCoinsUpgraded = Math.round(Math.random() * 25);
          var PeekyCoinsBooster = Math.round(Math.random() * 25);
          var PeekyCoinsLevel = peeky.userData.get(key, "Level");
          var TotalAmount = PeekyCoinsOpened + PeekyCoinsLevel;

          //Other
          var Tokens = CommandName.split("open ");

          //Premium
          if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(PremiumRole))  {
              TotalAmount += PeekyCoinsPremium;
          };

          //Server Booster
          if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(BoosterRole))  {
              TotalAmount += PeekyCoinsPremium;
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
              if  (!peeky.userData.get(key, "GamblerBadge") && CurrentChest == 10)  {
                  peeky.userData.set(key, true, "GamblerBadge")
                  InfoMessages.push(InfoMessage1[Language]);
              };
            
              //Background Drop
              var BackgroundNumber = 10;
            
              //Premium
              if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(PremiumRole))  {
                  BackgroundNumber = BackgroundNumber - 1;
              };
            
              //Server Booster
              if  (peeky.guilds.cache.get(SupportServer).members.cache.has(message.author.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(message.author.id).roles.cache.has(BoosterRole))  {
                  BackgroundNumber = BackgroundNumber - 1;
              };
            
              var BackgroundChance = Math.round(Math.random() * BackgroundNumber) + 1;

              if  (BackgroundChance == 1)  {

                  var Background = Math.round(Math.random() * Banners.length);

                  if  (Background !== 0 && Banners[Background][Banner.Price] !== Exclusive)  {

                      peeky.userData.observe(key, "Inventory").push(Background);
                      InfoMessages.push(InfoIcon + " You have found the **" + function_GetBackgroundInfo(Background, ["name", "id"]) + "** background.");
                    
                      if  (peeky.peekyData.get("dailychallenge", "data")[0] == "open_background" && function_ChallengeRewards(key, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
                          InfoMessages.push(InfoMessage4[Language]);
                      };

                  };

              };
                
          } while (CurrentChest < ChestAmount);

          peeky.userData.math(key, "-", ChestAmount, "Chests");
          peeky.userData.math(key, "+", TotalLoot, "Gredit");

          var TranslatedMessages = [SuccessIcon + " You have opened **X001" + " " + ChestIcon + "** for **X002" + " " + GreditIcon +"**.", SuccessIcon + " Otevřením **X001" + " " + ChestIcon + "** jste získal **X002" + " " + GreditIcon +"**.", SuccessIcon + " Otvoril si **X001" + " " + ChestIcon + "** pro **X002" + " " + GreditIcon +"**.", SuccessIcon + " Usted ha abierto el **X001" + " " + ChestIcon + "** por **X002 " + GreditIcon +"**.", SuccessIcon + " **X002" + " " + GreditIcon + "** için **X001" + " " + ChestIcon +"** ürününü açtınız.", SuccessIcon + " Вы открыли **X001" + " " + ChestIcon + "** за **X002 " + GreditIcon +"**.", SuccessIcon + " **X002 " + GreditIcon +"**の**X001 " + ChestIcon + "**を開きました。"];
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

        if  (DonatedAmount >= 1000 && !peeky.userData.get(key, "CharityBadge"))  {
            peeky.userData.set(key, true, "CharityBadge");
            InfoMessages.push(InfoMessage1[Language]);
        };
                    
        if  (DonatedAmount >= 5000 && peeky.peekyData.get("dailychallenge", "data")[0] == "donate_alot" && function_ChallengeRewards(key, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
            InfoMessages.push(InfoMessage4[Language]);
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

            peeky.userData.observe(key, "Inventory").splice(BackgroundIndex, 1);
            peeky.userData.observe(key2, "Inventory").push(DonatedAmount);

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
         const embed = {"description": ErrorMessage5[Language],  "color": EmbedColor}; 
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

    var MentionedMember = message.mentions.members.first();
    if  (MentionedMember)  {  var SomeoneTagged = MentionedMember  }  else  {  var SomeoneTagged = message.member;  };

    const key2 = `${SomeoneTagged.user.id}`;
    
    if  (peeky.userData.has(key2))  {
      
        const embed = {"description": "**1️⃣ Backgrounds `" + peeky.userData.get(key2, "Inventory").length + "`** \n  " + Hollow + " View all your owned backgrounds. \n\n  **2️⃣ Badges `" + peeky.userData.get(key2, "Badges").length + "`** \n  " + Hollow + " View all your hard-earned badges. \n\n  **3️⃣ Statistics** \n  " + Hollow + " Take a look at your profile's statistics.",  "color": EmbedColor};
        message.channel.send("**Inventory**", { embed }).catch(error => ErrorBag.add(error)).then(async m => {

            await m.react("1️⃣");
            await m.react("2️⃣");
            await m.react("3️⃣");
            await m.react(`◾`);
            await m.react(`⬅️`);
            await m.react(`➡️`);
          
            peeky.userData.set(key, [m.id, "Home", 1, key2], "InventoryInfo");

        }).catch(error => ErrorBag.add(error));
      
        /*//Backgrounds
        var FixedBackgrounds = [];
        var InventoryWorth = 0;
        var Current = 0;
        peeky.userData.get(key2, "Inventory").filter(i => Banners[i - 1][Banner.Price] !== Exclusive).forEach(banner => {
            InventoryWorth += Math.floor(Banners[banner - 1][Banner.Price] / Setting.SellMultiplier);//Inventory
        });
        if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {
            FixedBackgrounds.push("Custom `0`");
            var CustomBackgroundAmount = 1;
        } else {  var CustomBackgroundAmount = 0;  };
        peeky.userData.get(key2, "Inventory").slice(0, Setting.InventoryLimit).forEach(banner => {
            Current ++;
            FixedBackgrounds.push(function_GetBackgroundInfo(banner, ["name"]) + " `" + banner + "`");
        });

        //Badges
        var AllBadges = [];
        peeky.userData.get(key2, "Badges").forEach(badge => {
            AllBadges.push(badge[0]);
        });

        if  ((peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount) > Setting.InventoryLimit)  {  var EndStringBackgrounds = " and some more..."  } else {  var EndStringBackgrounds = "";  };
        if  ((peeky.userData.get(key2, "Badges").length) > Setting.InventoryLimit)  {  var EndStringBadges = " and some more..."  } else {  var EndStringBadges = "";  };

        const embed = {"description": "**" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds (Worth " + InventoryWorth.toLocaleString('en')  + " Gredit)**\n" + FixedBackgrounds.join(", ") + EndStringBackgrounds + ".\n\n**" + peeky.userData.get(key2, "Badges").length + " Badges**\n" + AllBadges.slice(0, Setting.InventoryLimit).join(', ') + EndStringBadges + ".\n\n**Other Statistics**" + "\n" + peeky.userData.get(key2, "AmbassadorInvites").length + "/50 Ambassador Program score (Season " + peeky.userData.get(key2, "AmbassadorSeason") + ")" + "\n" + peeky.userData.get(key2, "BadgeGredit").toLocaleString('en') + " Gredit Gain" + "\n" + peeky.userData.get(key2, "BadgeExp").toLocaleString('en') + " Exp Gain",  "color": EmbedColor}; 
        message.channel.send({  embed  }).catch(error => ErrorBag.add(error));*/

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
              const StatsColor     = "lightgray";

              var MentionedMember = message.mentions.members.first();
              if  (MentionedMember)  {  var SomeoneTagged = MentionedMember  }  else  {  var SomeoneTagged = message.member;  };

              //Vars
              const ProfileName        = SomeoneTagged.displayName;
              const key2               = SomeoneTagged.user.id;
              var   Failed             = false;

              if  (peeky.userData.has(key2))  {

              var TheBannerShown = function_GetBackground(key2);

              var background = await Canvas.loadImage(TheBannerShown).catch(error => {Failed = true;  peeky.userData.set(key2, 1, "Background");  setTimeout(() => {ProfileCooldown.delete(message.author.id)}, ProfileCooldownMS);});

              if  (Failed == false)  {
                
                const ProfileColor = await getColorFromURL(TheBannerShown).then(color => { return "#" + rgbHex(color[0], color[1], color[2]); }).catch(error => {  ErrorBag.add(error); return "#2C2F33";  });
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 

                var layout = await Canvas.loadImage("https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fprofile_layout_4.4.png?v=1584298348459");
                ctx.drawImage(layout, 0, 0, canvas.width, canvas.height);

                //Draw Events

                //String Setting
                ctx.fillStyle = StatsColor;
                ctx.fillStyle = "white";
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 1; 
                ctx.shadowOffsetY = 1;
                ctx.globalAlpha = 1;

                //Name String
                ctx.textAlign = "left";
                ctx.font = "19px " + Setting.DefaultFont;
                ctx.fillText(ProfileName, 83, 25, canvas.width - 95);

                //Coins String
                ctx.textAlign = "left";
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + peeky.userData.get(key2, "Gredit").toLocaleString('en') + " Gredit", 45, 105, canvas.width / 2 - 50);

                //Chests String
                ctx.textAlign = "left";
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + peeky.userData.get(key2, "Chests").toLocaleString('en') + " Chests", 45, 140, canvas.width / 2 - 50);

                //Karma String
                ctx.textAlign = "left";
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + peeky.userData.get(key2, "Karma").toLocaleString('en') + " Karma", canvas.width / 2 + 45, 105, canvas.width / 2 - 50);

                //Badges String
                ctx.textAlign = "left";
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + peeky.userData.get(key2, "Badges").length.toLocaleString('en') + " Badges", canvas.width / 2 + 45, 140, canvas.width / 2 - 50);

                //Backpack String
                ctx.textAlign = "left";
                if  (isNaN(peeky.userData.get(key2, "Background")) == true)  {  var CustomBackgroundAmount = 1;  } else {  var CustomBackgroundAmount = 0;  };      
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + (peeky.userData.get(key2, "Inventory").length + CustomBackgroundAmount).toLocaleString('en') + " Backgrounds", 45, 175, canvas.width / 2 - 50);

                //Leaderboard Position String
                ctx.textAlign = "left";
                if  (LeaderboardPositions.includes(SomeoneTagged.user.id))  {  if  (peeky.userData.get(key2, "FashionBadge"))  {  var Position = (LeaderboardPositions.indexOf(SomeoneTagged.user.id) + 1) + ".";  } else {  var Position = Setting.LeaderboardLimit + "+";   };  } else {  var Position = "No";  };
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + Position + " Leaderboard Position", canvas.width / 2 + 45, 175, canvas.width / 2 - 50);

                //Description String
                var text = peeky.userData.get(key2, "Description");
                var fontsize = 16;
                var y_position = 50;      
                ctx.fillStyle = "white";
                ctx.textAlign = "left";

                if (text.includes("\n")) {  y_position = 45;  };
                ctx.fillText(peeky.userData.get(key2, "Description"), 83, y_position, canvas.width - 95);

                //Coin Icon
                const coin_icon = await Canvas.loadImage("https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_coins.png?1543767999542");
                ctx.drawImage(coin_icon, 10, 85, 27, 27);

                //Chest Icon
                const chest_icon = await Canvas.loadImage("https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_chest.png?1541260288051");
                ctx.drawImage(chest_icon, 10, 120, 27, 27);

                //Backpack Icon
                const backpack_icon = await Canvas.loadImage("https://cdn.glitch.com/64aa05ba-d02f-4949-a4e2-d166873c672a%2Fimage_backpack.png?1546614356449");
                ctx.drawImage(backpack_icon, 10, 155, 27, 27);

                //Karma Icon
                const karma_icon = await Canvas.loadImage("https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fkarma.png?v=1564244903816");
                ctx.drawImage(karma_icon, canvas.width / 2 + 10, 85, 27, 27);

                //Badges Icon
                const badges_icon = await Canvas.loadImage("https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fbadges.png?v=1564245176155");
                ctx.drawImage(badges_icon, canvas.width / 2 + 10, 120, 27, 27);

                //Leaderboard Icon
                const leaderboard_icon = await Canvas.loadImage("https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fleaderboardrank.png?v=1579943651742");
                ctx.drawImage(leaderboard_icon, canvas.width / 2 + 10, 155, 27, 27);

                //Badges
                var   BadgeYpos    = 203;
                var   BadgeXpos    = -24;
                const BadgeXposAmt = 32.5;
                var   BadgeAmount  = 0;
                const MaxBadges    = 15;
                const BadgeSize    = 25;
                var   Positions = [];

                //Badges
                for (var i = 0; i < MaxBadges; i++)  {
                    if  (peeky.userData.get(key2, "Badges")[i])  {
                        Positions.push([BadgeXpos += BadgeXposAmt]);
                    };
                };
                for (var i = 0; i < MaxBadges; i++)  {
                    if  (peeky.userData.get(key2, "Badges")[i])  {
                        var badgeicon = await Canvas.loadImage(peeky.userData.get(key2, "Badges")[i][1]);
                        await ctx.drawImage(badgeicon, Positions[i][0], BadgeYpos, BadgeSize, BadgeSize);          
                    };
                };

                ctx.globalAlpha = 1;
                ctx.shadowOffsetX = 0; 
                ctx.shadowOffsetY = 0;

                //Avatar
                const avatar = await Canvas.loadImage(SomeoneTagged.user.displayAvatarURL({ format: 'png' }).replace("https", "http"));
                ctx.drawImage(avatar, 6, 6, 64, 64);
                
                //Exp Bar
                ctx.fillStyle = ProfileColor;
                ctx.fillRect(65, 252.5, peeky.userData.get(key2, "Exp") / (Setting.ExpNeeded * peeky.userData.get(key2, "Level")) * (canvas.width - 130), 28.5);

                //Exp Text
                ctx.font = "22px " + Setting.DefaultFont;
                ctx.textAlign = "center";
                ctx.fillStyle = "white";
                ctx.shadowOffsetX = 1; 
                ctx.shadowOffsetY = 1;
                ctx.fillText(peeky.userData.get(key2, "Level").toLocaleString('en'), 34, 275);
                ctx.fillText((peeky.userData.get(key2, "Level") + 1).toLocaleString('en'), canvas.width - 34, 275);

                //Exp String
                ctx.font = "15px " + Setting.DefaultFont;
                ctx.fillText("" + ((peeky.userData.get(key2, "Level") * Setting.ExpNeeded) + peeky.userData.get(key2, "Exp")).toLocaleString('en') + " Exp", canvas.width / 2, 271, canvas.width / 2 - 50);

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');
                await message.channel.send("", attachment).catch(error => ErrorBag.add(error)).then(async m => {

                if  (!peeky.userData.get(key2, "FashionBadge") && !peeky.userData.get(key2, "PainterBadge"))  {
                    InfoMessages.push(InfoIcon + " Check out this [tutorial](" + Setting.Domain + "/pages/tutorials/#backgrounds) for help with buying a background.");
                };

                if  (!WebsiteCooldowns.has("featuredprofile") && peeky.guilds.cache.get(SupportServer).members.cache.has(SomeoneTagged.id) && peeky.guilds.cache.get(SupportServer).members.cache.get(SomeoneTagged.id).roles.cache.has(PremiumRole))  {

                    WebsiteCooldowns.add("featuredprofile");
                    setTimeout(() => {WebsiteCooldowns.delete("featuredprofile")}, 1800000);   

                    fs.writeFile('public/website_data/featured_profile.txt', "<center>  <img src='" + m.attachments.array()[0].url + "' class='featuredprofile'>  </center>", (err) => {
                        if (err) console.log(err); 
                    });

                    var TranslatedMessages = [InfoIcon + " This profile is now featured on the website.", InfoIcon + " Tento profil je nyní vystaven na strance.", InfoIcon + " Tento profil je teraz uvedený na webstránke.", InfoIcon + " Este perfil está ahora en el sitio web.", InfoIcon + " Bu profil artık web sitesinde yer alıyor.", InfoIcon + " Этот профиль теперь размещен на сайте.", InfoIcon + " このプロフィールは現在、ウェブサイトで紹介されています。"];
                    InfoMessages.push(TranslatedMessages[Language]);

                    console.log("📡 The featured profile has been updated.");

                  };

                  if  (InfoMessages.length > 0)  {
                      const embed = {"description": InfoMessages.join("\n\n"),  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  };

              }).catch(error => ErrorBag.add(error));

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
  
    if  (/*!CurrentlyPlaying.has(message.guild.id) &&*/ peeky.serverData.get(keySF, "Queue").length < Setting.QueueLimit && !MusicCmdCooldown.has(message.guild.id))  {
      
        var Type = "Started";
        var ChoosingMode = true;
        var DeleteMessage = false;
        var RateLimited = false;
        var FailedSongs = new Set();
        
        MusicCmdCooldown.add(message.guild.id);
        setTimeout(() => {MusicCmdCooldown.delete(message.guild.id)}, 10000);
      
        //peeky.serverData.set(keySF, [], "Queue");
      
        function ContinueQueue()  {

            if  (peeky.serverData.get(keySF, "Queue").length < Setting.QueueLimit)  {

                if  (peeky.serverData.get(keySF, "MusicMode") == "Looping")  {
                    peeky.serverData.observe(keySF, "Queue").push(peeky.serverData.get(keySF, "Queue")[0]);
                    peeky.serverData.observe(keySF, "Queue").shift();
                } else
                if  (peeky.serverData.get(keySF, "MusicMode") == "Automated")  {
                    if  (peeky.serverData.get(keySF, "Queue").length > 0)  {
                        peeky.serverData.set(keySF, [], "Queue");
                        peeky.serverData.observe(keySF, "Queue").unshift(YoutubeSongs[Math.floor(Math.random()*YoutubeSongs.length)][0]);
                    };
                } else {
                  peeky.serverData.observe(keySF, "Queue").shift();
                };

            } else {
              peeky.serverData.get(keySF, "Queue").shift();
            };
          
        };
      
        async function PlayMusic(voiceChannel)  {
          
            if  (peeky.serverData.get(keySF, "Queue").length > 0)  {
              
                var song = peeky.serverData.get(keySF, "Queue")[0];
                
                if  (!RateLimited && !FailedSongs.has(song) && FailedSongs.size <= 5)  {

                    await ytdl.getBasicInfo(song).then(async (info) => {
                    info = info.player_response.videoDetails;

                    const Thumbnail  = info.thumbnail.thumbnails[info.thumbnail.thumbnails.length - 1].url;
                    const Title      = info.title;
                    const Author     = info.author;
                    const Length     = info.lengthSeconds;
                    const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (Length / 60));
                    const Started    = new Date();

                    //if  (Length <= 1800 && Length > 60)  {

                        await voiceChannel.join().then(async connection => {

                            peeky.serverData.set(keySF, Title, "Title");
                            peeky.serverData.set(keySF, Thumbnail, "Thumbnail");
                            peeky.serverData.set(keySF, Author, "Author");
                            peeky.serverData.set(keySF, LengthDate, "Length");
                            peeky.serverData.set(keySF, Started, "Started");
                            peeky.serverData.set(keySF, song, "Link");

                            if  (DeleteMessage == true)  {
                                message.delete().catch(error => ErrorBag.add(error));
                            };            

                            await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, LengthDate, message.author.id, Type, peeky.serverData.get(keySF, "Queue"), message.member, peeky.serverData.get(keySF, "LastPlaylist"))).catch(error => ErrorBag.add(error));

                            const stream = ytdl(song);
                            const dispatcher = await connection.play(stream, StreamOptions);

                            CurrentlyPlaying.add(message.guild.id);

                            dispatcher.on('finish', async reason => {

                                ContinueQueue();

                                if  (peeky.serverData.get(keySF, "Queue").length == 0 || message.guild.me.voice.channel.members.filter(m => !m.user.bot).map(m => m.id).length < 1)  {  //

                                    peeky.serverData.set(keySF, [], "Queue");
                                    CurrentlyPlaying.delete(message.guild.id);
                                    voiceChannel.leave();

                                    const Listeners = voiceChannel.members.filter(m => !m.user.bot).map(m => m.id);

                                    var TranslatedMessages = [InfoIcon + " The music has now finished with **X001 listeners**.", InfoIcon + " Hudba právě skončila s **X001 posluchateli**.", InfoIcon + " Hudba sa skončila s **X001 poslucháčmi**.", InfoIcon + " La música ya se ha terminado con **X001 oyentes**.", InfoIcon + " Müzik şimdi **X001 dinleyicileri** ile bitti.", InfoIcon + " Музыка теперь закончена с **X001 слушателей**.", InfoIcon + " 音楽は**X001リスナー**で終了しました。"];
                                    const embed = {"description": TranslatedMessages[Language].replace("X001", Listeners.length),  "color": EmbedColor};
                                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                                    if  (Listeners.length >= 5)  {

                                        Listeners.forEach(id => {

                                            if  (!peeky.userData.has(id) && peeky.userData.get(id, "PartyBadge"))  {
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
                        });

                    /*} else {
                      var TranslatedMessages = [ErrorIcon + " You can only play songs between 1 to 30 minutes.", ErrorIcon + " Můžete pouze hrát písničky které trvají 1 až 30 minut.", ErrorIcon + " Môžeš hrať iba pesničky od 1 do 30 minút.", ErrorIcon + " Sólo puedes reproducir canciones entre 1 y 30 minutos.", ErrorIcon + " Yalnızca 1 ila 30 dakika arasında şarkı çalabilirsiniz.", ErrorIcon + " Вы можете играть песни только от 1 до 30 минут.", ErrorIcon + " 1 ~ 30分の間の曲しか再生できません。"];
                      const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };*/

                    }).catch(error => {
                        ErrorBag.add(error);
                        FailedSongs.add(song);
                      
                        /*if  (error.includes("429"))  {
                            RateLimited = true;
                        };*/

                        var TranslatedMessages = [ErrorIcon + " Failed to get the YouTube video.", ErrorIcon + " Nepodařilo se získat YouTube video.", ErrorIcon + " Nepodarilo sa nájsť Youtube video.", ErrorIcon + " Fallo en conseguir el vídeo de YouTube.", ErrorIcon + " YouTube videosu alınamadı.", ErrorIcon + " Не смог получить видео с YouTube.", ErrorIcon + " YouTube動画を取得できませんでした"];
                        const embed = {"description": TranslatedMessages[Language],  "footer": {"text": song},  "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                        ContinueQueue();

                        PlayMusic(voiceChannel);

                    });

                } else {

                  const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                };

            };
          
        };

        if  (CommandArgument.includes("youtube.com") || CommandArgument.includes("youtu.be"))  {
            DeleteMessage = true;
        };

        if  (CommandArgument == RandomString && ChoosingMode == true)  {

            ChoosingMode = false;
          
            CommandArgument = YoutubeSongs[Math.floor(Math.random()*YoutubeSongs.length)][0];
            Type = "Random";
              
            peeky.serverData.observe(keySF, "Queue").push(CommandArgument);

        };

        if  (CommandArgument == "previous" && ChoosingMode == true)  {

            ChoosingMode = false;

            if  (peeky.serverData.has(keySF, "Link") && peeky.serverData.get(keySF, "Link") !== "None")  {  

                CommandArgument = peeky.serverData.get(keySF, "Link");
                Type = "Previous";
              
                peeky.serverData.observe(keySF, "Queue").push(CommandArgument);

            } else {

              var TranslatedMessages = [InfoIcon + " Previous song not found - playing a random song.", InfoIcon + " Minulá písnička nenalezena - Pehrávám náhodnou písničku.", InfoIcon + " Predchodzá pesnička nenájdená - hrá sa random pesnička.", InfoIcon + " No se ha encontrado la canción anterior... Reproduciendo una canción al azar.", InfoIcon + " Önceki şarkı bulunamadı - rastgele bir şarkı çalıyor.", InfoIcon + " Предыдущая песня не найдена - исполнение случайной песни.", InfoIcon + " 前の曲が見つかりません - ランダム曲を再生します。"];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = YoutubeSongs[Math.floor(Math.random()*YoutubeSongs.length)][0];
              Type = "Random";
              
              peeky.serverData.observe(keySF, "Queue").push(CommandArgument);
            };

        };

        if  (CommandArgument.startsWith("playlist") && ChoosingMode == true)  {

            ChoosingMode = false;

            if  (peeky.userData.get(key, "Playlist").length > 0)  {

                var MentionedMember = message.mentions.members.first();
                if  (MentionedMember)  {  var SomeoneTagged = MentionedMember  }  else  {  var SomeoneTagged = message.member;  };
                const key2 = `${SomeoneTagged.user.id}`;

                var Playlist = peeky.userData.get(key2, "Playlist");
                if  (peeky.serverData.get(keySF, "RandomPlaylists") == true)  {
                    Playlist = function_ShuffleArray(peeky.userData.get(key2, "Playlist"));
                };

                Playlist.forEach(song => {
                    if  (peeky.serverData.get(keySF, "Queue").length < Setting.QueueLimit)  {
                        peeky.serverData.observe(keySF, "Queue").push(song);
                    };
                });
                Type = "Playlist";
                peeky.serverData.set(keySF, peeky.userData.get(key2, "PlaylistName"), "LastPlaylist");

            } else {

              var TranslatedMessages = [InfoIcon + " Your playlist is empty - Playing a random song.", InfoIcon + " Váš playlist je prázdný - Přehrávám náhodnou písničku.", InfoIcon + " Tvôj playlist je prázdny - hrá sa random pesnička.", InfoIcon + " Su lista de reproducción está vacía... Reproduciendo una canción al azar.", InfoIcon + " Çalma listeniz boş - Rastgele bir şarkı çalıyor.", InfoIcon + " Ваш плейлист пуст - Воспроизведение случайной песни.", InfoIcon + " プレイリストが空です - ランダム曲を再生します。"];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

              CommandArgument = YoutubeSongs[Math.floor(Math.random()*YoutubeSongs.length)][0];
              Type = "Random";
              
              peeky.serverData.observe(keySF, "Queue").push(CommandArgument);

            };

        };
      
        if  (CommandArgument.includes("&"))  {
            CommandArgument = CommandArgument.split("&")[0];
        };

        search(CommandArgument, SearchOptions, async function(error, results)  {

            if  (error) return ErrorBag.add(error);

            if  (ChoosingMode == true)  {

                if  (results.length > 0)  {      
                    peeky.serverData.observe(keySF, "Queue").push(results[0].link);
                };

            };
      
            var Queue = peeky.serverData.get(keySF, "Queue");
            var SongInQueue = Queue[Queue.length - 1];

            if  ((Queue.length > 0) && (SongInQueue.includes("youtube.com") || SongInQueue.includes("youtu.be")))  { //&& (ytdl.validateURL(Queue[Queue.length - 1]) == true)

                if  (message.member.voice.channel)  {

                    const voiceChannel  = message.member.voice.channel;

                    if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {

                        if  (!CurrentlyPlaying.has(message.guild.id))  {
                            PlayMusic(voiceChannel);
                        } else {
                          const embed = {"description": SuccessIcon + " Added the song(s) to the queue.",  "color": EmbedColor};
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        };

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
/*if (CommandName == "current")  {
      
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

        await message.channel.send("", await function_MusicEmbed(Title, Thumbnail, Author, Length, "minutes left", "Current", peeky.serverData.get(keySF, "Queue"), message.member, peeky.serverData.get(keySF, "LastPlaylist"))).catch(error => ErrorBag.add(error));
        
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};*/

//Queue
if  (CommandName == "queue")  {
      
    var Queue = peeky.serverData.get(keySF, "Queue");
    if  (Queue.length > 0)  {
        var Thumbnail = peeky.serverData.get(keySF, "Thumbnail");
        var FinalizedPlaylist = function_NumarizeArray(Queue.slice(0, 10), ["<", ">"], null);
    } else {
      var Thumbnail = null;
      var FinalizedPlaylist = "The queue is empty.";
    };

    const embed = {
        "description": 
            "**" + function_RemoveFormatting(message.guild.name, "other", true) + "'s Queue**" + "\n" +
            Queue.length + "/" + Setting.QueueLimit + " songs" + "\n\n" +
            FinalizedPlaylist,
        "image":  {
            "url": Thumbnail
        },
        "color": EmbedColor
    };

    await message.channel.send({ embed }).catch(error => ErrorBag.add(error));

};

//Playlist
if (CommandName.startsWith("playlist ") || CommandName == "playlist")  {
  
    if  (message.channel.permissionsFor(peeky.user).has('ATTACH_FILES'))  {
  
        var CommandArgument = CommandName.split("playlist")[1];

        if  (CommandArgument.startsWith(" add "))  {

            if  (!MusicCmdCooldown.has(message.author.id))  {

                var PlaylistRequest = CommandArgument.replace(" add ", "");

                if  (PlaylistRequest == "current")  {

                    if  (CurrentlyPlaying.has(message.guild.id) && peeky.serverData.get(keySF, "Link") !== "None")  {

                        peeky.userData.observe(key, "Playlist").push(peeky.serverData.get(keySF, "Link"));

                        var TranslatedMessages = [SuccessIcon + " Added the current song to your playlist.", SuccessIcon + " Aktuální písnička byla přidána do vašeho playlistu.", SuccessIcon + " Pridal som aktuálnu pesničku do tvôjho playlistu.", SuccessIcon + " Añadi la canción actual a su lista de reproducción.", SuccessIcon + " Geçerli şarkı çalma listenize eklendi.", SuccessIcon + " Добавлена текущая песня в плейлист.", SuccessIcon + " 現在の曲をプレイリストに追加しました。"];
                        const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));    

                    } else {
                      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

                } else

                if  ((PlaylistRequest.includes("youtube.com") || PlaylistRequest.includes("youtu.be")))  {

                    if  (PlaylistRequest.includes("&"))  {
                        PlaylistRequest = PlaylistRequest.split("&")[0];
                    };

                    peeky.userData.observe(key, "Playlist").push(PlaylistRequest);

                    var TranslatedMessages = [SuccessIcon + " Added the song to your playlist.", SuccessIcon + " Písnička byla přidána do vašeho playlistu.", SuccessIcon + " Pesnička pridaná do tvojho playlistu.", SuccessIcon + " Añadí la canción a su lista de reproducción.", SuccessIcon + " Şarkı çalma listenize eklendi.", SuccessIcon + " Добавил песню в плейлист.", SuccessIcon + " 曲をプレイリストに追加しました。"];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                } else {
                  const embed = {"description": ErrorMessage4[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };
              
                if  (peeky.userData.get(key, "Playlist").length == 1 && !peeky.userData.get(key, "PlaylistThumbnail"))  {

                    MusicCmdCooldown.add(message.guild.id);
                    setTimeout(() => {MusicCmdCooldown.delete(message.guild.id)}, 10000);

                    await ytdl.getBasicInfo(peeky.userData.get(key, "Playlist")[0]).then(async (info) => {

                        info = info.player_response.videoDetails;

                        var Thumbnail = info.thumbnail.thumbnails[info.thumbnail.thumbnails.length - 1].url;

                        peeky.userData.set(key, Thumbnail, "PlaylistThumbnail");

                    });


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

            peeky.userData.observe(key, "Playlist").splice(BackgroundIndex, 1);

            var TranslatedMessages = [SuccessIcon + " The song has been removed from your playlist.", SuccessIcon + " Písnička byla odebrána z vašeho playlistu.", SuccessIcon + " Pieseň bola vymazaná z tvôjho playlistu.", SuccessIcon + " La canción ha sido eliminada de su lista de reproducción.", SuccessIcon + " Şarkı, çalma listenizden kaldırıldı.", SuccessIcon + " Песня была удалена из вашего плейлиста.", SuccessIcon + " 曲がプレイリストから削除されました。"];
            const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            } else {
              var TranslatedMessages = [ErrorIcon + " That song is not in your playlist.", ErrorIcon + " Tato písnička ve vašem playlistu není.", ErrorIcon + " Táto pesnička neni v tvojom playliste.", ErrorIcon + " Esa canción no está en su lista de reproducción.", ErrorIcon + " Bu şarkı çalma listenizde değil.", ErrorIcon + " Этой песни нет в твоем плейлисте.", ErrorIcon + " その曲はあなたのプレイリストにありません。"];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else  
        if  (CommandArgument.startsWith(" rename "))  {

            var PlaylistRequest = function_RemoveFormatting(CommandArgument.replace(" rename ", ""), "other", true);

            peeky.userData.set(key, PlaylistRequest, "PlaylistName")

            var TranslatedMessages = [SuccessIcon + " Your playlist has been renamed to **X001**.", SuccessIcon + " Váš playlist byl přejmenován na **X001**.", SuccessIcon + " Tvôj playlist bol premenovaný na **X001**.", SuccessIcon + " Su lista de reproducción ha sido renombrada a **X001**.", SuccessIcon + " Oynatma listeniz yeniden adlandırıldı **X001**.", SuccessIcon + " Ваш плейлист был переименован в **X001**.", SuccessIcon + " プレイリストの名前が **X001**に変更されました。"];
            const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.userData.get(key, "PlaylistName")),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

        } else
        if  (CommandArgument.startsWith(" thumbnail"))  {
          
            if  (message.attachments.size > 0)  {
          
                var Thumbnail = message.attachments.array()[0].url;
              
                if  (function_DetectLink(Thumbnail))  {
                  
                    peeky.userData.set(key, Thumbnail, "PlaylistThumbnail");

                    var TranslatedMessages = [SuccessIcon + " You have set the thumbnail for your playlist.", SuccessIcon + " Nastavil jste miniaturu pro váš playlist.", SuccessIcon + " Nastavil si náhladovku na tvôj playlist.", SuccessIcon + " Usted ha establecido la miniatura de su lista de reproducción.", SuccessIcon + " Oynatma listeniz için küçük resmi ayarladınız.", SuccessIcon + " Вы установили миниатюру для своего плейлиста.", SuccessIcon + " プレイリストのサムネイルを設定しました。"];
                    const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  
                } else {
                  var TranslatedMessages = [ErrorIcon + " Failed to set your playlist thumbnail.", ErrorIcon + " Nepodařilo se nastavit miniaturu pro váš playlist.", ErrorIcon + " Nepodarilo sa nastaviť náhladovku pre tvôj playlist.", ErrorIcon + " Fallo en establecer su miniatura de la lista de reproducción.", ErrorIcon + " Oynatma listesi için küçük resminiz ayarlanamadı.", ErrorIcon + " Не смог установить миниатюру для плейлиста.", ErrorIcon + " プレイリストのサムネイルを設定できませんでした。"];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };
                  
            } else {
              peeky.userData.set(key, null, "PlaylistThumbnail");

              var TranslatedMessages = [SuccessIcon + " You have set the default thumbnail for your playlist.", SuccessIcon + " Nastavil jste základní miniaturu pro váš playlist.", SuccessIcon + " Nastavil si štandardnú náhladovku pre tvôj playlist.", SuccessIcon + " Usted ha establecido la miniatura predeterminada para su lista de reproducción.", SuccessIcon + " Oynatma listeniz için varsayılan küçük resmi ayarladınız.", SuccessIcon + " Вы установили миниатюру по умолчанию для своего плейлиста.", SuccessIcon + " プレイリストのデフォルトのサムネイルを設定しました。"];
              const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else
        if  (CommandArgument.startsWith(" clear"))  {

            var TranslatedMessages = [SuccessIcon + " You have cleared your playlist of **X001 songs**.", SuccessIcon + " Vyčistili jste svůj playlist od **X001 písniček**.", SuccessIcon + " Vymazal si **X001 piesní** zo svôjho playlistu.", SuccessIcon + " Usted ha limpiado su lista de reproducción de **X001 canciones**.", SuccessIcon + " **X001 şarkıları** oynatma listesi temizlendi.", SuccessIcon + " Вы очистили свой плейлист от **X001** песен.", SuccessIcon + " **X001曲**のプレイリストをクリアしました。"];
            const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.userData.get(key, "Playlist").length),  "color": EmbedColor};
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            peeky.userData.set(key, [], "Playlist");

        } else  {

          var MentionedMember = message.mentions.members.first();
          if  (MentionedMember)  {  var SomeoneTagged = MentionedMember  }  else  {  var SomeoneTagged = message.member;  };
          const key2 = `${SomeoneTagged.user.id}`;

          if  (peeky.userData.has(key2))  {

              const Playlist = peeky.userData.get(key2, "Playlist");

              if  (Playlist.length > 0)  {
                  var FinalizedPlaylist = function_NumarizeArray(Playlist.slice(0, ), ["<", ">"], null)
              }  else  {
                 var FinalizedPlaylist = "The playlist is empty.";
              };

              var Thumbnail = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fneedhelp_playlists.png?v=1584183423255";
              if  (peeky.userData.get(key2, "PlaylistThumbnail"))  {
                  Thumbnail = peeky.userData.get(key2, "PlaylistThumbnail");
              };

              const embed = {
              "image": {
                "url": Thumbnail
              },
              "description": "**" + peeky.userData.get(key2, "PlaylistName") + "**" + "\n" + 
                            function_RemoveFormatting(SomeoneTagged.displayName, "other", true) + "\n\n" +
                            "**Songs**" + "\n" + 
                            FinalizedPlaylist, // + "\n­"
              "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));

          } else {
            const embed = {"description": ErrorMessage7[Language],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          };

        };

    };

};

//Stop
if (CommandName == "stop")  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        if  (!MusicCmdCooldown.has(message.guild.id))  {
      
            if  (message.member.voice.channel)  {

                var OwnerActive = false;

                if  (message.guild.me.voice.channel && message.guild.owner && message.guild.me.voice.channel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
                    OwnerActive = true;
                };

                if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {

                    const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                    if  (connection && connection.dispatcher)  {
                        connection.dispatcher.end();
                    };
                  
                    if  (message.guild.me.voice.channel)  {
                        message.guild.me.voice.channel.leave();     
                    };

                    peeky.serverData.set(keySF, [], "Queue");
                    CurrentlyPlaying.delete(message.guild.id);

                } else {
                  var TranslatedMessages = [ErrorIcon + " Only the server owner can stop the music right now.", ErrorIcon + " Hudbu může momentálně zastavit pouze vlastník serveru.", ErrorIcon + " Iba vlastník tohoto servera môže preskočiť túto pieseň teraz.", ErrorIcon + " Sólo el dueño del servidor puede saltarse esta canción ahora mismo.", ErrorIcon + " Bu şarkıyı sadece sunucu sahibi ilerletebilir.", ErrorIcon + " Только владелец сервера может остановить эту музыку прямо сейчас.", ErrorIcon + " この音楽を今すぐ停止できるのは、サーバーの所有者だけです。"];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            } else {
              const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Skip
if (CommandName.startsWith("skip ") || CommandName == "skip")  {
      
    if  (CurrentlyPlaying.has(message.guild.id))  {
      
        if  (!MusicCmdCooldown.has(message.guild.id))  {
      
            if  (message.member.voice.channel)  {

                MusicCmdCooldown.add(message.guild.id);
                setTimeout(() => {MusicCmdCooldown.delete(message.guild.id)}, 10000);

                var OwnerActive = false;

                if  (message.guild.me.voice.channel && message.guild.owner && message.guild.me.voice.channel.members.filter(m => m.id == message.guild.owner.user.id).map(m => m).length > 0)  {
                    OwnerActive = true;
                };

                if  ((OwnerActive == true && message.author.id == message.guild.owner.user.id) || OwnerActive == false)  {

                    var CommandArgument = CommandName.split("skip ")[1];
                    if  (CommandArgument && peeky.serverData.get(keySF, "Queue").includes(CommandArgument) && peeky.serverData.get(keySF, "Queue")[0] !== CommandArgument)  {
                        var Index = peeky.serverData.get(keySF, "Queue").indexOf(CommandArgument);
                        peeky.serverData.observe(keySF, "Queue").splice(Index, 1);
                        const embed = {"description": SuccessIcon + " The song has been removed from the queue.", "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    } else {
                      const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                      if  (connection && connection.dispatcher)  {
                          connection.dispatcher.end();
                      };
                    };

                } else {
                  var TranslatedMessages = [ErrorIcon + " Only the server owner can skip the song right now.", ErrorIcon + " Písniku může momentálně přeskočit pouze vlastník serveru.", ErrorIcon + " Iba vlastník tohoto servera môže zastaviť hudbu teraz.", ErrorIcon + " Sólo el dueño del servidor puede detener esta música ahora mismo.", ErrorIcon + " Bu şarkıyı sadece sunucu sahibi durdurabilir.", ErrorIcon + " Только владелец сервера может пропустить эту песню прямо сейчас.", ErrorIcon + " この曲を今すぐスキップできるのは、サーバーの所有者だけです。"];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            } else {
              const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor};
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };
      
    } else {
      const embed = {"description": ErrorMessage12[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//GuessTheSong  
if (CommandName == "guessthesong")  {

    if  (!CurrentlyPlaying.has(message.guild.id) && !ActiveMinigames.has(message.guild.id))  {

        if  (message.member.voice.channel)  {
          
            const voiceChannel  = message.member.voice.channel;
            var LastMember = message.member;
            var ChosenSong = Math.floor((Math.random() * YoutubeSongs.length));
          
            InfoMessages.push(InfoIcon + " Full Song: <" + YoutubeSongs[ChosenSong][0] + ">");
            ActiveMinigames.add(message.guild.id);  
            CurrentlyPlaying.add(message.guild.id);
            
            setTimeout(() => {
                ActiveMinigames.delete(message.guild.id);
                CurrentlyPlaying.delete(message.guild.id)
            }, 30000);
          
            if  (voiceChannel.permissionsFor(peeky.user).has('CONNECT' && 'SPEAK'))  {
  
                await voiceChannel.join().then(async connection => {

                    const stream = ytdl(YoutubeSongs[ChosenSong][0]);
                    const dispatcher = await connection.play(stream, StreamOptions);
                    const LengthDate = new Date();  LengthDate.setMinutes(LengthDate.getMinutes() + (30 / 60));
          
                    peeky.serverData.set(keySF, "Guess the Song", "Title");
                    peeky.serverData.set(keySF, DefaultBackground, "Thumbnail");
                    peeky.serverData.set(keySF, "", "Author");
                    peeky.serverData.set(keySF, LengthDate, "Length");
                    peeky.serverData.set(keySF, new Date(), "Started");
                    peeky.serverData.set(keySF, "", "Link");

                    const embed = {"description": "**Try to guess the name of this song!**" + "\n" + YoutubeSongs[ChosenSong][2],  "color": EmbedColor};
                    message.channel.send({ embed });

                    message.channel.awaitMessages(response => response.content.toLowerCase() == YoutubeSongs[ChosenSong][1].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {

                        LastMember = collected.first().member;
                        var key2 = `${LastMember.user.id}`;

                        //Gamer Badge
                        if  (peeky.userData.has(key2) && !peeky.userData.has(key2, "GamerBadge"))  {
                            peeky.userData.set(key2, true, "GamerBadge");
                            InfoMessages.push(InfoMessage1[Language]);
                        };
                            
                        if  (YoutubeSongs[ChosenSong][2] == "Hard" && peeky.peekyData.get("weeklychallenge", "data")[0] == "song_master" && function_ChallengeRewards(key2, peeky.peekyData.get("weeklychallenge", "data"), "LastWeeklyChallenge") == true)  {
                            InfoMessages.push(InfoMessage5[Language]);
                        };

                        if  (peeky.userData.has(key2))  {
                            peeky.userData.math(key2, "+", 100, "Exp");
                        };

                        const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has guessed the song's name!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                        message.channel.send({ embed });

                        //const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                        if  (connection && connection.dispatcher)  {
                            connection.dispatcher.end();
                        };
                        message.guild.me.voice.channel.leave();
                      
                    })
                    .catch(collected => {
                        const embed = {"description": ErrorIcon + " The song's name was **" + YoutubeSongs[ChosenSong][1] + "**." + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                        message.channel.send({ embed });

                        const connection = peeky.voice.connections.find(c => c.channel.id == message.member.voice.channel.id);
                        if  (connection && connection.dispatcher)  {
                            connection.dispatcher.end();
                        };
                        message.guild.me.voice.channel.leave();
                    });

                });
              
            };

        } else {
          const embed = {"description": ErrorMessage22[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Type Racer
if (CommandName == "typeracer")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        ActiveMinigames.add(message.guild.id);

        var LastMember = message.member;
        var ChosenQuestion = Math.floor((Math.random() * RandomWords.length));
        var Answer = RandomWords[ChosenQuestion];

        setTimeout(async () => {
      
            const canvas = Canvas.createCanvas(250, 100);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage(MainBackground);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 1; 
            ctx.shadowOffsetY = 1;
            ctx.textAlign = "center";
            ctx.font = "32px " + Setting.DefaultFont;
            ctx.fillText(Answer, 125, 55, canvas.width - 30);

            const attachment = await new Discord.MessageAttachment(canvas.toBuffer(), 'peeky.png', { quality: 0.1 });
            
            await message.channel.send("", attachment).catch(error => ErrorBag.add(error));

            message.channel.awaitMessages(response => response.content.toLowerCase() == Answer.toLowerCase(), { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {

                LastMember = collected.first().member;
                var key2 = `${LastMember.user.id}`;

                //Gamer Badge
                if  (peeky.userData.has(key2) && !peeky.userData.has(key2, "GamerBadge"))  {
                    peeky.userData.set(key2, true, "GamerBadge");
                    InfoMessages.push(InfoMessage1[Language]);
                };

                if  (peeky.userData.has(key2))  {
                    peeky.userData.math(key2, "+", 25, "Exp");
                };

                const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** was the first to type the word!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                message.channel.send({ embed });

                ActiveMinigames.delete(message.guild.id);

            })
            .catch(collected => {
                const embed = {"description": ErrorIcon + " No one has managed to type the word.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                ActiveMinigames.delete(message.guild.id);
            });
          
        }, 5000);
      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//TriviaQuestions  
if (CommandName == "triviaquestions")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        ActiveMinigames.add(message.guild.id);

        var LastMember = message.member;
        var ChosenQuestion = Math.floor((Math.random() * TriviaQuestions.length));
        var Answers = function_ShuffleArray(TriviaQuestions[ChosenQuestion].slice(1, 4));
      
        const embed = {"description": "**" + TriviaQuestions[ChosenQuestion][0] + "**\n" + TriviaQuestions[ChosenQuestion][4] + "\n\n" + function_NumarizeArray(Answers, ["", ""], null),  "color": EmbedColor}; 
        message.channel.send({ embed });
    
        message.channel.awaitMessages(response => response.content.toLowerCase() == TriviaQuestions[ChosenQuestion][1][0].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
        .then(collected => {

            LastMember = collected.first().member;
            var key2 = `${LastMember.user.id}`;

            //Gamer Badge
            if  (peeky.userData.has(key2) && !peeky.userData.has(key2, "GamerBadge"))  {
                peeky.userData.set(key2, true, "GamerBadge");
                InfoMessages.push(InfoMessage1[Language]);
            };

            if  (peeky.userData.has(key2))  {
                peeky.userData.math(key2, "+", 50, "Exp");
            };

            const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has chosen the right answer!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
            message.channel.send({ embed });

            ActiveMinigames.delete(message.guild.id);

        })
        .catch(collected => {
            const embed = {"description": ErrorIcon + " The question's answer was **" + TriviaQuestions[ChosenQuestion][1][0] + "**.",  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            ActiveMinigames.delete(message.guild.id);
        });
      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Hangman  
if (CommandName == "hangman")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        ActiveMinigames.add(message.guild.id);

        var ChosenQuestion = Math.floor((Math.random() * RandomWords.length));
        var Answer = RandomWords[ChosenQuestion];
        var CensoredAnswer = "";
        var GuessedLetters = [];
        var WrongLetters = [];
        var RightLetters = [];
        var LastMember = message.member;
        var HangmanLevels = [
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel0.png?v=1580464414092",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel1.png?v=1580464415444",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel2.png?v=1580464417011",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel3.png?v=1580464419122",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel4.png?v=1580464421007",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel5.png?v=1580464423125",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel6.png?v=1580464425032",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel7.png?v=1580464427313",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel8.png?v=1580464429259",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel9.png?v=1580464431763",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel10.png?v=1580464433957",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel11.png?v=1580464435591",
            "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Flevel12.png?v=1580464437719",
        ];

        for (var i = 0; i < Answer.length; i++) {
            CensoredAnswer = CensoredAnswer + "-";
        };
      
        function Generate(message)  {

            if  (WrongLetters.length < HangmanLevels.length && CensoredAnswer !== Answer.toLowerCase())  {

                message.channel.awaitMessages(response => !response.author.bot && response.content.length == 1 && !GuessedLetters.includes(response.content.toLowerCase()), { max: 1, time: 10000, errors: ['time'] })
                .then(collected => {

                    var letter = collected.first().content.toLowerCase();
                    LastMember = collected.first().member;

                    GuessedLetters.push(collected.first().content.toLowerCase());
                    RightLetters.push(letter);

                    if  (Answer.toLowerCase().includes(letter))  {
                        var Temp = "";
                        for (var i = 0; i < Answer.length; i++) {

                            if  (RightLetters.includes(Answer.toLowerCase()[i]))  {
                                Temp = Temp + Answer.toLowerCase()[i];
                            } else {
                              Temp = Temp + "-";
                            };
                        };
                        CensoredAnswer = Temp;
                    } else {
                      WrongLetters.push(letter);
                    };

                    var embed = { description: "**Hangman**\n" + CensoredAnswer + "\n\n" + WrongLetters.join(", "), "image": { "url": HangmanLevels[WrongLetters.length] },  "color": EmbedColor };
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));                 
                  
                    if  (WrongLetters.length >= HangmanLevels.length - 1 || CensoredAnswer == Answer.toLowerCase())  {
                      
                        if  (CensoredAnswer == Answer.toLowerCase())  {
                          
                            var key2 = `${LastMember.user.id}`;
                          
                            if  (peeky.peekyData.get("dailychallenge", "data")[0] == "clean_hangman" && function_ChallengeRewards(key2, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
                                InfoMessages.push(InfoMessage4[Language]);
                            };
                            
                            if  (WrongLetters.length == 0 && peeky.peekyData.get("weeklychallenge", "data")[0] == "perfect_hangman" && function_ChallengeRewards(key2, peeky.peekyData.get("weeklychallenge", "data"), "LastWeeklyChallenge") == true)  {
                                InfoMessages.push(InfoMessage5[Language]);
                            };
                          
                            const embed = {"description": SuccessIcon +  " **" + function_RemoveFormatting(LastMember.displayName, "other", true) + "** has completed the word!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                            message.channel.send({ embed });
                      
                            ActiveMinigames.delete(message.guild.id);
                          
                            //Gamer Badge
                            if  (peeky.userData.has(key2) && !peeky.userData.has(key2, "GamerBadge"))  {
                                peeky.userData.set(key2, true, "GamerBadge");
                            };

                            if  (peeky.userData.has(key2))  {
                                peeky.userData.math(key2, "+", 250, "Exp");
                            };
                          
                        } else {
                          const embed = {"description": ErrorIcon + " The word was **" + Answer + "**.",  "color": EmbedColor}; 
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                      
                          ActiveMinigames.delete(message.guild.id);
                        };
                    
                    } else {
                      Generate(message);
                    };

                })
                .catch(collected => {
                    const embed = {"description": ErrorIcon + " The word was **" + Answer + "**.",  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                      
                    ActiveMinigames.delete(message.guild.id);
                });
              
            };

      };

      Generate(message);

      var embed = { description: "**Hangman**\n" + CensoredAnswer + "\n\n" + WrongLetters.join(", "), "thumbnail": { "url": HangmanLevels[WrongLetters.length] },  "color": EmbedColor };
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Akinator  
if  (CommandName == "akinator")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        ActiveMinigames.add(message.guild.id);
      
        const Responses = [  "Yes", "No", "Don't know", "Probably", "Probably not"  ];
        const WinResponses = [  "Yes", "No"  ];;
        var   Step = 0;
        var   Region = 'en';
      
        await aki.start(Region).then(data => {

            function Generate(message)  {

                message.channel.awaitMessages(response => response.author.id == message.author.id && Responses.map(v => v.toLowerCase()).indexOf(response.content.toLowerCase()) >= 0, { max: 1, time: 10000, errors: ['time'] })
                .then(async collected => {

                    var Continue = false;
                    var response = collected.first();
                    const nextInfo = await aki.step(Region, data.session, data.signature, Responses.map(v => v.toLowerCase()).indexOf(response.content.toLowerCase()), Step, data.frontAddr);

                    Step = nextInfo.nextStep;

                    if  (nextInfo.progress >= 80 || Step >= 100)  {

                        const win = await aki.win(Region, data.session, data.signature, Step);
                        var WinIndex = 0;

                        var Header = "**Question #" + (Step + 1) + "**\n";
                        var Subheader = "I'm " + Number(nextInfo.progress).toFixed(1) + "% sure that it\'s " + win.answers[WinIndex].name + ".";
                        var Embedthumbnail = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fakinator_thinking.png?v=1586230434786";
                        var ImageUrl = win.answers[WinIndex].absolute_picture_path;
                        var FooterText = WinResponses.join(", ");
                      
                        message.channel.awaitMessages(response => response.author.id == message.author.id && WinResponses.map(v => v.toLowerCase()).indexOf(response.content.toLowerCase()) >= 0, { max: 1, time: 10000, errors: ['time'] })
                        .then(collected => {
                          
                            var response = collected.first();
                          
                            if  (response.content.toLowerCase() == "yes") {

                                var Header = "**Akinator Wins**\n";
                                var Subheader = "Yay, I guessed it one more time!";
                                var Embedthumbnail = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fakinator_end.png?v=1586230426245";
                                var ImageUrl = null;
                                var FooterText = "­";
                              
                                if  ((Step + 1) >= 25 && peeky.peekyData.get("dailychallenge", "data")[0] == "beat_akinator" && function_ChallengeRewards(key, peeky.peekyData.get("dailychallenge", "data"), "LastDailyChallenge") == true)  {
                                    InfoMessages.push(InfoMessage4[Language]);
                                };
                                 
                            } else {

                              var Header = "**Akinator Loses**\n";
                              var Subheader = "Congratulations, you've beaten me!\n";
                              var Embedthumbnail = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fakinator_end.png?v=1586230426245";
                              var ImageUrl = null;
                              var FooterText = "­";
                          
                              //Gamer Badge
                              if  (peeky.userData.has(key) && !peeky.userData.has(key, "GamerBadge"))  {
                                  peeky.userData.set(key, true, "GamerBadge");
                              };

                              if  (peeky.userData.has(key))  {
                                  peeky.userData.math(key, "+", 350, "Exp");
                              };
                              
                            };                       

                            var embed = { description: Header + Subheader, "footer": { "text": FooterText }, "thumbnail": { "url": Embedthumbnail }, "image": { "url": ImageUrl },  "color": EmbedColor };
                            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                            ActiveMinigames.delete(message.guild.id);
                          
                        }).catch(collected => {
                            ActiveMinigames.delete(message.guild.id);
                        });

                    } else  {

                      var Header = "**Question #" + (Step + 1) + "**\n";
                      var Subheader = nextInfo.nextQuestion;
                      var Embedthumbnail = "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fakinator_default.png?v=1586165634346";
                      var ImageUrl = null;
                      var FooterText = Responses.join(", ");

                      Continue = true;

                    };

                    var embed = { description: Header + Subheader, "footer": { "text": FooterText }, "thumbnail": { "url": Embedthumbnail }, "image": { "url": ImageUrl },  "color": EmbedColor };
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                    if  (Continue == true)  {
                        Generate(message);
                    };

                })
                .catch(collected => {
                    const embed = {"description": ErrorIcon + " You have ran out of time to respond.",  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                    ActiveMinigames.delete(message.guild.id);
                });

            };

            Generate(message);

            var embed = { description: "**Question #" + 1 + "**\n" + data.question, "footer": { "text": Responses.join(", ") }, "thumbnail": { "url": "https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fakinator_default.png?v=1586110261505" },  "color": EmbedColor };
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
          
        })
        .catch(collected => {
            const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            
            ActiveMinigames.delete(message.guild.id);
        });

    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//DrawAndGuess  
if  (CommandName == "drawandguess")  {

    if  (!ActiveMinigames.has(message.guild.id))  {

        var ChosenQuestion = Math.floor((Math.random() * RandomWords.length));
        var LastMember = message.member;
        var Active = false;

        ActiveMinigames.add(message.guild.id);
      
        var embed = {"description": "You have to draw **" + RandomWords[ChosenQuestion] + "** within **1 minute**.", "image": {  "url": "https://cdn.glitch.com/a3bbad00-1612-4e6e-b3cf-731aa68e37c4%2Fempty_canvas.png"  }, "color": EmbedColor}; 
        await function_DirectMessage(message.author.id, {  embed  });

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

                    const embed = {"description": InfoIcon + " Time's running low, so here's a hint: " + Hint + ".",  "color": EmbedColor}; 
                    message.channel.send({ embed });
                  
                };
            
            }, 20000);
          
            message.channel.awaitMessages(response => response.author.id !== message.author.id && response.content.toLowerCase() == RandomWords[ChosenQuestion].toLowerCase(), { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
              
                LastMember = collected.first().member;
                var key2 = `${LastMember.user.id}`;
              
                Active = false;

                 //Gamer Badge
                 if  (peeky.userData.has(key2) && !peeky.userData.has(key2, "GamerBadge"))  {
                     peeky.userData.set(key2, true, "GamerBadge");
                     InfoMessages.push(InfoMessage1[Language]);
                 };

                 if  (peeky.userData.has(key2))  {
                     peeky.userData.math(key2, "+", 250, "Exp");
                 };

                 const embed = {"description": SuccessIcon +  " Congratulations, **" + function_RemoveFormatting(collected.first().member.displayName, "other", true) + "** has guessed the word!" + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor}; 
                 message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                 
                 ActiveMinigames.delete(message.guild.id);
            })
            .catch(collected => {
                const embed = {"description": ErrorIcon + " The word was **" + RandomWords[ChosenQuestion] + "**.",  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                
                ActiveMinigames.delete(message.guild.id);
            });
             
        })
        .catch(collected => {          
              const embed = {"description": ErrorIcon + " Sorry, but **" + function_RemoveFormatting(message.member.displayName, "other", true) + "** has ran out of time to draw.",  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
              
              ActiveMinigames.delete(message.guild.id);
        });

      
    } else {
      const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
};

//Giveaway
if  (CommandName == "giveaway")  {

    if  (message.member.permissions.has("MANAGE_GUILD") || message.channel.name.toLowerCase() == "giveaways")  {

        if  (message.channel.permissionsFor(peeky.user).has('ADD_REACTIONS') && message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {
          
            if  (!CommandCooldown.has("giveaway" + message.guild.id))  {

                if  (peeky.serverData.get(keySF, "ActiveGiveaways").length < Setting.GiveawayLimit)  {

                    CommandCooldown.add("giveaway" + message.guild.id)

                    var CreationProgress = 0;
                    var GiveawayInfo = [  "nothing", 1, 1, Date.now(), 0, message.channel.id, message.author.id, null  ];
                    var LastFeedbackMsg = null;

                    function Generate(message)  {

                        if  (CreationProgress < 4)  {

                            CreationProgress ++;

                            var embed = {"description": ErrorMessage13[Language],  "color": EmbedColor};
                          
                            if  (CreationProgress == 1)  {
                                var TranslatedMessages = [
                                    InfoIcon + " Before we start the giveaway, can you tell me what is gonna be the prize?",
                                    InfoIcon + " Než začnem se soutěží, můžete mi říct co o se hraje?",
                                    InfoIcon + " Predtým než začneme rozdávanie,môžeš mi povedať čo bude cena?",
                                    InfoIcon + " Antes de empezar el sorteo, ¿puedes decirme cuál será el premio?",
                                    InfoIcon + " Çekilişe başlamadan önce bana ödülün ne olacagini söyleyebilir misin?",
                                    InfoIcon + " Перед тем, как мы начнем конкурс, не могли бы вы сказать мне, какой будет приз?",
                                    InfoIcon + " プレゼントを始める前に、賞品は何になるのか教えてもらえますか?",
                                ];
                              
                                embed = { description: TranslatedMessages[Language], "color": EmbedColor };
                            } else 
                            if  (CreationProgress == 2)  {
                                var TranslatedMessages = [
                                    InfoIcon + " Also, do you have an icon for the giveaway? Paste the link or just say \"none\".",
                                    InfoIcon + " Pokud máte nějaký obrázek pro tuto soutěž, vložte sem odkaz anebo napište \"none\.",
                                    InfoIcon + " Also, do you have an icon for the giveaway? Paste the link or just say \"none\".",
                                    InfoIcon + " Además, ¿tienes un icono para el sorteo?  Pegue el enlace si es así, de lo contrario diga \"none\".",
                                    InfoIcon + " Ayrıca, hediye için bir simgeniz var mı? Varsa bağlantıyı yapıştırın, aksi takdirde \"none\" deyin.",
                                    InfoIcon + " А еще, у вас есть икона для подарка?  Вставьте ссылку, если да, иначе просто скажите \"none\".",
                                    InfoIcon + " また、プレゼントのアイコンはありますか？リンクを貼り付けます、それ以外の場合は「none」と発声します。",
                                ];
                              
                                embed = { description: TranslatedMessages[Language], "color": EmbedColor };
                            } else 
                            if  (CreationProgress == 3)  {
                                var TranslatedMessages = [
                                    InfoIcon + " Sweet, now tell me what is gonna be the amount of winners in this giveaway.",
                                    InfoIcon + " Dobre, teraz mi povedz koľko bude počet výhercov pre toto rozdávanie.",
                                    InfoIcon + " Sweet, now tell me what is gonna be the amount of winners in this giveaway.",
                                    InfoIcon + " Güzel, şimdi söyle bana bu hediyenin kazananlari kaç kişi olacak.",
                                    InfoIcon + " Bien, ahora dime cuántos ganadores habra en este sorteo.",
                                    InfoIcon + " Отлично, теперь скажи мне, сколько будет победителей в этом конкурсе.",
                                    InfoIcon + " いいですね、プレゼントは何人の勝者を持っていますか?",
                                ];
                              
                                embed = { description: TranslatedMessages[Language], "color": EmbedColor };
                            } else 
                            if  (CreationProgress == 4)  {
                                var TranslatedMessages = [
                                    InfoIcon + " Now the last thing, how long is the giveaway gonna be in minutes?",
                                    InfoIcon + " Poslední otázka, kolik minut bude tato soutěž trvat?",
                                    InfoIcon + " A teraz posledná vec, aké dlhé bude rozdávanie v minútach?",
                                    InfoIcon + " Ahora lo último, ¿cuánto tiempo va a durar el sorteo en minutos?",
                                    InfoIcon + " Şimdi son şey, çekiliş kaç dakika sürecek?",
                                    InfoIcon + " И последнее, как долго будет продлиться конкурс в минутах?",
                                    InfoIcon + " さて、プレゼントは何分で終わるの？",
                                ];
                              
                                embed = { description: TranslatedMessages[Language], "color": EmbedColor };
                            };
                          
                            message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(msg => {
                                LastFeedbackMsg = msg;
                            });

                            message.channel.awaitMessages(response => !response.author.bot && response.author.id == message.author.id, { max: 1, time: 10000, errors: ['time'] })
                            .then(collected => {

                                var Answer = collected.first().content;
                                var CanReply = false;
                                var embed = {"description": ErrorMessage13[Language],  "color": EmbedColor};
                              
                                var TranslatedMessages = [
                                    ErrorIcon + " The provided argument is incorrect and the giveaway creating was cancelled.",
                                    ErrorIcon + " Nějaké argumenty byly špatné a vytváření soutěže bylo zrušeno.",
                                    ErrorIcon + " Zadaný argument je nesprávny a vytváranie darčekov bolo zrušené.",
                                    ErrorIcon + " Yanliş argüman, çekiliş iptal edildi.",
                                    ErrorIcon + " El argumento proporcionado es incorrecto y la creación del sorteo fue cancelada.",
                                    ErrorIcon + " Предоставленный аргумент неверен, и создание конкурса было отменено.",
                                    ErrorIcon + " 指定された引数が誤った、プレゼントの作成がキャンセルされました。",
                                ];

                                if  (CreationProgress == 1)  {
                                    if  (Answer && Answer.length > 0)  {
                                        GiveawayInfo[0] = function_ProperSlice(function_RemoveFormatting(Answer, "other", true), 50);
                                        Generate(message);
                                    } else {
                                      embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                                      CanReply = true;
                                    };  
                                } else 
                                if  (CreationProgress == 2)  {
                                    if  (Answer)  {
                                        if  (Answer.toLowerCase() !== "none" && function_DetectLink(Answer))  {
                                            GiveawayInfo[7] = Answer;
                                            Generate(message);
                                        } else
                                        if  (Answer.toLowerCase() == "none")  {
                                            GiveawayInfo[7] = null;
                                            Generate(message);
                                        };
                                    } else {
                                      embed = {"description": TranslatedMessages[Language],  "color": EmbedColor}; 
                                      CanReply = true;
                                    };   
                                } else
                                if  (CreationProgress == 3)  {
                                    if  (Answer && !isNaN(Answer) && Answer > 0 && Answer <= 10)  {
                                        GiveawayInfo[1] = Answer;
                                        Generate(message);
                                    } else {
                                      embed = {"description": TranslatedMessages[Language],  "color": EmbedColor}; 
                                      CanReply = true;
                                    };    
                                } else 
                                if  (CreationProgress == 4)  {
                                    if  (Answer && !isNaN(Answer) && Answer >= 1 && Answer <= 43000)  {
                                        GiveawayInfo[2] = Answer * MinuteMs;
                                        Generate(message);
                                    } else {
                                      embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                                      CanReply = true;
                                    };   
                                };
                                
                                if  (CanReply)  {
                              
                                    message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(msg => {
                                        msg.delete({ timeout: 10000 });
                                    });
                                  
                                };
                              
                                collected.first().delete().catch(error => ErrorBag.add(error));
                              
                                if  (LastFeedbackMsg)  {
                                    LastFeedbackMsg.delete().catch(error => ErrorBag.add(error));
                                };

                            })
                            .catch(collected => {
                                var TranslatedMessages = [
                                    ErrorIcon + " The giveaway creation has been cancelled.",
                                    ErrorIcon + " Vytváření soutěže bylo zrušeno.",
                                    ErrorIcon + " Vytváranie darčekov bolo zrušené.",
                                    ErrorIcon + " Çekiliş iptal edildi.",
                                    ErrorIcon + " Creación del sorteo fue cancelada.",
                                    ErrorIcon + " Создание конкурса было отменено.",
                                    ErrorIcon + " プレゼントの作成はキャンセルされました。", //jap
                                ];
                              
                                const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor}; 
                                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                              
                                CommandCooldown.delete("giveaway" + message.guild.id);
                            });

                        } else {
                          var embed = { "description": 
                                           "**" + GiveawayInfo[0] + "**" + "\n" +
                                          "Host: " + "<@" + GiveawayInfo[6] + ">" + "\n" +
                                          "Max Winners: " + GiveawayInfo[1],
                                        "thumbnail":  {  "url": GiveawayInfo[7]  },
                                        "footer": { "text": "This giveaway ends on " + function_DateFormat(Date.now() + GiveawayInfo[2], "Both", peeky.serverData.get(keySF, "timezone")) + "." },
                                        "color": EmbedColor};
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error)).then(m => {
                              GiveawayInfo[4] = m.id;
                              peeky.serverData.observe(keySF, "ActiveGiveaways").push(GiveawayInfo);

                              m.react("🎁").catch(error => ErrorBag.add(error));
                          });
                              
                          CommandCooldown.delete("giveaway" + message.guild.id);
                        };

                    };

                    Generate(message);

                    } else {
                              
                      var TranslatedMessages = [
                          ErrorIcon + " You cannot create any more giveaways right now.",
                          ErrorIcon + " Zatím nemůžete vytvořit více souteží.",
                          ErrorIcon + " Nemôžeš vytvoriť už žiadne rozdávanie práve teraz.",
                          ErrorIcon + " YNo puedes crear más sorteos ahora mismo.",
                          ErrorIcon + " Şu anda başka çekiliş oluşturamazsiniz.",
                          ErrorIcon + " Вы не можете больше создавать конкурсы прямо сейчас.",
                          ErrorIcon + " 今はプレゼントをこれ以上作成できません。",
                      ];

                      const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };
          
              } else {
                const embed = {"description": CooldownMessage1[Language],  "color": EmbedColor}; 
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
              };

        } else {
          const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    } else {
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
      
};

//Call
/*if  (CommandName.startsWith("call"))  {

    var CommandArgument = CommandName.split("call")[1];
  
    if  (CommandArgument.startsWith(" "))  {
  
        CommandArgument = CommandArgument.replace(" ", ""); 
      
        if  (!CallingServers.has(message.guild.id))  {

            CallingServers.add(message.guild.id);
          
            if  (peeky.guilds.has(CommandArgument))  {
          
                if  (!isNaN(CommandArgument))  {
                  
                    var otherGuild = peeky.guilds.get(CommandArgument);
                  
                    if  (!CallingServers.has(otherGuild.id))  {

                        CallingServers.add(otherGuild.id);
                      
                        message.channel.awaitMessages(response => !response.author.bot && response.content.toLowerCase() == "accept", { max: 1, time: 10000, errors: ['time'] })
                        .then(collected => {

                            var Answer = collected.first();

                        })
                        .catch(collected => {

                            const embed = {"description": ErrorIcon + " The server has not responded to the call.",  "color": EmbedColor}; 
                            message.channel.send({ embed }).catch(error => ErrorBag.add(error));

                            CallingServers.delete(otherGuild.id);
                            CallingServers.delete(message.guild.id);
                        });
                        
                    }  else {
                      const embed = {"description": ErrorIcon + " That server is already calling someone.", "color": EmbedColor}; 
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };                       

                } else {
                  const embed = {"description": ErrorIcon + " That server surely doesn't exist.", "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };
            
            } else {
              const embed = {"description": ErrorIcon + " I can't find the server that you're trying to call.", "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };
          
        } else {
          const embed = {"description": CooldownMessage1[Language], "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    }
     else if (CommandArgument == "")
    {
     const embed = {"description": ErrorMessage18[Language], "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};*/

/*//NSFW
if  (CommandName.startsWith("nsfw"))  {
  
    if  (message.channel.nsfw)  {

        var CommandArgument = CommandName.split("nsfw")[1];

        if  (CommandArgument.startsWith(" "))  {

            CommandArgument = CommandArgument.replace(" ", "");
          
            const attachment = await new Discord.MessageAttachment("https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fnsfw_tutorial.png?v=1584349105639", 'peeky.png', { quality: 0.1 });
            message.channel.send("If you wanna see some hot **" + function_RemoveFormatting(CommandArgument, "other", true) + "** action, follow this tutorial!", attachment).catch(error => ErrorBag.add(error));

        }
         else if (CommandArgument == "")
        {
         const embed = {"description": ErrorMessage18[Language], "color": EmbedColor}; 
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    } else {
     const embed = {"description": ErrorMessage23[Language], "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
};*/

//Mute
if  (CommandName.startsWith("mute"))  {
  
    var CommandArgument = CommandName.split("mute")[1];

    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = CommandArgument.replace(" ", "");

        if  (message.member.permissions.has("MUTE_MEMBERS"))  {

            if  (message.guild.me.permissions.has("MANAGE_ROLES"))  {

                var MentionedMember = message.mentions.members.first();
                var name = peeky.serverData.get(keySF, "muted_role");
                var Role = message.guild.roles.cache.find(role => role.name == name);

                if  (MentionedMember)  {

                    if  (Role)  {

                        if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && !MentionedMember.roles.cache.has(Role.id))  {

                            await MentionedMember.roles.add(Role.id, "Muted by " + message.author.tag + ".").catch(error => {
                                const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                                ErrorBag.add(error); Failed = true;
                            });

                        if  (Failed == false)  {
                            var TranslatedMessages = [SuccessIcon + " I have muted **X001** at **X002**'s request.", SuccessIcon + " Ztlumil jsem **X001** na požádání od **X002**.", SuccessIcon + " Mutnul som **X001** na **X002* požiadavku.", SuccessIcon + " He silenciado a **X001** a petición de **X002**.", SuccessIcon + " **X001**'i **X002**'nin isteği üzerine susturdum.", SuccessIcon + " Я приглушил **X001** по запросу **X002**.", SuccessIcon + " **X001**は**X002**の要請でミュートされている。"];
                            const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(MentionedMember.displayName, "other", true)).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                            message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        };

                        } else {
                          var TranslatedMessages = [ErrorIcon + " You cannot mute that user.", ErrorIcon + " Tohoto uživatele ztlumit nemůžete.", ErrorIcon + " Nemôžeš mutnúť tohoto uživateľa.", ErrorIcon + " No puedes silenciar a ese usuario.", ErrorIcon + " Bu kullanıcının susturamazsınız.", ErrorIcon + " Вы не можете отключить звук этого пользователя.", ErrorIcon + " そのユーザーのミュートを解除することはできません。"];
                          const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        };

                    } else {
                      const embed = {"description": ErrorMessage14[Language].replace("X001", name),  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
                    };

                } else {
                  const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor};  
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            } else {
             const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
             message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
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
                var Role = message.guild.roles.cache.find(role => role.name == name);

                if  (MentionedMember)  {

                    if  (Role)  {

                        if  (!MentionedMember.permissions.has("MUTE_MEMBERS") && MentionedMember.id !== message.author.id && MentionedMember.roles.cache.has(Role.id))  {

                            await MentionedMember.roles.remove(Role.id, "Unmuted by " + message.author.tag + ".").catch(error => { 
                                const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                                ErrorBag.add(error); Failed = true;
                            });

                            if  (Failed == false)  {
                                var TranslatedMessages = [SuccessIcon + " I have unmuted **X001** at **X002**'s request.", SuccessIcon + " Odtlumil jsem **X001** na požádání od **X002**.", SuccessIcon + " Unmutnul som **X001** na **X002* požiadavku.", SuccessIcon + " He anulado el silencio de **X001** a petición de **X002**.", SuccessIcon + " **X002**'nin isteği üzerine **X001**'in sesini açtım.", SuccessIcon + " Я отглушить **X001** по запросу **X002**.", SuccessIcon + " **X001**は**X002**の要請でミュートされている。"];
                                const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(MentionedMember.displayName, "other", true)).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                            };

                        } else {
                          var TranslatedMessages = [ErrorIcon + " You cannot unmute that user.", ErrorIcon + " Tohoto uživatele odztlumit nemůžete.", ErrorIcon + " Nemôžeš unmutnúť tohoto uživateľa.", ErrorIcon + " No puedes anular el silencio de ese usuario.", ErrorIcon + " Bu kullanıcının sesini açamazsınız.", ErrorIcon + " Вы не можете отглушить этого пользователя.", ErrorIcon + " そのユーザーのミュートを解除することはできません。"];
                          const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                        };

                    } else {
                      const embed = {"description": ErrorMessage14[Language].replace("X001", name),  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));        
                    };

                } else {
                  const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            } else {
             const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
             message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {      
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

        if  (!message.guild.members.cache.find(m => m.id == CommandArgument))  {

            await message.guild.members.ban(CommandArgument, { reason: "ID banned by " + message.author.tag + "." }).catch(error => { 
                  const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                  message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  ErrorBag.add(error); Failed = true;
            });

            if  (Failed == false)  {
                var TranslatedMessages = [SuccessIcon + " I have ID banned **X001** at **X002**'s request.", SuccessIcon + " ID Zabanoval jsem **X001 zpráv** na požádání od **X002**.", SuccessIcon + " ID Bannul som **X001** na **X002* požiadavku.", SuccessIcon + " He baneado por ID a **X001** a petición de **X002**.", SuccessIcon + " **X002**'nin isteği üzerine **X001** ID ile yasakladım.", SuccessIcon + " Я запретил **X001** по ID по запросу **X002**.", SuccessIcon + " **X001**は**X002**の要請でID-BANされている。"];
                const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.users.cache.get(CommandArgument).username).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        }
         else
        {
         var TranslatedMessages = [ErrorIcon + " You cannot ID ban someone inside the server.", ErrorIcon + " Nemůžete ID Zabanovat někoho na serveru.", ErrorIcon + " Nemôžeš ID zabanovať niekoho v serveri.", ErrorIcon + " No se puede banear por ID a alguien dentro del servidor.", ErrorIcon + " Sunucu içindeki birisinin kimliğini yasaklayamazsınız.", ErrorIcon + " Вы не можете запретить кого-то по ID внутри сервера.", ErrorIcon + " サーバーのユーザーをID-BANすることはできません。"];
         const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
         message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

        }
         else
        {
         var TranslatedMessages = [ErrorIcon + " You must enter a valid ID.", ErrorIcon + " Musíte zadat validní ID.", ErrorIcon + " Músíš zadať platnú ID.", ErrorIcon + " Debe introducir un ID válido.", ErrorIcon + " Geçerli bir ID girmelisiniz.", ErrorIcon + " Вы должны ввести действительное ID.", ErrorIcon + " 有効なIDを入力してください。"];
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

            if  (MentionedMember)  {
              
                if  (MentionedMember.bannable && !MentionedMember.permissions.has("BAN_MEMBERS"))  {
                  
                    await message.guild.members.ban(MentionedMember.user.id, { reason: "Banned by " + message.author.tag + "." }).catch(error => { 
                          const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                          ErrorBag.add(error); Failed = true;
                    });

                    if  (Failed == false)  {
                        var TranslatedMessages = [SuccessIcon + " I have banned **X001** at **X002**'s request.", SuccessIcon + " Zabanoval jsem **X001 zpráv** na požádání od **X002**.", SuccessIcon + " Bannul som **X001** na **X002* požiadavku.", SuccessIcon + " He baneado a **X001** a petición de **X002**.", SuccessIcon + " **X001**'i **X002**'nin isteği üzerine yasakladım.", SuccessIcon + " Я запретил **X001** по запросу **X002**.", SuccessIcon + " **X001**は**X002**の要請でBANされている。"];
                        const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(MentionedMember.displayName, "other", true)).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

                } else {
                  
                  if  (MentionedMember.user.id == PeekyId)  {
                      const embed = {"description": ErrorIcon + " What the fuck?",  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    } else {
                      var TranslatedMessages = [ErrorIcon + " You cannot ban that user.", ErrorIcon + " Tohoto uživatele zabanovat nemůžete.", ErrorIcon + " Nemôžeš zabanovať tohoto uživateľa.", ErrorIcon + " Usted no puede banear a aquel usuario.", ErrorIcon + " Bu kullanıcıyı yasaklayamazsınız.", ErrorIcon + " Вы не можете запретить этого пользователя.", ErrorIcon + " そのユーザーをBANすることはできません。"];
                      const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                  };
                  
                };
              
            } else {
              const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    } else {
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};
  
//Kick
if  (CommandName.startsWith("kick"))  {

    if  (message.member.permissions.has("KICK_MEMBERS"))  {

        if  (message.guild.me.permissions.has("KICK_MEMBERS"))  {

            var MentionedMember = message.mentions.members.first();

            if  (MentionedMember)  {
              
                if  (MentionedMember.kickable && !MentionedMember.permissions.has("KICK_MEMBERS"))  {

                    await MentionedMember.kick("Kicked by " + message.author.tag + ".").catch(error => { 
                          const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                          ErrorBag.add(error); Failed = true;
                    });

                    if  (Failed == false)  {
                        var TranslatedMessages = [SuccessIcon + " I have kicked **X001** at **X002**'s request.", SuccessIcon + " Vykopl jsem **X001 zpráv** na požádání od **X002**.", SuccessIcon + " Vyhodul som **X001** na **X002* požiadavku.", SuccessIcon + " He kickeado a **X001** a petición de **X002**.", SuccessIcon + " **X001**'i **X002**'nin isteği üzerine attım.", SuccessIcon + " выгнал **X001** по запросу **X002**.", SuccessIcon + " **X001**は**X002**の要請でキックされている。"];
                        const embed = {"description": TranslatedMessages[Language].replace("X001", function_RemoveFormatting(MentionedMember.displayName, "other", true)).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                        message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    };

                } else {
                  var TranslatedMessages = [ErrorIcon + " You cannot kick that user.", ErrorIcon + " Tohoto uživatele vykopnout nemůžete.", ErrorIcon + " Nemôžeš vyhodiť tohoto uživateľa.", ErrorIcon + " Usted no puede kickear a aquel usuario.", ErrorIcon + " Bu kullanıcıyı atamazsın.", ErrorIcon + " Вы не можете выгнать этого пользователя.", ErrorIcon + " そのユーザーをキックることはできません。"];
                  const embed = {"description": TranslatedMessages[Language],  "color": EmbedColor};
                };
              
            } else {
              const embed = {"description": ErrorMessage3[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };

        } else {
          const embed = {"description": PermissionsMessageError3[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    } else {
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
     message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };

};

//Slowmode
if  (CommandName.startsWith("slowmode"))  {
  
    var CommandArgument = CommandName.split("slowmode")[1];

    if  (CommandArgument.startsWith(" "))  {

    if  (message.member.permissions.has("MANAGE_CHANNELS"))  {
    
        if  (message.guild.me.permissions.has('MANAGE_CHANNELS'))  {

            CommandArgument = CommandArgument.replace(" ", "");

            if  (isNaN(CommandArgument) == false && CommandArgument <= 21600)  {

                message.channel.setRateLimitPerUser(CommandArgument, "Slowmode set by " + message.author.tag + ".").catch(error => ErrorBag.add(error));
                  
                var TranslatedMessages = [SuccessIcon + " I have set the slowmode to **X001 seconds** at **X002**'s request.", SuccessIcon + " Nastavil jsem pomalý režím na **X001 vteřin** na požádání od **X002**.", SuccessIcon + " Nastavil som slowmode na **X001 sekundy** na **X002* požiadavku.", SuccessIcon + " He fijado el modo lento a **X001 segundos** a petición de **X002**.", SuccessIcon + " Yavaş modu **X002**'nin isteği üzerine **X001 saniye** olarak ayarladım.", SuccessIcon + " Я установил медленный режим на **X001 секунд** по запросу **X002**.", SuccessIcon + " 私は**X002**の要求で、スローモードを**X001秒**に設定しました。"];
                const embed = {"description": TranslatedMessages[Language].replace("X001", CommandArgument).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));

            }
             else
            {
              const embed = {"description": ErrorMessage9[Language],  "color": EmbedColor};
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

//Purge
if  (CommandName.startsWith("purge"))  {
  
    var CommandArgument = CommandName.split("purge")[1];

    if  (CommandArgument.startsWith(" "))  {

    if  (message.member.permissions.has("MANAGE_MESSAGES"))  {
    
        if  (message.channel.permissionsFor(peeky.user).has('MANAGE_MESSAGES'))  {

            CommandArgument = CommandArgument.replace(" ", "");

            if  (isNaN(CommandArgument) == false && CommandArgument > 0 && CommandArgument <= 100)  {

                await message.delete().catch(error => ErrorBag.add(error));
                message.channel.bulkDelete(CommandArgument, { reason: "Purged by " + message.author.tag + "." }).catch(error => {
                    const embed = {"description": ErrorMessage13[Language],  "color": EmbedColor}; 
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                    ErrorBag.add(error); Failed = true;
                });

                if  (Failed == false)  {
                    var TranslatedMessages = [SuccessIcon + " I have purged **X001 messages** at **X002**'s request.", SuccessIcon + " Smazal jsem **X001 zpráv** na požádání od **X002**.", SuccessIcon + " Vymazal som **X001 správ** na **X002** požiadavku.", SuccessIcon + " He purgado **X001** mensajes a petición de **X002**.", SuccessIcon + " **X002**'nin isteği üzerine **X001 mesajlarını** temizledim.", SuccessIcon + " Я удалил **X001 сообщений** по запросу **X002**.", SuccessIcon + " **X001個のメッセージ**は**X002**の要請で削除されている。"];
                    const embed = {"description": TranslatedMessages[Language].replace("X001", CommandArgument).replace("X002", function_RemoveFormatting(message.member.displayName, "other", true)),  "color": EmbedColor};
                    message.channel.send({ embed }).catch(error => ErrorBag.add(error));
                };

            }
             else
            {
              var TranslatedMessages = [ErrorIcon + " You can only purge 1 to 100 messages.", ErrorIcon + " Můžete vyčistit jenom 1 až 100 zpráv.", ErrorIcon + " Môžeš zmazať iba od 1 do 100 správ.", ErrorIcon + " Sólo puede purgar de 1 a 100 mensajes.", ErrorIcon + " Yalnızca 1 ila 100 iletiyi temizleyebilirsiniz.", ErrorIcon + " Вы можете очистить только от 1 до 100 сообщений.", ErrorIcon + " 1 ~ 100個のメッセージのみ削除できます。"];
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

        if  (message.member.user.id == message.guild.owner.user.id)  {
          
            if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {

                //InfoMessages.push(InfoIcon + " If the prefix is broken, join the Community Server.");

                peeky.serverData.set(keySF, CommandArgument, "prefix");

                var TranslatedMessages = [SuccessIcon + " The prefix is now **X001**.", SuccessIcon + " Prefix je teď **X001**.", SuccessIcon + " Predvoľba je teraz **X001**.", SuccessIcon + " El prefijo es ahora **X001**.", SuccessIcon + " Önek şimdi **X001**.", SuccessIcon + " Префикс теперь **X001**.", SuccessIcon + " プレフィックスは**X001**になりました。"];
                const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.serverData.get(keySF, "prefix")) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
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
  
//TimeZone
if  (CommandName.startsWith("timezone"))  {
  
    var CommandArgument = CommandName.split("timezone")[1];
  
    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = CommandArgument.replace(" ", "");

    if  (message.member.permissions.has("MANAGE_GUILD"))  {

        if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {
          
            if  (!isNaN(CommandArgument) && CommandArgument >= -12 && CommandArgument < 12)  {

                peeky.serverData.set(keySF, CommandArgument, "timezone");
              
                var TranslatedMessages = [SuccessIcon + " The time zone is now **X001**.", SuccessIcon + " Časové pásmo je nyní **X001**.", SuccessIcon + " The time zone is now **X001**.", SuccessIcon + " La zona horaria ahora es **X001**.", SuccessIcon + " Saat şuan da **X001**.", SuccessIcon + " Часовой пояс теперь **X001**.", SuccessIcon + " 現在、タイムゾーンは**X001**です。"];

                const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.serverData.get(keySF, "timezone")) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
                message.channel.send({ embed }).catch(error => ErrorBag.add(error));
              
            } else {
              const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
              message.channel.send({ embed }).catch(error => ErrorBag.add(error));
            };
        } else {
          const embed = {"description": ErrorMessage8[Language],  "color": EmbedColor}; 
          message.channel.send({ embed }).catch(error => ErrorBag.add(error));
        };

    } else {
      const embed = {"description": PermissionsMessageError1[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };
  
    } else if (CommandArgument == "") {      
      const embed = {"description": ErrorMessage18[Language],  "color": EmbedColor}; 
      message.channel.send({ embed }).catch(error => ErrorBag.add(error));
    };  

};
  
//TreasureChannel
if  (CommandName.startsWith("treasurechannel"))  {
  
    var CommandArgument = CommandName.split("treasurechannel")[1];
  
    if  (CommandArgument.startsWith(" "))  {

        CommandArgument = function_RemoveFormatting(CommandArgument.replace(" ", ""), "channel", true);

        if  (message.member.permissions.has("MANAGE_GUILD"))  {

            if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {

                peeky.serverData.set(keySF, CommandArgument, "treasure_channel");

                var TranslatedMessages = [SuccessIcon + " The channel for random treasures is now **#X001**.", SuccessIcon + " Kanál pro náhodné poklady je nyní **#X001**.", SuccessIcon + " The treasure channel is now **#X001**.", SuccessIcon + " The treasure channel is now **#X001**.", SuccessIcon + " The treasure channel is now **#X001**.", SuccessIcon + " The treasure channel is now **#X001**.", SuccessIcon + " The treasure channel is now **#X001**."];
                const embed = {"description": TranslatedMessages[0].replace("X001", peeky.serverData.get(keySF, "treasure_channel")) + "\n\n" + InfoMessages.join("\n\n"),  "color": EmbedColor};
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
  
//LevelNotifications
if  (CommandName == "levelnotifications")  {

    if  (message.member.permissions.has("MANAGE_GUILD"))  {

        peeky.serverData.set(keySF, !peeky.serverData.get(keySF, "level_notifications"),"level_notifications");

        var TranslatedMessages = [SuccessIcon + " The level notifications are now **X001**.", SuccessIcon + " Upozornění na levely jsou teď **X001**.", SuccessIcon + " Level notifikácii je teraz **X001**.", SuccessIcon + " Las notificaciones de nivel están ahora fijadas en **X001**.", SuccessIcon + " Seviye bildirimleri artık **X001** olarak ayarlanmıştır.", SuccessIcon + " Уведомления об уровне теперь установлены на **X001**.", SuccessIcon + " レベル通知は**X001**に設定されました。"];
        const embed = {"description": TranslatedMessages[Language].replace("X001", peeky.serverData.get(keySF, "level_notifications").toString().replace("true", EnableStrings[Language]).replace("false", DisableStrings[Language])),  "color": EmbedColor};
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

    if  (message.member.permissions.has("MANAGE_GUILD"))  {

        CommandArgument = CommandArgument.replace(" ", "");
      
        if  (!message.mentions.channels.first() && !message.mentions.roles.first() && !message.mentions.members.first())  {

            var FixedMutedRole = function_RemoveFormatting(CommandArgument, "role", true);
            var RoleExist = message.guild.roles.cache.find(role => role.name == CommandArgument);
            var FilteredChannels = message.guild.channels.cache.array().filter(channel => !TextChannels.includes(channel.type));

            if  (!RoleExist && message.guild.me.permissions.has("MANAGE_ROLES"))  {

                if  (!RoleCooldown.has(message.guild.id))  {

                    RoleCooldown.add(message.guild.id);
                    setTimeout(() => {RoleCooldown.delete(message.guild.id)}, RoleCooldownMS);

                   await message.guild.roles.create({
                       data: {
                         name: CommandArgument,
                         color: "#e91e63"
                       }
                   }).catch(error => ErrorBag.add(error));
                  
                   InfoMessages.push(InfoIcon + " Created a role called **" + CommandArgument + "**.");

                   if  (message.guild.roles.cache.find(role => role.name == CommandArgument) && message.guild.me.permissions.has("MANAGE_CHANNELS") && !RoleCooldown.has(message.guild.id + "muterole"))  {
                       
                       RoleCooldown.add(message.guild.id + "muterole");
                       setTimeout(() => {RoleCooldown.delete(message.guild.id + "muterole")}, 300000);
                         
                       var Amount = 0;
                       var MuteRole = message.guild.roles.cache.find(role => role.name == CommandArgument);
                     
                       FilteredChannels.forEach(channel => {
                             
                          var Failed = false;
                             
                          if  (channel.type == "voice" && !channel.permissionsFor(message.guild.me).has("CONNECT"))  {
                                  Failed = true;
                          };
                             
                          if  (Failed == false && Amount < 25)  {
                             
                              channel.updateOverwrite(MuteRole, {
                                  'SEND_MESSAGES': false
                              }).catch(error => ErrorBag.add(error));
                            
                              Amount ++;
                              
                          };

                       });

                       var TranslatedMessages = [InfoIcon + " Edited **X001** channels for the **@X002** role.", InfoIcon + " Upravil jsem **X001** kanálu pro roli **X002**.", InfoIcon + " Upravené **X001** channely pre **@X002** rolu.", InfoIcon + " Edite **X001** canales para el papel **@X002**.", InfoIcon + " **@X002** rolü için **X001** kanalları düzenlendi.", InfoIcon + " Отредактировано **X001** каналов для роли **@X002**.", InfoIcon + " **@X002**ロールの**X001**チャネルを編集しました。"];
                       InfoMessages.push(TranslatedMessages[Language].replace("X001", Amount + "/" + FilteredChannels.length).replace("X002", CommandArgument));     

                  }
                   else
                  {
                   var TranslatedMessages = [ErrorIcon + " Couldn't edit channels for the **@X001** role.", ErrorIcon + " Nemohl jsem upravit kanály pro roli **X001**.", ErrorIcon + " Nemohol som upraviť channely pre **@X001** rolu.", ErrorIcon + " No pude editar los canales para el papel **@X001**.", ErrorIcon + " **@X001** rolü için kanallar düzenlenemedi.", ErrorIcon + " Не смог отредактировать каналы для роли **@X001**.", ErrorIcon + " **@X001**ロールのチャネルを編集できませんでした。"];
                   InfoMessages.push(TranslatedMessages[Language].replace("X001", CommandArgument));   
                  };

               }
                else
               {
                InfoMessages.push(CooldownMessage3[Language]);
               };
              
            };

            peeky.serverData.set(keySF, CommandArgument, "muted_role");
          
            var TranslatedMessages = [SuccessIcon + " The mute role is now set to **@X001**.", SuccessIcon + " Role na ztlumení je teď nastavena na **@X001**.", SuccessIcon + " Mute rola je teraz nastavená na **@X001*.", SuccessIcon + " El papel de mute está ahora fijado en **@X001**.", SuccessIcon + " Sessiz rolü şimdi **@X001** olarak ayarlanmıştır.", SuccessIcon + " Роль отглушение теперь установлена на **@X001**.", SuccessIcon + " ミュートのロールが**@X001**に設定されます。"];
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
  
peeky.login(process.env.PRIVATE_BOT_TOKEN).catch(console.error);