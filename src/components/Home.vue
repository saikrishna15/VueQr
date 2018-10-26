<template>
  <div style="width: 1024px;height:800px;">

    <qrcode-reader :camera="camera" @decode="onDecode"  @init="onInit"></qrcode-reader>
  </div>
</template>

<script>
  import { QrcodeReader } from 'vue-qrcode-reader'

  export default {
    data(){

      return {
        camera: {},

      }
    },
    components: {
      QrcodeReader
    },
    computed: {
      camera () {

          return {
            facingMode: { ideal: 'environment' },
            width:1000,
            height:800
          }

      }
    },
    methods: {
      async onDecode (content){
        let code = content
        console.log(code)
        this.stopCamera()
        if ((code[2] == "1" || code[2] == "6") || ((code[2] == "2" || code[2] == "5"))) {
          // baseOrder 5 (v3 api), orders 2 (v2 api)
          //if all the items in delivery, we need show a option to choose

          let result = await this.$http.get("https://mm.manufacton.com/api/v3/qr/get/latest/"+code)
          if(result) {
            let orderData = result.data
            window.open('/#/managers/'+orderData.project._id+'/'+orderData.id+'/'+orderData.stage,'_blank')
          }

        }else if (code[2] == "3") {
          //Shipping
          let label = {
            "shippingLabelId": code.substr(45 - 24 + 1, 24)
          }
          //$state.go('app.' + "delivery-details", {itemId: label.shippingLabelId});
        }


      window.setTimeout(() => {
        this.startCamera()
      }, 2000)



  },
      stopCamera () {
        this.camera = false
      },
      startCamera () {
        // use default settings
        this.camera = null
      },

      async onInit(promise){
         try{
           await promise
         } catch (error) {
           if (error.name === 'NotAllowedError') {
             console.log("user denied permission")
             // user denied camera access permisson
           } else if (error.name === 'NotFoundError') {
             console.log("something not found")
             // no suitable camera device installed
           } else if (error.name === 'NotSupportedError') {
             // page is not served over HTTPS (or localhost)
             console.log("Browser support issue")
           } else if (error.name === 'NotReadableError') {
             console.log("Camera or QR not clear")
             // maybe camera is already in use
           } else if (error.name === 'OverconstrainedError') {
             console.log("too close or too far")
             // passed constraints don't match any camera.
             // Did you requested the front camera although there is none?
           } else {
             console.log("browser does not have webrtc")
             // browser might be lacking features (WebRTC, ...)
           }
         } finally {
           console.log("loading")
           // hide loading indicator
         }

      },
      async detectToResize(constraints){
        console.log(constraints)
      },


  }
  }

</script>

<style  scoped>

</style>
