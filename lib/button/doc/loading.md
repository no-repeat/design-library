# 加载中

加载中

```html
<v-button @click="handleClick" loading>Normal</v-button>
<v-button @click="handleClick" level="primary" loading>Prirmary</v-button>
<v-button @click="handleClick" level="secondary" loading>Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="text" loading>Normal</v-button>
<v-button @click="handleClick" shape="text" level="primary" loading>Prirmary</v-button>
<v-button @click="handleClick" shape="text" level="secondary" loading>Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="warning" loading>Normal</v-button>
<v-button @click="handleClick" shape="warning" level="primary" loading>Prirmary</v-button>
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
