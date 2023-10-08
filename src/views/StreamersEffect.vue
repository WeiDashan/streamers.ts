<template>
  <div class="body">
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue"
import streamers from "@/assets/ts/streamers"
let runStreamersOrNot:Ref<true|false> = ref(true)
streamers({
  idName: 'stCanvas',
  body: '.body',
  position : "absolute",
  top : "0",
  left : "0",
  width : "100%",
  height : "100%",
  zIndex : "0",
  pointerEvents : "none",
  opacity : "0.6",
  streamersNum: 3,
  streamerColorSaturation: "80%",
  streamerColorLightness: "60%",
  streamerColorAlphaSpeed: 0.01,
  streamerColorAlphaMidValue: 0.1,
  streamerColorHueSpeed: 1,
  stInitWidth: 25,
  ctxGlobalAlpha: 0.6,
  xSpeed: 150,
  ySpeed: 100,
},runStreamersOrNot)
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
