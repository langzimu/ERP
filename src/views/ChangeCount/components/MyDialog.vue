<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.changeNumber +$t('updates.xg')" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" shadow="never">
      <h2 ref="geren" class="form-name">{{ $t('Hmodule.basicinfo') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.sourceType')" prop="sourceType" style="width: 100%;">
                <el-select v-model="personalForm.sourceType" style="margin-left: 18px;width: 200px">
                  <el-option :label="$t('updates.fqsqd')" value="1"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.sourceNumber')" prop="sourceNumber" style="width: 100%;">
                <el-input v-model="personalForm.sourceNumber" style="margin-left: 18px;width: 200px" @focus="handleAddsourceNum"/>
              </el-form-item>
              <my-installment :installmentcontrol.sync="installmentcontrol" @InstallmentDetail="InstallmentDetail" @Installment="Installment"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.customerId')" prop="customerId" style="width: 100%;">
                <el-input v-model="personalForm.customerName" :disabled="IscustomerName" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.customerPhone')" style="width: 100%;">
                <el-input v-model="personalForm.customerPhone" :disabled="IscustomerPhone" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.totalMoney')" prop="totalMoney" style="width: 100%;">
                <el-input v-model="personalForm.totalMoney" :disabled="IstotalMoney" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.beforeCount')" prop="beforeCount" style="width: 100%;">
                <el-input v-model="personalForm.beforeCount" :disabled="IsbeforeCount" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.paidCount')" style="width: 100%;">
                <el-input v-model="personalForm.paidCount" :disabled="IspaidCount" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.paidMoney')" style="width: 100%;">
                <el-input v-model="personalForm.paidMoney" :disabled="IspaidMoney" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.paidCapital')" style="width: 100%;">
                <el-input v-model="personalForm.paidCapital" :disabled="IspaidCapital" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.remainCapital')" style="width: 100%;">
                <el-input v-model="personalForm.remainCapital" :disabled="IsremainCapital" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.afterCount')" prop="afterCount" style="width: 100%;">
                <el-input v-model="personalForm.afterCount" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ChangeCount.saleRepositoryId')" style="width: 100%;">
                <el-input v-model="saleRepositoryId" :disabled="IssaleRepositoryId" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" >分期明细</h2>
      <div class="container">
        <el-editable
          ref="editable"
          :data.sync="list2"
          :edit-config="{ showIcon: true, showStatus: true}"
          class="click-table1"
          stripe
          border
          size="small"
          style="width: 100%">
          <el-editable-column type="selection" min-width="55" align="center"/>
          <el-editable-column :label="$t('Hmodule.xh')" min-width="55" align="center" type="index"/>
          <el-editable-column :label="$t('Hmodule.wpbh')" prop="productCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.wpmc')" prop="productName" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.wpfl')" prop="productCategory" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.jbdw')" prop="unit" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.ggxh')" prop="typeId" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.ys')" prop="color" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.jxf')" prop="kpiGrade" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.spjf')" prop="point" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.dj')" prop="price" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.cjbm')" prop="carCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.dcbm')" prop="batteryCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.djbm')" prop="motorCode" align="center" min-width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <el-card class="box-card" style="position: fixed;width: 1010px;z-index: 100;height: 74px;bottom: 0;" shadow="never">
      <div class="buttons" style="float: right;padding-bottom: 10px">
        <el-button @click="handlecancel()">{{ $t('Hmodule.cancel') }}</el-button>
        <el-button type="primary" @click="handleEditok()">{{ $t('Hmodule.baoc') }}</el-button>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
