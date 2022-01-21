<!--<template>-->
<!--  <div class="">-->
<!--    <a-button type="dashed">A1 页面</a-button>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  name: 'a1',-->
<!--  data() {-->
<!--    return {}-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang=""></style>-->

<template>
  <div>
    <a-table :pagination="false" :columns="columns" :data-source="data">
    <span slot="action" slot-scope="text, record">
      <a>Delete</a>
      <a-divider type="vertical" />
      <a>Delete</a>
    </span>
    </a-table>
    <div class="ant-pagination">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data() {
    return {
      data,
      columns,
      current: 1
    }
  }
}
</script>

<style lang="less">
&.ant-pagination {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  
}

</style>

