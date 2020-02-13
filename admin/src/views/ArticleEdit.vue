<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label="所属分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in categories" :key="item._id" :label='item.name' :value='item._id'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"  type="text"></el-input>
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
        model: {},
        categories: []
      }
    },
    created() {
      this.model = {}
      this.fetchParents()
      this.id && this.fetch()
    },

    methods: {
      async save() {

        if (this.id) {
          await this.$http.put(`rest/categories/${this.id}`, this.model)
        } else {
          await this.$http.post('rest/categories', this.model)
        }

        this.$router.push('/categories/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch() {
        const res = await this.$http.get(`rest/categories/${this.id}`)
        this.model = res.data
      },
      async fetchParents() {
        const res = await this.$http.get(`rest/categories`)
        this.parents = res.data
      }
    }
  }
</script>