// Contract Constants
const CONTRACT_ADDRESS = "0x4A874bb5702983f8a6685D852aDBC2F075a2A543";
const TOKEN_ADDRESS = "0x833ddBaB8a7AF355D7566946cbB01569b8dC90Ff";

/* const CONTRACT_ADDRESS = "0x257A8FcB4d4209e10B0e89791B8e1997826B465D";
const TOKEN_ADDRESS = "0xa6D835059EfD847E6863b60f65e4Efb394209254"; */

// Contract ABIs
const PRESALE_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "endTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaticUSDPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenPriceInMatic",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokensLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "saleToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "setEndTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "setStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "tokensOwned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensSold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawUnsoldTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const ERC20_ABI = [
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
];

// State variables
let state = {
  connectedAddress: null,
  ownerAddress: null,
  isOwner: false,
  isModalOpen: false,
  isLoading: false,
  tokensLeft: 0,
  userBalance: 0,
  maticPrice: 0,
  contractBalance: 0,
  isMobile: false,
};

// DOM Elements
const elements = {
  connectButton: document.querySelectorAll(".connect-button"),
  adminUI: document.getElementById("adminUI"),
  userUI: document.getElementById("userUI"),
  walletInfo: document.getElementById("walletInfo"),
  presaleInfo: document.getElementById("presaleInfo"),
  tokenAmount: document.getElementById("tokenAmount"),
  buyButton: document.getElementById("buyButton"),
  closeButton: document.getElementById("closeButton"),
  closeAdminButton: document.getElementById("adminCloseButton"),
  errorMessage: document.getElementById("errorMessage"),
  successMessage: document.getElementById("successMessage"),
};
// User Interface Functions
async function switchToPolygon() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }

  try {
    const polygonChainId = "0x89"; // Polygon Mainnet Chain ID
    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== polygonChainId) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: polygonChainId }],
      });
    } else {
      console.log("Already on Polygon network");
    }
  } catch (error) {
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x89",
              chainName: "Polygon Mainnet",
              rpcUrls: ["https://polygon-rpc.com/"],
              nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
              },
              blockExplorerUrls: ["https://polygonscan.com/"],
            },
          ],
        });
      } catch (addError) {
        console.error("Error adding Polygon network:", addError.message);
      }
    } else {
      console.error("Error switching to Polygon network:", error.message);
      alert("Failed to switch networks. Please check your MetaMask settings.");
    }
  }
}

const checkMobileDevice = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  state.isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(
      userAgent.toLowerCase()
    );
};

//async function fetchOwnerAddress() {
//  try {
//    if (!window.ethereum) throw new Error("MetaMask not installed");

// Initialize ethers provider
// const provider = new ethers.BrowserProvider(window.ethereum);

// Initialize contract instance
// const contract = new ethers.Contract(CONTRACT_ADDRESS, PRESALE_ABI, provider);

// Fetch contract owner
// const owner = await contract.owner();

// Define valid owner addresses
// const validOwners = [
//   "0x624c7a7699d7fc10e240082908261f99ab5fac9e",
//   "0xE8573AAE0Ba55dE2CE0C81996611CBD40088Cf10",
//   "0x8b104a108bC99659758933C48e1558167f421DA0",
//   "0x8cb4353a492f24f13e205e62b886d15705fc9729"
//  ];

// Check if the fetched owner is valid
// if (validOwners.includes(owner.toLowerCase())) {
//   console.log("Owner is valid:", owner);
//    } else {
// console.log("Owner is not valid.");
//   }
//
// Store the owner in state (Ensure 'state' is defined in your application)
// state.ownerAddress = owner;

// Return the owner address
//   return owner;

// } catch (error) {
//  console.error("Error fetching owner address:", error.message);
//  return null;
//  }
//}

async function fetchOwnerAddress() {
  try {
    if (!window.ethereum) throw new Error("MetaMask not installed");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      PRESALE_ABI,
      provider
    );
    const owner = await contract.owner(); //"0x8CB4353a492f24f13E205E62b886d15705fC9729"//"0x624c7a7699d7fc10e240082908261f99ab5fac9e"//"0xE8573AAE0Ba55dE2CE0C81996611CBD40088Cf10"; //await contract.owner();
    state.ownerAddress = owner;
    return owner;
  } catch (error) {
    console.error("Error fetching owner address:", error.message);
    return null;
  }
}