import { updatechange } from '@/api/ChangeCount'
import MyEmp from './MyEmp'
import MyDetail from './MyDetail'
import MyMater from './MyMater'
import MyInstallment from './MyInstallment'
var _that
export default {
  components: { MyInstallment, MyMater, MyDetail, MyEmp },
  props: {
    editcontrol: {
      type: Boolean,
      default: false
    },
    editdata: {
      type: Object,
      default: null
    }
  },
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (this.personalForm.sourceNumber === undefined || this.personalForm.sourceNumber === null || this.personalForm.sourceNumber === '') {
        callback(new Error('请选择源单编号'))
      } else {
        callback()
      }
    }
    return {
      // 选择的数据
      choosedata: [],
      // 弹窗组件的控制
      editVisible: this.editcontrol,
      // 修改信息数据
      personalForm: this.editdata,
      // 控制表单是否可以编辑
      IscustomerName: true,
      IscustomerPhone: true,
      IstotalMoney: true,
      IsbeforeCount: true,
      IspaidCount: true,
      IspaidMoney: true,
      IspaidCapital: true,
      IsremainCapital: true,
      IssaleRepositoryId: true,
      // 回显销售门店
      saleRepositoryId: '',
      // 控制分期订单
      installmentcontrol: false,
      // 编辑表格数据
      list2: [],
      // 商品信息
      productForm: {},
      // 销售订单规则数据
      personalrules: {
        sourceType: [
          { required: true, message: '请选择源单类型', trigger: 'change' }
        ],
        sourceNumber: [
          { required: true, validator: validatePass2, trigger: 'change' }
        ],
        afterCount: [
          { required: true, message: '请输入修改之后期数', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    editcontrol() {
      this.editVisible = this.editcontrol
    },
    editdata() {
      this.personalForm = this.editdata
      this.saleRepositoryId = this.personalForm.saleRepositoryName
      this.list2 = this.personalForm.changeCountDetailvos
    }
  },
  created() {
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    // 源单控制
    handleAddsourceNum() {
      this.installmentcontrol = true
    },
    InstallmentDetail(val) {
      console.log(val)
      this.$refs.editable.clear()
      for (let i = 0; i < val.length; i++) {
        this.$refs.editable.insert(val[i])
      }
    },
    Installment(val) {
      this.personalForm.sourceNumber = val.applyNumber
      this.personalForm.customerId = val.customerId
      this.personalForm.customerName = val.customerName
      this.personalForm.customerPhone = val.customerPhone
      this.personalForm.totalMoney = val.totalMoney
      this.personalForm.beforeCount = val.count
      this.personalForm.paidCount = val.paidCount
      this.personalForm.paidMoney = Number(val.totalMoney) - Number(val.leftAllmoney)
      this.personalForm.remainCapital = val.leftMoney
      this.personalForm.paidCapital = Number(val.installmentMoney) - Number(val.leftMoney)
      this.personalForm.saleRepositoryId = val.repositoryId
      this.saleRepositoryId = val.repositoryName
      this.IscustomerName = true
      this.IscustomerPhone = true
      this.IstotalMoney = true
      this.IsbeforeCount = true
      this.IspaidCount = true
      this.IspaidMoney = true
      this.IspaidCapital = true
      this.IsremainCapital = true
      this.IssaleRepositoryId = true
    },
    // 清空记录
    restAllForm() {
      this.personalForm = {
        createPersonId: this.$store.getters.userId,
        countryId: this.$store.getters.countryId,
        repositoryId: this.$store.getters.repositoryId,
        regionId: this.$store.getters.regionId,
        sourceType: '1'
      }
      this.saleRepositoryId = null
      this.IscustomerName = false
      this.IscustomerPhone = false
      this.IstotalMoney = false
      this.IsbeforeCount = false
      this.IspaidCount = false
      this.IspaidMoney = false
      this.IspaidCapital = false
      this.IsremainCapital = false
      this.IssaleRepositoryId = false
    },
    // 修改和取消按钮
    // 修改按钮
    handleEditok() {
      this.personalForm.repositoryId = this.$store.getters.repositoryId
      this.personalForm.regionId = this.$store.getters.regionId
      this.personalForm.createPersonId = this.$store.getters.userId
      this.personalForm.countryId = this.$store.getters.countryId
      this.personalForm.modifyPersonId = this.$store.getters.userId
      const EnterDetail = this.$refs.editable.getRecords()
      if (EnterDetail.length === 0) {
        this.$notify.error({
          title: 'wrong',
          message: this.$t('prompt.mxbbnwk'),
          offset: 100
        })
        return false
      }
      EnterDetail.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.productCode === null || elem.productCode === '' || elem.productCode === undefined) {
          delete elem.productCode
        }
        if (elem.productName === null || elem.productName === '' || elem.productName === undefined) {
          delete elem.productName
        }
        if (elem.categoryId === null || elem.categoryId === '' || elem.categoryId === undefined) {
          delete elem.categoryId
        }
        if (elem.typeId === null || elem.typeId === '' || elem.typeId === undefined) {
          delete elem.typeId
        }
        if (elem.unit === null || elem.unit === '' || elem.unit === undefined) {
          delete elem.unit
        }
        if (elem.color === null || elem.color === '' || elem.color === undefined) {
          delete elem.color
        }
        if (elem.kpiGrade === null || elem.kpiGrade === '' || elem.kpiGrade === undefined) {
          delete elem.kpiGrade
        }
        if (elem.point === null || elem.point === '' || elem.point === undefined) {
          delete elem.point
        }
        if (elem.price === null || elem.price === '' || elem.price === undefined) {
          delete elem.price
        }
        if (elem.carCode === null || elem.carCode === '' || elem.carCode === undefined) {
          delete elem.carCode
        }
        if (elem.batteryCode === null || elem.batteryCode === '' || elem.batteryCode === undefined) {
          delete elem.batteryCode
        }
        if (elem.motorCode === null || elem.motorCode === '' || elem.motorCode === undefined) {
          delete elem.motorCode
        }
        return elem
      })
      const parms2 = JSON.stringify(EnterDetail)
      const Data = this.personalForm
      for (const key in Data) {
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
      }
      const parms = JSON.stringify(Data)
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          updatechange(parms, parms2).then(res => {
            console.log(res)
            if (res.data.ret === 200) {
              this.$notify({
                title: 'successful',
                message: 'save successful',
                type: 'success',
                offset: 100
              })
              this.restAllForm()
              this.$refs.editable.clear()
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
    handlecancel() {
      this.restAllForm()
      this.$refs.editable.clear()
      this.$refs.personalForm.clearValidate()
      this.$refs.personalForm.resetFields()
      this.editVisible = false
    }
    // 修改操作结束 -------------------------------------------------
  }
}
</script>

<style scoped>
  .container >>> .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    margin-left: -10px;
  }
  .container >>> .el-form-item__label{
    text-align: left;
  }
  .container >>> .el-form-item__label{
    color: #60626696;
  }
  .edit >>> .el-dialog {
    background:#f1f1f1 ;
    left: 0;
  }
  .el-col-12{
    width: 49%;
  }
</style>
