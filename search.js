window.onload = function() {
    var search = prompt("Search Here");
    alert("Searching for " + search);
    document.getElementById("search").href = "https://www.google.com/search?safe=active&ssui=on&surl=1&q="  + search;
}