<template>
    <div class="template-composer">
        <div class="p-3 text-left">
            <button class="btn btn-sm btn-outline-success" :disabled="loading || (step !='list')"
                    @click.prevent="saveTemplate">ذخیره
            </button>
            <button class="btn btn-sm btn-outline-success d-none" :disabled="loading || (step !='list')"
                    @click.prevent="storyBack">عقب
            </button>
        </div>
        <div class="border p-1">
            <div v-if="step=='list'">

               <div class="row">
                   <div class="col-md-6">

                       <blocks :blocks="blocks" :manifest="manifest" ref="blocksComp"
                               @removeBlock="removeBlock"
                               @editBlock="editBlock"
                               @reorder="reorder"
                       ></blocks>
                       <div class="text-center mb-3">
                           <a href="#" @click.prevent="goToStep('newBlock')" class="btn btn-outline-success "> + افزودن بلاک جدید</a>
                       </div>
                   </div>
               </div>
            </div>
            <div v-if="step=='editBlock'">
                <block-form :blockTemplate="editableBlockTemplate"
                            :blockData="editableBlock.data"
                            :order="editableBlock.order"
                            :blockOptionsData="editableBlock.options"
                            :contentTypes="contenttypes"
                            :categories="categories"
                            @save="updateBlock"
                            @cancel="goToStep('list')"></block-form>
            </div>
            <div v-if="step=='newBlock'">
                <new-block :blockTemplates="manifest.blockTemplates"
                           :blockGroups="manifest.blockGroups"
                           :contentTypes="contenttypes"
                           :categories="categories"
                           @save="insertNewBlock"
                           @cancel="goToStep('list')"></new-block>
            </div>
        </div>
    </div>
</template>
<script>
    import NewBlock from "./blockForm/NewBlock";
    import BlockForm from "./blockForm/BlockForm";
    import Blocks from "./blocks/Blocks";
//    import Story from "./Story";

    export default {
        components: {
            NewBlock, Blocks, BlockForm
        },
        props: {
            manifest: {
                default: function () {
                    return {}
                }
            },
            store_url: {
                type: String
            },
            input_blocks: {
                default: function () {
                    return []
                }
            },
            contenttypes: {
                default: function () {
                    return []
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
                json: "",
                loading: false,
                blocks: [],
                editableBlock: [],
                editableBlockTemplate: [],
                step: 'list',
//                story: new Story(),
            }
        },
        methods: {
            insertNewBlock: function (block) {
                this.goToStep('list');
                this.blocks.push(block);
                this.onTemplateChanged();
            },
            removeBlock: function (order) {
                this.blocks.splice(order, 1);
                this.$refs.blocksComp.$forceUpdate();
                this.onTemplateChanged();
            },
            saveTemplate: function () {
                this.json = JSON.stringify(this.blocks);
                this.loading = true;
                var data = {
                    data: this.json,
                };
                axios.post(
                    this.store_url,
                    data,
                ).then((response) => {
                    this.loading = false;
                    alert('ذخیره شد');
                });
            },
            updateBlock: function (block, order) {
                this.blocks[order] = block;
                this.onTemplateChanged();
                this.goToStep('list')
            },
            editBlock: function (order) {
                this.editableBlock = _.cloneDeep(this.blocks[order]);
                this.editableBlock.order = order;
                for (var b in this.manifest.blockTemplates) {
                    if (this.editableBlock.blockName == this.manifest.blockTemplates[b].name)
                        this.editableBlockTemplate = this.manifest.blockTemplates[b]
                }
                this.goToStep('editBlock')
            },
            goToStep: function (step) {
                this.step = step;
            },
            storyBack: function () {
//                this.blocks = this.story.back();
            },
            /* reorder: function (blocks) {
                 this.blocks = blocks;
             },*/
            onTemplateChanged: function () {
//                this.story.push(this.blocks);
            },
            reorder: function (blocks) {
                this.blocks = blocks;
            },
        },
        watch: {
        },
        mounted() {
            this.blocks = this.input_blocks;
//            this.story.push(this.blocks);
        },
    }
</script>

<style>
    .template-composer {
        font-size: 0.8rem;
    }

    .template-composer .block {
        cursor: move;
    }

    .template-composer input, .template-composer .btn, .template-composer select, .template-composer textarea {
        font-size: 0.8rem;
    }
</style>