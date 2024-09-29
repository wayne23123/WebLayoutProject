<template>
  <div class="secondkill">
    <div class="container clearfix">
      <div class="image-layout-secondkill">
        <img src="../../../assets/svgs/secondkill.svg" alt="" />
      </div>
      <div class="image-layout">
        <img src="../../../assets/images/computer01.jpg" alt="" />
      </div>
      <div class="image-layout">
        <img src="../../../assets/images/shop01.jpg" alt="" />
      </div>
      <div class="image-layout">
        <img src="../../../assets/images/shop02.jpg" alt="" />
      </div>
      <div class="image-layout">
        <img src="../../../assets/images/shop03.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */

.secondkill {
  margin-top: 10px;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.image-layout-secondkill {
  float: left;
  margin-right: 11px;
  cursor: pointer;
}

.image-layout-secondkill {
  width: 190px;
  height: 159px;
}
.image-layout-secondkill img {
  width: 100%;
  height: 100%;
}

.image-layout {
  float: left;
  margin-right: 11px;
  cursor: pointer;
}

.image-layout {
  width: 239px;
  height: 159px;
}

.image-layout img {
  width: 100%;
  height: 100%;
}

.image-layout:last-child {
  margin-right: 0;
}

/* #endregion */
</style>
