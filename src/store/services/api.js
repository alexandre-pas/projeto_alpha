const APIURL = 'https://api.mercadolibre.com/sites/MLB/categories';
// const APIURL = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  try {
    const response = await fetch(APIURL);
    console.log(response);
    return response.json();
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
