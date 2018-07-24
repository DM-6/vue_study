<template>
    <div>
        <h2>{{ message }}</h2>
        <p>newsId: {{ $route.params.newsId }} </p>
        <p>newsTitle: {{ $route.params.newsTitle }} </p>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            message: 'params pages'
        }
    }
}
</script>

<style>

</style>
