'use strict'

import vButton from './view/button.vue';
import vButtonGroup from './view/button-group.vue';

vButton.install = function (Vue) {
    Vue.component(vButton.name, vButton);
    Vue.component(vButtonGroup.name, vButtonGroup);
};

vButton.vButtonGroup = vButtonGroup;

export default vButton;
