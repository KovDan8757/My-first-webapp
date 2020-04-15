let photo1 = {
    photo: "images/20171007_165604.jpg",    
    title: "Boti",
    descraption: "Boti alszik",
};

let photo2 = {
    photo: "images/20171020_153453.jpg",
    title: "Boti",
    descraption: "Boti kalapban",
};

let photo3 = {
    photo: "images/20171027_154932.jpg",
    title: "Boti beöltözve",
    descraption: "Boti útra készen",
};

let photo4 = {
    photo: "images/20171105_110851.jpg",
    title: "Boti kezeslábasban",
    descraption: "Boti macinak öltözve",
};

let photo5 = {
    photo: "images/20171110_104750.jpg",
    title: "Boti játszik",
    descraption: "Boti a dobozban",
};

let photo6 = {
    photo: "images/20180405_123612(0).jpg",
    title: "Boti a játszótéren",
    descraption: "Boti hintázik",
};


let imagesData = [photo1, photo2, photo3, photo4, photo5, photo6];
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {

   $('#photo').attr('src', imagesData[currentphoto].photo);
   $("#photo-title").text(imagesData[currentPhoto].title);
   $("#photo-description").text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto);
     $('#right-arrow').click(() => {
         currentPhoto++;
         loadPhoto(currentPhoto);
     }) 

     $('#left-arrow').click(() => {
        currentPhoto--;
        loadPhoto(currentPhoto);
}) 


