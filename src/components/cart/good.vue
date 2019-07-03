<template>
    <Card style="width:350px;margin:40px auto">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            {{good.goodsName}}
        </p>
        <a href="#" slot="extra" @click.prevent="showMessage">
            <Icon type="ios-loop-strong"></Icon>
            详情
        </a>
        <div class="goodsPrice">商品价格: {{good.goodsPrice}}</div>
        <div class="goodsStock">商品数量: {{good.goodsStock}}</div>
        <Button type="primary" :disabled="disabled" @click.prevent="getgoods">购买</Button>
        <Button type="primary" @click="result" :disabled="resultDisabled">查询订单</Button>
    </Card>
</template>

<script>
import {getGood, getResult} from '@/api/user'
export default {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            uid: ''
        }
    },
    computed: {
        disabled () {
            return this.data.isVip
        },
        good () {
            return this.data.goods
        },
        resultDisabled () {
            return this.uid === '' ? true: false
        }
    },
    methods: {
        showMessage () {
            this.$Notice.open({
                title: 'Notification title',
                desc: 'Here are no notification description. '
            });
        },
        getgoods () {
            getGood().then(res=>{
                this.uid = res.data.data.uuid
                this.$Message.success(res.data.msg)
            })
        },
        result () {
            getResult(this.uid).then(res=>{
                var result = res.data
                this.$Message.success(result.msg)
                this.uid=''
                this.$emit('refresh')
            })
        }
    },
    mounted () {
        console.log(this.good)
    }
}
</script>

<style lang="scss" scoped>

</style>