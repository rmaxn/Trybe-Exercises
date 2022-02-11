class Conta_Corrente():
    def __init__(self, numero_conta, nome_correntista, saldo):
        self.numero_conta = numero_conta
        self.nome_correntista = nome_correntista
        self.saldo = saldo

    def alterar_nome(self, nome_correntista):
        self.nome_correntista - nome_correntista

    def depositar(self, deposito):
        self.saldo += deposito

    def sacar(self, saque):
        self.saldo -= saque


conta_do_falcao = Conta_Corrente(1, 'falcao', 350000000)

print(conta_do_falcao.saldo)
