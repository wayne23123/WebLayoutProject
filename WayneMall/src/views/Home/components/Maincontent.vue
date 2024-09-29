<template>
  <div class="main-content">
    <div class="container clearfix">
      <ul class="slide-nav leftfix">
        <li>
          <router-link to="/">手機/數位產品</router-link>
        </li>
        <li>
          <router-link to="/">電腦/辦公用品</router-link>
        </li>
        <li>
          <router-link to="/">家具/居家/家裝/廚具</router-link>
        </li>
        <li>
          <router-link to="/">男裝/女裝/童裝/內衣</router-link>
        </li>
        <li>
          <router-link to="/">美妝/保潔用品/寵物</router-link>
        </li>
        <li>
          <router-link to="/">女鞋/箱包/鐘錶/珠寶</router-link>
        </li>
        <li>
          <router-link to="/">男鞋/運動用品/戶外露營</router-link>
        </li>
        <li>
          <router-link to="/">房產/汽車/汽車用品</router-link>
        </li>
        <li>
          <router-link to="/">母嬰/玩具樂器</router-link>
        </li>
        <li>
          <router-link to="/">食品/酒類/生鮮</router-link>
        </li>
        <li>
          <router-link to="/">藝術/娛樂/禮物</router-link>
        </li>
        <li>
          <router-link to="/">醫療保健</router-link>
        </li>
        <li>
          <router-link to="/">圖書/教育/電子書</router-link>
        </li>
        <li>
          <router-link to="/">機票/住宿/旅遊/生活</router-link>
        </li>
        <li>
          <router-link to="/">保險/金融</router-link>
        </li>
        <li>
          <router-link to="/">安裝/維修/清洗/二手</router-link>
        </li>
      </ul>
      <div class="banner leftfix"></div>
      <div class="slide-other leftfix"></div>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */

.main-content {
  margin-top: 10px;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.main-content .slide-nav {
  width: 190px;
  height: 458px;
  background-color: #f4f4f4;
}

.main-content .slide-nav li {
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  /* margin-left: 16px; */
  padding-left: 16px;
}

.main-content .slide-nav li:hover {
  background-color: #dd302d;
}

.main-content .slide-nav li:hover a {
  color: #fff;
}

.main-content .banner {
  width: 690px;
  height: 458px;
  background-color: green;
  margin: 0 10px;
}

.main-content .slide-other {
  width: 290px;
  height: 458px;
  background-color: orange;
}

/* #endregion */
</style>
