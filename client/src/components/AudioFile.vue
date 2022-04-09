<template>
  <div>
    <p>{{ `${audio.author} - ${audio.name}` }}</p>
    <audio controls>
      <source :src="`${FILE_URL}/audio_files/${audio.file}`" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
import {FILE_URL} from "@/utils/consts"


export default {
  name: 'audioFile',
  props: {
    audio: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      FILE_URL
    }
  }

}
</script>

<style scoped lang="scss">
div {
  padding: 20px;
  width: 100%;
}

audio {
  width: 100%;
}
</style>
