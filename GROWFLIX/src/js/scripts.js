function reloadPage() {
    requestAnimationFrame(scrollToTop);
}

function scrollToTop() {
    const currentPosition = window.scrollY;
    if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - Math.min(50, currentPosition));
        requestAnimationFrame(scrollToTop);
    }
}