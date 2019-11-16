let currentCity = '';//当前城市
function getCurrentCity(result){
  currentCity = result.name;
  console.log("当前定位城市:" + currentCity);
}
var myCity = new BMap.LocalCity();
myCity.get(getCurrentCity);
console.log('不好意思，我先走一步' + currentCity);
export default currentCity
