// PART #2
// =============>>> VARIABLES <<<============= //
// I already declared the variables to save some time. I'll just show which elements we selected.
const coverImg = document.querySelector('.img img');
const audioName = document.querySelector('.audio-name h1');
const backwardBtn = document.querySelector('.backwardBtn');
const forwardBtn = document.querySelector('.forwardBtn');
const playBtn = document.querySelector('.playBtn');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const audio = document.querySelector('audio');
const audioCurrentTime = document.querySelector('.audioCurrentTime');
const fullLength = document.querySelector('.fullLength');


const audios = [
    {
        index: 0, // Index must start from 0 (we need it for the music list - NEXT VIDEO)
        name: `4am - KaizanBlu`, // Audios Name
        coverImg: `img/one.jpg`, // Img's path must be correct or the img won't be shown
        audioSrc: `audio/4am - KaizanBlu.mp3` // Audio's path must be correct or the audio won't play
    }, {
        index: 1,
        name: `Chill Jazzy Lofi Hip-Hop Beat Lo-Fi Music`,
        coverImg: `img/two.jpg`,
        audioSrc: `audio/Chill Jazzy Lofi Hip-Hop Beat Lo-Fi Music.mp3`
    }, {
        index: 2,
        name: `Chill Lofi Hip Hop Beat Music`,
        coverImg: `img/three.jpg`,
        audioSrc: `audio/Chill Lofi Hip Hop Beat Music.mp3`
    }, {
        index: 3,
        name: `InRp - Ocean Blue`,
        coverImg: `img/four.jpg`,
        audioSrc: `audio/InRp - Ocean Blue.mp3`
    }, {
        index: 4,
        name: `Imagine Dragon - Enemy`,
        coverImg: `img/five.jpg`,
        audioSrc: `audio/Enemy.mp3`
    }, {
        index: 5,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/six.jpg`,
        audioSrc: `audio/Bad-Liar.mp3` //here
	}, {
        index: 6,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/six.jpg`,
        audioSrc: `audio/Bad-Liar.mp3`
	}, {
        index: 7,
        name: `24kgoldn Ft Ian Dior - Mood`,
        coverImg: `img/seven.jpg`,
        audioSrc: `audio/mood.mp3`
	}, {
        index: 8,
        name: `Juice Wrld - Lucid Dreams`,
        coverImg: `img/eight.jpg`,
        audioSrc: `audio/lcd-drm.mp3`
	}, {
        index: 9,
        name: `Heather x Eyes Blue (Lofi Remix)`,
        coverImg: `img/nine.jpg`,
        audioSrc: `audio/hthr.mp3`
	}, {
        index: 10,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/ten.jpg`,
        audioSrc: `audio/Bad-Liar.mp3`
	}, {
        index: 11,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/eleven.jpg`,
        audioSrc: `audio/Bad-Liar.mp3`
	}, {
        index: 12,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/twelve.jpg`,
        audioSrc: `audio/Bad-Liar.mp3`
	}, {
        index: 13,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/13.jpg`,
        audioSrc: `audio/Bad-Liar.mp3`
	}
    // You can add as many audios as you want as long as you have these info's
    // example.   Just like that you can add as many as you want.
    // and when there's now enough room we can scroll down but the scroll bar wont show. I think thats a cool trick we learned during this tutorial
]

let current = 0;


// =============>>> EVENTS <<<============= //
playBtn.addEventListener('click', playPauseSong);
forwardBtn.addEventListener('click', playNextSong);
backwardBtn.addEventListener('click', playPrevSong);
audio.addEventListener('timeupdate', fillProgress);
progressBar.addEventListener('click', updateProgress);
audio.addEventListener('ended', playNextSong)
// we already created playNextSong function
// works perfectly
// today we'll add functionality to the music list. lets continue



// =============>>> FUNCTIONS <<<============= //

// PLAY OR PAUSE THE AUDIO
function playPauseSong () {
    // Check if the audio is playing or paused
    if (audio.duration > 0 && !audio.paused) {
        // Audio is playing
        audio.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`
        coverImg.style.animationPlayState = `paused`
    } else {
        // Audio is paused
        audio.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`
        coverImg.style.animationPlayState = `running`
    }
    // That's all for this function
}


// PLAY NEXT AUDIO ON CLICK
function playNextSong () {
    // Increase current
    current++;
    playSongOnNextOrPrev()
    // we still havent created this function
}

// PLAY PREV AUDIO ON CLICK
function playPrevSong () {
    // Decrease current
    current--;
    playSongOnNextOrPrev()
    // we still havent created this function
}
// amateur mistake


