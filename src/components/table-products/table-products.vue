<template>
  <div :class="{'remove': removeBtn}">
    <el-table
        :data="data.list"
        class="body-14-reg table-products"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          width="41">
      </el-table-column>
      <el-table-column
          prop="image"
          label="Фото"
          width="76">
        <template slot-scope="scope">
          <img :src="scope.row.image" class="image">
        </template>
      </el-table-column>
      <el-table-column
          prop="article"
          label="Артикул"
          width="82"
      >
      </el-table-column>
      <el-table-column
          prop="brand"
          label="Бренд"
          width="112">
      </el-table-column>
      <el-table-column
          prop="name"
          label="Название"
      >
      </el-table-column>
      <el-table-column
          prop="color"
          label="Цвет"
          width="104">
        <template slot-scope="scope">
          <span class="body-14-reg color">
            <span class="color-circle" :style="`background-color: ${scope.row.color.color}`"></span>
            {{ scope.row.color.title}}
          </span>
        </template>
      </el-table-column>
      <el-table-column
          prop="status"
          label="Статус"
          class-name="status"
      >
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.status === 'Показывать' ? 'success' : 'warning'"
              class="body-14-reg status-tag"
          >{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          :width="removeBtn? 100 : 56"
      >
        <template slot="header">
          <div style="text-align: right">
            <el-button
                icon="el-icon-edit"
                circle
                style="background-color: #292B33; color: white"
            ></el-button>
            <el-button
                v-if="removeBtn"
                icon="el-icon-close"
                type="danger"
                circle
            ></el-button>
          </div>
        </template>
        <template>
          <el-button icon="el-icon-right" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        v-show="data.list.length > 10"
        class="pagination"
        background
        layout="prev, pager, next"
        :total="10">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "table-products",
  props: {
    data: {
      type: Object,
      default: {}
    },
    removeBtn: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
.table-products {
   td:first-child,
   td:last-child,
   th:first-child,
   th:last-child {
    .cell {
      padding: 0 !important;
    }
  }

  td:last-child {
    .cell {
      text-align: right;
    }
  }

  .cell {
    padding-left: 16px;
    padding-right: 16px;
    overflow: hidden;
    word-wrap: normal;
    word-break: normal;

    .color {
      display: inline-flex;
      align-items: center;
    }

    .brand {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: normal;
      word-break: normal;
      text-overflow: ellipsis;
    }
  }

  .color {
    display: inline-flex;
    align-items: center;
    .color-circle {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .image {
    height: 57px;
    width: 44px;
    border-radius: 4px;
    object-fit: contain;
  }
}
.status .cell {
  padding: 0 !important;
}
.remove .status .cell {
  overflow: unset;
}

.pagination {
  margin-top: 12px;
  text-align: right;
  padding-right: 0;
}
</style>