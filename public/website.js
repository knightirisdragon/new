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
 //var Home = false;

//Title
if  (window.location.href == "https://peeky.glitch.me/")  {
    document.title = "PEEKY the Discord bot";
    //Home = true
} else {
  document.title = "PEEKY: " + function_FixCapitalization(window.location.href.replace("https://peeky.glitch.me/", "").replace("pages/", "").replace(".html", "")).replace(/[_]/g, ' ');
};

//Favicon
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpeeky%204-2-1.png.png?1553621395208';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

//Home Button
/*  (Home == false)  {
    document.write('<a class="homebutton" href="https://peeky.glitch.me" rel="noopener noreferrer"> <img src="https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fhome.png?v=1573247289278"> </a>');
};*/