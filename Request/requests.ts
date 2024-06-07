export async function getAllCategory() {
    const categoryRes = await fetch("https://fakestoreapi.com/products/categories");
    return categoryRes.json();
}

export async function getAllProduct() {
    const productRes = await fetch('https://fakestoreapi.com/products');
    return productRes.json();
}