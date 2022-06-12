<!--
 * @Author: jiashuangxi
 * @Date: 2022-04-04 21:57:26
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2022-04-06 13:54:52
 * @Describe: 
-->
<template>
    <div class="container">
        <div v-if="error.statusCode === 404" class="status-404">
            <div class="img-404"></div>
        </div>
        <div v-else-if="error.statusCode === 500" class="status-500">
            抱歉服务出错了...
        </div>
        <div v-else>{{ error.message }}</div>
        <!-- <NuxtLink to="/"></NuxtLink> -->
    </div>
</template>

<script>
export default {
    props: ['error'],
    head() {
        return {
            title: '36氪企服点评-SERVER-ERROR',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        '36氪基于多年在toB领域的深耕，推出企服点评平台，帮助中国企业级用户，快速选择最合适自己的产品与服务。'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content:
                        '企业服务,企业服务点评,企服点评,36氪企服点评,公司点评,云计算,开发者服务,大数据,信息安全,市场营销,创业服务,协同办公,财税法务,人才服务,客户管理,企业通用服务'
                }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
.status-404 {
    display: flex;
    min-height: calc(100vh - 229px);
    padding: 160px 0 200px 0;
    width: 100%;
    background: linear-gradient(180deg, #f1efff 0%, #ffffff 100%) #ffffff
        no-repeat top / 100% 300px;
    .img-404 {
        width: 232px;
        height: 199px;
        position: relative;
        margin: 0 auto;
        background: url('~assets/images/404.png') no-repeat center / 100% 100%;
    }
}
.status-500 {
    text-align: center;
    font-size: 20px;
    color: #666;
    padding: 100px 0;
}
</style>
