<template>
  <ContentLayout>
    <timeline slot="content" />
  </ContentLayout>
</template>

<script>
import timeline from '~/components/Timeline'
import ContentLayout from '~/components/ContentLayout'
export default {
  transition: 'fade',
  components: { timeline, ContentLayout }
}
</script>
