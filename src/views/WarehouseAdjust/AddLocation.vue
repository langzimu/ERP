<template>
  <div class="ERP-container">
    <div class="app-container" style="padding-right: 0">
      <!--基本信息-->
      <el-card :body-style="	{ padding: '5px' }" class="box-card" shadow="never">

        <div ref="geren" class="form-name">{{ $t('Hmodule.basicinfo') }}</div>
        <div class="container" style="margin-top: 25px">
          <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" size="mini" status-icon class="demo-ruleForm" label-position="left" label-width="130px">
            <el-row>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.locationCode')" prop="locationCode" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="personalForm.locationCode" placeholder="请输入货位编号" style="width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.locationName')" prop="locationName" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="personalForm.locationName" placeholder="请输入货位名称" style="width: 200px" clearable/>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.length')" prop="length" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="personalForm.length" placeholder="请输入货位长" style="width: 200px" clearable>
                    <template slot="append">M</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.width')" prop="width" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="personalForm.width" placeholder="请输入货位宽" style="width: 200px" clearable>
                    <template slot="append">M</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.height')" prop="height" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="personalForm.height" placeholder="请输入货位高" style="width: 200px" clearable>
                    <template slot="append">M</template>
                </el-input></el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('WarehouseAdjust.repositoryId')" prop="repositoryId" style="margin-left: 18px;width: 100%;margin-bottom: 0">
                  <el-input v-model="repositoryId" placeholder="请选择仓库" style="width: 200px" clearable @focus="handlechooseRep"/>
                </el-form-item>
              </el-col>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/><br>
            </el-row>
          </el-form>
        </div>
        <!--操作-->
        <div class="buttons" style="margin-top: 20px">
          <el-button v-no-more-click type="primary" style="background:#3696fd;border-color:#3696fd;width: 98px" @click="handlesave()">{{ $t('Hmodule.baoc') }}</el-button>
          <el-button type="danger" @click="handlecancel()">{{ $t('Hmodule.cancel') }}</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import '@/directive/noMoreClick/index.js'
import { addlocation } from '@/api/WarehouseAdjust'
import MyCreate from './components/MyCreate'
import MyRepository from './components/MyRepository'
import MyDetail from './components/MyDetail'
// eslint-disable-next-line no-unused-vars
var _that
export default {
  name: 'AddLocation',
  components: { MyCreate, MyRepository, MyDetail },
  data() {
    const validatePass = (rule, value, callback) => {
      if (this.repositoryId === undefined || this.repositoryId === null || this.repositoryId === '') {
        callback(new Error('请选择仓库'))
      } else {
        callback()
      }
    }
    return {
      // 控制仓库弹窗
      repositorycontrol: false,
      // 货位单信息数据
      personalForm: {
        createPersonId: this.$store.getters.userId,
        repositoryId: this.$store.getters.repositoryId
      },
      repositoryId: this.$store.getters.repositoryName,
      // 货位单规则数据
      personalrules: {
        locationCode: [
          { required: true, message: '请输入货位编号', trigger: 'blur' }
        ],
        locationName: [
          { required: true, message: '请输入货位名称', trigger: 'blur' }
        ],
        length: [
          { required: true, message: '请输入货位长', trigger: 'blur' }
        ],
        width: [
          { required: true, message: '请输入货位宽', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入货位高', trigger: 'blur' }
        ],
        repositoryId: [
          { required: true, validator: validatePass, trigger: 'change' }
        ]
      }
    }
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    // 保存操作
    handlesave() {
      const Data = this.personalForm
      for (const key in Data) {
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
      }
      console.log(this.personalForm)
      console.log(Data)
      const parms = JSON.stringify(Data)
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          addlocation(parms).then(res => {
            console.log(res)
            if (res.data.ret === 200) {
              this.$notify({
                title: 'successful',
                message: 'save successful',
                type: 'success',
                offset: 100
              })
              this.restAllForm()
              this.$refs.personalForm.clearValidate()
              this.$refs.personalForm.resetFields()
            } else {
              this.$notify.error({
                title: 'wrong',
                message: res.data.msg,
                offset: 100
              })
            }
          })
        } else {
          this.$notify.error({
            title: 'wrong',
            message: 'Information is incomplete',
            offset: 100
          })
          return false
        }
      })
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: this.$store.getters.userId,
        repositoryId: this.$store.getters.repositoryId
      }
      this.repositoryId = this.$store.getters.repositoryName
    },
    // 取消操作
    handlecancel() {
      this.$router.go(-1)
      const view = { path: '/WarehouseAdjust/AddLocation', name: 'AddLocation', fullPath: '/WarehouseAdjust/AddLocation', title: 'AddLocation' }
      this.$store.dispatch('delView', view).then(({ visitedViews }) => {
      })
    },
    // 入库人输入框focus事件触发
    handlechoose() {
      this.createcontrol = true
    },
    // 员工列表返回经办人数据
    createname(val) {
      console.log(val)
      this.enterPersonId = val.personName
      this.personalForm.enterPersonId = val.id
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      console.log(val)
      this.repositoryId = val.repositoryName
      this.personalForm.repositoryId = val.id
    },
    // 入库单事件
    // 新增入库单明细
    handleAddproduct() {
      this.control = true
    },
    productdetail(val) {
      console.log(val)
      this.list2 = val
    },
    // 入库金额计算
    getSize(quan, pric) {
      return quan * pric
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ERP-container{
    margin-right: 0;
    .form-name{
      font-weight: bold;
      font-size: 18px;
      color: #373e4f;
      padding: 5px;
      margin-bottom: -20px;
    }
    .container{
      margin-top: 5px;
    }
    .el-button+.el-button{
      width: 98px;
    }
  }
</style>
