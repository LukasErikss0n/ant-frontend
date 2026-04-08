<template>
    <div>
        <!-- Section 1: Hero -->
        <section
            class="relative h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            <!-- Teal radial glow -->
            <div
                class="absolute inset-0 pointer-events-none"
                style="
                    background: radial-gradient(
                        ellipse 60% 50% at 50% 50%,
                        rgba(20, 184, 166, 0.12) 0%,
                        transparent 70%
                    );
                "
            ></div>

            <div
                class="relative flex flex-col items-center text-center gap-6 max-w-2xl"
            >
                <h1
                    class="text-5xl sm:text-6xl font-bold text-white leading-tight"
                >
                    Discover. Install. Deploy.
                </h1>
                <p class="text-white/60 text-base sm:text-lg leading-relaxed">
                    Ant is a modern package registry for developers — find
                    trusted packages, manage dependencies, and publish your own
                    tools to the community with ease.
                </p>

                <!-- Quick-start snippet -->
                <div
                    class="flex items-center gap-2 bg-base-300 border border-base-content/10 rounded-lg px-4 py-2.5 font-mono text-sm text-base-content/70 w-full max-w-xs"
                >
                    <span class="text-teal-400 select-none">$</span>
                    <span class="flex-1 text-left"
                        >cpm install &lt;package&gt;</span
                    >
                    <button
                        @click="copyInstall"
                        class="text-base-content/30 hover:text-base-content/70 transition-colors text-xs shrink-0"
                    >
                        {{ copied ? "Copied!" : "Copy" }}
                    </button>
                </div>

                <div class="flex gap-3">
                    <router-link
                        to="/packages"
                        class="btn btn-neutral shadow-none"
                    >
                        Packages
                    </router-link>
                    <router-link
                        to="/about"
                        class="btn bg-base-300 border border-base-content/10 text-base-content/70 hover:bg-base-200 hover:text-base-content shadow-none"
                    >
                        Learn more
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Section 2: Feature cards -->
        <section
            class="relative min-h-screen flex items-center justify-center py-24 px-6"
        >
            <div class="flex flex-col gap-6 w-full max-w-lg">
                <!-- Card 1 -->
                <div
                    class="rounded-lg bg-base-300 border border-base-content/10 p-6 flex flex-col gap-4"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-base-content/10 flex items-center justify-center text-base-content"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-base-content font-semibold text-lg">
                            Package Registry
                        </h3>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30"
                            >Publish</span
                        >
                        <span class="text-base-content/30">→</span>
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-base-content/10 text-base-content/60"
                            >Registry</span
                        >
                        <span class="text-base-content/30">→</span>
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-base-content/10 text-base-content/60"
                            >Install</span
                        >
                    </div>
                    <p class="text-base-content/70 text-sm leading-relaxed">
                        Publish and distribute packages with ease. Ant
                        automatically handles versioning, dependencies, and
                        distribution at scale.
                    </p>
                    <p class="text-teal-400/80 text-xs">
                        Use cases:
                        <span class="text-base-content/40"
                            >Libraries, CLI tools, shared modules, internal
                            packages</span
                        >
                    </p>
                </div>

                <!-- Card 2 -->
                <div
                    class="rounded-lg bg-base-300 border border-base-content/10 p-6 flex flex-col gap-4"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-base-content/10 flex items-center justify-center text-base-content"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </div>
                        <h3 class="text-base-content font-semibold text-lg">
                            Version Control
                        </h3>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30"
                            >Desired State</span
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 text-white/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-base-content/10 text-base-content/60"
                            >Actual State</span
                        >
                    </div>
                    <p class="text-base-content/70 text-sm leading-relaxed">
                        Define package versions declaratively. Ant continuously
                        reconciles your dependency tree and resolves conflicts
                        automatically.
                    </p>
                    <p class="text-teal-400/80 text-xs">
                        Use cases:
                        <span class="text-base-content/40"
                            >Monorepos, dependency graphs, auto-upgrades,
                            security patches</span
                        >
                    </p>
                </div>

                <!-- Card 3 -->
                <div
                    class="rounded-lg bg-base-300 border border-base-content/10 p-6 flex flex-col gap-4"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-base-content/10 flex items-center justify-center text-base-content"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-base-content font-semibold text-lg">
                            Live Collaboration
                        </h3>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30"
                            >Client</span
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 text-white/40"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                            />
                        </svg>
                        <span
                            class="px-2 py-0.5 rounded text-xs font-mono bg-base-content/10 text-base-content/60"
                            >Team</span
                        >
                    </div>
                    <p class="text-base-content/70 text-sm leading-relaxed">
                        Real-time collaboration on package development. Stream
                        updates, reviews, and notifications between team members
                        instantly.
                    </p>
                    <p class="text-teal-400/80 text-xs">
                        Use cases:
                        <span class="text-base-content/40"
                            >Team workflows, code reviews, release coordination,
                            notifications</span
                        >
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const copied = ref(false);
function copyInstall() {
    navigator.clipboard.writeText("cpm install <package>");
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
}
</script>
