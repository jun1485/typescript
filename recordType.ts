// 레코드 타입은 객체의 키와 값을 매핑할때 사용하는 유틸리티 타입.
// Record<T, K> 형태로 사용, T는 객체의 키의 타입, K는 값의 타입을 나타냄.

type StringToNumber = Record<string, number>;

const obj: StringToNumber = {
  foo: 1,
  bar: 2
};


// 정해진 키만 사용 가능
type FixedKeys = Record<'key1' | 'key2', number>;

const obj: FixedKeys = {
  key1: 1,
  key2: 2
};
// obj.key3 = 3;  // 컴파일 에러, key3는 'key1' | 'key2'에 없는 키입니다.


// 객체의 모든 값이 같은 타입을 갖도록 강제
<script setup lang="ts">
import { ref } from 'vue';

type UserData = Record<'name' | 'age' | 'email', string>;

const user = ref<UserData>({
  name: 'John',
  age: '30',
  email: 'john@example.com'
});
</script>


// Vue3에서 레코드타입 응용

type SortedActivityList = Record<string, Activity[]>; // SortedActivityList는 문자열 타입의 키와 Activity[] 타입의 값을 가지는 객체


const filteredActivityList = computed(() => {

Object.entries(activityStore.sortedActivityList).forEach(([key, activities]) => { // 키-값 쌍을 배열로 변환 
	activities = activities.filter(activity => activity.tokenCode === route.params.token_code);  // key와 activities는 튜플 형태로 언패킹되어 사용
  });
return activityStore.sortedActivityList;
});
