<template>
  <el-dialog :visible.sync="employeeVisible" :arrivalcontrol="arrivalcontrol" :close-on-press-escape="false" top="10px" title="选择采购到货单" append-to-body width="1100px" @close="$emit('update:arrivalcontrol', false)">
    <el-card class="box-card" style="margin-top: 15px;height: 60px;padding-left:0 " shadow="never">
      <el-row>
        <el-form ref="getemplist" :model="getemplist" style="margin-top: -9px">
          <el-col :span="4">
            <el-form-item>
              <el-input v-model="getemplist.title" :placeholder="$t('StockPlan.title')" clearable @keyup.enter.native="handleFilter"/>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 5px">
            <el-form-item>
              <el-input v-model="getemplist.number" :placeholder="$t('updates.djbh')" clearable @keyup.enter.native="handleFilter"/>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 20px">
            <el-form-item>
              <el-input v-model="stockPersonId" :placeholder="$t('StockArrival.stockPersonId')" clearable @keyup.enter.native="handleFilter" @focus="handlechooseStock" @clear="restFilter2"/>
            </el-form-item>
            <my-emp :control.sync="stockControl" @stockName="stockName"/>
          </el-col>
          <!--更多搜索条件-->
          <el-col :span="3" style="margin-left: 30px">
            <el-popover
              v-model="visible2"
              placement="bottom"
              width="500"
              trigger="click">
              <el-select v-model="getemplist.deptId" :placeholder="$t('updates.dept')" clearable style="width: 40%;float: left;margin-left: 20px">
                <el-option
                  v-for="(item, index) in depts"
                  :key="index"
                  :value="item.id"
                  :label="item.deptName"/>
              </el-select>
              <el-input v-model="supplierId" placeholder="供应商" style="width: 40%;float: right;margin-right: 20px;" clearable @focus="handlechoose" @clear="restFilter"/>
              <my-supplier :control.sync="empcontrol" @supplierName="supplierName"/>
              <el-select v-model="getemplist.receiptStat" :value="getemplist.receiptStat" :placeholder="$t('updates.djzt')" clearable style="width: 40%;float: left;margin-left: 20px;margin-top: 20px">
                <el-option :label="$t('updates.zd')" value="1"/>
                <el-option :label="$t('updates.zx')" value="2"/>
                <el-option :label="$t('updates.jd')" value="3"/>
              </el-select>
              <el-select v-model="getemplist.judgeStat" :value="getemplist.judgeStat" :placeholder="$t('updates.spzt')" clearable style="width: 40%;float: right;margin-right: 20px;margin-top: 20px">
                <el-option :label="$t('updates.wsh')" value="0"/>
                <el-option :label="$t('updates.shz')" value="1"/>
                <el-option :label="$t('updates.shtg')" value="2"/>
                <el-option :label="$t('updates.shptg')" value="3"/>
              </el-select>
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="-"
                unlink-panels
                start-placeholder="询价日期"
                end-placeholder="询价日期"
                value-format="yyyy-MM-dd"
                style="margin-top: 20px;margin-left: 20px"/>
              <div class="seachbutton" style="width: 100%;float: right;margin-top: 20px">
                <el-button v-waves class="filter-item" type="primary" style="float: right" round @click="handleFilter">{{ $t('public.search') }}</el-button>
              </div>
              <el-button v-waves slot="reference" type="primary" class="filter-item" style="width: 130px" @click="visible2 = !visible2">{{ $t('public.filter') }}<svg-icon icon-class="shaixuan" style="margin-left: 4px"/></el-button>
            </el-popover>
          </el-col>
          <el-col :span="3" style="margin-left: 20px">
            <!-- 搜索按钮 -->
            <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" round @click="handleFilter">{{ $t('public.search') }}</el-button>
          </el-col>
          <el-col :span="3">
            <el-button v-waves class="filter-item" icon="el-icon-plus" type="success" style="width: 86px" @click="handleAdd">{{ $t('public.add') }}</el-button>
          </el-col>
        </el-form>
      </el-row>
    </el-card>
    <el-card class="box-card" style="margin-top: 15px" shadow="never">
      <!-- 列表开始123 -->
      <el-table
        v-loading="listLoading"
        ref="table"
        :key="tableKey"

        :data="list"
        :height="tableHeight"
        size="small"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @current-change="handleCurrentChange">
        <el-table-column :label="$t('public.id')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <!-- <span>{{ scope.row.number }}</span> -->
            <el-popover
              placement="right"
              width="720"
              trigger="hover">
              <el-table :data="scope.row.stockArrivalDetailVos" border size="small">
                <el-table-column :label="$t('Hmodule.wpbh')" min-width="200" property="productCode"/>
                <el-table-column :label="$t('Hmodule.wpmc')" min-width="200" property="productName"/>
                <el-table-column :label="$t('Hmodule.gg')" min-width="100" property="typeName       "/>
                <el-table-column :label="$t('updates.dhsl')" min-width="100" property="arrivalQuantity"/>
                <!-- <el-table-column :label="$t('updates.jhrq')" min-width="200" property="deliveryDate"/> -->
                <el-table-column :label="$t('updates.ys')" min-width="100" property="color"/>
                <el-table-column :label="$t('Hmodule.dw')" min-width="100" property="unit"/>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="small">{{ scope.row.number }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.title')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.stockTypeId')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.stockType | stockTypeFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.sourceType')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.sourceType | sourceTypeFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.stockPersonId')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.stockPersonName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.supplierId')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.supplierName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.allMoney')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.allMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.allTaxMoney')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.allTaxMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('StockArrival.allIncludeTaxMoney')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.allIncludeTaxMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('public.judgeStat')" :resizable="false" prop="judgeStat" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.judgeStat | judgeStatFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('public.receiptStat')" :resizable="false" align="center" min-width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.receiptStat | receiptStatFilter }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 列表结束 -->
      <pagination v-show="total>0" :total="total" :page.sync="getemplist.pageNum" :limit.sync="getemplist.pageSize" @pagination="getlist" />
      <!--修改开始=================================================-->
      <el-button v-waves class="filter-item" type="success" style="width: 100px;float: left;margin-bottom: 10px" @click="handleConfirm">{{ $t('Hmodule.sure') }}</el-button>
    </el-card>
  </el-dialog>
