<template>
    <div style="width:400px">
        <zoomOnHover :imgNormal="imgSrc"></zoomOnHover>
    </div>
</template>

<script>
import zoomOnHover from "./zoom.vue"
export default {
    data () {
        return {
            imgSrc: "https://www.lilysilk.com/media/catalog/product/m/no/1008/19-momme-terse-silke-pudebetra-ek-Dark-Teal-1008-11-4363-1-20190401171615.jpg"
        }
    },
    components: {
        zoomOnHover
    }
}
</script>
