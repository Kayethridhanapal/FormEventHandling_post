var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res){
    var data='';
    req.on('data',function(chunk){
        console.log(chunk);
        data+=chunk;

    });
    req.on('end',function(){
        q=querystring.parse(data);
        console.log(q);
        var n1=q.na;
    var n2=q.una;
    var n3=q.mnum;
    var n4=q.email;
    var n5=q.address;
    var n6=q.gender;
    var n7=q.city;
    res.write("<html> <body><table border='7'>");
    res.write("<tr><td>Name:</td> <td>"+n1+"</td></tr>");
    res.write("<tr><td>User name:</td> <td>"+n2+"</td></tr>");
    res.write("<tr><td>Mobile number:</td> <td>"+n3+"</td></tr>");
    res.write("<tr><td>Email:</td> <td>"+n4+"</td></tr>");
    res.write("<tr><td>Address:</td> <td>"+n5+"</td></tr>");
    res.write("<tr><td>Gender:</td> <td>"+n6+"</td></tr>");
    res.write("<tr><td>City:</td> <td>"+n7+"</td></tr>");
    res.write("</table> </body> </html>");
    res.end();
    });
}).listen(8080);
console.log("server started");