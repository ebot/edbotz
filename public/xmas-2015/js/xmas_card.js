$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".movie").fitVids();
  $("h1").fitText(2.2);

  var photos = [
    { title: "Hiking in the Poconos", cap: "", url: "https://c2.staticflickr.com/6/5626/23907219581_939d10f384.jpg" },
    { title: "The Outer Banks", cap: "", url: "https://c2.staticflickr.com/6/5681/23362945803_4939ae8ac3.jpg" },
    { title: "Kitty Hawk", cap: "", url: "https://c2.staticflickr.com/2/1595/23361530264_99b612cdca.jpg" },
    { title: "Wright Brothers", cap: "", url: "https://c2.staticflickr.com/2/1586/23907217591_305dc289fa.jpg" },
    { title: "Reading Phillies", cap: "", url: "https://c2.staticflickr.com/2/1643/23963665906_5038f41ac2.jpg" },
    { title: "Beach Babes", cap: "", url: "https://c2.staticflickr.com/6/5626/23963665176_5005afa0bf.jpg" },
    { title: "Tired Puppy", cap: "", url: "https://c2.staticflickr.com/6/5778/23361522174_70898faa71.jpg" },
    { title: "Adorable Ayven", cap: "", url: "https://c2.staticflickr.com/2/1592/23362935373_faaf1ac3ae.jpg" },
    { title: "Build a Bear", cap: "", url: "https://c2.staticflickr.com/2/1617/23963663926_b583bef222.jpg" },
    { title: "Happy Bday Lins", cap: "", url: "https://c2.staticflickr.com/2/1617/23621895099_c1b18f22cf.jpg" },
    { title: "Valley Forge w/ Utz", cap: "", url: "https://c2.staticflickr.com/2/1447/23621894809_bd06811c6b.jpg" },
    { title: "Blowing in the Wind", cap: "", url: "https://c2.staticflickr.com/2/1670/23621904119_531aa4eb55.jpg" },
    { title: "Growler Granny", cap: "", url: "https://c2.staticflickr.com/2/1674/23963671386_8c0c414e14.jpg" },
    { title: "Easter", cap: "", url: "https://c2.staticflickr.com/6/5764/23881516182_99772d9265.jpg" },
    { title: "Trampoline Fun", cap: "", url: "https://c2.staticflickr.com/2/1696/23694065160_b09b7dc289.jpg" },
    { title: "Chilly Beach", cap: "", url: "https://c2.staticflickr.com/6/5705/23362938733_0e1c5c4228.jpg" },
    { title: "Bike Tunnel", cap: "", url: "https://c2.staticflickr.com/2/1711/23361524204_b225a943c6.jpg" },
    { title: "Biking with Dad", cap: "", url: "https://c2.staticflickr.com/2/1612/23963666076_f7d23885a3.jpg" },
    { title: "Fun on the Fourth", cap: "", url: "https://c2.staticflickr.com/2/1511/23694058840_a725222ee0.jpg" },
    { title: "Utley & Kay", cap: "", url: "https://c2.staticflickr.com/2/1612/23963660386_8a6c16a1b5.jpg" },
    { title: "New Kayak", cap: "", url: "https://c2.staticflickr.com/2/1639/23907204941_f7d7fe4fc3.jpg" },
    { title: "Kayaking on the Schuyllkill", cap: "", url: "https://c2.staticflickr.com/6/5770/23362931193_16ac6245cc.jpg" },
    { title: "Morey's Pier", cap: "", url: "https://c2.staticflickr.com/6/5667/23621891409_c50c72bb49.jpg" },
    { title: "Road Trip with Nan", cap: "", url: "https://c2.staticflickr.com/6/5815/23361517004_36ce4dd7b5.jpg" },
    { title: "Fun @ Diana's Baths", cap: "", url: "https://c2.staticflickr.com/6/5744/23881504232_cd73ab4706.jpg" },
    { title: "Mt. Washington Train", cap: "", url: "https://c2.staticflickr.com/6/5750/23621889219_1c1bca7725.jpg" },
    { title: "Main Moose", cap: "", url: "https://c2.staticflickr.com/6/5744/23694054620_bd5fd14b15.jpg" },
    { title: "Summit!", cap: "", url: "https://c2.staticflickr.com/6/5677/23361514494_22bce7e93f.jpg" },
    { title: "Kayking Jordan Pond", cap: "", url: "https://c2.staticflickr.com/2/1497/23621887299_2a4ab67bec.jpg" },
    { title: "Hiking With Dad", cap: "", url: "https://c2.staticflickr.com/2/1492/23989761825_5a0fb9fb23.jpg" },
    { title: "First Lobster", cap: "", url: "https://c2.staticflickr.com/6/5741/23694051470_af4de150e0.jpg" },
    { title: "Acadia Views", cap: "", url: "https://c2.staticflickr.com/6/5701/23881498812_72cb0d328b.jpg" },
    { title: "First Time Paddleboarders", cap: "", url: "https://c2.staticflickr.com/2/1465/23963651556_e19d694a32.jpg" },
    { title: "Kayaking Marsh Creek", cap: "", url: "https://c2.staticflickr.com/2/1468/23621883019_30299bbf7a.jpg" },
    { title: "The Pope in Philly", cap: "", url: "https://c2.staticflickr.com/6/5775/23361508784_90f3868522.jpg" },
    { title: "Fall in Shenandoah", cap: "", url: "https://c2.staticflickr.com/6/5634/23694048230_c3f9fe363c.jpg" },
    { title: "Big Meadows Lodge", cap: "", url: "https://c2.staticflickr.com/2/1504/23694047450_e03ce0c957.jpg" },
    { title: "On the AT", cap: "", url: "https://c2.staticflickr.com/2/1622/23621880669_5bd7d82d1e.jpg" },
    { title: "Award Winning Gymnast", cap: "", url: "https://c2.staticflickr.com/6/5708/23963647126_d44eb10dd1.jpg" },
    { title: "Sleepy Dog", cap: "", url: "https://c2.staticflickr.com/6/5744/23989754685_6a57a79f57.jpg" },
    { title: "A Christmas Carol", cap: "", url: "https://c2.staticflickr.com/2/1635/23361504804_b43f23cda7.jpg" },
    { title: "Upper Merion Choir", cap: "", url: "https://c2.staticflickr.com/6/5730/23963645746_bf97bccc90.jpg" },
    { title: "The Force Awakens!", cap: "", url: "https://c2.staticflickr.com/6/5649/23362917933_c769d60737.jpg" }
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
