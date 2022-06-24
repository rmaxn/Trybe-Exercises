const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* Agora você vai fazer alguns exercícios de fixação.
1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  Note que o parâmetro da função já está sendo passado na chamada da função.
*/
const customerInfo = (order) => {
  const { name, phoneNumber, address } = order
  const { street, number, apartment } = address
  return console.log(
    `Olá, Ana Silveira, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº ${number}, AP: ${apartment}`
  )
}

customerInfo(order)

/* 
2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let buyer = {
    name: 'Luiz Silva',
    order: {
      pizza: {
        muzzarella: {
          amount: 1,
          price: 25,
        },
        calabresa: {
          amount: 1,
          price: 25,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      payment: {
        total: 50,
      },
    }
  }
  const newBuyer = Object.assign(order, buyer)
  let customer = order.name;
  // console.log(customer)
  let pizza = Object.entries(order.order.pizza)
  // console.log(pizza)
  let drink = Object.entries(order.order.drinks.coke)
  // console.log(drink)
  let total = Object.entries(order.order.payment)
  // console.log(total)
  let frase=
  `Olá ${customer}, o total do seu pedido de ${pizza[0][0]}, ${pizza[1][0]}, e ${drink[0][1]} é R$ ${total[0][1]},00`
  console.log(frase)
}
orderModifier(order);
