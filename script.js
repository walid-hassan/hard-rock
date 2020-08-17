document.querySelector(".search").addEventListener("click", () => {
    getdata(0, '.lyrics-nameOne', '.nameOne', '.album-imgOne');
    getdata(1, '.lyrics-nameTwo', '.nameTwo', '.album-imgTwo' );
    getdata(2, '.lyrics-namethree', '.namethree', '.album-imgthree')
    getdata(3, '.lyrics-nameFour', '.nameFour', '.album-imgFour')
    getdata(4, '.lyrics-nameFive', '.nameFive', '.album-imgFive')
    getdata(5, '.lyrics-nameSix', '.nameSix', '.album-imgSix')
    getdata(6, '.lyrics-nameSeven', '.nameSeven', '.album-imgSeven')
    getdata(7, '.lyrics-nameEight', '.nameEight', '.album-imgEight')
    getdata(8, '.lyrics-nameNine', '.nameNine', '.album-imgNine')
    getdata(9, '.lyrics-nameTen', '.nameTen', '.album-imgTen')
})
document.querySelector(".getOne").addEventListener("click", () => {
    getlyrics('.nameOne', '.lyrics-nameOne');
})
document.querySelector(".getTwo").addEventListener("click", () => {
    getlyrics('.nameTwo', '.lyrics-nameTwo');
})
document.querySelector(".getthree").addEventListener("click", () => {
    getlyrics( '.namethree', '.lyrics-namethree');
})
document.querySelector(".getFour").addEventListener("click", () => {
    getlyrics('.nameFour', '.lyrics-nameFour');
})
document.querySelector(".getFive").addEventListener("click", () => {
    getlyrics('.nameFive', '.lyrics-nameFive');
})
document.querySelector('.getSix').addEventListener("click", () => {
    getlyrics('.nameSix', '.lyrics-nameSix');
})
document.querySelector(".getSeven").addEventListener("click", () => {
    getlyrics( '.nameSeven', '.lyrics-nameSeven');
})
document.querySelector(".getEight").addEventListener("click", () => {
    getlyrics('.nameEight', '.lyrics-nameEight');
})
document.querySelector(".getNine").addEventListener("click", () => {
    getlyrics('.nameNine', '.lyrics-nameNine');
})
document.querySelector(".getTen").addEventListener("click", () => {
    getlyrics('.nameTen', '.lyrics-nameTen');
})
function showdata(id, data){
    document.querySelector(id).innerText = data;
}
function getdata(id, name, singer , imgbox){
    const keyword = document.querySelector('.keyword').value;
    const api = `https://api.lyrics.ovh/suggest/${keyword}`
    fetch (api)
    .then(res => res.json())
    .then( data => {
        let songName = data.data[id].title;
        let artist = data.data[id].artist.name;
        let imgLink = data.data[id].artist.picture;
        showdata(name, songName);
        showdata(singer, artist);
        addimg( imgbox, imgLink);
        document.querySelector('.keyword').value = "";
        document.getElementById('result').style.display = 'block';
    })
}
function getlyrics(singer, name){
    let artist = document.querySelector(singer).innerText;
    let song = document.querySelector(name).innerText;
    let api = `https://api.lyrics.ovh/v1/${artist}/${song}`
    fetch (api)
    .then(res => res.json())
    .then( data => {
        if (data.lyrics){
            let lyrics = data.lyrics;
            document.querySelector('.lyric').innerText = '';
            showdata('.lyric', lyrics);
            document.querySelector('.songName').innerText = song;
            document.querySelector('.singerName').innerText = artist;
        }
        else{
            alert ('Sorry No lyrics Found');
            document.querySelector('.lyric').innerText = '';
        }
    })
}
function addimg(place, link) {
    let artistImage = document.querySelector(place);
    artistImage.innerHTML = '';
    let img = document.createElement('img');
    img.src = link;
    artistImage.appendChild(img);
}