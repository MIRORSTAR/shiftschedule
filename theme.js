(function(){var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');if(t==='light')document.documentElement.classList.add('light');})();
function toggleTheme(){var l=document.documentElement.classList.toggle('light');localStorage.setItem('theme',l?'light':'dark');}
