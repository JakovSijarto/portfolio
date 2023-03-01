<template>
    <div class="w-full min-h-[100vh] bg-[#0c0f16]">
       <navbar/>
       <section class="h-[80vh] fixed top-0 left-0 w-full bg-[#0c0f16]">
            <div class="fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-[-1] ">
                <p class="text-[#0c0f16] big-text ">Contact</p>
                <div class="absolute top-[-4em]">
                    <p class="text-[20px] font-light Barlow_Condensed text-[#75dab4] leading-[1.4rem]">Let's</p>
                    <p class="text-[60px] tracking-[2px] Barlow_Condensed font-semibold leading-[6rem] text-white">TALK ABOUT YOUR PROJECT.</p>
                    <p class="text-[#c8c8c8] text-[15px] font-light leading-[2rem]">Feel free to ask me any question or let's do to talk about our future collaboration.</p>
                </div>
            </div>
       </section>
       <section class="h-[80em] bg-[#0c0f16] w-full relative z-3 mt-[70vh] flex justify-center items-start max-[1240px]:h-[90em] max-[840px]:h-[100em] max-[760px]:h-[120em] overflow-x-hidden max-[490px]:px-8 max-[370px]:h-[130em]">
            <form action="" class="w-[1200px] pt-[120px] max-[1240px]:w-[800px] max-[840px]:w-[736px] max-[760px]:w-[460px] max-[490px]:w-full  ">
              <p class="font-bold mb-[50px] text-[30px] text-white max-[290px]:leading-[2rem]">Javite Nam Se.</p>
            <div class="flex justify-between flex-col">
              <div class="mb-[1rem] flex flex-row justify-between max-[1240px]:justify-center max-[1240px]:gap-[2em] max-[840px]:flex-col">
                <input type="text" class="w-[570px] max-[1240px]:w-[400px] h-[55px] text-white py-[15px] bg-[transparent] max-[840px]:w-full" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Ime" >
                <input type="text" class="w-[570px] max-[1240px]:w-[400px] h-[55px] text-white py-[15px] bg-[transparent] max-[840px]:w-full" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Prezime">
              </div>
              <div class="mb-[1rem] flex flex-row justify-between max-[1240px]:justify-center max-[1240px]:gap-[2em] max-[840px]:flex-col">
                <input type="text" class="w-[570px] max-[1240px]:w-[400px] h-[55px] text-white py-[15px] bg-[transparent] max-[840px]:w-full" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="E-mail">
                <input type="text" class="w-[570px] max-[1240px]:w-[400px] h-[55px] text-white py-[15px] bg-[transparent] max-[840px]:w-full" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Broj telefona">
              </div>
              <div class="max-[1240px]:flex max-[1240px]:justify-center">
                <input type="text" class="h-[55px] w-full text-whit py-[15px] max-[1240px]:w-[52em] bg-[transparent] display-input" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Postojeća stranica / Facebook">
                <input type="text" class="h-[55px] w-full text-whit py-[15px] max-[1240px]:w-[52em] bg-[transparent] display-input2" style="border-bottom: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Postojeća stranica">
              </div>
            </div>
            <div class="my-8 mt-16">
              <p class="font-medium text-[18px] uppercase text-white tracking-[3px] mb-[10px]">Zainteresirani ste za:</p>
              <div class="mb-8">
                <div class="flex flex-row justify-between items-center w-[846.5px] max-[980px]:w-[705px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center max-[760px]:my-[20px]">
                    <input type="checkbox" name="dizajn-izrada" id="" class="focus:border-0">
                    <label for="dizajn-izrada" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Dizajn i izrada nove <br class="min-[380px]:hidden"> stranice ili trgovine</label>
                  </div>
                  <div class="flex flex-row items-center">
                    <input type="checkbox" name="redizajn" id="">
                    <label for="redizajn" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Redizajn postojecće <br class="min-[380px]:hidden">  stranice ili trgovine</label>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center w-[700px] max-[980px]:w-[559px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center max-[760px]:my-[20px]">
                    <input type="checkbox" name="web-aplikacija" id="">
                  <label for="web-aplikacija" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Izrada web aplikacije</label>
                  </div>
                  <div class="flex flex-row items-center">
                    <input type="checkbox" name="custom" id="">
                    <label for="custom" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Izrada web aplikacije</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row max-[1240px]:flex-col max-[1240px]:items-start justify-between items-center my-8">
              <div class="max-[490px]:w-full">
              <p class="font-medium text-[18px] uppercase text-white tracking-[1px] mt-8 mb-[10px]">Kojim budžetom raspolažete:</p>
              <div class="mb-8">
                <div class="flex flex-row items-center justify-between w-[300px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center my-[20px]">
                    <input type="radio" name="money" id="">
                    <label for="money" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Manje od 200€</label>
                  </div>
                  <div class="flex flex-row items-center">
                    <input type="radio" name="money" id="">
                    <label for="money" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">200€ - 400€</label>
                  </div>
                </div>
                <div class="flex flex-row items-center justify-between w-[308px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center max-[760px]:my-[20px]">
                    <input type="radio" name="money" id="">
                    <label for="money" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">400€ - 1000€</label>
                  </div>
                  <div class="flex flex-row items-center">
                    <input type="radio" name="money" id="">
                    <label for="money" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Više od 1000€</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[700px] max-[760px]:w-[460px] max-[490px]:w-full">
              <p class="font-medium text-[18px] uppercase text-white tracking-[1px] mt-8 mb-[10px]">Posebna pogodnost je to što vam uz uzradu web stranice nudimo i jednu besplatnu uslugu:</p>
              <div class="mb-8">
                <div class="flex flex-row justify-between items-center w-[560px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center">
                    <input type="radio" name="pogodnost" id="">
                    <label for="pogodnost" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Izrada logotipa</label>
                  </div>
                  <div class="flex flex-row items-center max-[490px]:w-full">
                    <input type="radio" name="pogodnost" id="">
                    <label for="pogodnost" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Vođenje Facebook <br class="min-[380px]:hidden"> Ads kampanja</label>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center w-[426.3px] max-[760px]:flex-col max-[760px]:items-start">
                  <div class="my-[10px] flex flex-row items-center">
                    <input type="radio" name="pogodnost" id="">
                    <label for="pogodnost" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">SEO Optimizacija</label>
                  </div>
                  <div class="flex flex-row items-center">
                    <input type="radio" name="pogodnost" id="" class="bg-[white]">
                    <label for="pogodnost" class="ml-[10px] text-[16px] font-light text-[#999] max-[380px]:ml-[20px]">Dizajn posjetnice</label>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <textarea name="" id="" cols="30" rows="10" class="w-full max-h-[20em] p-[15px] text-white bg-[transparent]" style="border: 1px solid rgba(255, 255, 255, 0.3);" placeholder="Molimo Vas da nam ukratko opišete što biste točno htjeli. (Linkovi web primjera također dobrodošli)"></textarea>
            <div class="w-[1200px] max-[1240px]:w-[800px] flex justify-end mt-[1rem] max-[840px]:w-[736px] max-[760px]:w-[460px] max-[490px]:w-full max-[400px]:justify-center">
              <input type="submit" value="Pošalji poruku" class="bg-transparent py-[12px] px-[35px]  overflow-hidden text-white text-[13px] font-normal uppercase tracking-[2px] flex" style="border:1px solid white;">
            </div>
            
          </form>
       </section>
       <footer class="w-full flex min-h-[30em] max-[800px]:min-h-[35em] bg-[#151921] half-bg flex justify-center items-center overflow-x-hidden relative z-3">
        <div class=" flex justify-between items-center w-[1300px] max-[800px]:flex-col ">
          <div class="ml-8 max-[800px]:flex max-[800px]:flex-col max-[800px]:min-w-[30em] max-[800px]:mx-8 max-[800px]:my-8 max-[800px]:min-w-[368px] max-[390px]:min-w-[auto]">
            <img src="../../assets/logo.png" alt="" class="h-[55px] w-[50px] mb-[1.5rem]">
            <p class="font-bold text-[white] text-[12px] mb-[5px]">Email: <a href="" class="font-normal ml-[10px]">newage@agencycroatia.com</a></p> 
            <p class="font-bold text-[white] text-[12px]">Phone: <a href="" class="font-normal ml-[10px]">(+385) 091 729 2812</a></p> 
            <p class="text-[11px] tracking-[0.4em] my-8 pl-[8px] text-white Barlow_Condensed py-[3px]" style="background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 20%,  transparent 20%,	transparent 100%);">FOLLOW US</p>
            <ul class="flex ">
              <li class="p-[14px] rounded-full cursor-pointer" style="background: rgba(255, 255, 255, 0.01);"><img src="../../assets/ig_icon.svg" alt="" class="w-[18px] h-[18px] "></li>
              <li class="p-[14px] rounded-full mx-2 cursor-pointer" style="background: rgba(255, 255, 255, 0.01);"><img src="../../assets/fb_icon.svg" alt="" class="w-[18px] h-[18px]"></li>
              <li class="p-[14px] rounded-full cursor-pointer" style="background: rgba(255, 255, 255, 0.01);"><img src="../../assets/gmail_icon.svg" alt="" class="w-[18px] h-[18px]"></li>
            </ul>
          </div>
          <div class="min-w-[30em] mr-8  max-[800px]:mx-8 max-[800px]:mb-[2em] max-[800px]:min-w-[auto]">
            <p class="text-[11px] tracking-[0.4em] pl-[8px] text-white Barlow_Condensed py-[3px] mb-[30px]" style="background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 10%,  transparent 10%,	transparent 100%);">NEWSLETTER</p>
            <p class="text-[12px] mb-[10px] text-[#999]">Sign up for subscribe out newsletter!</p>
            <form action="" class="flex flex-row mb-[50px] max-[370px]:flex-col">
              <input type="email" name="" id="" class="p-[15px] w-full b-0 text-white" style="background: rgba(255, 255, 255, 0.01);">
              <button type="submit" class="py-[15px] px-[30px] b-0 text-[#75dab4] tracking-[1px] text-[13px] max-[370px]:mt-[1em] max-[370px]:rounded-[6%]" style="background: rgba(255, 255, 255, 0.02);">SUBSCRIBE</button>
            </form>
            <p class="text-[11px] tracking-[0.4em] pl-[8px] text-white Barlow_Condensed py-[3px] mb-[30px] " style="background: linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 13%,  transparent 13%,	transparent 100%);">INSTAGRAM POST</p>
            <ul class="flex">
              <li><img src="../../assets/instagram_post1.png" alt="" class="max-w-[64px] max-h-[64px] rounded-full border-1 border-[white]"></li>
              <li><img src="../../assets/instagram_post2.png" alt="" class="max-w-[64px] max-h-[64px] rounded-full mx-[5px]"></li>
              <li><img src="../../assets/instagram_post3.png" alt="" class="max-w-[64px] max-h-[64px] rounded-full"></li>
            </ul>
          </div>
        </div>
    </footer>
    </div>
</template>

<script setup>
import navbar from './navbar.vue';
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
</style>