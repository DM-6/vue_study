<template>
    <label for="" class="el-radio" :class="[{'is-disabled':isDisabled},{'is-focus':focus},{'is-border':border}]">
        <!-- disabled 是否隐藏 focus 是否聚焦 border 是否有边框 -->
        <span class="el-radio__input">
            <span class="el-radio__inner"></span>
            
        <input type="radio" class="el-radio__original" :value="label" @focus="focus=true" @blur="focus=false" @change="handleChange" v-model="model"/>
        <span class="el-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
        
        </span>
        </span>
    </label>
</template>
<script>
export default{    //向外输出
    data(){
        return{
            focus:false
        }
    },
    props:{
        value:{},
        label:{

        },
        disabled:Boolean,
        name:String,
        border:Boolean,
        size:String
    },
    computed:{
        isDisabled(){
            return this.disabled
        },
        model:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)    //调用vue的API:$emit()
            }
        }
    },
    methods:{
        handleChange(){}
    }
}
</script>