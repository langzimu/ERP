<template>
  <el-dialog :visible.sync="productVisible" :materialcontrol="materialcontrol" :close-on-press-escape="false" :title="$t('Hmodule.xzsp')" top="10px" append-to-body @close="$emit('update:materialcontrol', false)">
    <div class="filter-container">
      <!-- 搜索条件栏目111 -->
      <el-input v-model="getemplist.bomNumber" :placeholder="$t('MaterialsList.bomNumber')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
      <el-select v-model="getemplist.bomTypeId" :value="getemplist.bomTypeId" class="filter-item" clearable>
        <el-option value="1" label="工艺BOM"/>
        <el-option value="2" label="设计BOM"/>
        <el-option value="3" label="制造BOM"/>
      </el-select>
      <el-input v-model="getemplist.productName" :placeholder="$t('MaterialsList.productName')" class="filter-item" clearable @keyup.enter.native="handleFilter"/>

      <!--      <el-input v-model="supplierid" :placeholder="$t('Product.supplierid')" class="filter-item" clearable @keyup.enter.native="handleFilter" @focus="handlechoose"/>-->
      <!--      <my-supplier :control.sync="empcontrol" @supplierName="supplierName"/>-->
      <!--      <el-input v-model="categoryid" :placeholder="$t('Hmodule.wpfl')" class="filter-item" clearable @focus="treechoose"/>-->
      <!-- 更多搜索条件下拉栏 -->
      <!--      <el-popover-->
      <!--        v-model="visible2"-->
      <!--        placement="bottom"-->
      <!--        width="500"-->
      <!--        trigger="click">-->
      <!--        <el-select v-model="getemplist.typeid" :placeholder="$t('Hmodule.qxzggxh')" clearable style="width: 40%;float: left;margin-left: 20px">-->
      <!--          <el-option-->
      <!--            v-for="(item, index) in types"-->
      <!--            :key="index"-->
      <!--            :label="item.categoryName"-->
      <!--            :value="item.id"-->
      <!--          />-->
      <!--        </el-select>-->
      <!--        <el-select v-model="getemplist.isactive" :placeholder="$t('Hmodule.qxzsxj')" clearable style="width: 40%;float: right;margin-right: 20px">-->
      <!--          <el-option :label="$t('Hmodule.s1')" value="1"/>-->
      <!--          <el-option :label="$t('Hmodule.x2')" value="2"/>-->
      <!--        </el-select>-->
      <!--        <div class="seachbutton" style="width: 100%;float: right;margin-top: 20px">-->
      <!--          <el-button v-waves class="filter-item" type="primary" style="float: right" @click="handleFilter">{{ $t('public.search') }}</el-button>-->
      <!--        </div>-->
      <!--        <el-button v-waves slot="reference" type="primary" class="filter-item" style="width: 130px" @click="visible2 = !visible2">{{ $t('public.filter') }}<svg-icon icon-class="shaixuan" style="margin-left: 4px"/></el-button>-->
      <!--      </el-popover>-->
      <!-- 搜索按钮 -->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" style="width: 86px" @click="handleFilter">{{ $t('public.search') }}</el-button>
      <!-- 新建操作 -->
      <el-button v-waves class="filter-item" icon="el-icon-plus" type="success" style="width: 86px" @click="handleAdd">{{ $t('public.add') }}</el-button>
    </div>
    <!-- 列表开始 -->
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
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55"
        align="center"/>
      <el-table-column :label="$t('MaterialsList.bomNumber')" :resizable="false" align="center" min-width="150" fixed="left">
        <template slot-scope="scope">
          <span>{{ scope.row.bomNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('MaterialsList.productName')" :resizable="false" align="center" min-width="150" fixed="left">
        <template slot-scope="scope">
          <span>{{ scope.row.productName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('MaterialsList.code')" :resizable="false" align="center" min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.productCode }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('MaterialsList.bomTypeId')" :resizable="false" align="center" min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.bomTypeId | bomTypeIdFliter }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('MaterialsList.summary')" :resizable="false" prop="MaterialsListDetails" align="center" min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.summary }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('MaterialsList.judgeStat')" :resizable="false" prop="judgeStat" align="center" min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.judgeStat | judgeStatFilter }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 列表结束 -->
    <pagination v-show="total>0" :total="total" :page.sync="getemplist.pageNum" :limit.sync="getemplist.pageSize" style="padding: 0" @pagination="getlist" />
    <span slot="footer" class="dialog-footer">
      <el-button v-waves type="success" style="text-align: center;" @click="handleAddTo">{{ $t('Hmodule.sure') }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { searchUnitGroup } from '@/api/UnitGroup'
import { productlist } from '@/api/Product'
import { materialslist } from '@/api/MaterialsList'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import waves from '@/directive/waves' // Waves directive
var _that
export default {
  directives: { waves },
  components: { Pagination },
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
    bomTypeIdFliter(status) {
      const statusMap = {
        1: '工艺BOM',
        2: '设计BOM',
        3: '制造BOM'
      }
      return statusMap[status]
    }
  },
  props: {
    materialcontrol: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableHeight: 200,

      // 供应商回显
      supplierid: '',
      // 供货商控制
      empcontrol: false,
      // 规格型号数据
      types: [],
      // 物品分类控制
      treecontrol: false,
      // 物品分类回显
      categoryid: '',
      // 物品选择框控制
      productVisible: this.materialcontrol,
      // 审核传参
      reviewParms: {
        id: '',
        judgePersonId: '',
        judgeStat: ''
      },
      // 详情组件数据
      detailvisible: false,
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
      // 采购入库单列表查询加展示参数
      getemplist: {
        pageNum: 1,
        pageSize: 10,
        judgeStat: 2,
        receiptStat: 2,
        repositoryId: this.$store.getters.repositoryId,
        regionIds: this.$store.getters.regionIds
      },
      // 传给组件的数据
      personalForm: {},
      // 控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  watch: {
    materialcontrol() {
      this.productVisible = this.materialcontrol
      console.log(this.control)
      this.getlist()

      setTimeout(() => {
        this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 180
      }, 100)
    }
  },
  created() {
    this.getlist()
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    // 物料清单列表数据
    getlist() {
      this.listLoading = true
      materialslist(this.getemplist).then(res => {
        console.log('ret', res.data.data.content.list)
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
    },
    // 清空搜索条件
    restFilter() {
      this.enterRepositoryId = ''
      this.getemplist.enterRepositoryId = ''
    },
    restFilter2() {
      this.deliveryPersonId = ''
      this.getemplist.deliveryPersonId = ''
    },
    restFilter3() {
      this.acceptPersonId = ''
      this.getemplist.acceptPersonId = ''
    },
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      materialslist(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
          // this.restFilter()
        } else {
          // this.restFilter()
        }
      })
    },
    // 批量操作
    handleSelectionChange(val) {
      this.moreaction = val
    },
    // 供应商输入框focus事件触发
    handlechoose() {
      this.empcontrol = true
    },
    // 供应商列表返回数据
    supplierName(val) {
      console.log(val)
      this.supplierid = val.supplierName
      this.getemplist.supplierid = val.id
    },
    // 物品分类focus
    treechoose() {
      this.treecontrol = true
    },
    // 物品分类数据
    tree(val) {
      this.categoryid = val.categoryName
      this.getemplist.categoryid = val.id
    },
    // 新增数据
    handleAdd() {
      this.$router.push('/MaterialsList/AddMaterialsList')
      this.productVisible = false
    },
    // 物品选择添加
    async handleAddTo() {
      this.productVisible = false
      console.log('this.moreaction', this.moreaction)
      const productDetail = this.moreaction.map(function(item) {
        return {
          productCode: item.productCode,
          productName: item.productName,
          type: item.productTypeId,
          unit: item.unit,
          productType: item.productType,
          quantity: 1,
          money: 0,
          totalMoney: 0,
          enterQuantity: 0,
          damageQuantity: 0
        }
      })
      const yuan = this.moreaction.map(item => {
        return item.materialsListDetailVos
      })
      const detialproduct = [].concat.apply([], yuan)
      const finalproduct = detialproduct.map(item => {
        return {
          countNumber: 0,
          categoryName: item.productCategory,
          category: item.categoryId,
          type: item.typeId,
          typeId: item.productType,
          typeName: item.productType,
          salePrice: item.price,
          taxRate: 0,
          discountRate: 0,
          taxprice: item.price,
          locationId: '',
          productCode: item.productCode,
          productName: item.productName,
          color: item.color,
          unit: item.unit,
          quantity: item.quantity,
          batch: '',
          outQuantity: 0,
          damageQuantity: 0,
          productType: item.productType
        }
      })
      console.log('productDetail', productDetail)
      console.log('finalproduct', finalproduct)
      this.$emit('product4', productDetail)
      this.$emit('detailproduct', finalproduct)
    }
  }
}
</script>

<style scoped>
  .ERP-container {
    margin: 50px 30px;
  }
  .filter-item{
    width: 150px;
    margin-left: 20px;
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
