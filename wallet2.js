// Contract Constants
const CONTRACT_ADDRESS = "0xBb3dB02d0ca30A19dF510518875F7A5Dd52aB6aB" // "0x4A874bb5702983f8a6685D852aDBC2F075a2A543";
const TOKEN_ADDRESS = "0x833ddBaB8a7AF355D7566946cbB01569b8dC90Ff"

/* const CONTRACT_ADDRESS = "0x257A8FcB4d4209e10B0e89791B8e1997826B465D";
const TOKEN_ADDRESS = "0xa6D835059EfD847E6863b60f65e4Efb394209254"; */

// Contract ABIs
const PRESALE_ABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_end",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maticAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "msgValue",
				"type": "uint256"
			}
		],
		"name": "DebugPrice",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_end",
				"type": "uint256"
			}
		],
		"name": "setEndTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_start",
				"type": "uint256"
			}
		],
		"name": "setStartTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensPurchased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawUnsoldTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numberOfTokens",
				"type": "uint256"
			}
		],
		"name": "calculateMaticAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMaticUSDPrice",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokenPriceInMatic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokensLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokensLeftRaw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saleToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenDecimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "tokensOwned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupplyRaw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
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
   if (elements.errorMessage) {
      elements.errorMessage.textContent = "";
    }
    elements.connectButton.forEach(button => {
      button.textContent = "CONNECTING...";
      button.classList.add("loading");
    });
    updateUI();

    // Replace this section in handleConnectWallet()
    if (state.isMobile) {
      // Handle mobile wallet connection
      if (window.ethereum) {
        console.log("Using in-app browser with ethereum provider");
        // Continue with the connection process
      } else {
        // For mobile browsers without built-in wallet
        const currentUrl = window.location.href;
        const hostname = window.location.hostname;
        const pathname = window.location.pathname;
        
        // Create a cleaner dapp URL for MetaMask
        const dappUrl = `${hostname}${pathname}`;
        // Different deep linking formats based on wallet
        const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;

        // Show options to user
        showMobileWalletOptions([
          { name: "MetaMask", deepLink: metamaskDeepLink },
        ]);

        state.isLoading = false;
        elements.connectButton.forEach(button => {
          button.textContent = "CONNECT WALLET";
          button.classList.remove("loading");
        });
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
     if (elements.errorMessage) {
      elements.errorMessage.textContent = `Connection error: ${error.message}`;
    }
    elements.connectButton.forEach(button => {
      button.textContent = "CONNECT WALLET";
      button.classList.remove("loading");
    });
    updateUI();
  }
}

