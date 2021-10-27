const handleClick = () => {
    const buttons = document.querySelectorAll('.button');
    for (let i=0; i<3;i++){
        buttons[i].addEventListener('click', ev => console.log(buttons[i].innerHTML))
    }
}