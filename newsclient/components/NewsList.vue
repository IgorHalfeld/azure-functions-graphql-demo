<template>
  <GridContainer
    :styles="{
      width: '100%'
    }"
    :wrap="true"
    align-x="space-around"
  >
    <template v-if="!$apollo.queries.getTopHeadlines.loading">
      <NewsItem
        v-for="(item, index) in getTopHeadlines.articles"
        :key="index"
        :new-ob="item"
      />
    </template>
    <template v-else>
      <Loader background-color="transparent" />
    </template>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer'
import NewsItem from '@/components/NewsItem'
import Loader from '@/components/Loader'
import articleListQuery from '@/apollo/queries/articleList'

export default {
  name: 'NewsList',
  apollo: {
    getTopHeadlines: {
      query: articleListQuery
    }
  },
  components: { GridContainer, NewsItem, Loader },
  data: () => ({
    getTopHeadlines: {
      status: '',
      totalResults: 0,
      articles: {}
    }
  })
}
</script>
