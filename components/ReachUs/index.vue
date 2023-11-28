<template>
  <div class="contact mt-5">
    <VRow align="center">
      <VCol cols="12" sm="12" lg="5" md="5">
        <!-- <h2 class="font-weight-thin mb-4">Let's Hear from you.</h2> -->
        <VCard max-width="400">
          <VContainer>
            <h6 class="text-h6 mb-5">Let's hear from you.</h6>
            <VForm validate-on="submit lazy" @submit.prevent>
              <VTextField
                v-model="name"
                :rules="nameValidationRule(name)"
                :counter="20"
                color="primary"
                label="First name"
                required
                variant="underlined"
              ></VTextField>

              <VTextField
                v-model="email"
                :rules="emailValidationRule(email)"
                label="Email Address"
                color="primary"
                required
                variant="underlined"
              ></VTextField>

              <VTextarea
                v-model="message"
                :rules="[(v) => !!v || 'Messsage is required']"
                label="Message"
                required
                rows="3"
                row-height="15"
                counter
                no-resize
                variant="underlined"
              ></VTextarea>
              <div class="d-flex my-5 justify-space-between">
                <VBtn
                  :loading="isLoading"
                  type="submit"
                  :disabled="isDisabled"
                  color="secondary"
                  variant="flat"
                  size="small"
                >
                  Contact Us
                </VBtn>

                <VBtn
                  variant="flat"
                  size="small"
                  class="ml-4"
                  @click="clearForm"
                  >Clear form</VBtn
                >
              </div>
            </VForm>
          </VContainer>
        </VCard>
      </VCol>

      <VCol cols="12" lg="7" md="7" sm="12">
        <div class="mapouter" v-if="map">
          <div class="gmap_canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.866582902615!2d3.3613929751868454!3d6.538527822988119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dfbb32e01f9%3A0xbc56b206b1033c22!2sANTRUM%20ENGINEERING%20AND%20TECHNOLOGY%20COMPANY%20NIGERIA%20LIMITED!5e0!3m2!1sen!2sng!4v1701077250569!5m2!1sen!2sng"
              width="700"
              height="450"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div v-else>
          <p>Loading map...</p>
        </div>
      </VCol>
    </VRow>
    <VSnackbar
      color="success"
      rounded="pill"
      class="text-subtitle-1"
      v-model="showSuccessSnackbar"
      :timeout="2000"
    >
      <!-- {{ successMessage }} -->
      <VBtn color="white" variant="text" @click="showSuccessSnackbar = false">
        Close
      </VBtn>
    </VSnackbar>
    <VSnackbar
      color="error"
      rounded="pill"
      class="text-subtitle-1"
      v-model="showErrorSnackbar"
      :timeout="2000"
    >
      <!-- {{ errorMessage }} -->
      <VBtn color="white" variant="text" @click="showErrorSnackbar = false">
        Close
      </VBtn>
    </VSnackbar>
  </div>
</template>

<script setup lang="ts">
import { useNameValidator, useEmailValidator } from '~/composables';

const { nameValidationRule } = useNameValidator();
const { emailValidationRule } = useEmailValidator();

const name = ref('');
const email = ref('');
const message = ref('');

const map = ref(false);
const isLoading = ref(false);
const isDisabled = ref(false);
const showSuccessSnackbar = ref(false);
const showErrorSnackbar = ref(false);

onMounted(() => {
  map.value = true;
});

const submitForm = async () => {};

const clearForm = () => {
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style lang="scss" scoped>
.v-text-field :deep(input) {
  font-size: 0.6em;
  font-weight: 100;
}

.v-textarea :deep(textarea) {
  font-size: 0.6em;
  font-weight: 100;
}
.contact {
  .mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 700px;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 700px;
    padding: 1em;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 300px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 500px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 700px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 500px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 500px;
      width: 600px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 500px;
      width: 600px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .mapouter {
      position: relative;
      text-align: right;
      height: 300px;
      width: 600px;
    }
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 300px;
      width: 330px;
    }
  }
}
</style>
