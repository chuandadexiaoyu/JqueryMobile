exports.show = function(req, res){

    io.sockets.on('connection', function(socket){
        socket.emit('newstwo', {hello: 'chuandadexiaoyu'});
    });
    res.render("socketcopy",{title: "Hello chuandadexiaoyu!!"});

}