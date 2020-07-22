var display = '';

document.getElementById("key-1").addEventListener("click", function() {click_key('1')});
document.getElementById("key-2").addEventListener("click", function() {click_key('2')});
document.getElementById("key-3").addEventListener("click", function() {click_key('3')});
document.getElementById("key-4").addEventListener("click", function() {click_key('4')});
document.getElementById("key-5").addEventListener("click", function() {click_key('5')});
document.getElementById("key-6").addEventListener("click", function() {click_key('6')});
document.getElementById("key-7").addEventListener("click", function() {click_key('7')});
document.getElementById("key-8").addEventListener("click", function() {click_key('8')});
document.getElementById("key-9").addEventListener("click", function() {click_key('9')});
document.getElementById("key-0").addEventListener("click", function() {click_key('0')});
document.getElementById("key-decimal").addEventListener("click", function() {click_key('.')});
document.getElementById("key-plus").addEventListener("click", function() {click_key(' + ')});
document.getElementById("key-minus").addEventListener("click", function() {click_key(' - ')});
document.getElementById("key-multiply").addEventListener("click", function() {click_key(' * ')});
document.getElementById("key-divide").addEventListener("click", function() {click_key(' / ')});
document.getElementById("key-equal").addEventListener("click", function() {click_key('=')});

document.getElementById("key-C").addEventListener("click", function() {
    if(display != ''){
        display = display.substr(0, display.length - 1);
        if(display == '')
        {
            document.getElementById("display").innerHTML = '[Display]';
        }
        else {
            document.getElementById("display").innerHTML = display;
        }
    }
});
document.getElementById("key-CE").addEventListener("click", function() {
    display = '';
    document.getElementById("display").innerHTML = '[Display]';
});

function click_key(this_key){
    if(this_key == '='){
        var res = eval(display);
        display = res.toString();        
    }
    else{
        display = display.concat(this_key);
        console.log(display);
    }
    document.getElementById("display").innerHTML = display;
}