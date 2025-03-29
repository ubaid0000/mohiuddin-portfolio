const cursor = document.querySelector(".cursor");
const heroDiv = document.querySelector(".hero");
const serviceDiv = document.querySelectorAll(".service-div");
const serviceDes = document.querySelector(".service-description");
const projectDiv = document.querySelectorAll(".project");
const perkDiv = document.querySelector(".perks-div-container");
const perkCursor = document.querySelector(".perk-cursor");
const logo = document.querySelector(".logo");
const menuDiv = document.querySelector(".menu-div");
const menuClose = document.querySelector(".menu-div i");
const menuOpen = document.querySelector(".menu-icon");
const menutxt = document.querySelectorAll(".menu-div ul li a");

heroDiv.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.clientX - 100, // Centering horizontally
        y: dets.clientY - 100 // Centering vertically
    })
})

heroDiv.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1
})

heroDiv.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0
})

////////


perkDiv.addEventListener("mousemove", (dets) => {
    gsap.to(perkCursor, {
        x: dets.clientX - 100, // Centering horizontally
        y: dets.clientY - 100 // Centering vertically
    })
})

perkDiv.addEventListener("mouseenter", () => {
    perkCursor.style.opacity = 1
})

perkDiv.addEventListener("mouseleave", () => {
    perkCursor.style.opacity = 0
})




serviceDiv.forEach((div) => {
    let flag = true;

    div.addEventListener("click", () => {
        if (flag) {
            gsap.to(div, {
                backgroundImage: "url(assets/service_section_grid.svg)",
                duration: 0.5
            });

            const description = div.querySelector(".service-description");
            const serviceH1 = div.querySelector("h1");

            if (description) {
                gsap.set(description, {
                    display: "block"
                });
                gsap.set(serviceH1, { color: "white", duration: .4 })
                gsap.to(description, {
                    opacity: 1,
                    duration: 0.5
                });
            }

        } else {
            gsap.to(div, {
                backgroundImage: "none",
                duration: 0.5
            });

            const description = div.querySelector(".service-description");
            const serviceH1 = div.querySelector("h1");


            if (description) {
                gsap.set(description, {
                    display: "none"
                });
                gsap.set(serviceH1, { color: "#999999", duration: .4 })
                gsap.to(description, {
                    opacity: 0,
                    duration: 0.5
                });
            }
        }
        flag = !flag;

    });
});


projectDiv.forEach(div => {
    let flag = true;
    div.addEventListener("click", () => {
        const openUpDiv = div.querySelector(".open-up-div");
        const secArrowIcon = div.querySelector(".sec1 i");

        if (flag) {
            // First make it visible but with 0 height
            gsap.set(openUpDiv, {
                display: "flex",
                height: 0,
                opacity: 0
            });

            // Then animate to full height
            gsap.to(openUpDiv, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(secArrowIcon, {
                rotate: 90,
                duration: 0.3
            });

        } else {
            // Animate to 0 height before hiding
            gsap.to(openUpDiv, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(openUpDiv, { display: "none" });
                }
            });

            gsap.to(secArrowIcon, {
                rotate: 0,
                duration: 0.3
            });
        }
        flag = !flag;
    });
});

function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Karachi', hour12: false, hour: '2-digit', minute: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    let timeString = formatter.format(now);


    let [hours, minutes] = timeString.split(':');
    const colon = now.getSeconds() % 2 === 0 ? ':' : ' ';

    document.getElementById('clock').innerHTML = `${hours}${colon}${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

const navLinks = document.querySelectorAll(".menu-ul li");

// Set the first link as active by default
navLinks[0].classList.add("active");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});

logo.addEventListener("click", () => {
    window.location.href = 'index.html'
})


menuOpen.addEventListener("click", () => {
    gsap.to(menuDiv, {
        x: 0
    })
})

menuClose.addEventListener("click", () => {
    gsap.to(menuDiv, {
        x: "-100%"
    })
})


menutxt.forEach(txt => {
    txt.addEventListener("click", () => {
        gsap.to(menuDiv, {
            x: "-100%"
        })
    })
})

menuClose();