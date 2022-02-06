# NextJS-LandingPage

Para preparar o ambiente, precisaremos de algumas coisas instaladas no computador, são elas:

https://nodejs.org/pt-br/

# Para instalar o yarn: 

basta executar o seguinte comando no terminal:

npm install -g yarn <br>
<br>
Depois, execute o comando para verificar se a instalação ocorreu corretamente:

yarn -version

## O que é Next.js?
Next.js é um framework baseado em React que pode entregar tanto conteúdo estático quanto gerado no servidor.
## A criar um projeto Next.js
Pode-se criar um projeto Next.js adicionando os pacotes do framework manualmente num projeto Node.js.
## Componente Link
Este componente permite a navegação SPA de aplicações Next.js. <br> 

Para facilitar a vida dos desenvolvedores, os criadores do Next.js criaram a ferramenta create-next-app que instala todas as dependências do framework e cria a estrutura de pastas recomendada com uma linha de comando.

## Como buildar um projeto Next.js
O comando next build && next export gera os arquivos que serão utilizados no ambiente de produção.
## SEO no Next.js
O Next.js entrega o conteúdo da página diretamente, enquanto no Create React App ele é gerado após o carregamento. Como resultado o SEO é melhor.
## create-next-app
Essa ferramenta realiza o setup inicial por você, facilitando o início de uma aplicação Next.js.

## Imagem estática (arquivo local)

const srcDoIcone = “/icones/nome-do-icone.svg”

Arquivos estáticos e imagens devem ser colocadas dentro da pasta public. Para referenciar o arquivo dentro dessa pasta, devemos começar o caminho com “/” e também colocar a extensão no final.
