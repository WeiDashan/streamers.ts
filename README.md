# streamer

## 背景 Background

基于 canvas + vue + ts  绘制动态彩带背景

灵感来源： github搜索 ribbon.js


## 使用 Use

1. 获取 streamers.ts 文件，将其放入项目中

2. 引用该文件
```
<template>
  <div class="body">
  </div>
</template>

<script setup lang="ts">
import streamers from "@/assets/ts/streamers"
streamers({
  body: '.body',
  position : "fixed",
  top : "0",
  left : "0",
  width : "100%",
  height : "100%",
  zIndex : "-1",
  pointerEvents : "none",
  opacity : "0.6",
  xSpeed : 150,
  streamersNum: 3,
  streamerColorSaturation: "80%",
  streamerColorLightness: "60%",
  streamerColorAlphaSpeed: 0.01,
  streamerColorAlphaMidValue: 0.1,
  streamerColorHueSpeed: 1,
  stInitWidth: 90,
  ctxGlobalAlpha: 0.6,
})
</script>

<style scoped>
  .body{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
</style>
```

### Compiles and hot-reloads for development
```
npm run serve
```
