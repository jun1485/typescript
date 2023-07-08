// state: 애플리케이션의 상태(데이터)를 저장합니다.
// getters: state를 기반으로 계산된 값을 반환하는 함수를 저장합니다.
// mutations: state를 동기적으로 변경하는 메서드를 저장합니다.
// actions: 비동기 작업을 수행하거나, 여러 mutations를 조합하는 메서드를 저장합니다.

import { createStore } from 'vuex';

interface State {
  count: number;
}

export default createStore<State>({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state: State): number {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state: State) {
      state.count++;
    }
  },
  actions: {
    incrementIfOdd({ commit, state }: { commit: any, state: State }) {
      if (state.count % 2 === 1) {
        commit('increment');
      }
    }
  }
});
