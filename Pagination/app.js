const startBtn = document.querySelector('#startBtn');
const endBtn = document.querySelector('#endBtn');
const prevNext = document.querySelectorAll('.prevNext');
const numbers = document.querySelectorAll('.link');


let currentStep = 0;

const updateBtn = () => {
    if(currentStep === 8) {
        endBtn.disabled = true;
        prevNext[1].disabled = true;
    } else if(currentStep === 0){
        startBtn.disabled = true;
        prevNext[0].disabled = true;
    } else {
        endBtn.disabled = false;
        prevNext[1].disabled = false;
        startBtn.disabled = false;
        prevNext[0].disabled = false;
    }
};

numbers.forEach((number, numIndex) => {
    number.addEventListener('click', (e) => {
        e.preventDefault();
        currentStep = numIndex;
        // console.log(currentStep);

        document.querySelector('.active').classList.remove('active');
        number.classList.add('active');
        updateBtn();
    });
});


prevNext.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentStep += e.target.id === "next" ? 1 : -1;
        // console.log(currentStep);
        numbers.forEach((number, numIndex) => {
            number.classList.toggle('active', numIndex === currentStep);
            updateBtn();
        });
    });
});


startBtn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    numbers[0].classList.add('active');
    currentStep = 0;
    updateBtn();
    endBtn.disabled = false;
    prevNext[1].disabled = false;
});

endBtn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    numbers[8].classList.add('active');
    currentStep = 8;
    updateBtn();
    startBtn.disabled = false;
    prevNext[0].disabled = false;
});