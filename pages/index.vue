<!--
 * @Author: jiashuangxi
 * @Date: 2022-04-05 20:20:18
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2022-04-06 17:57:59
 * @Describe: 
-->
<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <h1 class="title">
        ==Welcome to the Vant + Nuxt.js template
      </h1>
      <div class="links">
        <van-button type="primary" url="https://nuxtjs.org/">
          Documentation
        </van-button>
        <van-button url="https://github.com/nuxt/nuxt.js">
          GitHub
        </van-button>
        <van-button url="https://vant-contrib.gitee.io/vant">
          Vant UI
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginQrcode } from '~/assets/js/api';
export default {
  name: 'IndexPage',
  data() {
        return {
        };
    },
    mounted() {
        this.login();
    },
    
    methods: {
        login() {
            loginQrcode().then(res => {
               console.log('res', res);
            });
        },
      
    }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    Quicksand,
    "Source Sans Pro",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
