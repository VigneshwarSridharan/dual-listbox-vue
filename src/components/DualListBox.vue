<template>
  <div class="list-box-wrapper">
    <div class="list-box-item">
      <div class="search-box">
        <input v-model="searchSource" type="text" placeholder="Search" />
        <div
          v-if="searchSource"
          class="clear-search"
          title="Clear Search"
          @click=" searchSource='' "
        >&times;</div>
      </div>
      <ul class="list-box">
        <li
          v-for="(item,key) in source.map((item,inx) => ({inx,...item})).filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchSource.toLowerCase()))"
          v-bind:key="key"
          class="list-item"
          v-bind:style="{backgroundColor: item.selected ? '#eeeeee':''}"
          @click="selectSource(searchSource?item.inx:key)"
        >{{item[label in item ? label : 'label']}}</li>
        <li
          v-if="source.filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchSource.toLowerCase())).length == 0 && source.length"
          class="list-item"
        >No results found</li>
      </ul>
      <div class="bulk-action">
        <div class="select-all" @click="selectAllSource">Select All</div>
        <div class="deselect-all" @click="deSelectAllSource">None</div>
      </div>
    </div>
    <div class="actions">
      <div class="btn-action" @click="moveDestination">
        <svg height="18" viewBox="0 0 256 512">
          <path
            fill="#ffffff"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </svg>
      </div>
      <div class="btn-action" @click="moveAllDestination">
        <svg height="18" viewBox="0 0 448 512">
          <path
            fill="#ffffff"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
          />
        </svg>
      </div>
      <div class="btn-action" @click="moveSource">
        <svg height="18" viewBox="0 0 256 512">
          <path
            fill="#ffffff"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </svg>
      </div>
      <div class="btn-action" @click="moveAllSource">
        <svg height="18" viewBox="0 0 448 512">
          <path
            fill="#ffffff"
            d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
          />
        </svg>
      </div>
    </div>
    <div class="list-box-item">
      <div class="search-box">
        <input v-model="searchDestination" type="text" placeholder="Search" />
        <div
          v-if="searchDestination"
          class="clear-search"
          title="Clear Search"
          @click=" searchDestination='' "
        >&times;</div>
      </div>
      <ul class="list-group list-group-flush border rounded list-box">
        <li
          v-for="(item,key) in destination.map((item,inx) => ({inx,...item})).filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchDestination.toLowerCase()))"
          v-bind:key="key"
          class="list-item"
          v-bind:style="{backgroundColor: item.selected ? '#f5f5f5':''}"
          @click="selectDestination(searchDestination?item.inx:key)"
        >{{item[label in item ? label : 'label']}}</li>
        <li
          v-if="destination.filter(item => item[label in item ? label : 'label'].toLowerCase().includes(searchDestination.toLowerCase())).length == 0 && destination.length"
          class="list-item"
        >No results found</li>
      </ul>
      <div class="bulk-action">
        <div class="select-all" @click="selectAllDestination">Select All</div>
        <div class="deselect-all" @click="deSelectAllDestination">None</div>
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
    label: String
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
