<template>
    <div class="block">
        <div class="row ">
            <div class="col-md-12 m-1   border"  v-bind:class="classObject" :style="styleObject">
                <div class="p-3 overflow-auto">
                    <div class="float-right " style="cursor: move">
                        {{ block.blockTitle }} - {{block.data.title}}
                    </div>
                    <div class="float-left">
                        <div class="btn-group bg-white  p-1">
                            <a href="#" class="btn btn-sm btn-outline-danger p-1" @click.prevent="removeBlock"><span
                                    class="fa fa-trash"></span></a>
                            <a href="#" class="btn btn-sm btn-outline-secondary p-1" @click.prevent="editBlock"><span
                                    class="fa fa-edit"></span></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import BlockForm from "./../blockForm/BlockForm.vue";

    export default {
        components: {
            BlockForm
        },
        props: {
            block: {
                default: () => {
                    return {}
                }
            },
            manifest: {
                default: function () {
                    return {}
                }
            },
            freeze: false,
            order: null,
        },
        data() {
            return {
                stepEditBlock: false,
                selectedBlockTemplate: [],
            }
        },
        methods: {
            blockMoveUp: function () {
                this.$emit('moveMeUp', this.order);
            },
            blockMoveDown: function () {
                this.$emit('moveMeDown', this.order);
            },
            removeBlock: function () {
                this.$emit('removeMe', this.order);
            },
            editBlock: function () {
                this.$emit('editBlock', this.order)
            },

        },
        computed: {
            classObject: function () {
                let c = {};
                let options = this.block.options;
                if (options.bg_type == "BG_SOLID")
                    c[options.bg_class] = true;
                c[options.text_class] = true;
                return c;
            },
            styleObject: function () {
                let s = {};
                let options = this.block.options;
                if (options.bg_type == "BG_IMAGE")
                    s['background'] = "url(" + options.bg_image_url + ")";
                return s;
            },
        },
        mounted() {
        }
    }
</script>