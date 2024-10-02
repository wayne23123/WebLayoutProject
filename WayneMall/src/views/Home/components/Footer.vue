<template>
  <div class="footer">
    <div class="container">
      <!-- 頂部連結 -->
      <div class="top-links clearfix">
        <ul class="links-list">
          <li>
            <router-link to="/">購物指南</router-link>
          </li>
          <li>
            <router-link to="/">購物流程</router-link>
          </li>
          <li>
            <router-link to="/">會員介紹</router-link>
          </li>
          <li>
            <router-link to="/">生活旅行</router-link>
          </li>
          <li>
            <router-link to="/">常見問題</router-link>
          </li>
          <li>
            <router-link to="/">聯繫客服</router-link>
          </li>
        </ul>

        <ul class="links-list">
          <li>
            <router-link to="/">配送方式</router-link>
          </li>
          <li>
            <router-link to="/">隔日到貨</router-link>
          </li>
          <li>
            <router-link to="/">訂單服務查詢</router-link>
          </li>
          <li>
            <router-link to="/">配送收費說明</router-link>
          </li>
        </ul>

        <ul class="links-list">
          <li>
            <router-link to="/">付款方式</router-link>
          </li>
          <li>
            <router-link to="/">貨到付款</router-link>
          </li>
          <li>
            <router-link to="/">線上付款</router-link>
          </li>
          <li>
            <router-link to="/">分期付款</router-link>
          </li>
        </ul>

        <ul class="links-list">
          <li>
            <router-link to="/">售後服務</router-link>
          </li>
          <li>
            <router-link to="/">售後政策</router-link>
          </li>
          <li>
            <router-link to="/">退款說明</router-link>
          </li>
          <li>
            <router-link to="/">維修/退換貨</router-link>
          </li>
          <li>
            <router-link to="/">取消訂單</router-link>
          </li>
        </ul>

        <ul class="links-list">
          <li>
            <router-link to="/">特色服務</router-link>
          </li>
          <li>
            <router-link to="/">延長保固</router-link>
          </li>
          <li>
            <router-link to="/">WayneMall E卡</router-link>
          </li>
        </ul>

        <ul class="links-list">
          <li>
            <router-link to="/">常見問題</router-link>
          </li>
          <li>
            <router-link to="/">服務</router-link>
          </li>
          <li>
            <router-link to="/">查看詳情</router-link>
          </li>
        </ul>
      </div>
      <!-- 分隔線 -->
      <div class="line"></div>
      <!-- 底部連結 -->
      <div class="bottom-links clearfix">
        <ul class="bottom-links-list">
          <li>
            <router-link to="/">關於我們</router-link>
          </li>
          <li>
            <router-link to="/">聯繫我們</router-link>
          </li>
          <li>
            <router-link to="/">聯絡客服</router-link>
          </li>
          <li>
            <router-link to="/">企業合作</router-link>
          </li>
          <li>
            <router-link to="/">商家幫助</router-link>
          </li>
          <li>
            <router-link to="/">銷售中心</router-link>
          </li>
          <li>
            <router-link to="/">友情連接</router-link>
          </li>
          <li>
            <router-link to="/">隱私政策</router-link>
          </li>
        </ul>
        <div class="copy-right">© Wayne Lu 2024</div>
        <div class="copy-right">本網頁僅供學習使用 無任何商業用途</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */

.footer {
  margin-top: 48px;
  height: 440px;
  background-color: #483e3e;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.links-list {
  float: left;
  width: 190px;
  height: 176px;
  /* 繼承的，沒辦法覆蓋他本身有的 */
  /* color: #fff; */
  margin-top: 48px;
  margin-right: 10px;
}

.links-list:last-child {
  margin-right: 0;
}

.links-list a {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
}

.line {
  margin-top: 22px;
  height: 1px;
  background-color: #584d4d;
}

/* .bottom-links-list {
  裡面的子元素必須要有寬度，否則無法水平置中
  margin: 0 auto;
} */

/* .bottom-links-list {
  能處理 1.文本 2.行內塊
  text-align: center;
} */

.bottom-links {
  text-align: center;
  margin-top: 47px;
}

.bottom-links-list {
  display: inline-block;
}

.bottom-links-list li {
  float: left;
}

.bottom-links-list li a {
  padding: 0 26px;
  border-right: 1px solid #fff;
  color: #fff;
}

.bottom-links-list li:last-child a {
  padding-right: 0;
  border-right: 0;
}

.copy-right {
  margin-top: 10px;
  color: #fff;
}

/* #endregion */
</style>
