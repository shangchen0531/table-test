<template>
  <div>
    <table>
      <tr v-for="i in m" :key="'r' + i">
        <td 
          v-for="j in n" 
          :key="'c' + i * m + j"
          @click.self="clickTableCell(i, j)"
        >
          {{ i }}, {{ j }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Cabinanet",
    props: {
      m: Number, // 行数
      n: Number  // 列数
    },
    methods: {
      clickTableCell: function(i, j) {
        this.$emit("req", i, j);
      }
    }
  }
</script>

<style>

  table {
    border-collapse: collapse;
    border: 1px solid #cdcbd6;
  }

  tr:nth-child(odd) {
    background-color: #F8F8FF;
  }

  td {
    border: 0;
    border: 1px solid #cdcbd6;
    white-space: nowrap;
    min-width: 10vw;
    min-height: 10vh;
    height: 20vh;
    text-align: center;
  }
</style>