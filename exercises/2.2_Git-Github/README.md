Parte I - Baixando repositórios com o git clone
1. Caso você queira copiar um repositório Git já existente — por exemplo, um projeto em que você queira contribuir —, o comando necessário é: git clone.
2. Mais do que baixar o código atual, o Git recebe uma cópia de quase todos os dados que o servidor
3. possui. Cada versão de cada arquivo no histórico do projeto é obtida quando você roda o comando git clone .
4. Vamos clonar o projeto que você criou na última aula para testar como funciona.
5. Crie uma nova pasta fora do diretório dos exercícios trybe-exercises .
4. Navegue para a pasta criada e execute o comando
    git clone urlDoSeuRepositórioTrybeExercises
        Você irá perceber que é exatamente um "clone" do que você subiu para o GitHub .
            Normalmente, ao participar dos projetos da Trybe , você irá precisar desse comando para conseguir baixar o repositório que já está configurado e poder focar apenas nos requisitos do projeto.

Parte II - Pull Request no Github
Agora vamos aprender a como criar um Pull Request no GitHub . Esse processo é importante para você realizar sugestões e contribuir com alterações em um repositório, basta ter a permissão para leitura.
A vantagem de se realizar o Pull Request é que você garante que o branch-padrão terá todo seu trabalho concluído e aprovado, realizando todas as novas alterações em uma branch separada.
Vamos observar o processo a baixo:
1. Navegue até a página principal do repositório no GitHub.
2. No menu "Branch" , você pode digitar o nome da sua nova branch e clicar em Create new branch .
3. Acima da lista de arquivos, clique em Pull request .
4. Use o menu suspenso do branch base para selecionar o branch em que deseja fazer merge de suas alterações. Em seguida, use o menu suspenso do branch de comparação para escolher o branch de tópico no qual você fez as alterações.
Obs: Para seguir para o passo 5 é preciso ter o primeiro commit realizado, caso tenha dificuldades em realizar pelo GitHub, siga a dica Extra realizando pelo seu terminal.
5. Digite um título e uma descrição para a pull request.
6. Para criar um pull request que está pronto para revisão, clique em Criar Pull Request . Para criar um rascunho de pull request, use o menu suspenso e selecione Criar rascunho de pull request e, em seguida, clique em Rascunho de Pull Request .
    Extra: Você também pode criar o pull request, após fazer o git push na sua máquina local. Aparecendo logo após o push o botão Comparar e Pull Request :
7. Após clicar é só realizar os passo de 4 a 6.

Parte III - Code Review
⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório trybe-exercises/exercises/2.1 , que você criou nas aulas anteriores.
Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋
1. Navegue até a raiz do projeto com o arquivo .txt;
2. Verifique se não existe nada sem "commitar" utilizando git status ;
    Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.
3. Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
4. No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe;
    Exemplo:
        O que eu vou aprender na Trybe:

        - Unix
        - Bash
        - Git
        - HTML
        - CSS
5. Faça um `git add nome-do-arquivo.extensao`;
    Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
6. Agora um git commit -m "Mensagem que você gostaria" ;
    Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m  "Adiciona nova skill"
7. Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu.
8. E por último um git push -u origin trybe-skills-changes ;
9. Abra um Pull Request com uma descrição detalhada:
    Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."
10. O merge deve ser feito apenas quando chegar no exercício 10
11. Retorne para a branch principal, master , com o comando: git checkout master ;
12. Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
13. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
14. No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos;
    Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉
    Faça um git add nome-do-arquivo.extensao
15. Agora um git commit -m "Mensagem que você gostaria"
16. E por último um git push -u origin trybe-skills-updates
    Após o primeiro "push" da sua branch, você pode usar apenas o comando git push
17. Abra um Pull Request com uma descrição amigável.
    O merge deve ser feito apenas quando chegar no exercício 10
18. No Slack , procure pelo canal "code-review-*" relativo à sua turma, e avise que você chegou a este ponto. O próximo passo será realizar o Code Review (CR) do projeto de outras pessoas estudantes. Entre em pelo menos um Pull Request e deixe alguns comentários para seus colegas;
19. Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :
    Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request" ;
    Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta.
    Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" .
20. Agora você deve conseguir "mergear" seu Pull Request normalmente. 😎