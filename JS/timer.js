var tracker=0;
var timerVar;
var min;
var sec;
var mins;

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    function tick() {
        tracker++;
        var counter = document.getElementById("counter");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timerVar = setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
        if(tracker==300){
            min=parseInt(tracker/60);
            sec=parseInt(tracker%60);
            alert("You ran out of time!");
            showScores();
        }
        min=parseInt(tracker/60);
        sec=parseInt(tracker%60);
    }
    tick();
}

function stopTimer(){
    clearTimeout(timerVar);
}



