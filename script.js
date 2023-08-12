window.onload = function() {
    var search = prompt("Search Here");
    alert("Searching for " + search);
    document.getElementById("search").href =" https://www.google.com/search?surl=1&q=" +search   +"&&safe=active&ssui=on";
   document.getElementById("search2").href =" https://search.brave.com/search?q=" +search   +"&source=web";
     document.getElementById("search3").href =" https://duckduckgo.com/?va=a&t=hn&q=" +search   +"&ia=web";
}