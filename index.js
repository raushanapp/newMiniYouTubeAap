
const showDom = async ()=>{


    try{

    //    let  movie = document.getElementById('serachVideos').value

       let res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&key= AIzaSyAnnZQckToKnJ8zBkp1iD8QC-F19v179VI&maxResults=50`);

       let videosData = await res.json();
       let arrData = videosData.items
       appendVideosListData(arrData)
    //    console.log('videos:', arrData)

    }
    catch(e) {

        console.log('form error serach videos function:',e)
    }
}

showDom()


const serachData = async ()=>{


    try{

       let  movie = document.getElementById('serachVideos').value

       let res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${movie}&type=video&key= AIzaSyAnnZQckToKnJ8zBkp1iD8QC-F19v179VI&maxResults=20`);

       let videosData = await res.json();
       let arrData = videosData.items
       appendVideosListData(arrData)
    //    console.log('videos:', arrData)

    }
    catch(e) {

        console.log('form error serach videos function:',e)
    }
}

let mainDiv = document.getElementById('thumbMovie')

const appendVideosListData = (arr) =>{
    console.log('arr:',arr)
    mainDiv.innerHTML = null

    arr.forEach(({snippet,id:{videoId}})=>{

        //  console.log('snippet1:',snippet)

        let div = document.createElement('div');

        let ttileName = document.createElement('p')
        ttileName.innerText = snippet.title;
        ttileName.setAttribute('class', 'pTag')

        let thumb = document.createElement('img')
        thumb.setAttribute('class', 'thumImage')


        let sendToData = {
            
            snippet,
            videoId
        }

        div.onclick = ()=>{
            showVideos(sendToData) 
        }

        thumb.src = snippet.thumbnails.medium.url

        div.append(thumb,ttileName)

        mainDiv.append(div)
    })
}


const showVideos = (data)=>{

   localStorage.setItem('clickVideos', JSON.stringify(data));

   window.location.href = 'videos.html'
}