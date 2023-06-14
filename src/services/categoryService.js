import axios from "axios";

class CategoryService{
    static getCategories(){
        return axios.get('https://fakestoreapi.com/products/categories')
    }
}

export default CategoryService;