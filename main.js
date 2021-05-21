// MAIN VALUE OF TRACK APP
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
// Song details play, stop, pause, previous, next, show and change progress functions
function loadSong(song) {
    songTitle.innerText = song
    audio.src = `songs/${song}.mp3`
    cover.src = `image/${song}.jpg`
}
function playMusic() {
    playerContainer.classList.add('play')
    playButton.querySelector('i.fas').classList.remove('fa-play')
    playButton.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}
function pauseMusic() {
    playerContainer.classList.remove('play')
    playButton.querySelector('i.fas').classList.add('fa-play')
    playButton.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
}
function previousMusic() {
    songsIndex--
    if(songsIndex < 0) {
        songsIndex = songsName.length - 1
    }
    loadSong(songsName[songsIndex])
    playMusic()
}
function nextMusic() {
    songsIndex++
    if(songsIndex > songsName.length - 1) {
        songsIndex = 0
    }
    loadSong(songsName[songsIndex])
    playMusic()
}
function showProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}
function changeProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}
// All Events listeners
playButton.addEventListener('click', () => {
    const playing = playerContainer.classList.contains('play')
    if(playing) {
        pauseMusic ()
    } else {
        playMusic ()
    }
})
// Changing musics
previousButton.addEventListener('click', previousMusic)
nextButton.addEventListener('click', nextMusic)
// Progress bar moving
audio.addEventListener('timeupdate', showProgress)
progressContainer.addEventListener('click', changeProgress)
audio.addEventListener('ended', nextMusic)