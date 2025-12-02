function mostrarCapitulo(cap) {
  const conteudo = document.getElementById('conteudo');

  // --- CAPÍTULO 1 ---
  if (cap === 1) {
    conteudo.innerHTML = `
      <h2>Capítulo 1</h2>
      <p>Bem-vind@ para <b>2007</b>! Prepare-se para essa aventura!</p>

      <div class="flip-container">
        <img id="paginaAtual" class="pagina scene-borda" src="img/capa.png" alt="Capa">
      </div>

      <div class="nav-setas">
        <span id="voltarPag">⟵</span>
        <span id="avancarPag">⟶</span>
      </div>
    `;

    const paginas = [
      "img/capa.png",
      "img/quadrinho1.png",
      "img/quadrinho2.png",
      "img/quadrinho3.png"
    ];

    let indice = 0;
    const img = document.getElementById("paginaAtual");
    const btnAvancar = document.getElementById("avancarPag");
    const btnVoltar = document.getElementById("voltarPag");

    function virarPagina(novoIndice) {
      img.classList.add("virando");
      setTimeout(() => {
        img.src = paginas[novoIndice];
        img.classList.remove("virando");
      }, 250);
    }

    btnAvancar.onclick = () => {
      if (indice < paginas.length - 1) {
        indice++;
        virarPagina(indice);
      }
    };

    btnVoltar.onclick = () => {
      if (indice > 0) {
        indice--;
        virarPagina(indice);
      }
    };
  }

  // --- CAPÍTULO 2 ---
  else if (cap === 2) {
    conteudo.innerHTML = `
      <h2>Capítulo 2</h2>
      <p>Continua...</p>
      <p>Será que Cauã estará preparado para embarcar nessa aventura?</p>
      <img src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" width="250">
    `;
  }

  // --- O INÍCIO ---
  else if (cap === 3) {
    conteudo.innerHTML = `
      <h2>O Início</h2>
      <p>Esses eram os primeiros esboços da nossa HQ! Lá em 2022!</p>

      <div class="flip-container">
        <img id="paginaInicio" class="pagina scene-borda" src="img/capa.png" alt="Capa">
      </div>

      <div class="nav-setas">
        <span id="voltarInicio">⟵</span>
        <span id="avancarInicio">⟶</span>
      </div>
    `;

    // Capa + todos os links antigos do Imgur
    const paginasInicio = [
      "img/capa.png",
      "https://i.imgur.com/jLzSqZ8.png",
      "https://i.imgur.com/55Yx1Gp.png",
      "https://i.imgur.com/In5uOF5.png",
      "https://i.imgur.com/kRj7Y2t.png",
      "https://i.imgur.com/jw7HrOn.png",
      "https://i.imgur.com/qz0mJCB.png"
    ];

    let indiceInicio = 0;
    const imgInicio = document.getElementById("paginaInicio");
    const btnAvancarInicio = document.getElementById("avancarInicio");
    const btnVoltarInicio = document.getElementById("voltarInicio");

    function virarPaginaInicio(novoIndice) {
      imgInicio.classList.add("virando");
      setTimeout(() => {
        imgInicio.src = paginasInicio[novoIndice];
        imgInicio.classList.remove("virando");
      }, 250);
    }

    btnAvancarInicio.onclick = () => {
      if (indiceInicio < paginasInicio.length - 1) {
        indiceInicio++;
        virarPaginaInicio(indiceInicio);
      }
    };

    btnVoltarInicio.onclick = () => {
      if (indiceInicio > 0) {
        indiceInicio--;
        virarPaginaInicio(indiceInicio);
      }
    };
  }

  // --- ENREDO ---
  else if (cap === 'enredo') {
    conteudo.innerHTML = `
      <h2>Enredo</h2>
      <p>Trote Futurista é uma HQ que mistura aventura e nostalgia dos anos 2000!</p>
      <p>Exploramos universos coloridos, desafios de amigos com viagens no tempo a cada capítulo.</p>
      <p>Kauan, agora com 33 anos, sente saudade de 2007, quando vivia fazendo trotes com Beatriz, Carlos e Verônica.</p>
      <p>Um dia, ele encontra seu celular antigo — o mesmo da época — e descobre que a marca falida tentava criar viagem no tempo.</p>
      <p>Apertando os botões, ele ativa acidentalmente um mecanismo real e volta para 2007!</p>
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNxMGtlZmQ5eTBmaTEyMDNqYWxhejVjOHJ5ZDg4bDV0bnkxZ2VoYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3GmyBW4esV71rNCnzU/giphy.gif" width="250">
    `;
  }

  // --- QUEM SOMOS ---
  else if (cap === 'quemSomos') {
    conteudo.innerHTML = `
      <h2>Quem somos</h2>
      <p>Somos uma equipe apaixonada por HQs e animação:</p>

      <ul>
        <li><b>Nathaly</b> – Criadora, roteirista e design</li>
        <li><b>Letícia</b> – Ilustração e storyboard</li>
        <li><b>Carlos</b> – Design de personagens</li>
        <li><b>Kauã</b> – Pesquisa de referências</li>
      </ul>

      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlwcGJobXdjdmdzOWJmZHBsMXgwZnZ2MG1maWh4bGFrYm9ndmE1cyZlcD12MV9naWZzX3NlYXJjaCZjdT1n/f0tufxEr372ZLuA07V/giphy.gif" width="250">
    `;
  }
}






