const woolies = require("../wooliesData.json")
for (let i = 0; i < woolies.length; i++) {
  // console.log(woolies[i].name)
  if (woolies[i].name == "Green Zucchini Each") {
    console.log(woolies[i])
  }
}
// console.log(woolies[0].name)

const getName = (req, res) => {
  // test
  const name = "apple"
  // const { name } = req.name
  const lists = woolies.filter(item => item.name[0].toLowerCase().includes(name))
  lists.sort((a, b) => {
    return a.price - b.price
  })
  res.json(lists[0])
}

module.exports = {
  getName,
}