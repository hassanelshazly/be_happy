/************ Smoth Scrolling *********/
document.querySelectorAll('a[href^="#"]').forEach(links => {
    links.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/************ Quote Section *********/
function quote(a){
    switch (a){
        case 1: 
            document.getElementById("quote").innerHTML = 'In the long run, competition makes us better... it drives innovation'; 
            break;
        case 2: 
            document.getElementById("quote").innerHTML = "Age is something that doesn't matter, unless you are a cheese"; 
            break;
        default: 
            document.getElementById("quote").innerHTML = "The best leaders begin with an environment that embraces and rewards change and innovation."; 
    }
};

/************ Math Section *********/
function multiplication(){
    "use strict"; 
    document.getElementById("multip").value =  " " ;
    document.getElementById("result").innerHTML = " ";
    var x = document.getElementById("fst-num").innerHTML, 
        y = document.getElementById("sec-num").innerHTML, 
        r = x*y;
        document.getElementById("multip").value =  r ; 
};
function randomNo(){
    "use strict"; 
    document.getElementById("multip").value =  " " ;
    document.getElementById("result").innerHTML = " ";
    var nom = Math.random(), 
        x = Math.floor((nom*50)+1), 
        y = Math.floor((nom*30)+1);
    document.getElementById("fst-num").innerHTML = x;
    document.getElementById("sec-num").innerHTML = y;
    
}
document.getElementById("check").onclick = function(){
    "use strict"; 
    var x = document.getElementById("fst-num").innerHTML, 
        y = document.getElementById("sec-num").innerHTML, 
        r = x*y;
    if (document.getElementById("multip").value == r){
        document.getElementById("result").innerHTML = "Yes, you do it!"; 
        document.getElementById("result").style.color = "green"; 
    }else{
        document.getElementById("result").innerHTML = "No, Please try again"; 
        document.getElementById("result").style.color = "red"; 
    }
}

/************ Music Section *********/
var song = new Audio();
function play(a)
{
    song.pause();
    switch(a)
    {
        case 1 : song.src = 'music/Firework.mp3' ; break ;
        case 2 : song.src = 'music/Katy Perry - Roar (Official).mp3' ; break ;
        case 3 : song.src = 'music/Shape of You.mp3' ; break ;
        case 4 : song.src = 'music/Adele - Hello.mp3' ; break ;
        case 5 : song.src = 'music/See You Again ft. Charlie Puth.mp3' ; break ;
        case 6 : song.src = 'music/We Own It (Fast & Furious).mp3' ; break ;
        case 7 : song.src = 'music/The Way I Am.mp3' ; break ;
        case 8 : song.src = 'music/dont_worry_be_happy.mp3' ; break ;
    }
    song.play();
    document.getElementById("song_name").innerHTML = document.getElementById(a).innerText ; 
}
function pause()
{
    if(!song.paused)
    {
        song.pause();
        document.getElementById("song_name").insertAdjacentHTML('beforeend', " - Paused") ;
    }
}
function Resume()
{
    song.play();
    var s = document.getElementById("song_name").innerHTML ;
    s = s.replace(" - Paused","");
    document.getElementById("song_name").innerHTML = s ;
}
function play_random()
{
    var x = Math.random() ; 
    x = Math.floor((x*8)+1);
    play(x);
}
