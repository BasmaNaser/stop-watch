var display = document.getElementById("displayTime");
var timer;
var [h, m, s] = [0, 0, 0];
var timer=null;
function watch() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }
    let hour = h < 10 ? "0" + h : h;
    let second = s < 10 ? "0" + s : s;
    let minute = m < 10 ? "0" + m : m;
    result = hour + ":" + minute + ":" + second;
    display.innerHTML=result;
}
function watchstart(){
    timer = setInterval(watch, 1000);
}
function watchstop(){
    clearInterval(timer);
}
function watchclear(){
    timer=clearInterval(timer);
    [h,m,s]=[0,0,0];
    display.innerHTML="00:00:00";
}
