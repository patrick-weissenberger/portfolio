<template>
    <RouterView />
</template>






<script lang="ts" setup>
import useStoreSettings from "@/stores/useStoreSettings"

useStoreSettings()
</script>