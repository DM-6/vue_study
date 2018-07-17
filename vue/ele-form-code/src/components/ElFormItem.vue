<template>
    <div class="el-form-item">
        <label class="el-form-item__label" v-if="label || $slots.label">
            <slot name="label">{{ label }}</slot>
        </label>
        <div class="el-form-item__content">
            <slot/>
        </div>
    </div>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
    props: {
        label: String,
        prop: String
    },
    mounted(){
        // fields 生成一下   
        this.dispatch('ElForm', 'el.form.addField', [this]);
    },
    mixins: [ emitter ],
    computed: {
        form(){
            let parent = this.$parent;
            let parentName = parent.$options.componentName;
            while(parentName !== 'ElForm'){
                parent = parent.$parent;
                parentName = parent.$options.componentName;
            }
            return parent;
        }
    },
    methods: {
        validate(trigger, callback){
            const rules = this.form.rules;
            // console.log(rules);
            const item_rule = rules[this.prop];
            console.log(item_rule);

            // 当前item 对应的rule是什么？ --先得到所有的rules 在app.vue rules,ElForm props, form.
            // el-input 相对应的值是什么？
        }
    }
}
</script>

<style>

</style>
