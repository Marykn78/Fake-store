import React from "react";
import './Product.style.scss'
import productimg from '../../assets/images/controller.png';
import { ReactComponent as Safepay } from "../../assets/svg/safepay.svg";
import { ReactComponent as Calander } from "../../assets/svg/calander.svg";
import { ReactComponent as Chat } from "../../assets/svg/chat.svg";


const Productpage = () => {
    // const database =[{id:1,title:'',feature:'',img:}]
    return ( 
        <div className="product-container">
            <div className="product-description">
                <div className="productimg-container">
                    <img className="productimg" src={productimg} alt="" />
                </div>
                <div className="productdetail">
                    <div className="protitle">
                        <div>
                            <h2>عنوان محصول به همراه توضیحات </h2>
                        </div>
                        <div className="icon-title">
                            <iconify-icon icon="bi:bookmark" style={{color: "#4c4c4c"}} width="18"></iconify-icon>
                            <iconify-icon icon="carbon:share" style={{color: "#4c4c4c"}} width="20" rotate="180deg"></iconify-icon>
                            <iconify-icon icon="clarity:warning-line" style={{color: "#4c4c4c"}} width="24"></iconify-icon>
                        </div>
                    </div>
                    <div className="productfeature">
                        <div className="featuretitle" >
                            <h3>ویژگی های محصول</h3>
                        </div>
                        <ul>
                            <li>وزن خالص :</li>
                            <li>جنس :</li>
                            <li>ابعاد :</li>
                            <li>رنگ :</li>
                        </ul>
                    </div>
                    <div className="protermspayment">
                        <div className="terms-pay">
                            <Safepay/>
                            <p>از درگاه امن بانک پرداخت کن</p>
                        </div>
                        <div className="terms-pay">
                            <Calander/>
                            <p>تا 7 روز فرصت داری پسش بدی</p>
                        </div>
                        <div className="terms-pay">
                            <Chat/>
                            <p>مستقیم با آدم ها گفتگو کن</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-price">
                <div className="freesend">
                    <div className="send-s1">
                        <iconify-icon icon="fluent:vehicle-truck-cube-20-filled" style={{color: "#4c4c4c"}} width="62"></iconify-icon>
                        <h3>ارسال </h3>
                    </div>
                    <div className="send-s2">
                        <h3>ارسال رایگان به سراسر ایران</h3>
                    </div>
                </div>
                <div className="add-card">
                        <div className="price">
                            <p>22,000,000 تومان</p>
                        </div>
                        <div className="btn-addcard">
                            <button>افزودن به سبد خرید</button>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Productpage;