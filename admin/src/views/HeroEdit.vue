<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}英雄</h1>
    <el-form @submit.native.prevent="save" label-width="80px" label-position="right">
      <el-tabs>
        <el-tab-pane label="基本信息">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="名称">
                    <el-input v-model="model.name" type="text"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="称号">
                    <el-input v-model="model.title" type="text"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="类型">
                <el-select v-model="model.categories" multiple>
                  <el-option v-for="item in categories" :label="item.name" :value='item._id' :key='item._id'>
                  </el-option>
                </el-select>
              </el-form-item>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="难度">
                    <el-rate v-model="model.scores.difficult" style="line-height=40px" show-score></el-rate>
                  </el-form-item>
                  <el-form-item label="技能">
                    <el-rate v-model="model.scores.skills" style="line-height=40px" show-score></el-rate>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="攻击">
                    <el-rate v-model="model.scores.attack" style="line-height=40px" show-score></el-rate>
                  </el-form-item>
                  <el-form-item label="生存">
                    <el-rate v-model="model.scores.survive" style="line-height=40px" show-score></el-rate>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="顺风出装">
                <el-select v-model="model.items1" multiple size="medium">
                  <el-option v-for="item in items" :label="item.name" :value='item._id' :key='item._id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="逆风出装">
                <el-select v-model="model.items2" multiple>
                  <el-option v-for="item in items" :label="item.name" :value='item._id' :key='item._id'></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="使用技巧">
                <el-input v-model="model.usageTips" placeholder="" autosize type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="对抗技巧">
                <el-input v-model="model.battleTips" placeholder="" autosize type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="团战思路">
                <el-input v-model="model.teamTips" placeholder="" autosize type="textarea"></el-input>
              </el-form-item>
              <el-row :gutter="5">
                <el-col :span="8">
                  <el-form-item label="图标">
                    <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'"
                      :show-file-list="false" :headers="getAuthHeader()" :on-success="afterUpload">
                      <img v-if="model.avatar" :src="model.avatar" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="背景图片">
                    <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeader()"
                      :show-file-list="false" :on-success="res => $set(model, 'banner', res.url)">
                      <img v-if='model.banner' :src="model.banner" class="banner">
                      <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>

            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="技能">
          <el-button type="text">{{model.name}}</el-button>
          <el-button type="text" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap" :gutter="20">
            <el-col :md="11" v-for="(item,index) in model.skills" :key="index">
              <el-card class="box-card" style="margin-bottom:20px">
                <div slot="header" class="clearfix">
                  <span>技能{{ index + 1 }}</span>
                  <el-button style="float: right; padding: 3px 0; color:#F56C6C" type="text"
                    @click="model.skills.splice(index,1)">删除</el-button>
                </div>
                <el-form-item label="名称">
                  <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                  <el-upload class="avatar-uploader" :action="uploadUrl" :headers="getAuthHeader()"
                    :show-file-list="false" :on-success="res => $set(item, 'icon', res.url)">
                    <img v-if='item.icon' :src="item.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height:100px"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="冷却值">
                  <el-input v-model="item.cd"></el-input>
                </el-form-item>
                <el-form-item label="技能消耗">
                  <el-input v-model="item.cost"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="item.discription" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="小提示">
                  <el-input v-model="item.tips" type="textarea"></el-input>
                </el-form-item>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="英雄关系" style="margin-bottom:20px">
          <el-row :gutter="10">
            <el-col :md="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>最佳搭档</span>
                </div>
                <el-form-item label="英雄1">
                  <el-select v-model="model.partners[0].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.partners[0].description" placeholder="" autosize type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="英雄2">
                  <el-select v-model="model.partners[1].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.partners[1].description" placeholder="" autosize type="textarea"></el-input>
                </el-form-item>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>被谁克制</span>
                </div>
                <el-form-item label="英雄1">
                  <el-select v-model="model.counters[0].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.counters[0].description" placeholder="" autosize type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="英雄2">
                  <el-select v-model="model.counters[1].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.counters[1].description" placeholder="" autosize type="textarea"></el-input>
                </el-form-item>
              </el-card>
            </el-col>
            <el-col :md="8">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>克制谁</span>
                </div>
                <el-form-item label="英雄1">
                  <el-select v-model="model.canCounterHeroes[0].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.canCounterHeroes[0].description" placeholder="" autosize type="textarea">
                  </el-input>
                </el-form-item>
                <el-form-item label="英雄2">
                  <el-select v-model="model.canCounterHeroes[1].hero" size="medium">
                    <el-option v-for="item in heroes" :label="item.name" :value='item._id' :key='item._id'></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="model.canCounterHeroes[1].description" placeholder="" autosize type="textarea">
                  </el-input>
                </el-form-item>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: {
      id: {}
    },
    data() {
      return {
        model: {
          name: '',
          avater: '',
          scores: {},
          skills: [],
          partners: [{
            hero: null,
            description: null
          }, {
            hero: null,
            description: null
          }],
          counters: [{
            hero: null,
            description: null
          }, {
            hero: null,
            description: null
          }],
          canCounterHeroes: [{
            hero: null,
            description: null
          }, {
            hero: null,
            description: null
          }]
        },
        categories: [],
        items: [],
        heroes: []
      }
    },
    created() {
      this.fetchCategories()
      this.fetchItems()
      this.fetchHeroes()
      this.id && this.fetch()
    },

    methods: {
      afterUpload(res) {
        this.$set(this.model, 'icon', res.url)
      },
      async save() {

        if (this.id) {
          await this.$http.put(`rest/heroes/${this.id}`, this.model)
        } else {
          await this.$http.post('rest/heroes', this.model)
        }

        this.$router.push('/heroes/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch() {
        const res = await this.$http.get(`rest/heroes/${this.id}`)
        if (res.data.partners.length === 0) res.data.partners.push({}, {})
        if (res.data.counters.length === 0) res.data.counters.push({}, {})
        if (res.data.canCounterHeroes.length === 0) res.data.canCounterHeroes.push({}, {})
        this.model = Object.assign({}, this.model, res.data)
      },
      async fetchCategories() {
        const res = await this.$http.get(`rest/categories`)
        this.categories = res.data
      },
      async fetchItems() {
        const res = await this.$http.get(`rest/items`)
        this.items = res.data
      },
      async fetchHeroes() {
        const res = await this.$http.get(`rest/heroes`)
        this.heroes = res.data
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  .banner {
    height: 100px;
    display: block;
  }

  .el-col {
    border-radius: 4px;
  }
</style>