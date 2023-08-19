<script setup lang="ts">
import type { DocObj } from '@/entities/DocObj';
import { useSelectedDocStore } from '@/stores/selectedDoc';
import { computed } from 'vue';

const props = defineProps<{ doc: DocObj }>();

const selectedDocStore = useSelectedDocStore();
const selectedDocId = computed(() => {
  console.log(selectedDocStore.getSelectedDoc()?.id);
  
  return selectedDocStore.getSelectedDoc()?.id})

</script>

<template>
  <div class="doc-item">
    <div class="doc-item__img-container">
      <img class="doc-item__img-container__img"
        :src="props.doc.image" />
    </div>
    <div class="doc-item__info" :class="{selected: props.doc.id == selectedDocId}">
      <div class="small_header">{{ props.doc.name }}</div>
      <!-- Possible improvement - add conversion to metric prefixes -->
      <div>{{ `${props.doc.txtFileSize()} B` }}</div>
    </div>
  </div>
</template>
<!-- #E0E0E0 -->
<style scoped lang="scss">
.doc-item {
  height: 70px;
  display: flex;
  border: 1px solid var(--border-color);
  margin-bottom: 10px;
  cursor: pointer;
  &__img-container {
    width: 70px;

    &__img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    flex: auto;
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.selected {
  background-color: var(--selected);
  color: var(--light);
}
</style>