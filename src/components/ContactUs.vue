<template>
  <div class="contact">
      <div class="container">
          <div class="row">
              <div class="col-12">

    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" class="mr-5">Submit</b-button>
      <b-button type="reset" >Reset</b-button>
    </b-form>
    <div v-if="showMessage">Your form has been submitted</div>
          </div>
          </div>
        </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          showMessage: false,
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        this.showMessage = true
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.contact {
  margin-bottom: 50px;
}
</style>
