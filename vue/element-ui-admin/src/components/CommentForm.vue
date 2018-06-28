<template>
<form class="input-area">
    <label for="">用户名：</label>
    <input type="text" class="user" placeholder="请输入用户名" ref="username"/>
    <label for="">评论：</label>
    <textarea class="textarea" placeholder="请输入评论内容" ref="content"></textarea>
    <button type="button" @click="doComment">提交</button>
</form>

</template>

<script>
export default {
    methods: {
        doComment(){   // button事件处理
            const user = this.$refs.username.value;   // this指代当前类
            const content = this.$refs.content.value;
            const pubTime = new Date().toLocaleString();   // 时间戳方法
            this.$emit('addComment', `${user}:${content},发布于${pubTime}`);   //  $emit() 子元素发生的事情 报告给父元素 从内到外 CommentForm -> Comment
            this.$refs.content.value = ''
        }
    }
}
</script>

<style>

</style>
