<template>
    <form class="el-form" :class="[ labelPosition ? 'el-form--label-' + labelPosition: '', {'el-form--inline': inline} ]">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'ElForm', 
    componentName: 'ElForm',
    data(){
        return {
            fields: []
        }
    },
    props: {     // 声明
        model: Object,
        rules: Object,
        inline: Boolean,
        labelPosition: String
    },
    methods: {
        validate(){
            this.fields.forEach(field => {
                field.validate('', (message, field) => {

                })
            })
            // console.log('validate');
        }
    },
    // 生命周期
    created(){
        this.$on('el.form.addField', (field) => {     // $on()监听  自定义事件   el.form.addField做一个命名空间 可读性更好 
        // console.log(field);
            this.fields.push(field);
        })
    }
}
</script>

<style>

</style>
