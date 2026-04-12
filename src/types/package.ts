export interface PackageCatalogLatestVersion {
  version: string
  description: string
  published_at: string
}

export interface PackageCatalogItem {
  name: string
  repository_owner: string
  latest_version: PackageCatalogLatestVersion
  version_count: number
  download_count: number
}

export interface PackageCatalogResponse {
  packages: PackageCatalogItem[]
}

export interface PackageVersionListItem {
  version: string
  published_at: string
}

export interface PackageTemplate {
  file: string
  url: string
}

export interface PackageSelectedVersion {
  version: string
  description: string
  published_at: string
  download_count: number
  archive_download_url: string
  values_file_url: string
  templates: PackageTemplate[]
}

export interface PackageDownloadResponse {
  package_name: string
  version: string
  download_url: string
}

export interface PackageDetail {
  name: string
  repository_owner: string
  download_count: number
  versions: PackageVersionListItem[]
  selected_version: PackageSelectedVersion
}
