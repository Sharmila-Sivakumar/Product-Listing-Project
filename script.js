const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 20000,
    rating: 4.5,
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/ps_2504/gallery/in-galaxy-s25-s937-sm-s937bzsbins-thumb-546082683?$UX_EXT2_PNG$"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 60000,
    rating: 4.8,
    img: "https://images.pexels.com/photos/2363482/pexels-photo-2363482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Wireless Earbuds",
    category: "electronics",
    price: 2500,
    rating: 4.2,
    img: "https://avstore.in/cdn/shop/files/3.AVStore-Devialet-Gemini-II-Front-Angled-View-With-Charging-Case-Black.jpg?v=1698922336"
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 499,
    rating: 4.0,
    img: "https://cdn.endource.com/image/24706de208ee11126c05b1898ba4f68b/detail/cos-regular-fit-brushed-cotton-t-shirt.jpg?optimizer=image&class=800"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 1199,
    rating: 3.9,
    img: "https://thumbs.dreamstime.com/b/blue-jeans-isolated-white-34440719.jpg"
  },
  {
    name: "Smart Watch",
    category: "accessories",
    price: 3500,
    rating: 4.6,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtKL4yACoSrLRxDcpagOrBkeDpRGfNKPahg&s"
  },
  {
    name: "Cap",
    category: "accessories",
    price: 299,
    rating: 4.1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QXVhNhiwWrVJ9hi0_eg9hwa6z5o7f5a8Qw&s"
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 899,
    rating: 4.3,
    img: "https://mokobara.com/cdn/shop/files/The-Cheddar-Backpack_JB-1.jpg?v=1739271728"
  }
];

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;

  let filtered = category === "all"
    ? [...products]
    : products.filter(p => p.category === category);

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-img" />
      <h3>${p.name}</h3>
      <p><strong>Category:</strong> ${p.category}</p>
      <p><strong>Price:</strong> ₹${p.price}</p>
      <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
    `;
    container.appendChild(div);
  });
}

window.onload = filterProducts;
