export default {
  cart: ({ cart }) => cart,
  total: ({ cart }) => cart.reduce((acc, cur) => acc + cur.cost, 0),
  amount: ({ cart }) => cart.length,
  userInformation: ({ userInformation }) => userInformation
}
