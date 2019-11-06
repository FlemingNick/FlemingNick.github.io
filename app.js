new fullpage("#fullpage", {
    licenseKey:'0430B007-200D4ACE-9EE6BA54-B87AE327',
    autoScrolling: true,
    navigation: true,
    onLeave: (_origin, destination) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title,0.5, { y: '50', opacity: 0}, { y: 0, opacity: 1});

        if(destination.index ===1){
            const portrait = document.querySelectorAll(".portrait");
            const description = document.querySelector(".description");

            tl.fromTo(portrait, 0.7, {x: '150%', opacity:0}, {x: '-35%', opacity:1})
            .fromTo(description, 0.5, {y: '80', opacity: 0}, {y: '0', opacity: 1});
        }
       
    }
});

const logo = document.querySelectorAll('#logo path');

//prints the exact pixellength of every letter for the "Welcome", which is needed for the animation
for(let i=0;i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);  
}


