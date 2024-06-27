// script.js

function calculateFormula(t) {
    try {
        var result = (-t + Math.sqrt(7 + t)) / 8 - Math.abs(t);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Ошибка вычисления");
        }
        return result;
    } catch (error) {
        alert("Ошибка: " + error.message);
    }
}
