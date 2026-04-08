<template>
    <footer class="bg-base-200 border-t border-base-300 mt-auto">
        <div class="max-w-6xl mx-auto px-8 py-12 flex gap-16">
            <!-- Left: icons -->
            <div class="flex flex-col gap-4 shrink-0">
                <router-link to="/" class="text-2xl font-bold text-base-content"
                    >Ant</router-link
                >
                <a
                    href="https://github.com/ant-pm"
                    target="_blank"
                    class="text-base-content/50 hover:text-base-content transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        />
                    </svg>
                </a>
            </div>

            <!-- Link columns -->
            <div class="flex flex-1 gap-16 flex-wrap">
                <!-- Support -->
                <div class="flex flex-col gap-3">
                    <h3 class="font-bold text-base-content text-sm">Support</h3>
                    <a
                        href="#"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >Help</a
                    >
                    <a
                        href="#"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >Status</a
                    >
                    <a
                        href="#"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >Contact Ant</a
                    >
                </div>

                <!-- Company -->
                <div class="flex flex-col gap-3">
                    <h3 class="font-bold text-base-content text-sm">Company</h3>
                    <router-link
                        to="/about"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >About</router-link
                    >
                </div>

                <!-- Terms & Policies -->
                <div class="flex flex-col gap-3">
                    <h3 class="font-bold text-base-content text-sm">
                        Terms &amp; Policies
                    </h3>

                    <a
                        href="#"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >Terms of Use</a
                    >
                    <a
                        href="#"
                        class="text-base-content/60 hover:text-base-content text-sm transition-colors"
                        >Code of Conduct</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>
