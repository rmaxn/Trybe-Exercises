Vamos praticar? Primeiro veja o layout de caixas abaixo:

1. Agora vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css .
Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não tem problema: iremos trabalhá-las mais para frente! Basta se concentrar nas classes que você deve alterar de acordo com as instruções dos comentários.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício de Fixação: box model</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="caixa width-and-height" style="background: #036b52">A</div>
        <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
        <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
        <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
    </body>
    </html>

    .caixa {
      color: white;
      display: inline-block;
      line-height: 50px;
      text-align: center;
      vertical-align: top;
    }

    .width-and-height {
      height: 50px;
      width: 50px;
    }

    .padding {
    /* insira aqui um padding de 20px na classe abaixo para aplicá-lo aos itens B, C e D */
    }

    .margin {
    /* insira aqui uma margem de 30px na classe abaixo para aplicá-la aos itens C e D */
    }

    .border {
    /* insira aqui uma borda com valor '5px solid black' para aplicá-la ao item D */
    }