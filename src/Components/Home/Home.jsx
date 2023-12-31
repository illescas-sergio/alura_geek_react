/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from '../Header/Header.jsx';
import SectionHeaderMenu from '../SectionHeaderMenu/SectionHeaderMenu.jsx';
import SectionHeaderBanner from '../SectionHeaderBanner/SectionHeaderBanner.jsx';
import Logo from '../Logo/Logo.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import LoginButton from '../LoginButton/LoginButton.jsx';
import Error from "../ErrorPage/Error.jsx";
import ShowSection from '../ShowSection/ShowSection.jsx';

export default function Home(){

    const [state, setstate] = useState({
        isLoggedIn: false,
    });

       
    return (

        state.isLoggedIn ? 
        <div>
            <Header>
                <SectionHeaderMenu>
                    <Logo>
                        <SearchBar />
                    </Logo>
                    <LoginButton />
                </SectionHeaderMenu>
                <SectionHeaderBanner />
            </Header>
            <Main />
            <Footer /> 
        </div> :

        <div>
             <Header>
                <SectionHeaderMenu>
                    <Logo>
                        <SearchBar />
                    </Logo>
                    <LoginButton />
                </SectionHeaderMenu>
                <SectionHeaderBanner />
            </Header>
            <Main />
            <Footer /> 
        </div>
        
    )
}

// {
//     "producto": [
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_6FDXGY9J6y4.png",
//         "price": "60,00",
//         "id": 1,
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_epRFE_hBNjo.png",
//         "price": "60,00",
//         "id": 2,
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_KeGToDVN0l4.png",
//         "price": "60,00",
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie.",
//         "id": 3
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_4OHkK555s1A.png",
//         "price": "60,00",
//         "id": 4,
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_R8L1l9RN198.png",
//         "price": "60,00",
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie.",
//         "id": 5
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_1VV1MRafd7A.png",
//         "price": "60,00",
//         "id": 6,
//         "sectionId": "star-wars",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Control XYZ",
//         "imageUrl": "/assets/products/unsplash_0POwK6iAiRQ.png",
//         "price": "60,00",
//         "id": 7,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Control y Consola XYZ",
//         "imageUrl": "/assets/products/unsplash_caNzzoxls8Q.png",
//         "price": "60,00",
//         "id": 8,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Consola XYZ",
//         "imageUrl": "/assets/products/unsplash_ZV7lnfyQLmA.png",
//         "price": "60,00",
//         "id": 9,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Control XYZ",
//         "imageUrl": "/assets/products/unsplash_wa5z9o9fgjw.png",
//         "price": "60,00",
//         "id": 10,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Consola XYZ",
//         "imageUrl": "/assets/products/unsplash_Zjn4dT993-g.png",
//         "price": "60,00",
//         "id": 11,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Game Boy Color",
//         "imageUrl": "/assets/products/unsplash_k-xYhI3-gJM.png",
//         "price": "60,00",
//         "id": 12,
//         "sectionId": "consolas",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Camisa Atari",
//         "imageUrl": "/assets/products/unsplash_fMP-oCze3AY.png",
//         "price": "60,00",
//         "id": 13,
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Camisa SNES",
//         "imageUrl": "/assets/products/unsplash_bUgaIaZysH0.png",
//         "price": "60,00",
//         "id": 14,
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Control y consola XYZ",
//         "imageUrl": "/assets/products/unsplash_sYVY_ZKwaxU.png",
//         "price": "60,00",
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie.",
//         "id": 15
//       },
//       {
//         "name": "Control y Consola XYZ",
//         "imageUrl": "/assets/products/unsplash_jMT6BrgBuXU.png",
//         "price": "60,00",
//         "id": 16,
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Control y Consola XYZ",
//         "imageUrl": "/assets/products/unsplash_MxVkWPiJALs.png",
//         "price": "60,00",
//         "id": 17,
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Producto XYZ",
//         "imageUrl": "/assets/products/unsplash_r27umXAelDc.png",
//         "price": "60,00",
//         "id": 18,
//         "sectionId": "diversos",
//         "description": "Praesent consequat dolor non diam viverra porta. Maecenas id rhoncus mauris. Sed placerat et dui in dictum. Morbi ornare molestie congue. Duis sed lectus eget eros posuere volutpat eget sed lectus. In placerat iaculis mattis. Nullam at tortor lorem. Curabitur quis urna in ligula porttitor pellentesque et ut risus. Nam id mattis sapien, venenatis auctor tortor. Etiam ligula diam, lacinia quis consectetur sit amet, sodales tincidunt metus. Praesent eget sodales tellus. Nullam efficitur, quam eu aliquet ultricies, odio tortor tincidunt dolor, ut consectetur nibh ligula vel arcu. Maecenas egestas risus tempor mi interdum, semper mattis enim pellentesque. Phasellus elit augue, posuere quis facilisis et, ullamcorper in enim. Nam vitae neque maximus, auctor urna vitae, tempus ligula. Donec eleifend justo magna, sit amet venenatis sapien venenatis molestie."
//       },
//       {
//         "name": "Ernestito",
//         "imageUrl": "/assets/products/unsplash_r27umXAelDc.png",
//         "price": "100",
//         "sectionId": "star-wars",
//         "description": "asdawseqweasdasdasdasdasdqweqweqweq",
//         "id": "5df798ab-867a-46a7-9160-98b4b188e969"
//       },
//       {
//         "name": "Juan-O",
//         "imageUrl": "/assets/products/unsplash_MxVkWPiJALs.png",
//         "price": "230",
//         "id": "8cf5a6a3-bc39-4c13-bb70-98953a30ca41",
//         "sectionId": "consolas",
//         "description": "El autentico Juan-O articulado. Se entrega en su caja original del año 1960 con el sello de la DGI de ese año.\nNo incluye pilas."
//       },
//       {
//         "name": "Family-game",
//         "imageUrl": "C:\\fakepath\\unnamed.png",
//         "price": "50",
//         "id": "f188aea1-53fa-45c1-99e2-f73418436d47",
//         "sectionId": "consolas",
//         "description": "Consola barata, pero la quisimos tener todos"
//       },
//       {
//         "name": "quilmes",
//         "imageUrl": "C:\\fakepath\\unnamed.png",
//         "price": "80",
//         "id": "ef965e66-337e-429f-833b-d3e238b9a0f7",
//         "sectionId": "star-wars",
//         "description": "qwesererttrydfgasdasdasdadfcvxcvxcvxcvxfsdrwerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//       }
//     ]
//   }

