<template>
  <div class="ERP-container">
    <!-- 搜索条件栏目 -->
    <el-card :body-style="	{ padding: '5px' }" class="box-card" style="margin-top: 5px" shadow="never">
      <el-input v-model="searchRepositoryId" :placeholder="$t('WarehouseAdjust.enterRepositoryId')" size="small" class="filter-item" clearable @keyup.enter.native="handleFilter" @focus="handlechooseRep" @clear="restFilter"/>
      <my-repository :repositorycontrol.sync="repositorycontrol" @repositoryname="repositoryname"/>
      <el-input v-model="getemplist.locationCode" :placeholder="$t('WarehouseAdjust.locationCode')" size="small" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
      <el-input v-model="getemplist.locationName" :placeholder="$t('WarehouseAdjust.locationName')" size="small" class="filter-item" clearable @keyup.enter.native="handleFilter"/>
      <!-- 搜索按钮 -->
      <el-button v-waves size="small" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('public.search') }}</el-button>
    </el-card>
    <el-card :body-style="	{ padding: '6px'}" class="box-card" shadow="never">
      <!-- 批量操作 -->
      <!-- <el-dropdown @command="handleCommand">
        <el-button v-waves class="filter-item" type="primary">
          {{ $t('public.batchoperation') }} <i class="el-icon-arrow-down el-icon--right"/>
        </el-button>
        <el-dropdown-menu slot="dropdown" style="width: 140px">
          <el-dropdown-item v-permission="['1-9-169-2']" style="text-align: left" command="delete"><svg-icon icon-class="shanchu" style="width: 40px"/>{{ $t('public.delete') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <!-- 表格导出操作 -->
      <el-button v-permission="['1-9-169-6']" v-waves :loading="downloadLoading" size="small" class="filter-item2" style="width: 60px" @click="handleExport"> <svg-icon icon-class="daochu"/>{{ $t('public.export') }}</el-button>
      <!-- 打印操作 -->
      <el-button v-permission="['1-9-169-7']" v-waves size="small" class="filter-item2" icon="el-icon-printer" style="width: 60px" @click="handlePrint">{{ $t('public.print') }}</el-button>
      <!-- 新建操作 -->
      <el-button v-permission="['1-9-169-1']" v-waves size="small" class="filter-item2" icon="el-icon-plus" type="success" style="width: 60px" @click="handleAdd">{{ $t('public.add') }}</el-button>
    </el-card>
    <el-card :body-style="	{ padding: '10px' }" class="box-card" shadow="never">
      <!-- 列表开始 -->
      <el-table
        v-loading="listLoading"
        ref="table"
        :height="tableHeight"
        :key="tableKey"
        :data="list"
        border
        fit
        size="small"
        highlight-current-row
        style="width: 100%;"
        @row-click="clickRow"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55"
          align="center"/>
        <el-table-column :label="$t('WarehouseAdjust.id')" :resizable="false" prop="id" align="center" min-width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.locationCode')" :resizable="false" prop="locationCode" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.locationCode }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.locationName')" :resizable="false" prop="locationName" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.locationName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.volume')" :resizable="false" align="center" min-width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.volume }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.length')" :resizable="false" prop="length" align="center" min-width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.length }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.width')" :resizable="false" prop="width" align="center" min-width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.width }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.height')" :resizable="false" prop="height" align="center" min-width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.height }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('WarehouseAdjust.enterRepositoryId')" :resizable="false" prop="repositoryName" align="center" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.repositoryName }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('BasicSettings.iseffective3')" :resizable="false" prop="gender" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.isEffective | iseffectiveFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('public.actions')" :resizable="false" align="center" min-width="230">
          <template slot-scope="scope">
            <el-button v-permission="['1-9-169-8']" v-show="scope.row.isEffective === 2" style="margin-left: 18px;" title="启用" type="primary" size="mini" icon="el-icon-check" circle @click="open(scope.row)"/>
            <el-button v-permission="['1-9-169-9']" v-show="scope.row.isEffective === 1" title="停用" type="primary" size="mini" icon="el-icon-close" circle @click="close(scope.row)"/>
            <el-button v-permission="['1-9-169-3']" type="primary" size="mini" @click="handleEdit(scope.row)">{{ $t('public.edit') }}</el-button>
            <el-button v-permission="['1-9-169-2']" size="mini" type="danger" @click="handleDelete(scope.row)">{{ $t('public.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 列表结束 -->
      <pagination v-show="total>0" :total="total" :page.sync="getemplist.pageNum" :limit.sync="getemplist.pageSize" @pagination="getlist" />
      <!--修改开始=================================================-->
      <my-location :editcontrol.sync="editVisible" :editdata.sync="personalForm" @rest="refreshlist"/>
      <!--修改结束=================================================-->
    </el-card>
  </div>
</template>

<script>
import { locationlistByEff, deletelocation, updatelocation } from '@/api/WarehouseAdjust'
import permission from '@/directive/permission/index.js' // 权限判断指令
import permission2 from '@/directive/permission2/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import MyLocation from './components/MyLocation'
import MyRepository from '../Inventorydamaged/components/MyRepository'

var _that
export default {
  name: 'Locationlist',
  directives: { waves, permission, permission2 },
  components: { MyRepository, Pagination, MyLocation },
  filters: {
    iseffectiveFilter(status) {
      const statusMap = {
        1: '启用',
        2: '停用'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableHeight: 200,
      // 仓库回显
      searchRepositoryId: '',
      // 仓库控制
      repositorycontrol: false,
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
      // 货位单列表查询加展示参数
      getemplist: {
        pageNum: 1,
        pageSize: 10,
        repositoryId: this.$store.getters.repositoryId,
        regionIds: this.$store.getters.regionIds
      },
      // 传给组件的数据
      personalForm: {},
      personalForm2: {},
      // 控制组件数据
      editVisible: false,
      // 开始时间到结束时间
      date: []
    }
  },
  activated() {
    this.getlist()
    setTimeout(() => {
      this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 140
    }, 100)
  },
  mounted() {
    this.getlist()
    setTimeout(() => {
      this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 140
    }, 100)
  },
  beforeCreate() {
    _that = this
  },
  methods: {
    clickRow(val) {
      if (val.judgeStat === 0) {
        this.$refs.table.toggleRowSelection(val)
      }
    },
    // 启用停用操作
    open(row) {
      console.log('row', row)
      this.personalForm2.id = row.id
      this.personalForm2.isEffective = 1
      const parms = JSON.stringify(this.personalForm2)
      updatelocation(parms).then(res => {
        if (res.data.ret === 200) {
          this.$notify({
            title: this.$t('prompt.czcg'),
            message: this.$t('prompt.czcg'),
            type: 'success',
            duration: 1000,
            offset: 100
          })
          this.getlist()
        } else {
          this.$notify.error({
            title: 'wrong',
            message: 'wrong',
            offset: 100
          })
        }
      })
    },
    close(row) {
      console.log('row', row)
      console.log('row.id', row.id)
      this.personalForm2.id = row.id
      this.personalForm2.isEffective = 2
      const parms = JSON.stringify(this.personalForm2)
      updatelocation(parms).then(res => {
        if (res.data.ret === 200) {
          this.$notify({
            title: this.$t('prompt.czcg'),
            message: this.$t('prompt.czcg'),
            type: 'success',
            duration: 1000,
            offset: 100
          })
          this.getlist()
        } else {
          this.$notify.error({
            title: 'wrong',
            message: 'wrong',
            offset: 100
          })
        }
      })
    },
    checkPermission,
    getlist() {
      // 货位单列表数据
      this.listLoading = true
      locationlistByEff(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
        }
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 100)
      })
      this.listLoading = false
    },
    // 清空搜索条件
    restFilter() {
      this.searchRepositoryId = ''
      this.getemplist.searchRepositoryId = ''
    },
    // 搜索
    handleFilter() {
      this.getemplist.pageNum = 1
      locationlistByEff(this.getemplist).then(res => {
        if (res.data.ret === 200) {
          this.list = res.data.data.content.list
          this.total = res.data.data.content.totalCount
          // this.restFilter()
        } else {
          this.$notify.error({
            title: 'wrong',
            message: 'wrong',
            offset: 100
          })
          // this.restFilter()
        }
      })
    },
    // 修改操作
    handleEdit(row) {
      console.log(row)
      this.editVisible = true
      this.personalForm = Object.assign({}, row)
      this.personalForm.isHot = String(row.isHot)
      this.personalForm.isEffective = String(row.isEffective)
      this.personalForm.moneyId = String(row.moneyId)
      this.personalForm.companyTypeId = String(row.companyTypeId)
    },
    // 修改组件修改成功后返回
    refreshlist(val) {
      if (val === true) {
        this.getlist()
      }
    },
    // 批量操作
    handleSelectionChange(val) {
      this.moreaction = val
    },
    // 仓库列表focus事件触发
    handlechooseRep() {
      this.repositorycontrol = true
    },
    repositoryname(val) {
      console.log(val)
      this.searchRepositoryId = val.repositoryName
      this.getemplist.searchRepositoryId = val.id
    },
    // 多条删除
    // 批量删除
    handleCommand(command) {
      const ids = this.moreaction.map(item => item.id).join()
      if (command === 'delete') {
        this.$confirm(this.$t('prompt.scts'), this.$t('prompt.ts'), {
          confirmButtonText: this.$t('prompt.qd'),
          cancelButtonText: this.$t('prompt.qx'),
          type: 'warning'
        }).then(() => {
          deletelocation(ids, this.$store.getters.userId).then(res => {
            if (res.data.ret === 200 || res.data.ret === 100) {
              this.$notify({
                title: this.$t('prompt.sccg'),
                type: 'success',
                offset: 100
              })
              this.getlist()
            } else {
              this.$notify.error({
                title: 'wrong',
                message: 'wrong',
                offset: 100
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('prompt.yqxsc')
          })
        })
      }
    },
    // 单条删除
    handleDelete(row) {
      this.$confirm(this.$t('prompt.scts'), this.$t('prompt.ts'), {
        confirmButtonText: this.$t('prompt.qd'),
        cancelButtonText: this.$t('prompt.qx'),
        type: 'warning'
      }).then(() => {
        deletelocation(row.id, this.$store.getters.userId).then(res => {
          if (res.data.ret === 200 || res.data.ret === 100) {
            this.$notify({
              title: this.$t('prompt.sccg'),
              type: 'success',
              offset: 100
            })
            this.getlist()
          } else {
            this.$notify.error({
              title: 'wrong',
              message: 'wrong',
              offset: 100
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t('prompt.yqxsc')
        })
      })
    },
    // 新增数据
    handleAdd() {
      this.$router.push('/Repository/AddLocation')
    },
    // 导出
    handleExport() {
      this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['供应商编号', '供应商名称', '供应商简称', '供应商类别', '所在区域', '采购员', '供应商优质级别', '建档人', '建档日期']
          const filterVal = ['id', 'WarehouseAdjustName', 'WarehouseAdjustShortName', 'typeName', 'regionName', 'buyerName', 'levelName', 'createName', 'createTime']
          const data = this.formatJson(filterVal, this.list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: '经销商资料表'
          })
          this.downloadLoading = false
        })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    },
    // 打印
    handlePrint() {
      console.log(456)
    }
  }
}
</script>

<style rel="stylesheet/css" scoped>
   .app-container >>> .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 24px;
    word-break: keep-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .ERP-container {
    margin-left:10px;
  }
  .filter-container{
    padding: 20px;
    padding-left: 0px;
  }
  .filter-item{
    width: 180px;
    margin-left: 10px;
    padding: 10px 0;
  }
  .filter-item2{
    width: 180px;
    margin-left: 5px;
    padding: 10px 0;
  }
  .box-card {
    /* border : 1px solid #f1f1ff !important; */
    border-bottom : 1px solid #f1f1ff00 !important
  }
</style>
