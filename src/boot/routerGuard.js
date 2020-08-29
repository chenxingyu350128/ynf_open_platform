import router from "../router/index";
import { LocalStorage } from "quasar";
console.log(process);
router().beforeEach((to, from, next) => {
  const sessionId = LocalStorage.getItem("sessionId");
  if (to.meta.auth) {
    if (!sessionId) {
      router.push("/signPage");
    } else {
      next();
    }
  }
});

router().afterEach(() => {
  window.scrollTo(0, 0);
});
