<template>
  <el-dialog
      :visible.sync="isVisible"
      @closed="$emit('closed')"
      width="1204px"
      custom-class="select-table-modal"
  >
    <div class="head-24-s title">
      Таблицы размеров <span class="limit">10</span>
    </div>
    <el-table
        :data="tableSize"
        ref="sizeTable"
        max-height="552"
        style="width: 100%; margin-top: 16px"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="46">
      </el-table-column>
      <el-table-column
          prop="id"
          label="ID"
          width="57">
      </el-table-column>
      <el-table-column
          prop="image"
          label="Фото"
          width="85">
        <template slot-scope="scope">
          <img :src="scope.row.image" class="image">
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="Название">
      </el-table-column>
    </el-table>
    <save-notification
        v-show="multipleSelection.length"
        class="save-notification"
        type="save"
        :text="`Выбрано ${multipleSelection.length}/${tableSize.length}`"
        @clearAll="toggleSelection()" />
  </el-dialog>
</template>

<script>
import saveNotification from "@/components/save-notification/save-notification.vue"

export default {
  name: "table-size-modal",
  data() {
    return {
      tableSize: [
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
        {
          id: 1,
          image: 'https://www.meme-arsenal.com/memes/6ff0361592a987331d8ac83f9e2229d9.jpg',
          name: 'Таблица размеров'
        },
      ],
      multipleSelection: [],
      isVisible: true
    }
  },
  components: {
    saveNotification
  },
  methods: {
    toggleSelection() {
        this.$refs.sizeTable.clearSelection();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  }
}
</script>

<style lang="scss" src="./table-size-modal.scss"></style>
