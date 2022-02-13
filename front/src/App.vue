<template>
  <div id="app">
    <div class="labels">
      <label-input v-model.number="m" id="row">
        行数
      </label-input>
      <label-input v-model.number="n" id="col">
        列数
      </label-input>
    </div>
    <cabinanet 
      :m="m" 
      :n="n"
      @req="onRequest"
      id="cabinanet"
    >
    </cabinanet>
  </div>
</template>

<script>
  import Cabinanet from "./components/Cabinanet.vue";
  import LabelInput from "./components/LabelInput.vue";
  import socket from "./socket"
  export default {
    name: 'App',
    data() {
      return {
        m: 5, // 行数
        n: 5  // 列数
      }
    },
    components: {
      Cabinanet,
      LabelInput
    },
    methods: {
      onRequest(i, j) {
        socket.emit("click table cell", i, j);
      }
    },
    created() {
      socket.on("connect_error", (err) => {
        console.log(err);
      });
      socket.on("click result", (res) => {
        alert(res);
      });
      socket.connect();
    },
    destroyed() {
      socket.off("connect_error");
      socket.off("click result");
      socket.disconnect();
    },
  }
</script>

<style>
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1vh + 0.6em);
  }

  #app {
    width: 80%;
    height: 80%;
    background-color: white;
    position: relative;
    top: -2%;
    border-radius: 20px;
    box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.034);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  #cabinanet {
    width: 90%;
    height: 90%;
    margin: 0 2vw 5px;
    overflow: auto;
    box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.labels {
    display: flex;
    padding-bottom: 5px;
  }
</style>