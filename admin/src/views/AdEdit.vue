<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="model.name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button type="text" @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
        <el-row type="flex" style="flex-wrap:wrap" :gutter="20">
          <el-col :md="11" v-for="(item,index) in model.items" :key="index">
            <el-card class="box-card" style="margin-bottom:20px">
              <div slot="header" class="clearfix">
                <span>广告{{ index + 1 }}</span>
                <el-button style="float: right; padding: 3px 0; color:#F56C6C" type="text"
                  @click="model.items.splice(index,1)">删除</el-button>
              </div>
              <el-form-item label="跳转链接（url）">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图片">
                <el-upload class="avatar-uploader" 
                  :action="$http.defaults.baseURL + '/upload'" 
                  :show-file-list="false"
                  :on-success="res => $set(item, 'image', res.url)" 
                  :headers="getAuthHeader()">
                  <img v-if="item.image" :src="item.image" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
                </el-upload>
              </el-form-item>
            </el-card>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
  .el-input {
    width: 200px
  }
</style>
<script>
  export default {
    props: {
      id: {}
    },
    data() {
      return {
        model: {
          items:[]
        }
      }
    },
    created() {
      this.model = {}
      this.id && this.fetch()
    },
    methods: {
      async save() {
        if (this.id) {
          await this.$http.put(`rest/ads/${this.id}`, this.model)
        } else {
          await this.$http.post('rest/ads', this.model)
        }
        this.$router.push('/ads/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch() {
        const res = await this.$http.get(`rest/ads/${this.id}`)
        this.model = Object.assign({}, this.model, res.data)
      }
    }
  }
</script>