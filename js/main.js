const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.remove('text-bg-light');
    document.body.classList.toggle('text-bg-dark');
    
    document.getElementById('div').classList.remove('bg-light');
    document.getElementById('div').classList.toggle('bg-dark');

    document.getElementById('nav').classList.remove('navbar-light');
    document.getElementById('nav').classList.toggle('navbar-dark');
    document.getElementById('nav').classList.remove('bg-light');
    document.getElementById('nav').classList.toggle('bg-dark');

    btnSwitch.classList.toggle('active');

    // guardar en localstorage

    if(document.body.classList.contains('text-bg-dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
        
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.remove('text-bg-light');
    document.body.classList.toggle('text-bg-dark');

    document.getElementById('div').classList.remove('bg-light');
    document.getElementById('div').classList.toggle('bg-dark');

    document.getElementById('nav').classList.remove('navbar-light');
    document.getElementById('nav').classList.toggle('navbar-dark');
    document.getElementById('nav').classList.remove('bg-light');
    document.getElementById('nav').classList.toggle('bg-dark');

    btnSwitch.classList.toggle('active');
}else{
    document.body.classList.remove('text-bg-dark');
    document.body.classList.toggle('text-bg-light');
    document.getElementById('div').classList.remove('bg-dark');
    document.getElementById('nav').classList.remove('navbar-dark');
    document.getElementById('nav').classList.remove('bg-dark');
    document.getElementById('div').classList.toggle('bg-light');
    document.getElementById('nav').classList.toggle('navbar-light');
    document.getElementById('nav').classList.toggle('bg-light');
    
}