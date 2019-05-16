<template>
  <div class="container p-0">
    <div v-for="(item, index) in rowData" class="row p-0 d-flex bd-highlight mb-3">
      <div v-for="(item1, index1) in item" 
        @click="selectGridItem(index, index1)" 
        class="col p-0 rounded ml-2 bd-highlight border border-dark"
        :class="{'highlighted': index === selectedGridItem.row && index1 === selectedGridItem.col}">
          <div v-if="item1.type === 'default'">{{item1.value}}</div>
          <div class="img-container" v-else-if="item1.type === 'image'"><img class="myImg" :src="item1.value"></div>
          <div v-else-if="item1.type === 'text'" class="text-container"><input type="text" class="form-control" placeholder="ENETR TEXT" @change="onCompleteInput"></div>
        </div>
    </div>
    <button type="button" @click="hideSideBar(false)" class="btn btn-primary fixed-top">menu</button>
    <div class="menu-container p-0 col-4 fixed-top" :class="{'hide': isSideBar}">
      <div class="navSideBar p-0 col-12 ">
        <div class="heading col-8">MENU</div>
        <div class="back col-4 border border-pink" @click="hideSideBar(true)">&lt;</div>
      </div>
      <div class="menuGrid p-0 mt-6 col-12">
        <button type="button" v-for="(item, index) in customizeValues" 
        class="gridItem p-0 mt-4 col-sm-4 m-1 text-wrap"
        @click="customize(item.action)">{{item.label}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      rowData: [
        [
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          }
        ],
        [
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          }
        ],
        [
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          },
          {
            type: 'default',
            value: 'new component',
          }
        ],
      ],
      customizeValues: [
        {
          label: 'ADD ROW',
          action: 'addRow',
        },
        {
          label: 'DELETE ROW',
          action: 'delRow',
        },
        {
          label: 'ADD COL',
          action: 'addCol',
        },
        {
          label: 'DEL COL',
          action: 'delCol',
        },
        {
          label: 'MODIFY TEXT',
          action: 'text',
        },
        {
          label: 'ADD IMAGE',
          action: 'image',
        },
      ],
      selectedGridItem: {
        row: -1,
        col: -1,
      },
      maxColumns: 5,
      isSideBar: true,
    };
  },
  methods: {
    selectGridItem(row, col) {
      if (this.selectedGridItem.row === row && this.selectedGridItem.col === col) {
        row = -1;
        col = -1;
      }
      this.selectedGridItem.row = row;
      this.selectedGridItem.col = col;
    },
    hideSideBar(val) {
      this.isSideBar = val;
    },
    customize(data) {
      const obj = {
        type: 'default',
        value: 'new component',
      };
      if (data === 'addRow' && this.selectedGridItem.row >=0) {
        this.rowData.splice(this.selectedGridItem.row + 1, 0, [obj]);
        this.clearSelected();
      } else if (data === 'addCol' && this.selectedGridItem.col >= 0 && this.rowData[this.selectedGridItem.row].length < this.maxColumns) {
        this.rowData[this.selectedGridItem.row].splice(this.selectedGridItem.col + 1, 0, obj);
        this.clearSelected();
      } else if (data === 'delRow' && this.selectedGridItem.row >=0) {
        this.rowData.splice(this.selectedGridItem.row, 1);
        this.clearSelected();
      } else if (data === 'delCol' && this.selectedGridItem.col >= 0) {
        this.rowData[this.selectedGridItem.row].splice(this.selectedGridItem.col, 1);
        if (this.rowData[this.selectedGridItem.row].length === 0) {
          this.rowData.splice(this.selectedGridItem.row, 1);
        }
        this.clearSelected();
      } else if (data === 'image') {
        if (this.selectedGridItem.row >= 0 && this.selectedGridItem.col >= 0) {
          let ele = document.createElement('input');
          this.addImage = true;
          ele.type = 'file';
          ele.onchange = this.uploadImg;
          ele.click();
        } 
      } else if (data === 'text') {
        this.rowData[this.selectedGridItem.row][this.selectedGridItem.col].type = 'text';
      }
      this.hideSideBar(true);
      console.log(this.rowData, this.rowData.length);
    },
    uploadImg(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        this.rowData[this.selectedGridItem.row][this.selectedGridItem.col].type = 'image';
        this.rowData[this.selectedGridItem.row][this.selectedGridItem.col].value = e.target.result;
      }
      reader.readAsDataURL(file);
    },
    onCompleteInput(e) {
        this.rowData[this.selectedGridItem.row][this.selectedGridItem.col].value = e.target.value;
        this.rowData[this.selectedGridItem.row][this.selectedGridItem.col].type = 'default';
    },
    clearSelected() {
      this.selectedGridItem.row = -1;
      this.selectedGridItem.col = -1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .container {
    // position: absolute;
    // width: 100%;
    // height: 100%;
    width: auto;
    // background-color: lavender;
    .highlighted {
      background-color: darkgray;
    }
    .row {
      // width: 100%;
      width: auto;
      flex-wrap: nowrap;
      .col {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 80px;
        .img-container {
          position: relative;
          width: 100%;
          height: 100%;
          .myImg {
            position: relative;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .menu-container {
      height: 100%;
      background-color: pink;
      transition: width 0.8s ease, opacity 0.5s ease;
      &.hide {
        width: 0;
        opacity: 0;
      }
      .navSideBar {
        height: 10%;
        display: flex;
        flex-wrap: wrap;
        .heading {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .back {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .menuGrid {
        display: flex;
        flex-wrap: wrap;
        .gridItem {
          display: flex;
          justify-content: center;
          align-items: center;;
        }
      }
    }
  }
</style>

