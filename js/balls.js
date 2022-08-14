let h,xn,lv=1,lvprev=1,f=0;
var kuku = new Audio('../audio/kuku.wav');
var yes = new Audio('../audio/yes.wav');
var bells = new Audio('../audio/bells.wav');
var xnext=1;u2=0;
let r=[[],[],[],[],[],[],[],[],[],[]];
var k=[0,1,2,3,4,5,6,7,8,9];
var s=k,f1=1;
var p=[0,1,2,3,4,5,6,7,8,9];
var ibg=0;
var oshibka=0;
const ball = document.querySelectorAll('.ball');
let xbody = document.querySelector('.xbody');
let pole__balls = document.querySelector('.pole__balls');
let balls_menu = document.querySelector('.balls_menu');
let ball_text = document.querySelectorAll('.ball_text');
let xnum = document.querySelectorAll('.xnum');
let x1m = document.querySelectorAll('.x1m');
let otvtext = document.querySelectorAll('.otvtext');
let proizvedenie = document.querySelectorAll('.proizvedenie');
let level1 = document.querySelectorAll('.xlevel1');
let otv = document.querySelectorAll('.otv');
let otvAudio = document.querySelectorAll('.otvAudio');
let xex = document.querySelectorAll('.xex');
let zadanietext = document.querySelectorAll('.zadanietext');
let otvChet=[1,1,1,1,1,1,1,1,1,1];
let yy=[11,12,13,14,15,16,17,18,19,20];
tabumnog(r);
stXnumX1m(1);
Level1(1);
colorXex(1);iosh=0;
function ballsGame(x) {
  ballsGameStyle(x);
  balls_menu.innerHTML=x+' x '+ (p[ibg]+1) +' = ';
  ball.forEach(onBallClick);
  iosh++;
}
function onBallClick(item,index,arr) {
  item.addEventListener("click", function(){
    if (p[ibg]==index) {
      arr[index].style='color: green;';
      bells.play();
      otvChet[index]=-1;
      ibg++;
    }
    else{
      if (otvChet[index]==1) {
        kuku.play();
        balls_menu.style='animation-name: Red; animation-duration: 0.5s;';
        oshibka++;
      }
    }
    if(ibg<10){balls_menu.innerHTML=xn+' x '+ (p[ibg]+1) +' = ';}
    if(ibg==10){balls_menu.innerHTML='Ошибок: '+oshibka/iosh;}
 });
}
    function ballsGameStyle(x) {
      peremesh(p);
      peremesh(s);
      for (var i = 0; i < 10; i++) {
        ball[i].innerHTML=r[x-1][i];
        switch(i){
          case 0: ball[i].style='animation-name: b0; animation-duration: 67s; animation-iteration-count:infinite; animation-timing-function: linear;'; break;
          case 1: ball[i].style='animation-name: b1; animation-duration: 27s; animation-iteration-count:infinite; animation-timing-function: linear;'; break;
          case 2: ball[i].style='animation-name: b2; animation-duration: 32s; animation-iteration-count:infinite; animation-timing-function: linear;'; break;
          case 3: ball[i].style='animation-name: b3; animation-duration: 22s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
          case 4: ball[i].style='animation-name: b4; animation-duration: 15s; animation-iteration-count:infinite; animation-timing-function: linear;'; break;
          case 5: ball[i].style='animation-name: b5; animation-duration: 65s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
          case 6: ball[i].style='animation-name: b6; animation-duration: 44s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
          case 7: ball[i].style='animation-name: b7; animation-duration: 40s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
          case 8: ball[i].style='animation-name: b8; animation-duration: 25s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
          case 9: ball[i].style='animation-name: b9; animation-duration: 30s; animation-iteration-count:infinite; animation-timing-function: linear; animation-fill-mode: both;'; break;
        }
      }

    }


    function obnulenieStyles() {
      for (var i = 0; i < 10; i++) {
        otv[i].style='transform: translateXY(0px)';
        xex[i].style='animation-name: Xex';
      }
      if (lv!=1){
        for (var i = 0; i < 10; i++) {
          if (xnext==s[i]){f1=i;}
        }
        startXex(xnext);
      }
    }
    function Yy(j) {
          yy[j-1]=s[j-1]-(j-1);/*console.log('s[j-1] = ' +s[j-1]+ ' j-1='+(j-1)+' yy[j-1]='+yy[j-1]);*/
          let i=j-1;
        switch(yy[i]){
          case 0: otv[i].style='animation-name: exampleDrive;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 1: otv[i].style='animation-name: yy1;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -1: otv[i].style='animation-name: yy_1;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 2: otv[i].style='animation-name: yy2;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -2: otv[i].style='animation-name: yy_2;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 3: otv[i].style='animation-name: yy3;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -3: otv[i].style='animation-name: yy_3;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 4: otv[i].style='animation-name: yy4;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -4: otv[i].style='animation-name: yy_4;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 5: otv[i].style='animation-name: yy5;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -5: otv[i].style='animation-name: yy_5;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 6: otv[i].style='animation-name: yy6;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -6: otv[i].style='animation-name: yy_6;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 7: otv[i].style='animation-name: yy7;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -7: otv[i].style='animation-name: yy_7;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 8: otv[i].style='animation-name: yy8;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -8: otv[i].style='animation-name: yy_8;animation-duration: 0.5s;animation-fill-mode: both;'; break;
          case 9: otv[i].style='animation-name: yy9;animation-duration: 0.5s;animation-fill-mode: both;'; break; case -9: otv[i].style='animation-name: yy_9;animation-duration: 0.5s;animation-fill-mode: both;'; break;
        }
    }
    function YyBack(j) {
          yy[j-1]=s[j-1]-(j-1);/*console.log('s[j-1] = ' +s[j-1]+ ' j-1='+(j-1)+' yy[j-1]='+yy[j-1]);*/
          let i=j-1;
        switch(yy[i]){
          case 0: otv[i].style='animation-name: exampleDrive;animation-duration: 2.5s;'; break;
          case 1: otv[i].style='animation-name: yy1;animation-duration: 2.5s;'; break; case -1: otv[i].style='animation-name: yy_1;animation-duration: 2.5s;'; break;
          case 2: otv[i].style='animation-name: yy2;animation-duration: 2.5s;'; break; case -2: otv[i].style='animation-name: yy_2;animation-duration: 2.5s;'; break;
          case 3: otv[i].style='animation-name: yy3;animation-duration: 2.5s;'; break; case -3: otv[i].style='animation-name: yy_3;animation-duration: 2.5s;'; break;
          case 4: otv[i].style='animation-name: yy4;animation-duration: 2.5s;'; break; case -4: otv[i].style='animation-name: yy_4;animation-duration: 2.5s;'; break;
          case 5: otv[i].style='animation-name: yy5;animation-duration: 2.5s;'; break; case -5: otv[i].style='animation-name: yy_5;animation-duration: 2.5s;'; break;
          case 6: otv[i].style='animation-name: yy6;animation-duration: 2.5s;'; break; case -6: otv[i].style='animation-name: yy_6;animation-duration: 2.5s;'; break;
          case 7: otv[i].style='animation-name: yy7;animation-duration: 2.5s;'; break; case -7: otv[i].style='animation-name: yy_7;animation-duration: 2.5s;'; break;
          case 8: otv[i].style='animation-name: yy8;animation-duration: 2.5s;'; break; case -8: otv[i].style='animation-name: yy_8;animation-duration: 2.5s;'; break;
          case 9: otv[i].style='animation-name: yy9;animation-duration: 2.5s;'; break; case -9: otv[i].style='animation-name: yy_9;animation-duration: 2.5s;'; break;
        }
    }

    function startXex(x) {
      if (lv==1 && x>-1) {
        otv[x-1].style='animation-name: example; animation-duration: 2.5s;';
        xex[x-1].style='animation-name: exampleXex; animation-direction: reverse; animation-duration: 2.5s; animation-fill-mode: both;';
      }
      if (x==-1) {x=1;
        otv[x-1].style='animation-name: example; animation-duration: 2.5s;';
        xex[x-1].style='animation-name: exampleXex1; animation-direction: reverse; animation-duration: 2.5s; animation-fill-mode: both;';
      }
      if (lv==2 || lv==3) {
        if (lv==2){YyBack(f1+1);}
        xex[xnext].style='animation-name: exampleXex; animation-direction: reverse; animation-duration: 2.5s; animation-fill-mode: both;';
      }
    }
    function colorXex(x) {
      if (lv==1){
        xex[x-1].style='animation-name: exampleXex; animation-direction: reverse; animation-duration: 2.5s;animation-fill-mode: both;';
      }
    }
    function driveout(x) {
      if (lv==1){
        if (x!=1){otv[x-1].style='transform: translateX(0px)';
                 xex[x-1].style='animation-name: Xex';}
        if (x==xnext-1){xex[x].style='animation-name: Xex'; xnext=1; startXex(-1);}
      }
      otvChet[x-1]=1;
    }
    function drive(x) {
     if (lv==1 && x==xnext && otvChet[x-1]==1){
      otv[x-1].style='animation-name: exampleDrive; animation-duration: 0.5s;animation-fill-mode: both;';
      yes.play();
      xex[x-1].style='animation-name: exampleXex; animation-duration: 1s;animation-fill-mode: both;';
      if(x<10){xex[x].style='animation-name: exampleXex; animation-duration: 1s; animation-direction: reverse; animation-fill-mode: both;';}
      otvChet[x-1]=-1;
      if(xnext<10){xnext=x+1;}
     } else{if (lv==1 && x!=xnext && otvChet[x-1]!=-1){
              otv[x-1].style='animation-name: exampleRed; animation-duration: 0.5s;';
              kuku.play();
            }
        }

     if (lv!=1 && s[x-1]==p[u2] && u2<10){
      if (u2<10){u2++}
        otvChet[x-1]=-1;
        Yy(x);
        yes.play();
        xex[p[u2-1]].style='animation-name: exampleXex; animation-duration: 1s; animation-fill-mode: both;';
        if (u2<10){xex[p[u2]].style='animation-name: exampleXex; animation-duration: 1s; animation-direction: reverse; animation-fill-mode: both;';
        }
     }else{if (lv!=1 && s[x-1]!=p[u2] && u2<10 && otvChet[x-1]!=-1){
              otv[x-1].style='animation-name: exampleRed; animation-duration: 0.5s;';
              kuku.play();
            }
      }
    }
    function peremesh(m) {
      for (i = m.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        q = m[i]
        m[i] = m[j]
        m[j] = q
      }/*console.log('m='+m);*/
    }
    function stXnumX1m(x) {
      if (xnext==1){startXex(-1);}
      xn=x;
      peremesh(p);
      peremesh(s);
      var i;
      for (i = 0; i < 10; i++) {
        xnum[i].style="opacity: 0.6";
        //сделать вывод на экран 1 раз (две следующие строки)
        otvtext[i].innerHTML=r[x-1][i];
        x1m[i].innerHTML=x+' x '+ (i+1) +' = ';
        if (otvChet[i]==-1 && lv==1){driveout(i+1);}
        if (otvChet[i]==-1 && lv==4){otvChet[i]=1;}
        if (lv!=1) {otvtext[i].innerHTML=r[x-1][s[i]];}
        if (lv==3) {proizvedenie[i].innerHTML=r[x-1][i];proizvedenie[i].style='display: none';}
        if (lv!=3) {proizvedenie[i].innerHTML=r[x-1][i];proizvedenie[i].style='display: visible';
        if (i==9) {driveout(1);}}
      }
      if (lv==4) {ibg=0; oshibka=0;ballsGame(xn);}
      if (xnum[x-1]) {
        xnum[x-1].style="opacity: 1";
      }
      if (lv==2 || lv==3) {u2=0; xnext=p[u2]; obnulenieStyles();}
    }
    function Level1(x) {lv=x;
      if (lvprev!=1 && lv==1){
        xnext=1;
        obnulenieStyles();
        lvprev=x;
        stXnumX1m(xn);
      }
      var i;
      for (i = 0; i < 4; i++) {
        level1[i].style="opacity: 0.6";
      }
      if (level1[x-1]) {
        level1[x-1].style="opacity: 1";
        if (lv==1 && xnext!=1) {
          stXnumX1m(xn);
        }
        if (lv!=1) {
          xnext=p[0];
          peremesh(s);
          stXnumX1m(xn);
        }
        if (lv==3) {
          for (i = 0; i < 10; i++) {
            if (lv==3) {proizvedenie[i].style='display: none';}
          }
        }
        if (lv==1 || lv==2) {
            for (i = 0; i < 10; i++) {
              if (lv!=3) {proizvedenie[i].style='display: visible';}
            }
        }
      }
      if (lv!=4) {
        pole__balls.style='display: none';
        xbody.style='display: visible';
      }
      if (lv==4) {
        xbody.style='display: none';
        pole__balls.style='display: visible';
      }
      lvprev=x;
    }
    function tabumnog(mr){
     var i,j;
      for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
          mr[i][j]=(i+1)*(j+1);
        }
      }
    }
