# 默认

按钮有三种视觉层次：主按钮、次按钮、普通按钮。不同的类型可以用来区别按钮的重要程度。

```html
<v-button @click="handleClick">Normal</v-button>
<v-button @click="handleClick" level="primary">Prirmary</v-button>
<v-button @click="handleClick" level="secondary">Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="text">Normal</v-button>
<v-button @click="handleClick" shape="text" level="primary">Prirmary</v-button>
<v-button @click="handleClick" shape="text" level="secondary">Secondary</v-button>
<br />
<br />
<v-button @click="handleClick" shape="warning">Normal</v-button>
<v-button @click="handleClick" shape="warning" level="primary">Prirmary</v-button>
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
