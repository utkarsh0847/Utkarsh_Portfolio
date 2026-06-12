const popup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");

function openVideo(videoUrl) {
    popup.style.display = "flex";
    popupVideo.src = videoUrl + "?autoplay=1";
    document.body.style.overflow = "hidden";
}

function closeVideo() {
    popup.style.display = "none";
    popupVideo.src = "";
    document.body.style.overflow = "auto";
}

window.addEventListener("click", function(e) {
    if (e.target === popup) {
        closeVideo();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeVideo();
    }
});

/* Scroll Animation */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
'.about, .skill-card, .portfolio-category, .contact'
).forEach((el)=>{
    observer.observe(el);
});
