<template>
    <div class="HelloButton">
        <h1> {{ msgTitle }}</h1>
        <!-- props를 이곳에서 연결 -->

        <input type="text" v-model="todoItem"/>
        <button v-on:click="appTodo">문자열 추가</button>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default({
    name: 'HelloButton',
    props: ['msgTitle'],
    data() {
        return {
            todoItem: ''
            // 사용할 todoItem을 빈 문자열로 초기화
        }
    },
    methods: {
        appTodo() {
            if (this.todoItem !== '') {
                //입력필드의 값이 비어있지 않으면

                console.log(this.todoItem);
                this.$emit('addItemEvent', this.todoItem); //this$emit('이벤트명', 보낼 데이터)
                //$emit을 통해 부모컴포넌트에 값을 전달
                this.todoItem= '';
                //이후 todoItem을 다시 초기화 (검색어 쪽이 비어있어야 다음 값을 입력하므로)
            }
        }
    },
})
</script>
