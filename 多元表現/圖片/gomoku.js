String.prototype.replaceAt = function(start, end, what) {//from stackoverflow
  return this.substring(0, start) + what + this.substring(end);
};
let i,ps=[[5,5],[11,5],[5,11],[11,11],[8,8]];
function gen(n,x,y){htm+='<div class="d2" onclick="command(this);"><img src="圖片/five-'+n+'.jpg" class="s1"><span class="dot" id="sp'+get2Dw15(x,y)+'" name="sp"></span></div>';return null;}
function valid(x,y){let i;for(i=0;i<ps.length;i++){if(x==ps[i][0] && y==ps[i][1]){return true;}}return false;}
function command(e){
    //console.log(1,game.length);
    spN=e.children.namedItem("sp");
	//console.log(2,game.length);
	if(getColor(spN)=="" && !global_lock && !full){
		let position = Number(spN.id.substring(2));
	    setColor(spN,us);//color of user.
		//console.log(3,game.length);
		setGame(position,c2d[us]);//color to digit string, color of user.
		//console.log(4,game.length);
		//if(!didwewin()){
		if(isletI)
		    {didwewin();last=position;lastColor=us;}
	    else
		    {computerSelect();}
	}
}
function getColor(e){return e.style.backgroundColor;}
function setColor(e,c){e.style.backgroundColor=c;}
function getGame(){game="";for(i=0;i<sp.length;i++){game+=c2d[getColor(sp[i])];}return game;}
function setGame(p,c){game=game.replaceAt(p,p+1,c);}
function setGameR(g,p,c){return g.replaceAt(p,p+1,c);}
function adc(e,c){e.classList.add(c);}
function setAll(position,color){setGame(position,c2d[color]);setColor(sp[position],color);}
function computerSelect(){
	if(didwewin()){return;}
    gj=game;
	global_lock=true;
	getGame();
	let position=f222(game);
	setAll(position,cm);
	global_lock=false;
	didwewin();
	last=position;
	lastColor=cm;
	return position;
}
function check(){
    if(last!=undefined){
        setColor(sp[last],"aqua");
        setTimeout(function(){setColor(sp[last],lastColor);}, 500);
	}
}
function labelAnime(e){anime(e,'#e7e6e6','#efefef',270);}
function anime(e,originalColor,newColor,timeMilliSecond){/*element*/setColor(e,newColor);setTimeout(function(){setColor(e,originalColor);}, timeMilliSecond);}
function get2Dw15(x1,y1){w=15;return w*y1+x1;}
function iffilled(){let f=true;for(i=0;i<sp.length;i++){if(getColor(sp[i])==""){f=false;break;}}return f;}
function didwewin(){
	if(full){return 1;}
    let x=ifwin(game);full=true;
    if(x==computerID){document.getElementById("score").innerHTML="你輸了";return 1;}
	else if(x==playerID){document.getElementById("score").innerHTML="你贏了";return 1;}
	else{full=iffilled()}//是否棋盤已滿
	if(full){document.getElementById("score").innerHTML="平手";return 1;}
	return 0;
}
function letU(){if(last==undefined){last=randomInt(sp.length-1);setAll(last,cm);}else{computerSelect();}}
function letI(e) {isletI=e.checked;return e.checked;}
function changeAll(){for(i=0;i<sp.length;i++){setColor(sp[i],cc2d[game[i]]);}}
function getModeLabel(){return document.querySelector('#select_mode option:checked').parentElement.label;}
var global_lock=false,full=false,gj,last,mode="自動",isletI=false,lastColor;
let div='<div class="s"></div>',htm="",mw=window.document.getElementById("mw"),us="white",cm="black";/*user & computer*/
let c2d={"black":"1","white":"0","":" "};/*computer 1,user 0*//*color to digit*/
let cc2d={"1":"black","0":"white"," ":""};
function init(){
	if(global_lock){alert("請稍後再按下此鍵");return -1;}
	game="";
    for(y=0;y<15*15;y++){game+=" "}
	full=false;
	for(i=0;i<sp.length;i++){setColor(sp[i],"");}
	document.getElementById("score").innerHTML="進行中";
	last=undefined;
}
for(i1=0;i1<15;i1++){
    for(i=0;i<15;i++){
        if(valid(i+1,i1+1)){gen("red",i,i1);}
        else if(i==0){
            if(i1==0){gen("nw",i,i1);}
	    	else if(i1==14){gen("sw",i,i1);}
        	else{gen("left",i,i1)}
        }
	    else if(i==14){
            if(i1==0){gen("ne",i,i1);}
	    	else if(i1==14){gen("se",i,i1);}
        	else{gen("right",i,i1);}
        }
        else if(i1==0){
            if(i!=0){gen("top",i,i1);}
        }
        else if(i1==14){
            gen("bottom",i,i1);
        }
        else{gen("0",i,i1);}
    }
    htm+="<br>";
}
mw.innerHTML=htm+mw.innerHTML;/*window.document.body.innerHTML=htm;*/
sp = document.getElementsByName("sp")
/*
Python to Javascript
1. def to function
2. : to {}
3. and to && or to ||
4. True to true, and False to false
5. e.append(k) to e[n]=k
6. add ;
7. # to // or ...
8. elif to else if
9. None to null
......
*/

