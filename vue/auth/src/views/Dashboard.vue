<template>
    <div>
        Dashboard
    </div>
</template>

<script>
export default {
    mounted(){    //生命周期
        setTimeout(() => {
            this.$router.replace('/');
        }, 1000)
        console.log(this.$router);
    }
}
</script>

<style>

</style>
