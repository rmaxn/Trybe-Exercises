# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver
# esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare,
# e prossiga com o conteúdo!)

def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]

list = [1, 2, 3, 4]


