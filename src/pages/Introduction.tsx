// src/components/IntroPage.tsx
import React from "react";
import "../IntroPage.css";

const IntroPage: React.FC = () => {
  return (
    <div className="intro-container">
      <h1>About IDX Protocol</h1>
      <p>
        IDX is an innovative DeFi protocol built on the NeoX blockchain. IDX
        empowers users to create, manage, and trade tokenized asset portfolios
        called "Indexes". Presented at the NeoX blockchain hackathon, IDX
        leverages the scalability and efficiency of NeoX to offer a seamless
        experience for asset management and trading.
      </p>

      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        <div className="faq-item">
          <h3>What is IDX Protocol?</h3>
          <p>
            IDX is a decentralized finance protocol that allows users to create
            and trade tokenized asset portfolios, known as "Indexes," on the
            NeoX blockchain.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are Indexes in IDX?</h3>
          <p>
            Indexes are tokenized portfolios representing a basket of assets,
            which can be created, managed, and traded by users on the IDX
            platform.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are the benefits of creating an index?</h3>
          <p>
            Creating an index allows you to design a custom portfolio that
            reflects your investment strategy or market view. You can gain
            exposure to multiple assets through a single token, simplify
            portfolio management, and potentially earn fees if others invest in
            your index.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are the benefits of buying an index?</h3>
          <p>
            Buying an index provides diversified exposure to a basket of assets
            with a single transaction. It reduces the complexity of managing
            multiple assets individually and can help mitigate risk. Indexes may
            also be managed to optimize returns, saving you time and effort.
          </p>
        </div>
        <div className="faq-item">
          <h3>What opportunities will indexes bring?</h3>
          <p>
            Indexes open up opportunities to invest in thematic portfolios such
            as gaming indexes, metaverse indexes, or memecoin indexes (among
            many others). This allows investors to target specific sectors or
            trends within the blockchain ecosystem, providing access to niche
            markets and advanced investment strategies.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do yield farming indexes save gas fees?</h3>
          <p>
            Yield farming indexes automate the process of yield farming by
            periodically claiming liquidity provider rewards, selling them for
            the curated assets, and reinvesting them. This automation reduces
            the need for users to conduct multiple smart contract transactions,
            thereby saving on gas fees.
          </p>
        </div>
        <div className="faq-item">
          <h3>
            How does the IDX Protocol facilitate compound interest through yield
            farming?
          </h3>
          <p>
            By automatically reinvesting rewards from liquidity pools back into
            the index, the IDX Protocol enables the effect of compound interest.
            This means your assets can grow exponentially over time without the
            need for manual intervention, exemplifying DeFi's take on compound
            interest.
          </p>
        </div>
        <div className="faq-item">
          <h3>What future features are planned for the IDX Protocol?</h3>
          <p>
            We are working on deploying a module that will allow users to create
            advanced strategies with automatic rebalancing. This feature will
            enable sophisticated portfolio management by automatically adjusting
            asset allocations in response to market conditions. This helps
            maintain the desired asset proportions without manual intervention.
          </p>
        </div>
        <div className="faq-item">
          <h3>Will there be social features within the IDX Protocol?</h3>
          <p>
            Yes, we are developing a feature to include social profiles within
            the app. This will allow you to share your indexes with friends or
            the community, fostering collaboration and enabling others to follow
            or invest in the indexes you create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
