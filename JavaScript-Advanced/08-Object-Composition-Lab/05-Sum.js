function result() {
    let num1, num2, result;

    function init(selector1, selector2, resultSelector) {
        num1 = $(selector1);
        num2 = $(selector2);
        result = $(resultSelector);
    }

    function add() {
        action((a, b) => a + b);
    }

    function subtract() {
        action((a, b) => a - b);
    }

    function action(operation) {
        let value1 = Number(num1.val());
        let value2 = Number(num2.val());
        result.val(operation(value1, value2));
    }

    return {
        init,
        add,
        subtract
    };
}