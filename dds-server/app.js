
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var dds = require('dds-node');
var app = express();

// all environments
app.set('port', 80);

app.get( '/calcDDtablePBN/:pbn', function( req, res ){
    dds.CalcDDtablePBN(req.params.pbn,function(error,result){
        if (error<0){
            res.jsonp({
                status:error
            });
        }else{
            res.jsonp({
                data:result,
                status:error
            });
        }
    });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

