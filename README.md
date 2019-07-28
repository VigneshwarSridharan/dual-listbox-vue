# Dual Listbox

Dual Listbox for vue js

![Dual listbox for vue js](https://raw.githubusercontent.com/VigneshwarSridharan/dual-listbox-vue/master/public/assets/images/screenshot-v1.png)

[DEMO](https://codesandbox.io/s/dual-plugin-eilhu)
### How to install

```
npm install dual-listbox-vue --save
```

### How to use

```javascript
import DualListBox from "dual-listbox-vue";
import "dual-listbox-vue/dist/dual-listbox.css";
export default {
    name: "App",
    components: {
        DualListBox
    },
    data: function () {
        return {
            source: [
                { name: "WHITE", code: "#FFFFFF" },
                { name: "SILVER", code: "#C0C0C0" },
                { name: "GRAY", code: "#808080" }
            ],
            destination: [
                { name: "BLACK", code: "#000000" },
                { name: "RED", code: "#FF0000" }
            ]
        };
    },
    methods: {
        onChangeList: function ({ source, destination }) {
            this.source = source;
            this.destination = destination;
        }
    }
};
```

In HTML template
```html
<DualListBox
    :source="source" 
    :destination="destination"
    label="name"
    @onChangeList="onChangeList"
/>
```