// Add this function to handle mobile wallet options
function showMobileWalletOptions(walletOptions) {
  // Create a modal or panel to display wallet options
  const existingModal = document.querySelector(".mobile-wallet-modal");
  if (existingModal) {
    existingModal.remove();
  }
 
  const mobileWalletModal = document.createElement("div");
  mobileWalletModal.className = "mobile-wallet-modal";
  mobileWalletModal.innerHTML = `
    <div class="mobile-wallet-content">
      <h3>Connect with your wallet</h3>
      <p>Please tap to open MetaMask:</p>
      <div class="wallet-options">
        ${walletOptions
          .map(
            (wallet) => `
          <button class="wallet-option" data-deeplink="${wallet.deepLink}">
            <span>${wallet.name}</span>
          </button>
        `
          )
          .join("")}
      </div>
      <button class ="wallet-close-button">Cancel</button>
    </div>
  `;
  //<a href="${wallet.deepLink}" class="wallet-option">
   //         <span>${wallet.name}</span>
   //</a>

  document.body.appendChild(mobileWalletModal);

    const walletButtons = mobileWalletModal.querySelectorAll(".wallet-option");
  walletButtons.forEach(button => {
    // Use both click and touchend events for maximum compatibility
    ['click', 'touchend'].forEach(eventType => {
      button.addEventListener(eventType, function(e) {
        if (eventType === 'touchend') {
          e.preventDefault(); // Prevent ghost clicks
        }
        
        const deepLink = this.getAttribute("data-deeplink");
        console.log(`Opening wallet deep link (${eventType}):`, deepLink);
        
        // Show a loading indicator
        this.innerHTML = '<span class="opening-text">Opening...</span>';
        this.disabled = true;
        
        // Use multiple approaches to open the wallet
        try {
          // First try opening in a new tab
          const newTab = window.open(deepLink, '_blank');
          
          // If that didn't work or was blocked, try direct location change
          if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
            setTimeout(() => {
              window.location.href = deepLink;
            }, 100);
          }
        } catch (err) {
          console.error("Error opening wallet:", err);
          // Final fallback
          window.location.href = deepLink;
        }
      }, { passive: false });
    });
  });
  
  
  // Add close button functionality
  const closeButton = mobileWalletModal.querySelector(".wallet-close-button");
  if (closeButton) {
    closeButton.addEventListener("click", function() {
      mobileWalletModal.remove();
    });
  }

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
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      touch-action: manipulation;
    }
    .mobile-wallet-content {
      background: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 90%;
      width: 300px;
      text-align: center;
    }
    .wallet-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }
     .wallet-option {
      padding: 12px; /* Extra large touch target */
      background: #e74c3c;
      color: white;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      border: none;
      font-size: 14px; /* Larger text */
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      touch-action: manipulation;
      box-shadow: 0 3px 5px rgba(0,0,0,0.1);
    }
    .wallet-option:active {
      background: #2980b9;
      transform: translateY(2px);
    }
   .wallet-close-button {
      margin-top: 20px;
      padding: 12px 28px;
      background: #e0e0e0;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      touch-action: manipulation;
    }
    .wallet-loading {
      margin-top: 15px;
      color: #666;
    }
    .opening-text {
      font-style: italic;
      background: #e74c3c;
      color: white;
      font-size: 14px;
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


function showMobileNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `mobile-notification ${type}`;
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Add basic styles
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '12px 20px';
  notification.style.borderRadius = '4px';
  notification.style.zIndex = '9999';
  notification.style.textAlign = 'center';
  notification.style.maxWidth = '90%';
  notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  
  // Style based on type
  if (type === 'success') {
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#F44336';
    notification.style.color = 'white';
  } else {
    notification.style.backgroundColor = '#2196F3';
    notification.style.color = 'white';
  }
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Buy tokens function
async function buyTokens() {
  const amount = tokenAmount.value;
  if (!amount || parseFloat(amount) <= 0) {
    errorMessage.textContent = "Please enter a valid amount";
    showMobileNotification("Please enter a valid amount", "error");   
    return;
  }

  state.isLoading = true;
  errorMessage.textContent = "";
  successMessage.textContent = "";
  updateUI();

  showMobileNotification("Processing transaction...", "info");

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

    tokenAmount.value = "";
    successMessage.textContent = "Tokens purchased successfully!";
    showMobileNotification("Tokens purchased successfully!", "success");
    await getContractInfo();
  } catch (err) {
    console.error("Transaction error:", err);
    errorMessage.textContent =
      "Transaction failed: " + (err.reason || err.message);
    showMobileNotification("Transaction failed", "error");
  } finally {
    state.isLoading = false;
    updateUI();
    await getContractInfo(); 
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
      showMobileNotification("Invalid date format", "error");
      return null;
    }

    // Get current date for validation and relative calculation
    const currentDate = new Date();

    // Define maximum allowed date (e.g., end of 2026)
    const maxAllowedDate = new Date(2026, 11, 31);

    // Check if date is in the past
    if (inputDate < currentDate) {
      alert("Please enter a date in the future.");
      showMobileNotification("Please enter a future date", "error");
      return null;
    }

    // Check if date is too far in the future
    if (inputDate > maxAllowedDate) {
      alert("Date is too far in the future. Please enter a date before 2027.");
      showMobileNotification("Date is too far in the future", "error");
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

      showMobileNotification(`Updating ${isStartDate ? "start" : "end"} date...`, "info");

      // Call the appropriate contract function
      if (isStartDate) {
        await this.contract.setStartTime(relativeSeconds);
      } else {
        await this.contract.setEndTime(relativeSeconds);
      }

      alert(`${isStartDate ? "Start" : "End"} date updated successfully!`);
      showMobileNotification(`Date updated successfully!`, "success");

      // Update UI after blockchain confirms the transaction
      await this.updateContractInfo();
    } catch (error) {
      console.error(
        `Error setting ${isStartDate ? "start" : "end"} date:`,
        error
      );
      alert(`Failed to update date: ${error.message}`);
      showMobileNotification("Failed to update date", "error");
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
          showMobileNotification("Please set both times", "error");
          return;
        }

        const newStart = this.calculateEpoch(startDate);
        const newEnd = this.calculateEpoch(endDate);

        if (!newStart || !newEnd) return;

        if (newEnd <= newStart) {
          alert("End time must be after start time");
          showMobileNotification("End time must be after start time", "error");
          return;
        }

        try {
          this.setLoading(true);
          showMobileNotification("Updating contract times...", "info");
          const txStart = await this.contract.setStartTime(newStart);
          await txStart.wait();

          const txEnd = await this.contract.setEndTime(newEnd);
          await txEnd.wait();

          alert("Start and end times updated successfully!");
          showMobileNotification("Times updated successfully!", "success");
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert("Failed to update times: " + (err.reason || err.message));
          showMobileNotification("Failed to update times", "error");
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
          showMobileNotification("Withdrawing tokens...", "info");
          const tx = await this.contract.withdrawUnsoldTokens();
          await tx.wait();
          alert("Unsold tokens withdrawn successfully!");
          showMobileNotification("Tokens withdrawn successfully!", "success");
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert(
            "Failed to withdraw unsold tokens: " + (err.reason || err.message)
          );
          showMobileNotification("Failed to withdraw tokens", "error");
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
          showMobileNotification("Invalid address format", "error");
          return;
        }

        try {
          this.setLoading(true);
          showMobileNotification("Transferring ownership...", "info");
          const tx = await this.contract.transferOwnership(newOwnerAddress);
          await tx.wait();
          alert("Ownership transferred successfully!");
          showMobileNotification("Ownership transferred successfully!", "success");
          document.getElementById("newOwnerAddress").value = "";
          await this.updateContractInfo();
        } catch (err) {
          console.error(err);
          alert("Failed to transfer ownership: " + (err.reason || err.message));
          showMobileNotification("Failed to transfer ownership", "error");
        } finally {
          this.setLoading(false);
        }
      });

    // Auto-update contract info when account changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        if (accounts.length > 0) {
          showMobileNotification("Wallet account changed", "info");
        } else {
          showMobileNotification("Wallet disconnected", "info");
        }
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

  elements.connectButton.forEach(button => {
    // Clone and replace to remove all existing listeners
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
  });

  elements.connectButton = document.querySelectorAll(".connect-button");

// Event Listeners
elements.connectButton.forEach(button => {
    ['click', 'touchend'].forEach(eventType => {
      button.addEventListener(eventType, async (e) => {
        // Prevent default only for touchend to avoid double triggering
        if (eventType === 'touchend') {
          e.preventDefault();
        }
        console.log(`Connect button ${eventType} event triggered`);
        
        try {
          await handleConnectWallet();
        } catch (error) {
          console.error(`Error in handleConnectWallet (${eventType}):`, error);
          if (elements.errorMessage) {
            elements.errorMessage.textContent = `Connection error: ${error.message}`;
          }
          showMobileNotification("Connection error", "error");
        }
      }, { passive: false });
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
      showMobileNotification("Account changed", "info");
    } else {
      state.connectedAddress = null;
      showMobileNotification("Wallet disconnected", "info");
    }
    updateUI();
  });
}

window.addEventListener("resize", checkMobileDevice);

window.addEventListener("resize", () => {
  const modal = document.querySelector(".modal.active");
  const wrapper = document.querySelector(".wrapper");

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
});
