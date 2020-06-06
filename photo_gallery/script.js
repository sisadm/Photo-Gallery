// array for pic

const pictures = [
    {Name: '01.jpg',
    info: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."},
    
    {Name: '02.jpg', 
    info: "The lake was so calm today. We had a great view of the snow on the mountains from here."},

    {Name: '03.jpg', 
    info: "I hiked to the top of the mountain and got this picture of the canyon and trees below."},

    {Name: '04.jpg', 
    info: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."},

    {Name: '05.jpg', 
    info: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."},

    {Name: '06.jpg', 
    info: "Fall is coming, I love when the leaves on the trees start to change color."},

    {Name: '07.jpg', 
    info: "I drove past this plantation yesterday, everything is so green!"},

    {Name: '08.jpg', 
    info: "My summer vacation to the Oregon Coast. I love the sandy dunes!"},

    {Name: '09.jpg', 
    info: "We enjoyed a quiet stroll down this countryside lane. "},

    {Name: '10.jpg', 
    info: "Sunset at the coast! The sky turned a lovely shade of orange."},

    {Name: '11.jpg', 
    info: "I did a tour of a cave today and the view of the landscape below was breathtaking."},

    {Name: '12.jpg', 
    info: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."}

];

// search button and field

let $img = $('.pic-container img');

// button turn off and input turn on

$('.btn').on('click', function() {
    $('.btn').hide();
    $('#search-field').fadeIn(2000);
});


$('#search-field').on('keyup', function() {
    const $value = $(this).val().toLowerCase();
    for(i = 0; i < $img.length; i++){
        let $dataTitle = $img[i].getAttribute("data-title");
        if($value) {
            if ( $dataTitle.toLowerCase().indexOf($value) > -1) {
                $img[i].parentNode.style.display = "";
            } else {
                $img[i].parentNode.style.display = "none";
            }
        }   
    }
    // when you search every img parent is hide which not have the value
    // with this when you click the img pop up
    $('img').on('click', function() {
        $('.modal-content').show();
    }); 
});


// Modal part 

let $modalImg = $('#modal-img');
let $infoImg = $('.photo_captions');

$('img').on('click', function() {
    let $imgClass = $(this).attr('class');  
    let $imgData = $(this).attr('data-title'); 
    let $imgDataId = $(this).attr('data_id'); 
    $modalImg.attr('src', "photos/" + $imgClass); 
    $modalImg.addClass($imgClass);
    $modalImg.attr('data_id', $imgDataId);
    $infoImg.text($imgData);
    $('.modal').show();  
})

// previous and next button

$('.prev').on('click', function() {
    let $modalImgData;
    $('#modal-img').each(function() {
        $modalImgData =  parseInt($('#modal-img').attr('data_id'));
        return $modalImgData;
    })
    if ($modalImgData != 0) {
        $modalImgData -= 1;
        $modalImg.attr('data_id', $modalImgData);
        $modalImg.attr('src', "photos/" + pictures[$modalImgData].Name)
        $infoImg.text(pictures[$modalImgData].info);
    } else {    // when we arrive the last img give the data_id the last element number from the array
        $modalImg.attr('data_id', 11);
        $modalImg.attr('src', "photos/" + pictures[11].Name)
        $infoImg.text(pictures[11].info);
    }
})
  
$('.next').on('click', function() {
    let $modalImgData;
    $('#modal-img').each(function() {
        $modalImgData =  parseInt($('#modal-img').attr('data_id'));
        return $modalImgData;
    })
    if ($modalImgData != 11) {
        $modalImgData += 1;
        $modalImg.attr('data_id', $modalImgData);
        $modalImg.attr('src', "photos/" + pictures[$modalImgData].Name)
        $infoImg.text(pictures[$modalImgData].info);
    } else {    //  // when we arrive the last img give the data_id the first element number from the array
        $modalImg.attr('data_id', 0);
        $modalImg.attr('src', "photos/" + pictures[0].Name)
        $infoImg.text(pictures[0].info);
    }
})



$('.close').on('click', function() {
    $('.modal').hide();
});