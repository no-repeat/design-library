# 按钮组

按钮组

```html
<v-button-group>
    <v-button @click="handleClick('one')">OK</v-button>
    <v-button @click="handleClick('two')">Cancel</v-button>
</v-button-group>
<v-button-group>
    <v-button @click="handleClick('left')" level="primary">left</v-button>
    <v-button @click="handleClick('center')" level="primary">center</v-button>
    <v-button @click="handleClick('right')" level="primary">right</v-button>
</v-button-group>
```

```js
import '../src/index.scss';

import Vue from 'vue';
import vButton from '../src/index';

new Vue({
  el: '#example-dom', // 渲染节点固定为此
  components: {
    'v-button': vButton,
    'v-button-group': vButton.vButtonGroup
  },
  methods: {
    handleClick(msg) {
      console.log(msg);
    }
  }
});
```
