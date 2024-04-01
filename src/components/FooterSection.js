// components/FooterSection.js
import React from 'react';

const FooterSection = () => {
  return (
    <footer id="foundation" className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-6">
          <img src="https://i.ibb.co/pKnTSVM/kg-RM9xj-Y-400x400.jpg" alt="Wen Logo" className="mx-auto mb-4" style={{ height: '80px' }} />
          <h2 className="font-courier-bold text-2xl">EGGDOG</h2>
        </div>
        
        {/* Description */}
        <p className="font-simpfxo mx-auto leading-relaxed max-w-2xl">
        Just an egg that is also a dog! 
          <br /><br />
          EGGDOG IS A TOKEN ON THE SOLANA BLOCKCHAIN. THIS IS NOT INVESTMENT ADVICE. THE COIN IS FOR ENTERTAINMENT AND EDUCATIONAL PURPOSES ONLY. THE FOUNDERS ARE NOT LIABLE FOR ANY LOSSES OR DAMAGES. THE MARKET IS VOLATILE; INVEST AT YOUR OWN RISK. NO GUARANTEES OF PROFIT OR VALUE RETENTION. RESEARCH THOROUGHLY BEFORE INVESTING. BY BUYING, YOU ACKNOWLEDGE THE RISKS INVOLVED. FOUNDERS HAVE NO OBLIGATION TO UPDATE INFORMATION. LAWS VARY BY JURISDICTION; COMPLY WITH LOCAL REGULATIONS. THIS DISCLAIMER IS SUBJECT TO CHANGES WITHOUT NOTICE.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
