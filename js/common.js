window.onload = function(){
    // サイドバー開閉
    const toggleBtn = document.querySelector('#toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector(".main-content");
    toggleBtn.addEventListener('click', function () {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
        toggleBtn.style.left = toggleBtn.style.left === '250px' ? '0px' : '250px';
        toggleBtn.innerText = toggleBtn.innerText === 'Open' ? 'Close' : 'Open';
        sidebar.classList.toggle("expanded");
        mainContent.classList.toggle("expanded");
    });
    
    // サイドバー内の項目開閉
    const toggleMenues = document.querySelectorAll('.toggle-menu');
    toggleMenues.forEach(function(toggleMenu){
        toggleMenu.addEventListener('click', function() {
            console.log(toggleMenu);
            this.nextElementSibling.classList.toggle('open');
    
            let toggleIcon = this.children[0].children[0];
            toggleIcon.innerText = toggleIcon.innerText === '▲' ? '▼' : '▲';
        });
    })
    
}
