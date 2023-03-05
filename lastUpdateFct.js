let lastUpdated = document.getElementById('lastUpdated');

window.addEventListener('DOMContentLoaded', updateTime);
function updateTime(){
    lastUpdated.innerText = ` Website last updated on: `+ document.lastModified;
}
