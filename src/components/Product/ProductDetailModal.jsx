import React from "react";
import icon_close from '../../assets/images/icons/icon-close.png'

function ProductDetailModal(props) {
    const {productDetail, setProductDetail} = props;
    const {product} = productDetail;
    return (
        <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
            <div className="overlay-modal1 js-hide-modal1" />
            <div className="container">
                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1"
                        onClick={() => setProductDetail({...productDetail, id: 0})}
                    >
                        <img src={icon_close} alt="CLOSE" />
                    </button>
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots" />
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                    <div className="slick3 gallery-lb">
                                        <div
                                            className="item-slick3"
                                            data-thumb="images/product-detail-01.jpg"
                                        >
                                            <div className="wrap-pic-w pos-relative">
                                                <img className="product-photo-lg" src={product.image} alt="IMG-PRODUCT" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {product.title}
                                </h4>
                                <span className="mtext-106 cl2">${product.price}</span>
                                <p className="stext-102 cl3 p-t-23">
                                    {product.description}
                                </p>
                                {/*  */}
                                <div className="p-t-33">
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">Size</div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="form-control" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Size S</option>
                                                    <option>Size M</option>
                                                    <option>Size L</option>
                                                    <option>Size XL</option>
                                                </select>
                                                <div className="dropDownSelect2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">Color</div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="form-control" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>White</option>
                                                    <option>Grey</option>
                                                </select>
                                                <div className="dropDownSelect2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-minus" />
                                                </div>
                                                <input
                                                    className="mtext-104 cl3 txt-center num-product"
                                                    type="number"
                                                    name="num-product"
                                                    defaultValue={1}
                                                />
                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-plus" />
                                                </div>
                                            </div>
                                            <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal;