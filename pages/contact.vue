<template>
  <ContentLayout>
    <Contact slot="content" />
  </ContentLayout>
</template>

<script>
import ContentLayout from '~/components/ContentLayout'
import Contact from '~/components/Contact'
export default {
  components: { ContentLayout, Contact }
}
</script>
