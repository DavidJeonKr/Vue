<template>
  <h1>Hello, {{title}}!</h1>
  <div>{{htmlString}}</div> <!-- 적용 안됨 -->
  <div v-html="htmlString"></div> <!-- 적용됨 -->
</template>
<!--디렉티브 = 번역하면 지시문 -->
<script>
export default {
  data() {
    return {
      title: 'World',
      htmlString: '<p style="color: red";>This is a red string</p>'
    };
  }
}
</script>