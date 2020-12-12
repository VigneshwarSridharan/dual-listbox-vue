<template>
  <div class="list-box-wrapper">


    <div class="list-box-item">
      
      <md-field md-clearable class="search">
        <label>Search</label>
        <md-input v-model="searchSource"></md-input>
      </md-field>

      <md-content class="md-scrollbar">
        <md-list>
          <md-list-item
            v-for="(item,key) in source.map((item,inx) => ({inx,...item})).filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchSource.toLowerCase()))"
            v-bind:key="key"
            :class="(item.selected ? 'active':'')"
            @click="selectSource(searchSource?item.inx:key)"
            >
              <md-icon v-if="'icon' in item">{{item['icon']}}</md-icon>
              <md-avatar v-if="'avatar' in item">
                <img :src="item['avatar']" alt="People">
              </md-avatar>
              <span :class="(item.avatar || item.icon ? 'md-list-item-text':'')" v-if="asHtml" v-html="item[label in item ? label : 'label']"></span>
              <span :class="(item.avatar || item.icon ? 'md-list-item-text':'')" v-else>{{item[label in item ? label : 'label']}}</span>
            </md-list-item>
          <md-list-item
            v-if="source.filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchSource.toLowerCase())).length == 0 && source.length"
          >No results found</md-list-item>
        </md-list>
      </md-content>

      <div class="bulk-action">
        <md-button class="md-raised md-primary width-100 no-margin" @click="selectAllSource">Select All</md-button>
        <md-button class="md-raised width-100 no-margin" @click="deSelectAllSource">None</md-button>
      </div>
    </div>
    <div class="actions">

      <md-button class="btn-action md-fab md-primary" @click="moveDestination">
          <md-icon>keyboard_arrow_right</md-icon>
      </md-button>

      <md-button class="btn-action md-fab md-primary" @click="moveAllDestination">
          <md-icon>fast_forward</md-icon>
      </md-button>
      
      <md-button class="btn-action md-fab md-primary" @click="moveSource">
          <md-icon>keyboard_arrow_left</md-icon>
      </md-button>

       <md-button class="btn-action md-fab md-primary" @click="moveAllSource">
          <md-icon>fast_rewind</md-icon>
      </md-button>

      
    </div>
    <div class="list-box-item">

      <md-field md-clearable class="search">
        <label>Search</label>
        <md-input v-model="searchDestination"></md-input>
      </md-field>

      <md-content class="md-scrollbar">
        <md-list>
          <md-list-item
            v-for="(item,key) in destination.map((item,inx) => ({inx,...item})).filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchDestination.toLowerCase()))"
            v-bind:key="key"
            :class="(item.selected ? ' active':'')"
            @click="selectDestination(searchDestination?item.inx:key)"
          >
              <md-icon v-if="'icon' in item">{{item['icon']}}</md-icon>
              <md-avatar v-if="'avatar' in item">
                <img :src="item['avatar']" alt="People">
              </md-avatar>
              <span :class="(item.avatar || item.icon ? 'md-list-item-text':'')" v-if="asHtml" v-html="item[label in item ? label : 'label']"></span>
              <span :class="(item.avatar || item.icon ? 'md-list-item-text':'')" v-else>{{item[label in item ? label : 'label']}}</span>
          </md-list-item>
        </md-list>
        <md-list-item
          v-if="destination.filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchDestination.toLowerCase())).length == 0 && destination.length"
          class="list-item"
        >No results found</md-list-item>
      </md-content>

      <div class="bulk-action">
        <md-button class="md-raised md-primary width-100 no-margin" @click="selectAllDestination">Select All</md-button>
        <md-button class="md-raised width-100 no-margin" @click="deSelectAllDestination">None</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import angleRight from "../assets/angle-right-solid.svg";
import angleLeft from "../assets/angle-left-solid.svg";
import angleDoubleLeft from "../assets/angle-double-left-solid.svg";
import angleDoubleRight from "../assets/angle-double-right-solid.svg";
import "../assets/style.css";

export default {
  props: {
    source: Array,
    destination: Array,
    label: String,
    asHtml: Boolean
  },
  data: function() {
    return {
      angleRight,
      angleLeft,
      angleDoubleLeft,
      angleDoubleRight,
      searchSource: "",
      searchDestination: ""
    };
  },
  methods: {
    moveDestination: function() {
      let selected = this.source.filter(f => f.selected);
      if (!selected.length) return;
      selected = selected.map(item => ({
        ...item,
        selected: false
      }));
      let destination = [...selected, ...this.destination];
      let source = this.source.filter(f => !f.selected);
      this.searchSource = "";
      this.searchDestination = "";
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveSource: function() {
      let selected = this.destination.filter(f => f.selected);
      if (!selected.length) return;
      selected = selected.map(item => ({
        ...item,
        selected: false
      }));
      let source = [...selected, ...this.source];
      let destination = this.destination.filter(f => !f.selected);
      this.searchSource = "";
      this.searchDestination = "";
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveAllDestination: function() {
      let destination = [
        ...this.source.map(item => ({ ...item, selected: false })),
        ...this.destination
      ];
      let source = [];
      this.searchSource = "";
      this.searchDestination = "";
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveAllSource: function() {
      let source = [
        ...this.destination.map(item => ({ ...item, selected: false })),
        ...this.source
      ];
      let destination = [];
      this.searchSource = "";
      this.searchDestination = "";
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectDestination: function(key) {
      let source = this.source;
      let destination = this.destination.map((i, k) => {
        if (k === key) {
          i.selected = !i.selected;
        }
        return i;
      });
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectSource: function(key) {
      let destination = this.destination;
      let source = this.source.map((i, k) => {
        if (k === key) {
          i.selected = !i.selected;
        }
        return i;
      });
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectAllSource: function() {
      let source = this.source.map(item => ({ ...item, selected: true }));
      let destination = this.destination;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    deSelectAllSource: function() {
      let source = this.source.map(item => ({ ...item, selected: false }));
      let destination = this.destination;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    selectAllDestination: function() {
      let destination = this.destination.map(item => ({
        ...item,
        selected: true
      }));
      let source = this.source;
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    deSelectAllDestination: function() {
      let destination = this.destination.map(item => ({
        ...item,
        selected: false
      }));
      let source = this.source;
      this.$emit("onChangeList", {
        source,
        destination
      });
    }
  }
};
</script>

<style lang="css" scoped>

  .actions .md-button {

    margin: 6px 8px !important;

  }

  .md-content {
    height: 350px;
    overflow: auto;
  }

  .search {

    margin: 0px !important;
  }

  .search label {

    left: 16px;
  }

  .search input {

    padding-left: 16px;
  }

  .active {
    background-color: rgba(0,0,0,0.20);
  }

  .width-100 {

    width: 100%;
  }

  .no-margin {

    margin: 0px !important;
  }

</style>