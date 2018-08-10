# 尺寸

所有尺寸

```html
<v-icon type="atm" size="xxs"></v-icon>
<v-icon type="atm" size="xs"></v-icon>
<v-icon type="atm" size="s"></v-icon>
<v-icon type="atm" size="m"></v-icon>
<v-icon type="atm" size="l"></v-icon>
<v-icon type="atm" size="xl"></v-icon>
<v-icon type="atm" size="xxl"></v-icon>
```

```js
import '../src/index.scss';

import Vue from 'vue';
import vIcon from '../src/index';

new Vue({
  el: '#example-dom', // 渲染节点固定为此
  components: {
    'v-icon': vIcon
  }
});
```
