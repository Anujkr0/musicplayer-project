

let songIndex = 0;
let audioElement = new Audio('songs/song2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Me tenu samjahan ki", filePath: "songs/song2.mp3", coverPath: "cover/cover1.jpg"},
    {songName: "mujhse shadi karogi", filePath: "songs/song2.mp3", coverPath: "cover/cover2.jpg"},
    {songName: "Agar tum Sath ho", filePath: "songs/song3.mp3", coverPath: "cover/cover3.jpg"},
    {songName: "Aaj mausam bada baiyan hai", filePath: "songs/song4.mp3", coverPath: "cover/cover4.jpg"},
    {songName: "Mere Khwabon Mein", filePath: "songs/song5.mp3", coverPath: "cover/cover5.jpg"},
    {songName: "Mil Gaya Humko Saathi Mil Gaya", filePath: "songs/song2.mp3", coverPath: "cover/cover5.jpg"},
    {songName: "Mausam Hai Ashiqana", filePath: "songs/song3.mp3", coverPath: "cover/cover2.jpg"},
    {songName: "Mera Joota Hai Japani", filePath: "songs/song4.mp3", coverPath: "cover/cover3.jpg"},
    {songName: "Main Chali Main Chali", filePath: "songs/song32.mp3", coverPath: "cover/cover2.jpg"},
    {songName: "Maula Mere Maula Uplifting (Club Mix)", filePath: "songs/song4.mp3", coverPath: "cover/cover1.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})