$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".movie").fitVids();
  $("h1").fitText(2.2);

  var photos = [
    { title: "Pocono Sleigh Ride", cap: "Our year started off with a near death sleigh ride.", url: "https://farm3.staticflickr.com/2840/11483647174_be4bc917bf_n.jpg" },
    { title: "Lindsey's Concert", cap: "Lindsey's big violin concert.", url: "https://farm3.staticflickr.com/2892/11507451416_2d6e688e58_n.jpg" },
    { title: "Outside the White House", cap: "We had a blast in the nation's capital.", url: "https://farm4.staticflickr.com/3756/11483731746_2c2755724f_n.jpg" },
    { title: "Goat Races", cap: "There's no other experience like Sly Fox's Goat Races.", url: "https://farm4.staticflickr.com/3752/11483650084_4e1b4e0ed0_n.jpg" },
    { title: "Horshoe Trail", cap: "We spent lots of time hiking the trails of Valley Forge.", url: "https://farm8.staticflickr.com/7316/9109369203_6ab21c15b1_n.jpg" },
    { title: "Kayla's Concert", cap: "Kayla's violin concert.", url: "https://farm4.staticflickr.com/3741/11507393745_92babec0d8_n.jpg" },
    { title: "Philadelphia Freedoms", cap: "We always have a great time at the Freedoms matches.", url: "https://farm3.staticflickr.com/2877/11483651044_e9145dbfa5_n.jpg" },
    { title: "Gettysburg", cap: "We learned all about the Civil War this year at Gettysburg.", url: "https://farm3.staticflickr.com/2841/11483631775_6a2f8b31ac_n.jpg" },
    { title: "Dingmans Falls", cap: "Visiting Aunt Becky in the Poconos is always fun.", url: "https://farm3.staticflickr.com/2852/11483736326_7e1e5d2454_n.jpg" },
    { title: "Teen Beach Movie", cap: "Catching some waves like Mac at the shore.", url: "https://farm6.staticflickr.com/5500/9412321732_43568a60c8_n.jpg" },
    { title: "US Open", cap: "Kids Day at Arthur Ashe Stadium was awesome.", url: "https://farm4.staticflickr.com/3816/11483654184_e944d4372e_n.jpg" },
    { title: "Buried Alive", cap: "Summers with our cousins at the beach are always big fun.", url: "https://farm8.staticflickr.com/7459/9332488765_644d3e5e22_n.jpg" },
    { title: "Buddy Walk", cap: "We always have a great time at the Buddy Walk.", url: "https://farm6.staticflickr.com/5537/11483655434_f1d7a801ab_n.jpg" },
    { title: "Buddy Walk", cap: "Ayven was pooped after our long walk.", url: "https://farm3.staticflickr.com/2826/11483740356_65190477cb_n.jpg" },
    { title: "Eddie Jr.", cap: "We learned a lot this summer building our own coffee can robot.", url: "https://farm6.staticflickr.com/5487/9521561472_1bfd241017_n.jpg" },
    { title: "Elk Neck Camping", cap: "Our camp site had the best view at Elk Neck Campground.", url: "https://farm3.staticflickr.com/2882/9761477563_ca026bf6d4_n.jpg" },
    { title: "Bringing Utley Home", cap: "The newest member of our family.", url: "https://farm3.staticflickr.com/2841/11483741526_c134b92562_n.jpg" },
    { title: "Skyline Drive", cap: "The main road that cuts through Shenandoah.", url: "https://farm4.staticflickr.com/3817/10528642356_7ffa62164c_n.jpg" },
    { title: "Hiking Stony Man", cap: "We learned a lot about the Appalachian Mountains in Shenandoah.", url: "https://farm4.staticflickr.com/3711/11483662154_f768ddb46b_n.jpg" },
    { title: "Stony Man Overlook", cap: "The view from the peak of Stony Man in Shenandoah.", url: "https://farm4.staticflickr.com/3777/11483663634_34e5a0543a_n.jpg" },
    { title: "Shenandoah Black Bear", cap: "The highlight of our trip was watching a black bear climbing a tree.", url: "https://farm4.staticflickr.com/3697/10554274503_d95e0b9f8f_n.jpg" },
    { title: "Donnna & Ed", cap: "Donna and Ed on Skyline Drive.", url: "https://farm6.staticflickr.com/5498/11507452806_e62ace6197_n.jpg" },
    { title: "Lewis Falls", cap: "We hiked all the way down to the bottom of Lewis Falls in Shenandoah.", url: "https://farm6.staticflickr.com/5480/11483747656_63467b3ba1_n.jpg" },
    { title: "Wicked Lou", cap: "Lou all dressed up for Halloween.", url: "https://farm3.staticflickr.com/2807/11483639625_d89aed15f2_n.jpg" },
    { title: "Happy Hauntings", cap: "We got lots of candy with our cousins at Dutch Wonderland.", url: "https://farm8.staticflickr.com/7401/11483661214_692330a87f_n.jpg" },
    { title: "Jack O Lantern Family", cap: "We made a whole family of Jack O Lanterns for Halloween this year.", url: "https://farm3.staticflickr.com/2819/10600173686_4ce1fcd85b_n.jpg" },
    { title: "Utz Visits the Beach", cap: "Utley loved his first visit to the beach.", url: "https://farm8.staticflickr.com/7333/10970456174_3411c2cf43_n.jpg" }
  ];

  var photo_template = Handlebars.templates['photo.tmpl'];
  var photo_count = 0;
  var row_count = 1;
  $('#photo_album').append('<div id="row_1" class="row"></div>');
  _.each(photos, function(photo) {
      photo_count ++;
      var photo_html = photo_template(photo);
      $('#row_' + row_count).append(photo_html);
      if (photo_count % 3 == 0) {
        row_count ++;
        $('#photo_album').append('<div id="row_' + row_count + '" class="row"></div>');
      }
  });
});
