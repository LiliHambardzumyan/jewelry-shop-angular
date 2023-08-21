import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  slider = [
    {
      id: '1',
      name: 'Gold big hoops',
      imageUrl: 'assets/images/01.png',
      price: '68'
    },
    {
      id: 2,
      name: 'Lira Earrings',
      imageUrl: 'assets/images/05.png',
      price: '25'
    },
    {
      id: 3,
      name: 'Hal Earrings',
      imageUrl: 'assets/images/03.png',
      price: '25'
    },
    {
      id: 4,
      name: 'Kaede Hair Pin Set Of 3 ',
      imageUrl: 'assets/images/01.png',
      price: '30'
    },
    {
      id: 5,
      name: 'Plaine Necklace',
      imageUrl: 'assets/images/05.png',
      price: '19'
    },
  ];
  products = [
    {
      id: 1,
      name: "Lira Earrings",
      price: 20,
      imageUrl: "assets/images/prod1.png",
      discount: 20,
      liked: false,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    },
    {
      id: 2,
      name: "Hal Earrings",
      price: 25,
      imageUrl: "assets/images/prod2.png",
      discount: 20,
      liked: false,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    },
    {
      id: 3,
      name: "Kaede Hair Pin Set Of 3",
      price: 30,
      liked: false,
      imageUrl: "assets/images/prod3.png",
      discount: 20,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    },
    {
      id: 4,
      name: "Hair Pin Set of 3",
      price: 30,
      liked: false,
      imageUrl: "assets/images/prod4.png",
      discount: 20,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    },
    {
      id: 5,
      name: "Plaine Necklace",
      price: 19,
      imageUrl: "assets/images/prod5.png",
      discount: 20,
      liked: false,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    },
    {
      id: 6,
      name: "Yuki Hair Pin Set of 3",
      price: 29,
      liked: false,
      imageUrl: "assets/images/prod6.png",
      discount: 20,
      additionalText: 'Sold Out',
      Categories: "Fashion, Style",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
      AdditionalInformation: {
        weight: '0.3 kg ',
        dimensions: "15 x 10 x 1 cm",
        colours: " Black, Browns, White ",
        material: "Metal"
      },
      Reviews: [{
        name: "Scarlet withch",
        stars: 3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        date: "6 May, 2020"
      }],
      SimilarItems: []
    }
  ];

  constructor() { }
}
