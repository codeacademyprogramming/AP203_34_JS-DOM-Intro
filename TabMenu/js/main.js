let items = document.querySelectorAll('.tab-menu .menu-item');

items.forEach(e=>{
    e.onclick = function(){
        document.querySelector('.tab-menu .menu-item.active').classList.remove('active');
        this.classList.add('active')

        document.querySelector('.content .content-item.show').classList.remove('show');
        
        let tab = document.querySelector(this.getAttribute('data-target'));

        tab.classList.add('show')
     }
})