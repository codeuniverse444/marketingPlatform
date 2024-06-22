function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button", {
    y:-40,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.15
})

tl.from(".center-part1 h1", {
    x:-200,
    duration:0.5,
    opacity:0
    
},"-=0.3")
tl.from(".center-part1 p", {
    x:-100,
    duration:0.4,
    opacity:0
    
})
tl.from(".center-part1 button", {
    
    duration:0.4,
    opacity:0
    
})
tl.from(".center-part2 img", {
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7")

tl.from(".section1bottom img",{
    y:30,
    duration:0.6,
    opacity:0,
    stagger:0.15
})
}


function page2Animation(){

    window.addEventListener("wheel", function(dets){
        if (dets.deltaY>0) {
            gsap.to(".section1bottom", {
                transform : "translateX(20%)" ,
                duration :4,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".section1bottom img", {
                rotate : 0
            })
        } else {
            gsap.to(".section1bottom", {
                transform : "translateX(0%)" ,
                duration :4,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".section1bottom img", {
                rotate : 0
            })
        }
    })


    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            
            start:"top 50%",
            end:"top -60%",
            scrub:2
    
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
    
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim3")
    tl2.from(".elem.line3.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim3")
    tl2.from(".elem.line4.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim4")
    tl2.from(".elem.line4.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim4")
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            
            start:"top 50%",
            end:"top -60%",
            scrub:2
    
        }
    })
  
    tl3.from(".box",{
        x:-100,
        opacity:0,
        duration:1
    })
    tl3.from(".Casestudy",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl3.from(".foot-panel2",{
        y:30,
        opacity:0,
        duration:0.5
    })
}
page1Animation()
page2Animation()
page3Animation()
