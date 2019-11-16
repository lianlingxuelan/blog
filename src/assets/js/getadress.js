// var myCity = new BMap.LocalCity()
// export default myCity.get

let getCurrentCityName = function () {
  return new Promise(function (resolve, reject) {
    let myCity = new BMap.LocalCity()
    myCity.get(function (result) {
      resolve(result.name)
    })
  })
}

export default getCurrentCityName
