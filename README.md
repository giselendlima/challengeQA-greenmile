<h1 align= "left"> Desafio QA - GreenMile </h1>

<p align="justify"> 
<strong>Descrição do Desafio:</strong>  Criar um mini-projeto de automação de testes que execute o evento de long click, em um
componente web, e consiga validar se o tamanho em escala foi alterado para 225 x 225 pixels. 

<strong> Requisitos: </strong>
* Url: https://codepen.io/choskim/pen/RLYebL ;
* Utilizar o framework de automação cypress.io;
</p>

<h2 align="left"> Preparação do ambiente para rodar este projeto:</h2>
<p align="justify">
<strong>1.</strong> Deve ter o NPM instalado, onde será o gerenciador de pacotes de linguagem JS. Segue o link com as instruções de instalação: <a href= "https://www.npmjs.com/get-npm"> Link </a> </br>
<strong>2.</strong> Deve ter o Node instalado na sua maquina, caso não tenha, acesse o link abaixo e siga as instruções de instalação: <a href= "https://nodejs.org/pt-br/download"> Link </a> </br>
<strong>3.</strong> Deve ser feito o download em formato .zip ou clonar este projeto usando o terminal com o comando:
</p>

` git clone https://github.com/giselendlima/challengeQA-greenmile.git `
 
<p align="justify"><strong>4.</strong> Deve ser feita a instalação do framework de testes: o cypress
<strong>4.1.</strong> Dentro da pasta raiz do projeto pelo cmd/terminal da maquina você pode executar o comando <strong>npm install cypress</strong>, mas se você quer outras opções de instalação, sugiro que consulte a documentação: <a href="https://www.cypress.io/"> Link </a> 

<strong>5.</strong> Deve ter instalado o Visual Studio Code ou outra IDE de sua preferência.

</p>

<h2> Após configuração concluída do ambiente, vamos iniciar o cypress </h2>
<p align="justify"> <strong>1. </strong> Na pasta raiz, execute o comando <strong>npm run cypress:open</strong>, se você estiver usando o VSCode, pode executar no terminal da própria IDE. 
Caso esteja usando o terminal/cmd, certifique-se que está na pasta do projeto e execute o comando. </br>
Lembre-se do comando <strong>npm run cypress:open</strong> </br>
<strong> 2. </strong> Com o cypress iniciado, clique na pasta <strong>desafioQA</strong>, posteriormente, clique na classe <strong> desafioQA.spec.js </strong>; 
E assim, os testes irão rodar!

</p>

<h2>Observações: </h2>
<p align="justify"> 
Inicialmente, tive dificuldade para acessar o iframe do link utilizado nos testes. Após algumas pesquisas, encontrei
um artigo onde explicar algumas soluções para acessar os iframes usando cypress: <a href= "https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/"> Link </a>.

Para auxiliar esta solução também foi utilizado outros links como: <a href="https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__iframes"> Link Cypress.io Frames </a>  e <a href="https://github.com/hammerjs/hammer.js/issues/1211"> LongPress </a>

</p>
