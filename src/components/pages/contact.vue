<template>
    <div class="w-full min-h-[100vh] bg-[#0c0f16]">
       <navbar/>
       <section class="h-[80vh] max-[380px]:h-[90vh] fixed top-0 left-0 w-full bg-[#0c0f16]">
            <div class="fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-[-1] max-[300px]:top-[45%]">
                <p class="text-[#0c0f16] big-text ">Contact</p>
                <div class="absolute top-[-4em] max-[680px]:w-[510px] max-[530px]:w-auto max-[680px]:mx-8 max-[300px]:text-center">
                      <div class="text-[60px] tracking-[2px] Barlow_Condensed font-semibold leading-[6rem] text-white max-[680px]:text-[40px] max-[680px]:leading-[3rem] max-[300px]:mb-[5px]">
                      <p class="text-[20px] font-light Barlow_Condensed text-[#75dab4] leading-[1.4rem] ">Let's</p>
                      TALK ABOUT YOUR PROJECT.
                    </div>
                    <p class="text-[#c8c8c8] text-[15px] font-light leading-[2rem]">Feel free to ask me any question or let's do to talk about our future collaboration.</p>
                </div>
            </div>
       </section>
       <section class="h-[80em] bg-[#0c0f16] w-full relative z-3 mt-[70vh] max-[300px]:pt-8 max-[380px]:mt-[90vh] max-[380px]:mt-[90vh] flex justify-center items-start max-[1240px]:h-[90em] max-[840px]:h-[100em] max-[760px]:h-[120em] overflow-x-hidden max-[490px]:px-8 max-[370px]:h-[130em]">
      <form @submit="sendEmail">
        <label>Name</label>
        <input 
          type="text" 
          v-model="name"
          name="name"
          placeholder="Your Name"
        >
        <label>Email</label>
        <input 
          type="email" 
          v-model="email"
          name="email"
          placeholder="Your Email"
          >
        <label>Message</label>
        <textarea 
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
        </textarea>
        
        <input type="submit" value="Send">
      </form>
         
       </section>
       <footer_page class="relative z-3"/>
    </div>
</template>
<script setup>
    import navbar from './navbar.vue';
    import footer_page from './footer.vue'; 
</script>
<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('newage', 'contact_form', e.target,
        '6y58hytHJtD9eVBSB', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>
<style scoped>  .big-text{
  -webkit-text-stroke: 1px white;
  font-size: max(20vw, 20%, 10rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
}
@media only screen and (max-width: 700px){
	.big-text{
  font-size: 20vw;
}
}
input:focus {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.display-input { display: inline-block; }
.display-input2 { display: none; }

@media (max-width: 320px) { 
  .display-input { display: none; }
  .display-input2 { display: inline-block; 
  width: 100%;}
}
label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>