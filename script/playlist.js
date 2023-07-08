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
        
    }
]


