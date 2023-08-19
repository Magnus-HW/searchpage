<script setup lang="ts">
import { actionController } from '@/domains/actionsController';
import { useNotificationStore, NotifType } from '@/stores/notifications';
import { computed, ref } from 'vue';

const notifType = NotifType
const notificationStore = useNotificationStore();
const notification = computed(() => notificationStore.notification);

const notificationStyle = computed(() => ({
  loading: notification.value?.type == notifType.loading,
  error: notification.value?.type == notifType.error,
  warning: notification.value?.type == notifType.warning
}))

const searchVal = ref("");

let timer: number;
const handleSearch = () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    actionController.search(searchVal.value)
  }, 300);
}

</script>

<template>
  <div class="search-panel">
    <div class="search-panel__title small_header">Поиск документа</div>
    <input class="search-panel__input" placeholder="Ведите название документа"
      v-model="searchVal"
      @input="handleSearch" />
    <Transition name="fade">
      <div v-if="notification"
        class="search-panel__notification"
        :class="notificationStyle">
        {{ notification?.msg }}</div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.search-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 90%;
  line-height: 17.07px;

  &__title {
    margin-bottom: 10px;
  }

  &__notification {
    position: absolute;
    bottom: -32px;
    margin-top: 5px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }

  &__input {
    width: 100%;
    padding: 20px;
    height: 40px;
    font-size: 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    &:focus{
      outline: none;
    }
  }


  &__notification.loading {
    background-color: var(--processing);
    transition: background-color 0.5s;
  }

  &__notification.warning {
    background-color: var(--warning);
    transition: background-color 0.5s;
  }

  &__notification.error {
    background-color: var(--danger);
    transition: background-color 0.5s;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>