# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.
nome = input("Digite seu nome: ").upper()

for letra in nome:
    print(letra)

# Exercício 2: Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo
# uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte
# formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você
# deve imprimir a soma dos valores válidos.

nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")

# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A
# nota miníma para aprovação é 6.

reprovados = []
with open("alunos.txt", "r") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            reprovados.append(student_grade[0] + "\n")


with open("reprovados.txt", "w") as recuStudentsFile:
    print(reprovados)
    recuStudentsFile.writelines(reprovados)
