# 幽灵按钮

幽灵按钮

```html
<div class="ghost-light-background">
    <v-button @click="handleClick" shape="ghost" level="light">Light</v-button>
</div>
<div class="ghost-dark-background">
    <v-button @click="handleClick" shape="ghost" level="dark">Dark</v-button>
</div>
```

```css
.ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #EBECF0;
    margin-bottom: 20px;
    padding:10px;
    box-sizing: border-box;
}
.ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding:10px;
    box-sizing: border-box;
}
```

```js
import '../src/index.scss';

import Vue from 'vue';
import vButton from '../src/index';

new Vue({
  el: '#example-dom', // 渲染节点固定为此
  components: {
    'v-button': vButton
  },
  methods: {
    handleClick(event) {
      console.log(event);
    }
  }
});
```
