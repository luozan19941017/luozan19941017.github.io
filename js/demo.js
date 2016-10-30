$(function(){

function num(i,podeg){
        var canvas =$('canvas').get(i);
        var ctx = canvas.getContext("2d");
        var W = canvas.width;
        var H = canvas.height;
        var deg=0;
        var loop;
        var text,text_w;
        function init(){
            ctx.clearRect(0,0,W,H);
            ctx.beginPath();
            ctx.strokeStyle="rgb(245, 245, 245)";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,65,0,Math.PI*2,false);
            ctx.stroke();

            var r = deg*Math.PI/180;
            ctx.beginPath();
            ctx.strokeStyle = "rgb(86,178,230)";
            ctx.lineWidth=10;
            ctx.arc(W/2,H/2,65,0-90*Math.PI/180,r-90*Math.PI/180,false);
            ctx.stroke();
            ctx.fillStyle="#fff";
            ctx.font="25px 'Raleway'";
            text = Math.floor(deg/360*100)+"%";
            text_w = ctx.measureText(text).width;
            ctx.fillText(text,W/2 - text_w/2,H/2+15);
        }
        function draw(new_deg){
            loop = setInterval(function(){
                deg++;
                if(deg==new_deg){
                    clearInterval(loop)
                }
                init();
            },1);
        }
        draw(podeg);
    }
    // function load(){
        num(0,342);
        num(1,342);
        num(2,324);
        num(3,324);
        num(4,324);
        num(5,324);
        num(6,288);
        num(7,324);
        num(8,180);
        num(9,210);
    // }
})