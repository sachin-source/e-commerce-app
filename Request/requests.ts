export async function getAllCategory() {
    const categoryRes = await fetch("https://fakestoreapi.com/products/categories");
    return categoryRes.json();
}

export async function getAllProduct() {
    const productRes = await fetch('https://fakestoreapi.com/products');
    return productRes.json();
}

export async function getSingleProduct(id:string) {
    const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProductRes.json();
}

export async function getProductByCategory(category:string) {
    const productByCategoryRes = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return productByCategoryRes.json();
}