if (windows.localStorage.color){
    document.documentElement.style.setProperty("--theme-color", window.localStorage.color);
}
if(windows.localStorage.dark == 'true'){
    document.documentElement.classList('dark');
}
