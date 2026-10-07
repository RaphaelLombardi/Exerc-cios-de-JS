/*
Exercício 1: O Buscador do GitHub (Assincronicidade + Tratamento de Erros)
Na vida real, a internet falha, links quebram e usuários digitam coisas erradas. O seu código precisa estar preparado para isso usando blocos try / catch.
O cenário: Você vai criar um mini-perfil de desenvolvedor buscando dados da API pública do GitHub.
- O que fazer no HTML: Crie um <input> para digitar o nome de usuário, um <button> "Buscar" e uma <div> vazia para o resultado.
- O que fazer no JS:
- Crie um evento de clique no botão que dispare uma função assíncrona.
- Dentro da função, use um bloco try { ... } catch (erro) { ... }.
- No try, faça um await fetch para a URL: https://api.github.com/users/ + o nome digitado no input.
- Transforme a resposta em JSON.
- Se o usuário existir, crie uma tag <img> no DOM com a propriedade avatar_url da resposta e um <h2> com o name. Adicione ambos na sua <div> de resultado.
- Se o usuário não existir (a API retorna um erro 404), o código deve cair no catch. Nele, exiba uma mensagem vermelha no DOM dizendo: "Usuário não encontrado!".
*/








/*
Exercício 2: O Relatório Financeiro (Manipulação Avançada de Arrays)
No React, você raramente usará o laço for tradicional para listar itens na tela. O mercado usa métodos funcionais de array, principalmente .map(), .filter() e .reduce().
O cenário: Você recebeu dados brutos do seu banco de dados e precisa processá-los antes de mostrar ao usuário.
O dado inicial: Copie este array para o seu código:
const transacoes = [{ id: 1, tipo: 'entrada', valor: 150 }, { id: 2, tipo: 'saida', valor: 50 }, { id: 3, tipo: 'entrada', valor: 200 }, { id: 4, tipo: 'saida', valor: 10 }];
A missão: Sem usar o for ou o while, faça o seguinte encadeamento:
Use o método .filter() para criar um novo array contendo apenas as transações do tipo 'entrada'.
Em seguida, use o método .reduce() nesse novo array para somar todos os valores e descobrir o total de ganhos.
Imprima no console.log a frase: "O total de entradas foi de R$ [valor_calculado]".
*/






/*
Exercício 3: O Bloco de Notas Persistente (JSON + LocalStorage)
Este é a ponte perfeita para entender bancos de dados! O localStorage é um "mini banco de dados" que vive dentro do navegador do usuário. Ele só aceita salvar textos (Strings). É aqui que o JSON brilha intensamente.
O cenário: Criar um campo de anotações que não perde o texto mesmo se o usuário atualizar a página (F5) ou fechar a aba.
O que fazer no HTML: Crie uma <textarea id="bloco-notas"></textarea> e um botão <button id="salvar">Salvar Anotação</button>.
O que fazer no JS (Ação de Salvar):
Ao clicar no botão "Salvar", pegue o valor da textarea.
Crie um objeto JS simples: const dados = { texto: valorDaTextarea, data: new Date() }.
Transforme esse objeto em uma string JSON usando JSON.stringify(dados).
Salve no navegador usando a função nativa: localStorage.setItem('minhaAnotacao', suaStringJson).
O que fazer no JS (Ação de Carregar):
Fora de qualquer botão (para rodar assim que a página abrir), tente buscar o dado salvo usando localStorage.getItem('minhaAnotacao').
Crie um if para checar se o dado existe.
Se existir, transforme o JSON de volta em objeto usando JSON.parse().
Pegue a propriedade texto desse objeto e devolva para dentro da sua <textarea>, restaurando o que o usuário havia digitado na visita anterior.
*/




