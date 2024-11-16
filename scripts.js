function eventListener(num) {
    const question = document.querySelector(`.js-question${num}`);
    question.addEventListener('click', () => {
        if (question.classList.contains('append')) {
            question.classList.remove('append');
            document.querySelector(`.js-answer${num}`).style.display = 'none';
        } else {
            question.classList.add('append');
            document.querySelector(`.js-answer${num}`).style.display = 'block';
        }
    });
}

eventListener(1);
eventListener(2);
eventListener(3);
eventListener(4);