window.onload = function(){
    // サイドバー開閉
    const hamburger = document.querySelector('#hamburger');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector(".main-content");
    hamburger.addEventListener('click', function () {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
        hamburger.style.left = hamburger.style.left === '250px' ? '0px' : '250px';
        // hamburger.innerText = hamburger.innerText === 'Open' ? 'Close' : 'Open';
        hamburger.classList.toggle("active");
        sidebar.classList.toggle("expanded");
        mainContent.classList.toggle("expanded");
    });
    
    // サイドバー内の項目開閉
    // const toggleMenues = document.querySelectorAll('.toggle-menu');
    // toggleMenues.forEach(function(toggleMenu){
    //     toggleMenu.addEventListener('click', function() {
    //         console.log(toggleMenu);
    //         this.nextElementSibling.classList.toggle('open');
    
    //         let toggleIcon = this.children[0].children[0];
    //         toggleIcon.innerText = toggleIcon.innerText === '▲' ? '▼' : '▲';
    //     });
    // })
    
}
