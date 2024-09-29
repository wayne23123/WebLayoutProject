<template>
  <div class="floor">
    <div class="container">
      <!-- 上半部 -->
      <div class="floor-nav">
        <span class="floor-name leftfix">家用電器</span>
        <ul class="floor-nav-list rightfix clearfix">
          <li>
            <router-link to="/">熱門</router-link>
          </li>
          <li>
            <router-link to="/">大型家電</router-link>
          </li>
          <li>
            <router-link to="/">生活電器</router-link>
          </li>
          <li>
            <router-link to="/">廚房電器</router-link>
          </li>
          <li>
            <router-link to="/">季節電器</router-link>
          </li>
          <li>
            <router-link to="/">空氣/淨水</router-link>
          </li>
          <li>
            <router-link to="/">高級家電</router-link>
          </li>
        </ul>
      </div>

      <!-- 下半部 -->
      <div class="floor-info clearfix">
        <div class="item item1">1</div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
      </div>
    </div>
  </div>
  <div style="height: 200px"></div>
</template>

<style scoped>
/* #region 強制摺疊 */

.floor {
  margin-top: 48px;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.floor-name {
  font-size: 20px;
}

.floor-nav {
  height: 30px;
  padding-bottom: 4px;
  border-bottom: 2px solid #dd302d;
  line-height: 30px;
}

.floor-nav-list li {
  float: left;
  font-size: 14px;
}

.floor-nav-list li a {
  padding: 0 10px;
  border-right: 1px solid #666;
}

.floor-nav-list li:last-child a {
  border-right: none;
}

.item {
  float: left;
}

.floor-info .item1 {
  width: 230px;
  height: 432px;
  background-color: #40f5fc;
}

.floor-info .item2 {
  width: 340px;
  height: 432px;
  background-color: #40fc9e;
}
.floor-info .item3 {
  width: 206px;
  height: 432px;
  background-color: #c4fc40;
  border-right: 1px solid #121212;
}
.floor-info .item4 {
  width: 206px;
  height: 432px;
  background-color: #fca440;
  border-right: 1px solid #121212;
}
.floor-info .item5 {
  width: 206px;
  height: 432px;
  background-color: #a740fc;
}

/* #endregion */
</style>
