const url = window.location.pathname.split('/').slice(-1)
const aIndex = document.querySelector(".a-index")
const aLine = document.querySelector(".a-line")
const aArtistas = document.querySelector(".a-artistas")
const aPlaylist = document.querySelector(".a-playlist")
const aIngressos = document.querySelector(".a-ingressos")

if(url == "index.html" || url == ""){
    aIndex.classList.add("active")
} 
else if(url == "line.html"){
    aLine.classList.add("active")
}
else if(url == "artistas.html"){
    aArtistas.classList.add("active")
}
else if(url == "playlist.html"){
    aPlaylist.classList.add("active")
}
else if(url == "ingressos.html"){
    aIngressos.classList.add("active")
}
