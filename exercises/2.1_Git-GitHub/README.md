Durante seu curso na Trybe , seus projetos serão entregues através de pushes nos repositórios do GitHub.

1. Para podermos simular um exercício feito, você criará um arquivo .txt com um nome de sua escolha (Exemplo: trybe-skills.txt ) e utilizará o conteúdo abaixo.
    O que eu vou aprender na Trybe:

    - Unix
    - Bash
    - Git
2. No final, ao executar o comando ls -l na pasta 2.1 , você deverá receber um retorno parecido com:
    ls -l

    total 0
    -rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
3. Agora vamos transformar essa pasta em um repositório Git :
    Retorne a pasta trybe-exercises ;
    Inicialize o repositório com git init ;
    Crie um arquivo de README utilizando o comando touch README.md ;
    Crie um commit inicial utilizando:
        git add .
        git commit -m "Initial commit"
4. Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
5. Dê ao repositório um nome descritivo, como por exemplo trybe-exercises;
    ⚠️ Lembre-se de não inicializar o repositório com um arquivo README.md , pois você já criou um nos passos anteriores! 😉
6. Clique no botão SSH e então copie a URL do repositório;
7. Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO" ;
8. Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v . Seu terminal deve conter algo similar a isso:
    origin  git@github.com:john-snow/know-nothing.git (fetch)
    origin  git@github.com:john-snow/know-nothing.git (push)
        Em que john-snow corresponde ao seu username e know-nothing ao nome que você deu ao seu repositório;
9. Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro commit para o GitHub ! 🤩
10. Execute o comando git push origin master no terminal;
11. Vá até o seu GitHub e verifique as novas alterações.
12. Agora que tal adicionar uma descrição do que é seu repositório no README.md ? 💪🏼.
    O README.md que você recriou é referente ao repositório trybe-exercises , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
        Uma outra coisa interessante a se fazer é adicionar um README.md dentro da pasta exercises/2.1 para colocar a descrição dos exercícios que você desenvolveu;
13. Lembre-se de fazer um commit quando terminar de alterar os arquivos;
14. Depois do commit , faça sempre um push ;
15. Confira as alterações no GitHub .
        Não se preocupe, em breve você verá mais sobre como organizar seus exercícios e com a prática tudo isso ficará muito mais simples. 🚀