<template>
  <el-container>
    <el-header
      ><order-list-header @showOrderList="getSearchData"></order-list-header
    ></el-header>
    <el-main
      ><el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column> </el-table
    ></el-main>
    <el-footer
      ><el-pagination
        background
        @current-change="handleCurrentChangeForDialog"
        :current-page.sync="currentPage1"
        :page-size="10"
        layout=" prev, pager, next"
        :total="countPage"
      >
      </el-pagination
    ></el-footer>
  </el-container>
</template>
<script>
import OrderListHeader from "./orderListHeader";
export default {
  components: { OrderListHeader },
  data() {
    return {
      currentPage1: 1,
      countPage: 0,
      currIndex: 1,
      countNub: 0,
      search_date: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    pageTurning(opt) {
      this.currIndex = opt.nowPage + 1;
      this.showOrderList();
    },
    handleCurrentChangeForDialog(val) {
      this.currentPage1 = val;
      this.showOrderList();
    },
    showOrderList() {
      let param = {
        companyId: "1001",
        keyWord: this.searchKeyword,
        startTime: this.search_date,
        pageNum: this.currIndex,
        pageSize: 10,
        timestamp: new Date().getTime(),
      };
      this.axios({
        url: "/order/showList",
        method: "post",
        data: this.$qs.parse(this.param),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => {
          if (res.data.code == "0") {
            this.$message({
              message: "success",
              type: "success",
              duration: 3000,
              offset: 200,
            });
            let resultDta = res.data.data;
            this.tableData = resultDta.list;
            this.countNub = resultDta.total;
          } else {
            this.$message({
              message: "Failed to get data",
              type: "error",
              duration: 3000,
              offset: 200,
            });
          }
        })
        .catch((error) => {
          this.$message({
            message: "System exception",
            type: "error",
            duration: 3000,
            offset: 200,
          });
        });
    },
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;

  line-height: 60px;
}
.el-footer {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 20%;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>