<template>
  <div class="font-weight-medium">
    <VContainer>
      <VCard variant="flat" class="text-center">
        <VCardText>
          <VBtn
            class="mx-3"
            target="_blank"
            icon
            color="#3b5998"
            size="small"
            variant="text"
            href="https://www.facebook.com/AETCOgroup/?__tn__=%2Cd%2CP-R&eid=ARD05YmC_4Aa6Sur7talOSrPNH5odDl7sSfeugDDvlBENs-HiOoIQvyMhVqRGWZKMq8azjWk336HzzSl"
          >
            <VIcon size="20px">mdi-facebook</VIcon>
          </VBtn>

          <VBtn
            class="mx-3"
            target="_blank"
            icon
            color="#00acee"
            size="small"
            variant="text"
            href="https://twitter.com/antrum_engr"
          >
            <VIcon size="20px">mdi-twitter</VIcon>
          </VBtn>

          <VTooltip location="top center">
            <template v-slot:activator="{ props }">
              <VBtn
                class="mx-3"
                target="_blank"
                v-bind="props"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=antrumengineering@gmail.com&su=Contact_Antrum&body=Let_know_you"
                icon
                color="#DB4437"
                size="small"
                variant="text"
              >
                <VIcon size="20px">mdi-google-plus</VIcon>
              </VBtn>
            </template>
            <span>antrumengineering@gmail.com</span>
          </VTooltip>

          <VTooltip location="top center">
            <template v-slot:activator="{ props }">
              <VBtn
                class="mx-3"
                target="_blank"
                v-bind="props"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@antrumengineering.com&su=Contact_Antrum&body=Let_know_you"
                icon
                color="secondary"
                size="small"
                variant="text"
              >
                <VIcon size="20px">mdi-email</VIcon>
              </VBtn>
            </template>
            <span>info@antrumengineering.com</span>
          </VTooltip>

          <VBtn
            class="mx-3"
            href="https://www.linkedin.com/company/antrum-engineering/"
            target="_blank"
            size="small"
            variant="text"
            icon
            color="#0e76a8"
          >
            <VIcon size="20px">mdi-linkedin</VIcon>
          </VBtn>

          <VBtn
            class="mx-3"
            target="_blank"
            size="small"
            variant="text"
            icon
            color="#833AB4"
            href="https://www.instagram.com/antrum_engr/"
          >
            <VIcon size="20px">mdi-instagram</VIcon>
          </VBtn>
        </VCardText>

        <VCardText class="lh-sm">
          We are equipped to undertake high capacity works requiring heavy duty
          machines, cranes, warehousing and others via specialist service and
          equipment providers that we have relationship with. We also have
          relationship with support and administrative organizations including
          courier service, authorized spares and part dealers for generators
          CAT, SDMO and Perkins, electrical vendors, and generator rental which
          helps to entrench our qualitative and reliable service standpoint.
        </VCardText>

        <VDivider />

        <VCardText class="font-weight-light">
          <v-row>
            <v-col cols="12" lg="6" md="6" sm="12">
              <VIcon color="primary" class="mb-3">mdi-map-marker</VIcon>
              <p class="">38, Oyewole Street, Palmgrove, Ilupeju, Lagos.</p>
              <p class="mb-1 text-grey mt-2">
                6B, Bendel Close, Victoria Island, Lagos.
              </p>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <VIcon color="primary" class="mb-3">mdi-phone</VIcon>
              <p class="black--text">+234 815 303 8811.</p>
              <p class="mb-1 black--text">+234 815 303 8800.</p>
            </v-col>
          </v-row>
        </VCardText>

        <VDivider />

        <VCardText class="py-8">
          {{ new Date().getFullYear() }} — <strong>AET</strong>
        </VCardText>
      </VCard>
    </VContainer>
  </div>
</template>

<style lang="scss" scoped>
.lh-sm {
  line-height: 2;
}
</style>
