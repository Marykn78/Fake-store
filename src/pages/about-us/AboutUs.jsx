import React from "react";
import './AboutUs.style.scss'
import { ReactComponent as Onboard } from "./images/onboarding.svg";
import marvin from './images/marvin-meyer-SYTO3xs06fU-unsplash.jpg'

const AboutUs = () => {
  return <>
      <div className="about-container">
          <div className="text-container">
            <h2>درباره با خرید</h2>  
            <p>با خرید بستر کسب‌و‌کارهای کوچک است. اینجا سازندگان اصیل محصولات غیرکارخانه‌ای از شهرها و روستاهای مختلف بی‌واسطه می‌فروشند؛ بیشتر دیده می‌شوند و مشتریان وفادار خود را می‌یابند. در باسلام خریداران تنوع چشم‌گیری از محصولاتی می‌بینند که شاید در دکان هیچ عطاری نباشد. با فروشندگان گفت‌وگو می‌کنند و امتیازها، دیدگاه‌ها و تجربه‌های دیگران را می‌بینند. هزینه‌ای که می‌پردازند، زمانی به حساب فروشندگان می‌رود که از محصول دریافتی راضی باشند.</p>
          </div>
          <div className="image-container">
            <Onboard/>
          </div>
      </div>
      <div className="job-oppertunity">
          <div className="text-oppertunity">
            <h3>آیا میخواهید کنار ما در با خرید کار کنید؟</h3>
            <button>فرصت های شغلی</button>
          </div>
          <div className="image-container-2">
            <img className="img-work" src={marvin} alt="" />
          </div>
      </div>
      <div>
      </div>
  </>;
};

export default AboutUs;
