<template>
  <div class="download-page">
    <div class="download-content">
      <div class="version-card">
        <h2>{{ $frontmatter.latestVersion }}</h2>
        <div class="version-info">
          <div class="version-number">v{{ $frontmatter.downloads[0].version }}</div>
          <div class="release-date">{{ $frontmatter.releaseDate }}: {{ $frontmatter.downloads[0].date.split('T')[0] }}</div>
        </div>
        
        <div class="download-options">
          <div class="download-option">
            <h3>{{ $frontmatter.sourcePackage }}</h3>
            <div class="download-links">
              <a :href="$frontmatter.downloads[0].source.url" class="primary-link">
                {{ $frontmatter.downloadSource }}
              </a>
              <div class="secondary-links">
                <a :href="$frontmatter.downloads[0].source.asc">{{ $frontmatter.signature }}</a>
                <a :href="$frontmatter.downloads[0].source.sha512">SHA512</a>
              </div>
            </div>
          </div>

          <div class="download-option">
            <h3>{{ $frontmatter.binaryPackage }}</h3>
            <div class="download-links">
              <a :href="$frontmatter.downloads[0].binary.url" class="primary-link">
                {{ $frontmatter.downloadBinary }}
              </a>
              <div class="secondary-links">
                <a :href="$frontmatter.downloads[0].binary.asc">{{ $frontmatter.signature }}</a>
                <a :href="$frontmatter.downloads[0].binary.sha512">SHA512</a>
              </div>
            </div>
          </div>
        </div>

        <div class="release-notes">
          <a :href="$frontmatter.downloads[0].releaseNotes" class="release-notes-link">
            {{ $frontmatter.viewReleaseNotes }}
          </a>
        </div>
      </div>

      <div class="verification-info">
        <h2>{{ $frontmatter.verifyDownloads }}</h2>
        <p>{{ $frontmatter.verifyDescription }} <a href="https://downloads.apache.org/incubator/ozhera/KEYS">KEYS</a> {{ $frontmatter.verifyDescription2 }}</p>
        <p>{{ $frontmatter.verifyInstructions }}<a href="https://www.apache.org/dyn/closer.cgi#verify">{{ $frontmatter.verifyInstructionsPage }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.download-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

h2 {
  border-top: none;
  margin: 0;
  padding: 0;
}

.download-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.version-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.version-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

.version-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.release-date {
  color: var(--vp-c-text-2);
}

.download-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.download-option {
  background: var(--vp-c-bg);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.download-option h3 {
  margin-bottom: 1rem;
}

.download-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.primary-link {
  display: inline-block;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
}

.primary-link:hover {
  background: var(--vp-c-brand);
  color: var(--vp-c-white);
}

.secondary-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.secondary-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.secondary-links a:hover {
  text-decoration: underline;
}

.release-notes {
  text-align: center;
  margin-top: 1rem;
}

.release-notes-link {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.release-notes-link:hover {
  text-decoration: underline;
}

.verification-info {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
}

.verification-info h2 {
  margin-bottom: 0.5rem;
}

.verification-info p {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.verification-info a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.verification-info a:hover {
  text-decoration: underline;
}
</style> 