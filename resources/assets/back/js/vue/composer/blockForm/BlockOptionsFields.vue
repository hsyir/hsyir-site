<template>
    <div>
        <h3 class="h5">تنظیمات قالب</h3>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group ">
                    <label class="col-form-label text-md-right" for="bg_type">نوع زمینه</label>
                    <select :value="blockOptionsData.bg_type" class="form-control" id="bg_type"
                            v-on:input="updateFormData($event.target.value,'bg_type')"
                    >
                        <option value="BG_DEFAULT">زمینه پیش فرض</option>
                        <option value="BG_SOLID">رنگ زمینه</option>
                        <option value="BG_IMAGE">عکس</option>
                        <option value="BG_TRANSPARENT">شفاف / بدون رنگ</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12" v-if="blockOptionsData.bg_type=='BG_SOLID'">
                <div class="form-group ">
                    <input-builder :field="{ title:'رنگ زمینه' ,name:'bg_class'
                    ,'type':'bgClass'}" class='custom-field' v-model="blockOptionsData.bg_class"
                                   @input="updateFormData"></input-builder>
                </div>
            </div>

            <div class="col-md-12" v-if="blockOptionsData.bg_type=='BG_IMAGE'">
                <div class="form-group ">
                    <input-builder :field="{ title:'عکس زمینه' ,name:'bg_image_url'
                    ,'type':'image'}" class='custom-field' :value="blockOptionsData.bg_image_url"
                                   @input="updateFormData"></input-builder>
                </div>
            </div>
            <div class="col-md-12" v-if="blockOptionsData.bg_type=='BG_IMAGE'">
                <div class="form-group ">
                    <label class="col-form-label text-md-right" for="bg_image_type">حالت عکس زمینه</label>
                    <select :value="blockOptionsData.bg_image_type" class="form-control" id="bg_image_type"
                            v-on:input="updateFormData($event.target.value,'bg_image_type')">
                        <option value="BG_IMAGE_TYPE_FIX">ثابت</option>
                        <option value="BG_IMAGE_TYPE_PARALLAX">پارالکس</option>
                        <!--<option value="BG_TYPE_MOTION">متحرک</option>-->
                    </select>
                </div>
            </div>
            <div class="col-md-12"
                 v-if="blockOptionsData.bg_type=='BG_IMAGE' && blockOptionsData.bg_image_type=='BG_IMAGE_TYPE_PARALLAX' ">
                <div class="form-group ">
                    <label class="col-form-label text-md-right" for="bg_image_type">سرعت پارالکس</label>
                    <select :value="blockOptionsData.bg_parallax_speed" class="form-control" id="bg_parallax_speed"
                            v-on:input="updateFormData($event.target.value,'bg_parallax_speed')">
                        <option value="-0.2">معکوس خیلی آهسته</option>
                        <option value="-0.8">معکوس آهسته</option>
                        <option value="-1.8">معکوس سریع</option>
                        <option value="-2.5">معکوس خیلی سریع</option>
                        <option value="0">ثابت</option>
                        <option value="0.2">خیلی آهسته</option>
                        <option value="0.8">آهسته</option>
                        <option value="1.3">معمولی</option>
                        <option value="1.8">سریع</option>
                        <option value="2.5">خیلی سریع</option>
                        <option value="5">بسیار سریع</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-md-12" >
                <div class="form-group ">
                    <input-builder :field="{ title:'رنگ متن' ,name:'text_class'
                    ,'type':'textClass'}" class='custom-field' v-model="blockOptionsData.text_class"
                                   @input="updateFormData"></input-builder>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    import InputBuilder from "../../formBuilder/InputBuilder.vue"

    export default {
        components: {InputBuilder},
        props: ['blockOptions'],
        data() {
            return {
                blockOptionsData: _.cloneDeep(this.blockOptions),
            }
        },
        methods: {
            updateFormData: function (value, fieldName) {
                this.$set(this.blockOptionsData, fieldName, value);
                this.blockOptionsData = this.cleanOptionsData(this.blockOptionsData)
                this.$emit('updated', this.blockOptionsData);
            },
            cleanOptionsData: function (pureData) {

                let data = {};
                data.text_class = pureData.text_class;
                data.bg_type = pureData.bg_type;

                if (pureData.bg_type == "BG_DEFAULT")
                    return data;

                if (pureData.bg_type == "BG_TRANSPARENT")
                    return data;

                if (pureData.bg_type == "BG_IMAGE") {
                    data.bg_image_url = pureData.bg_image_url;
                    data.bg_image_type = pureData.bg_image_type;

                    if (pureData.bg_image_type == "BG_IMAGE_TYPE_PARALLAX") {
                        data.bg_parallax_speed = pureData.bg_parallax_speed;
                    }
                    return data;
                }

                if (pureData.bg_type == "BG_SOLID") {
                    data.bg_class = pureData.bg_class;
                    return data;
                }
            }

        },

        mounted() {
        }
    }
</script>