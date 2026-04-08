<template>
    <div
        class="relative flex items-center bg-base-100 border-b border-base-300 px-4 h-18 z-50"
    >
        <router-link to="/" class="text-xl font-bold tracking-tight shrink-0"
            >Ant</router-link
        >
        <div class="join w-1/2 absolute left-1/2 -translate-x-1/2">
            <div class="join-item flex items-center bg-base-200 px-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Search packages"
                class="input join-item bg-base-200 flex-1 focus:outline-none border-none shadow-none"
            />
            <button
                class="btn join-item btn-neutral rounded-l-none shadow-none"
            >
                Search
            </button>
        </div>
        <router-link
            to="/profile"
            class="btn btn-ghost btn-circle avatar ml-auto"
        >
            <div class="w-8 rounded-full overflow-hidden">
                <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
            </div>
        </router-link>
    </div>
</template>
