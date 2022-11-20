<!--
 * @Author: Chengbotao
 * @Date: 2022-11-21 00:12:09
-->
<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'

interface DefaultThemeHomePageFrontmatterFeatures {
  features?: {
    title: string;
    details: string;
    icon?: string
    url?: string
  }[];
}
const frontmatter = usePageFrontmatter<Partial<DefaultThemeHomePageFrontmatter & DefaultThemeHomePageFrontmatterFeatures>>()
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})
const handleClickFeature = (url: string | undefined) => {
  url && (window.location.href = url)
}
</script>

<template>
  <div v-if="features.length" class="features">
    <div v-for="feature in features" :key="feature.title" class="feature" @click="handleClickFeature(feature.url)">
      <div v-if="feature.icon" class="icon">{{ feature.icon }}</div>
      <h2 class="title">{{ feature.title }}</h2>
      <p class="details">{{ feature.details }}</p>
    </div>
  </div>
</template>

<style scoped>
.feature {
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  background-color: var(--c-bg-lighter);
  cursor: pointer;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--c-bg-light);
  width: 48px;
  height: 48px;
  font-size: 24px;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-text-light);
}
</style>
