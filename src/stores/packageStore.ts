import { defineStore } from "pinia";
import { ref } from "vue";

export interface PackageVersion {
    version: string;
    releasedAt: string;
}

export interface Package {
    id: string;
    name: string;
    description: string;
    readme: string;
    author: string;
    downloads: number;
    publishedAt: string;
    version: string;
    versions: PackageVersion[];
}

export const usePackageStore = defineStore("packages", () => {
    const packages = ref<Package[]>([
        {
            id: "pingpong",
            name: "pingpong",
            description: "A demo of CPM",
            readme: "# pingpong\n\nA simple ping pong demo package for CPM. Use it to test your setup.",
            author: "Vincent Gustafsson",
            downloads: 15,
            publishedAt: "Mar 6, 2026",
            version: "v1.5.0",
            versions: [
                { version: "1.5.0", releasedAt: "2026-03-08" },
                { version: "1.0.0", releasedAt: "2026-03-08" },
                { version: "0.0.1", releasedAt: "2026-03-06" },
            ],
        },
        {
            id: "antcore",
            name: "antcore",
            description: "Core utilities and helpers for the Ant ecosystem",
            readme: "# antcore\n\nProvides core utilities, helpers, and shared types used across the Ant package ecosystem.",
            author: "Lukas Andersson",
            downloads: 142,
            publishedAt: "Apr 1, 2026",
            version: "v2.0.1",
            versions: [
                { version: "2.0.1", releasedAt: "2026-04-01" },
                { version: "2.0.0", releasedAt: "2026-03-20" },
                { version: "1.0.0", releasedAt: "2026-03-01" },
            ],
        },
    ]);

    const loading = ref(false);

    function getById(id: string) {
        return packages.value.find((p) => p.id === id) ?? null;
    }

    // Replace the body of this function to fetch from your backend
    async function fetchPackages() {
        loading.value = true;
        // TODO: const res = await fetch("/api/packages");
        // packages.value = await res.json();
        loading.value = false;
    }

    return { packages, loading, fetchPackages, getById };
});
