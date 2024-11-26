/* Estilo geral do corpo */
body {
    background-color: #3b14a7; /* Um verde mais escuro */
    color: #bfc222ea; /* Cor do texto em cinza claro */
    font-family: "Bai Jamjuree", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Usando 100% da altura da tela */
    margin: 0;
    text-align: center;
}

h1 {

    font-family: "Matemasie", sans-serif;
    font-weight: 300;
    font-style: normal;

}



 /* From Uiverse.io by 212004ALJI */ 
button,button::after {
    padding: 10px 50px;
    font-size: 20px;
    border: 1px solid #1df2f0;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    position: relative;
  }
  
  button::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: 'GLITCH';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
  
  button:hover::after {
    animation: glitch_4011 1s;
    text-shadow: 10 10px 10px black;
    animation-timing-function: steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #E94BE8;
    background-color: transparent;
    border: 3px solid rgb(0, 255, 213);
  }
  
  button:hover {
    text-shadow: -1px -1px 0px #1df2f0, 1px 1px 0px #E94BE8;
  }
  
  button:hover {
    background-color: transparent;
    border: 1px solid rgb(0, 255, 213);
    box-shadow: 0px 10px 10px -10px rgb(0, 255, 213);
  }
  
  @keyframes glitch_4011 {
    0% {
      clip-path: var(--move1);
      transform: translate(0px,-10px);
    }
  
    10% {
      clip-path: var(--move2);
      transform: translate(-10px,10px);
    }
  
    20% {
      clip-path: var(--move3);
      transform: translate(10px,0px);
    }
  
    30% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    40% {
      clip-path: var(--move5);
      transform: translate(10px,-10px);
    }
  
    50% {
      clip-path: var(--move6);
      transform: translate(-10px,10px);
    }
  
    60% {
      clip-path: var(--move1);
      transform: translate(10px,-10px);
    }
  
    70% {
      clip-path: var(--move3);
      transform: translate(-10px,10px);
    }
  
    80% {
      clip-path: var(--move2);
      transform: translate(10px,-10px);
    }
  
    90% {
      clip-path: var(--move4);
      transform: translate(-10px,10px);
    }
  
    100% {
      clip-path: var(--move1);
      transform: translate(0);
    }
  }
  
  

/* Estilo para a área de passos */
.passo {
    display: none;
    animation: fadeIn 1s ease; /* Adiciona uma animação de fade-in */
}

.passo.ativo {
    display: block;
}

/* Estilo para a seção principal */
main {
    background-color: #3b4a3b; /* Fundo do contêiner principal */
    padding: 20px;
    border-radius: 50px; /* Cantos arredondados do contêiner principal */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve */
    max-width: 80%;
    margin: auto;
}

/* Estilo para imagens */
img {
    max-width: 100%;
    border-radius: 8px; /* Cantos arredondados das imagens */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra leve nas imagens */
}

/* Animação de fade-in */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}