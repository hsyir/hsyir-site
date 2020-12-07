<template>
    <div>
        <div v-for="field in theme_options_fields" class="row">
            <div class="col-md-12 ">
                <input-builder :field="field" :value="options_data[field.name]" :menus="menus"
                              :pages="pages" @input="updateOptionsData"></input-builder>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 ">
                <input type="submit" class="btn btn-success btn-sm" @click.prevent="save" value="ثبت">
            </div>
        </div>
    </div>
</template>

<script>
    import InputBuilder from "./../formBuilder/InputBuilder.vue";

    export default {
        components: {
            InputBuilder,
        },
        props: {
            options_data_input: {},
            manifest: {},
            store_url: {},
            pages:{},
            menus:{},
        },
        data: function () {
            return {
                theme_options_fields: {},
                options_data: {},
                loading: false,
            }
        },
        mounted() {
            this.theme_options_fields = this.manifest.theme_options;
            for (let data in this.theme_options_fields) {
                this.options_data[this.theme_options_fields[data].name]
                    = this.options_data_input[this.theme_options_fields[data].name]
                    ? this.options_data_input[this.theme_options_fields[data].name]
                    : this.theme_options_fields[data].title;
            }
        },
        methods: {
            updateOptionsData: function (value, name) {
                this.options_data[name] = value;
            },
            save: function () {
                this.loading = true;
                var data = {
                    data: JSON.stringify(this.options_data),
                };
                axios.post(
                    this.store_url,
                    data,
                ).then((response) => {
                    this.loading = false;
                    alert('ذخیره شد');
                });
            }
        }
    }
</script>