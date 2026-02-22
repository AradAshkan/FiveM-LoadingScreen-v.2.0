const cursor = document.getElementById('cursor-glow');
const bar = document.getElementById('progress-bar');
const pct = document.getElementById('percent');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// FiveM Bridge
window.addEventListener('message', function(e) {
    if(e.data.eventName === 'loadProgress') {
        let p = Math.round(e.data.loadFraction * 100);
        bar.style.width = p + '%';
        pct.innerText = p + '%';
    }
    if(e.data.eventName === 'onLogLine') {
        document.getElementById('status-text').innerText = e.data.message.toUpperCase();
    }
});

// Demo (Remove for production)
let d = 0;
setInterval(() => { if(d <= 100) { bar.style.width = d+'%'; pct.innerText = d+'%'; d++; }}, 100);