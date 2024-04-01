// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          
          {/* Left Side */}
          <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/Gv5cRzx/side-bar.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">Just an egg that is also a dog </h2>
            <p className="font-simpfxo text-base mb-4">
            Just an egg 🥚 that is also a dog 🐶
            </p>
            <h3 className="font-courier-bold text-xl font-bold">Eggdog is a super cute and quirky internet meme that's shaped like an egg but has the heart of a dog. 🥚🐶 It first appeared in a video titled "Meet Eggdog" by YouTuber Zamsire back in March 2019 and quickly won over the internet with its unique charm. Eggdog is known for its fun antics, like stretching super high into the air or breaking into a happy dance. 🕺 It's all about spreading positivity, eggcitement, and a love for baguettes and strawberries! 🥖🍓 And guess what? Eggdog has even made its way into the crypto world with its own token on the Solana blockchain. How eggciting is that? 🎉 </h3>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Fair Launch using pump.fun</li>
  
  <li>• No Team Tokens just pure fun</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://www.pump.fun/" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              Buy now on Pump.fun
            </a>
          </div>
        </div>
      </div>
    );
  }
  