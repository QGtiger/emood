<template>
    <Page :total="totalCount" :page-size="3" prev-text="Previous" next-text="Next" @on-change="getpage" />
</template>
<script>
export default {
    props: {
        totalCount: {
            type: Number,
            default: 10
        }
    },
    methods: {
        getpage (page) {
            this.$emit('change-page', page)
        }
    },
    mounted () {
    }
}
</script>
