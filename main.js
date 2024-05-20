
const scrollerWarpper = document.querySelectorAll('.scroller_warpper')

let persent=0



function imagesPosition(){

    let count = 0
    scrollerWarpper.forEach((card,index)=>{
        // card.style.transform = `translateY(-${index * 25 +100 - persent}%) ;`
        if(card.dataset.direction == 'sroller_left'){
            console.log(count);
            card.style.translate = `0 -${count * 25 + 100 - persent}%`
            count +=1    
        }else{
            card.style.translate = `0 -${count * 25 + 100 - persent}%`
        }
    })    
}

function imagesPositionTranslate(){
    const htmlElement = document.documentElement   
    const percenOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight
    // htmlElement.style.setProperty('--scroll',Math.min(percenOfScreenHeightScroll * 50 ,200))
    persent=Math.min(percenOfScreenHeightScroll * 50 ,200)
    let count = 0
    let count2 = 0

    scrollerWarpper.forEach((card,index)=>{
        // card.style.transform = `translateY(-${index * 25 +100 - persent}%) ;`
        if(card.dataset.direction == 'sroller_left'){
            card.style.translate = `0 -${count * 25 + 100 - persent}%`
            
            count +=1    
          
        }else{
            card.style.translate = `0 -${count2 * 25 + 100 - persent}%`
            count2+=1
        }
    }) 
}


document.addEventListener('scroll',imagesPositionTranslate)

imagesPosition()