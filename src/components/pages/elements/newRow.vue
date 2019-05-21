<template>
  <section
    class="hl_page-creator--section"
    @mouseover="rowHover = true"
    @mouseout="rowHover = false"
    :class="{active: rowHover}"
    :key="rowIdx"
  >
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="right" title="Up">
          <i class="icon icon-arrow-up-2" @click="swapRow('up', rowIdx)"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="right" title="Down">
          <i class="icon icon-arrow-down-2" @click="swapRow('down', rowIdx)"></i>
        </span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="left" title="Settings">
          <i class="fas fa-cog"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone">
          <i class="far fa-eye"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Save">
          <i class="far fa-copy"></i>
        </span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete">
          <i class="far fa-trash-alt"></i>
        </span>
      </div>
    </div>
    <span
      class="add-new-section"
      data-tooltip="tooltip"
      data-placement="bottom"
      title="Add New Section"
    >
      <i class="icon icon-plus" @click="addRow"></i>
    </span>
    <!-- starting of inside row -->
    <template v-for="(item1, idx1) in item">
      <inside-row :item="item1" :rowIdx="idx1" :outerIdx="rowIdx" :rowHover="rowHover" :key="idx1"></inside-row>
    </template>
  </section>
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
  },
  data() {
    return {
      rowHover: false,
    };
  },
  methods: {
    ...mapMutations('grid', {
      setEvent: 'SET_EVENTS',
      setSwapRow: 'SWAP_ROWS',
    }),
    addRow() {
      // this.numRows++;
      this.setEvent({'showColSideBar': true, 'addNewRow': {type: 'outer', outerIdx: this.rowIdx, innerIdx: -1}});
      // this.showColSideBar = true;
    },
    swapRow(upDown, outerIdx) {
      this.setSwapRow({'type': 'outer', 'upDown': upDown, 'outerIdx': outerIdx, 'innerIdx':-1});
    }
  },
  components: {
    insideRow,
  },
}
</script>
