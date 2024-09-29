<template>
  <div class="main-nav">
    <div class="container clearfix">
      <div class="all-types leftfix">全部商品分類</div>
      <ul class="main-nav-list leftfix clearfix">
        <li>
          <router-link to="/">超市</router-link>
        </li>

        <li>
          <router-link to="/">優惠券</router-link>
        </li>
        <li>
          <router-link to="/">買甚麼</router-link>
        </li>
        <li>
          <router-link to="/">家電</router-link>
        </li>
        <li>
          <router-link to="/">生鮮</router-link>
        </li>
        <li>
          <router-link to="/">plus會員</router-link>
        </li>
        <li>
          <router-link to="/">進口好物</router-link>
        </li>
        <li>
          <router-link to="/">每日新發現</router-link>
        </li>
        <li>
          <router-link to="/">拍賣</router-link>
        </li>
        <li>
          <router-link to="/">五金行</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */
.main-nav {
  height: 48px;
  border-bottom: 1px solid #dd302d;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.main-nav .all-types {
  width: 190px;
  height: 48px;
  background-color: #dd302d;
  color: #fff;
  text-align: center;
  line-height: 48px;
}

.main-nav-list {
  height: 48px;
  line-height: 48px;
}

.main-nav-list li {
  float: left;
  margin: 0 10px;
  font-size: 16px;
}
/* #endregion */
</style>
