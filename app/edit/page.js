"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCircleExclamation, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Edit = () => {


    return (
        <main>
            <div className="profile-screen">
                <div className="your-order-container">
                    <ol className="custom-list">
                        <li>
                            <Link href="/profile" id="backToProfile">Your Account</Link>
                        </li>
                        <li>
                            <p>Your Orders</p>
                        </li>
                    </ol>
                    <h1>Your Orders</h1>
                    <div className="your-order-filter">
                        <label>Orders placed in</label>
                        <select className="past-order-drop-down">
                            <option value="30 days">last 30 days</option>
                            <option value="3 months">past 3 months</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                    <div className="your-order-cards">
                        <div className="your-order-card-top-bar">
                            <div className="your-order-top-bar-cont">
                                <p>ORDER PLACED</p>
                                <p>May 5, 2023</p>
                            </div>
                            <div className="your-order-top-bar-cont2">
                                <p>TOTAL</p>
                                <p>$70.42</p>
                            </div>
                        </div>
                        <div className="order-card-main">
                            <div className="order-card-main-left">
                                <Image src="/profileheadsetimg.png" sizes="100vw" width={0} height={0} style={{width: "90px", height: "90px"}}></Image>
                            </div>
                            <div className="order-card-main-middle">
                                <Link href="/signin">JanSport Right Pack Backpack - Travel, Work, or Laptop Bookbag with Leather Bottom, Black</Link>
                                <button><FontAwesomeIcon icon={faBagShopping} />Buy Again</button>
                            </div>
                            <div className="order-card-main-right">
                                <button>Track your order</button>
                                <button>Cancel your order</button>
                            </div>
                        </div>
                        <div className="order-card-main">
                            <div className="order-card-main-left">
                                <Image src="/profileheadsetimg.png" sizes="100vw" width={0} height={0} style={{width: "90px", height: "90px"}}></Image>
                            </div>
                            <div className="order-card-main-middle">
                                <Link href="/signin">JanSport Right Pack Backpack - Travel, Work, or Laptop Bookbag with Leather Bottom, Black</Link>
                                <button><FontAwesomeIcon icon={faBagShopping} />Buy Again</button>
                            </div>
                            <div className="order-card-main-right">
                                <button>Track your order</button>
                                <button>Cancel your order</button>
                            </div>
                        </div>
                    </div>

                    <div className="your-order-cards">
                        <div className="your-order-card-top-bar">
                            <div className="your-order-top-bar-cont">
                                <p>ORDER PLACED</p>
                                <p>May 5, 2023</p>
                            </div>
                            <div className="your-order-top-bar-cont2">
                                <p>TOTAL</p>
                                <p>$70.42</p>
                            </div>
                        </div>
                        <div className="order-card-main">
                            <div className="order-card-main-left">
                                <Image src="/profileheadsetimg.png" sizes="100vw" width={0} height={0} style={{width: "90px", height: "90px"}}></Image>
                            </div>
                            <div className="order-card-main-middle">
                                <Link href="/signin">JanSport Right Pack Backpack - Travel, Work, or Laptop Bookbag with Leather Bottom, Black</Link>
                                <button><FontAwesomeIcon icon={faBagShopping} />Buy Again</button>
                            </div>
                            <div className="order-card-main-right">
                                <button>Track your order</button>
                                <button>Cancel your order</button>
                            </div>
                        </div>
                        <div className="order-card-main">
                            <div className="order-card-main-left">
                                <Image src="/profileheadsetimg.png" sizes="100vw" width={0} height={0} style={{width: "90px", height: "90px"}}></Image>
                            </div>
                            <div className="order-card-main-middle">
                                <Link href="/signin">JanSport Right Pack Backpack - Travel, Work, or Laptop Bookbag with Leather Bottom, Black</Link>
                                <button><FontAwesomeIcon icon={faBagShopping} />Buy Again</button>
                            </div>
                            <div className="order-card-main-right">
                                <button>Track your order</button>
                                <button>Cancel your order</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </main>
    )
}

export default Edit