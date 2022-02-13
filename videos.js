
let main =document.getElementById('playVideos')
let {videoId} = JSON.parse(localStorage.getItem('clickVideos'));

let iframe1 = document.createElement('iframe')


iframe1.src = `https://www.youtube.com/embed/${videoId}`
iframe1.width ='100%'
iframe1.height='100%'
iframe1.setAttribute('allowfullscreen','true')
iframe1.setAttribute('id','iframePlay')

main.append(iframe1)












{/* <iframe width="560" height="315" src="//https:www.youtube.com/embed/3U2dNKBM28o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}