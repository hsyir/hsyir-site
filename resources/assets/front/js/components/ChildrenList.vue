<template>
    <div>
        <div class="row">
            <div class="col-md-6 mb-4 p-5" v-for="child in children_list">
                <div class="row">
                    <div class="col-md-3 ">
                        <img :src="child.image" alt="" class="w-100">
                    </div>
                    <div class="col-md-9">
                        <h5>{{ child.name }}</h5>
                        <div class="text-warning"><strong>سن: </strong> {{ child.age }} سال</div>
                        {{ child.about}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-outline-primary  btn-sm float-left mb-2 inline-add-to-supportList"
                                :data-child_id="child.id">حمایت میکنم
                                             <span class="spinner spinner-border spinner-border-sm d-none" role="status"
                                                   aria-hidden="true"></span>
                            <span class="sr-only d-none">در حال  اتصال...</span>
                            <i class="fa fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ChildrenList",
        props: [],
        components: {
        },
        data: function () {
            return {
                loading: false,
                children_list:{},

            }
        },
        methods: {
            getList(){
                let vm = this;
                axios.get("getChildrenList")
                .then(res=>{
                    vm.children_list=res.data.data;
                })
            }
        },
        mounted() {
            this.getList();
        },
    }
</script>

<style scoped>

</style>
