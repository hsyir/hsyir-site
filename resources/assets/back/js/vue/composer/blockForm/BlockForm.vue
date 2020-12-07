<template>
    <div>
        <div class="card">

            <div class="card-body">
                <div class="row">
                    <div class="col-3 col-sm-2 col-lg-1">
                        <div class="template-icon"><i class="fad fa-2x" :class="'fa-'+blockTemplate.icon"></i> </div>
                    </div>
                    <div class="col-9 col-sm-10  col-lg-11">
                        <div class="h6">{{ blockTemplate.title }}</div>
                        <div class=""><small>{{ blockTemplate.description }}</small></div>
                    </div>
                </div>
                <hr>
                <form>
                    <div v-for="field in blockTemplate.fields" class="row">
                        <div class="col-md-12 mb-1">
                            <input-builder :field="field" class='custom-field' :contentTypes="contentTypes"
                                           :categories="categories" :value="blockData[field.name]"
                                           @input="updateFormData"></input-builder>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">

                            <hr>

                            <block-options-fields :blockOptions="blockOptionsData" @updated="blockOptionsUpdated"></block-options-fields>
                        </div>
                    </div>
                </form>

            </div>
            <div class="card-footer">

                <div class="row">
                    <div class="col-md-12">
                        <input type="submit" class="btn btn-success btn-sm" @click.prevent="saveBlock" value="ثبت">
                        <a href="#" class="btn btn-danger btn-sm" @click.prevent="cancel">انصراف</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import InputBuilder from "./../../formBuilder/InputBuilder.vue";
    import BlockOptionsFields from "./BlockOptionsFields.vue";

    export default {
        components: {
            InputBuilder, BlockOptionsFields
        },
        props: {
            blockTemplate: {default: {}},
            blockData: {default: []},
            blockOptionsData: {
                default: function () {
                    return {bg_type: 'BG_DEFAULT',}

                }
            },
            contentTypes: {
                type: [Object, Array],
                default: function () {
                    return [
                        {name: 'blog', title: "بلاگ"},
                        {name: 'services', title: "خدمات"},
                    ]
                }
            },
            categories: {
                type: [Object, Array],
                default: function () {
                    return {}
                }
            },
            order: {
                default: function () {
                    return null;
                }
            }
        },
        data() {
            return {
                step: 'selectBlockType',
                blockOptions: _.cloneDeep(this.blockOptionsData),
            }
        },
        methods: {
            updateFormData: function (value, fieldName) {
                this.blockData[fieldName] = value;
            },
            saveBlock: function () {
                var block = this.prepareBlock();
                this.$emit('save', block,this.order);
            },
            cancel: function () {
                this.$emit('cancel');
            },
            prepareBlock: function () {
                var block = {};
                block.data = this.blockData;
                block.options = this.blockOptions;
                console.log("3",this.blockOptions.bg_type);
                block.blockName = this.blockTemplate.name;
                block.blockTitle = this.blockTemplate.title;
                console.log("4",block.options.bg_type);
                console.log("5",block.options);
                return block;

            },
            blockOptionsUpdated: function (data) {
                console.log("2",data.bg_type);
                this.blockOptions = data;
            },
        },

        mounted() {
        }
    }
</script>