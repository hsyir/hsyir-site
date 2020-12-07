<template>
    <div>
        <div class="form-check mb-2">
            <label class="form-check-label h5" :class="{ 'text-warning':loading }" :for="this.elementId()">
                <input type="checkbox" v-model="activeStatus" @change="changeStatus" class="form-check-input"
                       :id="this.elementId()" value="1">
                وضعیت کاربر در نرم افزار سیموتل:
                {{ activeStatus ? "فعال" : "استراحت" }}</label>
        </div>
    </div>
</template>
<script>
    export default {
        name: "UserPauseStatus",
        props: ["user"],
        data: function () {
            return {
                activeStatus: this.getInitialStatus(),
                loading: false,
            }
        },
        methods: {
            getInitialStatus: function () {
                return !this.user.simotel_paused;
            },
            elementId() {
                return "user_pause_status_" + this.user.id;
            },
            changeStatus() {
                let vm = this;
                this.loading = true;
                let data = {};
                data.active
                    = this.activeStatus;
                axios.post("/advisor/profile/changeStatus", data)
                    .then(res => {
                        console.log(res);
                        vm.activeStatus = res.data.active;
                    })
                    .catch()
                    .then(function () {
                        vm.loading = false;
                    })
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