// PLAY THE NEXT OR PREVIOUS SONG DEPENDING ON WHICH BTN WAS CLICKED
// we'll create that function here.
function playSongOnNextOrPrev () {
    // Check if the current is higher than the audios length. If yes current = 0. The same if current is lower than 0. This'll help to create a looping audio player.
    if (current > audios.length - 1) {
        current = 0;
    } else if (current < 0) {
        current = audios.length - 1;
    }

    // Change the coverImg, audioName and audioSrc when we get the next or prev song.
    coverImg.src = audios[current].coverImg;
    audioName.innerText = audios[current].name;
    audio.src = audios[current].audioSrc;

    // When we click next or prev we want the audio to play automatically, playBtn to be a pauseBtn and coverImg to be rotating.
    audio.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    coverImg.style.animationPlayState = `running`

    // AND THAT'S ALL FOR THIS FUNCTION TOO
}


// FILL THE PROGRESS BASED ON AUDIOS FULL LENGTH
function fillProgress (e) {
    // Get the audio's current time and transform it into percentage. Progress will be filled based on what percentage currently is.
    progress.style.width = `${(e.srcElement.currentTime / e.srcElement.duration) * 100}%`;
    // you can see its getting filled

    // Get mins and secs currentTime and turn them into 00:00 format
    let mins = Math.floor(audio.currentTime / 60);
    let secs = Math.floor(audio.currentTime % 60);
    // Check if currentTime mins or secs are < 10. If yes then add a 0 in front of it.
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
    // It Works perfectly now
    audioCurrentTime.innerText = `${mins}:${secs}`;


    // Get the fullLength of the audio and turn them into 00:00 format
    let minutes = parseInt(audio.duration / 60, 10);
    let seconds = parseInt(audio.duration % 60);
    // Check if fullLength mins or secs are < 10. If yes then add a 0 in front of it.
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    fullLength.innerText = `${minutes}:${seconds}`
    // lol. Amateur Mistakes
}


// CHANGE THE PROGRESS WIDTH AND AUDIO'S CURRENT TIME BASED ON WHERE WE CLICK ON THE PROGRESS BAR
function updateProgress (e) {
    audio.currentTime = (e.offsetX / this.clientWidth) * audio.duration;
}

// THATS ALL FOR THIS PART. 






// before starting this tutorial I forgot to add the ended event listener to the audio
// as you can see when the audio ends nothing happens we want to play the next audio

// Part #3
// =============>>> VARIABLES <<<============= //
// I already declared the variables to save some time. I'll just show which elements we selected.
const musicList = document.querySelector('.music-list');
const musicListBtn = document.querySelector('.musicListBtn');
const xBtn = document.querySelector('.xBtn');
const list = document.querySelector('.list');




// =============>>> EVENTS <<<============= //
musicListBtn.addEventListener('click', showList);
xBtn.addEventListener('click', removeList);
window.addEventListener('load', loadAudios);



// =============>>> FUNCTIONS <<<============= //

// GIVE THE showMusicList CLASS TO THE MUSIC LIST WHEN WE CLICK THE musicListBtn
function showList () {
    musicList.classList.add('showMusicList');
}
// REMOVE THE showMusicList CLASS FROM THE MUSIC LIST WHEN WE CLICK THE xBtn
function removeList () {
    musicList.classList.remove('showMusicList');
}

// LOAD AUDIOS IN THE MUSIC LIST & ADD A CLICK EVENT FOR EACH SO WE CAN CHANGE THE AUDIO
function loadAudios () {
    // """map method creates a new array and adds the callback function to each element (or something like that, I'm sorry I can't explain it very well).""" In this case we'll return a html structure for each element in the array.
    let loadedAudios = audios.map(e => {
        return `<div class="item-container" data-index="${e.index}">
                    <div class="item">
                        <div class="coverImg">
                            <img src="${e.coverImg}" alt="">
                        </div>
                        <div class="info">
                            <h3>${e.name}</h3>
                        </div>
                    </div>
                </div>`;
    }).join('');
    list.innerHTML = loadedAudios;
    // this loadedAudios will return an html structure dependig on the audios.length. and for each item-container we changed the index, coverImg and name.  It might be hard to explain. Sorry 🙏🙏🙏




    // Add an event listener for each itemContainer, so when we click it, it'll play the clicked audio. (inside it change the current to the dataset.index, change the coverImg, audiName & audio source)
    const itemContainer = document.querySelectorAll('.item-container');
    itemContainer.forEach(item => {
        item.addEventListener('click', () => {
            current = item.dataset.index;

            coverImg.src = audios[current].coverImg;
            audioName.innerText = audios[current].name;
            audio.src = audios[current].audioSrc;

            // now when we click one of the items we want to start playing and now just change the coverImg, audioName audioSrc
            audio.play();
            playBtn.innerHTML = `<i class="fas fa-pause"></i>`
            coverImg.style.animationPlayState = `running`
        })
    })
}
// Thats all for this project. Thnx for following until the end
// and idk if I mentioned