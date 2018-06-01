var youtubeStream = require('youtube-audio-stream')
import * as fs from 'fs';
import * as path from 'path';

var getAudio = function (url:string){
    var requestUrl = url;
    
     const stream = fs.createWriteStream(path.join(__dirname,'../../tmp/song.mp3'));

    try{
     youtubeStream(requestUrl).pipe(stream);
    
    }catch(err){
        console.log(err);
    }   
        

}

export default getAudio;