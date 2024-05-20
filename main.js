
const card_warpper = document.querySelectorAll('.scroller_warpper')

let persent=0



function imagesPosition(){
    const htmlElement = document.documentElement   
    const percenOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty('--scroll',Math.min(percenOfScreenHeightScroll * 50 ,200))
    persent=Math.min(percenOfScreenHeightScroll * 50 ,200)
    card_warpper.forEach((card,index)=>{
        card.style.transform = `translateY(-${index * 25 +100 - persent}%)`
    })    
}


document.addEventListener('scroll',imagesPosition)

imagesPosition()