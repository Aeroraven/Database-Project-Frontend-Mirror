<template>
    <v-dialog persistent v-model="zmsShow" width="400">
        <v-card >
            <v-card-title>{{$t('pendingProg.Submitting')}}</v-card-title>
            <v-divider/>
            <br/>
            <v-card-text>
                {{$t('pendingProg.PleaseWait')}}<br/><br/>
                <v-progress-linear indeterminate striped color="primary" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    components: {  },
    name: 'PendingProgressCard',
    props:{
        zmsShow:Boolean
    },
    data(){
        return{
            
        }
    },
    methods:{
        show(){
            this.zmsDisplay=true;
        }
    }
};
</script>