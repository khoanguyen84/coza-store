import axios from "axios";

class ProductService {
    static getProducts(){
        return axios.get('https://fakestoreapi.com/products')
    }
    static getProductsByCategory(categoryName){
        return axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
    }
}

export default ProductService;