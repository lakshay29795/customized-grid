import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    grid: {
      namespaced: true,
      state: {
        showColSideBar: false,
        showEleSideBar: false,
        isAddText: false,
        rowData: [],
        addNewRow: {
          type: 'outer', // inner, outer
          outerIdx: 0,
          innerIdx: -1,
        },
        selectedData: {
          outerIdx: -1,
          innerRowIdx: -1,
          innerColIdx: -1,
        },
      },
      mutations: {
        SET_EVENTS(state, obj) {
          if ('showColSideBar' in obj) state.showColSideBar = obj.showColSideBar;
          if ('showEleSideBar' in obj) state.showEleSideBar = obj.showEleSideBar;
          if ('isAddText' in obj) state.isAddText = obj.isAddText;
          if ('row' in obj) state.row = obj.row;
          if('col' in obj) state.col = obj.col;
          if ('addNewRow' in obj) {
            state.addNewRow.type = obj.addNewRow.type;
            state.addNewRow.outerIdx = obj.addNewRow.outerIdx;
            state.addNewRow.innerIdx = obj.addNewRow.innerIdx;
          }
          if ('selectedData' in obj) {
            state.selectedData.outerIdx = obj.selectedData.outerIdx;
            state.selectedData.innerRowIdx = obj.selectedData.innerRowIdx;
            state.selectedData.innerColIdx = obj.selectedData.innerColIdx;
          }
        },
        UPDATE_ROW_DATA(state, obj) {
          const { type, outerIdx, innerRowIdx, innerColIdx, data } = obj;
          if (innerColIdx > -1) {
            Vue.set(state.rowData[outerIdx][innerRowIdx], innerColIdx, data);
            // state.rowData[outerIdx][innerRowIdx][innerColIdx] = data;
          } else if (type === 'outer') {
            state.rowData.splice(outerIdx + 1, 0 , data);
          } else if (type === 'inner') {
            state.rowData[outerIdx].splice(innerRowIdx + 1, 0, data);
          }
        },
        SWAP_ROWS(state, obj) {
          const {outerIdx, innerIdx, type, upDown } = obj;
          if (type === 'outer') {
            if (upDown === 'up' && outerIdx > 0) {
              const temp = state.rowData[outerIdx];
              Vue.set(state.rowData, outerIdx, state.rowData[outerIdx - 1]);
              Vue.set(state.rowData, outerIdx - 1, temp);
            } else if (upDown === 'down' && outerIdx < state.rowData.length - 1) {
              const temp = state.rowData[outerIdx];
              Vue.set(state.rowData, outerIdx, state.rowData[outerIdx + 1]);
              Vue.set(state.rowData, outerIdx + 1, temp);
            }
          } else if (type === 'inner') {
            if (upDown === 'up' && innerIdx > 0) {
              const temp = state.rowData[outerIdx][innerIdx];
              Vue.set(state.rowData[outerIdx], innerIdx, state.rowData[outerIdx][innerIdx - 1]);
              Vue.set(state.rowData[outerIdx], innerIdx - 1, temp);
            } else if (upDown === 'down' && outerIdx < state.rowData[outerIdx].length - 1) {
              const temp = state.rowData[outerIdx][innerIdx];
              Vue.set(state.rowData[outerIdx], innerIdx, state.rowData[outerIdx][innerIdx + 1]);
              Vue.set(state.rowData[outerIdx], innerIdx + 1, temp);
            }
          }
        }
      },
      actions: {
      }
    }
  }
})
