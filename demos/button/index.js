'use strict';

import '@alife/vext/lib/demo-helper/lib/index.scss';
import '../src/index.scss';

import Vue from 'vue';
import { vDemo, vDemoGroup } from '@alife/vext/lib/demo-helper';
import vButton from '../src/index';

new Vue({
    el: '#theme-container', // 渲染节点固定为此
    template: `<v-demo name="Button">
        <v-demo name="Normal" :cols="['L', 'M', 'S']">
            <v-demo-group name="Normal">
            <v-button size="large" slot="L">Button</v-button>
            <v-button slot="M">Button</v-button>
            <v-button size="small" slot="S">Button</v-button>
            </v-demo-group>
            <v-demo-group name="Primary">
            <v-button size="large" level="primary" slot="L">Button</v-button>
            <v-button slot="M" level="primary">Button</v-button>
            <v-button size="small" slot="S" level="primary">Button</v-button>
            </v-demo-group>
        </v-demo>
    </v-demo>`,
    components: {
        'v-demo': vDemo,
        'v-demo-group': vDemoGroup,
        'v-button': vButton
    }
});




