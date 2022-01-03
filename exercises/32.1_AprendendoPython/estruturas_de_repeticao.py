# Exercício 13: O Fatorial de um número inteiro é representado pela
# multiplicação de todos os números predecessores maiores que 0.
# Por exemplo o fatorial de 5 é 120 # pois 5! = 1 * 2 * 3 * 4 * 5 .
# Escreva um código que calcule o fatorial de um número inteiro.

result = 1
min = 1
max = 5
while min <= max:
    result = result * min
    min += 1
print(result)  # 120

# Exercício 14: Um sistema de avaliações registra valores de 0 a 10 para cada
# avaliação. Após algumas mudanças estes valores precisam ser ajustados para
# avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5,
# 9, 10] . Escreva um código capaz de gerar as avaliações após a mudança. Neste
# caso o resultado deveria ser [60, 80, 50, 90, 100].
# Experimente utilizar a sintaxe de compreensão de listas.
ratings = [6, 8, 5, 9, 10]

novasNotas = []
for rating in ratings:
    rating *= 10
    novasNotas.append(rating)
print(novasNotas)  # [60, 80, 50, 90, 100]

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o
# elemento for divisível por 3.

for multiplo in novasNotas:
    if multiplo % 3 == 0:
        print(multiplo, "Multiplo de 3")  # 60 Multiplo de 3 # 90 Multiplo de 3
