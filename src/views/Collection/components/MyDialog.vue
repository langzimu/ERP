<template>
  <el-dialog :visible.sync="editVisible" :editcontrol="editcontrol" :editdata="editdata" :close-on-press-escape="false" :title="personalForm.number +$t('updates.xg')" width="1010px" class="edit" top="-10px" @close="$emit('update:editcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('Hmodule.basicinfo') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm" :model="personalForm" :rules="personalrules" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.title')" style="width: 100%;">
                <el-input v-model="personalForm.title" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ReturnExchange.sourceType')" prop="sourceType" style="width: 100%;">
                <el-select v-model="personalForm.sourceType" style="margin-left: 18px;width: 200px" disabled @change="clearnumber">
                  <el-option value="1" label="销售出库单"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('ReturnExchange.sourceNumber')" prop="sourceNumber" style="width: 100%;">
                <el-input v-model="personalForm.sourceNumber" style="margin-left: 18px;width: 200px" disabled @focus="opensaleout" />
              </el-form-item>
              <my-saleout :saleoutcontrol.sync="saleoutcontrol" @saleOutDetail="saleOutDetail" @saleOutdata="saleOutdata"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.customerId')" prop="customerName" style="width: 100%;">
                <el-input v-model="personalForm.customerName" style="margin-left: 18px;width: 200px" @focus="handleAddsourceNum"/>
              </el-form-item>
              <my-installment :installmentcontrol.sync="installmentcontrol" @InstallmentDetail="InstallmentDetail" @Installment="Installment"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.customerPhone')" style="width: 100%;">
                <el-input v-model="personalForm.customerPhone" :disabled="IscustomerPhone" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.address')" style="width: 100%;">
                <el-input v-model="personalForm.address" :disabled="Isaddress" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.receivePersonId')" prop="receivePersonId" style="width: 100%;">
                <el-input v-model="receivePersonId" style="margin-left: 18px;width: 200px" @focus="handlechooseStock"/>
              </el-form-item>
              <my-emp :control.sync="stockControl" @stockName="stockName"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.retreatRepositoryId')" style="width: 100%;">
                <el-input v-model="retreatRepositoryId" style="margin-left: 18px;width: 200px" @focus="handlechooseRep"/>
              </el-form-item>
              <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.receiveDate')" prop="receiveDate" style="width: 100%;">
                <el-date-picker
                  v-model="personalForm.receiveDate"
                  type="date"
                  value-format="yyyy-MM-dd"
                  style="margin-left: 18px;width: 200px"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('Collection.receiveReason')" style="width: 100%;">
                <el-input v-model="personalForm.receiveReason" style="margin-left: 18px;width: 200px" clearable/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px;margin-bottom: 40px" shadow="never">
      <h2 ref="fuzhu" class="form-name" >{{ $t('updates.ckmx') }}</h2>
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
          <el-editable-column :label="$t('Hmodule.hw')" prop="locationName" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.pc')" prop="batch" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.wpbh')" prop="productCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.wpmc')" prop="productName" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.wpfl')" prop="productCategoryName" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.gg')" prop="productType" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.ys')" prop="color" align="center" min-width="150px"/>
          <el-editable-column :label="$t('Hmodule.dw')" prop="unit" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.jxf')" prop="kpiGrade" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.spjf')" prop="point" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.cksli')" prop="quantity" align="center" min-width="150px"/>
          <!-- <el-editable-column prop="salePrice" align="center" :label="$t('updates.lsj')" min-width="150px"/> -->
          <!-- <el-editable-column prop="costPrice" align="center" :label="$t('updates.cbj')" min-width="150px"/> -->
          <!-- <el-editable-column prop="costMoney" align="center" label="成本金额" min-width="150px"/> -->
          <el-editable-column :label="$t('updates.ckj')" prop="taxPrice" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.slv')" prop="taxRate" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.se')" prop="taxMoney" align="center" min-width="150px"/>
          <!-- <el-editable-column prop="money" align="center" :label="$t('Hmodule.je')" min-width="150px"/> -->
          <el-editable-column :label="$t('updates.ckje')" prop="includeTaxCostMoney" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.cklv')" prop="discount" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.cke')" prop="discountMoney" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.cjbm')" prop="carCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.dcbm')" prop="batteryCode" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.djbm')" prop="motorCode" align="center" min-width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px;margin-bottom: 40px" shadow="never">
      <h2 ref="fuzhu" class="form-name" >{{ $t('updates.shmx') }}</h2>
      <div class="buttons" style="margin-top: 35px;margin-bottom: 10px;">
        <el-button type="success" style="background:#3696fd;border-color:#3696fd " @click="handleAddproduct">{{ $t('Hmodule.tjsp') }}</el-button>
        <el-button @click="handleAddpackage">{{ $t('otherlanguage.xztc') }}</el-button>
        <el-button type="danger" @click="$refs.editable.removeSelecteds()">{{ $t('Hmodule.delete') }}</el-button>
        <my-package :packagecontrol.sync="packagecontrol" @packagedata="packagedata"/>
      </div>
      <my-detail :control.sync="control" @product="productdetail"/>
      <div class="container">
        <el-editable
          ref="editable2"
          :data.sync="list3"
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
          <el-editable-column :edit-render="{type: 'default'}" :label="$t('Hmodule.hw')" prop="locationId" align="center" width="200px">
            <template slot-scope="scope">
              <el-select v-model="scope.row.locationId" :value="scope.row.locationId" :placeholder="$t('Hmodule.xzhw')" filterable clearable style="width: 100%;" @visible-change="updatebatch($event,scope)">
                <el-option
                  v-for="item in locationlist"
                  :key="item.id"
                  :value="item.id"
                  :label="item.locationCode"/>
              </el-select>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" :label="$t('Hmodule.pc')" prop="batch" align="center" width="150px"/>
          <el-editable-column :label="$t('updates.wpfl')" prop="categoryName" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.jbdw')" prop="unit" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.ggxh')" prop="typeId" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.ys')" prop="color" align="center" min-width="150px"/>
          <el-editable-column :edit-render="{name: 'ElInputNumber', type: 'visible', attrs: {min: 0.00, precision: 6, controls:false}}" :label="$t('updates.shul')" prop="quantity" align="center" width="150px"/>
          <el-editable-column :label="$t('updates.jxf')" prop="kpiGrade" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.spjf')" prop="point" align="center" min-width="150px"/>
          <!--            <el-editable-column :label="$t('Hmodule.dj')" prop="price" align="center" min-width="150px"/>-->
          <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" :label="$t('updates.cjbm')" prop="carCode" align="center" min-width="150" >
            <template slot="edit" slot-scope="scope">
              <el-input v-if="isEdit2(scope.row)" v-model="scope.row.carCode" clearable @blur="getInfo(scope.row)"/>
              <span v-else>{{ scope.row.carCode }}</span>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" :label="$t('updates.djbm')" prop="motorCode" align="center" min-width="150" >
            <template slot="edit" slot-scope="scope">
              <el-input v-if="isEdit2(scope.row)" v-model="scope.row.motorCode" clearable @blur="getInfo3(scope.row)"/>
              <span v-else>{{ scope.row.motorCode }}</span>
            </template>
          </el-editable-column>
          <el-editable-column :edit-render="{name: 'ElInput', type: 'visible'}" :label="$t('updates.dcbm')" prop="batteryCode" align="center" min-width="150" >
            <template slot="edit" slot-scope="scope">
              <el-input v-if="isEdit4(scope.row)" v-model="scope.row.batteryCode" clearable @blur="getInfo2(scope.row)"/>
              <span v-else>{{ scope.row.batteryCode }}</span>
            </template>
          </el-editable-column>
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
import { updaterecoverVehicle } from '@/api/Collection'
import { getlocation, locationlist, vehicleInfo } from '@/api/public'
import MyEmp from './MyEmp'
import MyDetail from './MyDetail'
import MyMater from './MyMater'
import MyInstallment from './MyInstallment'
import MyRepository from './MyRepository'
import MySaleout from './MySaleout'
import MyPackage from './MyPackage'

