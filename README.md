# Orderly
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1gMSKWcuwOqnhWEKI-Z6Fe1ACIikoB3PH" alt="Description of the GIF" width="100%" " />
</p>


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Event-Driven Mechanism](#event-driven-mechanism)
- [Responsive Design](#responsive-design)
- [Identity](#identity)
- [Live Demo](#live-demo)

## Features

- **Responsive Design:** Built with pure CSS to ensure a seamless experience across all devices.
- **State Management:** Utilized Redux for managing the state of the shopping cart and products, including actions for adding, removing, and updating cart items as well as managing the product list and details.
- **React Router:** Implemented React Router for navigating between different pages within the application.
- **TypeScript:** Leveraged TypeScript for type safety and to catch errors early in the development process.
- **Custom Brand Identity:** Developed a unique brand identity for "Orderly," including logo, color schemes, and typography.

## Technologies Used
- **React.js:** For building the user interface.
- **Redux:** For state management.
- **TypeScript:** For type safety and better developer experience.
- **React Router:** For routing between different pages.
- **Vanilla CSS:** For styling and ensuring the design is responsive.
- **Axios:** For making API requests to the Fake Store API.
- **Git and GitHub:** For version control and code hosting.

## Project Structure

- **src/**
  - **assets/** - Images, logos, and other static assets
  - **components/** - Reusable components like Product, CartItem, etc.
  - **pages/** - Main pages like Home, Shop, etc.
  - **layouts/** - Main layout components
  - **store/** - Redux setup, slices, and store configuration
  - **types/** - TypeScript type definitions
  - **utils/** - Utility functions
  - **services/** - Axios global configuration and API services
  - **routes/** - Route configurations and App Router
  - **hooks/** - Custom hooks
  - **main.tsx** - Main application component
 
## Setup and Installation

Follow these steps to install and run the project on your local machine:

1. **Clone the repository:**

    - First, clone the repository from GitHub to your local machine:
```bash
git clone https://github.com/marioshafiek/Orderly.git
```

```bash
cd Orderly
```
2. **Install dependencies**
```bash
npm install
```
3. **Run the development server**

```bash
npm run dev
```



## Usage

1. **Homepage:** The homepage serves as the entry point to the project.

2. **Shop Page:** Browse through a variety of products available for purchase. You can filter products by categories to easily find what you're looking for, and add desired items to your cart.

3. **Cart:** View the items you have added to your cart. You can adjust quantities, remove items, or clear the entire cart before proceeding to checkout.


## API Integration

The project uses the Fake Store API to fetch product data. Axios is used for making HTTP requests, and the data is stored in Redux for global state management.

API Endpoint: `https://fakestoreapi.com/products`

## Event-Driven Mechanism

The cart's state is managed by Redux, and any updates to the cart trigger re-renders of the components that depend on the cart state. This ensures that the UI is always in sync with the state.

Example:
- When a product is added to the cart, an action is dispatched to update the state, which triggers a re-render of the cart component to display the updated cart.

## Responsive Design

The project is fully responsive, with CSS media queries used to adjust the layout for different screen sizes. The design was tested on various devices to ensure a consistent experience.

### Desktop View

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1WsFyR7BGWZuNgIdazc1-_uvzOv1pWTcE" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1deJMNE3LJT17b1SEtfc7pasdnodesW18" width="45%" style="border-radius: 15px;" />
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=12d-87lecHrHD4aUCUDo_wWOxid-Udl36" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1W-bt-11pHKtXd86DCbKPYHm47dxnMxiT" width="45%" style="border-radius: 15px;" />
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1QFRxipSC_yBMd1WDCeIrbyfM2_im1b6I" width="45%" style="border-radius: 15px;" />
</p>

### Tablet View

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1LWJlxBSWc3RZerB0iY-kh_GzdbOq_9w3" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=16mpXHgoUqGbTUEOlir8GxndquXqN1GTV" width="45%" style="border-radius: 15px;" />
</p>

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=19MSMHB-EGRaCyB_2k9TSgKgyTld6R6b8" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1Gaz0TF57Bgqq3-gSXBOfmUjdiMsEi9pp" width="45%" style="border-radius: 15px;" />
</p>

### Mobile View

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1sd5Mdj_PokbZSpFsB3N19xaRujHTLxtP" width="25%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1OtflsgItHeDUEaKExka9PYEjUalHu9fu" width="25%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=184f-NeXnog3Jg-nRWmRoW3aNUmqvu-_-" width="25%" style="border-radius: 15px;" />
</p>

## Identity

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=15Ks-5N_DiKeCJmq2sECP80CHMUv-isYn" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1HOKbklBTYn7EVK73iOhVY8isbemnrEbi" width="45%" style="border-radius: 15px;" />
  <img src="https://drive.google.com/uc?export=view&id=1KNSIUP73D1Tpvad25xSrO7h5d3UUhn-B" width="45%" style="border-radius: 15px;" />
</p>


## 🚀 Live Demo

<p align="center">
  <a href="https://orderly-six.vercel.app/" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Explore-Live%20Demo-blueviolet?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

Click the button above to check out the live demo of the project and see it in action!
















