<template>
  <div>
    <section class="hl_wrapper nav-shrink d-flex">
      <section
        class="hl_wrapper--inner page-creator"
        id="page-creator"
        :class="{'--menu-active': showColSideBar || showEleSideBar}"
      >
        <section class="hl_page-creator--main">
          <div class="hl_page-creator--menu">
            <div class="menu--left">
              <button
                type="button"
                class="btn btn-light btn-sm"
                data-tooltip="tooltip"
                data-placement="top"
                title="Back"
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Desktop"
                  id="page-creator-desktop"
                >
                  <i class="fas fa-desktop"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Mobile"
                  id="page-creator-mobile"
                >
                  <i class="fas fa-mobile-alt"></i>
                </button>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Apps"
                >
                  <i class="fas fa-plug"></i>
                </button>
                <div class="dropdown" id="settings-group">
                  <button
                    type="button"
                    class="btn btn-light btn-sm dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Settings"
                  >
                    <i class="fas fa-cogs"></i>
                    <span class="btn-text">Settings</span>
                  </button>
                  <div class="dropdown-menu">
                    <div class="nav">
                      <a class="dropdown-item" data-toggle="tab" href="#integrations">Integrations</a>
                      <a class="dropdown-item" data-toggle="tab" href="#seo">SEO Meta Data</a>
                      <a class="dropdown-item" data-toggle="tab" href="#tracking">Tracking Code</a>
                      <a class="dropdown-item" data-toggle="tab" href="#css">Custom CSS</a>
                      <a class="dropdown-item" data-toggle="tab" href="#background">Background</a>
                      <a class="dropdown-item" data-toggle="tab" href="#typography">Typography</a>
                      <a class="dropdown-item" data-toggle="tab" href="#general">General</a>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-light btn-sm dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Pop up"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    <span class="btn-text">Pop up</span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Show Popup</a>
                    <a class="dropdown-item" href="#">Edit Settings</a>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Undo"
                >
                  <i class="fas fa-undo"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Redo"
                  disabled
                >
                  <i class="fas fa-redo"></i>
                </button>
              </div>
            </div>
            <div class="menu--right">
              <div class="btn-group">
                <div class="dropdown" id="section-group">
                  <button
                    type="button"
                    class="btn btn-light btn-sm dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Sections"
                  >
                    <i class="fas fa-expand"></i>
                    <span class="btn-text">Sections</span>
                  </button>
                  <div class="dropdown-menu">
                    <div class="nav">
                      <a class="dropdown-item" data-toggle="tab" href="#add-section">Add Section</a>
                      <a class="dropdown-item" data-toggle="tab" href="#manage-sections">Manage</a>
                    </div>
                  </div>
                </div>
                <div class="dropdown" id="row-group">
                  <button
                    type="button"
                    class="btn btn-light btn-sm dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Rows"
                  >
                    <i class="fas fa-bars"></i>
                    <span class="btn-text">Rows</span>
                  </button>
                  <div class="dropdown-menu">
                    <div class="nav">
                      <a
                        class="dropdown-item"
                        @click="addRow"
                        data-toggle="tab"
                        href="#add-row"
                      >Add Row</a>
                      <a class="dropdown-item" data-toggle="tab" href="#manage-rows">Manage</a>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Columns"
                  id="column-group"
                >
                  <i class="fas fa-columns"></i>
                  <span class="btn-text">Columns</span>
                </button>
                <div class="dropdown" id="element-group">
                  <button
                    type="button"
                    class="btn btn-light btn-sm dropdown-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Elements"
                  >
                    <i class="fas fa-code"></i>
                    <span class="btn-text">Elements</span>
                  </button>
                  <div class="dropdown-menu">
                    <div class="nav">
                      <a class="dropdown-item" data-toggle="tab" href="#add-element">Add Element</a>
                      <a class="dropdown-item" data-toggle="tab" href="#manage-elements">Manage</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Preview"
                >
                  <i class="far fa-eye"></i>
                  <span class="btn-text">Preview</span>
                </button>
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-tooltip="tooltip"
                  data-placement="top"
                  title="Save"
                >
                  <i class="far fa-save"></i>
                  <span class="btn-text">Save</span>
                </button>
              </div>
            </div>
          </div>

          <section v-if="rowData.length === 0" class="hl_page-creator--section">
            <div class="hl_page-creator--actions">
              <div class="move-actions">
                <span data-tooltip="tooltip" data-placement="right" title="Up">
                  <i class="icon icon-arrow-up-2"></i>
                </span>
                <span data-tooltip="tooltip" data-placement="right" title="Down">
                  <i class="icon icon-arrow-down-2"></i>
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
            <div href="#" class="new-row-blank">
              <span @click="addRow" class="btn btn-light5 btn-slim">Add New Row</span>
            </div>
          </section>
          <div class="hl_page-creator--content">
            <template v-for="(item, rowIdx) in rowData">
              <new-row :key="rowIdx" :item="item" :rowIdx="rowIdx"></new-row>
            </template>
          </div>
        </section>
        <!-- END of .hl_page-creator--main -->
        <section class="hl_page-creator--settings-group" :class="{'active': isAddText}">
          <a href="#" @click="closeTextBox" class="close-group" id="close-settings-group">
            <i class="icon icon-close"></i>
          </a>
          <div class="hl_settings-group">
            <div class="tab-content" id="hl_settings-group-tab">
              <div
                class="tab-pane fade active show"
                id="seo"
                role="tabpanel"
                aria-labelledby="seo-tab"
              >
                <h2>ENTER TEXT</h2>
                <div class="seo">
                  <div class="form-group">
                    <label>TEXT</label>
                    <input
                      type="text"
                      v-on:keyup.enter="closeTextBox"
                      class="form-control"
                      placeholder="Title"
                      v-model="inputText"
                    >
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" placeholder="Description" rows="3"></textarea>
                  </div>
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- END of .hl_page-creator--settings-group -->

        <section class="hl_page-creator--sections-group">
          <a href="#" class="close-group" id="close-section-group">
            <i class="icon icon-close"></i>
          </a>
          <div class="hl_section-group">
            <div class="tab-content" id="hl_section-group-tab">
              <div
                class="tab-pane fade"
                id="add-section"
                role="tabpanel"
                aria-labelledby="add-section-tab"
              >
                <div class="add-section">
                  <h2>Add Sections</h2>
                  <div class="add-section-body">
                    <div class="section-cards">
                      <div class="section-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Full Width</h5>
                      </div>
                      <div class="section-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Wide</h5>
                      </div>
                      <div class="section-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Medium</h5>
                      </div>
                      <div class="section-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Small</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="manage-sections"
                role="tabpanel"
                aria-labelledby="manage-sections-tab"
              >
                <div class="manage-sections">
                  <h2>Manage Sections</h2>
                  <div class="sections-section-group-wrap">
                    <div class="sections-section-group">
                      <h3>All Sections</h3>
                      <ul class="sections">
                        <li>
                          <h4>Section</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Section</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Section</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Section</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Section</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- END of .hl_page-creator--sections-group -->

        <section class="hl_page-creator--rows-group" :class="{'active': showColSideBar}">
          <a
            href="#"
            class="close-group"
            id="close-row-group"
            @click="setEvent({'showColSideBar': !showColSideBar})"
          >
            <i class="icon icon-close"></i>
          </a>
          <div class="hl_row-group">
            <div class="tab-content" id="hl_row-group-tab">
              <div
                class="tab-pane fade active show"
                id="add-row"
                role="tabpanel"
                aria-labelledby="add-row-tab"
              >
                <div class="add-row">
                  <h2>Add Row</h2>
                  <div class="add-row-body">
                    <div class="row-cards">
                      <template v-for="(item, idx) in maxCol">
                        <div class="row-card" @click="addCol(item)" :key="idx">
                          <div class="icon">
                            <i class="fas fa-columns"></i>
                          </div>
                          <h5>{{item}} Column</h5>
                        </div>
                      </template>
                      <div class="row-card">
                        <div class="icon">
                          <i class="fas fa-columns"></i>
                        </div>
                        <h5>Left Sidebar</h5>
                      </div>
                      <div class="row-card">
                        <div class="icon">
                          <i class="fas fa-columns"></i>
                        </div>
                        <h5>Right Sidebar</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="manage-rows"
                role="tabpanel"
                aria-labelledby="manage-rows-tab"
              >
                <div class="manage-rows">
                  <h2>Manage Rows</h2>
                  <div class="rows-section-group-wrap">
                    <div class="rows-section-group">
                      <h3>Section</h3>
                      <ul class="rows">
                        <li>
                          <h4>2 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="rows-section-group">
                      <h3>Section</h3>
                      <ul class="rows">
                        <li>
                          <h4>1 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>1 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="rows-section-group">
                      <h3>Section</h3>
                      <ul class="rows">
                        <li>
                          <h4>2 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="rows-section-group">
                      <h3>Section</h3>
                      <ul class="rows">
                        <li>
                          <h4>1 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>1 Column Row</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- END of .hl_page-creator--rows-group -->

        <section class="hl_page-creator--columns-group">
          <a href="#" class="close-group" id="close-column-group">
            <i class="icon icon-close"></i>
          </a>
          <div class="manage-columns">
            <h2>Manage Columns</h2>
            <div class="columns-section-group-wrap">
              <div class="columns-section-group">
                <h3>Section > 2 Column Row</h3>
                <ul class="columns">
                  <li>
                    <h4>Left Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <h4>Right Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="columns-section-group">
                <h3>Section > 1 Column Row</h3>
                <ul class="columns">
                  <li>
                    <h4>Full Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="columns-section-group">
                <h3>Section > 2 Column Row</h3>
                <ul class="columns">
                  <li>
                    <h4>Left Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                  <li>
                    <h4>Right Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="columns-section-group">
                <h3>Section > 1 Column Row</h3>
                <ul class="columns">
                  <li>
                    <h4>Full Column</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-square-sm btn-light4">
                        <i class="far fa-eye"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- END of .hl_page-creator--columns-group -->

        <section class="hl_page-creator--element-group" :class="{'active': showEleSideBar}">
          <a
            href="#"
            class="close-group"
            @click="setEvent({'showEleSideBar': !showEleSideBar})"
            id="close-element-group"
          >
            <i class="icon icon-close"></i>
          </a>
          <div class="hl_element-group">
            <div class="tab-content" id="hl_element-group-tab">
              <div
                class="tab-pane fade active show"
                id="add-element"
                role="tabpanel"
                aria-labelledby="add-element-tab"
              >
                <div class="add-element">
                  <div class="add-element-menu">
                    <ul>
                      <li class="active">
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Text</a>
                      </li>
                      <li>
                        <a href="#">Media</a>
                      </li>
                      <li>
                        <a href="#">Form</a>
                      </li>
                      <li>
                        <a href="#">Content</a>
                      </li>
                      <li>
                        <a href="#">Countdown</a>
                      </li>
                      <li>
                        <a href="#">Misc</a>
                      </li>
                    </ul>
                  </div>
                  <div class="add-element-body">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <div class="element-group">
                      <h4>Text</h4>
                      <div class="element-cards">
                        <div class="element-card" @click="addText">
                          <div class="icon">
                            <i class="fas fa-heading"></i>
                          </div>
                          <h5>Headline</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-font"></i>
                          </div>
                          <h5>Sub-headline</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-paragraph"></i>
                          </div>
                          <h5>Paragraph</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-list"></i>
                          </div>
                          <h5>Bullet List</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Media</h4>
                      <div class="element-cards">
                        <div class="element-card" @click="addImage">
                          <div class="icon">
                            <i class="fas fa-image"></i>
                          </div>
                          <h5>Image</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-images"></i>
                          </div>
                          <h5>Image Popup</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-play-circle"></i>
                          </div>
                          <h5>Video</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-play-circle"></i>
                          </div>
                          <h5>Video popup</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-volume-up"></i>
                          </div>
                          <h5>Audio player</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Form</h4>
                      <div class="element-cards">
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-stop"></i>
                          </div>
                          <h5>Button</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                          </div>
                          <h5>Facebook Option</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-square"></i>
                          </div>
                          <h5>Input</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-hand-pointer"></i>
                          </div>
                          <h5>Select Box</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-comment-alt"></i>
                          </div>
                          <h5>Text Area</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-check-square"></i>
                          </div>
                          <h5>Checkbox Headline</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Advance Form</h4>
                      <div class="element-cards">
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-sms"></i>
                          </div>
                          <h5>SMS Sign up</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-file-invoice"></i>
                          </div>
                          <h5>Billing Add.</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-file-invoice"></i>
                          </div>
                          <h5>Shipping Add.</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-poll-h"></i>
                          </div>
                          <h5>Survey</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Content Blocks</h4>
                      <div class="element-cards">
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-circle"></i>
                          </div>
                          <h5>Icon</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-file-image"></i>
                          </div>
                          <h5>Img Feature</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-link"></i>
                          </div>
                          <h5>Navigation</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-question-circle"></i>
                          </div>
                          <h5>FAQ</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-window-minimize"></i>
                          </div>
                          <h5>Divider</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-window-minimize"></i>
                          </div>
                          <h5>Progress bar</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-list"></i>
                          </div>
                          <h5>Image List</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-table"></i>
                          </div>
                          <h5>Pricing Table</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Countdown</h4>
                      <div class="element-cards">
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-hourglass-start"></i>
                          </div>
                          <h5>Countdown</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="far fa-clock"></i>
                          </div>
                          <h5>Minute Timer</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-clock"></i>
                          </div>
                          <h5>Day Timer</h5>
                        </div>
                      </div>
                    </div>
                    <div class="element-group">
                      <h4>Misc Elements</h4>
                      <div class="element-cards">
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-share-alt-square"></i>
                          </div>
                          <h5>Social Share</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-bell"></i>
                          </div>
                          <h5>Privacy Notice</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-comments"></i>
                          </div>
                          <h5>FB Comments</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-align-center"></i>
                          </div>
                          <h5>Text Block</h5>
                        </div>
                        <div class="element-card">
                          <div class="icon">
                            <i class="fas fa-code"></i>
                          </div>
                          <h5>Custom JS/HTML</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade active show"
                id="manage-elements"
                role="tabpanel"
                aria-labelledby="manage-elements-tab"
              >
                <div class="manage-elements">
                  <h2>Manage Elements</h2>
                  <div class="elements-section-group-wrap">
                    <div class="elements-section-group">
                      <h3>Section > Left Column</h3>
                      <ul class="elements">
                        <li>
                          <h4>Image</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="elements-section-group">
                      <h3>Section > Right Column</h3>
                      <ul class="elements">
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Input Form</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Input Form</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Button</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="elements-section-group">
                      <h3>Section > Full Column</h3>
                      <ul class="elements">
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Button</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Input</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Button</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="elements-section-group">
                      <h3>Section > Right Column</h3>
                      <ul class="elements">
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Headline</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Input Form</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Input Form</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <h4>Button</h4>
                          <div class="actions">
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="fas fa-arrows-alt-v"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-eye"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-copy"></i>
                            </a>
                            <a href="#" class="btn btn-square-sm btn-light4">
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- END of .hl_page-creator--element-group -->
      </section>
      <!-- END of .form-builder -->
    </section>
    <!-- END of .hl_wrapper -->

    <!-- ======================= Outdated Browser (Supports IE10 & Above) ======================= -->
    <!-- <div id="outdated" aria-hidden="true">
      <h5>:(</h5>
      <h6>Your browser is out-of-date!</h6>
      <p>
        This website is built using latest technologies. Unfortunately your browser doesn't support those. Please update your browser to view this website correctly. Thank you.
        <a
          id="btnUpdateBrowser"
          href="http://outdatedbrowser.com/"
          target="_blank"
        >Update my browser now</a>
      </p>
    </div>-->
    <!-- ================================= END: Outdated Browser ================================ -->
  </div>
</template>
<script>
import newRow from "./elements/newRow";
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      maxCol: 5,
      inputText: "",
    };
  },
  computed: {
    ...mapState("grid", {
      showColSideBar: "showColSideBar",
      showEleSideBar: "showEleSideBar",
      isAddText: "isAddText",
      selectedData: "selectedData",
      addNewRow: "addNewRow",
      rowData: 'rowData',
    })
  },
  methods: {
    ...mapMutations("grid", {
      setEvent: "SET_EVENTS",
      setRowData: "UPDATE_ROW_DATA"
    }),
    addRow() {
      // this.numRows++;
      this.setEvent({ showColSideBar: true });
      // this.showColSideBar = true;
    },
    addCol(numCol) {
      const arr = [];
      const getObj = () => {
        const obj = {
          label: "empty",
          value: ""
        };
        return obj;
      };

      if (this.addNewRow.type === "outer") {
        const temp = [];
        for (let i = 0; i < numCol; i++) {
          temp.push(getObj());
        }
        arr.push(temp);
        // this.rowData.splice(this.addNewRow.outerIdx + 1, 0, arr);
      } else if (this.addNewRow.type === "inner") {
        for (let i = 0; i < numCol; i++) {
          arr.push(getObj());
        }
        // this.rowData[this.addNewRow.outerIdx].splice(this.addNewRow.innerIdx + 1, 0, arr);
      }
      this.setRowData({type: this.addNewRow.type, outerIdx: this.addNewRow.outerIdx, innerRowIdx: this.addNewRow.innerIdx, innerColIdx: -1, data: arr});
      // this.rowData[this.numRows] = numCol;
      // this.numRows++;
      this.setEvent({
        showColSideBar: false,
        addNewRow: { type: "", outerIdx: -1, innerIdx: -1 }
      });
      // this.showColSideBar = false;
    },
    // addElement() {
    //   this.setEvent({'showEleSideBar': true});
    //   // this.showEleSideBar = true;
    //   this.setEvent({'row': row});
    //   this.setEvent({'col': col});
    //   // this.row = row;
    //   // this.col = col;
    // },
    addText() {
      // this.showEleSideBar = false;
      this.setEvent({ showEleSideBar: false });
      this.setEvent({ isAddText: true });
      // this.isAddText = true;
      console.log('111111111111111', this.inputText);
      const { outerIdx, innerRowIdx, innerColIdx } = this.selectedData;
      const elem = this.rowData[outerIdx][innerRowIdx][innerColIdx];
      elem.label = "text";
    },
    addImage() {
      // this.showEleSideBar = false;
      this.setEvent({ showEleSideBar: false });
      let ele = document.createElement("input");
      // this.addImage = true;
      ele.type = "file";
      ele.onchange = this.uploadImg;
      ele.click();
    },
    uploadImg(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      const { outerIdx, innerRowIdx, innerColIdx } = this.selectedData;
      reader.onload = e => {
        const obj = {
          label: "image",
          value: e.target.result,
        };
        this.setRowData({type: '', outerIdx: outerIdx, innerRowIdx: innerRowIdx, innerColIdx: innerColIdx, data: obj});
      };
      reader.readAsDataURL(file);
    },
    closeTextBox() {
      // this.isAddText = false;
      this.setEvent({ isAddText: false });
      const { outerIdx, innerRowIdx, innerColIdx } = this.selectedData;
      const obj = {
        label: "text",
        value: this.inputText,
      };
      this.setRowData({type: '', outerIdx: outerIdx, innerRowIdx: innerRowIdx, innerColIdx: innerColIdx, data: obj});
      this.inputText = '';
    },
  },
  components: {
    newRow
  }
};
</script>

