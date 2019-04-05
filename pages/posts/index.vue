<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import { delay } from '@/store/util'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      delay(1500)
      resolve({
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our first post!',
            thumbnail:
              'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post!',
            thumbnail:
              'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
          }
        ]
      })
      /* reject(new Error()) */
    })
      .then(data => {
        return data
      })
      .catch(e => {
        context.error(e)
      })
    /*
    await delay(1500)
    return {
      loadedPosts: [
        {
          id: '1',
          title: 'First Post',
          previewText: 'This is our first post!',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        },
        {
          id: '2',
          title: 'Second Post',
          previewText: 'This is our second post!',
          thumbnail:
            'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        }
      ]
    }
    */
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
