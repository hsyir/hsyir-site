<template>
    <div>
        <div><strong>تعداد تماس پاسخ داده شده:</strong> {{ this.report.calls_count }} مورد</div>
        <div><strong> مجموع زمان مکالمه:</strong> {{ this.report.call_time_readable_short }}</div>
        <div><strong>متوسط زمان مکالمه: </strong> {{ this.report.average_call_time_readable }} ({{ this.report.average_call_time }} ثانیه)</div>
        <div><strong> درامد صف:</strong> {{ this.report.total_amount }} تومان</div>
        <div><strong>کم ترین زمان مکالمه: </strong> {{ this.report.min_call_time_readable }} ({{ this.report.min_call_time }} ثانیه)</div>
        <div><strong>بیش ترین زمان مکالمه: </strong> {{ this.report.max_call_time_readable }} ({{ this.report.max_call_time }} ثانیه)</div>
        <div><strong>میانگین رضایت مندی: </strong> {{ this.report.poll_score_avg }} </div>
    </div>
</template>

<script>

    export default {
        name: "CallsReport",
        props: ["user_id", "queue_id"],
        data: function () {
            return {
                loading: false,
                queueId: this.getInitialQueueId(),
                userId: this.getInitialUserId(),
                report:{},
            }
        },
        methods: {
            getInitialUserId() {
                return this.user_id;
            },
            getInitialQueueId() {
                return this.queue_id;
            },
            getReport() {
                let vm = this,
                    data = {};
                data.queue_id = vm.queueId;
                data.user_id = vm.user_id;
                axios.get("/admin/reports/calls", {params:data})
                .then(res=>{
                    vm.report = res.data;
                });
            }
        },
        mounted() {
            this.getReport();
        },
    }
</script>

<style scoped>

</style>
