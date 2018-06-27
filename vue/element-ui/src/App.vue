<template>
  <div id="app">
    <!-- <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>

    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>

    <el-button loading type="success">提交</el-button>
    <el-button @click="doLoading" :loading="isLoading" icon="el-icon-edit" type="primary"></el-button>
    <el-button :disabled="disabled" type="info">提交</el-button>
    <el-button :disabled="disabled" type="warning">提交</el-button>

    <form action="http://www.baidu.com" method="get">
      <el-button @click="doSubmit" type="primary">提交</el-button>
    </form> -->
    
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
              <el-menu-item index="1">高级插件</el-menu-item>
              <el-menu-item index="2">在线商城</el-menu-item>
              <el-menu-item index="3">客户管理</el-menu-item>
              <el-menu-item index="4">系统设置</el-menu-item>
              <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
              <el-form-item prop="name" label="活动名称">
                <el-input v-model="ruleForm.name" size="large"></el-input>     <!-- 双向数据绑定 -->
                <!-- <el-input :value="ruleForm.name" size="large"></el-input>   单向数据绑定  数据绑定界面 -->
              </el-form-item>
              <el-form-item label="" prop="fenLei">
                <el-row style="height: 35px;" type="flex" align="middle">
                  <el-col :span="3" style="width: 90px;">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动标签" prop="biaoQian">
                <el-button><i class="el-icon-plus"></i></el-button>
              </el-form-item>
              <el-form-item label="活动时间" prop="activeTime">
                <el-date-picker></el-date-picker>
              </el-form-item>
              <el-form-item label="报名时间" prop="signupTime">
                <el-date-picker></el-date-picker>
              </el-form-item>
              <el-form-item label="活动地点" prop="activePlace">
              </el-form-item>
              <el-form-item label="活动人数" prop="activePeople">
                <el-row>
                  <el-col :span="6">
                    <el-radio-group v-model="ruleForm.peopleNum">
                      <el-radio v-for="item of ruleForm.peopleNums" :key="item.name" :label="item.name"></el-radio>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="6">
                    <el-input placeholder="0">
                      <i>人</i>
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="活动封面" prop="activeCover">
                <!-- <el-upload class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  [drag]="true" [multiple]="true">
                  <ng-template #trigger>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或
                      <em>点击上传</em>
                    </div>
                  </ng-template>
                </el-upload> -->
              </el-form-item>
              <el-form-item label="活动简介" prop="activeIntro">
                <el-input type="textarea" placeholder="请输入内容" ></el-input>
              </el-form-item>
              <el-form-item label="报名用户信息展示" prop="signupInfo">
                <el-radio-group v-model="ruleForm.signupInfo">
                  <el-radio v-for="item of ruleForm.signupInfos" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="评价功能" prop="pingJia">
                <el-radio-group v-model="ruleForm.pingJia">
                  <el-radio v-for="item of ruleForm.pingJias" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="" prop="zanZhu">
                <el-row style="height: 35px;" type="flex" align="middle">
                  <el-col :span="3" style="width: 90px;">
                    <div class="el-form-item__label">赞助广告</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">开通赞助广告</el-button>
                  </el-col>
                </el-row>
                <!-- <el-upload class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  [drag]="true" [multiple]="true">
                  <ng-template #trigger>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或
                      <em>点击上传</em>
                    </div>
                  </ng-template>
                </el-upload> -->
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请填写您的广告标题" size="large"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请填写您的广告内容" size="large"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="请填写您的赞助链接" size="large"></el-input>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenLeis" type="primary" :key="fenLei.name" @close="handleClose" closable>{{fenLei.name}} </el-tag>
                </el-form-item>
              </el-form>
            </el-dialog>
            <el-button>预览</el-button>
            <el-button type="primary">下一步</el-button>
          </div>
          <div class="step2">
            <el-form class="demo-attendance" ref="attendance" label-position="top" :model="attendance">
              <el-form-item label="报名限制" prop="xianZhi">
                <el-radio-group v-model="attendance.xianZhi">
                  <el-radio v-for="item of attendance.xianZhis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="每人可报名额限制" prop="peopleXianZhi">
                <el-row>
                  <el-col :span="6">
                    <el-radio-group v-model="attendance.peopleXianZhi">
                      <el-radio v-for="item of attendance.peopleXianZhis" :key="item.name" :label="item.name"></el-radio>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="6">
                    <el-input placeholder="0">
                      <i>人</i>
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="付费活动" prop="pay">
                <el-row>
                  <el-col :span="6">
                    <el-radio-group v-model="attendance.pay">
                      <el-radio v-for="item of attendance.pays" :key="item.name" :label="item.name"></el-radio>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="6">
                    <el-input placeholder="0">
                      <i>元</i>
                    </el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="允许取消报名" prop="cancel">
                <el-row>
                  <el-col :span="6">
                    <el-radio-group v-model="attendance.cancel">
                      <el-radio v-for="item of attendance.cancels" :key="item.name" :label="item.name"></el-radio>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="6">
                    <el-input placeholder="活动前几小时">
                      <i>小时</i>
                    </el-input>
                  </el-col>
                </el-row>
                
              </el-form-item>
              <el-form-item label="报名是否需要审核" prop="shenHe">
                <el-radio-group v-model="attendance.shenHe">
                  <el-radio v-for="item of attendance.shenHes" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="设置报名表" prop="sighupTable">
                <el-row>
                  <el-col :span="3"><el-checkbox v-model="checked">必填</el-checkbox></el-col>
                  <el-col :span="3"><el-input v-model="input" placeholder="姓名" style="width: 100px;"></el-input></el-col>
                  <el-col :span="12"><el-input v-model="input" placeholder="提示语 请输入您的姓名" style="width: 430px;"></el-input></el-col>
                  <el-col :span="3"><el-button class="el-icon-delete"></el-button></el-col>
                  <el-col :span="3">
                    <el-select v-model="value">
                      <el-option v-for="item in options" :key="item.value"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="3"><el-checkbox v-model="checked">必填</el-checkbox></el-col>
                  <el-col :span="3"><el-input v-model="input" placeholder="手机" style="width: 100px;"></el-input></el-col>
                  <el-col :span="12"><el-input v-model="input" placeholder="提示语 请输入您的手机" style="width: 430px;"></el-input></el-col>
                  <el-col :span="3"><el-button class="el-icon-delete"></el-button></el-col>
                  <el-col :span="3">
                    <el-select v-model="value">
                      <el-option v-for="item in options" :key="item.value"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <el-row>
                  <el-button type="primary">添加更多</el-button>
                </el-row>
              </el-form-item>
              <el-form-item label="签到条件" prop="tiaoJian">
                <el-radio-group v-model="attendance.tiaoJian">
                  <el-radio v-for="item of attendance.tiaoJians" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="签到方式" prop="fangShi">
                <el-row>
                  <el-col :span="16">
                    <el-radio-group v-model="attendance.fangShi">
                      <el-radio v-for="item of attendance.fangShis" :key="item.name" :label="item.name"></el-radio>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="8">
                    <el-input placeholder="请填写你的暗号"></el-input>
                  </el-col>
                </el-row>
                
              </el-form-item>
              <el-form-item label="生成签到二维码" prop="erWeiMa">
                <el-row>
                  <el-col><el-button>生成</el-button></el-col>
                </el-row>
              </el-form-item>
            </el-form>
            <el-button>上一步</el-button>
            <el-button type="primary">下一步</el-button>
          </div>
          
          <!-- 按钮组  上一步 下一步 发布活动 -->
          <!-- <el-button-group>
            <el-button type="primary" v-show="preStep" @click.native.prevent="handlePreStep" icon="el-icon-arrow-left">上一步</el-button>
            <el-button type="primary" v-show="nextStep" @click.native.prevent="handleNextStep">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group> -->
        </div>
      </div>
    </main>
  </div> 
