function UpdateWebsiteStuff(data)  {
  
    data.forEach(item => {
      
        fetch('https://peeky.glitch.me/' + item[0])
        .then(response => response.text()).then((data) => {
           document.getElementById(item[1]).innerHTML = data;
        });
      
    });

};