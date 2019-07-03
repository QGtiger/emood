<template>
    <div>
        <Menu></Menu>
        <div class="container">
            <good-card :data="data" @refresh="getGoodSList"></good-card>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/menu'
import goodCard from '@/components/cart/good'
import {getGoods} from '@/api/user'
export default {
    components: {Menu,goodCard},
    data () {
        return {
            data: {}
        }
    },
    methods: {
        getGoodSList () {
            getGoods().then(res=>{
                console.log(res.data.data)
                this.data = res.data.data
            })
        }
    },
    mounted () {
        this.getGoodSList()
    }
}
</script>

<style lang="scss" scoped>

</style>