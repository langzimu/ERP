<template>
  <div class="ERP-container">
    <el-card class="box-card" style="margin-top: 10px;height: 115px" shadow="never">

      <el-form ref="getemplist" :model="getemplist" label-width="70px" style="margin-top: -9px">
        <el-row>
          <el-col :span="3">
            <el-form-item :label="$t('Hmodule.wpmc')">
              <el-input v-model="getemplist.productName" style="width: 100px" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 100px">
            <el-form-item label="采购类别">
              <el-select v-model="getemplist.stockType" style="width: 100px" clearable>
                <el-option
                  v-for="(item, index) in types"
                  :key="index"
                  :label="item.categoryName"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-left: 60px">
            <el-form-item :label="$t('stockOrderCount.type')">
              <el-select v-model="getemplist.type" :value="getemplist.type" style="width: 100px" @keyup.enter.native="handleFilter" @change="changeName">
                <el-option value="1" label="供应商类别分组"/>
                <el-option value="2" label="物品类别"/>
                <el-option value="3" label="供应商分组"/>
                <el-option value="4" label="供应商+物品类别分组"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 20px">
            <el-form-item :label="$t('updates.rq')">
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="-"
                unlink-panels
                value-format="yyyy-MM-dd"
                style="width: 250px"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item :label="$t('StockContract.supplierId')">
              <el-input v-model="supplierId" @focus="handlechoose" @clear="restFilter"/>
              <my-supplier :control.sync="empcontrol" @supplierName="supplierName"/>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-left: 46px">
            <el-form-item :label="$t('updates.ywy')">
              <el-input v-model="handlePersonId" clearable @keyup.enter.native="handleFilter" @focus="handlechooseStock" @clear="restFilter3"/>
            </el-form-item>
            <my-emp :control.sync="stockControl" @stockName="stockName"/>
          </el-col>
          <el-col :span="4" style="margin-left: 266px">
            <!-- 搜索按钮 -->
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" round @click="handleFilter">{{ $t('public.search') }}</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="box-card" style="margin-top: 10px" shadow="never">
      <!-- 列表开始 -->
      <el-table
        :data="list"
        border
        style="width: 100%">
        <el-table-column
          :label="first"
          prop="name"
          width="300"
          sortable
          align="center"/>
        <el-table-column
          v-if="second"
          label="物品类别"
          prop="productCategory"
          sortable
          width="300"
          align="center"/>
        <el-table-column
          :label="$t('stockDetailCount.unit')"
          prop="unit"
          sortable
          width="200"
          align="center"/>
        <el-table-column :label="$t('stockOrderExecute.orderNum')" align="center">
          <el-table-column
            :label="$t('stockOrderCount.orderQuantity')"
            prop="orderQuantity"
            sortable
            width="200"
            align="center"/>
          <el-table-column
            :label="$t('stockOrderExecute.price')"
            prop="orderPrice"
            sortable
            width="200"
            align="center"/>
          <el-table-column
            :label="$t('stockOrderCount.totalMoney')"
            prop="orderMoney"
            sortable
            width="200"
            align="center"/>
        </el-table-column>
        <el-table-column :label="$t('stockTrackList.enterQuantity')" align="center">
          <el-table-column
            :label="$t('stockDetailCount.unit')"
            prop="unit"
            sortable
            width="200"
            align="center"/>
          <el-table-column
            :label="$t('stockOrderCount.orderQuantity')"
            prop="enterQuantity"
            sortable
            width="200"
            align="center"/>
        </el-table-column>
        <el-table-column :label="$t('stockTrackList.notenterQuantity')" align="center">
          <el-table-column
            :label="$t('stockDetailCount.unit')"
            prop="unit"
            sortable
            width="200"
            align="center"/>
          <el-table-column
            :label="$t('stockOrderCount.orderQuantity')"
            prop="quantity2"
            sortable
            width="200"
            align="center"/>
        </el-table-column>
        <!-- <el-table-column
          :label="$t('stockBillCount.retreatrate')"
          prop="arrivedQuantity"
          width="200"
          align="center"/> -->
      </el-table>
      <!-- 列表结束 -->
      <pagination v-show="total>0" :total="total" :page.sync="getemplist.pageNum" :limit.sync="getemplist.pageSize" @pagination="getlist" />
    </el-card>
  </div>
</template>

<script>
import { searchStockCategory } from '@/api/StockCategory'
import { stockOrderExecute } from '@/api/count'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination'
import permission from '@/directive/permission/index.js' // 权限判断指令
import permission2 from '@/directive/permission2/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import MyEmp from './components/MyEmp'
import DetailList from './components/DetailList'
import MyDialog from './components/MyDialog'
import MyCustomer from './components/MyCustomer'
import MyAgent from './components/MyAgent'
import MyRepository from './components/MyRepository'
import MyTree from './components/MyTree'
import MySupplier from './components/MySupplier'

