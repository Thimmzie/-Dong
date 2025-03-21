// Contract Constants
const CONTRACT_ADDRESS = "0x4A874bb5702983f8a6685D852aDBC2F075a2A543"
const TOKEN_ADDRESS = "0x833ddBaB8a7AF355D7566946cbB01569b8dC90Ff";

// Contract ABIs
const PRESALE_ABI = [{
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
  },];

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
  isMobile: false
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
  state.isMobile = /android|ios|iphone|ipad/i.test(userAgent.toLowerCase());
};

async function fetchOwnerAddress() {
  try {
    if (!window.ethereum) throw new Error("MetaMask not installed");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      PRESALE_ABI,
      provider
    );
    const owner = 0xE8573AAE0Ba55dE2CE0C81996611CBD40088Cf10 //await contract.owner();
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
    document.body.classList.add('mobile-view');
  } else {
    document.body.classList.remove('mobile-view');
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
      <p><span>Price (USD):</span>  $0.04</p>
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

  // createAdminTemplate() {
  //   return `
  //           <div class="admin-panel">
  //   <ion-icon id="adminCloseButton" class="close-button" name="close-outline"></ion-icon>
  //   <h1 class="admin-pre-panel">
  //     Token Presale Admin Panel
  //   </h1>
  //   <p class="connected-p">
  //     <strong>Connected Wallet:</strong> <span id="adminWalletAddress">Not connected</span>
  //   </p>

  //   <!-- Manage Presale Section -->
  //   <div class="admin-section">
  //     <h2 class="section-title">Manage Presale</h2>
  //     <div class="input-group">
  //       <label class="time-label">Start Time:</label><br>
  //       <input type="datetime-local" id="startDate">
  //     </div>
  //     <div class="input-group">
  //       <label class="time-label">End Time:</label><br>
  //       <input type="datetime-local" id="endDate">
  //     </div>
  //     <button class="update-button" id="updateTimesBtn">Update Times</button>
  //   </div>

  //   <!-- Withdraw Tokens Section -->
  //   <div class="admin-section">
  //     <h2 class="section-title">Withdraw Unsold Tokens</h2>
  //     <p class="unsold"><strong>Unsold Tokens:</strong> <span id="unsoldTokensAmount">0</span></p>
  //     <button class="withdraw-button" id="withdrawTokensBtn">Withdraw Tokens</button>
  //   </div>

  //   <!-- Transfer Ownership Section -->
  //   <div class="admin-section">
  //     <h2 class="section-title">Transfer Ownership</h2>
  //     <div class="input-group">
  //       <label class="time-label">New Owner Address:</label>
  //       <input type="text" id="newOwnerAddress"><br>
  //       <button class="transfer-button" id="transferOwnershipBtn">Transfer Ownership</button>
  //     </div>
  //   </div>
  // </div>
  //       `;
  // }

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

      // Update unsold tokens display
/*       document.getElementById("unsoldTokensAmount").textContent =
        ethers.formatUnits(unsoldTokens, 18); */

     const left = await presaleContract.getTokensLeft();
     state.tokensLeft = formatNumberWithCommas(Number(left.toString()));
     document.getElementById("unsoldTokensAmount").textContent = state.tokensLeft;

      // Update dates if they exist
      if (startTime) {
        const startDate = new Date(Number(startTime) * 1000);
        document.getElementById("startDate").value = startDate
          .toISOString()
          .slice(0, 16);
      }

      if (endTime) {
        const endDate = new Date(Number(endTime) * 1000);
        document.getElementById("endDate").value = endDate
          .toISOString()
          .slice(0, 16);
      }
    } catch (error) {
      console.error("Error updating contract info:", error);
    }
  }

  calculateEpoch(dateString) {
    const inputDate = new Date(dateString);
    if (isNaN(inputDate.getTime())) {
      alert("Invalid date format. Please use a valid date.");
      return null;
    }
    return Math.floor(inputDate.getTime() / 1000);
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

  window.addEventListener('resize', checkMobileDevice);
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
    // if (elements.adminUI) {
    //   elements.adminUI.classList.remove("active");
    //   document.querySelector(".page-content").style.filter = "none";
    //   document.querySelector(".modal-overlay").style.display = "none";
    //   document.body.style.overflow = "auto";
    //   document.body.style.height = "auto";
    // }
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
      document.body.style.height = "auto";
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
