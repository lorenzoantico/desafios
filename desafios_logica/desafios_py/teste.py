nome = input("Digite seu nome: ")
peso = float(input("Digite seu peso: "))
altura = float(input("Digite sua altura: "))

imc = peso / (altura * altura)

print("O seu IMC é aproximadamente", int(imc))

if imc < 18.5:
    print("Você está abaixo do peso")
elif imc >= 18.5 and imc <= 24.9:
    print("Você está no peso ideal")
elif imc >= 25 and imc <= 29.9:
    print("Você está com sobrepeso")
elif imc >= 30 and imc <= 34:
    print("Você está com obesidade grau I")
elif imc >= 35 and imc <= 39.9:
    print("Você está com obesidade grau II")
else:
    print("Você está com obesidade grau III")
