<template>
  <el-row>
    <el-col :span="24">
      <span
        style="
          float: left;
          margin-left: 20px;
          font-size: 14px;
          font-family: microsoft yahei;
        "
        >日期</span
      >
      <el-date-picker
        style="width: 240px; float: left; margin-left: 15px"
        v-model="searchObj.search_date"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="Select Date"
      >
      </el-date-picker>

      <el-button
        :loading="loadingBt"
        type="primary"
        plain
        style="margin-left: 20px; float: left; margin-top: 10px"
        @click="searchTable"
        >搜索</el-button
      >
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "orderListHeader",
  data() {
    return {
      loadingBt: false,
      searchObj: {
        search_date: "",
        searchKeyword: "",
      },
    };
  },
  methods: {
    searchTable() {
      this.$emit("showOrderList", {
        searchData: this.searchObj,
        loading: this.loadingBt,
      });
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  max-height: 60px;
}
.el-col {
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
}
</style>
