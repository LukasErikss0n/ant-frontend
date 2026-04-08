import { defineStore } from "pinia";
import { ref } from "vue";

export interface User {
  username: string;
  bio: string;
  location: string;
  joinedAt: string;
  avatarUrl: string;
  packageCount: number;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<User>({
    username: "Ant manager",
    bio: "Welcome to the Colony",
    location: "Everywhere",
    joinedAt: "Apr 08, 2026",
    avatarUrl: "/src/assets/antlogo-white.png",
    packageCount: 0,
  });

  // TODO: replace with API call, e.g. const res = await fetch("/api/user/me");
  async function fetchUser() {
    // user.value = await res.json();
  }

  return { user, fetchUser };
});
