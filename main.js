document.getElementById('investmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    // Captura os valores do formulário
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const monthlyAddition = parseFloat(document.getElementById('monthlyAddition').value) || 0; // Campo opcional
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('time').value);

    // Calcula o valor final
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = time * 12;

    // Valor futuro do investimento inicial
    const futureValueInitial = initialValue * Math.pow(1 + monthlyRate, totalMonths);

    // Valor futuro das adições mensais
    let futureValueMonthly = 0;
    if (monthlyAddition > 0) {
        futureValueMonthly = monthlyAddition * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
    }

    // Valor final total
    const finalValue = futureValueInitial + futureValueMonthly;

    // Exibe o resultado
    document.getElementById('result').innerText = `Valor Final: R$ ${finalValue.toFixed(2)}`;
});