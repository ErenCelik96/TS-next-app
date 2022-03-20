import React from 'react';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined, HeartOutlined, HomeOutlined } from '@ant-design/icons'
const Nav = () => {
    const cartList = useSelector((state: any) => state.cart.cart);
    const likeList = useSelector((state: any) => state.likeButton.like);
    return (
        <nav>
            <div className="navButtonGroup">
                <ul className="navButtonList">
                    <Link href="/">
                        <li className="navButton home">
                            <HomeOutlined style={{ fontSize: '26px' }} />
                        </li>
                    </Link>
                    <Link href="/pages/favorites">
                        <li className="navButton detail">
                            <HeartOutlined spin={likeList.length > 1 ? true : false} style={{ fontSize: '26px' }} />
                            <span style={{ fontSize: '12px', textAlign: 'center', display: 'inline-block', height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'red' }}>
                                {likeList.length - 1}
                            </span>
                        </li>
                    </Link>
                    <Link href="/pages/cart">
                        <li className="navButton cart">
                            <ShoppingCartOutlined style={{ fontSize: '26px' }} />
                            <span style={{ fontSize: '12px', textAlign: 'center', display: 'inline-block', height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'purple' }}>
                                {cartList.length - 1}
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <style>{
                `
                nav{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 15%;
                    background-color: #0f90c4;
                    minWidth: 100%;
                }
                .navButtonGroup{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    margin: 0;
                    background-color: #34addd;
                }
                .navButton{
                    display:inline;
                    margin-right: 1.2rem;
                    cursor: pointer;
                    font-size: 20px;
                    color: #f1e785;
                }
                .navButton:hover{
                    color: #22221c;
                }
                `
            }</style>
        </nav>
    )

};
export default Nav;
