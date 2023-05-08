import Start from "../components/Start/Start";
import Questions from "../components/Questions/Questions";
import Results from "../components/Results/Results";

export const routes = [
  { path: '/questions/:id', component: Questions, exact: true },
  { path: '/results', component: Results, exact: true },
  { path: '/', component: Start, exact: true }
]