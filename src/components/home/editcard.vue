<template>
    <Card style="width:320px" dis-hover>
        <div slot="title">
            <Icon type="ios-options" />
            <span>文章选项</span>
        </div>
        <div class="dev-issue-aside-item">
            <div class="dev-issue-aside-item-title">排列方式</div>
                <RadioGroup v-model="sort">
                    <Radio label="time">
                        <span>时间排序</span>
                    </Radio>
                    <Radio label="thumbs">
                        <span>点赞排序</span>
                    </Radio>
                </RadioGroup>
        </div>
        <Button type="primary" long @click="MessageSend"><Icon type="ios-create-outline" />写心情</Button>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                sort: 'time'
            }
        },
        mounted () {
            console.log(this.sort)
        },
        methods: {
            MessageSend () {
                this.$emit('message-send')
            }
        },
        watch: {
            sort () {
                this.$emit('sort-by', this.sort)
            }
        }
    }
</script>

<style scoped>
.dev-issue-aside-item{
    margin: 10px 5px
}
</style>
