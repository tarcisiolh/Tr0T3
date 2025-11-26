function mostrarCapitulo(cap) {
  const conteudo = document.getElementById('conteudo');

  if (cap === 1) {
    conteudo.innerHTML = `
      <h2>Capítulo 1</h2>
      <p>Olá, seja bem-vind@ para 2007!</p>
      <p>Aqui começamos uma longa jornada de aventuras!</p>
      <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3BqZzdjdGpuaXFmdm80cDUxNmEyeGxkMTdyZ3l0dHRnYmJtbG5meiZlcD12MV9naWZzX3NlYXJjaCZjdT1n/yNnVpD7C3X9djBK911/giphy.gif" width="150" alt="gif cena">
    `;
  } 
  
  else if (cap === 2) {
    conteudo.innerHTML = `
      <h2>Capítulo 2</h2>
      <p>Continua...</p>
      <p>Será que Cauã estará preparado para embarcar nessa aventura?</p>
      <img src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" width="150" alt="gif capa 2">
    `;
  } 
  
  else if (cap === 3) {
    conteudo.innerHTML = `
      <h2>Ideias Iniciais</h2>
      <p>Esses eram os primeiros esboços da nossa HQ! Lá em 2022!</p>
      <p>Quem sobreviverá para contar a história?</p>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXNlN25pcmFqMXJmMDI5eGZ0cXBpcWRxcTRkMWU3cmd0ZGp6NWgzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ns8cslLVGhZzBlP26w/giphy.gif" width="150" alt="gif capa 3">
    `;
  } 
  
  else if (cap === 'enredo') {
    conteudo.innerHTML = `
      <h2>Enredo</h2>
      <p>Trote Futurista é uma HQ que mistura aventura e nostalgia dos anos 2000!</p>
      <p>Exploramos universos coloridos, desafios de amigos com viagens no tempo a cada capítulo.</p>
          <p>Kauan, agora com 33 anos, sente uma forte saudade de 2007, quando vivia fazendo trotes com seus amigos Beatriz, Carlos e Verônica.</p>
    <p>Um dia, ele encontra seu celular antigo — o mesmo que usava na época — e descobre que ele pertence a uma marca brasileira falida que, no passado, tentou criar viagem no tempo usando celulares.</p>
    <p>Achando isso absurdo e engraçado, Kauan começa a apertar as teclas do aparelho... até que, ironicamente, o celular ativa um mecanismo real e o transporta de volta para 2007, exatamente no dia de um dos trotes mais marcantes da sua vida.</p>
    <p>Agora, preso no passado, ele reencontra os amigos e vive novamente a época que mais sente falta, enquanto tenta entender como e por que voltou no tempo.</p>
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNxMGtlZmQ5eTBmaTEyMDNqYWxhejVjOHJ5ZDg4bDV0bnkxZ2VoYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3GmyBW4esV71rNCnzU/giphy.gif" width="150" alt="gif enredo">
    `;
  } 
  
  else if (cap === 'quemSomos') {
    conteudo.innerHTML = `
      <h2>Quem somos</h2>
      <p>Somos uma equipe de criadores apaixonados por HQs e animação:</p>
      <ul>
        <li><b>Nathaly</b> – Criadora, roteirista e ideias de design</li>
        <li><b>Letícia</b> – Ilustração e storyboard</li>
        <li><b>Carlos</b> – Design de personagens e sugestões de enredo</li>
        <li><b>Kauã</b> – Pesquisa de referências e brainstorm de ideias</li>

      </ul>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlwcGJobXdjdmdzOWJmZHBsMXgwZnZ2MG1maWh4bGFrYm9ndmE1cyZlcD12MV9naWZzX3NlYXJjaCZjdT1n/f0tufxEr372ZLuA07V/giphy.gif" width="150" alt="gif equipe">
    `;
  }
}
