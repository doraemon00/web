var goPreBtn = document.getElementById("goPre");
var goNextBtn = document.getElementById("goNext");
var items = document.getElementsByClassName("item");
var points = document.getElementsByClassName("point");

var time = 0;  //定时器图片跳转参数
var index = 0;

var clearActive = function(){
    for(var i=0;i<items.length;i++){
        items[i].className = 'item';
    }
    for(var i=0;i<points.length;i++){
        points[i].className = 'point'
    }
}

var goIndex = function(){
    clearActive();
    // console.log(index);
    items[index].className = 'item active';
    points[index].className = 'point active';
}

var goNext = function(){
    if(index < items.length-1){
        index++;
    }else{
        index = 0;
    }
    goIndex();
}

var goPre = function(){
    if(index == 0){
        index=items.length-1;
    }else{
        index --;
    }
    goIndex();
}

// goNextBtn.addEventListener('click',function(){
//     goNext();
// })
// goPreBtn.addEventListener('click',function(){
//     goPre();
// })

for(var i=0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
        time=0;
    })
}

setInterval(function(){
    time++;
    if(time == 20){
        goNext();
        time = 0;
    }
},150)












