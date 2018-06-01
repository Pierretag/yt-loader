var youtubeStream = require('youtube-audio-stream')
import * as fs from 'fs';
import * as path from 'path';
import { playlist } from './googleAPI';

var getAudio = function (url:string){
    var requestUrl = url;

     const stream = fs.createWriteStream(path.join(__dirname,'../../tmp/song.mp3'));
    try{
     youtubeStream(requestUrl).pipe(stream);
    
    }catch(err){
        console.log(err);
    }   
        

}

var fetchAudio = function(item : playlist){
    item.title = item.title.replace(' ','');
    const requestUrl = `https://www.youtube.com/watch?v=${item.id}`;
    const stream = fs.createWriteStream(path.join(__dirname,`../../tmp/${item.title}.mp3`));
    try{
     youtubeStream(requestUrl).pipe(stream);
    
    }catch(err){
        console.log(err);
    }   
}

export { getAudio , fetchAudio};