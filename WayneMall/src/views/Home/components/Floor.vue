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
        <div class="item item1">
          <ul class="item1-list clearfix">
            <li>
              <router-link to="/">節能補貼</router-link>
            </li>
            <li>
              <router-link to="/">4k 電視</router-link>
            </li>
            <li>
              <router-link to="/">空氣清淨機</router-link>
            </li>
            <li>
              <router-link to="/">IH 電熱爐</router-link>
            </li>
            <li>
              <router-link to="/">滾筒洗衣機</router-link>
            </li>
            <li>
              <router-link to="/">電熱水器</router-link>
            </li>
          </ul>
          <div class="item1-image-layout">
            <img
              src="../../../assets/images/television01.jpg"
              alt="television02"
            />
          </div>
        </div>
        <div class="item item2">
          <img src="../../../assets/images/camera01.jpg" alt="camera01" />
        </div>
        <div class="item item3">
          <div class="item3-image-layout">
            <img
              src="../../../assets/images/microwave03.jpg"
              alt="microwave03"
            />
          </div>
          <div class="item3-image-layout">
            <img
              src="../../../assets/images/steamed-rice-box01.jpg"
              alt="steamed-rice-box01"
            />
          </div>
        </div>
        <div class="item item4">
          <img
            src="../../../assets/images/refrigerator01.jpg"
            alt="refrigerator01"
          />
        </div>
        <div class="item item5">
          <div class="item5-image-layout">
            <img src="../../../assets/images/water01.jpg" alt="water01" />
          </div>
          <div class="item5-image-layout">
            <img src="../../../assets/images/liquor01.jpg" alt="liquor01" />
          </div>
        </div>
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
  /* width: 230px; */
  width: 190px;
  /* height: 432px; */
  height: 392px;
  background-color: #f4f4f4;
  padding: 20px;
}

.item1-list {
  margin-bottom: 29px;
}

.item1-list li {
  /* background-color: #f73a3a; */
  width: 90px;
  height: 22px;
  padding-bottom: 3.5px;
  border-bottom: 1px solid #d9d9d9;
  font-size: 16px;
  text-align: center;
  /* float: left; */
}

.item1-list li:nth-child(2n-1) {
  float: left;
}

.item1-list li:nth-child(2n) {
  float: right;
}

.item1-list li:nth-child(3),
.item1-list li:nth-child(4) {
  margin: 14.4px 0;
}

.item1-image-layout {
  width: 194px;
  height: 242px;
}

.item1-image-layout img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floor-info .item2 {
  width: 340px;
  height: 432px;
  background-color: #fff;
}

.floor-info .item2 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floor-info .item3 {
  width: 206px;
  height: 432px;
  background-color: #fff;
  border-right: 1px solid #121212;
}

.item3-image-layout {
  width: 206px;
  height: 215px;
  border-bottom: 1px solid #121212;
}

.item3-image-layout img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floor-info .item4 {
  width: 206px;
  height: 432px;
  background-color: #fff;
  border-right: 1px solid #121212;
  border-bottom: 1px solid #121212;
}

.floor-info .item4 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.floor-info .item5 {
  width: 206px;
  height: 432px;
  background-color: #fff;
}

.item5-image-layout {
  width: 206px;
  height: 215px;
  border-bottom: 1px solid #121212;
}

.item5-image-layout img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* #endregion */
</style>