///     橫向連線    直向連線                      左斜                         右斜
win0 = ["00000","0.{14}0.{14}0.{14}0.{14}0", "0.{13}0.{13}0.{13}0.{13}0", "0.{15}0.{15}0.{15}0.{15}0"]
win1 = []
for(s in win0){win1[s]=win0[s].replaceAll("0","1");}
for(s in win0){
    win0[s] = new RegExp(win0[s], "gm");
    win1[s] = new RegExp(win1[s], "gm");
}
rancon = [[],
          null,
          [],
          []
]
rancon[1]=164
for(y=0;y<15;y++){rancon[0][y]=[15*y+0, 15*y+10];}
for(y=0;y<15;y++){if(15*y+10<=164){rancon[2][y]=[15*y+4, 15*y+14];}}
for(y=0;y<15;y++){if(15*y+10<=164){rancon[3][y]=[15*y+0, 15*y+10];}}

playerID = 0;
computerID = 1;
var game="";
for(y=0;y<15*15;y++){game+=" "}
//console.log(0,game.length);
//game = game.replaceAt(0,1,"1")

function ifwin_(win, n){
    //n!=1, 直向連線判斷不同。
    s = game.search(win[n]);
    if(s!=-1){
        for(f in rancon[n]){
		    f = rancon[n][f];
            if(s>=f[0] && s<=f[1]){
                //#print(n,win[n].search(game).span())
                return true
			}
		}
	}
    return false
}
function ifwin(game){
    if(ifwin_(win0,0)){return 0;}
    if(game.search(win0[1])!=-1 && game.search(win0[1])<=164){return 0;}
    if(ifwin_(win0,2)){return 0;}
    if(ifwin_(win0,3)){return 0;}
    if(ifwin_(win1,0)){return 1;}
    if(game.search(win1[1])!=-1 && game.search(win1[1])<=164){return 1;}
    if(ifwin_(win1,2)){return 1;}
    if(ifwin_(win1,3)){return 1;}
    return -1;
}

