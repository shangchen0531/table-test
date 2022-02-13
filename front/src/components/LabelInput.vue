<template>
  <label class="labelInput">
    <slot>标签</slot>
    <input 
      type="number" 
      v-bind:min="0"
      v-bind="$attrs" 
      v-bind:value="value" 
      v-on="inputListeners"
    />
  </label>
</template>

<script>
  export default {
    name: "LabelInput",
    inheritAttrs: false,
    props: {
      value: Number
    },
    computed: {
      inputListeners: function () {
        var self = this;
        return Object.assign({},
          // 添加父级监听器
          this.$listeners,
          // 覆写input事件监听
          {
            input: function (event) {
              self.$emit("input", event.target.value)
            }
          }
        )
      }
    }
  }
</script>

<style>
  label.labelInput {
    display: inline-block;
    margin: 5px 5px 0px 5px;
  }

  label.labelInput > input {
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 5px;
    width: 50%;
  }

  label.labelInput > input:focus{
    border-color: #66afe9;
    outline: 0;
    box-shadow: 
    inset 0 1px 1px rgba(0,0,0,.075), 
    0 0 5px rgba(102,175,233,.6);
  }

</style>