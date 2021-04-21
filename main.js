const playerContainer = document.querySelector('.player-container');
const previousButton = document.querySelector('#previous');
const playButton = document.querySelector('#play');
const nextButton = document.querySelector('#next');
const audio = document.querySelector('#music');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.querySelector('#song-title');
const cover = document.querySelector('#cover');

// Music titles

const songsName = ['Alice Merton - No Roots', 'KONTRAFAKT - Kym Neskapem', 'Loud Luxury - Body', 'ACDC - Shoot To Thrill'];

// Keep track of songs

let songsIndex = 3;

// Loader music into Document Object Model

loadSong(songsName[songsIndex])
