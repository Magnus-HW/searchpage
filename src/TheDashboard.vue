<script setup lang="ts">
import DocViewer from './components/DocViewer.vue';
import DocsList from './components/DockList/DocsList.vue';
import TheInput from './components/Input/TheInput.vue'
</script>

<template>
  <header>
    <div class="my-app">My App</div>
    <div class="username">Username</div>
  </header>
  <div class="wrapper-main">
    <div class="wrapper-main__side">
      <TheInput class="wrapper-main__side__search-input" />
      <DocsList class="wrapper-main__side__doc-list" />
    </div>
    <DocViewer class="wrapper-main__doc-viewer" />
  </div>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  padding: 0px 1% 0px;
  align-items: flex-end;
  margin-bottom: 20px;
}

.wrapper-main {
  display: grid;
  grid-template-columns: 300px 3fr;
  height: 574px;
  margin: 10px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: 0px 0px 10px 0px var(--shadow);

  &__side {
    display: flex;
    padding: 3%;
    padding-top: 27px;
    border-right: 1px solid var(--border-color);
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    &__search-input {
      margin-bottom: 35px;
    }

    &__doc-list {
      height: 420px;
      width: 90%;
      overflow-y: scroll;
      -ms-overflow-style: none;
      /* IE and Edge */
      scrollbar-width: none;

      /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__doc-viewer {
    padding: 3%;
  }
}

.my-app {
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
}

.username {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
}
</style>
