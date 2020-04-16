
let photo1 = {
    photo: "images/20171007_165604.jpg",    
    title: "Boti",
    description: "Boti alszik",
};

let photo2 = {
    photo: "images/20171020_153453.jpg",
    title: "Boti",
    description: "Boti kalapban",
};

let photo3 = {
    photo: "images/20171027_154932.jpg",
    title: "Boti beöltözve",
    description: "Boti útra készen",
};

let photo4 = {
    photo: "images/20171105_110851.jpg",
    title: "Boti kezeslábasban",
    description: "Boti macinak öltözve",
};

let photo5 = {
    photo: "images/20171110_104750.jpg",
    title: "Boti játszik",
    description: "Boti a dobozban",
};

let photo6 = {
    photo: "images/20180405_123612(0).jpg",
    title: "Boti a játszótéren",
    description: "Boti hintázik",
};


let imagesData = [photo1, photo2, photo3, photo4, photo5, photo6];
let currentPhoto = 0;

let loadPhoto = (photoNumber) => {

   $('#photo').attr('src', imagesData[currentPhoto].photo);
   $("#photo-title").text(imagesData[currentPhoto].title);
   $(".photo-description").text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto);
$("#right-arrow").click(() => {
    if(currentPhoto < imagesData.length){
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
});
$("#left-arrow").click(() => {
    if(currentPhoto >= 0){
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
});

let counter = 0 ;
imagesData.forEach(photo => {
    $(".thumbnail").append(
        '<div class="container" id="kontener-' + counter + '"><img src="' + photo.photo + '" data-number="' + counter +  '" id="containerPhoto"><blockquote class="speech-bubble">' + photo.title + '</blockquote></div>'
        );
        counter++;
})
$("#kontener-0").css("transform","scale(1.2)");
$(".container").on( "click",function (event) {
    currentPhoto = $(event.target).attr("data-number");
    let id = "#kontener-" + currentPhoto;
    let id3 = "#quote-" + currentPhoto;
    
    console.log(id);
    let class2 = ".speech-bubble-" + currentPhoto;
    loadPhoto(currentPhoto);
    $(id).css("transform", "scale(1.2)");
    $(id).css("border", "3px solid red");
    $(class2).css("display","block");
    for(let counter2 = 0; counter2 < imagesData.length; counter2++){
        if(counter2 != currentPhoto){
            let id2 = "#kontener-" + counter2;
            $(id2).css("transform", "scale(1.0)");
            $(id2).css("border", "none");
        }
    }
});
