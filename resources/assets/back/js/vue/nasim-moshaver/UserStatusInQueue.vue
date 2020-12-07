<template>
    <div>
        <div class="form-check mb-2">
            <label class="form-check-label" :class="{ 'text-warning':loading }" :for="this.elementId()">
                <input type="checkbox" v-model="activeStatus" @change="changeStatus" class="form-check-input"
                       :id="this.elementId()" value="1">
                {{ activeStatus ? "فعال" : "استراحت" }}</label>
        </div>
    </div>
</template>

<script>
    import InputBuilder from "../formBuilder/InputBuilder";

    export default {
        name: "UserStatusInQueue",
        components: {InputBuilder},
        props: ["status"],
        data: function () {
            return {
                activeStatus: this.getInitialStatus(),
                loading: false,
            }
        },
        methods: {
            getInitialStatus: function () {
                return this.status.active;
            },
            elementId(){
              return this.status.queue_id+"_"+this.status.user_id;
            },
            changeStatus() {
                let vm =this;
                this.loading = true;
                let data = this.status;
                data.active = this.activeStatus;
                axios.post("/admin/queues/changeStatus", data)
                    .then(res => {
                        console.log(res);
                        vm.activeStatus = res.data.active;
                    })
                .catch()
                .then(function(){
                    vm.loading=false;
                })
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
