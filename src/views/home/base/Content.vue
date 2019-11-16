<template>
    <div id="content">
      <div class="nav">
        <div class="left">
          <div class="cont">
            <el-carousel indicator-position="outside">
              <el-carousel-item  v-for="(item,index) in dataList" :key="index">
                <div>
                  <img :src="item.url" alt="">
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="price">
            <ul>
              <li class="conte">
                <div>
                  <img src="" alt="">
                  <span>说一段神话</span>
                </div>
              </li>
              <li class="conte">
                <div>
                  <img src="" alt="">
                  <span>说一段神话</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          right
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data(){
            return{
              dataList:[
                {
                  id: 1,url: 'https://www.yangqq.com/d/file/p/2019-03-04/296f82e95dd5026b6cdfacd197ae5062.png'
                },
                {
                  id: 2,url: 'https://www.yangqq.com/d/file/p/2019-03-04/296f82e95dd5026b6cdfacd197ae5062.png'
                },
                {
                  id: 3,url: 'https://www.yangqq.com/d/file/p/2019-03-04/296f82e95dd5026b6cdfacd197ae5062.png'
                },
                {
                  id: 4,url: 'https://www.yangqq.com/d/file/p/2019-03-04/296f82e95dd5026b6cdfacd197ae5062.png'
                }
              ]
            }
        }
    }
</script>

<style scoped>
  ul,li{
    text-decoration: none;
    list-style: none;
  }
#content{
  background: #E9EAED;
  height: 2000px;
}
.nav{
  margin: 10px auto;
  width: 1200px;
  height: 100px;
  text-align: center;
}
  .nav .left, .nav .right{
    float: left;
    border-right: 10px solid #fff;
    width: 77%;
    height: 600px;
  }
  .nav .right{
    border-left: 10px solid #fff;
    border-right: none;
    background: #0f0;
    height: 600px;
    width: 23%;
  }
  @media only screen and (max-width: 1200px) {
    #content .nav{
      width: 100%;
    }
  }
@media only screen and (max-width: 980px) {
  #content .right{
    display: none;
  }
  #content .left{
    width: 100%;
    border-right: hidden;
  }
}
@media only screen and (max-width: 640px) {
  #content .left,
  #content .right{
    width: 100%;
    display: block;
    border: hidden;
    border-top: 10px  solid #FFFFFF;
    border-bottom: 10px solid #FFFFFF;
    height: 600px;
    line-height: 200px;
  }
}
#content .nav .left .cont{
  float: left;
  width: 68%;
  height: 260px;
}
/deep/#content .nav .left .el-carousel__container{
  height: 260px;
  width: 100%;
}
/deep/#content .nav .left .cont .el-carousel__indicators--outside{
  width: 100%;
}
.el-carousel--horizontal{
  width: 100%;
}
  .price{
    float: right;
    width: 30%;
  }
  .price .conte{
    width: 100%;
    height: 125px;
    background: blue;
    margin-bottom: 10px;
    text-align: center;
    line-height: 125px;
    font-size: 20px;
    color: #fff;
  }

</style>