var _that
export default {
  name: 'StockOrderCount',
  directives: { waves, permission, permission2 },
  components: { MyDialog, DetailList, MyRepository, MySupplier, MyEmp, MyCustomer, MyTree, MyAgent, Pagination },
  filters: {
    judgeStatFilter(status) {
      const statusMap = {
        0: _that.$t('updates.wsh'),
        1: _that.$t('updates.shz'),
        2: _that.$t('Hmodule.shtg'),
        3: _that.$t('Hmodule.shbtg')
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
    stockTypeFilter(status) {
      const statusMap = {
        1: '采购1'
      }
      return statusMap[status]
    },
    sendTypeFilter(status) {
      const statusMap = {
        1: '未发货',
        2: '发货中',
        3: '已发货'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      categoryId: '',
      first: '',
      second: false,
      third: '',
      step1: '',
      step2: '',
      step3: '',
      step4: '',
      step5: '',
      step6: '',
      step7: '',
      step8: '',
      types: [],
      repositoryId: '',
      handlePersonId: '',
      receiptVisible: false,
      // 回显客户
      customerName: '',
      // 控制客户
      customercontrol: false,
      agentcontrol: false,
      // 类别获取参数
      typeparms: {
        pagenum: 1,
        pagesize: 99999
      },
      // 采购类别数据
      // 申请部门数据
      depts: [],
      // 审核传参
      reviewParms: {
        id: '',
        judgePersonId: '',
        judgeStat: ''
      },
      // 详情组件数据
      treecontrol: false,
      detailvisible: false,
      repositorycontrol: false,
      // 更多搜索条件问题
      visible2: false,
      // 供应商回显
      supplierId: '',
      // 供应商控制框
      empcontrol: false,
      // 采购人回显
      stockPersonId: '',
      // 采购人控制框
      stockControl: false,
      // 批量操作
      moreaction: '',
      // 加载操作控制
      downloadLoading: false,
      // 表格数据
      list: [],
      // 表格数据条数
      total: 0,
      // 表格识别
      tableKey: 0,
      // 加载表格
      listLoading: true,
      // 采购申请查询加展示参数
      getemplist: {
        pageNum: 1,
        pageSize: 10,
        type: '1'
      },
      // 传给组件的数据
      personalForm: {},
      // 修改控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  activated() {
    this.getlist()
  },
  mounted() {
    this.getlist()
    this.changeName()
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    treechoose() {
      this.treecontrol = true
    },
    tree(val) {
      this.categoryId = val.categoryName
      this.getemplist.categoryId = val.id
    },
    changeName() {
      if (this.getemplist.type === '1') {
        this.first = '供应商类别分组'
        this.second = false
      }
      if (this.getemplist.type === '2') {
        this.first = '物品类别'
        this.second = false
      }
      if (this.getemplist.type === '3') {
        this.first = '供应商分组'
        this.second = false
      }
      if (this.getemplist.type === '4') {
        this.first = '供应商'
        this.second = true
      }
      this.getlist()
    },
    checkPermission,
    // 不让勾选
    selectInit(row, index) {
      if (row.judgeStat !== 0) {
        return false
      } else {
        return true
      }
    },
    // 选择客户类型时清理客户名称
    clearCustomer() {
      this.getemplist.customerId = ''
      this.customerName = ''
    },
    // 选择客户focus
    chooseCustomer() {
      if (this.getemplist.customerType === '1') {
        this.agentcontrol = true
      } else if (this.getemplist.customerType === '2') {
        this.customercontrol = true
      }
    },
    customerdata(val) {
      this.getemplist.customerId = val.id
      this.customerName = val.customerName
    },
    agentdata(val) {
      this.getemplist.customerId = val.id
      this.customerName = val.agentName
    },
    // 更新采购类型
    updatecountry() {
      this.getlist()
    },
    getlist() {
      const para = {}
      para.iseffective = 1
      para.type = 1
      para.pagenum = 1
      para.pagesize = 999
      searchStockCategory(para).then(res => {
        if (res.data.ret === 200) {
          this.types = res.data.data.content.list
        }
      })
      // 物料需求计划列表数据
      this.listLoading = true
      stockOrderExecute(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].productCategory === null) {
              this.list[i].productCategory = ''
            }
            this.list[i].quantity2 = (this.list[i].orderQuantity - this.list[i].enterQuantity).toFixed(6)
            if (this.getemplist.type === '1') {
              this.list[i].name = this.list[i].supplierTypeName
            }
            if (this.getemplist.type === '2') {
              this.list[i].name = this.list[i].productCategory
            }
            if (this.getemplist.type === '3') {
              this.list[i].name = this.list[i].supplierName
            }
            if (this.getemplist.type === '4') {
              this.list[i].name = this.list[i].supplierName
            }
            this.list[i].heji = this.list[i].totalMoney + this.list[i].taxMoney
          }
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
    },
    // 清空搜索条件
    restFilter() {
      this.supplierId = ''
      this.getemplist.supplierId = ''
    },
    restFilter2() {
      this.stockPersonId = ''
      this.getemplist.stockPersonId = ''
    },
    restFilter3() {
      this.handlePersonId = ''
      this.getemplist.handlePersonId = ''
    },
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      if (this.date === null || this.date === undefined || this.date === '') {
        this.getemplist.beginTime = ''
        this.getemplist.endTime = ''
      } else {
        this.getemplist.beginTime = this.date[0]
        this.getemplist.endTime = this.date[1]
      }
      stockOrderExecute(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          for (let i = 0; i < this.list.length; i++) {
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].productCategory === null) {
                this.list[i].productCategory = ''
              }
              if (this.getemplist.type === '1') {
                this.list[i].name = this.list[i].supplierTypeName
              }
              if (this.getemplist.type === '2') {
                this.list[i].name = this.list[i].productCategory
              }
              if (this.getemplist.type === '3') {
                this.list[i].name = this.list[i].supplierName
              }
              if (this.getemplist.type === '4') {
                this.list[i].name = this.list[i].supplierName
              }
              this.list[i].heji = this.list[i].totalMoney + this.list[i].taxMoney
            }
          }
          this.total = res.data.data.content.totalCount
          // this.restFilter()
        } else {
          // this.restFilter()
        }
      })
    },
    // 采购人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 采购人回显
    stockName(val) {
      this.handlePersonId = val.personName
      this.getemplist.handlePersonId = val.id
    },
    // 供应商输入框focus事件触发
    handlechoose() {
      this.empcontrol = true
    },
    // 供应商列表返回数据
    supplierName(val) {
      console.log(val)
      this.supplierId = val.supplierName
      this.getemplist.supplierId = val.id
    },
    // 修改操作
    handleEdit(row) {
      console.log(row)
      this.editVisible = true
      this.personalForm = Object.assign({}, row)
      this.personalForm.sourceType = String(row.sourceType)
      if (row.currency !== null) {
        this.personalForm.currency = String(row.currency)
      }
      if (row.customerType !== null) {
        this.personalForm.customerType = String(row.customerType)
      }
      if (row.saleType !== null) {
        this.personalForm.saleType = String(row.saleType)
      }
      if (row.payType !== null) {
        this.personalForm.payType = String(row.payType)
      }
    },
    // 修改组件修改成功后返回
    refreshlist(val) {
      if (val === true) {
        this.getlist()
      }
    },
    // 详情操作
    handleDetail(row) {
      console.log(row)
      this.detailvisible = true
      this.personalForm = Object.assign({}, row)
    },
    // 判断审核按钮
    isReview(row) {
      if (row.approvalUseVos !== '' && row.approvalUseVos !== null && row.approvalUseVos !== undefined && row.approvalUseVos.length !== 0) {
        const approvalUse = row.approvalUseVos
        const index = approvalUse[approvalUse.length - 1].stepHandler.indexOf(',' + this.$store.getters.userId + ',')
        console.log(approvalUse[approvalUse.length - 1].stepHandler)
        console.log(index)
        if (index > -1 && (row.judgeStat === 1 || row.judgeStat === 0)) {
          return true
        }
      }
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      console.log(val)
      this.repositoryId = val.repositoryName
      this.getemplist.repositoryId = val.id
    },
    // 部门列表focus刷新
    updatedept() {
      this.getlist()
    },
    // 交货人foucs事件触发
    handlechooseDelivery() {
      this.deliverycontrol = true
    },
    deliveryName(val) {
      this.deliveryPersonId = val.personName
      this.getemplist.deliveryPersonId = val.id
    },
    // 验收人focus事件触发
    handlechooseAccept() {
      this.accetpcontrol = true
    },
    acceptName(val) {
      this.acceptPersonId = val.personName
      this.getemplist.acceptPersonId = val.id
    }
  }
}
</script>

<style rel="stylesheet/css" scoped>
  .ERP-container >>>  .el-form-item__label{
    color: #909399;
    text-align: left;
  }
  .app-container >>> .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 24px;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .ERP-container {
    margin: 0px 10px;
  }
  .filter-container{
    padding: 20px;
    padding-left: 0px;
  }
  .filter-item{
    width: 140px;
    margin-left: 0px;
  }
  .normal >>> .el-dialog__header {
    padding: 20px 20px 10px;
    background: #fff;
    position: static;
    top: auto;
    z-index: auto;
    width: auto;
    border-bottom: none;
  }
  .normal >>> .el-dialog {
    -webkit-transform: none;
    transform: none;
    left: 0;
    position: relative;
    margin: 0 auto;
    height: auto;
  }
</style>
