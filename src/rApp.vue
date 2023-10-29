<template>
<h5>dfsdfdsfsdafsd</h5>
    <div id="rapp">
        <HelloButton :msg-title="message" @addItemEvent="addTodoItem" />
        <!-- 부모컴포넌트에서 정의한 addItemEvent를 이곳에서 사용. 해당 이벤트가 터지면, addTodoItem 메소드가 실행된다는 뜻. -->
        <!-- //아래에서 선언한 HelloButton이라는 컴포넌트 사용 -->
        <ul>
            <li v-for="(todo, idx) in todoItems" :key="idx">
                {{ todo }}
            </li>
        </ul>
    </div>
</template>

<script>
import HelloButton from './components/HelloButton.vue';

export default {
    name: 'rApp',
    components: {
        HelloButton
    },
    data() {
        return {
            message: '부모 컴포넌트(HelloButton.vue)가 보낸 메시지',
            todoItems: ['첫번째 문자열', '두번째 문자열']
        }
    },
    methods: {
        addTodoItem(todoItem) {
            this.todoItems.push(todoItem);
        }
    }
}
</script>

<style>
#rapp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
