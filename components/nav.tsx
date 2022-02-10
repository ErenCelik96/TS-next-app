import React from 'react';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <div className="navButtonGroup">
                <ul className="navButtonList">
                    <li className="navButton home"><Link href="/">Home</Link></li>
                    <li className="navButton detail"><Link href="/favorites">Favorites</Link></li>
                    <li className="navButton cart"><Link href="/cart">Cart</Link></li>
                </ul>
            </div>
            <style>{
                `
                nav{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 30%;
                    background-color: #0f90c4;
                    width: 100%;
                }
                .navButtonGroup{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    padding: 0;
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
