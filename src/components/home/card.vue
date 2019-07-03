<template>
    <Card style="width:560px;margin-bottom: 30px">
        <div style="text-align:left">
            <div class="item-avator">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span><Icon v-if="data.vip" style="color:red" type="ios-bookmark" /> {{data.author}}</span>
                <span>{{time(data.gmtCreate)}}</span>
            </div>
            <div class="item-content">
                <pre v-html="emoji(data.content)">
    
                </pre>
            </div>
            <div class="item-meta">
                <div class="thumbs">
                    <Icon :type="type" @click="thumbs"/>
                    <span class="thumbs-count">{{data.thumbsCount}}</span>
                </div>
            </div>
        </div>
    </Card>
</template>
<script>
import {Time} from '@/directives/time'

export default {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            type: 'ios-heart-outline',
        }
    },
    methods: {
        thumbs () {
            this.type = this.type === 'ios-heart-outline' ? 'ios-heart':'ios-heart-outline'
        },
        time (timedate) {
            return Time.getFormatTime(timedate)
        }
    },
    computed: {
    },
    mounted () {
    }
}
</script>
<style scoped>
.item-avator{
    border-bottom: 1px solid #f0f0f0;
    padding: 8px 5px;
}

.item-content{
    padding: 8px 5px;
}

.item-meta{
    padding: 0px 5px;
}

.item-meta .thumbs{
    display: inline-block;
}

.item-meta .thumbs-count{
    font-size: 12px
}
</style>

