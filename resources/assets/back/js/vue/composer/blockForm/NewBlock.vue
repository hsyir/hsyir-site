<template>
    <div>
       <div class="p-3">
           <div  v-if="step=='selectBlockType'">
               <select-block-type :blockTemplates="blockTemplates" :blockGroups="blockGroups"
                                  @selected="onSelectBlockType"></select-block-type>
               <a href="#" class="btn btn-danger btn-sm" @click.prevent="$emit('cancel')">انصراف</a>
           </div>
           <block-form v-if="step=='blockForm'" :blockTemplate="selectedBlockTemplate" :blockData="blockData"
                       :contentTypes="contentTypes" :categories="categories" @save="save"
                       @cancel="goToStep('selectBlockType')"></block-form>
       </div>
    </div>
</template>
<script>
    import BlockForm from "./BlockForm.vue";
    import SelectBlockType from "./SelectBlockType.vue";

    export default {
        components: {
            BlockForm, SelectBlockType
        },
        props: {
            blockTemplates: {
                default: function () {
                    return {};
                },
            },
            blockGroups: {
                default: function () {
                    return {};
                },
            },
        contentTypes: {
            type: Object,
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
            }
        },
        data() {
            return {
                step: 'selectBlockType',
                selectedBlockTemplate: {},
                blockData: {},
            }
        },
        methods: {
            onSelectBlockType: function (blockTemplate) {
                this.blockData = {};
                for (var key in blockTemplate.fields) {
                    this.blockData[blockTemplate.fields[key].name] = null;
                }
                this.goToStep('blockForm');
                this.selectedBlockTemplate = blockTemplate;
            },
            goToStep: function (step) {
                this.step = step;
            },
            save: function (block) {
                this.goToStep('selectBlockType');
                this.$emit('save', block);
            }
        },

        mounted() {
        }
    }
</script>