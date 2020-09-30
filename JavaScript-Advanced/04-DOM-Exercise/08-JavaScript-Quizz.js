function solve() {
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswersCount = 0;
    let index = 0;

    Array
        .from(document.querySelectorAll('.answer-text'))
        .map((x) => x.addEventListener('click', function nextSection(section) {

            if (correctAnswers.includes(section.target.textContent)) {
                rightAnswersCount++;
            }

            let currentSection = document.querySelectorAll('section')[index];
            currentSection.style.display = 'none';

            if (document.querySelectorAll('section')[index + 1] !== undefined) {
                let nextSection = document.querySelectorAll('section')[index + 1];
                nextSection.style.display = 'block';
                index++;
            } else {
                document.querySelector('#results').style.display = 'block';
                if (rightAnswersCount !== 3) {
                    document.querySelector('#results h1').textContent = `You have ${rightAnswersCount} right answers`;
                } else {
                    document.querySelector('#results h1').textContent = 'You are recognized as top JavaScript fan!';
                }
            }
        }));
}