var _that
export default {
  components: { MyRepository, MyInstallment, MyMater, MyDetail, MyEmp, MySaleout, MyPackage },
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
    const validatePass = (rule, value, callback) => {
      if (this.receivePersonId === undefined || this.receivePersonId === null || this.receivePersonId === '') {
        callback(new Error('请选择收车人'))
      } else {
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (this.personalForm.customerName === undefined || this.personalForm.customerName === null || this.personalForm.customerName === '') {
        callback(new Error('请选择客户姓名'))
      } else {
        callback()
      }
    }
    return {
      locationlist: [],
      // 选择的数据
      choosedata: [],
      // 弹窗组件的控制
      editVisible: this.editcontrol,
      // 修改信息数据
      personalForm: this.editdata,
      // 收车仓库回显
      retreatRepositoryId: '',
      // 收车仓库选择控制期
      repositorycontrol: false,
      // 控制源单
      control: false,
      // 收车人回显
      receivePersonId: '',
      // 控制收车人
      stockControl: false,
      // 控制表单是否可以编辑
      IscustomerName: false,
      IscustomerPhone: false,
      Isaddress: false,
      // 回显销售门店
      saleRepositoryId: '',
      // 控制分期订单
      installmentcontrol: false,
      // 编辑表格数据
      list2: [],
      list3: [],
      saleoutcontrol: false,
      packagecontrol: false,
      // 商品信息
      productForm: {},
      // 销售订单规则数据
      personalrules: {
        receivePersonId: [
          { required: true, validator: validatePass, trigger: 'change' }
        ],
        customerName: [
          { required: true, validator: validatePass2, trigger: 'change' }
        ],
        receiveDate: [
          { required: true, message: '请选择收车日期', trigger: 'change' }
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
      this.retreatRepositoryId = this.personalForm.repositoryName
      this.receivePersonId = this.personalForm.receivePersonName
      this.list2 = this.personalForm.recoverVehicleSourceOutVos
      this.list3 = this.personalForm.recoverVehicleDetailVos
      this.getlocation()
    }
  },
  created() {
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    packagedata(val) {
      for (let i = 0; i < val.length; i++) {
        this.$refs.editable2.insert(val[i])
      }
    },
    handleAddpackage() {
      // if (this.personalForm.repositoryId === undefined || this.personalForm.repositoryId === '') {
      //   this.$notify.error({
      //     title: 'wrong',
      //     message: this.$t('prompt.sqslcg'),
      //     offset: 100
      //   })
      //   return false
      // }
      this.packagecontrol = true
    },
    saleOutdata(val) {
      console.log(val)
      this.personalForm.sourceNumber = val.number
      this.personalForm.sourceMoney = val.allTaxMoney
      this.personalForm.customerType = String(val.customerType)
      this.Issource = true
      this.personalForm.customerId = val.customerId
      this.personalForm.customerName = val.customerName
      this.personalForm.customerPhone = val.phoneNumber
      this.personalForm.address = val.address
      this.personalForm.diffMoney = val.actualMoney
      this.personalForm.sourceMoney = val.actualMoney
      this.repositoryId = val.saleRepositoryName
      this.personalForm.repositoryId = val.saleRepositoryId
    },
    saleOutDetail(val) {
      this.list2 = val
    },
    // 选择源单编号
    opensaleout() {
      this.saleoutcontrol = true
    },
    clearnumber() {
      this.personalForm.sourceNumber = ''
      this.deliverPersonId = ''
    },
    getInfo(row) {
      console.log(row)
      if (row.carCode !== null && row.carCode !== '' && row.carCode !== undefined) {
        const param = {}
        param.carCode = row.carCode
        vehicleInfo(param).then(res => {
          if (res.data.ret === 200) {
            console.log('res.data.data.content', res.data.data.content)
            if (res.data.data.content !== null) {
              row.carCode = res.data.data.content.carCode
              row.batteryCode = res.data.data.content.batteryCode
              row.motorCode = res.data.data.content.motorCode
              row.snCode = res.data.data.content.snCode
            }
          } else {
            this.$notify.error({
              title: 'wrong',
              message: res.data.msg,
              offset: 100
            })
          }
        })
      }
    },
    getInfo2(row) {
      console.log(row)
      if (row.batteryCode !== null && row.batteryCode !== '' && row.batteryCode !== undefined) {
        const param = []
        param.batteryCode = row.batteryCode
        vehicleInfo(param).then(res => {
          if (res.data.ret === 200) {
            console.log('res.data.data.content', res.data.data.content)
            if (res.data.data.content !== null) {
              row.carCode = res.data.data.content.carCode
              row.batteryCode = res.data.data.content.batteryCode
              row.motorCode = res.data.data.content.motorCode
              row.snCode = res.data.data.content.snCode
            }
          } else {
            this.$notify.error({
              title: 'wrong',
              message: res.data.msg,
              offset: 100
            })
          }
        })
      }
    },
    getInfo3(row) {
      console.log(row)
      if (row.motorCode !== null && row.motorCode !== '' && row.motorCode !== undefined) {
        const param = []
        param.motorCode = row.motorCode
        vehicleInfo(param).then(res => {
          if (res.data.ret === 200) {
            console.log('res.data.data.content', res.data.data.content)
            if (res.data.data.content !== null) {
              row.carCode = res.data.data.content.carCode
              row.batteryCode = res.data.data.content.batteryCode
              row.motorCode = res.data.data.content.motorCode
              row.snCode = res.data.data.content.snCode
            }
          } else {
            this.$notify.error({
              title: 'wrong',
              message: res.data.msg,
              offset: 100
            })
          }
        })
      }
    },
    // 判断整车
    isEdit2(row) {
      console.log('222', row)
      const re = row.productCode.slice(0, 2)
      if (re === '01') { return true } else { return false }
    },
    // 判断整车或者电池
    isEdit4(row) {
      console.log('222', row)
      const re = row.productCode.slice(0, 2)
      if (re === '01' || re === '05') { return true } else { return false }
    },
    getlocation() {
      // 货位根据仓库id展现
      locationlist(this.personalForm.retreatRepositoryId).then(res => {
        if (res.data.ret === 200) {
          this.locationlist = res.data.data.content.list
        }
      })
    },
    updatebatch(event, scope) {
      if (event === true) {
        console.log(this.personalForm.retreatRepositoryId)
        if (this.personalForm.retreatRepositoryId === undefined || this.personalForm.retreatRepositoryId === '') {
          this.$notify.error({
            title: 'wrong',
            message: this.$t('prompt.sqslcg'),
            offset: 100
          })
          return false
        }
        getlocation(this.personalForm.retreatRepositoryId, scope.row).then(res => {
          if (res.data.ret === 200) {
            if (res.data.data.content.length !== 0) {
              this.locationlist = res.data.data.content
            } else if (res.data.data.content.length === 0) {
              locationlist(this.personalForm.retreatRepositoryId).then(res => {
                if (res.data.ret === 200) {
                  this.locationlist = res.data.data.content.list
                }
              })
            }
          }
        })
      }
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      this.retreatRepositoryId = val.repositoryName
      this.personalForm.retreatRepositoryId = val.id
    },
    // 采购申请明细来源
    handleAddproduct() {
      this.control = true
    },
    productdetail(val) {
      console.log(val)
      // this.$refs.editable2.clear()
      // const nowlistdata = this.$refs.editable2.getRecords()
      for (let i = 0; i < val.length; i++) {
        // for (let j = 0; j < nowlistdata.length; j++) {
        //   if (val[i].productCode === nowlistdata[j].productCode) {
        //     this.$notify.error({
        //       title: 'wrong',
        //       message: this.$t('prompt.wpytj'),
        //       offset: 100
        //     })
        //     return false
        //   }
        // }
        this.$refs.editable2.insert(val[i])
      }
    },
    // 收车人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 收车人回显
    stockName(val) {
      this.receivePersonId = val.personName
      this.personalForm.receivePersonId = val.id
    },
    getdatatime() { // 默认显示今天
      this.personalForm.receiveDate = new Date()
    },
    // 源单控制
    handleAddsourceNum() {
      this.installmentcontrol = true
    },
    InstallmentDetail(val) {
      // this.$refs.editable.clear()
      // for (let i = 0; i < val.length; i++) {
      //   this.$refs.editable.insert(val[i])
      // }
    },
    Installment(val) {
      this.personalForm.sourceNumber = val.applyNumber
      this.personalForm.customerId = val.customerId
      this.personalForm.customerName = val.customerName
      this.personalForm.customerPhone = val.customerPhone
      this.personalForm.address = val.address
      this.personalForm.retreatRepositoryId = val.repositoryId
      this.retreatRepositoryId = val.repositoryName
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
      this.getdatatime()
      this.receivePersonId = null
      this.IscustomerName = false
      this.IscustomerPhone = false
      this.Isaddress = false
    },
    // 修改和取消按钮
    // 修改按钮
    handleEditok() {
      if (this.retreatRepositoryId === null || this.retreatRepositoryId === '' || this.retreatRepositoryId === undefined) {
        this.$notify.error({
          title: 'wrong',
          message: '门店不能为空',
          offset: 100
        })
        return false
      }
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
      let i = 1
      EnterDetail.map(function(elem) {
        return elem
      }).forEach(function(elem) {
        if (elem.quantity === null || elem.quantity === '' || elem.quantity === undefined) {
          delete elem.quantity
          i = 2
        } else if (elem.quantity === 0) {
          i = 2
        }
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
      if (i === 2) {
        this.$notify.error({
          title: 'wrong',
          message: '正确填写数量',
          offset: 100
        })
        return false
      }
      const EnterDetail2 = this.$refs.editable2.getRecords()
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
      const parms3 = JSON.stringify(EnterDetail2)
      const Data = this.personalForm
      for (const key in Data) {
        // console.log(Data[key], key)
        if (Data[key] === '' || Data[key] === undefined || Data[key] === null) {
          delete Data[key]
        }
        if (key === 'recoverVehicleDetailVos' || key === 'judgeStat') {
          delete Data[key]
        }
        if (key === 'recoverVehicleDetailVos' || key === 'approvalUseVos' || key === 'detailJson') {
          delete Data[key]
        }
      }
      const parms = JSON.stringify(Data)
      this.$refs.personalForm.validate((valid) => {
        if (valid) {
          updaterecoverVehicle(parms, parms3, parms2).then(res => {
            console.log(res)
            if (res.data.ret === 200) {
              this.$notify({
                title: 'successful',
                message: 'save successful',
                type: 'success',
                offset: 100
              })
              this.$emit('rest', true)
              this.editVisible = false
              this.$refs.editable.clear()
              this.$refs.editable2.clear()
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
      this.$refs.editable2.clear()
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
