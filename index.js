const containerRef = document.querySelector('.js-container')

containerRef.addEventListener('click', onBtnClick)

function onBtnClick(e){
if(e.target.nodeName !== 'BUTTON'){
return
}
e.target.style.backgroundColor = 'green';
    // console.log(e.target.nodeNAme);
    // console.log(e.currentTarget);
}