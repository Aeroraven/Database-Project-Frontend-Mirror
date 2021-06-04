import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#1867C0',
            secondary: '#2196f3',
            accent: '#00bcd4',
            error: '#f44336',
            warning: '#ff5722',
            info: '#03a9f4',
            success: '#4caf50'
            }
          },
        },
      }
);
