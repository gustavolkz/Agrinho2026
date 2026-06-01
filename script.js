function verificarResposta(correta) {
    const resultado = document.getElementById('resultado-quiz');
    
    if (correta) {
        resultado.innerText = "🌱 Parabéns! Você acertou! A agrofloresta combina produção e conservação ambiental de forma sustentável.";
        resultado.style.color = "#2e6f40";
    } else {
        resultado.innerText = "❌ Tente novamente! Lembre-se de que a essência da agrofloresta é a harmonia entre o cultivo e a natureza.";
        resultado.style.color = "#cc0000";
    }
}