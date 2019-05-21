<template>
  <div class="hl_page-creator--row" :class="{active: rowHover}">
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Up">
          <i class="icon icon-arrow-up-2" @click="swapRow('up', rowIdx)"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Down">
          <i class="icon icon-arrow-down-2" @click="swapRow('down', rowIdx)"></i>
        </span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="top" title="Settings">
          <i class="fas fa-cog"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Clone">
          <i class="far fa-eye"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Save">
          <i class="far fa-copy"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="top" title="Delete">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
    <span class="add-new-row" data-tooltip="tooltip" data-placement="bottom" title="Add New Row">
      <i class="icon icon-plus" @click="addRow"></i>
    </span>
    <template v-for="(elem, colIdx) in item">
      <div v-if="elem.label === 'empty'" class="hl_page-creator--column" :key="colIdx">
        <div href="#" class="new-element-blank">
          <span @click="addElement(rowIdx, colIdx)" class="btn btn-light6 btn-slim">Add New Element</span>
        </div>
      </div>
      <div v-else-if="elem.label === 'text'" class="hl_page-creator--column" :key="colIdx">
        <div class="hl_page-creator--element">
          <div class="hl_page-creator--actions">
            <div class="more-actions">
              <span data-tooltip="tooltip" data-placement="top" title="Move">
                <i class="fas fa-arrows-alt"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Clone">
                <i class="far fa-eye"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Save">
                <i class="far fa-copy"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Delete">
                <i class="far fa-trash-alt"></i>
              </span>
            </div>
          </div>
          <span
            class="add-new-element"
            data-tooltip="tooltip"
            data-placement="bottom"
            title="Add New Element"
          >
            <i class="icon icon-plus"></i>
          </span>
          <div class="element-container">
            <h3 v-if="elem.value === ''">Your Text Goes Here</h3>
            <h3>{{elem.value}}</h3>
          </div>
        </div>
      </div>
      <div v-else-if="elem.label === 'image'" class="hl_page-creator--column" :key="colIdx">
        <div class="hl_page-creator--element">
          <div class="hl_page-creator--actions">
            <div class="more-actions">
              <span data-tooltip="tooltip" data-placement="top" title="Move">
                <i class="fas fa-arrows-alt"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Clone">
                <i class="far fa-eye"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Save">
                <i class="far fa-copy"></i>
              </span>
              <span data-tooltip="tooltip" data-placement="top" title="Delete">
                <i class="far fa-trash-alt"></i>
              </span>
            </div>
          </div>
          <span
            class="add-new-element"
            data-tooltip="tooltip"
            data-placement="bottom"
            title="Add New Element"
          >
            <i class="icon icon-plus"></i>
          </span>
          <div class="element-container">
            <!-- <h3 v-if="elem.value === ''">Your Text Goes Here</h3>
            <h3>{{elem.value}}</h3>-->
            <img class="myImg" :src="elem.value">
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import insideRow from './insideRow';
export default {
  props: {
    item: {
    },
    rowIdx: {
    },
    rowHover: {
    },
    outerIdx: {

    }
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations('grid', {
      setEvent: 'SET_EVENTS',
      setSwapRow: 'SWAP_ROWS',
    }),
    addRow() {
      // this.numRows++;
      this.setEvent({'showColSideBar': true, 'addNewRow': {type: 'inner', outerIdx: this.outerIdx, innerIdx: this.rowIdx}});
      // this.showColSideBar = true;
    },
    addElement(row, col) {
      this.setEvent({'showEleSideBar': true});
      // this.showEleSideBar = true;
      this.setEvent({'selectedData': {'outerIdx': this.outerIdx, 'innerRowIdx': row, 'innerColIdx': col}});
      // this.row = row;
      // this.col = col;
    },
    swapRow(upDown, innerIdx) {
      this.setSwapRow({'type': 'inner', 'upDown': upDown, 'outerIdx': this.outerIdx, 'innerIdx': innerIdx});
    }
  },
  components: {
    insideRow,
  },
}
</script>
<style lang="scss" scoped>
.myImg {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 100px;
  max-height: 100px;
}
.hl_page-creator--column {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>