#Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare, e prossiga com o conteúdo!)

def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]