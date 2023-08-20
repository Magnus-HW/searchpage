<script setup lang="ts">
import { useDocsStore } from '@/stores/docs';
import TheItem from '@/components/DockList/subcomponents/TheItem.vue'
import { computed } from 'vue';
import { actionController } from '@/domains/actionsController';
import type { DocObj } from '@/entities/DocObj';

const docs = computed(() => useDocsStore().docs);

const handleDocSelect = (doc: DocObj) => {
  actionController.selectDoc(doc)
}

</script>

<template>
  <div class="list-wrapper">
    <div class="list-wrapper__results small_header">
      Результаты
    </div>
    <div class="list-wrapper__results">
      <div v-if="docs.length == 0" class="text">Ничего не найдено</div>
      <div v-else>
        <TheItem v-for="doc in docs"
          :key="doc.id"
          :doc="doc"
          @click="handleDocSelect(doc)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-wrapper {
  &__results {
    margin-bottom: 15px;
  }
}
</style>