</template>

<script>
import { searchstockArrival2 } from '@/api/StockArrival'
import { getdeptlist } from '@/api/BasicSettings'
import { searchStockCategory } from '@/api/StockCategory'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination'
import MyEmp from './MyEmp'
import MySupplier from './MySupplier'
var _that
export default {
  directives: { waves },
  components: { MyEmp, Pagination, MySupplier },
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
    sourceTypeFilter(status) {
      const statusMap = {
        1: _that.$t('updates.cgdd'),
        2: _that.$t('Hmodule.Nosource')
      }
      return statusMap[status]
    }
  },
  props: {
    arrivalcontrol: {
      type: Boolean,
      default: false
    },
    repositoryid: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tableHeight: 200,

      // 选择框控制
      employeeVisible: this.arrivalcontrol,
      // 类别获取参数
      typeparms: {
        pagenum: 1,
        pagesize: 99999
      },
      // 采购类别数据
      types: [],
      // 申请部门数据
      depts: [],
      // 审核传参
      reviewParms: {
        id: '',
        judgePersonId: '',
        judgeStat: ''
      },
      // 详情组件数据
      detailvisible: false,
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
        pageSize: 100,
        judgeStat: 2, receiptStat: 2,
        repositoryId: this.$store.getters.repositoryId,
        regionIds: this.$store.getters.regionIds,
        isActive: 1
      },
      // 传给组件的数据
      personalForm: {},
      // 修改控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  watch: {
    arrivalcontrol() {
      this.employeeVisible = this.arrivalcontrol
      if (this.arrivalcontrol) {
        this.getlist()
      }
      setTimeout(() => {
        this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 180
      }, 100)
    }
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    // 更新采购类型
    updatecountry() {
      this.getlist()
    },
    getlist() {
      // 物料需求计划列表数据
      this.listLoading = true
      if (this.repositoryid) {
        console.log('repositoryid', this.repositoryid)
        this.getemplist.repositoryId = this.repositoryid.enterRepositoryId
      }
      searchstockArrival2(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          // 判断数组中产品过检数量 - 已入库数量是否小于0
          // console.log('处理前', this.list)
          for (let i = 0; i < this.list.length; i++) {
            for (let j = 0; j < this.list[i].stockArrivalDetailVos.length; j++) {
              if (this.list[i].stockArrivalDetailVos[j].qualifyQuantity - this.list[i].stockArrivalDetailVos[j].hadStorageQuantity <= 0 && this.list[i].stockArrivalDetailVos[j].productCode.slice(0, 2) !== '04') {
                this.list[i].stockArrivalDetailVos.splice(j, 1)
                j--
              }
            }
          }
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].stockArrivalDetailVos.length === 0) {
              this.list.splice(i, 1)
              i--
            }
          }
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
      // 部门列表数据
      getdeptlist().then(res => {
        if (res.data.ret === 200) {
          this.depts = res.data.data.content
        }
      })
      // 采购类别数据
      searchStockCategory(this.typeparms).then(res => {
        if (res.data.ret === 200) {
          this.types = res.data.data.content.list
        }
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
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      this.getlist()
    },
    // 采购人focus事件
    handlechooseStock() {
      this.stockControl = true
    },
    // 采购人回显
    stockName(val) {
      this.stockPersonId = val.personName
      this.getemplist.stockPersonId = val.id
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
    // 新增数据
    handleAdd() {
      this.$router.push('/StockArrival/AddStockArrival')
    },
    // 选择主生产计划数据时的操作
    handleCurrentChange(val) {
      this.choosedata = val
    },
    // 确认添加数据
    async handleConfirm() {
      this.employeeVisible = false
      console.log('1231231', this.choosedata)
      const arrivaldata = this.choosedata.stockArrivalDetailVos
      const number = this.choosedata.number
      const arrivalDetail = arrivaldata.map(function(item) {
        console.log('item===============', item)
        return {
          productCode: item.productCode,
          productName: item.productName,
          productType: item.typeName,
          typeName: item.productType,
          type: item.type,
          typeId: item.type,
          unit: item.unit,
          color: item.color,
          basicQuantity: (Number(item.arrivalQuantity) - Number(item.hadStorageQuantity)).toFixed(6),
          actualEnterQuantity: (item.arrivalQuantity - item.hadStorageQuantity).toFixed(6),
          enterPrice: item.includeTaxPrice,
          taxRate: (item.taxRate).toFixed(6),
          enterMoney: '0.00',
          remarks: '',
          sourceSerialNumber: item.id,
          passQuantity: item.qualifyQuantity,
          orderNumber: item.sourceNumber,
          sourceNumber: number,
          // arrivalQuantity: item.arrivalQuantity,
          discountMoney: item.discountMoney,
          discountRate: item.discountRate,
          includeTaxMoney: item.includeTaxMoney,
          includeTaxPrice: item.includeTaxPrice,
          money: item.money,
          price: item.price,
          taxMoney: item.taxMoney
        }
      })
      console.log('arrivalDetail', arrivalDetail)
      this.$emit('arrival', arrivalDetail)
      this.$emit('allarrivalinfo', this.choosedata)
    }
    // 仓库管理员选择结束
  }
}
</script>

<style scoped>
  .ERP-container {
    margin: 50px 30px;
  }
  .filter-item{
    width: 140px;
  }
  .form-name{
    font-size: 18px;
    color: #373e4f;
    margin-bottom: -20px;
    margin-top: 30px;
  }
  .container{
    margin-top: 2%;
    border: 1px solid #eceff6;
  }
</style>
