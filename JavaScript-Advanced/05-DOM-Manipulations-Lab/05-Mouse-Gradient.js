function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseOut)

    function mouseMove(e) {
        let percentage = e.offsetX / (e.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function mouseOut(e) {
        result.textContent = "";
    }
}