import Vue from 'vue';

import BlogList from '@/components/blog/BlogList.vue';

import Message from '@/components/ui/Message.vue';
import Intro from '@/components/ui/Intro.vue';

import AppInput from '@/components/ui/controls/AppInput.vue';
import AppTextarea from '@/components/ui/controls/AppTextarea.vue';
import AppButton from '@/components/ui/controls/AppButton.vue';



Vue.component('BlogList', BlogList);

Vue.component('Message', Message);
Vue.component('Intro', Intro);

Vue.component('AppInput', AppInput);
Vue.component('AppTextarea', AppTextarea);
Vue.component('AppButton', AppButton);