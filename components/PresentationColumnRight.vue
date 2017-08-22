<template>
  <div>
    <section class="section has-text-centered">
      <img class="photo" src="~/assets/images/photo-square.jpg" />

      <h2 class="title is-4">
        Ils m'ont fait confiance
      </h2>
      <ul class="clients">
        <li>
          <img src="~/assets/images/France_24_logo.svg" class="client-logo" alt="France 24" title="France 24" />
        </li>
        <li>
          <img src="~/assets/images/France_inter_logo.svg" class="client-logo" alt="France Inter" title="France Inter" />
        </li>
        <li>
          <img src="~/assets/images/Radio_France_logo.svg" class="client-logo" alt="Radio France" title="Radio France" />
        </li>
        <li>
          <img src="~/assets/images/RFI_logo.svg" class="client-logo" alt="rfi" title="rfi" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.photo {
  max-height: 300px;
  border: 10px solid white;
  border-radius: 10rem;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
}

.clients {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.client-logo {
  max-width: 2.5rem;
  margin: .5rem;
}
</style>
