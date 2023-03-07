import React from 'react';
import {Row} from "react-bootstrap";

const ShopContactUsForm = () => {
    return (
        <div className={'text-center justify-content-center '}>
            <div  className={'py-5'}>
                <span>+373 (533) 6-38-82</span>
                <p><b>shop.sheriff@gmail.com</b></p>
                Вы можете связаться с нами по почте, телефону, в Instagram, Vk или Facebook
                <div className={'mt-3'}>
                    <img className={'mr-3'} src="/assets/icon/instagram.png" alt="Instagram"/>
                    <img className={'mr-3'} src="/assets/icon/vk_black.png" alt="Vk"/>
                    <img src="/assets/icon/facebook_black.png" alt="Facebook"/>
                </div>
            </div>
        </div>
    );
};

export default ShopContactUsForm;