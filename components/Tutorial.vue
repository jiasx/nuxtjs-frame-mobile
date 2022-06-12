<!--
 * @Author: jiashuangxi
 * @Date: 2022-04-04 20:33:21
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2022-04-06 13:54:42
 * @Describe: 
-->
<!-- Please remove this file from your project -->
<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { loginQrcode } from '~/assets/js/api';
export default {
  name: 'NuxtTutorial',
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
<style lang="less" scoped>
.login-qrcode {
    width: 100%;
    height: 100%;
}
</style>
