
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
        index: 0,
        name: `Imagine Dragon - Enemy`,
        coverImg: `img/five.jpg`,
        audioSrc: `audio/Enemy.mp3`
    }, {
        index: 1,
        name: `Imagine Dragon - Bad Liar`,
        coverImg: `img/six.jpg`,
        audioSrc: `audio/bl.mp3`
	}, {
        index: 2,
        name: `Boney M - Rasputin`,
        coverImg: `img/14.jpg`,
        audioSrc: `audio/rasputin.mp3`
	}, {
        index: 3,
        name: `24kgoldn Ft Ian Dior - Mood`,
        coverImg: `img/seven.jpg`,
        audioSrc: `audio/mood.mp3`
	}, {
        index: 4,
        name: `Juice Wrld - Lucid Dreams`,
        coverImg: `img/eight.jpg`,
        audioSrc: `audio/lcd-drm.mp3`
	}, {
        index: 5,
        name: `Heather x Eyes Blue (Lofi Remix)`,
        coverImg: `img/nine.jpg`,
        audioSrc: `audio/hthr.mp3`
	}, {
        index: 6,
        name: `Akon - Lonely`,
        coverImg: `img/15.jpg`,
        audioSrc: `audio/lonely.mp3`
	}, {
        index: 7,
        name: `Toxic - Boy With Uke`,
        coverImg: `img/16.jpg`,
        audioSrc: `audio/toxic.mp3`
	}, {
        index: 8,
        name: `Love Me Like You Do - Ellie Goulding`,
        coverImg: `img/17.jpg`,
        audioSrc: `audio/lmlyd.mp3`
	}, {
        index: 9,
        name: `Dandellions - Ruth B`,
        coverImg: `img/18.jpg`,
        audioSrc: `audio/ddl.mp3`
	}, {
        index: 10,
        name: `Cash Cash - Hero Ft Christina Perry`,
        coverImg: `img/19.jpg`,
        audioSrc: `audio/cash.mp3`
	}, {
        index: 11,
        name: `Perfect - Ed Sheeran`,
        coverImg: `img/20.jpg`,
        audioSrc: `audio/perfect.mp3`
	}, {
        index: 12,
        name: `Shape Of You - Ed Sheeran`,
        coverImg: `img/21.jpg`,
        audioSrc: `audio/soy.mp3`
	}, {
        index: 13,
        name: `Heat Waves - Glass Animals`,
        coverImg: `img/22.jpg`,
        audioSrc: `audio/hw.mp3`
	}, {
        index: 14,
        name: `See You Again - Wizz Khalifa`,
        coverImg: `img/23.jpg`,
        audioSrc: `audio/sya.mp3`
	}, {
        index: 15,
        name: `Unstoppable - Sia`,
        coverImg: `img/24.jpg`,
        audioSrc: `audio/upbl.mp3`
	}, {
        index: 16,
        name: `Someone You Loved - Lewis Capaldi`,
        coverImg: `img/25.jpg`,
        audioSrc: `audio/syl.mp3`
	}, {
        index: 17,
        name: `Death Bed - Powfu`,
        coverImg: `img/26.jpg`,
        audioSrc: `audio/db.mp3`
	}, {
        index: 18,
        name: `Don't Let Me Down - The Chainsmokers`,
        coverImg: `img/27.jpg`,
        audioSrc: `audio/dlmd.mp3`
	}, {
        index: 19,
        name: `Rockabye - Clean Bandit`,
        coverImg: `img/28.jpg`,
        audioSrc: `audio/rby.mp3`
	}, {
        index: 20,
        name: `Let Her Go - Passenger`,
        coverImg: `img/29.jpg`,
        audioSrc: `audio/lhg.mp3`
	}, {
        index: 21,
        name: `We Don't Talk Anymore - Charlie Puth`,
        coverImg: `img/30.jpg`,
        audioSrc: `audio/wdta.mp3`
	}, {
        index: 22,
        name: `Senorita - Shawn Mendes Ft Camila Cabello`,
        coverImg: `img/31.jpg`,
        audioSrc: `audio/senorita.mp3`
	}, {
        index: 23,
        name: ` Love Yourself - Justin Bieber`,
        coverImg: `img/32.jpg`,
        audioSrc: `audio/ly.mp3`
	}, {
        index: 24,
        name: `Be Alright - Dean Lewis`,
        coverImg: `img/33.jpg`,
        audioSrc: `audio/ba.mp3`
	}, {
        index: 25,
        name: `Beggin' - Maneskin`,
        coverImg: `img/34.jpg`,
        audioSrc: `audio/bg.mp3`
	}, {
        index: 26,
        name: `Night Changes - One Direction`,
        coverImg: `img/35.jpg`,
        audioSrc: `audio/nc.mp3`
	}
   
]

let current = 0;


// =============>>> EVENTS <<<============= //
playBtn.addEventListener('click', playPauseSong);
forwardBtn.addEventListener('click', playNextSong);
backwardBtn.addEventListener('click', playPrevSong);
audio.addEventListener('timeupdate', fillProgress);
progressBar.addEventListener('click', updateProgress);
audio.addEventListener('ended', playNextSong)




// =============>>> FUNCTIONS <<<============= //


function playPauseSong () {
  
    if (audio.duration > 0 && !audio.paused) {
       
        audio.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`
        coverImg.style.animationPlayState = `paused`
    } else {
        
        audio.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`
        coverImg.style.animationPlayState = `running`
    }

}



function playNextSong () {

    current++;
    playSongOnNextOrPrev()

}


function playPrevSong () {
 
    current--;
    playSongOnNextOrPrev()
   
}




function playSongOnNextOrPrev () {
       if (current > audios.length - 1) {
        current = 0;
    } else if (current < 0) {
        current = audios.length - 1;
    }

  
    coverImg.src = audios[current].coverImg;
    audioName.innerText = audios[current].name;
    audio.src = audios[current].audioSrc;

   
    audio.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    coverImg.style.animationPlayState = `running`

    
}



function fillProgress (e) {
   
    progress.style.width = `${(e.srcElement.currentTime / e.srcElement.duration) * 100}%`;
 

  
    let mins = Math.floor(audio.currentTime / 60);
    let secs = Math.floor(audio.currentTime % 60);
   
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
  
    audioCurrentTime.innerText = `${mins}:${secs}`;


   
    let minutes = parseInt(audio.duration / 60, 10);
    let seconds = parseInt(audio.duration % 60);
  
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    fullLength.innerText = `${minutes}:${seconds}`
  
}



function updateProgress (e) {
    audio.currentTime = (e.offsetX / this.clientWidth) * audio.duration;
}

 






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
