let h,xn,lv;
let r=[[],[],[],[],[],[],[],[],[],[]];
let k=[0,1,2,3,4,5,6,7,8,9];
let s=k;
let xnum = document.querySelectorAll('.xnum');
let x1m = document.querySelectorAll('.x1m');
let otvtext = document.querySelectorAll('.otvtext');
let proizvedenie = document.querySelectorAll('.proizvedenie');
let level1 = document.querySelectorAll('.xlevel1');
let otv = document.querySelectorAll('.otv');
let xex = document.querySelectorAll('.otv');
let otvChet=[1,1,1,1,1,1,1,1,1,1];
tabumnog(r);
stXnumX1m(1);
Level1(1);
peremesh(s);
//colorXex(1);
/*      let proizvedenieXY=proizvedenie[1].getBoundingClientRect();
      let proizvedenieX=proizvedenieXY.left;
      let otvXY=otv[1].getBoundingClientRect();
      let otvX=otvXY.left;
      console.log(proizvedenieX);
      console.log(otvX);
     let xx=otvX-proizvedenieX+'px';
       console.log(xx);*/
    function colorXex(x) {
      if (lv==1){proizvedenie[x-1].style='background-color: yellow';
      }
    }
    function driveout(x) {
      if (lv==1){otv[x-1].style='transform: translateX(0px)';
      otvChet[x-1]=1;}
    }
    function drive(x) {
     if (lv==1){otv[x-1].style='transform: translateX(-65px)';
      otvChet[x-1]=-1;}
    }
    function peremesh(m) {
      for (i = m.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        q = m[i]
        m[i] = m[j]
        m[j] = q
      }
    }
    function stXnumX1m(x) {
      xn=x;
      if (lv!=1) {peremesh(s);}
      var i;
      for (i = 0; i < 10; i++) {
        xnum[i].style="opacity: 0.6";
        otvtext[i].innerHTML=r[x-1][i];
        x1m[i].innerHTML=x+' x '+ (i+1) +' = ';
        if (otvChet[i]==-1) {driveout(i+1)}
        if (lv!=1) {otvtext[i].innerHTML=r[x-1][s[i]];}
        if (lv==3) {proizvedenie[i].innerHTML=r[x-1][i];proizvedenie[i].style='display: none';}
        if (lv!=3) {proizvedenie[i].innerHTML=r[x-1][i];proizvedenie[i].style='display: visible';}
      }
      if (xnum[x-1]) {
        xnum[x-1].style="opacity: 1";
      }
    }
    function Level1(x) {
      var i;
      for (i = 0; i < 3; i++) {
        level1[i].style="opacity: 0.6";
      }
      if (level1[x-1]) {
        level1[x-1].style="opacity: 1";
        lv=x;
        if (lv==1) {
          stXnumX1m(xn);
        }
        if (lv!=1) {
          peremesh(s);
          stXnumX1m(xn);
        }
        if (lv==3) {
          for (i = 0; i < 10; i++) {
            if (lv==3) {proizvedenie[i].style='display: none';}
          }
        }
        if (lv!=3) {
            for (i = 0; i < 10; i++) {
              if (lv!=3) {proizvedenie[i].style='display: visible';}
            }
        }
      }
    }
    function tabumnog(mr){
     var i,j;
     for (i = 0; i < 10; i++) {
      for (j = 0; j < 10; j++) {
        mr[i][j]=(i+1)*(j+1);
      }
    }
  }
