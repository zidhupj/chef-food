let imgNo = 0;
const onRightArrowClick = () => {
    console.log('right arrow clicked');
    const headerImg = document.querySelector('.headerImage');
    console.log(headerImg);
    if (imgNo < 2) {
        imgNo++;
        headerImg.style.transform = `translateX(-${imgNo}00%)`;
    } else {
        headerImg.style.transform = `translateX(0%)`;
        imgNo = 0;
    }
}
const onLeftArrowClick = () => {
    console.log('left arrow clicked');
    const headerImg = document.querySelector('.headerImage');
    console.log(headerImg);
    if (imgNo > 0) {
        imgNo--;
        headerImg.style.transform = `translateX(-${imgNo}00%)`;
    } else {
        headerImg.style.transform = `translateX(-${2}00%)`;
        imgNo = 2;
    }
}