<template>
    <div>
        <comment-form @addComment="addComment"/>
        <!-- @addComment 自定义事件 -->
        <comment-list :list="list"/>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pageSize="pageSize" @turnPage="turnPage"/>
    </div>
</template>

<script>
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import Pagination from './Pagination'

export default {
    data() {
        return{
            list: [],
            // Pagination组件无法独立  list  当子组件无法做主的 可以交由父组件做
            pageSize: 3,
            totalData: [],    //所有的数据 => 当前页面的评论 list
            totalCount: 0,
            currentPage: 1
        }
        
    },
    components: {
        CommentForm,
        CommentList,
        Pagination
    },
    methods: {
        addComment(msg){    // 自定义方法事件
            // console.log(msg);
            this.totalData.push({ text: msg });
            this.totalCount = this.totalData.length;
            if(this.totalCount <= this.pageSize){
                this.list = this.totalData
            } else{
                this.list = this.totalData.slice(this.totalCount-this.pageSize)   // slice() 方法可从已有的数组中返回选定的元素。
            }
            this.currentPage = 1;
            this.list.reverse();   // reverse() 方法用于颠倒数组中元素的顺序。
        },
        turnPage(curr){
            console.log(curr);
        }
    }
}
</script>

<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}
</style>
