<template>
  <el-dialog :visible.sync="editVisible" :detailcontrol="detailcontrol" :detaildata="detaildata" :close-on-press-escape="false" :title="personalForm.reportNumber +$t('updates.xqing')" append-to-body width="1010px" class="edit" top="-10px" @close="$emit('update:detailcontrol', false)">
    <div id="printTest" >
      <!--基本信息-->
      <el-card class="box-card" style="margin-top: 63px" shadow="never">
        <h2 ref="geren" class="form-name" style="font-size: 16px;color: #606266;margin-top: -5px;">{{ $t('Hmodule.basicinfo') }}</h2>
        <button v-print="'#printTest'" class="print" style="font-size: 13px;background: white;">{{ $t('updates.print') }}</button>
        <div class="container" style="margin-top: 37px">
          <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="140px">
            <el-row>
              <el-col :span="12">
                <el-form-item class="print2" label="主生任务汇报单编号" style="width: 100%;display: none">
                  {{ personalForm.reportNumber }}
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ProduceTask.title')" style="width: 100%;">
                  <span>{{ personalForm.title }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ProduceTask.deptId')" prop="deptId" style="width: 100%;">
                  <span>{{ personalForm.deptName }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ProduceTask.workCenterId')" prop="workCenterId" style="width: 100%;">
                  <span>{{ personalForm.workCenter }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ProduceTask.produceTaskNumber')" prop="produceTaskNumber" style="width: 100%;">
                  <span>{{ personalForm.produceTaskNumber }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ProduceTask.produceDate')" prop="produceDate" style="width: 100%;">
                  <span>{{ personalForm.produceDate }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
      <!--子件信息-->
      <el-card class="box-card" style="margin-top: 15px" shadow="never">
        <el-tabs v-model="activeName2" type="card">
          <el-tab-pane :label="$t('updates.sczk')" name="first">
            <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;margin-top: 10px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.countFinishQuantity')" style="width: 100%;">
                    <span>{{ personalForm.countFinishQuantity }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.countWorkHours')" style="width: 100%;">
                    <span>{{ personalForm.countWorkHours }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266">{{ $t('updates.scmxi') }}</h2>
            <div class="container">
              <el-editable
                ref="editable"
                :data.sync="list"
                :edit-config="{ showIcon: true, showStatus: true}"
                class="click-table1"
                stripe
                border
                size="small"
                style="width: 100%">
                <el-editable-column :label="$t('Hmodule.xh')" fixed="left" min-width="55" align="center" type="index"/>
                <el-editable-column :label="$t('Hmodule.wpbh')" prop="productCode" fixed="left" align="center" />
                <el-editable-column :label="$t('Hmodule.wpmc')" prop="productName" fixed="left" align="center" />
                <el-editable-column :label="$t('updates.gs')" prop="workHours" align="center" />
                <el-editable-column :label="$t('updates.wcs')" prop="finishQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgs')" prop="passQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgl')" prop="passRate" align="center" />
              </el-editable>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('updates.ryzk')" name="second">
            <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;margin-top: 10px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.shouldPeoples')" style="width: 100%;">
                    <span>{{ personalForm.shouldPeoples }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.actualPeoples')" style="width: 100%;">
                    <span>{{ personalForm.actualPeoples }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.shouldWorkHours')" style="width: 100%;">
                    <span>{{ personalForm.shouldWorkHours }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.overtimeHours')" style="width: 100%;">
                    <span>{{ personalForm.overtimeHours }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.stopHours')" style="width: 100%;">
                    <span>{{ personalForm.stopHours }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.effectiveHours')" style="width: 100%;">
                    <span>{{ personalForm.effectiveHours }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;">人员明细</h2>
            <div class="container">
              <el-editable
                ref="editable2"
                :data.sync="list2"
                :edit-config="{ showIcon: true, showStatus: true}"
                class="click-table1"
                border
                size="small"
                style="width: 100%">
                <el-editable-column type="selection" min-width="55" align="center"/>
                <el-editable-column :label="$t('Hmodule.xh')" min-width="55" align="center" type="index"/>
                <el-editable-column prop="personName" align="center" label="人员" />
                <el-editable-column :label="$t('updates.gs')" prop="workHours" align="center" />
                <el-editable-column :label="$t('updates.wcs')" prop="finishQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgs')" prop="passQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgl')" prop="passRate" align="center" />
              </el-editable>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('updates.sbzk')" name="third">
            <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;margin-top: 10px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.equipmentQuantity')" style="width: 100%;">
                    <span>{{ personalForm.equipmentQuantity }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.actualEquipQuantity')" style="width: 100%;">
                    <span>{{ personalForm.actualEquipQuantity }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.allRunTime')" style="width: 100%;">
                    <span>{{ personalForm.allRunTime }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.runRate')" style="width: 100%;">
                    <span>{{ personalForm.runRate }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.loadRate')" style="width: 100%;">
                    <span>{{ personalForm.loadRate }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.useRate')" style="width: 100%;">
                    <span>{{ personalForm.useRate }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.stopQuantity')" style="width: 100%;">
                    <span>{{ personalForm.stopQuantity }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.stopTime')" style="width: 100%;">
                    <span>{{ personalForm.stopTime }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.stopReason')" style="width: 100%;">
                    <span>{{ personalForm.stopReason }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;">设备明细</h2>
            <div class="container">
              <el-editable
                ref="editable3"
                :data.sync="list3"
                :edit-config="{ showIcon: true, showStatus: true}"
                class="click-table1"
                stripe
                border
                size="small"
                style="width: 100%">
                <el-editable-column type="selection" min-width="55" align="center"/>
                <el-editable-column :label="$t('Hmodule.xh')" min-width="55" align="center" type="index"/>
                <el-editable-column prop="equipmentNumber" align="center" label="设备编号" />
                <el-editable-column prop="equipmentName" align="center" label="设备名称" />
                <el-editable-column prop="runTime" align="center" label="开机时长" />
                <el-editable-column :label="$t('updates.wcs')" prop="finishQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgs')" prop="passQuantity" align="center" />
                <el-editable-column :label="$t('updates.hgl')" prop="passRate" align="center" />
              </el-editable>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('updates.wlsyqk')" name="fourth">
            <el-form :model="personalForm" :inline="true" status-icon class="demo-ruleForm" label-width="110px" style="margin-left: 30px;margin-top: 10px">
              <el-row>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.countAccess')" style="width: 100%;">
                    <span>{{ personalForm.countAccess }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.countUseup')" style="width: 100%;">
                    <span>{{ personalForm.countUseup }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('ProduceTask.countRemain')" style="width: 100%;">
                    <span>{{ personalForm.countRemain }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <h2 ref="fuzhu" class="form-name" style="font-size: 16px;color: #606266;">物料明细</h2>
            <div class="container">
              <el-editable
                ref="editable4"
                :data.sync="list4"
                :edit-config="{ showIcon: true, showStatus: true}"
                class="click-table1"
                stripe
                border
                size="small"
                style="width: 100%">
                <el-editable-column type="selection" min-width="55" align="center"/>
                <el-editable-column :label="$t('Hmodule.xh')" min-width="55" align="center" type="index"/>
                <el-editable-column :label="$t('Hmodule.wpbh')" prop="productCode" align="center" />
                <el-editable-column :label="$t('Hmodule.wpmc')" prop="productName" align="center" />
                <el-editable-column prop="todayAccess" align="center" label="本日领入" />
                <el-editable-column prop="yesterdayRemain" align="center" label="昨日结存" />
                <el-editable-column prop="todayUseup" align="center" label="本日耗用" />
                <el-editable-column prop="todayDamaged" align="center" label="本日损坏" />
                <el-editable-column prop="todayRemain" align="center" label="本日结存" />
              </el-editable>
            </div>
          </el-tab-pane>
        </el-tabs>
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
    </div>
  </el-dialog>
</template>

<script>
var _that
export default {
  filters: {
    statfilter(status) {
      const statusMap = {
        0: _that.$t('updates.wsh'),
        1: _that.$t('updates.shz'),
        2: _that.$t('Hmodule.shtg'),
        3: _that.$t('Hmodule.shbtg')
      }
      return statusMap[status]
    },
    sourceTypeFilter(status) {
      const statusMap = {
        1: _that.$t('updates.zscjg'),
        2: _that.$t('Hmodule.Nosource')
      }
      return statusMap[status]
    },
    processTypeFilter(status) {
      const statusMap = {
        1: '加工1'
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
      // 控制标签页
      activeName2: 'first',
      // 审核数据
      reviewList: [],
      // 生产状况明细数据
      list: [],
      // 人员状况明细数据
      list2: [],
      // 设备状况明细数据
      list3: [],
      // 物料使用情况状况明细数据
      list4: [],
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
      this.workCenterId = this.personalForm.workCenter
      this.reviewList = []
      const review = this.personalForm.approvalUseVos
      for (const i in review) {
        if (review[i].actualStepHandler !== null) {
          this.reviewList.push(review[i])
        }
      }
      this.list = this.personalForm.produceReportDetails
      this.list2 = this.personalForm.produceReportPeopleDetailVos
      this.list3 = this.personalForm.produceReportEquipmentDetails
      this.list4 = this.personalForm.produceReportMaterialsDetails
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
    height: 1000px;
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
  @media print {
    .print {
      display: none;
    }
    .print2 {
      display: block !important;
    }
  }
</style>
