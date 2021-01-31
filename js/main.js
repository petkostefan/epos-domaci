var pageName = window.location.pathname.split("/").pop();

if(pageName == "katalog.html"){
    alert("Stefan Petković");
}

if(pageName == "kontakt.html"){
    answer = window.confirm("Da li želite da nastavite?")
    if(!answer){
        window.location.replace("index.html");
    }
}
