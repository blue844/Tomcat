//  var i = 0;
//  function change(name) {
   
//     i++;
//     var img = document.getElementById('tom');
//     //var j ;
//     // if (i < 10) {
//     //     j = "0"+i;
//     // }
//     // else{
//     //     j = i;
//     // }
    // img.src = "tomImages/"+"name/"+"name"+(i<10?"0"+i:i)+".jpg";
//   // alert(i);
//   console.log(i);
  //  var player = document.getElementById("player");
  //  player.src = "tomImages/sounds/angry.m4a";
//   //让player播放
//   player.play();
 //}
// setInterval(change,100);
//change();
// 点击屏幕所触发的方法

// function action(event) {
//   //alert("我点击到屏幕了");
//   //找到鼠标点击的点的坐标
//   var x = event.clientX;
//   var y = event.clientY;
//   //alert(x +'     '+ y);
//   // var c=document.getElementById("evendiv")
//   console.log(x,y);
//   if(x>=53 && y>=75 && x<=110&&y<=140)
//   {
//     //alert('左耳朵');
//    // play("drink");
//   //  play(参数)，它是能得到一个值，因而，无论几次就出现一次的效果
//   //play是方法名，代表每隔多少秒让这个方法执行
//   // setInterval(play(undefined),50);
//   //因而我要做到的是每隔单位时间调用传参数的方法
//   // setInterval(function () {
//   //   play("drink");
//   // },50);
//   // setInterval(play,50);

//  play("drink",80);


    
//   }
// }
function play(name,total) {
  var i = 0 ;
  //创建tom标签的对象
  var img = document.getElementById("tom");
  //创建音频标签的对象
  var player = document.getElementById("player");
 //设置播放来源
  player.src = "tomImages/sounds/"+name+".m4a";
  //播放音频
  //player.play();


  changeImage();
   function changeImage() {
      img.src = "tomImages/"+name+"/"+name+"_"+(i<10?"0"+i:i)+".jpg";
      //setInterval(changeImage,50);
      i++;
      //当i超过图片总数时，将其还原为第一张
      if(i >total){
        img.src = "tomImages/"+"angry"+"/"+"angry"+"_00"+".jpg";
        return;
      }
      //当图片小于总图片数的时候，将＋＋写入该方法体内，可以达到，只在范围内增加的效果
      // if(i <= total)
      // {
        // i++;
          //当发生喝牛奶的动作时，它由2部分组成，一部分是
      //倒牛奶,一部分是喝牛奶
      //认真观察什么时候倒什么时候喝
      if(name=="drink"&&i == 16)
      {
        player.src = "tomImages/sounds/"+"pour"+".m4a";
        player.play();
      }
      if(name=="drink"&&i==35)
      {
         player.src = "tomImages/sounds/"+"drink"+".m4a";
         player.play();
      }
      

      //隔50毫秒再次调用changeImage，
      //只让自己这个方法里面的代码执行一次
      setTimeout(changeImage,110);
      }
     
   

  
 
}

