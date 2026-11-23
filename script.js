const navlinks = document.querySelectorAll(".navlink");
const tabContent = document.querySelectorAll(".tab-content");

navlinks.forEach(link => {
    link.addEventListener('click', ()=> {
        const targetId = link.getAttribute("data-target");

        navlinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        tabContent.forEach(content => content.classList.remove('active-content'));
        const activeSection = document.getElementById(targetId);
        if (activeSection) {
            activeSection.classList.add('active-content');
        }
    });  
});
