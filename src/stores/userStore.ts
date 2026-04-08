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
        username: "LukasErikss0n",
        bio: "Hello",
        location: "Luleå",
        joinedAt: "Mar 06, 2026",
        avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        packageCount: 0,
    });

    // TODO: replace with API call, e.g. const res = await fetch("/api/user/me");
    async function fetchUser() {
        // user.value = await res.json();
    }

    return { user, fetchUser };
});
