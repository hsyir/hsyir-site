<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div >
                    <div class=" btn-group-toggle btn-group " data-toggle="buttons">
                        <label class="btn btn-outline-primary active"
                               @click="selectGroup('')">
                            <input type="radio" name="options" autocomplete="off"> همه<i class="fad fa-1x fa-all"  ></i>
                        </label>
                        <label class="btn btn-outline-primary"
                               v-for="group,groupName in blockGroups"
                               @click="selectGroup(groupName)">
                            <input type="radio" name="options" autocomplete="off"><i class="fad fa-1x" :class="'fa-'+group.icon" ></i> <span class="d-none d-md-inline-block">{{ group.title }}</span>
                        </label>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6 col-lg-4 mb-4 block-template" v-for="blockTemplate in filteredBlocks" @click.prevent="selectBlockType(blockTemplate)">
                        <div class="border round p-2 h-100">
                            <div class="row">
                                <div class="col-4">
                                    <div class="template-icon"><i class="fad fa-2x" :class="'fa-'+blockTemplate.icon"></i> </div>
                                </div>
                                <div class="col-8">
                                        <div>{{ blockTemplate.title }}</div>
                                    <div class=""><small>{{ blockTemplate.description }}</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .template-icon i{
        display: inline-block;
        border-radius: 60px;
        box-shadow: 0px 0px 2px #888;
        padding: 0.5em 0.6em;
    }
    .block-template{
        cursor: pointer;
    }
    .block-template:hover .template-icon i{
        background-color: #b6bac1;
        color: #fff;
    }
</style>
<script>


    export default {
        props: ['blockTemplates','blockGroups'],
        data() {
            return {
                block: {},
                showForm: false,
                selectedBlockGroup:"",
            }
        },
        methods: {
            selectBlockType: function (block) {
                this.$emit('selected', block);
            },
            selectGroup: function (groupName){
                this.selectedBlockGroup = groupName;
            }
        },
        computed :{
            filteredBlocks(){
                if(this.selectedBlockGroup === "")
                    return this.blockTemplates;

                return this.blockTemplates.filter((block => block.group === this.selectedBlockGroup));


            },
            groupFilterBtnClass: function (groupname) {
                console.log(groupname);
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        },
        mounted() {
        }
    }
</script>