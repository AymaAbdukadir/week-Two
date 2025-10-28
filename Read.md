# Product Catalog Web Application

This is a simple product catalog web application built with **HTML, CSS, and JavaScript**. It allows users to browse, search, filter, and add products to a cart. The project demonstrates dynamic product rendering, interactive form validation, responsive navigation, and basic cart functionality.

---

## Features Implemented

### 1. Responsive Navigation Menu
- Hamburger menu toggle shows or hides navigation links and icons.
- Clicking the menu icon changes the icon from hamburger (`fa-bars`) to close (`fa-x`) and vice versa.
  
### 2. Form Validation
- Ensures all fields (`firstName`, `LastName`, `Email`) are filled before submission.
- Shows a **Toast notification** on successful form submission.

### 3. Dynamic Product Display
- Products are stored as a **JavaScript array of objects** with:
  - Name
  - Description
  - Price
  - Category
  - Image
- Each product is displayed in a card format with name, category, description, price, and **add-to-cart icon**.

### 4. Search Functionality
- **By product name:** Users can type in the input field to search products (case-insensitive).
- **By category:** Buttons for Fruits and Vegetables filter the products accordingly.
- **By price:** Slider input filters products below a selected price.

### 5. Cart Functionality
- Each product card has a **shopping cart icon**.
- Clicking the icon **increments the cart counter** displayed at the top of the page.
- Provides visual feedback of how many items are added to the cart.

### 6. Product Card Template
- `producttemp()` function generates product cards dynamically using JavaScript.
- Each card includes:
  - Product image
  - Name and category
  - Description
  - Price
  - Cart icon
  - Wishlist icon (heart)

### 7. Additional Features
- **Clearing the search input** after filtering.
- Responsive behavior for icons and nav menu.
- Separate filtering for Fruits and Vegetables.
- Price-based filtering using input slider.

---

## How It Works

1. **Navigation Menu:**  
   Toggle hamburger menu to show/hide navigation items.

2. **Form Validation:**  
   Form submission is prevented if any field is empty; Toast message shown on success.

3. **Product Display:**  
   Products are mapped to cards and appended to the `.Top-products` container.

4. **Search/Filter:**  
   - Name search via input event (`change`) triggers filtering.  
   - Category buttons filter the products.  
   - Price slider filters products under the selected price.

5. **Cart Counter:**  
   Clicking the cart icon increases the number displayed in `.cart-count`.

---

### Example Usage

- **Search by name:** Type `apple` in the input box and press Enter → shows only matching products.
- **Filter by category:** Click `Fruits` → shows only fruit products.
- **Filter by price:** Move the price slider → shows products below that price.
- **Add to cart:** Click the cart icon → counter increments.

---

### Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Toastify.js (for notifications)
- Font Awesome (for icons)

---

This project demonstrates creating a dynamic product catalog with interactive search, filter, and cart functionality entirely on the client-side.
