<template>
  <div class="list-box-wrapper">
    <div>
      <ul class="list-box">
        <li
          v-for="(item,key) in source"
          v-bind:key="key"
          class="list-item"
          v-bind:style="{backgroundColor: item.selected ? '#eeeeee':''}"
          @click="selectSource(key)"
        >{{item.label}}</li>
      </ul>
      <div class="bulk-action">
        <div class="btn-action select-all" @click="selectAllSource">All</div>
        <div class="btn-action deselect-all" @click="deSelectAllSource">None</div>
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
    <div>
      <ul class="list-group list-group-flush border rounded list-box">
        <li
          v-for="(item,key) in destination"
          v-bind:key="key"
          class="list-item"
          v-bind:style="{backgroundColor: item.selected ? '#f5f5f5':''}"
          @click="selectDestination(key)"
        >{{item.label}}</li>
      </ul>
      <div class="bulk-action">
        <div class="btn-action select-all" @click="selectAllDestination">All</div>
        <div class="btn-action deselect-all" @click="deSelectAllDestination">None</div>
      </div>
    </div>
  </div>
</template>

<script>
import angleRight from "../assets/angle-right-solid.svg";
import angleLeft from "../assets/angle-left-solid.svg";
import angleDoubleLeft from "../assets/angle-double-left-solid.svg";
import angleDoubleRight from "../assets/angle-double-right-solid.svg";

export default {
  props: {
    source: Array,
    destination: Array
  },
  data: function() {
    return {
      angleRight,
      angleLeft,
      angleDoubleLeft,
      angleDoubleRight
    };
  },
  methods: {
    moveDestination: function() {
      let selected = this.source.filter(f => f.selected);
      selected = selected.map(item => ({
        ...item,
        selected: false
      }));
      let destination = [...selected, ...this.destination];
      let source = this.source.filter(f => !f.selected);
      this.$emit("onChangeList", {
        source,
        destination
      });
    },
    moveSource: function() {
      let selected = this.destination.filter(f => f.selected);
      selected = selected.map(item => ({
        ...item,
        selected: false
      }));
      let source = [...selected, ...this.source];
      let destination = this.destination.filter(f => !f.selected);
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

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.bulk-action {
  display: flex;
}
.bulk-action .select-all {
  margin-right: 0.5rem;
}
.bulk-action .deselect-all {
  margin-left: 0.5rem;
}

.list-box-wrapper {
  font-family: sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
}
.list-box-wrapper > div {
  flex: 1;
}
.list-box-wrapper .actions {
  flex-grow: 0;
  padding: 0 1rem;
}
.list-box-wrapper .actions .btn-action {
  margin-bottom: 0.5rem;
}
.list-box-wrapper .list-box {
  height: 250px;
  overflow: auto;
  list-style: none;
  padding: 0;
  border: solid 1px #cccccc;
  border-radius: 3px;
}
.list-box-wrapper .list-box .list-item {
  padding: 0.5rem 1rem;
  border-bottom: solid 1px #cccccc;
  cursor: pointer;
}
.list-box-wrapper .list-box .list-item:last-child {
  border: none;
}

.btn-action {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
}
.btn-action svg {
  vertical-align: middle;
}

.deselect-all {
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>