function randomInt(max) {
  return Math.floor(Math.random() * (max+1));//0~max
}
function alo1(b,w,b1,w1,cch){
    //#換電腦下#
    //#一次看五個#
    let su = 0;
    if(w==0 && b==4) //#進攻
        {su = 999999999;}
    else if(w==0 && b==3) //#黑子3個並且白子0個，後進攻(電腦1代表黑棋)
        {su = 999;}
    else if(w==3 && b==0) //#白子已成3個且無黑棋擋(寬鬆檢測)，先防守(電腦1代表黑棋)
        {su = 100000;}
    else if(w==4)
        {su = 999999;} //#防守
    else{ 
	    if(mode=="自動"){
	        var r=randomInt(1);
		    if(r==0)
                {su = b*9+w*10;} //#防守優先，進攻其次
		    else
		        {su = b*10+w*9;} //#進攻優先，防守其次
		}
		else if(mode=="攻擊"){
			su = b*10+w*9;
		}
		else{
			su = b*9+w*10;
		}
	}
    return su;
}
function alo2(b,w,bk,wk){
    //#換電腦下#
    //#一次看五個#
    let su = 0;
    if(w==0 && b==4) //#進攻
        {su = 999999999;}
    else if(w==0 && b==3) //#黑子3個並且白子0個，後進攻(電腦1代表黑棋)
        {su = 999;}
    else if(w==3 && b==0) //#白子已成3個且無黑棋擋，先防守(電腦1代表黑棋)
        {su = 100000;}
    else if(w==4)
        {su = 999999;} //#防守
    else{
	    if(mode=="貪婪"){ //優先進攻
	        if(w==0)
		        {su = b*15+bk*12;} //黑子可連成五個
		    else if(b==0)
		    	{su = w*9+wk*7.2;} //白子可連成五個
		    else
		        {su = w*3+wk*2.1+b*5.4+bk*4.2;}
		}
		else{
	        if(w==0)
		        {su = b*9+bk*7.2;} //黑子可連成五個
		    else if(b==0)
		    	{su = w*15+wk*12;} //白子可連成五個
		    else
		        {su = b*3+bk*2.1+w*5.4+wk*4.2;}
		}
	}
    return su;
}
function alo3(b,w,b1,w1,cch){
    //#換電腦下#
    //#一次看五個#
    let su = 0;
    if(w==0 && b==4) //#進攻
        {su = 999999999;}
    else if(w==0 && b==3) //#黑子3個並且白子0個，後進攻(電腦1代表黑棋)
        {su = 999;}
    else if(cch==" 000 ") //#白子已成3個且無黑棋擋，先防守(電腦1代表黑棋)
        {su = 120000;}
	else if(w==3 && b==0)
		{su = 100000;}
    else if(w==4)
        {su = 999999;} //#防守
    else{ 
	    if(mode=="自動"){
	        var r=randomInt(1);
		    if(r==0)
                {su = b*9+w*10;} //#防守優先，進攻其次
		    else
		        {su = b*10+w*9;} //#進攻優先，防守其次
		}
		else if(mode=="攻擊"){
			su = b*10+w*9;
		}
		else{
			su = b*9+w*10;
		}
	}
    return su;
}
function score(b,w,bk,wk,cch){
	//console.log(cch);
	let alo = getModeLabel();
    let alos = {"模式1":alo1, "模式2":alo2,"智慧":alo3};
	return alos[alo](b,w,bk,wk,cch);
}
function core_(chi,game,a,b,c,d,e,f,g,h,i_){
    ////////c,f,i must>0 or this function was no use////////
    for(i=a;i<b;i+=c) //#後 橫向掃描
        for(j=i+d;j<i+e;j+=f){ //#先 掃描直行
            let su=0,w=0,b=0; //#電腦1 b,black, 使用者0 w, white.
			let bk=0,wk=0,chLast="",cch="";
            for(k=j+g;k<j+h;k+=i_){ //#改變五子
			    cch+=game.substring(k, k+1);
                if(game.substring(k, k+1)=='1')
                    {b+=1;if(chLast=="b"){bk+=1;}chLast="b";}
                else if(game.substring(k, k+1)=='0')
                    {w+=1;if(chLast=="w"){wk+=1;}chLast="w";}
			}
            su = score(b,w,bk,wk,cch);
            if(su>0) 
                {for(k=j+g;k<j+h;k+=i_){ chi[k]+=su;}}
		}
	return 0;
}
function core(g){
    let chi = [];
    for(e=0;e<15*15;e++){chi[e]=0;}
    //#右斜向更可能贏
	core_(chi,g, 0,11,1, 0,10*15+1,15, 0,4*16+1,16);
    //#左斜向更可能贏
	core_(chi,g, 4,15,1, 0,10*15+1,15, 0,4*14+1,14);
    //#直行更可能贏
	core_(chi,g, 0,15,1, 0,10*15+1,15, 0,4*15+1,15);
    //#橫行更可能贏
	core_(chi,g, 0,15*15,15, 0,11,1, 0,5,1);
    return chi;
}
var k11;
function processNotEmpty(game,chi){
    for(x=0;x<15;x++){
        for(y=0;y<15;y++){
            p = 15*y+x;
            if(game[p]==" ")
                {}
            else
                {chi[p]=-999;}
		}
	}
}
function f222(g){
    let chi = core(g);
    for(x=0;x<15;x++){
        for(y=0;y<15;y++){
            p = 15*y+x;
            if(g[p]==" ")
                {}
            else
                {chi[p]=-999;}
		}
	}
	//console.log(chi);
	//if(getModeLabel()=="智慧"){chi = LowerAndHigherNine(game);}
	k11=chi;
	let max=-999,index=null;
	for(e=0;e<chi.length;e++){
	    if(chi[e]>max)
		    {max=chi[e]; index=e;}
	}
    return index;
}

function  changeMode(e){
	mode = e.value;
}

function sortArray(array,mode,stop){
	/*Error log:
	    a[null][1] will cause error->
	    Uncaught TypeError: Cannot read properties of undefined (reading '1')
	*/
    let sorted=[],array1=[];
	for(i=0;i<array.length;i++){array1[i] = [i,array[i]] /*[index, value]*/;}
	let len=array1.length, Dyindex;
	//console.log(Dyindex);
	if(len>stop){len=stop;}
	if(mode=="max"){
	    for(ii=0;ii<len;ii++){//做len次，取出全部元素
			Dyindex=0;
	    	for(i=1;i<array1.length;i++){if(array1[i][1]>array1[Dyindex][1]){Dyindex=i;}}
	    	sorted[ii] = array1.splice(Dyindex,1)[0];
	    }}
	else if(mode=="min"){
	    for(ii=0;ii<len;ii++){//做len次，取出全部元素
			Dyindex=0;
	    	for(i=1;i<array1.length;i++){if(array1[i][1]<array1[Dyindex][1]){Dyindex=i;} }
	    	sorted[ii] = array1.splice(Dyindex,1)[0];
	    }}
	//console.log(sorted);
	return sorted;}

