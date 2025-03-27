<template>
  <div class="version-list">
    <div class="version-table">
      <table>
        <thead>
          <tr>
            <th>{{ $frontmatter.version }}</th>
            <th>{{ $frontmatter.releaseDate }}</th>
            <th>{{ $frontmatter.sourcePackage }}</th>
            <th>{{ $frontmatter.binaryPackage }}</th>
            <th>{{ $frontmatter.releaseNotes }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="download in $frontmatter.downloads" :key="download.version">
            <td>v{{ download.version }}</td>
            <td>{{ download.date.split('T')[0] }}</td>
            <td>
              <a :href="download.source.url">{{ $frontmatter.sourcePackage }}</a>
              (<a :href="download.source.asc">{{ $frontmatter.signature }}</a> |
              <a :href="download.source.sha512">SHA512</a>)
            </td>
            <td>
              <a :href="download.binary.url">{{ $frontmatter.binaryPackage }}</a>
              (<a :href="download.binary.asc">{{ $frontmatter.signature }}</a> |
              <a :href="download.binary.sha512">SHA512</a>)
            </td>
            <td>
              <a :href="download.releaseNotes">{{ $frontmatter.viewReleaseNotes }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.version-list {
  margin-top: 0rem;
  background: var(--vp-c-bg);
  border-radius: 0px;
}

.version-list h2 {
  margin-bottom: 0rem;
}

.version-table {
  overflow-x: auto;
  margin: 0;
}

.version-table table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  margin: 0;
}

.version-table th,
.version-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
  white-space: nowrap;
}

.version-table th {
  font-weight: 600;
  color: var(--vp-c-text-1);
  position: sticky;
  top: 0;
  background: var(--vp-c-bg-soft);
  z-index: 1;
}

.version-table td {
  color: var(--vp-c-text-2);
}

.version-table a {
  color: var(--vp-c-brand);
  text-decoration: none;
  white-space: nowrap;
}

.version-table a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .version-table {
    font-size: 0.9rem;
  }
  
  .version-table th,
  .version-table td {
    padding: 0.5rem;
  }
}
</style> 