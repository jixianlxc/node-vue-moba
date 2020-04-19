<template>
  <div class="page-hero">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-2 flex-1">
        <router-link tag='div' to='/' class="text-white fs-md">
          <span class="mx-2">王者荣耀</span><span>资讯站</span>
        </router-link>
      </div>
      <router-link to="/" tag="div" class="text-white">更多英雄 ></router-link>
    </div>
    <!-- end of top bar -->
    <div class="banner d-flex" style="flex-direction:column-reverse"
      :style="{ 'background-image': `url(${hero.banner})` }">
      <div class="info text-white p-3">
        <div>{{ hero.title }}</div>
        <div class="name">{{ hero.name }}</div>
        <div class="fs-sm">
          {{ hero.categories.map(v => v.name).join("/") }}
        </div>
        <div class="score">
          <span>难度</span>
          <span class="badge bg-yellow-1">{{ hero.scores.difficult }}</span>
          <span>技巧</span>
          <span class="badge bg-blue-2">{{ hero.scores.skills }}</span>
          <span>攻击</span>
          <span class="badge bg-red">{{ hero.scores.attack }}</span>
          <span>生存</span>
          <span class="badge bg-dark-green">{{ hero.scores.survive }}</span>
        </div>
      </div>
    </div>
    <!-- end of top banner -->

    <div class="px-3 bg-white">
      <div class="nav jc-around pt-3 pb-2 ">
        <div class="nav-item" :class="{active:active===0}"  @click="$refs.list.swiper.slideTo(0)">英雄初识</div>
        <div class="nav-item" :class="{active:active===1}" @click="$refs.list.swiper.slideTo(1)">进阶攻略</div>
      </div>
    </div>
    <swiper ref="list" @slide-change="(a)=>{active = $refs.list.swiper.realIndex}">
      <swiper-slide class="swiper-slide">
        <div class="bg-white py-2 mb-3">
          <div class="d-flex px-3 jc-around">
            <router-link to="/" tag="button" class="btn-lg btn mt-2">
              <i class="iconfont icon-menu"></i>
              英雄介绍视频
            </router-link>
            <router-link to="/" tag="button" class="btn-lg btn mt-2">
              <i class="iconfont icon-menu"></i>
              一图识英雄
            </router-link>
          </div>
          <div class="skills mt-3 px-3 bg-white">
            <div class="d-flex jc-around">
              <img @click="currentSkillIndex=index" class="icon" :class="{active:currentSkillIndex===index}"
                :src="item.icon" width="60" v-for="(item,index) in hero.skills" :key="item._id">
            </div>
            <div v-if="currentSkill">
              <div class="d-flex pt-4">
                <h3 class="m-0">{{currentSkill.name}}</h3>
                <span class="text-grey ml-4 fs-sm">(冷却值:{{currentSkill.cd}}</span>
                <span class="text-grey fs-sm">消耗:{{currentSkill.cd}})</span>
              </div>
              <p class="description pb-2">{{currentSkill.discription}}</p>
              <p class="text-grey">小提示:{{currentSkill.tips}}</p>
            </div>
          </div>
        </div>
        <div class="px-3 py-2 bg-white mb-3">
          <m-card icon='icon-menu' title='出装推荐'>
            <div>
              <h4>顺风出装</h4>
              <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
                <div class=" py-2 text-center w-100-6 px-2" v-for='(item,index) in hero.items1' :key="index">
                  <img :src="item.icon" alt="" width="50" style="border-radius:50%">
                  <div class="fs-sm">{{item.name}}</div>
                </div>
              </div>
              <h4>逆风出装</h4>
              <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
                <div class=" py-2 text-center w-100-6 px-2" v-for='(item,index) in hero.items2' :key="index">
                  <img :src="item.icon" alt="" width="50" style="border-radius:50%">
                  <div class="fs-sm">{{item.name}}</div>
                </div>
              </div>
            </div>
          </m-card>
        </div>
        <div class="px-3 py-2 bg-white mb-3">
          <m-card icon='icon-menu' title='使用技巧'>
            <p>
              {{hero.usageTips}}
            </p>
          </m-card>
        </div>
        <div class="px-3 py-2 bg-white mb-3">
          <m-card icon='icon-menu' title='团战思路'>
            <p>
              {{hero.teamTips}}
            </p>
          </m-card>
        </div>
        <div class="px-3 py-2 bg-white mb-3">
          <m-card icon='icon-menu' title='对抗技巧'>
            <p>
              {{hero.battleTips}}
            </p>
          </m-card>
        </div>
        <div class="px-3 py-2 bg-white mb-3">
          <m-card icon='icon-menu' title='英雄关系'>
            <h4 class="mt-3 mb-1">最佳搭档</h4>
            <div v-for="(item) in hero.partners" :key='item._id'>
              <div class="d-flex ">
                <img :src="item.hero.avatar" width="50" alt="">
                <span>{{item.description}}</span>
              </div>
            </div>
            <h4 class="mt-3 mb-1">被谁克制</h4>
            <div v-for="(item) in hero.counters" :key='item._id'>
              <div class="d-flex ">
                <img :src="item.hero.avatar" width="50" alt="">
                <span>{{item.description}}</span>
              </div>
            </div>
            <h4 class="mt-3 mb-1">克制谁</h4>
            <div v-for="(item) in hero.canCounterHeroes" :key='item._id'>
              <div class="d-flex ">
                <img :src="item.hero.avatar" width="50" alt="">
                <span>{{item.description}}</span>
              </div>
            </div>
          </m-card>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="p-3 bg-white">
          暂未攻略
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    props: {
      id: {
        required: true
      }
    },
    created() {
      this.id && this.fetch()
    },
    data() {
      return {
        hero: {
          skills: [],
          scores: {},
          categories: [],
        },
        currentSkillIndex: 0,
        active:0
      }
    },
    computed: {
      currentSkill() {
        return this.hero.skills[this.currentSkillIndex]
      }
    },
    methods: {
      async fetch() {
        const res = await this.$http.get(`/hero/${this.id}`)
        this.hero = res.data
      }
    }
  }
</script>
<style lang='scss'>
  .page-hero {
    .nav {
      border-bottom: 1px solid #d4d9de;
    }

    .skills {
      img.active {
        border: #db9e3f 2px solid;
        border-radius: 45%;
        ;
      }

      .description {
        border-bottom: 1px solid #d4d9de;
      }
    }

    .banner {
      // width: 100%;
      height: 50vw;
      background: #fff no-repeat top center;
      background-size: auto 100%;

      .info {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

        .name {
          font-size: 1.2rem;
          margin: 0.6rem 0 0.6rem 0;
        }

        .score {
          margin-top: 0.2rem;

          .badge {
            margin: 0 0.25rem;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            line-height: 0.95rem;
            text-align: center;
            font-size: 0.7rem;
            display: inline-block;
            border: 1px solid rgb(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
</style>