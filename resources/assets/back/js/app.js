/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


Vue.component('UserStatusInQueue', require('./vue/nasim-moshaver/UserStatusInQueue').default);
Vue.component('UserPauseStatus', require('./vue/nasim-moshaver/UserPauseStatus').default);
Vue.component('CallsReport', require('./vue/nasim-moshaver/CallsReport').default);
// Vue.component('ThemeOptions', require('./vue/theme-options/options.vue').default);
// Vue.component('InstagramInsightPanel', require('./vue/insights/instagram/InstagramInsight.vue').default);
// Vue.component('SocialInfo', require('./vue/insights/SocialInfo.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 //  */
//
const app = new Vue({
    el: '.vue-app',
});


// import VueSweetalert2 from 'vue-sweetalert2';
// Vue.use(VueSweetalert2);

window.select2 = require("select2");
// $.fn.select2.defaults.set('amdBase', 'select2/');
//
$.fn.select2.defaults.set("theme", "bootstrap");
require('./contents/select2')




$(document).ready(function () {
    $('.confirmation').click(function (e) {
        if (!confirm("آیا مطمین هستید؟"))
            e.preventDefault();
    })
});

$(document).ready(function () {

    $("form.confirmBeforeSubmit").submit(function (e) {
        if (!confirm("آیا مطمئن هستید؟"))
            e.preventDefault();
    })

    $('.users-search').select2(
        {
            placeholder: "",
            "language": {
                "noResults": function () {
                    return "پیدا نشد";
                },
                "searching": function () {
                    return "در حال جستجو";
                },
            },
            ajax: {
                url: function (params) {
                    var term = typeof params.term === 'undefined' ? "" : params.term;
                    return '/admin/search/users?term=' + term;
                },
                processResults: function (data) {
                    var users = data.users.map(function (a) {
                        var text = `${a.name} ${a.city ? "/ " + a.city : ""} ${a.comment ? "/ " + a.comment : ""}`;
                        return {text, id: a.id};
                    });

                    // Tranforms the top-level key of the response object from 'items' to 'results'

                    return {
                        results: users
                    };
                }
                // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
            }
        }
    );
    $('.symbols-search').select2(
        {
            placeholder: "",
            "language": {
                "noResults": function () {
                    return "پیدا نشد";
                },
                "searching": function () {
                    return "در حال جستجو";
                },
            },
            ajax: {
                url: function (params) {
                    var term = typeof params.term === 'undefined' ? "" : params.term;
                    console.log(term);
                    return '/admin/search/symbols?term=' + term;
                },
                processResults: function (data) {
                    var symbols = data.symbols.map(function (a) {
                        var text = `${a.title} ${a.full_name ? "/ " + a.full_name : ""} `;
                        return {text, id: a.id};
                    });

                    // Tranforms the top-level key of the response object from 'items' to 'results'

                    return {
                        results: symbols
                    };
                }
                // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
            }
        }
    );
});
window.Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);



require('bootstrap');
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
