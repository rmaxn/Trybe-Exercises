'''
Exercício 1: Em um contexto de orientação a objetos, como podemos definir o que
são mensagens e qual a sua importância?

De acordo com o conteúdo, uma mensagem é uma das responsabilidades que um
objeto pode ter, sendo utilizada para invocar um comportamento. Quando uma
mensagem é enviada a um objeto, o mesmo pode ou não alterar seu estado. É
importante, pois orientação a objetos é sobre objetos e sua comunicação. E essa
comunicação entre os objetos é feita através de mensagens.
'''

'''
Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
algumas partes de um software de geometria. Como poderíamos modelar um objeto
retângulo?

Nome da Abstração:
Retângulo

atributos/estados:
base (tamanho)
altura (tamanho)

Comportamentos:
- calcular area (base * altura)
- calular perímetro (2 * (base + altura))
'''


class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return self.base * self.altura

    def calcular_perimetro(self):
        return self.base * 2 + self.altura * 2


retangulo_1 = Retangulo(5, 2)
print(retangulo_1.calcular_area())
print(retangulo_1.calcular_perimetro())

'''
Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos e
comportamentos?

Nome da abstração
Círculo

atributos/estados
- PI
- raio

comportamentos
- calcular area (PI * raio * raio)
- calcular perímetro (2 * PI * raio)
'''


class Circulo:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return self.raio * self.raio * self.PI

    def calcular_perimetro(self):
        return 2 * self.PI * self.raio


circulo_1 = Circulo(5)
print(circulo_1.calcular_area())
print(circulo_1.calcular_perimetro())

'''
Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de
uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual
seu nome, atributos e comportamentos?
Nome da abstração
Pedido

atributos/estados
- cliente
- itens consumidos
- forma de pagamento
- descontos

comportamentos
- calcular total
- calcular total com descontos

-----

Nome da abstração
Item

atributos/estados
- nome
- preço

comportamentos
- alterar preço
'''


class Cliente:
    def __init__(self, nome, itens, payment, descontos):
        self.nome = nome
        self.itens = itens
        self.payment_method = payment
        self.discount = descontos


class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

# Exercício 5: Notou que os pilares da orientação a objetos começam a
# manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora
# então modelarmos uma televisão?


'''
Nome da abstração
Televisão

atributos/estados
- volume
- canal
- taxa de aumento do volume
- tamanho (não pode ser modificado)
- estado (ligada/desligada)

comportamentos
- aumentar volume
- diminuir volume
- modificar canal (novo canal deve ser fornecido)
- ligar/desligar TV (normalmente é um botão só que modifica o estado atual)
'''


class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada
