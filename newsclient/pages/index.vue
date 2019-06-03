<template>
  <GridContainer
    direction="column"
    align-x="flex-start"
    align-y="center"
    :styles="{
      width: '100%',
      height: '100%',
      padding: '20px 10px'
    }"
  >
    <StyledTitle
      :styles="{
        fontFamily: 'Lobster',
        fontSize: '3.5rem'
      }"
    >
      Az Functions + GraphQl
    </StyledTitle>
    <StyledSubTitle
      :styles="{
        marginBottom: '40px',
        color: '#ccc'
      }"
    >
      <i>{{ fetchTotalResults }}</i>
    </StyledSubTitle>
    <NewsList />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer'
import StyledTitle from '@/components/Functional/StyledTitle'
import StyledSubTitle from '@/components/Functional/StyledSubTitle'
import NewsList from '@/components/NewsList'
import totalResultsQuery from '@/apollo/queries/totalResults.graphql'

export default {
  apollo: {
    getTopHeadlines: {
      query: totalResultsQuery
    }
  },
  components: {
    GridContainer,
    StyledTitle,
    StyledSubTitle,
    NewsList
  },
  data: () => ({
    getTopHeadlines: {
      totalResults: 0
    }
  }),
  computed: {
    fetchTotalResults() {
      return this.$apollo.queries.getTopHeadlines.loading
        ? 'fetching top news count...'
        : `${this.getTopHeadlines.totalResults} top news`
    }
  },
  methods: {
    goToRoute(route) {
      return () => this.$router.push(route)
    }
  }
}
</script>
