<template>
    <div>
        <div class="form-group " v-if="field.type=='text'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <input type="text" :value="value" class="form-control " :id="field.name"
                   v-on:input="updateValue($event.target.value,field.name)">
            <small>{{ field.description }}</small>
        </div>

        <div class="form-check mb-2" v-if="field.type=='checkbox'">
            <label class="form-check-label" :for="field.name">
                <input type="checkbox" :checked="value" class="form-check-input" value="1" :id="field.name"
                       v-on:input="updateValue($event.target.checked,field.name)">
                {{ field.title}}</label>

            <div>
                <small>{{ field.description }}</small>
            </div>
        </div>

        <div class="form-group " v-if="field.type=='multiline'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <textarea :value="value" class="form-control " :id="field.name"
                      v-on:input="updateValue($event.target.value,field.name)"></textarea>

            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='richtext'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <textarea :value="value" class="form-control " :id="field.name"
                      v-on:input="updateValue($event.target.value,field.name)"></textarea>

            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='contentType'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in contentTypes" :value="option.name">{{ option.title }}</option>
            </select>

            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='pages'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in pages" :value="option.id">{{ option.title }}</option>
            </select>

            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='menus'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in menus" :value="option.id">{{ option.title }}</option>
            </select>

            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='bgClass'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in colorClasses" :value="'bg-'+option.value">{{ option.title }}</option>
            </select>
            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='textClass'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in colorClasses" :value="'text-'+option.value">{{ option.title }}</option>
            </select>
            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='posts_categories'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in categories.posts" :value="option.id">{{ option.title }}</option>
            </select>
            <small>{{ field.description }}</small>
        </div>
        <div class="form-group " v-if="field.type=='products_categories'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in categories.products" :value="option.id">{{ option.title }}</option>
            </select>
            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='select'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <select :value="value" class="form-control" :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
                <option v-for="option in field.options" :value="option.value">{{ option.title }}</option>
            </select>
            <small>{{ field.description }}</small>
        </div>

        <div class="form-group " v-if="field.type=='image'">
            <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
            <div class="input-group">

                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                            :data-target="field.name" @click.prevent="selectImage">انتخاب عکس
                    </button>
                </div>
                <input type="text" :id="field.name" class="form-control" name="image" dir="ltr"
                       aria-label="Image" aria-describedby="button-image" :value="value"
                       v-on:input="updateValue($event.target.value,field.name)">
            </div>

            <!-- <label class="col-form-label text-md-right" :for="field.name">{{ field.title}}</label>
             <input type="text" :value="value" class="form-control " :id="field.name"
                    v-on:input="updateValue($event.target.value,field.name)">
 -->
            <small>{{ field.description }}</small>
        </div>

    </div>
</template>
<script>
    export default {
        props: {
            menus: {},
            pages: {},
            field: {
                default: {
                    type: 'text'
                }
            },

            value: {default: ""},
            contentTypes: {
                type: [Object, Array],
                default: function () {
                    return [
                        {name: 'blog', title: "بلاdگ"},
                        {name: 'services', title: "خدمات"},
                    ]
                }
            },
            categories: {
                type: [Object, Array],
                default: function () {
                    return {}
                }
            }
        },
        data() {
            return {
                colorClasses: [
                    {value: 'primary', title: ' اصلی'},
                    {value: 'white', title: ' سفید '},
                    {value: 'dark', title: ' تیره '},
                    {value: 'secondary', title: ' دوم '},
                    {value: 'danger', title: ' اخطار '},
                    {value: 'warning', title: ' هشدار '},
                    {value: 'info', title: ' اطلاعات '},
                ],
                imageSelectorId: null,
            }
        },
        methods: {
            updateValue: function (value, fieldName) {
                this.$emit('input', value, fieldName);
            },
            selectImage: function (event) {
                window.imageSelectorId = $(event.target).data('target');
                window.open('/file-manager/fm-button', 'fm', 'width=1400,height=800');
            },

        },


        mounted() {
            var vm = this;
            window.fmSetLink = function ($url) {

                $("#" + window.imageSelectorId).val($url);
                vm.updateValue($url, window.imageSelectorId)
//                document.getElementById('image_label').value = $url;
            }
        }
    }
</script>