function updateUI() {
  if (!elements.connectButton || !elements.adminUI || !elements.userUI) {
    console.error("Required DOM elements not found");
    return;
  }

  elements.connectButton.forEach((button) => {
    button.textContent = state.isLoading
      ? "CONNECTING..."
      : state.connectedAddress
      ? "DISCONNECT"
      : "CONNECT WALLET";

    button.classList.toggle("loading", state.isLoading);
  });

  if (state.isMobile) {
    // Example: Add mobile-specific class to certain elements
    document.body.classList.add("mobile-view");
  } else {
    document.body.classList.remove("mobile-view");
  }

  // Modal handling
  if (state.isModalOpen) {
    document.querySelector(".page-content").style.filter = "none";
    document.querySelector(".modal-overlay").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    if (state.isOwner) {
      elements.adminUI.classList.add("active");
      elements.userUI.classList.remove("active");
    } else {
      elements.userUI.classList.add("active");
      elements.adminUI.classList.remove("active");
    }
  } else {
    elements.adminUI.classList.remove("active");
    elements.userUI.classList.remove("active");
  }

  // Update presale info if available
  if (elements.presaleInfo) {
    elements.presaleInfo.innerHTML = `
      <p><span>Tokens Left:</span> ${state.tokensLeft} DONG</p>
      <p><span>Your Balance:</span> ${state.userBalance} DONG</p>
      <p><span>Price (USD):</span>  <span id ="price">$0.04</p>
    `;
  }
}

// Handle wallet connection
async function handleConnectWallet() {
  try {
    if (state.connectedAddress) {
      state.connectedAddress = null;
      state.isOwner = false;
      state.isModalOpen = false;
      updateUI();
      return;
    }

    state.isLoading = true;
    updateUI();

    // Replace this section in handleConnectWallet()
    if (state.isMobile) {
      // Handle mobile wallet connection
      if (window.ethereum) {
        console.log("Using in-app browser with ethereum provider");
        // Continue with the connection process
      } else {
        // For mobile browsers without built-in wallet
        const dappUrl = window.location.hostname;
        // Different deep linking formats based on wallet
        const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;

        // Show options to user
        showMobileWalletOptions([
          { name: "MetaMask", deepLink: metamaskDeepLink },
        ]);

        state.isLoading = false;
        updateUI();
        return;
      }
    }

    await switchToPolygon();

    if (!window.ethereum) throw new Error("MetaMask not installed");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);

    if (!accounts || accounts.length === 0) {
      throw new Error("No accounts found");
    }

    state.connectedAddress = accounts[0];

    const ownerAddr = await fetchOwnerAddress();
    state.isOwner =
      state.connectedAddress.toLowerCase() === ownerAddr?.toLowerCase();
    if (state.isOwner) {
      const adminUI = new AdminUI();
      await adminUI.initializeUI();
    }
    await getContractInfo();

    state.isLoading = false;
    state.isModalOpen = true;
    updateUI();
  } catch (error) {
    state.isLoading = false;
    elements.errorMessage.textContent = `Connection error: ${error.message}`;
    updateUI();
  }
}

