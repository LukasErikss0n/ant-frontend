import { defineStore } from 'pinia'
import { ref } from 'vue'
import packageService from '@/services/package'
import type { PackageCatalogItem, PackageDetail } from '@/types/package'

export const usePackageStore = defineStore('packages', () => {
  const packages = ref<PackageCatalogItem[]>([])
  const currentPackage = ref<PackageDetail | null>(null)
  const loading = ref(false)

  async function fetchPackages() {
    loading.value = true
    try {
      const res = await packageService.getAll()
      packages.value = res.packages
    } finally {
      loading.value = false
    }
  }

  async function fetchPackageDetail(name: string, version?: string) {
    loading.value = true
    try {
      currentPackage.value = await packageService.getOne(name, version)
    } finally {
      loading.value = false
    }
  }

  return { packages, currentPackage, loading, fetchPackages, fetchPackageDetail }
})
