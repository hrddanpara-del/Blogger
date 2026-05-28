document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Live Utility Clock
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Persistent Visitor Counter via Client Storage
    function runVisitorCounter() {
        const countDisplay = document.getElementById('count-val');
        let currentCount = localStorage.getItem('portfolio_visitor_count');
        
        if (currentCount === null) {
            currentCount = 1;
        } else {
            currentCount = parseInt(currentCount) + 1;
        }
        
        localStorage.setItem('portfolio_visitor_count', currentCount);
        countDisplay.textContent = currentCount;
    }
    runVisitorCounter();

    // 3. Sliding Profile Panel Drawer
    const bioSlider = document.getElementById('bio-slider');
    const openSliderBtn = document.getElementById('open-slider-btn');
    const closeSliderBtn = document.getElementById('close-slider-btn');

    openSliderBtn.addEventListener('click', () => {
        bioSlider.classList.add('active');
    });

    closeSliderBtn.addEventListener('click', () => {
        bioSlider.classList.remove('remove'); // edge reset
        bioSlider.classList.add('active');
    });

    closeSliderBtn.addEventListener('click', () => {
        bioSlider.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (!bioSlider.contains(event.target) && event.target !== openSliderBtn) {
            bioSlider.classList.remove('active');
        }
    });
});