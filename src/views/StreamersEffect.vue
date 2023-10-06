<template>
  <div class="body">
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
