import { http, getText } from '@/utils/http'
import type { PackageCatalogResponse, PackageDetail, PackageDownloadResponse } from '@/types/package'

export default {
  getAll() {
    return http<PackageCatalogResponse>('/packages')
  },

  getOne(name: string, version?: string) {
    const query = version ? `?version=${version}` : ''
    return http<PackageDetail>(`/packages/${name}${query}`)
  },

  getDownloadUrl(name: string, version: string) {
    return http<PackageDownloadResponse>(`/packages/${name}/${version}/download`)
  },

  getValues(name: string, version: string) {
    return getText(`/packages/${name}/versions/${version}/values`)
  },

  getTemplate(name: string, version: string, templateFile: string) {
    return getText(`/packages/${name}/versions/${version}/templates/${templateFile}`)
  },
}
