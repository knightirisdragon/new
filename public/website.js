function UpdateWebsiteStuff(data)  {
  
    data.forEach(item => {
      
        fetch('https://peeky.glitch.me/' + item[0])
        .then(response => response.text()).then((data) => {
           document.getElementById(item[1]).innerHTML = data;
        });
      
    });

};

//Fix Capitalization
function function_FixCapitalization(text)  {

    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase();
      
};

//Head HTML

//Title
if  (window.location.href == "https://peeky.glitch.me/")  {
    document.title = "PEEKY the Discord bot";
} else {
  document.title = "PEEKY: " + function_FixCapitalization(window.location.href.replace("https://peeky.glitch.me/", "").replace("pages/", "").replace(".html", ""));
};

//Favicon
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpeeky%204-2-1.png.png?1553621395208';
    document.getElementsByTagName('head')[0].appendChild(link);
})();