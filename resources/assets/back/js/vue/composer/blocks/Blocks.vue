<template>
    <div>
        <div class="p-3 row">
            <div v-if="blocks.length==0">هنوز هیچ بلاکی انتخاب نشده است</div>
            <div class="col-md-12">
                <draggable v-model="blocks" group="people" @start="drag=true" @end="drag=false" @change="reorder">

                    <block  v-for="block,key in blocks"  :key="key" :block="block"
                            @editBlock="editBlock"
                            @removeMe="removeBlock" :order="key"></block>

                </draggable>
            </div>


        </div>
    </div>
</template>
<script>
    import Block from "./Block.vue";
    import draggable from 'vuedraggable';

    export default {
        components: {Block, draggable},
        props: {
            blocks: {
                default: function () {
                    return []
                }
            },
        },
        data() {
            return {}
        },
        methods: {
            /*moveBlockUp: function (order) {
                if (order == 0) return;
                this.$emit('swapBlocks', order, order - 1)
            },
            moveBlockDown: function (order) {
                this.$emit('swapBlocks', order, order + 1)
            },*/
            removeBlock: function (order) {
                this.$emit('removeBlock', order);
            },
            editBlock: function (order) {
                this.$emit('editBlock', order)
            },
            reorder: function () {
                this.$emit('reorder', this.blocks);
            },
        },

        mounted() {
        }
    }
</script>