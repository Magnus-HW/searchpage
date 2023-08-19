<script setup lang="ts">
import { actionController } from '@/domains/actionsController';
import { useSelectedDocStore } from '@/stores/selectedDoc';
import { computed } from 'vue';

const selectedDocStore = useSelectedDocStore();

const selectedDoc = computed(() => selectedDocStore.getSelectedDoc());

const handleDeleteMsg = () => {
  actionController.deleteSelectedDocImg()
};

const handleDownloadTxt = () => {
  if (selectedDoc.value)
    actionController.downloadDocAsTxt(selectedDoc.value)
}

const disableDeleteImageBtn = computed(() => selectedDoc.value?.image ? false : true)
</script>

<template >
  <div v-if="selectedDoc !== null"
    class="doc-view">
    <div class="doc-view__image-wrapper">
      <img v-if="selectedDoc.image"
        class="doc-view__image-wrapper__img"
        :src="`${selectedDoc?.image}`" />
      <div v-else
        class="doc-view__image-wrapper__stub text">No image</div>
    </div>
    <div class="doc-view__info-wrapper">
      <div class="doc-view__info-wrapper__name small_header">{{ selectedDoc.name }}</div>
      <div class="doc-view__info-wrapper__buttons-panel">
        <button @click="handleDownloadTxt"
          class="doc-view__info-wrapper__buttons-panel__download">Скачать</button>
        <button @click="handleDeleteMsg"
          :disabled="disableDeleteImageBtn"
          :class="{ disabled: disableDeleteImageBtn }"
          class="doc-view__info-wrapper__buttons-panel__delete">Удалить</button>
      </div>
      <div class="doc-view__info-wrapper__description small_header">Описание</div>
      <div class="doc-view__info-wrapper__description-text text">{{ selectedDoc.description }}</div>
    </div>
  </div>
  <div v-else
    class="doc-view-stub text">Выберите документ, чтобы посмотреть его содержимое</div>
</template>

<style scoped lang="scss">
.doc-view {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /*
    image link doest load
    so style is a bit wrong
  */
  &__image-wrapper {
    border: 1px solid var(--border-color);
    flex: 1;
    max-height: 50%;
    margin-right: 50px;
    display: flex;
    &__stub {
      margin: auto;
    }
  }

  &__info-wrapper {
    flex: 1.1;

    &__name {
      margin-bottom: 15px;
    }

    &__buttons-panel {
      margin-bottom: 40px;

      &__download {
        color: var(--primary);
        border: 1px solid var(--primary);
        margin-right: 15px;
      }

      &__delete {
        color: var(--danger);
        border: 1px solid var(--danger);
      }
    }

    &__description {
      margin-bottom: 15px;
    }

    &__description-text {
      font-size: 14px;
    }
  }
}

.doc-view-stub {
  margin: auto;
}

.disabled {
  color: var(--gray);
  border-color: var(--gray);
  cursor: auto;
}</style>