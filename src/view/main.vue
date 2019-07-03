<template>
    <div>
        <Menu></Menu>
        <div class="container">
            <message-box :showModal="showModal" :loading="loading" @close-modal="handleEditClose"></message-box>
            <div class="Message-board">
                <v-EditCard class="edit-card" @sort-by="handleSort" @message-send="handleEdit"></v-EditCard>
                <div class="messagelist">
                    <v-card v-for="(item,index) in listBoard" :data="item" :key="index"></v-card>
                    <v-page :totalCount="totalCount" @change-page="handleChangePage"></v-page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/menu'
import vCard from '@/components/home/card'
import vEditCard from '@/components/home/editcard'
import vPage from '@/components/page'
import { mapActions } from 'vuex'
import messageBox from '@/components/emoji/messageSend'
import { getMessageList,postMessage } from '@/api/user'
import {Time} from '@/directives/time'
export default {
    components: {Menu,vCard, vEditCard, messageBox, vPage},
    data () {
        return {
            listBoard: [],
            value: '',
            showEmoji: false,
            showModal: false,
            loading: true,
            totalCount: 20,
        }
    },
    methods: {
        ...mapActions([
            'getUserInfo'
        ]),
        handleSort (sortOrder) {
            var _this = this
            if(sortOrder === 'time'){
                console.log('sort by'+sortOrder)
                _this.listBoard = _this.listBoard.sort(function(a,b){
                    return b.gmtCreate - a.gmtCreate
                })
            }
            if(sortOrder == 'thumbs'){
                console.log('sort by'+sortOrder)
                _this.listBoard = _this.listBoard.sort(function(a,b){
                    return b.thumbsCount - a.thumbsCount
                })
            }
        },
        selectEmoji (code) {
            this.showEmoji = false
            this.value += code
        },
        handleEdit () {
            this.showModal = true
        },
        handleEditClose (listBoard) {
            if (listBoard){
                listBoard.gmtCreate = this.formatTime(listBoard.gmtCreate)
                if(listBoard) this.listBoard.unshift(listBoard)
            }
            this.showModal = false
        },
        formatTime (datetime) {
            var d = new Date(datetime)
            return d.getTime()
        },
        getMessage (page) {
            getMessageList(page).then(res=>{
                let data = res.data.data
                this.listBoard = data.messageList.map(item=>{
                    item.gmtCreate = this.formatTime(item.gmtCreate)
                    return item
                })
                this.totalCount = data.totalCount
            })
        },
        handleChangePage (page) {
            this.getMessage(page)
        }
    },
    mounted () {
        // this.getUserInfo().then(res=>{
        //     this.$Message.success(res)
        // })
        //console.log(`${this.$store.state.user.userName.userName}`)
        this.getMessage(1)
    },
    computed: {
    },
    watch: {
    }
}
</script>

<style scoped>
.Message-board{
    width: 950px;
    height: auto;
    margin: 20px auto;
    position: relative;
}

.edit-card{
    position: absolute;
    right:10px;
    top:10px;
}
</style>