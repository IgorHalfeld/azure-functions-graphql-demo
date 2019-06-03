<template>
  <div class="card">
    <div
      :style="{
        backgroundImage: `url(${newOb.urlToImage})`
      }"
      class="card-image"
    />

    <GridContainer
      direction="column"
      :styles="{
        padding: '20px'
      }"
    >
      <StyledTitle
        :styles="{
          fontSize: '1.3rem',
          textAlign: 'left'
        }"
      >
        {{ newOb.title }}
      </StyledTitle>
      <StyledSubTitle
        :styles="{
          textAlign: 'left',
          color: '#bbb',
          fontSize: '1rem'
        }"
      >
        <i>By</i> <strong>{{ newOb.author || 'Unknown' }}</strong> at
        <i>{{ newOb.publishedAt | format }}</i>
      </StyledSubTitle>
      <p
        :style="{
          fontSize: '1rem',
          color: '#777',
          paddingTop: '15px',
          fontFamily: 'Open sans'
        }"
      >
        {{ newOb.content }}
      </p>

      <StyledButton
        :click-fn="navigate(newOb.url)"
        :styles="{
          marginTop: '20px'
        }"
        text="read more"
      />
    </GridContainer>
  </div>
</template>

<script>
import StyledTitle from '@/components/Functional/StyledTitle'
import StyledSubTitle from '@/components/Functional/StyledSubTitle'
import StyledButton from '@/components/Functional/StyledButton'
import GridContainer from '@/components/Functional/GridContainer'

export default {
  name: 'NewsItem',
  components: { StyledTitle, StyledSubTitle, StyledButton, GridContainer },
  filters: {
    format(value) {
      const date = new Date(value)
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    }
  },
  props: {
    newOb: { type: Object, required: true }
  },
  methods: {
    navigate(url) {
      return () => window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 420px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 0px 30px #ccc;
  margin-bottom: 20px;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }

  &-image {
    background-size: cover;
    height: 200px;
    width: 100%;
  }
}
</style>
