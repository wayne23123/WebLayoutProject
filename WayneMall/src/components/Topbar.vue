<template>
  <!-- 頂部導航條 -->
  <div class="topbar">
    <!-- 板心 -->
    <div class="container clearfix">
      <!-- 左側歡迎區 -->
      <div class="welcome leftfix">
        <span class="hello">歡迎您</span>
        <span>請</span>
        <router-link to="/" class="login">登入</router-link>
        <router-link to="/" class="register">免費註冊</router-link>
      </div>

      <!-- 右側導航區 -->
      <div class="topbar-nav rightfix">
        <ul class="list clearfix">
          <li>
            <router-link to="/">首頁</router-link>
          </li>
          <li>
            <router-link to="/">我的訂單</router-link>
          </li>
          <li>
            <router-link to="/">我的購物車</router-link>
          </li>
          <li>
            <router-link to="/">會員中心</router-link>
          </li>
          <li>
            <router-link to="/">企業專區</router-link>
          </li>
          <li>
            <router-link to="/">關注我們</router-link>
          </li>
          <li>
            <router-link to="/">合作商家</router-link>
          </li>
          <li>
            <router-link to="/">商家後臺</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */
.topbar {
  height: 30px;
  background-color: #ececec;
}

.container {
  width: 1190px;
  /* height: 30px; */
  /* background-color: #f14747; */
  margin: 0 auto;
}

.welcome {
  /* 垂直居中 */
  height: 30px;
  line-height: 30px;
  font-size: 0;
  color: #666;
}

.welcome span,
.welcome a {
  font-size: 12px;
}

.welcome .hello {
  margin-right: 28px;
}

.welcome .login {
  padding-right: 10px;
  border-right: 1px solid #666;
}

.welcome .register {
  padding-left: 10px;
}

.topbar-nav .list {
  height: 30px;
  line-height: 30px;
}

.topbar-nav .list li {
  float: left;
}

.topbar-nav .list li a {
  padding: 0 15px;
  border-right: 1px solid #666;
}

.topbar-nav .list li:first-child a {
  padding-left: 0;
}

.topbar-nav .list li:last-child a {
  padding-right: 0;
  border-right: none;
}
/* #endregion */
</style>
