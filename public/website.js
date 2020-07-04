function UpdateWebsiteStuff(data)  {
  
    data.forEach(item => {
      
        fetch(Domain + '/website_data/' + item[0])
        .then(response => response.text()).then((data) => {
           document.getElementById(item[1]).innerHTML = data;
        });
      
    });

};

//Fix Capitalization
function FixTitle(text)  {
  
    text = text.split("#")[0].replace(Domain + "/pages/", "");
  
    var index = 0;
    var Array = [];
    var Words = text.split("_");
  
    Words.forEach(w => {
      
        w = w.replace("/", "").replace("peeky", "PEEKY");
      
        if  (w.toUpperCase() !== w && (w.length >= 3 || index == 0))  {
          
            Array.push(w.slice(0, 1).toUpperCase() + w.slice(1, w.length).toLowerCase());
          
        } else {
          Array.push(w);          
        };
      
        index ++;
      
    });

    return Array.join(" ");
      
};

function HomeButton() {
  
  
    var Button = document.getElementById("homebuttonplace");
  
    if  (Button)  {
      
        Button.innerHTML = '<a class="homebutton" href="' + Domain + '" rel="noopener noreferrer"> <img src="https://cdn.glitch.com/dc816b2d-b8c8-4e70-bd44-28cadfd2342f%2Fhome.png?v=1573247289278"> </a>';
    };
  
  
};

var Domain = "https://peeky.glitch.me";

//Title
if  (window.location.href == Domain + "/")  {
    document.title = "PEEKY the Discord bot";
} else {
  document.title = "PEEKY – " + FixTitle(window.location.href);
};

//Favicon
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://cdn.glitch.com/b2a48499-dec5-4ba6-898e-ec1e602d6eb9%2Fpeeky%204-2-1.png.png?1553621395208';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

HomeButton();