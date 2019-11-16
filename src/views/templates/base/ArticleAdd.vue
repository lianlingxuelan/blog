<template>
  <div id="articleAdd">
    <el-form ref="form" class="add" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="创建日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否公开">
        <el-switch v-model="public"></el-switch>
      </el-form-item>
      <el-form-item label="分类">
        <el-input  v-model="category"></el-input>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="内容简介">
        <el-input v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="content"></el-input>
      </el-form-item>
      <el-form-item label="添加图片">
        <el-upload
          :action="UpUrl"
          :drag="true"
          list-type="picture-card"
          ref="newupload"
          multiple
          :before-upload="handlePreview"
          :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
      </el-form-item>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="primary" @click="newSubmitForm">确定上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "ArticleAdd",
    data(){
      return {
        dialogImageUrl: '',
        pppss:{
          srid:''
        },
        UpUrl:'/api/admin/image',
        dialogVisible: false,
        disabled: false,
        fileList: [],
        // ruleForm2: {
        //   username:'',
        //   password: '',
        // },
        form: {
          date1: '',
          date2: '',
        },
        author: 'yuese',
        content: '我爱你',
        public: true,
        start: '',
        enjoy: false,
        title: '',
        category: '',
        description: ''.substring(),
        views: 0,
        comment: '',
        img: ''
      }
    },
    created(){
      this.getData()
    },
    methods: {
      getData(){
        console.log(this);
        //console.log(this.$store.state.loginUser)
      },
      handlePreview(file) {
        let fd = new FormData();
        fd.append('file',file);//传文件
        //fd.append('srid',this.aqForm.srid);//传其他参数
        console.log(fd);
        // this.$axios.post(this.UpUrl,fd).then(function(res){
        //   alert('成功');
        // })
      },
      newSubmitForm(){//确定上传
        this.$refs.newupload.submit();
      },
      onSubmit(){
        // this.$axios.post('/api/admin/article',{
        //   img: this.dialogImageUrl
        // })
        this.$axios.post('/api/admin/article',{
          author : this.$store.state.loginUser,
          content : this.content || '123',
          start : this.start || 1,
          enjoy : this.enjoy || false,
          title : this.title ||  '长风破浪',
          category : this.category,
          description : this.description ||  '我爱你',
          views : this.views ||  4,
          comment : this.comment ||  '我爱你',
          img : this.img || 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3357786243,3135716437&fm=26&gp=0.jpg'
        }).then(res=>{
          console.log(res.data);
          if(res.data.errno){
            console.log(1);
            this.$message.error('该标题已存在')
            return
          }
          this.$message({  //如果登录成功 弹出成功提示
            message: '创建成功',
            type: 'success'
          });
        })
      },
      async handleRemove(file) {
        console.log(file);
        this.img = file.url
        console.log(this.img,this);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl);
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>
  #articleAdd{
    width: 100%;
    height: 100%;
  }
  #articleAdd .add{
    margin : 0 auto;
    width: 60%;
  }
  #articleAdd /deep/ .el-form-item__content .el-upload-dragger{
    width: 147px;
    height: 147px;
  }
</style>
