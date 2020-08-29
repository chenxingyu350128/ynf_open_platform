import { LocalStorage } from "quasar";
export default function() {
  return {
    sessionId: LocalStorage.getItem("sessionId")
  };
}