</template>

<script>
import ElButton from '@/components/ElButton'
import ElButtonGroup from '@/components/ElButtonGroup'

export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      disabled: false,
      step: 2,
      preStep: true,
      nextStep: true,
      ruleForm: {
        name: '',
        fenLeis: [      //活动分类
          { name: '未发布' },
          { name: '测试活动' },
          { name: '精彩活动' }
        ],
        fenLei: '测试活动',
        tags: [],
        peopleNums: [
          { name: '无限制'},
          { name: '限制'}
        ],
        peopleNum: '无限制',
        signupInfos: [
          { name: '不展示'},
          { name: '展示报名人数'},
          { name: '展示报名清单'},
          { name: '报名成功显示完整用户资料'}
        ],
        pingJia: '不开启',
        pingJias: [
          { name: '不开启'},
          { name: '实时评价'},
          { name: '审核后评论'}
        ]
      },
      dialogFormFenLeiVisible: false,
      attendance: {
        name: '',
        xianZhi: '无限制',
        xianZhis: [
          { name: '无限制'},
          { name: '必须关注公众号才能报名'},
          { name: '必须成为会员才能报名'},
          { name: '必须分享才能报名'}
        ],
        peopleXianZhi: '无限制',
        peopleXianZhis: [
          { name: '无限制'},
          { name: '限制'}
        ],
        pay:'免费',
        pays: [
          { name: '免费'},
          { name: '费用'}
        ],
        cancel:'不允许',
        cancels: [
          { name: '不允许'},
          { name: '允许'}
        ],
        shenHe:'不需要',
        shenHes: [
          { name: '不需要'},
          { name: '需要'}
        ],
        tiaoJian:'必须报名',
        tiaoJians: [
          { name: '必须报名'},
          { name: '不需要报名'}
        ],
        fangShi:'签到二维码',
        fangShis: [
          { name: '签到二维码'},
          { name: '入场二维码'},
          { name: '会员二维码'},
          { name: '手机号'},
          { name: '暗号'}
        ]
      },
      checked: true,
      options: [{
          value: '选项1',
          label: '移动'
        }, {
          value: '选项2',
          label: '复制'
        }],
        value: '移动' 
    }
  },
  components: {
    // 'el-button': ElButton,
    // 'el-button-group': ElButtonGroup

  },
  mounted () {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  },
  methods: {
    doLoading(){
      console.log('aaa');
    },
    doSubmit(evt){
      console.log(evt);
    },
    handlePreStep(){
      this.step--;
      this.goStep(this.step);
    },
    handleNextStep(){
      this.step++;
      this.goStep(this.step);
    },
    goStep(n){
      switch(n){
        case 1:
          this.preStep = false;
          this.nextStep = true;
          break;
        case 2:
        case 3:
          this.preStep = true;
          this.nextStep = true;
          break;
        case 4:
          this.preStep = true;
          this.nextStep = false;
      }
    },
    handleClose(){
      this.dialogFormFenLeiVisible = false
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin: 0;
  padding: 0;
}
#app{
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header{
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: 4px solid #3091F2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0, .12), 0 0 6px 0 rgba(0,0,0, .04);
}
header.header-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo{
  padding-left: 300px!important;
}

main{
  margin-top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;  
  min-height: 800px;  
  border: solid 40px #E9ECF1;  
  background-color: #FCFCFC;  
}
main .main-left{
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}
main .main-right{
  -webkit-box-flex:1;
  -ms-flex:1;flex:1; 
  background-color: #fff; 
  padding: 50px 70px; 
}
main .el-menu{
  background-color: transparent!important;
}
</style>
