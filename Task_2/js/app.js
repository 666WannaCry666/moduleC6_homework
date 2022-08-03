const btnNode = document.querySelector("#button");

btnNode.onclick = () => {
    alert(`Ширина: ${window.screen.width}px Высота: ${window.screen.height}px`);
};
