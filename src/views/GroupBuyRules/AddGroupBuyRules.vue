<template>
  <div class="ERP-container">
    <div class="app-container" style="padding-right: 0">
      <!--基本信息-->
      <el-card class="box-card" shadow="never">
        <h2 ref="geren" class="form-name">{{ $t('Hmodule.basicinfo') }}</h2>
        <div class="container" style="margin-top: 37px">
          <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="200px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.title')" prop="title" style="width: 100%;">
                  <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.minPeoples')" prop="minPeoples" style="width: 100%;">
                  <el-input v-model="personalForm.minPeoples" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.beginTime')" prop="beginTime" style="width: 100%;">
                  <el-input v-model="personalForm.beginTime" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.endTime')" prop="endTime" style="width: 100%;">
                  <el-input v-model="personalForm.endTime" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.captainRate')" prop="captainRate" style="width: 100%;">
                  <el-input v-model="personalForm.captainRate" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('GroupBuyRules.memberRate')" prop="memberRate" style="width: 100%;">
                  <el-input v-model="personalForm.memberRate" style="margin-left: 18px;width: 200px" clearable/>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--子件信息-->
      <!--操作-->
      <div class="buttons" style="margin-top: 20px">
        <el-button v-no-more-click type="primary" style="background:#3696fd;border-color:#3696fd;width: 98px" @click="handlesave()">{{ $t('Hmodule.baoc') }}</el-button>
        <el-button type="danger" @click="handlecancel()">{{ $t('Hmodule.cancel') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { addCustomerChat } from '@/api/GroupBuyRules'
import '@/directive/noMoreClick/index.js'
import MyEmp from './components/MyEmp'
import MyDetail from './components/MyDetail'
import MyMater from './components/MyMater'
import MyInstallment from './components/MyInstallment'
import MyRepository from './components/MyRepository'
var _that
export default {
  name: 'AddGroupBuyRules',
  components: { MyRepository, MyInstallment, MyMater, MyDetail, MyEmp },
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (this.handlePersonId === undefined || this.handlePersonId === null || this.handlePersonId === '') {
        callback(new Error('请选择我方联络人'))
      } else {
        callback()
      }
    }
    return {
      // 回显我方联络人
      handlePersonId: '',
      // 控制我方联络人
      stockControl: false,
      // 控制分期订单
      installmentcontrol: false,
      // 编辑表格数据
      list2: [],
      // 销售订单信息数据
      personalForm: {
        createPersonId: this.$store.getters.userId,
        countryId: this.$store.getters.countryId,
        repositoryId: this.$store.getters.repositoryId,
        regionId: this.$store.getters.regionId
      },
      // 商品信息
      productForm: {},
      // 销售订单规则数据
      personalrules: {
        title: [
          { required: true, message: '请输入洽谈主题', trigger: 'blur' }
        ],
        customerName: [
          { required: true, message: '请输入客户姓名', trigger: 'blur' }
        ],
        handlePersonId: [
          { required: true, validator: validatePass2, trigger: 'change' }
        ],
        chatDate: [
          { required: true, message: '请选择洽谈日期', trigger: 'change' }
        ]
      }
    }
  },
  created() {
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    // 我方联络人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 我方联络人回显
    stockName(val) {
      this.handlePersonId = val.personName
      this.personalForm.handlePersonId = val.id
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: this.$store.getters.userId,
        countryId: this.$store.getters.countryId,
        repositoryId: this.$store.getters.repositoryId,
        regionId: this.$store.getters.regionId
      }
      this.handlePersonId = ''
    },
    // 保存操作
    // handlesave() {
    //   const Data = this.personalForm
    //   for (const key in Data) {
    //     if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
    //       delete Data[key]
    //     }
    //   }
    //   const parms = JSON.stringify(Data)
    //   this.$refs.personalForm.validate((valid) => {
    //     if (valid) {
    //       addCustomerChat(parms).then(res => {
    //         console.log(res)
    //         if (res.data.ret === 200) {
    //           this.$notify({
    //             title: 'successful',
    //             message: 'save successful',
    //             type: 'success',
    //             offset: 100
    //           })
    //           this.restAllForm()
    //           this.$refs.personalForm.clearValidate()
    //           this.$refs.personalForm.resetFields()
    //         } else {
    //           this.$notify.error({
    //             title: 'wrong',
    //             message: res.data.msg,
    //             offset: 100
    //           })
    //         }
    //       })
    //     } else {
    //       this.$notify.error({
    //         title: 'wrong',
    //         message: 'Information is incomplete',
    //         offset: 100
    //       })
    //       return false
    //     }
    //   })
    // },
    // 取消操作
    handlecancel() {
      this.$router.go(-1)
      const view = { path: '/GroupBuyRules/AddGroupBuyRules', name: 'AddGroupBuyRules', fullPath: '/GroupBuyRules/AddGroupBuyRules', title: 'AddGroupBuyRules' }
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ERP-container{
    margin-right: 0;
    .form-name{
      font-size: 18px;
      color: #373e4f;
      margin-bottom: -20px;
      margin-top: 20px;
    }
    .container{
      margin-top: 40px;
    }
    .el-button+.el-button{
      width: 98px;
    }
  }
</style>
