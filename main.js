

function newIn() {
    const newIn = document.querySelector('.new-in__slider');
    const ul = newIn.querySelector('ul');
    const buttons = newIn.querySelectorAll('.arrow');
    let startPos =  parseFloat(getComputedStyle(ul).marginLeft);

    buttons[0].addEventListener('click', leftArrow);
    buttons[1].addEventListener('click',rightArrow);

    function leftArrow(){
        startPos = Math.min( startPos + 400,0);
        ul.style.marginLeft = startPos + 'px';
    }
    function rightArrow() {
        if (-startPos < 1200) {
            startPos = startPos - 400;
            ul.style.marginLeft = startPos + 'px';
        }
    }

}
function bestSeller() {
    const bestSeller = document.querySelector('.best-seller__slider');
    const ul = bestSeller.querySelector('ul');
    const buttons = bestSeller.querySelectorAll('.arrow');
    let startPos =  parseFloat(getComputedStyle(ul).marginLeft);

    buttons[0].addEventListener('click', leftArrow);
    buttons[1].addEventListener('click', rightArrow);

    function leftArrow(){
        startPos = Math.min( startPos + 400,0);
        ul.style.marginLeft = startPos + 'px';
    }
    function rightArrow() {
        if (-startPos < 1200) {
            startPos = startPos - 400;
            ul.style.marginLeft = startPos + 'px';
        }
    }
}



newIn();
bestSeller();