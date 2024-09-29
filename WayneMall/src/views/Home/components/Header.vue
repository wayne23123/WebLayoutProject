<template>
  <div class="header">
    <div class="container clearfix">
      <!-- 左側LOGO區 -->
      <div class="logo leftfix">
        <div class="image-layout">
          <img
            class="image"
            src="../../../assets/svgs/wss.svg"
            alt="WayneMall"
          />
        </div>
      </div>

      <!-- 右側搜尋區 -->
      <div class="search rightfix">
        <form action="#">
          <input type="text" />
          <button>
            <!-- 搜尋 -->
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #region 強制摺疊 */

.header {
  height: 120px;
  /* background-color: skyblue; */
}

.container {
  width: 1190px;
  margin: 0 auto;
}

.image-layout {
  width: 190px;
  height: 120px;
  /* background-color: #fff; */
}

.image {
  width: 100%;
  height: 100%;
}

.header .search form {
  margin-top: 42px;
  /* 清除 input 和 button 中間的空隙 */
  /* font-size: 0; */
}

.header .search input {
  width: 508px;
  height: 34px;
  border: 1px solid #dd302d;
}

.header .search button {
  width: 80px;
  height: 36px;
  background-color: #dd302d;
  /* 修正基線造成搜尋按鈕高一點的問題 */
  vertical-align: top;
  background-image: url('../../../assets/svgs/search.svg');
  background-repeat: no-repeat;
  background-position: 28px 6px;
}

/* #endregion */
</style>
