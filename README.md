# Collective Intelligence Engine

A Base Mini App for facilitating collective decision-making within communities by enabling users to propose, validate, and prioritize problems and solutions on Base, integrated seamlessly with Farcaster's social graph.

## Features

- **Dynamic Problem Framing & Tagging**: Propose and categorize problems by level (international, national, local)
- **Iterative Solution & Analysis War Room**: Collaborative pro/con analysis with community upvoting
- **Frame-Driven Participation**: Native Farcaster Frame integration for viral engagement
- **Transparent Outcome & Recognition**: Public recognition for contributors using OnchainKit Identity

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Social**: Farcaster Mini Apps SDK
- **Wallet**: OnchainKit (Coinbase)
- **Styling**: Tailwind CSS with Coinbase theme
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Header.tsx
│   ├── ProblemsList.tsx
│   ├── SolutionView.tsx
│   ├── AnalyticsView.tsx
│   └── ProposeProblemModal.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Main page
├── providers.tsx       # Context providers
└── globals.css         # Global styles

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Integrations

### OnchainKit
- Identity components for Basename display
- Transaction components for gasless voting
- Wallet connection and management

### Farcaster Mini Apps SDK
- User context and authentication
- Frame generation and sharing
- Notification system

### Base Network
- Chain ID: 8453 (mainnet)
- Testnet Chain ID: 84532 (Sepolia)
- Gasless transactions via Paymaster

## Design System

The app uses the Coinbase theme with:
- Dark navy background (#0a1929)
- Light text (#e3f2fd)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders (6px, 10px, 16px)

## License

MIT
