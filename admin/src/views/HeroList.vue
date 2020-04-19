<template>
  <div class="about">
    <h1>英雄列表</h1>
    <el-table :data="heroes">
      <el-table-column prop="_id" label="Id" width="200"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="英雄称号"></el-table-column>
      <el-table-column label="英雄类型" prop="categories"></el-table-column>
      <el-table-column prop="scores.difficult" label="难度"></el-table-column>
      <el-table-column prop="scores.skills" label="技能"></el-table-column>
      <el-table-column prop="scores.attack" label="攻击"></el-table-column>
      <el-table-column prop="scores.survive" label="生存"></el-table-column>
      <el-table-column prop="avatar" label="图标">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="height:3rem" >
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" >
        <template slot-scope="scope">    
          <el-button type="text" size="small" @click="$router.push(`/heroes/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        heroes: []
      }
    },
    created() {
      this.fetch()
    },
    methods: {
      formatCategories(heroes){
        for(let i=0;i<heroes.length;i++){
          heroes[i].categories = heroes[i].categories.map(v=>(v.name)).join('/')
        }
        return heroes
      },
      async fetch() {
        const res = await this.$http.get('rest/heroes')
        this.heroes = this.formatCategories(res.data)
      },
      async remove(row){
        this.$confirm(`是否确定删除物品 "${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          await this.$http.delete(`rest/heroes/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>