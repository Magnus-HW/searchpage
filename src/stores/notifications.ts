import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notifications', () => {
  const notification = ref<Notification>(null)

  const setNotification = async (newNotif: Notification): Promise<void> => {

    /* 
      The response from server is to fast, 
      so a little delay was added to prevent flickering 
      when notif switches from type 'loading' 
    */

    if (newNotif?.type == NotifType.loading) {
      notification.value = newNotif
    } else {
      setTimeout(() => {
        console.log('new notif');
        notification.value = newNotif
      }, 2000)
    }

  }

  return { notification, setNotification }
})

type Notification = null | {
  type: NotifType
  msg: NotifMsg
}

export enum NotifType {
  loading = 'loading',
  warning = 'warning',
  error = 'error',
  ok = 'ok'
}

export enum NotifMsg {
  loading = 'Ищем документы',
  warning = 'Ничего не найдено',
  error = 'Ошибка сервера',
  ok = ''
}
