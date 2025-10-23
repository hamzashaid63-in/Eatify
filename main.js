
const buttons = document.querySelectorAll('.btn2');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const foodType = button.textContent.trim().toLowerCase();

        document.querySelectorAll('.food-section').forEach(section => {
            section.classList.remove('active');
        });


        document.getElementById(foodType.slice(0, -1)).classList.add('active');
    });
});

// section4

const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
    const video = container.querySelector('video');
    const volumeBtn = container.querySelector('.volume-btn');

    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        volumeBtn.innerHTML = video.muted
            ? '<i class="bi bi-volume-mute"></i>'
            : '<i class="bi bi-volume-up"></i>';
    });
});

const videos = document.querySelectorAll('.section4 video');


videos.forEach(video => {
    video.pause();

    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => video.pause());
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.5 }); // play when 50% visible

videos.forEach(video => observer.observe(video));


