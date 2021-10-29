<template>
  <div class="bg-image" id="home-body">
    <h1>ACCUEIL</h1>
    <div id="home-div">
      <div>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div>
        <h3>Why do we use it?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>

      <div>
        <h3>Where does it come from?</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </p>
      </div>

      <div>
        <h3>Where can I get some?</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: ""
}
</script>

<style scoped>
.bg-image {
  background-image: url("https://images.unsplash.com/photo-1517336976150-79c23363af49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

h1, #home-body > div {
  color: white;
  /*setting alpha = 0.1*/
  background: rgba(0, 0, 19, 0.1);

}
#home-div > div > h3,h1{
  color: aquamarine;
}
#home-div {
  display: flex;
  flex-direction: row;
  justify-content: space-around ;
}

#home-div > div:nth-child(even){
  color: aqua;
}
</style>