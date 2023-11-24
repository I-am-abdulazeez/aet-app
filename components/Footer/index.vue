<template>
  <div class="footer">
    <VFooter padless color="white black--text">
      <div class="container">
        <VCard flat tile class="text-center black--text">
          <VCardText>
            <VBtn
              class="mx-4"
              target="_blank"
              icon
              color="#3b5998"
              href="https://www.facebook.com/AETCOgroup/?__tn__=%2Cd%2CP-R&eid=ARD05YmC_4Aa6Sur7talOSrPNH5odDl7sSfeugDDvlBENs-HiOoIQvyMhVqRGWZKMq8azjWk336HzzSl"
            >
              <VIcon size="24px">fab fa-facebook</VIcon>
            </VBtn>

            <VBtn
              class="mx-4"
              target="_blank"
              icon
              color="#00acee"
              href="https://twitter.com/antrum_engr"
            >
              <VIcon size="24px">fab fa-twitter</VIcon>
            </VBtn>

            <VTooltip location="top" color="#DB4437">
              <template v-slot:activator="{ props }">
                <VBtn
                  class="mx-4"
                  target="_blank"
                  v-on="props"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=antrumengineering@gmail.com&su=Contact_Antrum&body=Let_know_you"
                  icon
                  color="#DB4437"
                >
                  <VIcon size="24px">fab fa-google-plus</VIcon>
                </VBtn>
              </template>
              <span>antrumengineering@gmail.com</span>
            </VTooltip>

            <VTooltip location="top" color="secondary">
              <template v-slot:activator="{ props }">
                <VBtn
                  class="mx-4"
                  target="_blank"
                  v-on="props"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@antrumengineering.com&su=Contact_Antrum&body=Let_know_you"
                  icon
                  color="secondary"
                >
                  <VIcon size="24px">mdi-email</VIcon>
                </VBtn>
              </template>
              <span>info@antrumengineering.com</span>
            </VTooltip>

            <VBtn
              class="mx-4"
              href="https://www.linkedin.com/company/antrum-engineering/"
              target="_blank"
              icon
              color="#0e76a8"
            >
              <VIcon size="24px">fab fa-linkedin</VIcon>
            </VBtn>

            <VBtn
              class="mx-4"
              target="_blank"
              icon
              color="#833AB4"
              href="https://www.instagram.com/antrum_engr/"
            >
              <VIcon size="24px">fab fa-instagram</VIcon>
            </VBtn>
          </VCardText>

          <VCardText class="pt-0 black--text">
            We are equipped to undertake high capacity works requiring heavy
            duty machines, cranes, warehousing and others via specialist service
            and equipment providers that we have relationship with. We also have
            relationship with support and administrative organizations including
            courier service, authorized spares and part dealers for generators
            CAT, SDMO and Perkins, electrical vendors, and generator rental
            which helps to entrench our qualitative and reliable service
            standpoint.
          </VCardText>

          <VDivider />

          <VCardText class="black--text title-1">
            <VRow>
              <VCol cols="12" lg="6" md="6" sm="12">
                <VIcon color="primary" class="mb-3">mdi-map-marker</VIcon>
                <p class="black--text">
                  38, Oyewole Street, Palmgrove, Ilupeju, Lagos.
                </p>
                <p class="mb-1 grey--text text-lighten-3">
                  6B, Bendel Close, Victoria Island, Lagos.
                </p>
              </VCol>
              <VCol cols="12" lg="6" md="6" sm="12">
                <VIcon color="primary" class="mb-3">mdi-phone</VIcon>
                <p class="black--text">+234 815 303 8811.</p>
                <p class="mb-1 black--text">+234 815 303 8800.</p>
              </VCol>
            </VRow>
          </VCardText>

          <VDivider />

          <VCardText class="secondary--text">
            {{ new Date().getFullYear() }} — <strong>AET</strong>
          </VCardText>
        </VCard>
      </div>
    </VFooter>
  </div>
</template>
