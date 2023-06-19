<h3 align="center">Token Trinkets</h3>
  <p align="center">
An Ethereum NFT marketplace built on NextJS, and using ReservoirKit.

## About The Project

Token Trinkets is an SPA that displays ethereum NFTs and key information that allows users to make informed buying decisions.

### Considerations:

- Display Ethereum NFTs: The web application allows users to view a set of Ethereum NFTs.
- Contextual Information: Providing relevant contextual information for each NFT, such as whether it's last sold price, the current price, etc.
- Clean and Functional Design: Focused on a clean and readable design that prioritizes providing the necessary information to users rather than overwhelming them with visual effects.
- Time Management: Spent 5 hours on the project.

### Implementation Decisions:

#### Technology Stack:

- Next.js
- React
- Reservoir API

Clean and Readable Design: Prioritized simplicity and readability in the user interface. Use a minimalistic design with a clear focus on presenting the NFT information to the user. Avoided overwhelming visual effects or excessive styling that could distract from the content.
Card-Based Layout: Used a card-based layout to display each NFT as a separate card. This organizes the information in a structured manner and allows users to easily scan and browse through the NFTs.

### Built With

- [ReservoirKit](https://docs.reservoir.tools/docs/reservoir-kit)
- [Reservoir Protocol and API](https://reservoirprotocol.github.io/)
- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Ethers.io](https://ethers.io/)
- [WAGMI](https://wagmi.sh/)

## Getting Started

First, enter your reservoir api key in nfts.tsx

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.


### Deploy with Vercel

This is a Next.js app that can be easily deployed using [Vercel](https://vercel.com/).
