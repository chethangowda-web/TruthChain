# ⛓️ TruthChain — Trust Layer for the Internet

<div align="center">

![TruthChain Banner](https://img.shields.io/badge/TruthChain-Trust%20Layer%20for%20the%20Internet-00FFFF?style=for-the-badge&logo=ethereum&logoColor=white)

[![Live System](https://img.shields.io/badge/STATUS-LIVE%20SYSTEM-00FF88?style=flat-square&logo=circle&logoColor=white)](https://truthchain.app)
[![Groq AI](https://img.shields.io/badge/AI-Groq%20LLaMA%203.3%2070B-FF6B35?style=flat-square&logo=openai&logoColor=white)](https://groq.com)
[![Polygon](https://img.shields.io/badge/Blockchain-Polygon%20Mainnet-8247E5?style=flat-square&logo=polygon&logoColor=white)](https://polygon.technology)
[![Hackathon](https://img.shields.io/badge/Built%20At-Xypheria%202026-FFD700?style=flat-square)](https://aiet.edu.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

> **AI-powered deepfake & misinformation detection combined with blockchain verification.**  
> Know what's real before you share it.

[🔍 Verify Content](#verify) · [🔗 Blockchain Explorer](#explorer) · [📖 How It Works](#how-it-works) · [🚀 Get Started](#installation)

</div>

---

## 🌐 The Problem

The internet is drowning in deepfakes, AI-generated misinformation, and manipulated content. Every day, millions of people share content without knowing if it's real — and once misinformation spreads, it's nearly impossible to stop.

**TruthChain fixes this.**

---

## ✨ What is TruthChain?

TruthChain is a **real-time content verification platform** that combines:

- 🤖 **Groq AI (LLaMA 3.3 70B)** — blazing-fast deepfake & manipulation detection
- ⛓️ **Polygon Blockchain** — every verification result stored permanently on-chain
- 🔍 **Public Blockchain Explorer** — transparent, tamper-proof, publicly auditable records
- 🛡️ **Multi-modal Analysis** — verify images, videos, URLs, and text

Every scan generates a unique **TCID (TruthChain ID)** with a content hash and TX hash, permanently stored on Polygon Mainnet. No one can alter the record. That's the power of decentralization.

---

## 🎯 Features

| Feature | Description |
|---|---|
| 🖼️ **Image Verification** | Upload any image for AI deepfake analysis |
| 🎥 **Video Verification** | Analyze video metadata, format signals & manipulation indicators |
| 🔗 **URL Verification** | Scan any web URL for misinformation signals |
| 📝 **Text Verification** | Detect AI-generated or manipulated text content |
| ⛓️ **Blockchain Storage** | Results auto-stored on Polygon Mainnet with TX hash |
| 🔍 **Public Explorer** | Search any TCID, content hash, or TX hash |
| 📊 **Trust Score** | AI confidence score (0–100) for every piece of content |
| ⚡ **<12s Confirmation** | Average blockchain confirmation time |

---

## 🏗️ Architecture

```
User Content (Image / Video / URL / Text)
        │
        ▼
┌───────────────────┐
│   TruthChain UI   │  ← React Frontend
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  TruthLens AI API │  ← Groq LLaMA 3.3 70B
│  (Analysis Engine)│     Deep content analysis
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Polygon Mainnet  │  ← Smart Contract
│  Blockchain       │     Permanent on-chain record
└───────────────────┘
        │
        ▼
┌───────────────────┐
│ Blockchain Explorer│ ← Public TCID / TX / Hash lookup
└───────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, TailwindCSS |
| **AI Engine** | Groq API — LLaMA 3.3 70B |
| **Blockchain** | Polygon Mainnet (EVM-compatible) |
| **Smart Contracts** | Solidity |
| **Backend API** | Node.js / Express |
| **Web3** | ethers.js / Web3.js |

---

## 🚀 Installation

### Prerequisites
- Node.js v18+
- npm or yarn
- MetaMask wallet (connected to Polygon Mainnet)
- Groq API Key → [Get one here](https://console.groq.com)

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/truthchain-protocol.git
cd truthchain-protocol
```

### Install Dependencies

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Setup

Create a `.env` file in the `/server` directory:

```env
GROQ_API_KEY=your_groq_api_key_here
POLYGON_RPC_URL=https://polygon-rpc.com
PRIVATE_KEY=your_wallet_private_key
CONTRACT_ADDRESS=your_deployed_contract_address
PORT=5000
```

Create a `.env` file in the `/client` directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
REACT_APP_CHAIN_ID=137
```

### Run the App

```bash
# Start backend
cd server
npm run dev

# Start frontend (new terminal)
cd client
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 How It Works

1. **Submit Content** — Upload an image, video, URL, or paste text into TruthChain
2. **AI Analysis** — Groq's LLaMA 3.3 70B performs deep content analysis in seconds
3. **Trust Score Generated** — A confidence score (0–100) is assigned with verdict: `VERIFIED`, `SUSPICIOUS`, or `FAKE`
4. **Stored On-Chain** — Results are written to Polygon Mainnet and assigned a unique **TCID**
5. **Explorer Record** — Anyone can search the Blockchain Explorer using TCID, content hash, or TX hash

---

## 🔗 Blockchain Explorer

Every verification is publicly auditable:

| Field | Description |
|---|---|
| **TCID** | Unique TruthChain Verification ID |
| **Content Type** | Image / Video / URL / Text |
| **Trust Score** | AI confidence score (0–100) |
| **Status** | ✅ Verified / ⚠️ Suspicious / ❌ Fake |
| **Content Hash** | SHA-256 hash of the submitted content |
| **TX Hash** | Polygon blockchain transaction hash |
| **Validators** | Number of network validators |
| **Timestamp** | UTC timestamp of verification |

---

## 🏆 Built At

<div align="center">

**Xypheria 2026 — Innorve Hackathon**  
Alvas Institute of Engineering & Technology, Karnataka, India  
📅 April 25, 2026

*Built live. Deployed live. On Polygon Mainnet. During the hackathon.*

</div>

---

## 👥 Team

> *Four students. One mission. Fight misinformation with code.*

Built with ❤️ at **AIET** during **Xypheria 2026**.


<img width="1600" height="782" alt="image" src="https://github.com/user-attachments/assets/8b505e87-d1e0-4cd1-8696-ca6c4f264d89" />

<img width="1600" height="785" alt="image" src="https://github.com/user-attachments/assets/b9406c5c-8352-4a68-a81c-0892eff36bf6" />

<img width="1600" height="792" alt="image" src="https://github.com/user-attachments/assets/fa1104ea-eb47-485e-8368-36ddad706c61" />

<img width="1600" height="788" alt="image" src="https://github.com/user-attachments/assets/80121c39-d82c-4bfb-a921-c35e8519fbca" />

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Support

If TruthChain helped you or you believe in the mission — **give us a ⭐ on GitHub!**  
It helps us reach more people and keep building.

---

<div align="center">

**🔴 LIVE SYSTEM · GROQ AI ACTIVE · POLYGON MAINNET**

*The fight against fake content starts here.*

</div>
