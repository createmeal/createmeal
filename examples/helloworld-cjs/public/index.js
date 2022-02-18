document.querySelector('h3').innerHTML = 'Hello from Express!';
setInterval(() => document.querySelector('p').innerHTML = new Date().toLocaleTimeString(), 1000);