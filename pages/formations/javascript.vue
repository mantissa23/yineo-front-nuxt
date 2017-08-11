<template>
  <ContentLayout>
    <timeline slot="content" />
  </ContentLayout>
</template>

<script>
import FormationJavaScript from '~/components/FormationJavaScript'
import ContentLayout from '~/components/ContentLayout'
export default {
  transition: 'fade',
  components: { ContentLayout }
}
</script>
