const temp = {
  data: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ],
  status: 200
};

const temp2 = {
  data: [
    {carName: "Hondata"},
    {carName: "Toyota"},
  ],
  status: 200
}

temp3 = {
  data: {carName: "Hondata"},
  status: 200
}

const getProduct = () => {
  return new Promise((resolve, reject) => {
    resolve(temp);
  });
};

const getCars = () => {
  return new Promise((resolve, reject) => {
    resolve(temp2);
  });
}

const getCar = () => {
  return new Promise((resolve, reject) => {
    resolve(temp3);
  });
}

module.exports = { getProduct, getCars, getCar };