// Add this function to handle mobile wallet options
function showMobileWalletOptions(walletOptions) {
  // Create a modal or panel to display wallet options
  const mobileWalletModal = document.createElement("div");
  mobileWalletModal.className = "mobile-wallet-modal";
  mobileWalletModal.innerHTML = `
    <div class="mobile-wallet-content">
      <h3>Connect with your wallet</h3>
      <p>Please select your preferred wallet to continue:</p>
      <div class="wallet-options">
        ${walletOptions
          .map(
            (wallet) => `
          <a href="${wallet.deepLink}" class="wallet-option">
            <span>${wallet.name}</span>
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  document.body.appendChild(mobileWalletModal);

  // Add some basic styles for the modal
  const style = document.createElement("style");
  style.textContent = `
    .mobile-wallet-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mobile-wallet-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 90%;
      text-align: center;
    }
    .wallet-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }
    .wallet-option {
      padding: 12px;
      background: #f3f3f3;
      border-radius: 8px;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);
}

function formatNumberWithCommas(number) {
  return number.toLocaleString();
}

async function getContractInfo() {
  if (!state.connectedAddress) return;

  const loadingInfo = document.getElementById("loadingInfo");
  loadingInfo.style.display = "block";

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const presaleContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      PRESALE_ABI,
      provider
    );

    try {
      const left = await presaleContract.getTokensLeft();
      state.tokensLeft = formatNumberWithCommas(Number(left.toString()));
    } catch (err) {
      console.error("Error getting tokens left:", err);
      state.tokensLeft = "Error loading";
    }

    try {
      // Fix: Use tokensOwned instead of tokensBalanced
      const balance = await presaleContract.tokensOwned(state.connectedAddress);
      // Fix: The balance is already in wei (10^18), so we just need to format it once
      state.userBalance = formatNumberWithCommas(Number(balance.toString()));
    } catch (err) {
      console.error("Error getting user balance:", err);
      state.userBalance = "Error loading";
    }

    updateUI();
  } catch (err) {
    console.error("Error fetching contract info:", err);
    elements.errorMessage.textContent =
      "Failed to fetch contract info. Please check if you are connected to the correct network.";
  } finally {
    loadingInfo.style.display = "none";
  }
}

// Buy tokens function
async function buyTokens() {
  const amount = tokenAmount.value;
  if (!amount || parseFloat(amount) <= 0) {
    errorMessage.textContent = "Please enter a valid amount";
    return;
  }

  state.isLoading = true;
  errorMessage.textContent = "";
  successMessage.textContent = "";
  updateUI();

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const presaleContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      PRESALE_ABI,
      signer
    );
    console.log(presaleContract);

    const tokenPriceInMatic = await presaleContract.getTokenPriceInMatic();
    console.log(tokenPriceInMatic);
    console.log(amount);
    const tokensAmount = ethers.parseUnits(amount.toString());
    console.log(tokensAmount);
    const maticRequired =
      (tokensAmount * tokenPriceInMatic) / ethers.parseUnits("1", 18);
    console.log(maticRequired);

    const buyTx = await presaleContract.buyTokens(amount, { maticRequired });
    console.log(buyTx);
    await buyTx.wait();

    await getContractInfo();
    tokenAmount.value = "";
    successMessage.textContent = "Tokens purchased successfully!";
  } catch (err) {
    console.error("Transaction error:", err);
    errorMessage.textContent =
      "Transaction failed: " + (err.reason || err.message);
  } finally {
    state.isLoading = false;
    updateUI();
  }
}

// Admin UI Class
class AdminUI {
  constructor() {
    if (!state.isOwner) {
      console.error("Not authorized as owner");
      return;
    }
    this.contractAddress = CONTRACT_ADDRESS;
    this.initializeUI().catch((err) => {
      console.error("Failed to initialize admin UI:", err);
      elements.adminUI.innerHTML = `
                        <div class="error-message">
                            Failed to initialize admin interface. Please check if you are the contract owner and connected to the correct network.
                        </div>
                    `;
    });
  }

  async initializeUI() {
    this.adminUI = document.getElementById("adminUI");

    if (!this.adminUI) {
      console.error("Missing DOM element: adminUI");
      return;
    }

    // Initialize contract
    await this.initContract();

    // Add event listeners
    this.addEventListeners();
  }

  async initContract() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      this.contract = new ethers.Contract(
        this.contractAddress,
        PRESALE_ABI, // Using PRESALE_ABI instead of contractABI
        signer
      );

      // Update initial values
      await this.updateContractInfo();
    } catch (error) {
      console.error("Failed to initialize contract:", error);
    }
  }

  // This function reads from the blockchain and updates the UI
  async updateContractInfo() {
    try {
      const [owner, startTime, endTime, unsoldTokens] = await Promise.all([
        this.contract.owner(),
        this.contract.getStartTime(),
        this.contract.getEndTime(),
        this.contract.getTokensLeft(),
      ]);

      // Update wallet address display
      const adminWalletAddress = document.getElementById("adminWalletAddress");
      const currentAddress = await window.ethereum.request({
        method: "eth_accounts",
      });
      adminWalletAddress.textContent = currentAddress[0] || "Not connected";

      // Update unsold tokens display (clean up the duplicate code)
      state.tokensLeft = formatNumberWithCommas(
        Number(unsoldTokens.toString())
      );
      document.getElementById("unsoldTokensAmount").textContent =
        state.tokensLeft;

      // Convert blockchain timestamps to local date-time format
      if (startTime) {
        const startTimeValue = Number(startTime.toString());
        const startDate = new Date(startTimeValue * 1000);
        document.getElementById("startDate").value = startDate
          .toISOString()
          .slice(0, 16);
      }

      if (endTime) {
        const endTimeValue = Number(endTime.toString());
        const endDate = new Date(endTimeValue * 1000);
        document.getElementById("endDate").value = endDate
          .toISOString()
          .slice(0, 16);
      }
    } catch (error) {
      console.error("Error updating contract info:", error);
    }
  }

  // This function calculates relative time for sending to the blockchain
  calculateEpoch(dateString) {
    const inputDate = new Date(dateString);

    // Check if the date is valid
    if (isNaN(inputDate.getTime())) {
      alert("Invalid date format. Please use a valid date.");
      return null;
    }

    // Get current date for validation and relative calculation
    const currentDate = new Date();

    // Define maximum allowed date (e.g., end of 2026)
    const maxAllowedDate = new Date(2026, 11, 31);

    // Check if date is in the past
    if (inputDate < currentDate) {
      alert("Please enter a date in the future.");
      return null;
    }

    // Check if date is too far in the future
    if (inputDate > maxAllowedDate) {
      alert("Date is too far in the future. Please enter a date before 2027.");
      return null;
    }

    // Calculate RELATIVE time in seconds from now (this is the key change)
    return Math.floor((inputDate.getTime() - currentDate.getTime()) / 1000);
  }

  async setDate(isStartDate) {
    try {
      const dateInputId = isStartDate ? "startDate" : "endDate";
      const dateString = document.getElementById(dateInputId).value;

      // Calculate relative seconds from now
      const relativeSeconds = this.calculateEpoch(dateString);

      if (relativeSeconds === null) {
        return; // Validation failed
      }

      // Call the appropriate contract function
      if (isStartDate) {
        await this.contract.setStartTime(relativeSeconds);
      } else {
        await this.contract.setEndTime(relativeSeconds);
      }

      alert(`${isStartDate ? "Start" : "End"} date updated successfully!`);

      // Update UI after blockchain confirms the transaction
      await this.updateContractInfo();
    } catch (error) {
      console.error(
        `Error setting ${isStartDate ? "start" : "end"} date:`,
        error
      );
      alert(`Failed to update date: ${error.message}`);
    }
  }

  setLoading(isLoading) {
    this.loading = isLoading;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = isLoading;
    });
  }

  addEventListeners() {
    // Update Times
    document
      .getElementById("updateTimesBtn")
      .addEventListener("click", async () => {
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        if (!startDate || !endDate) {
          alert("Please set both start and end times");
          return;
        }

        const newStart = this.calculateEpoch(startDate);
        const newEnd = this.calculateEpoch(endDate);

        if (!newStart || !newEnd) return;

        if (newEnd <= newStart) {
          alert("End time must be after start time");
          return;
        }

        try {
          this.setLoading(true);
          const txStart = await this.contract.setStartTime(newStart);
          await txStart.wait();

          const txEnd = await this.contract.setEndTime(newEnd);
          await txEnd.wait();

          alert("Start and end times updated successfully!");
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert("Failed to update times: " + (err.reason || err.message));
        } finally {
          this.setLoading(false);
        }
      });

    // Withdraw Tokens
    document
      .getElementById("withdrawTokensBtn")
      .addEventListener("click", async () => {
        try {
          this.setLoading(true);
          const tx = await this.contract.withdrawUnsoldTokens();
          await tx.wait();
          alert("Unsold tokens withdrawn successfully!");
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert(
            "Failed to withdraw unsold tokens: " + (err.reason || err.message)
          );
        } finally {
          this.setLoading(false);
        }
      });

    // Transfer Ownership
    document
      .getElementById("transferOwnershipBtn")
      .addEventListener("click", async () => {
        const newOwnerAddress =
          document.getElementById("newOwnerAddress").value;

        if (!ethers.isAddress(newOwnerAddress)) {
          alert("Invalid address format!");
          return;
        }

        try {
          this.setLoading(true);
          const tx = await this.contract.transferOwnership(newOwnerAddress);
          await tx.wait();
          alert("Ownership transferred successfully!");
          document.getElementById("newOwnerAddress").value = "";
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert("Failed to transfer ownership: " + (err.reason || err.message));
        } finally {
          this.setLoading(false);
        }
      });

    // Auto-update contract info when account changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        await this.updateContractInfo();
      });
    }
  }
}

// Event Listeners
// document.addEventListener("DOMContentLoaded", () => {
//   elements.connectButton.forEach((button) => {
//     button.addEventListener("click", handleConnectWallet);
//   });
// });

buyButton.addEventListener("click", buyTokens);
closeButton.addEventListener("click", () => userUI.classList.remove("active"));

// closeAdminButton.addEventListener("click", () =>
//   adminUI.classList.remove("active")
// );

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  checkMobileDevice();
  // Verify all elements exist
  Object.entries(elements).forEach(([key, element]) => {
    if (!element) {
      console.error(`Missing DOM element: ${key}`);
    }
  });

  if (window.ethereum && window.connectedAddress) {
    getContractInfo();
  }

  // Initialize AdminUI
  if (elements.adminUI) {
    adminUI = new AdminUI();
  }

  window.addEventListener("resize", checkMobileDevice);
});

// Event Listeners
elements.connectButton.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await handleConnectWallet();
    } catch (error) {
      console.error("Error in handleConnectWallet:", error);
    }
  });
});

if (elements.buyButton) {
  elements.buyButton.addEventListener("click", buyTokens);
}
if (elements.closeButton) {
  elements.closeButton.addEventListener("click", () => {
    if (elements.userUI) {
      elements.userUI.classList.remove("active");
      document.querySelector(".page-content").style.filter = "none";
      document.querySelector(".modal-overlay").style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
    state.isModalOpen = false;
  });
}

if (elements.closeAdminButton) {
  elements.closeAdminButton.addEventListener("click", () => {
    if (elements.adminUI) {
      elements.adminUI.classList.remove("active");
      document.querySelector(".page-content").style.filter = "none";
      document.querySelector(".modal-overlay").style.display = "none";
      document.body.style.overflow = "auto";
      // document.body.style.height = "auto";
      document.body.style.position = "";
    }
    state.isModalOpen = false;
  });
}
// Initialize MetaMask Events
if (window.ethereum) {
  window.ethereum.on("accountsChanged", async (accounts) => {
    if (accounts.length > 0) {
      state.connectedAddress = accounts[0];
      await getContractInfo();
    } else {
      state.connectedAddress = null;
    }
    updateUI();
  });
}

window.addEventListener("resize", () => {
  const modal = document.querySelector(".modal.active");

  if (!modal || !wrapper) return;

  if (window.innerHeight < screen.height * 0.5) {
    modal.style.top = "100%";
  } else {
    modal.style.top = "50%";
  }
});

// conversion of usd to dong in the modal

document.getElementById("tokenAmount").addEventListener("input", function () {
  let inputValue = parseFloat(this.value);

  if (isNaN(inputValue)) {
    document.getElementById("price").textContent = "$0.04";
    return;
  }

  let multipliedValue = inputValue * 0.04;

  document.getElementById("price").textContent = `$${multipliedValue.toFixed(
    2
  )}`;
});
