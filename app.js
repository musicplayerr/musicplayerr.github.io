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
	}, {
        index: 27,
        name: `Gangsta's Paradise - Coolio`,
        coverImg: `img/36.jpg`,
        audioSrc: `audio/gp.mp3`
	}, {
        index: 28,
        name: `The Nights - Avicii`,
        coverImg: `img/37.jpg`,
        audioSrc: `audio/tn.mp3`
	}, {
        index: 29,
        name: `More Than You Know - Axwell Ft Ingrosso`,
        coverImg: `img/38.jpg`,
        audioSrc: `audio/mtyk.mp3` //hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
	}, {
        index: 30,
        name: `The Spectre - Alan Walker`,
        coverImg: `img/39.jpg`,
        audioSrc: `audio/tsa.mp3`
	}, {
        index: 31,
        name: `Faded - Alan Walker`,
        coverImg: `img/40.jpg`,
        audioSrc: `audio/fd.mp3`
	}, {
        index: 32,
        name: `Alone - Alan Walker`,
        coverImg: `img/41.jpg`,
        audioSrc: `audio/al.mp3`
	}, {
        index: 33,
        name: `On My Way - Alan Walker`,
        coverImg: `img/42.jpg`,
        audioSrc: `audio/omw.mp3`
	}, {
        index: 34,
        name: `Lily - Alan Walker`,
        coverImg: `img/43.jpg`,
        audioSrc: `audio/lly.mp3`
	}, {
        index: 35,
        name: `Dance Monkey - Tones And I`,
        coverImg: `img/44.jpg`,
        audioSrc: `audio/dm.mp3`
	}, {
        index: 36,
        name: `Believer - Imagine Dragons`,
        coverImg: `img/45.jpg`,
        audioSrc: `audio/blv.mp3`
	}, {
        index: 37,
        name: `The Lazy Song - Bruno Mars`,
        coverImg: `img/46.jpg`,
        audioSrc: `audio/tls.mp3`
	}, {
        index: 38,
        name: `Memories - Maroon 5`,
        coverImg: `img/47.jpg`,
        audioSrc: `audio/mmr.mp3`
	}, {
        index: 39,
        name: `Abcdefu - Gayle`,
        coverImg: `img/48.jpg`,
        audioSrc: `audio/abc.mp3`
	}, {
        index: 40,
        name: `It's You - Ali Gatie`,
        coverImg: `img/49.jpg`,
        audioSrc: `audio/iy.mp3`
	}, {
        index: 41,
        name: `My Ordinary Life 'Slowed' - The Living Tombstone`,
        coverImg: `img/50.jpg`,
        audioSrc: `audio/myl.mp3`
	}, {
        index: 42,
        name: `Ransom - Lil Tecca`,
        coverImg: `img/51.jpg`,
        audioSrc: `audio/rn.mp3`
	}, {
        index: 43,
        name: `Party Favor - Billie Eilish 'Gustixa Remix'`,
        coverImg: `img/52.jpg`,
        audioSrc: `audio/pf.mp3`
	}, {
        index: 43,
        name: `To The Bone - Pamungkas`,
        coverImg: `img/53.jpg`,
        audioSrc: `audio/ttb.mp3`
	}, {
        index: 44,
        name: `Somebody That I Used To Know - Gotye`,
        coverImg: `img/54.jpg`,
        audioSrc: `audio/sm.mp3`
	}, {
        index: 45,
        name: `Dancing In My Room - 347Aidan`,
        coverImg: `img/55.jpg`,
        audioSrc: `audio/dimr.mp3`
	}, {
        index: 46,
        name: `Industry Baby - Lil Nas X`,
        coverImg: `img/56.jpg`,
        audioSrc: `audio/ib.mp3`
	}, {
        index: 47,
        name: `Losing Interests - Shiloh Dynasty`,
        coverImg: `img/57.jpg`,
        audioSrc: `audio/li.mp3`
	}, {
        index: 48,
        name: `Happy - SkinnyFabs 'Gustixa Remix'`,
        coverImg: `img/58.jpg`,
        audioSrc: `audio/hpy.mp3`
	}, {
        index: 49,
        name: `Just The Two Of Us - Grover Washington Jr`,
        coverImg: `img/59.jpg`,
        audioSrc: `audio/jtt.mp3`
	}, {
        index: 50,
        name: `Baby - Justin Bieber`,
        coverImg: `img/60.jpg`,
        audioSrc: `audio/bby.mp3`
	}, {
        index: 51,
        name: `Sunday Best - Surfaces`,
        coverImg: `img/61.jpg`,
        audioSrc: `audio/sb.mp3`
	}, {
        index: 52,
        name: `GooseBumps  - Travis Scott`,
        coverImg: `img/62.jpg`,
        audioSrc: `audio/gb.mp3`
	}, {
        index: 53,
        name: `Lemon Tree - Gustixa`,
        coverImg: `img/63.jpg`,
        audioSrc: `audio/ltr.mp3`
	}, {
        index: 54,
        name: `Throw Sum Mo - Rae Sremmurd`,
        coverImg: `img/64.jpg`,
        audioSrc: `audio/tsmm.mp3`
	}, {
        index: 55,
        name: `Black Beatles - Rae Sremmurd`,
        coverImg: `img/65.jpg`,
        audioSrc: `audio/bb.mp3`
	}, {
        index: 56,
        name: `Lathi - Weird Genius`,
        coverImg: `img/66.jpg`,
        audioSrc: `audio/lth.mp3`
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