import fetch from 'node-fetch'
import {fetchAudio} from './yt'

const getPlaylist = function(url:string){
    const id = url.split('=')[1];
    const key = 'AIzaSyAnjiGX1QiBV2CTeGgime-XnRgoc3OI_ho'; 
    
    const str = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${id}&key=${key}`
    

    return fetch(str).then(res => res.json()).then(items =>jsonToPlaylist(items)).then(arr => {
      arr.forEach(item=> fetchAudio(item));  
    });
}

function jsonToPlaylist(items: any):Array<playlist> {
    let arr: Array<playlist>

    arr = items['items'].map(item => <playlist>{title: item.snippet.title,id : item.snippet.resourceId.videoId} );

    return arr;
}



export interface playlist {
    title : string,
    id: string
}

export default getPlaylist