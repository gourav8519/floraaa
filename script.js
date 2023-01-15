var tl=gsap.timeline()
tl.from("#one",{
    width:0,
    ease:Expo.easeInout,
    // stagger:1,
    duration:5
})
.from("#one #nav a",{
    // width:0,
    opacity:0,
    y:-30,
    
    stagger:.4,
    ease:Expo.easeInout,
   
    duration:2
},"-=1.2")


.from("#one #nav h6",{
    opacity:0,
    y:20,
    x:100,
    stagger:1,
    ease:Expo.easeInout,
   
    duration:2
},"-0.3")

.from("#one h1",{
    opacity:0,
    y:20,
    x:100,
    stagger:1,
    ease:Expo.easeInout,
   
    duration:2
})
.from("#one #imgdiv",{
    width:0,
     opacity:0,
    
    x:-30,
    stagger:1.2,
    ease:Expo.easeInout,

    duration:2
})

var btm=gsap.timeline()
btm.from("#two",{
    width:0,
    ease:Expo.easeInout,
    // stagger:1,
    duration:2
},"-=1.2")

.from("#two h4",{
    opacity:0,
    y:20,
    x:100,
    stagger:1,
    ease:Expo.easeInout,
   
    duration:2
},"-=1.2")

.from("#two p,h5",{
    opacity:0,
    y:20,
    x:100,
    stagger:1,
    ease:Expo.easeInout,
   
    duration:2
},"-=1.2")



.from("#two #adiv a",{
    // width:0,
    opacity:0,
    y:-30,
    
    stagger:.4,
    ease:Expo.easeInout,
   
    duration:2
},"-=0.5")

.from("#three",{
    width:0,
    x:-30,
    
    stagger:1.3,
    ease:Expo.easeInout,
    // stagger:1,
    duration:2
},"-=1.2")
.from("#three h3",{
    opacity:0,
    ease:Expo.easeInout,
    // stagger:1,
    duration:2
})