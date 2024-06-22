<h1 align="center">
    Edukae - MVP
</h1>

<h3 align="center">
Uma plataforma que potencializa o professor e prepara os jovens para o futuro.
</h3>

<br>
https://edukae.com.br
<br><br>
[LinkedIn](https://www.linkedin.com/company/edukae)

# Sobre

A Edukae é uma plataforma educacional baseado na web construído usando a pilha MERN (MongoDB, Express.js, React.js, Node.js). Tem como objetivo potencializar o professor em sala de aula e preparar os jovens para o futuro.

## Funcionalidades

- **Funções de usuário:** O sistema oferece suporte a três funções de usuário: Administrador, Professor e Aluno. Cada função possui funcionalidades e níveis de acesso específicos.

- **Painel do administrador:** Os administradores podem adicionar novos alunos e professores, criar turmas e disciplinas, gerenciar contas de usuários e supervisionar as configurações do sistema.

- **Acompanhamento de presença:** Os professores podem facilmente registrar a presença em suas aulas, marcar os alunos como presentes ou ausentes e gerar relatórios de presença.

- **Avaliação de desempenho:** Os professores podem avaliar o desempenho dos alunos fornecendo notas e feedback. Os alunos podem ver suas notas e acompanhar seu progresso ao longo do tempo.

- **Visualização de dados:** Os alunos podem visualizar seus dados de desempenho por meio de gráficos e tabelas interativos, ajudando-os a entender rapidamente seu desempenho acadêmico.

- **Comunicação:** Os usuários podem se comunicar facilmente por meio do sistema. Os professores podem enviar mensagens aos alunos e vice-versa, promovendo comunicação e colaboração eficazes.

## Tecnologias Utilizadas

- Frontend: React.js, Material UI, Redux
- Backend: Node.js, Express.js
- Database: MongoDB

<br>

# Installation

```sh
git clone https://github.com/giordani-p/mvp_edukae.git
```
Abra 2 terminais em janelas/abas separadas.

Terminal 1: Configurando back-end
```sh
cd backend
npm install
npm start
```

Crie um arquivo chamado .env na pasta backend.
Dentro dele escreva isto:

```sh
MONGO_URL = mongodb://127.0.0.1/edukae
```
Se você estiver usando o MongoDB Compass, poderá usar este link de banco de dados, mas se estiver usando o MongoDB Atlas, em vez deste link, escreva seu próprio link de banco de dados.

Terminal 2: Configurando Frontend
```sh
cd frontend
npm install
npm start
```
Agora, navegue até `localhost:3000` no seu navegador.
A API Backend estará rodando em `localhost:5000`.
<br>
# Solução de erro

Você pode encontrar um erro ao se inscrever, seja um erro de rede ou um erro de carregamento que dura indefinidamente.

Para resolver isso:

1. Navegue até o arquivo `frontend > .env`.

2. Remova o comentário da primeira linha. Depois disso, encerre o terminal frontend. Abra um novo terminal e execute os seguintes comandos:
```sh
cd frontend
npm start
```
Após concluir essas etapas, tente se inscrever novamente. Se o problema persistir, siga estas etapas adicionais para resolvê-lo:

1. Navegue até o arquivo `frontend > src > redux > userRelated > userHandle.js`.

2. Adicione a seguinte linha após as instruções de importação:

```javascript
const REACT_APP_BASE_URL = "http://localhost:5000";
```

3. Substitua todas as instâncias de `process.env.REACT_APP_BASE_URL` por `REACT_APP_BASE_URL`.

**IMPORTANTE:** Repita o mesmo processo para todos os outros arquivos com "Handle" em seus nomes.

Por exemplo, na pasta `redux`, existem outras pastas como `userRelated`. Na pasta `teacherRelated`, você encontrará um arquivo chamado `teacherHandle`. Da mesma forma, outras pastas contêm arquivos com “Handle” em seus nomes. Certifique-se de atualizar esses arquivos também.

O problema surge porque o arquivo `.env` no frontend pode não funcionar para todos os usuários, enquanto funciona para mim.

Adicionalmente:

- Ao testar o projeto, comece inscrevendo-se em vez de fazer login como convidado ou usar o login normal caso ainda não tenha criado uma conta.

 Para utilizar o modo visitante, navegue até `LoginPage.js` e forneça um email e senha de um projeto já criado no sistema. Isso simplifica o processo de login e, após criar sua conta, você poderá usar suas credenciais.

Essas etapas devem resolver o erro de rede no frontend. Se o problema persistir, sinta-se à vontade para entrar em contato comigo para obter mais assistência.

# Excluir recurso que não funciona, solução

Ao tentar excluir itens, você poderá encontrar uma mensagem pop-up informando: "Desculpe, a função de exclusão foi desativada por enquanto." Esta mensagem aparece porque desativei a função de exclusão em meu site ativo para evitar que visitantes excluam itens. Se você deseja ativar o recurso de exclusão, siga estas etapas:

1. Navegue até o arquivo `frontend > src > redux > userRelated > userHandle.js`.

2. Se você não fez nenhuma alteração, você deverá encontrar a função `deleteUser` na linha 71. Ela pode estar comentada. Pode ser assim:

```javascript
// export const deleteUser = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getDeleteSuccess());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }
```

3. Remova o comentário da função `deleteUser` acima e comente esta função `deleteUser` que está atualmente em execução da linha 87 à linha 90:

```javascript
export const deleteUser = (id, endereço) => async (despacho) => {
 expedição(getRequest());
 dispatch(getFailed("Desculpe, a função de exclusão foi desativada por enquanto."));
}
```

4. Se você modificou o código anteriormente, poderá encontrar as funções `deleteUser` em linhas diferentes. Nesse caso, remova o comentário do código original e comente o atual.

5. Em seguida, navegue até a pasta `frontend > src > pages > admin`. Aqui, você encontrará diferentes pastas com o sufixo "Relacionado". Abra cada pasta e localize os arquivos prefixados com “Mostrar”.

6. Abra cada arquivo com "Show" como prefixo e procure por uma função chamada `deleteHandler`. Por exemplo:

```javascript
const deleteHandler = (deleteID, endereço) => {
 console.log(deleteID);
 console.log(endereço);
 setMessage("Desculpe, a função de exclusão foi desativada por enquanto.");
 setShowPopup(true);
 // despacho(deleteUser(deleteID, endereço))
 // .then(() => {
 // despacho(getAllSclasses(adminID, "Sclass"));
 // })
}
```

7. Este é um trecho de exemplo de `ShowClasses`. Em outros arquivos com "Mostrar" como prefixo, pode ser diferente.

8. Remova o comentário do código comentado dentro da função `deleteHandler` e comente o código existente. Deveria ser semelhante a isto:

```javascript
const deleteHandler = (deleteID, endereço) => {
 //console.log(deleteID);
 // console.log(endereço);
 // setMessage("Desculpe, a função de exclusão foi desativada por enquanto.");
 //setShowPopup(true);
 expedição(deleteUser(deleteID, endereço))
 .então(() => {
 expedição(getAllSclasses(adminID, "Sclass"));
 })
}
```

9. Repita essas etapas para todos os outros arquivos. Em alguns casos, a função `deleteHandler` também pode ser encontrada em arquivos prefixados com "View". Verifique esses arquivos e repita o mesmo processo.


# Projeto Referência: 
```sh
git clone https://github.com/Yogndrr/MERN-School-Management-System.git
```