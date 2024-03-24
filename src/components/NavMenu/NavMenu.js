import React from "react";
import { Link } from 'react-scroll';
import './NavMenu.scss';

// Link icons:
const icSection1 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>;
const icSection2 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>;
const icSection3 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z"/></svg>;
const icSection4 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>;
const icSection5 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/></svg>;
const icSection6 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>;
const icSection7 = <svg className='nav-menu__links__link__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>;

// Guest user icon:
const guestUserIcon = <svg className='nav-menu__user-container__user-icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 37.6667C29.757 37.6667 37.6666 29.757 37.6666 20C37.6666 10.243 29.757 2.33334 20 2.33334C10.243 2.33334 2.33331 10.243 2.33331 20C2.33331 29.757 10.243 37.6667 20 37.6667Z" fill="#D9D9D9"/><path d="M33 31C32.0464 32.7553 30.2847 34.2745 27.957 35.3488C25.6292 36.4232 22.8495 37 20 37C17.1505 37 14.3708 36.4232 12.043 35.3488C9.71526 34.2745 7.95356 32.7553 7 31" fill="#868E96"/><path d="M7.12122 32.0933C8.06588 29.4331 9.81115 27.1307 12.1172 25.5024C14.4233 23.8742 17.177 23 20 23C22.8229 23 25.5767 23.8742 27.8827 25.5024C30.1888 27.1307 31.9341 29.4331 32.8787 32.0933" fill="#868E96"/><path d="M20 23C24.2342 23 27.6666 19.5675 27.6666 15.3333C27.6666 11.0991 24.2342 7.66666 20 7.66666C15.7658 7.66666 12.3333 11.0991 12.3333 15.3333C12.3333 19.5675 15.7658 23 20 23Z" fill="#868E96"/></svg>;




const NavMenu = () => {
    return(
        <>
            <div className='darken-bg' />
            <div className='nav-menu'>
                <div className='nav-menu__user-container'>
                    {guestUserIcon}
                    <p className='nav-menu__user-container__user-text'>Clique para cadastrar-se</p>
                </div>
                <div className='nav-menu__links'>
                    <Link className='nav-menu__links__link' to="section-1">{icSection1} Boas-vindas</Link>
                    <Link className='nav-menu__links__link' to="section-2">{icSection2} Quem somos nós</Link>
                    <Link className='nav-menu__links__link' to="section-3">{icSection3} Benefícios para condutores</Link>
                    <Link className='nav-menu__links__link' to="section-4">{icSection4} Nossos resultados</Link>
                    <Link className='nav-menu__links__link' to="section-5">{icSection5} Onde operamos</Link>
                    <Link className='nav-menu__links__link' to="section-6">{icSection6} Instale nossa app</Link>
                    <Link className='nav-menu__links__link' to="section-7">{icSection7} Contacte-nos</Link>
                </div>
            </div>
        </>
    )
}

export default NavMenu;