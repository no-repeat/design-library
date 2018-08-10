# 尺寸

尺寸

```html
<v-button @click="handleClick" size="large">Normal</v-button>
<v-button @click="handleClick" size="medium">Normal</v-button>
<v-button @click="handleClick" size="small">Normal</v-button>
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
