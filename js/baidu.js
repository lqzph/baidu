$(function () {
    var clienth=$(window).height();
    var num=0;
    var falg=true;
    touch.on("body","swipeup","#full",function () {
        if(!falg){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        falg=false;
        $("#full").css({marginTop:-num*clienth})
    })
    touch.on("body","swipedown","#full",function () {
        if(!falg){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        falg=false;
        $("#full").css({marginTop:-num*clienth})
    })
    $("#full")[0].addEventListener("webkitTransitionEnd",function () {
        falg=true;
    })
    
})