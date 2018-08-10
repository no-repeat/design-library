# 禁用

禁用按钮

```html
<v-button @click="handleClick" disabled>Normal</v-button>
<v-button @click="handleClick" level="primary" disabled>Prirmary</v-button>
<v-button @click="handleClick" level="secondary" disabled>Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="text" disabled>Normal</v-button>
<v-button @click="handleClick" shape="text" level="primary" disabled>Prirmary</v-button>
<v-button @click="handleClick" shape="text" level="secondary" disabled>Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="warning" disabled>Normal</v-button>
<v-button @click="handleClick" shape="warning" level="primary" disabled>Prirmary</v-button>
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
