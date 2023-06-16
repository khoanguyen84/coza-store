import React, { useState, useEffect } from "react";
import CategoryService from "../../services/categoryService";
import ProductService from "../../services/productService";
import icon_head_01 from '../../assets/images/icons/icon-heart-01.png';
import icon_head_02 from '../../assets/images/icons/icon-heart-02.png';
import { Spinner } from "../layout";
import ProductDetailModal from "./ProductDetailModal";


function ProductList() {
    const [cateories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState('')
    const [loading, setLoading] = useState(false);
    const [productDetail, setProductDetail] = useState({
        id: 0,
        product: {}
    })
    useEffect(() => {
        try {
            async function fetchData() {
                let categoryRes = await CategoryService.getCategories();
                setCategories(categoryRes.data)
            }
            fetchData()
        } catch (error) {

        }
    }, [])

    useEffect(() => {
        try {
            setLoading(true)
            async function fetchData() {
                if (categoryName) {
                    let productRes = await ProductService.getProductsByCategory(categoryName);
                    setProducts(productRes.data)
                }
                else {
                    let productRes = await ProductService.getProducts();
                    setProducts(productRes.data)
                }
                setLoading(false)
            }
            fetchData()
        } catch (error) {

        }
    }, [categoryName])

    const handleChangeCategory = (categoryName) => {
        setCategoryName(categoryName)
    }
    return (
        <>
            <div className="bg0 mt-23 pb-140">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button
                                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${categoryName == '' ? 'how-active1' : ''}`}
                                onClick={() => handleChangeCategory("")}
                            >
                                All Products
                            </button>
                            {
                                cateories.map((cat) => (
                                    <button
                                        className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${categoryName == cat ? 'how-active1' : ''}`}
                                        onClick={() => handleChangeCategory(cat)}
                                        key={cat}
                                    >
                                        {cat}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="flex-w flex-c-m m-tb-10">
                            <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close" />
                                Filter
                            </div>
                            <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close" />
                                Search
                            </div>
                        </div>
                    </div>
                    <div className="row isotope-grid">
                        {
                            loading ? <Spinner /> :
                                products.length && products.map((product) => (
                                    <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
                                        <div className="block2">
                                            <div className="block2-pic hov-img0">
                                                <img className="product-photo" src={product.image} alt="IMG-PRODUCT" />
                                                <button
                                                    onClick={() => setProductDetail({id: product.id, product: product})}
                                                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                                                >
                                                    Quick View
                                                </button>
                                            </div>
                                            <div className="block2-txt flex-w flex-t p-t-14">
                                                <div className="block2-txt-child1 flex-col-l ">
                                                    <a
                                                        href="product-detail.html"
                                                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                                    >
                                                        {product.title}
                                                    </a>
                                                    <span className="stext-105 cl3">${product.price}</span>
                                                </div>
                                                <div className="block2-txt-child2 flex-r p-t-3">
                                                    <a
                                                        href="#"
                                                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                                                    >
                                                        <img
                                                            className="icon-heart1 dis-block trans-04"
                                                            src={icon_head_01}
                                                            alt="ICON"
                                                        />
                                                        <img
                                                            className="icon-heart2 dis-block trans-04 ab-t-l"
                                                            src={icon_head_02}
                                                            alt="ICON"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                    {/* Load more */}
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a
                            href="#"
                            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                            Load More
                        </a>
                    </div>
                </div>
            </div>
            {
                productDetail.id && <ProductDetailModal productDetail = {productDetail} setProductDetail={setProductDetail} />
            }
        </>

    )
}

export default ProductList;