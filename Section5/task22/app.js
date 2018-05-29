window.addEventListener('hashchange', function() {

    console.log('Hash changed!: '+window.location.hash);
   
    if (window.location.hash === '#/bookmark/1') {
        console.log('Page 1 ');
    }
    
    if (window.location.hash === '#/bookmark/2') {
        console.log('Page 2');
    }
    
    if (window.location.hash === '#/bookmark/3') {
        console.log('Page 3.');
    }
    
});