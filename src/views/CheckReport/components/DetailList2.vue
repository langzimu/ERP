<template>
  <el-dialog :visible.sync="editVisible" :detailcontrol="detailcontrol" :detaildata="detaildata" :close-on-press-escape="false" :title="personalForm.reportNumber +$t('updates.xqing')" append-to-body width="1010px" class="edit" top="-10px" @close="$emit('update:detailcontrol', false)">
    <!--基本信息-->
    <el-card class="box-card" style="margin-top: 63px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('Hmodule.basicinfo') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.title')" style="width: 100%;">
                <span>{{ personalForm.title }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.sourceType')" prop="sourceType" style="width: 100%;">
                <span>{{ personalForm.sourceType | sourceTypeFilter }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.sourceNumber')" prop="sourceNumber" style="width: 100%;">
                <span>{{ personalForm.sourceNumber }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.supplierId')" style="width: 100%;">
                <span>{{ personalForm.supplierName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.inspectionPersonId')" prop="reportPersonId" style="width: 100%;">
                <span>{{ personalForm.inspectionPersonName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.inspectionDeptId')" prop="reportDeptId" style="width: 100%;">
                <span>{{ personalForm.inspectionDeptName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkType')" prop="checkType" style="width: 100%;">
                <span>{{ personalForm.checkType | checkTypeFilter }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkMode')" prop="checkMode" style="width: 100%;">
                <span>{{ personalForm.checkMode | checkModeFilter }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.produceManagerId')" style="width: 100%;">
                <span>{{ personalForm.produceManagerName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.workCenterId')" style="width: 100%;">
                <span>{{ personalForm.workCenter }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkPersonId')" style="width: 100%;">
                <span>{{ personalForm.checkPersonName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkDeptId')" prop="reportDeptId" style="width: 100%;">
                <span>{{ personalForm.checkDeptName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkDate')" prop="checkDate" style="width: 100%;">
                <span>{{ personalForm.checkDate }}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top: 10px">
      <h2 ref="geren" class="form-name">{{ $t('updates.wpxx') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm2" :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.productCode')" prop="productCode" style="width: 100%;">
                <span>{{ personalForm.productCode }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.productName')" style="width: 100%;">
                <span>{{ personalForm.productName }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.unit')" style="width: 100%;">
                <span>{{ personalForm.unit }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.typeId')" style="width: 100%;">
                <span>{{ personalForm.productType }}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card" shadow="never" style="margin-top: 10px">
      <h2 ref="geren" class="form-name">{{ $t('updates.jyxx') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form ref="personalForm3" :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkQuantity')" prop="checkQuantity" style="width: 100%;">
                <span>{{ personalForm.checkQuantity }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.sampleQuantity')" prop="sampleQuantity" style="width: 100%;">
                <span>{{ personalForm.sampleQuantity }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.passQuantity')" style="width: 100%;">
                <span>{{ personalForm.passQuantity }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.failedQuantity')" style="width: 100%;">
                <span>{{ personalForm.failedQuantity }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.passRate')" style="width: 100%;">
                <span>{{ personalForm.passRate }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.checkResult')" style="width: 100%;">
                <span>{{ personalForm.checkResult }}</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('CheckReport.isRecheck')" style="width: 100%;">
                <el-radio-group v-model="personalForm.isRecheck" style="margin-left: 18px;width: 200px" disabled>
                  <el-radio :label="1" style="width: 100px">{{ $t('updates.yes') }}</el-radio>
                  <el-radio :label="2">{{ $t('updates.no') }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
    <!--子件信息-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('updates.zjbgmx') }}</h2>
      <div class="container">
        <el-editable
          ref="editable"
          :data.sync="list2"
          :edit-config="{ showIcon: false, showStatus: true}"
          class="click-table1"
          stripe
          border
          size="small"
          style="width: 100%">
          <el-editable-column :label="$t('Hmodule.xh')" min-width="55" align="center" type="index"/>
          <el-editable-column :label="$t('updates.jyxm')" prop="checkItem" align="center" min-width="150px"/>
          <el-editable-column prop="checkTarget" align="center" label="检验指标" min-width="150px"/>
          <el-editable-column prop="checkValue" align="center" label="检验值" min-width="150px"/>
          <el-editable-column :label="$t('updates.jyjg')" prop="chectResult" align="center" min-width="150px">
            <template slot-scope="scope">
              <p>{{ scope.row.chectResult | chectResultFilter }}</p>
            </template>
          </el-editable-column>
          <el-editable-column prop="checkQuantity" align="center" label="检验数量" min-width="150px"/>
          <el-editable-column :label="$t('updates.hgsl')" prop="passQuantity" align="center" min-width="150px"/>
          <el-editable-column :label="$t('updates.bhgsl')" prop="failedQuantity" align="center" min-width="150px"/>
          <el-editable-column prop="checkPersonname" align="center" label="检验人员" min-width="150px"/>
          <el-editable-column prop="checkDeptName" align="center" label="检验部门" min-width="150px"/>
          <el-editable-column prop="targetUp" align="center" label="指标上限" min-width="150px"/>
          <el-editable-column prop="targetDown" align="center" label="指标下限" min-width="150px"/>
        </el-editable>
      </div>
    </el-card>
    <!--审核状态-->
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('updates.spjl') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-table
          :data="reviewList"
          border
          style="width: 100%">
          <el-table-column
            :label="$t('updates.dqbz')"
            prop="step"
            align="center"
            min-width="150"/>
          <el-table-column
            :label="$t('updates.dqspr')"
            prop="stepHandlerName"
            align="center"
            min-width="150"/>
          <el-table-column
            :label="$t('updates.spsj')"
            prop="handleTime"
            align="center"
            min-width="150"/>
          <el-table-column
            :label="$t('updates.spyj')"
            prop="stat"
            align="center"
            min-width="150">
            <template slot-scope="scope">
              <span>{{ scope.row.stat | statfilter }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('updates.bzxx') }}</h2>
      <div class="container" style="margin-top: 37px">
        <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="130px">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('public.createPersonName2')" prop="stockType" style="width: 100%;">
                {{ personalForm.createPersonName }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.createDate2')" style="width: 100%;">
                {{ personalForm.createDate }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.endPersonName')" prop="applyDate" style="width: 100%;">
                {{ personalForm.endPersonName }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.endDate')" prop="applyDate" style="width: 100%;">
                {{ personalForm.endDate }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.modifyPersonName')" prop="applyDate" style="width: 100%;">
                {{ personalForm.modifyPersonName }}
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="$t('public.modifyDate')" prop="applyDate" style="width: 100%;">
                {{ personalForm.modifyDate }}
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
var _that
export default {
  filters: {
    chectResultFilter(status) {
      const statusMap = {
        1: '合格',
        2: '不合格'
      }
      return statusMap[status]
    },
    statfilter(status) {
      const statusMap = {
        0: _that.$t('updates.wsh'),
        1: _that.$t('updates.shz'),
        2: _that.$t('Hmodule.shtg'),
        3: _that.$t('Hmodule.shbtg')
      }
      return statusMap[status]
    },
    stockTypeIdFilter(status) {
      const statusMap = {
        1: '采购1'
      }
      return statusMap[status]
    },
    sourceTypeFilter(status) {
      const statusMap = {
        1: _that.$t('updates.zjsqd')
      }
      return statusMap[status]
    },
    currencyFilter(status) {
      const statusMap = {
        1: 'PHP',
        2: 'USD',
        3: 'RMB'
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
    },
    checkTypeFilter(status) {
      const statusMap = {
        1: '来料质检',
        2: '送样质检',
        3: '生产质检'
      }
      return statusMap[status]
    },
    checkModeFilter(status) {
      const statusMap = {
        1: '抽样'
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
    }
  },
  data() {
    return {
      results: [{ value: 1, label: '合格' }, { value: 2, label: '不合格' }],
      // 检验部门数据
      depts2: [],
      // 审核数据
      reviewList: [],
      // 详细表数据
      list2: [],
      list3: [],
      // 弹窗组件的控制
      editVisible: this.detailcontrol,
      // 供应商信息数据
      personalForm: this.detaildata
    }
  },
  watch: {
    detailcontrol() {
      this.editVisible = this.detailcontrol
    },
    detaildata() {
      this.personalForm = this.detaildata
      this.list2 = this.personalForm.checkReportDetailVos
      this.reviewList = []
      const review = this.personalForm.approvalUseVos
      for (const i in review) {
        if (review[i].actualStepHandler !== null) {
          this.reviewList.push(review[i])
        }
      }
    }
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    handlecancel() {
      this.editVisible = false
    }
  }
}
</script>

<style scoped>
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
    left: 0;
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
