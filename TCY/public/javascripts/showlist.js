function showlist(){
    var box=document.getElementById("box");
    var da=JSON.parse(localStorage.result);
    for(x in da){
          box.innerHTML+="<br>"+da[x].Ttitle+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp剩餘車位："+da[x].Tsurplus;
    }
}