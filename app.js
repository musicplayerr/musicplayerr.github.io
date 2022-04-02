
// =============>>> VARIABLES <<<============= //

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
        name: `Enemy - Imagine Dragon`,
        coverImg: `img/five.jpg`,
        audioSrc: `audio/Enemy.mp3`
    }, {
        index: 1,
        name: `Bad Liar - Imagine Dragon`,
        coverImg: `img/six.jpg`,
        audioSrc: `audio/bl.mp3`
	}, {
        index: 2,
        name: `Rasputin - Boney M`,
        coverImg: `img/14.jpg`,
        audioSrc: `audio/rasputin.mp3`
	}, {
        index: 3,
        name: `Mood - 24kgoldn Ft Ian Dior`,
        coverImg: `img/seven.jpg`,
        audioSrc: `audio/mood.mp3`
	}, {
        index: 4,
        name: `Lucid Dreams - Juice Wrld`,
        coverImg: `img/eight.jpg`,
        audioSrc: `audio/lcd-drm.mp3`
	}, {
        index: 5,
        name: `Heather x Eyes Blue (Lofi Remix)`,
        coverImg: `img/nine.jpg`,
        audioSrc: `audio/hthr.mp3`
	}, {
        index: 6,
        name: `Lonely - Akon`,
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
        name: `Cash Cash - Hero Ft Christina Perri`,
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
        index: 44,
        name: `To The Bone - Pamungkas`,
        coverImg: `img/53.jpg`,
        audioSrc: `audio/ttb.mp3`
	}, {
        index: 45,
        name: `Somebody That I Used To Know - Gotye`,
        coverImg: `img/54.jpg`,
        audioSrc: `audio/sm.mp3`
	}, {
        index: 46,
        name: `Dancing In My Room - 347Aidan`,
        coverImg: `img/55.jpg`,
        audioSrc: `audio/dimr.mp3`
	}, {
        index: 47,
        name: `Industry Baby - Lil Nas X`,
        coverImg: `img/56.jpg`,
        audioSrc: `audio/ib.mp3`
	}, {
        index: 48,
        name: `Losing Interests - Shiloh Dynasty`,
        coverImg: `img/57.jpg`,
        audioSrc: `audio/li.mp3`
	}, {
        index: 49,
        name: `Happy - SkinnyFabs 'Gustixa Remix'`,
        coverImg: `img/58.jpg`,
        audioSrc: `audio/hpy.mp3`
	}, {
        index: 50,
        name: `Just The Two Of Us - Grover Washington Jr`,
        coverImg: `img/59.jpg`,
        audioSrc: `audio/jtt.mp3`
	}, {
        index: 51,
        name: `Baby - Justin Bieber`,
        coverImg: `img/60.jpg`,
        audioSrc: `audio/bby.mp3`
	}, {
        index: 52,
        name: `Sunday Best - Surfaces`,
        coverImg: `img/61.jpg`,
        audioSrc: `audio/sb.mp3`
	}, {
        index: 53,
        name: `GooseBumps  - Travis Scott`,
        coverImg: `img/62.jpg`,
        audioSrc: `audio/gb.mp3`
	}, {
        index: 54,
        name: `Lemon Tree - Gustixa`,
        coverImg: `img/63.jpg`,
        audioSrc: `audio/ltr.mp3`
	}, {
        index: 55,
        name: `Throw Sum Mo - Rae Sremmurd`,
        coverImg: `img/64.jpg`,
        audioSrc: `audio/tsmm.mp3`
	}, {
        index: 56,
        name: `Black Beatles - Rae Sremmurd`,
        coverImg: `img/65.jpg`,
        audioSrc: `audio/bb.mp3`
	}, {
        index: 57,
        name: `Lathi - Weird Genius`,
        coverImg: `img/66.jpg`,
        audioSrc: `audio/lth.mp3` //here
	}
	, {
        index: 58,
        name: `There's Nothing Holdin' Me Back - Shawn Mendes`,
        coverImg: `img/67.jpg`,
        audioSrc: `audio/tnh.mp3`
	}, {
        index: 59,
        name: `Closer - The Chainsmokers ft. Halsey`,
        coverImg: `img/68.jpg`,
        audioSrc: `audio/clsr.mp3`
	}, {
        index: 60,
        name: `Girls Like You - Maroon 5`,
        coverImg: `img/69.jpg`,
        audioSrc: `audio/gly.mp3`
	}, {
        index: 61,
        name: `Stay - The Kid Laroi Ft Justin Bieber`,
        coverImg: `img/70.jpg`,
        audioSrc: `audio/sty.mp3`
	}, {
        index: 62,
        name: `Traitor - Olivia Rodrigo`,
        coverImg: `img/71.jpg`,
        audioSrc: `audio/trtr.mp3`
	}, {
        index: 63,
        name: `Easy On Me - Adele`,
        coverImg: `img/72.jpg`,
        audioSrc: `audio/eom.mp3`
	}, {
        index: 64,
        name: `Snowman - Sia`,
        coverImg: `img/73.jpg`,
        audioSrc: `audio/snw.mp3`
	}, {
        index: 65,
        name: `Lovely - Billie Eilish`,
        coverImg: `img/74.jpg`,
        audioSrc: `audio/lv.mp3`
	}, {
        index:66,
        name: `Dusk Till Down - Zayn Ft Sia`,
        coverImg: `img/75.jpg`,
        audioSrc: `audio/dtd.mp3`
	}, {
        index: 67,
        name: `Stereo Hearts - Gym Class Heroes`,
        coverImg: `img/76.jpg`,
        audioSrc: `audio/lsh.mp3`
	}, {
        index: 68,
        name: `Inferno - Sub Urban Ft Bella Poarch`,
        coverImg: `img/77.jpg`,
        audioSrc: `audio/inf.mp3`
	}, {
        index: 69,
        name: `A Thousand Years - Christina Perri`,
        coverImg: `img/78.jpg`,
        audioSrc: `audio/aty.mp3`
	}, {
        index: 70,
        name: `You Are The Reason - Calum Scott Ft Leona Lewis`,
        coverImg: `img/79.jpg`,
        audioSrc: `audio/yat.mp3`
	}, {
        index: 71,
        name: `Lantas - Juicy Luicy `,
        coverImg: `img/80.jpg`,
        audioSrc: `audio/lnts.mp3`
	}, {
        index: 72,
        name: `Angostura - Keshi`,
        coverImg: `img/81.jpg`,
        audioSrc: `audio/ang.mp3`
	}, {
        index: 73,
        name: `Magnolia - Keshi`,
        coverImg: `img/82.jpg`,
        audioSrc: `audio/mag.mp3`
	}, {
        index: 74,
        name: `2 Soon - Keshi`,
        coverImg: `img/83.jpg`,
        audioSrc: `audio/2s.mp3`
	}, {
        index: 75,
        name: `Beside You - Keshi`,
        coverImg: `img/84.jpg`,
        audioSrc: `audio/bsy.mp3`
	}, {
        index: 76,
        name: `Right There - Keshi`,
        coverImg: `img/85.jpg`,
        audioSrc: `audio/rth.mp3`
	}, {
        index: 77,
        name: `Stab - Big Naughty`,
        coverImg: `img/86.jpg`,
        audioSrc: `audio/bn.mp3`
	}, {
        index: 78,
        name: `Joker - Big Naughty`,
        coverImg: `img/87.jpg`,
        audioSrc: `audio/jk.mp3`
	}, {
        index: 79,
        name: `Mommae - Jay Park`,
        coverImg: `img/88.jpg`,
        audioSrc: `audio/mmo.mp3`
	}, {
        index: 80,
        name: `Me Like Yuh - Jay Park`,
        coverImg: `img/89.jpg`,
        audioSrc: `audio/mly.mp3`
	}, {
        index: 81,
        name: `B.Y.S - Keshi`,
        coverImg: `img/108.jpg`,
        audioSrc: `audio/1/bys.mp3`
	}, {
        index: 82,
        name: `Bandaids - Keshi`,
        coverImg: `img/109.jpg`,
        audioSrc: `audio/1/bds.mp3`
	}, {
        index: 83,
        name: `Xoxosos - Keshi`,
        coverImg: `img/92.jpg`,
        audioSrc: `audio/1/xxs.mp3`
	}, {
        index: 84,
        name: `Apollo 11 - Jamie`,
        coverImg: `img/93.jpg`,
        audioSrc: `audio/1/apl.mp3`
	}, {
        index: 85,
        name: `No numbers - Jamie`,
        coverImg: `img/94.jpg`,
        audioSrc: `audio/1/nnm.mp3`
	}, {
        index: 86,
        name: `No one else - GOT7`,
        coverImg: `img/95.jpg`,
        audioSrc: `audio/1/noe.mp3`
	}, {
        index: 87,
        name: `Page - GOT7`,
        coverImg: `img/96.jpg`,
        audioSrc: `audio/1/pg.mp3`
	}, {
        index: 88,
        name: `1+1 - GOT7`,
        coverImg: `img/97.jpg`,
        audioSrc: `audio/1/1+1.mp3`
	}, {
        index: 89,
        name: `Zombie - DAY6`,
        coverImg: `img/98.jpg`,
        audioSrc: `audio/1/zm.mp3`
	}, {
        index: 90,
        name: `You make me - DAY6`,
        coverImg: `img/99.jpg`,
        audioSrc: `audio/1/ymm.mp3`
	}, {
        index: 91,
        name: `Healer - DAY6`,
        coverImg: `img/100.jpg`,
        audioSrc: `audio/1/hlr.mp3`
	}, {
        index: 92,
        name: `Someday Spring Will Come - Wonpil`,
        coverImg: `img/1/101.jpg`,
        audioSrc: `audio/1/ssm.mp3`
	}, {
        index: 93,
        name: `A Writer In A Love Story - Wonpil`,
        coverImg: `img/1/102.jpg`,
        audioSrc: `audio/1/wrt.mp3`
	}, {
        index: 94,
        name: `All About You - Yugyeom`,
        coverImg: `img/1/103.jpg`,
        audioSrc: `audio/1/ygy.mp3`
	}, {
        index: 95,
        name: `Like Me - PH-1`,
        coverImg: `img/1/104.jpg`,
        audioSrc: `audio/1/lm.mp3`
	}, {
        index: 96,
        name: `Escobar - PH-1`,
        coverImg: `img/1/105.jpg`,
        audioSrc: `audio/1/esc.mp3`
	}, {
        index: 97,
        name: `Just like this - LOCO`,
        coverImg: `img/1/106.jpg`,
        audioSrc: `audio/1/jlt.mp3`
	}, {
        index: 98,
        name: `Strawberry & Cigarettes - Troye Sivan`,
        coverImg: `img/1/107.jpg`,
        audioSrc: `audio/1/sc.mp3`
	}, {
        index: 99,
        name: `Kimi No Toriko - Rizky Ayuba`,
        coverImg: `img/90.jpg`,
        audioSrc: `audio/knt.mp3`
	}, {
        index: 100,
        name: `Wrap Me In Plastic - Chromance`,
        coverImg: `img/91.jpg`,
        audioSrc: `audio/wmip.mp3`
	}, {
        index: 101,
        name: `Young Girls - Bruno Mars `,
        coverImg: `img/1/200.jpg`,
        audioSrc: `audio/1/yg.mp3`
	}, {
        index: 102,
        name: `Miss Wanna Die - JulyPhonic, Master Andross`,
        coverImg: `img/1/201.jpg`,
        audioSrc: `audio/1/mwd.mp3`
	}, {
        index: 103,
        name: `Joker - Special Part`,
        coverImg: `img/1/202.jpg`,
        audioSrc: `audio/1/is.mp3`
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


// PLAY NEXT AUDIO ON CLICK
function playNextSong () {
  
    current++;
    playSongOnNextOrPrev()
   
}

// PLAY PREV AUDIO ON CLICK
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











// =============>>> VARIABLES <<<============= //

const musicList = document.querySelector('.music-list');
const musicListBtn = document.querySelector('.musicListBtn');
const xBtn = document.querySelector('.xBtn');
const list = document.querySelector('.list');




// =============>>> EVENTS <<<============= //
musicListBtn.addEventListener('click', showList);
xBtn.addEventListener('click', removeList);
window.addEventListener('load', loadAudios);



// =============>>> FUNCTIONS <<<============= //


function showList () {
    musicList.classList.add('showMusicList');
}

function removeList () {
    musicList.classList.remove('showMusicList');
}


function loadAudios () {
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
   



    const itemContainer = document.querySelectorAll('.item-container');
    itemContainer.forEach(item => {
        item.addEventListener('click', () => {
            current = item.dataset.index;

            coverImg.src = audios[current].coverImg;
            audioName.innerText = audios[current].name;
            audio.src = audios[current].audioSrc;

            audio.play();
            playBtn.innerHTML = `<i class="fas fa-pause"></i>`
            coverImg.style.animationPlayState = `running`
        })
    })
}
