import { createStore } from 'vuex'
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";

export interface State {
  notes: NoteBodyDto[]
}

export const store = createStore<State>({
  state: {
    notes: [
      {
        id: 1,
        header: 'Список продуктов',
        text: 'Огурцы, помидоры, салат, лук',
      },
      {
        id: 2,
        header: 'Паспорт',
        text: 'Заполнить заявление на новый паспорт',
      },
      {
        id: 3,
        header: 'Новая заметка',
        text: 'пароль: qwerty12345',
      },
      {
        id: 4,
        header: 'Новая заметка 2',
        text: '29.12 - экзамен по матанализу',
      },
    ]
  },
  getters: {
    getAllNotes(state){
      return state.notes;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
