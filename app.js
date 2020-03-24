// const axios = require("axios")
const mockAPI = require("./mockAPI")
// const mockAPI2 = require("./mockAPI2")

const main = async () => {
  try {
    let temp = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(temp.status)
    console.log(temp.data)
    // this.setState({productList: temp.data})
  } catch (error) {
    console.log(error)
  }
}

state = {
  CarList: []
}

const main = () => {
  try {
    let temp = await mockAPI.getProduct()
    console.log(temp.status)
    console.log(temp.data)
    // this.setState({productList: temp.data})
  } catch (error) {
    console.log(error)
  }
  try {
    let temp = await mockAPI.getCars()
    console.log(temp.status)
    console.log(temp.data)
    // this.setState({CarList: temp.data})
  } catch (error) {
    console.log(error)
  }
}

main()

// const main2 = async () => {
//   try {
//     let temp = await mockAPI.getCars()
//     console.log(temp.status)
//     console.log(temp.data)
//     // this.setState({productList: temp.data})
//   } catch (error) {
//     console.log(error)
//   }
// }

// main2()

