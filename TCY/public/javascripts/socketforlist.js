results  = JSON.parse(localStorage.result);
function init(){
    var socket = io.connect('http://localhost/',{port: 3000});
    console.log("connect to server success!");
    socket.on('news', function(data){
        if(typeof(data)==="string"){console.log(data);}
        else{
        datas=data.data[0];
        console.log(datas.Ttitle);
        console.log("收到數據！！");
        for(var i=0; i<results.length; i++){
            if(results[i].Ttitle == datas.Ttitle)
            {
                var p = results[i];
                p.Tsurplus = datas.Tsurplus;
                console.log(p.Tsurplus);
                results[i] = p;
                localStorage.result = JSON.stringify(results);
                break;
            }
        }
            var box=document.getElementById("box");
            var da=JSON.parse(localStorage.result);
            var x=0;
            box.innerHTML="";
            for(x in da){
                box.innerHTML+="<br>"+da[x].Ttitle+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp剩餘車位："+da[x].Tsurplus;
            }
        }

    });
}