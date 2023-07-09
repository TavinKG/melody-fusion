let nowPlaying = document.querySelector('.now-playing');
let trackArt = document.querySelector('.track-art');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');

let btnPlaypause = document.querySelector('.playpause-track');
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




