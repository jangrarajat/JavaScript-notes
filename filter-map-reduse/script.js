const songs = [
    {songCatagry : "bollywood" , name: "Make Some Noise ", path: "/songs/1.mp3", cover: "/images/1.jpg" },
    {songCatagry :  "bollywood" , name: "💕Heart Touching Jukebox ❤️", path: "/songs/2.mp3", cover: "/images/2.jpg" },
    {songCatagry : "haryanvi" , name: "2 Numbari ", path: "/songs/3.mp3", cover: "/images/3.jpg" },
    {songCatagry : "panjabi" , name: "5 Taara ", path: "/songs/4.mp3", cover: "/images/4.jpg" },
    {songCatagry : "panjabi" , name: "Thunder - Imagine Dragons", path: "/songs/5.mp3", cover: "/images/5.jpg" },
    {songCatagry :"bollywood" , name: "Faded - Alan Walker", path: "/songs/6.mp3", cover: "/images/6.jpg" },
    {songCatagry :"bollywood"  , name: "Cheap Thrills - Sia", path: "/songs/7.mp3", cover: "/images/7.jpg" },
    {songCatagry :"bollywood"  , name: "Closer - The Chainsmokers", path: "/songs/8.mp3", cover: "/images/8.jpg" },
    {songCatagry :"bollywood"  , name: "Let Me Love You - DJ Snake", path: "/songs/9.mp3", cover: "/images/9.jpg" },
    {songCatagry :"bollywood"  , name: "Starboy - The Weeknd", path: "/songs/10.mp3", cover: "/images/10.jpg" },
    {songCatagry :"panjabi"  , name: "3 Peg - Sharry Mann", path: "/songs/11.mp3", cover: "/images/10.jpg" }
];

let bollywoodSongs = songs.filter((bollywood)=> bollywood.songCatagry === "bollywood" )
console.log(bollywoodSongs)

