let nowPlaying = document.querySelector('.now-playing');
let trackArt = document.querySelector('.track-art');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');

let btnPlaypause = document.querySelector('.playpausetrack');
let btnNext = document.querySelector('.next-track');
let btnPrev = document.querySelector('.prev-track');

let seekSlider = document.querySelector('.seek_slider');
let volumeSlider = document.querySelector('.volume_slider');
let currTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let currTrack = document.createElement('audio');

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const musicList = [
    {
        img : 'capa-music/blindinglights.jpg',
        name : 'Blinding Lights',
        artist : 'The Weeknd',
        music : 'music/blindinglights.mp3'
    },
    {
        img : 'capa-music/happierthanever.jpg',
        name : 'Happier Than Ever',
        artist : 'Billie Eilish',
        music : 'music/happierthanever.mp3'
    },
    {
        img : 'capa-music/sunflower.jpg',
        name : 'Sunflower',
        artist : 'Post Malone',
        music : 'music/sunflower.mp3'
    },
    {
        img : 'capa-music/7rings.jpg',
        name : '7 Rings',
        artist : 'Ariana Grande',
        music : 'music/7rings.mp3'
    },
    {
        img : 'capa-music/shapeofyou.jpg',
        name : 'Shape of You',
        artist : 'Ed Sheeran',
        music : 'music/shapeofyou.mp3'
    },
    {
        img : 'capa-music/shakeitoff.jpg',
        name : 'Shake It Off',
        artist : 'Taylor Swift',
        music : 'music/shakeitoff.mp3'
    },
    {
        img : 'capa-music/thatswhatilike.jpg',
        name : 'That´s What I Like',
        artist : 'Bruno Mars',
        music : 'music/thatswhatilike.mp3'
    },
    {
        img : 'capa-music/diamonds.jpg',
        name : 'Diamonds',
        artist : 'Rihanna',
        music : 'music/diamonds.mp3'
    },
    {
        img : 'capa-music/hearmenow.jpg',
        name : 'Hear me Now',
        artist : 'Alok',
        music : 'music/hearmenow.mp3'
    },
    {
        img : 'capa-music/pokerface.jpg',
        name : 'Poker Face',
        artist : 'Lady Gaga',
        music : 'music/pokerface.mp3'
    },
    {
        img : 'capa-music/goosebumps.jpg',
        name : 'Goosebumps',
        artist : 'Travis Scott',
        music : 'music/goosebumps.mp3'
    },
    {
        img : 'capa-music/halo.jpg',
        name : 'Halo',
        artist : 'Beyoncé',
        music : 'music/halo.mp3'
    },
    {
        img : 'capa-music/paradise.jpg',
        name : 'Paradise',
        artist : 'Coldplay',
        music : 'music/paradise.mp3'
    },
    {
        img : 'capa-music/hello.jpg',
        name : 'Hello',
        artist : 'Adele',
        music : 'music/hello.mp3'
    }
]

loadTrack(trackIndex);

function loadTrack(trackIndex){
    clearInterval(updateTimer);
    reset();

    currTrack.src = musicList[trackIndex].music;
    currTrack.load();

    trackArt.style.backgroundImage = "url(" + musicList[trackIndex].img + ")";
    trackName.textContent = musicList[trackIndex].name;
    trackArtist.textContent = musicList[trackIndex].artist;
    nowPlaying.textContent = "Playing music " + (trackIndex + 1) + " of " + musicList.length;

    updateTimer = setInterval(setUpdate, 1000);

    currTrack.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient; 
}
function reset(){
    currTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let currIndex = trackIndex;
    loadTrack(currIndex);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    currTrack.play();
    isPlaying = true;
    trackArt.classList.add('rotate');
    wave.classList.add('loader');
    btnPlaypause.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    currTrack.pause();
    isPlaying = false;
    trackArt.classList.remove('rotate');
    wave.classList.remove('loader');
    btnPlaypause.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}



