$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".movie").fitVids();
  $("h1").fitText(2.2);

  var photos = [
    { title: "Sleeping With Utz", cap: "Dad napping with Utley", url: "https://farm8.staticflickr.com/7568/15884400868_8dcc74a987.jpg" },
    { title: "Faceplant!", cap: "You want some of this?", url: "https://farm8.staticflickr.com/7568/15884557960_b3c83b6d01.jpg" },
    { title: "Sisters", cap: "Waiting for pizza at Earth + Bread", url: "https://farm8.staticflickr.com/7551/15452171223_1acf5e7186.jpg" },
    { title: "Baby Utley", cap: "Puppy Chuttty", url: "https://farm8.staticflickr.com/7488/15884559660_bdc9dd0b32.jpg" },
    { title: "Playing in the Snow", cap: "Snow day, no school!", url: "https://farm8.staticflickr.com/7558/16071135022_2e64b17095.jpg" },
    { title: "Pirate Girls", cap: "Pirates of Disney World", url: "https://farm9.staticflickr.com/8605/16069912791_1f4cf84b02.jpg" },
    { title: "Disney World", cap: "Cinderalla's cottage", url: "https://farm8.staticflickr.com/7532/15449536734_17fe9cdbe5.jpg" },
    { title: "Jungle Cruise With Nan", cap: "Cruising down the great rivers of the world in Disney", url: "https://farm8.staticflickr.com/7493/15452175083_8c461446f8.jpg" },
    { title: "Hickory Run", cap: "Hiking with Dad in Hickory Run State Park", url: "https://farm9.staticflickr.com/8662/15884563260_416d0ff47a.jpg" },
    { title: "Hiking With Utz", cap: "Utley in Hickory Run", url: "https://farm8.staticflickr.com/7502/15884407768_bbdb52e02a.jpg" },
    { title: "Book Report", cap: "We love Sammy the Seal", url: "https://farm8.staticflickr.com/7544/16046039416_95264432ee.jpg" },
    { title: "Mom and Utz", cap: "Mom and Utley in Valley Forge", url: "https://farm8.staticflickr.com/7463/16046040506_c19f9376a1.jpg" },
    { title: "Jazzy Sisters", cap: "Kay's Concert at the Middle School", url: "https://farm8.staticflickr.com/7533/15885753009_f77a3ded66.jpg" },
    { title: "Holy Communion", cap: "Lou's First Holy Communion", url: "https://farm8.staticflickr.com/7466/15886078717_63c494fcdc.jpg" },
    { title: "Nana & Pop Pop", cap: "Nana & Pop Pop at Lou's Holy Communion", url: "https://farm8.staticflickr.com/7462/15452181143_2a00af6285.jpg" },
    { title: "Utley's Bed", cap: "Utley waking up in the morning", url: "https://farm8.staticflickr.com/7531/15452182163_06d21fb390.jpg" },
    { title: "Zoo Animals", cap: "Hanging at Elmwood Park Zoo", url: "https://farm9.staticflickr.com/8641/15884413958_80331bb381.jpg" },
    { title: "Backseat Companions", cap: "Travelling to the Beach", url: "https://farm9.staticflickr.com/8571/16069923071_3b192cf32b.jpg" },
    { title: "Pop Pop", cap: "What a sexy man", url: "https://farm9.staticflickr.com/8618/15884415388_5463b5fdd3.jpg" },
    { title: "Aunt Becky", cap: "Hanging out with Aunt Becky", url: "https://farm8.staticflickr.com/7531/16071147402_91fa718131.jpg" },
    { title: "Seashoreline Olympians", cap: "2014 Gold Medal Winners", url: "https://farm9.staticflickr.com/8667/15888684039_4a093ccc37.jpg" },
    { title: "Burried Treasure", cap: "Hands off me treasure, Arrrgh", url: "https://farm9.staticflickr.com/8653/16072843751_d20aba59c8.jpg" },
    { title: "Loungin on the Beach", cap: "Utley taking a rest from swimming", url: "https://farm9.staticflickr.com/8616/15887337718_1303e9fce4.jpg" },
    { title: "Hiking the AT", cap: "Shelter along the Appalachian Trail", url: "https://farm8.staticflickr.com/7536/16046048776_3c7f30d038.jpg" },
    { title: "AT Views", cap: "Delaware Water Gap overlook", url: "https://farm8.staticflickr.com/7546/16069925971_8f8ed7a5eb.jpg" },
    { title: "Nanny & Dolly", cap: "Best Friends Forever", url: "https://farm8.staticflickr.com/7467/15886086197_ca69c1cbbb.jpg" },
    { title: "Ayven", cap: "Ayven in Tennessee", url: "https://farm8.staticflickr.com/7562/16071150102_8510bb056b.jpg" },
    { title: "Hiking the Smokies", cap: "In the smokies with our cousins and survivor Nan", url: "https://farm8.staticflickr.com/7490/15452189213_622eea6994.jpg" },
    { title: "10!", cap: "Kay turns ten in Tennesse", url: "https://farm8.staticflickr.com/7474/16046052706_4c870ef33a.jpg" },
    { title: "New Phone!", cap: "Best Birthday present ever", url: "https://farm9.staticflickr.com/8621/15449552364_d446fd2b2f.jpg" },
    { title: "Ayven at Breakfast", cap: "Mmmmm, Pancakes", url: "https://farm8.staticflickr.com/7517/16069930671_257718a9f7.jpg" },
    { title: "Clingmans Dome", cap: "View from the Smokies highest point", url: "https://farm8.staticflickr.com/7464/15888685899_3bd98379d6.jpg" },
    { title: "Concert at the Mann", cap: "Waiting for Josh with Ansley", url: "https://farm9.staticflickr.com/8605/16069931521_5f96364021.jpg" },
    { title: "Clowns", cap: "Having fun in Sea Isle", url: "https://farm8.staticflickr.com/7562/16046055666_ef44f6429a.jpg" },
    { title: "Mom & Dad Selfie", cap: "Mom and Dad on the trail in Smokey Mountain National Park", url: "https://farm8.staticflickr.com/7523/15885767869_cf3fbe3eee.jpg" },
    { title: "Monsters", cap: "Our 2014 Halloween costumes", url: "https://farm9.staticflickr.com/8597/15887339138_36ae88b3c1.jpg" }
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