function copyString(original_string){return ("." + original_string).slice(1);}
function initChi(){let result=[]; for(e=0;e<15*15;e++){result[e]=0;}return result;}
function initChn(c){let result=[]; for(e=0;e<15*15;e++){result[e]=c[e]/1000000000;}return result;}
function copyChi(chi){let result=[]; for(e=0;e<15*15;e++){result[e]=chi[e];}return result;}
function ucore(game){let nch = core(game); processNotEmpty(game,nch);return nch;}
function copyAndSet(game,index,whoColor){return setGameR(copyString(game),index,c2d[whoColor]);}
function LowerAndHigherNine(game,result,deep){
	/*配合alo3算法*/
	document.getElementsByClassName("normal")[0].innerHTML="機器思考中";
	let checkValue = 36, deepLimit=1;
	if(deep>=deepLimit){return null;}
	let nch = ucore(game);
	if(result==undefined){result=nch;}
	if(deep==undefined){deep=0;}
	/*if(Amax(nch)>=999999 || Amax(nch)>=100000)//黑子或白子已成四個，進攻防守
	    {return nch;}*/
	let gindex=sortArray(nch,"max",checkValue);//可下的點內取36個最可能的點下(let checkValue = 36;)
	for(let i=0;i<gindex.length;i++){//電腦下
	    //console.log(10);
		console.log(deep,i);
	    let index = gindex[i][0];
		let Gindex = index;//讓裡面區塊能用而不被重新定義
	    let g1 = copyAndSet(game,index,cm);
		let nch = ucore(g1);
	    if(ifwin(g1)==1)
		    {result[index]+=3/deep;console.log(1);return result;}
		else if(Amax(nch)>=100000)
		    {result[index]+=4/deep;}
		else
		    {
			let gindex=sortArray(nch,"min",checkValue);//可下的點內取36個最可能的點下(let checkValue = 36;)
			for(let ii=0;ii<gindex.length;ii++)
			    {//使用者下
			    //console.log(20,deep,gindex.length);
		     	let index = gindex[ii][0];
			    let g2 = copyAndSet(g1,index,us);
				let nch = ucore(g2);
				if(ifwin(g2)==0)
				    {result[Gindex]+=-1/deep;console.log(-1);break;}
				else
				    {LowerAndHigherNine(g2,result,deep+1);}
			    }
			}
	}
	document.getElementsByClassName("normal")[0].innerHTML="機器模式";
	if(deep==0){/*console.log(result);*/return result;}
}

function LowerAndHigherNine001(game){
	/*配合alo1算法*/
	let checkValue = 36;
	
	let result=initChi(); for(e=0;e<15*15;e++){result[e]=chi[e];}
	let gindex=sortArray(chi,checkValue);
	for(i=0;i<gindex.length;i++){//電腦下
		let Gloindex = gindex[i][0];
		let g1 = setGameR(copyString(game),Gloindex,c2d[cm]);
		{
		    let gindex = sortArray(processNotEmpty(g1,core(g1)));
			//a=gindex;for(i in a){anime(sp[a[i][0]],"","aqua",1000)};
		    let start = gindex.length-1-checkValue;
		    if(start<=-2){start=-1;}
		    for(i=gindex.length-1;i>start;i--){//使用者下
		        let index = gindex[i][0];
		        let g2 = setGameR(copyString(g1),index,c2d[us]);
		    	let nch = core(g2);
		        if(ifwin(g2) || Amax(nch)>=100000){
					   //原先白子只有2、3個，當電腦下那點後使用者能讓白子成4、5個或白子成3個且無黑棋擋，電腦不能下這點
		               result[Gloindex] = -1;
					   console.log(1)
		               break;
		        }
		    	else{/*
		    		let gindex = sortArray(processNotEmpty(g2,nch),checkValue);
		    		for(i=0;i<gindex.length;i++){//電腦下
		    		    let index = gindex[i][0];
		    		    let g3 = setGameR(copyString(g2),index,c2d[cm]);
		    		    let nch = core(g3);
		    		    if(nch.max()>=999999999){result[Gindex]=12345;break;}
		    		}*/
		    	}
		    }
		}
	}
	console.log(result);
	return result;
}

/*
function a() {
let b=3;for(i=0;i<b;i++){let b=1;console.log(b);}    
}
a();
function a() {
var b=3;for(i=0;i<b;i++){var b=1;console.log(b);}    
}
a();
*/
Amax = function(a) {
  return Math.max.apply(null, a);
};

Amin = function(a) {
  return Math.min.apply(null, a);
};

function viewww(){a=sortArray(k11,"min",20);for(i in a){anime(sp[a[i][0]],"","aqua",1000);}}

function animeText(){let e=document.getElementsByClassName("normal")[0];setTimeout(function(){e.innerHTML="機器模式";}, timeMilliSecond)}
