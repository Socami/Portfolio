function setupInfiniteScroll(lineSelector, direction) {
    const line = document.querySelector(lineSelector);
    if (!line) return;

    Array.from(line.children).forEach(item => {
        line.appendChild(item.cloneNode(true));
    });

    line.style.animation = `${direction === 'right' ? 'scrollRight' : 'scrollLeft'} 20s linear infinite`;
}

setupInfiniteScroll('.skill-line-one', 'right');
setupInfiniteScroll('.skill-line-two', 'left');