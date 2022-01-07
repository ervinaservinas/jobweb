import React from 'react';

const Other = ({animal, item, name}) => {
    const photos = [
        "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL644648_p7nd0z.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg"
    ]
    let imageLink

    if(animal === "cow") imageLink = photos[0]
    if(animal === "dog") imageLink = photos[1]
    if(animal === "cat") imageLink = photos[2]
    if(animal === "fish") imageLink = photos[3]
    if(animal === "monkey") imageLink = photos[4]

    return (
        <div>
            <img src={imageLink} alt=""/>
            <h1>Gyvunas yra {animal}</h1>
        </div>
    );
};

export default Other;