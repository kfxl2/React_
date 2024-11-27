# Resumo da Aula

Na aula de hoje, aprendemos a instalar bibliotecas importantes, como React e Bootstrap, para criar nosso primeiro projeto React. Utilizamos os comandos recomendados com o `npm install` para instalar as dependências necessárias.

Além disso, exploramos o uso do **Reactstrap** para implementar componentes estilizados e praticamos a revisão de código HTML. Fizemos modificações para criar uma janela de navegação (Navbar), incluindo o nome do aluno como exemplo, configurando o arquivo `index.js` e outros componentes conforme solicitado na atividade.

### Etapas realizadas:
1. Instalamos as bibliotecas:
   - `reactstrap`
   - `bootstrap`
   - `react-popper` e `@popperjs/core`
2. Configuramos o arquivo `index.js` para importar o CSS do Bootstrap.
3. Criamos e modificamos o componente Navbar para exibir o nome do aluno.
4. Utilizamos o comando `commit` para subir as alterações ao GitHub, garantindo que nosso repositório fosse salvo online.

### Imagem do Navbar
Adicione aqui uma captura de tela do Navbar com seu nome personalizado:

![alt text](image.png)
```bash
    import { Navbar, NavbarBrand } from 'reactstrap';

      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      <div>Aluno: Fulano de Tal</div>
   </div>
 </Navbar>
```
**A primeira linha de codigo server para importar a bliblioteca do navbar e o navbarBrand para poder utilizar suas funcionalidades** 

**segunda linha  define a barra de navbar de cor preta  e a barra primaria do bootstrap** 

**terceira linha  define o nome como container e deixa ela centralizada  na barra de navegação** 

**quarta linha define o navbarBrand como o ristorante con funsion 
que feio que deixa ele como link direcionando para tela inicial meio que como um botão para voltar para a pagina inicial quando se click** 

**quinta linha eu defino o nome do aluno como foi pedido na questão 
ele exibe na tela o nome que foi digitado dentro do div e deixa ele centralizado na cor preta como foi definido no começo do codigo.**

# Componente Menu Dinâmico com React

Nossa aplicação precisa de um menu atraente! Aqui está como criamos um componente Menu dinâmico com React.

---

## **Importações**
Para começar, importamos três amigos importantes:

- **React**: Para criar componentes e usar JSX.
- **useState**: Para gerenciar dados dinâmicos.
- **Media** (reactstrap): Para layouts responsivos.

---

## **Definição do Componente**
Criamos uma função chamada `Menu`. Aqui, definimos dados e lógica para exibir pratos.

---

### **Armazenamento dos Dados**
Usamos `useState` para criar uma lista de pratos. Cada prato é um objeto com detalhes como:
- **Nome**
- **Imagem**
- **Preço**

---

### **Criação da Lista de Itens**
Utilizamos o método `map` para transformar cada prato em um bloco visual. 
- A **imagem** fica à esquerda.  
- O **texto** aparece à direita.

---

## **Exibição na Tela**
Organizamos os pratos em um contêiner principal usando o **Bootstrap**. O **Media** garante um layout limpo e responsivo.

---

## **Exportação do Componente**
Finalmente, exportamos o `Menu` para ser usado em outras partes do projeto.

---

# React component parte 2 

## **Breve Descrição das Alterações Feitas na Aula**

- Melhoramos o menu Agora, usamos o Card do Reactstrap para uma apresentação mais atraente. O useState gerencia o prato selecionado, exibindo detalhes ao clicar.

- Organizamos os dados em dishes.js e os integramos em App.js para um menu dinâmico."

---

## **MenuComponent.js**

### **Breve Descrição**
Este arquivo define o componente `Menu`, que exibe a lista de pratos usando o componente `Card` do **reactstrap**. Ele também exibe os detalhes de um prato selecionado, permitindo uma experiência interativa para o usuário.

### **Importaçoes componentes e o que fazem?(breve explicaçoes)**
- **React**: Para criar o componente e usar JSX .
- **useState**: Para armazenar e manipular o estado do prato utilizado.
- **Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay** (do **reactstrap**): Para renderizar os pratos de forma atraente, utilizando o layout de cartões.

### **Componentes**
- **Menu**: Este é o componente principal que renderiza a lista de pratos. Ele mapeia os pratos e os exibe em um layout de cartões.

### **Função `onDishSelect`**
- serve para atualizar o estado do prato selecionado quando o usuário clica em um item no menu. Ela recebe o prato clicado como argumento e atualiza o estado selectedDish. Isso faz com que o componente re-renderize e exiba os detalhes do prato selecionado, permitindo uma interação dinâmica no menu.

### **Função `renderDish`**
- Essa função recebe um prato como argumento e, se o prato for válido, exibe um cartão com os detalhes do prato,como nome, descrição e imagem. Se o prato for null, não exibe nada, retornando uma div vazia.

### **Função `props.dishes.map`**
- Essa função map ela percorre todo o array em dishes e criando componente card para os pratos exibindo o nome e imagem ao selecionar o prato entra a função onDishSelect e chamado para mostrar os detalhes do prato selecionado. 

---

## **dishes.js**

### **Breve Descrição**
Este arquivo compila os dados dos pratos disponíveis em nosso menu, apresentados em formato de array de objetos com detalhes como nome, imagem, categoria e descrição.

### **Propriedades**
- **id**: Identificador para cada prato.
- **name**: Nome do prato.
- **image**: Caminho para imagem do prato.
- **category**: Categoria do prato (ex: master, appetizer, dessert).
- **label**: Rótulo que pode ser usado para destacar características do prato (ex: Hot, New).
- **price**: Preço do prato.
- **description**: Descrição detalhada do prato.
- **comments**: Lista de comentários sobre o prato, cada um com seu autor e sua data.

### **Tipo de Dados Utilizado**
- O arquivo usa objetos dentro de um array para representar os pratos.
- Dentro de cada objeto, temos:
  - Strings para `nome`, `categoria`, `imagem`, `preço`, `descrição`, e `label`.
  - Arrays de objetos para os `comentarios`, onde cada comentário é um objeto contendo:
    - **id**: número inteiro.
    - **rating**: número que representa a avaliação do prato (1-5).
    - **comment**: texto do comentário.
    - **author**: nome do autor do comentário.
    - **date**: data do comentário.

---

## **App.js**

### **Breve Descrição**
Este arquivo é o ponto de entrada da aplicação, onde o componente principal `App` é definido. Ele exibe a barra de navegação e o menu, usando os dados dos pratos importados de `dishes.js`.

### **Para que Serve o `const [dishes]`**
- A constante `dishes` é um estado que armazena os dados dos pratos, sendo gerenciada pelo `useState`.
- Esses dados são passados para o componente `Menu` como uma propriedade (`props`), permitindo que o `Menu` mostre os pratos.

### **Explicação do `<Menu dishes={dishes} />`**
- A linha `<Menu dishes={dishes} />` renderiza o componente `Menu` e passa os dados dos pratos como propriedade (`props`).
- Isso permite que o componente `Menu` acesse e exiba os pratos, gerando a lista interativa do menu e mostrando os detalhes de um prato selecionado.




