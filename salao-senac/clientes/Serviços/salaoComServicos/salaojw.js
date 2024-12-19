function filtrarServicos() {
    // Pegando os valores dos filtros
    const precoMin = parseFloat(document.getElementById("precoMin").value) || 0;
    const precoMax = parseFloat(document.getElementById("precoMax").value) || Infinity;
    const tagSelecionada = document.getElementById("tags").value;
    const facilidadeSelecionada = document.getElementById("facilidades").value;

    // Seleciona todos os serviços
    const servicos = document.querySelectorAll(".servico");

    servicos.forEach(servico => {
        const preco = parseFloat(servico.getAttribute("data-preco"));
        const tag = servico.getAttribute("data-tags");
        const facilidade = servico.getAttribute("data-facilidades");

        // Condições de filtragem
        const dentroDoPreco = preco >= precoMin && preco <= precoMax;
        const correspondeTag = tagSelecionada === "Escolha..." || tagSelecionada === tag;
        const correspondeFacilidade = facilidadeSelecionada === "Escolha..." || facilidadeSelecionada === facilidade;

        // Mostra ou oculta os serviços com base nos filtros
        if (dentroDoPreco && correspondeTag && correspondeFacilidade) {
            servico.style.display = "block";
        } else {
            servico.style.display = "none";
        }
    });
}
