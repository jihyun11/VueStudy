import { createApp } from 'vue';
// import App from './App.vue';
import rApp from './rApp.vue';
import router from './router/router'; // 위에서 생성한 router.js 파일을 가져옵니다.

const app = createApp(rApp);

app.use(router); // Router를 Vue 애플리케이션에 사용

app.mount('#rapp'); //내가 보여주고싶은 페이지의 id는 rapp인데, 왜 app으로 바꾸니까 되는지? 그리고 const의 변수명은 왜 꼭 app이어야 하는지?
//답변: index.html의 id=#rapp에게 영향을 받는다. 변수명은 마음대로 해도 됨.
