<template>
  <el-dialog
    :visible.sync="editVisible"
    :detailcontrol="detailcontrol"
    :detaildata="detaildata"
    :detailid="detailid"
    :close-on-press-escape="false"
    :title="personalForm.carNumber +$t('updates.clxqxx')"
    append-to-body
    width="1010px"
    class="edit"
    top="-10px"
    @close="$emit('update:detailcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('Hmodule.basicinfo') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.carnumber')" prop="carNumber" style="width: 100%;">
                {{ personalForm.carNumber }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.licencenumber')" prop="licenceNumber" style="width: 100%;">
                {{ personalForm.licenceNumber }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.carname')" prop="carName" style="width: 100%;">
                {{ personalForm.carName }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.cartype')" prop="carType" style="width: 100%;">
                {{ personalForm.carType | carTypeFilter }}
              </el-form-item>
            </el-col>
            <el-col :span="12" style="height: 58px">
              <el-form-item :label="$t('LogisticsCar.carload')" prop="carLoad" style="width: 100%;">
                {{ personalForm.carLoad }}吨
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.stat')" prop="stat" style="width: 100%;">
                {{ personalForm.stat | statFilter }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('LogisticsCar.drivers')" prop="drivers" style="width: 100%;">
                {{ personalForm.driverNames }}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('updates.bzxx') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('public.createPersonName')" style="width: 100%;">
                {{ personalForm.createPersonName }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.createDate')" style="width: 100%;">
                {{ personalForm.createTime }}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <div class="container" style="margin-top: 10px">
        <el-tabs type="card">
          <el-tab-pane label="出车记录">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="outDate"
                align="center"
                label="出车日期"
                min-width="150"/>
              <el-table-column
                prop="outPersonName"
                align="center"
                label="出车人"
                min-width="150"/>
              <el-table-column
                prop="returnDate"
                align="center"
                label="回车日期"
                min-width="150"/>
              <el-table-column
                prop="address"
                align="center"
                label="目的地"
                min-width="150"/>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
import { useLogList } from '@/api/LogisticsCar'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
var _that
export default {
  components: { Pagination },
  filters: {
    carTypeFilter(status) {
      const statusMap = {
        1: '大货车',
        2: '小货车',
        3: '小轿车'
      }
      return statusMap[status]
    },
    statFilter(status) {
      const statusMap = {
        1: '正常',
        2: '停用'
      }
      return statusMap[status]
    },
    payModeFilter(status) {
      const statusMap = {
        1: '货到付款',
        2: '当场支付'
      }
      return statusMap[status]
    },
    sourceTypeFilter(status) {
      const statusMap = {
        1: _that.$t('updates.xsckd'),
        2: _that.$t('updates.dbd')
      }
      return statusMap[status]
    },
    requireTypeFilter(status) {
      const statusMap = {
        1: '客户',
        2: '经销商',
        3: '门店'
      }
      return statusMap[status]
    },
    receiptStatFilter(status) {
      const statusMap = {
        1: _that.$t('updates.zd'),
        2: _that.$t('updates.zx'),
        3: _that.$t('updates.jd')
      }
      return statusMap[status]
    }
  },
  props: {
    detailcontrol: {
      type: Boolean,
      default: false
    },
    detaildata: {
      type: Object,
      default: null
    },
    detailid: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      // 出车记录数据
      tableData: [],
      // 弹窗组件的控制
      editVisible: this.detailcontrol,
      // 供应商信息数据
      personalForm: this.detaildata,
      // 车辆使用情况参数
      useLogListData: {
        pagenum: 1,
        pagesize: 9999,
        carId: this.detailid
      }
    }
  },
  watch: {
    detailcontrol() {
      this.editVisible = this.detailcontrol
    },
    detaildata() {
      this.personalForm = this.detaildata
    },
    detailid() {
      this.useLogListData.carId = this.detailid
      this.getuseLogList()
    }
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    getuseLogList() {
      useLogList(this.useLogListData).then(res => {
        if (res.data.ret === 200) {
          this.tableData = res.data.data.content.list
        }
      })
    },
    handlecancel() {
      this.editVisible = false
    }
  }
}
</script>

<style scoped>
  .edit >>> .el-tabs--card>.el-tabs__header{
    border: none;
  }
  .edit >>> .el-tabs--card>.el-tabs__header .el-tabs__item{
    border: 1px solid #e4e7ed;
  }
  .edit >>> .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
  }
  .edit >>> .el-tabs--card>.el-tabs__header .el-tabs__item:first-child{
    margin-right: 10px;
  }
  .edit>>> .el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){
    margin-right: 10px;
  }
  .edit>>> .el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(3){
    margin-right: 10px;
  }
  .edit>>> .el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(4){
    margin-right: 10px;
  }
  .edit >>> .el-dialog{
    -webkit-transform: none;
    transform: none;
    position: absolute;
    right: 0;
    left: auto;
    height: auto;
  }
  .edit >>> .el-dialog__header{
    background: #fff;
    position: fixed;
    top: 0;
    display: block;
    width: 1010px;
    z-index: 100;
    border-bottom: 1px solid #f1f1f1;
  }
  .edit >>> .el-dialog__body{
    padding-left: 0;
    padding-right: 0;
    padding-top: 10px;
  }
  .edit >>> .el-dialog {
    background:#f1f1f1 ;
    height: 950px;
  }
  .container >>> .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    margin-left: -10px;
  }
  .container >>> .el-form-item__label{
    text-align: left;
  }
  .container >>> .el-form-item__label{
    color: #60626696;
  }
  .el-col-12{
    width: 49%;
  }
</style>
