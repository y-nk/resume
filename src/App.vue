<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
}

html, body {
  position: absolute;
  width: 100%;
  min-height: 100%;
}

@media (prefers-color-scheme: dark) {
  html, body {
    background: #333;
  }
}

@media print {
  @page {
    size: A4 portrait;
    margin: 0;
  }

  body {
    padding: 0 .5cm;
  }
}
</style>
