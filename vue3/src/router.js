import {createRouter, createWebHistory} from "vue-router";
import DcHeroes from "./pages/DcHeroes.vue";
import CalendarApp from "./pages/CalendarApp.vue";
import HomeView from "./pages/HomeView.vue";
import MarkdownApp from "./pages/MarkdownApp.vue";
import SliderApp from "./pages/SliderApp.vue";
import CalculatorApp from "./pages/CalculatorApp.vue";
import ReusableModal from "./pages/ReusableModal.vue";
import UserCrud from "./pages/UserCrud.vue";
import ChatApp from "./pages/ChatApp.vue";
import TensorFlow from "./pages/TensorFlow.vue";
import store from "./store/index"

const routes = [
{path: "/", component:HomeView},
{path: "/dc-heroes", component: DcHeroes},
{path: "/calendar-app", component: CalendarApp},
{path: "/markdown-app", component: MarkdownApp, meta: {middleware:'auth'}},
{path: "/slider-app", component: SliderApp},
{path: "/calculator-app", component: CalculatorApp, meta: {middleware:'auth'}},
{path: "/reuseable-modal", component: ReusableModal},
{path: "/chat-app", component: ChatApp,meta: {middleware:'auth'}},
{path: "/user-crud", component: UserCrud },
{path: "/tensor-flow", component: TensorFlow },
];

const router = createRouter({
history: createWebHistory(),
routes
})




router.beforeEach((to, _, next)  => {
if(to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if(middleware) {
        middleware.default(next, store)
    }
} else {
    next();
}
})

export default router;