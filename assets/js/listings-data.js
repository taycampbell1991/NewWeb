const soldListings = [
  {
    "lat": 45.004103,
    "lon": -122.972794,
    "title": "4353 Lemon St NE",
    "address": "Salem, OR 97305",
    "meta": "3 bd &middot; 2 ba &middot; 1,386 sqft",
    "img": "assets/images/listings/salem-lemon-st.webp",
    "approx": false
  },
  {
    "lat": 44.032428,
    "lon": -116.986317,
    "title": "518 NW 14th St",
    "address": "Ontario, OR 97914",
    "meta": "3 bd &middot; 3 ba &middot; 1,992 sqft",
    "img": "assets/images/listings/ontario-14th-st.webp",
    "approx": false
  },
  {
    "lat": 44.523956,
    "lon": -122.888798,
    "title": "2301 Robbins Way",
    "address": "Lebanon, OR 97355",
    "meta": "3 bd &middot; 2 ba &middot; 2,289 sqft",
    "img": "assets/images/listings/lebanon-robbins-way.webp",
    "approx": false
  },
  {
    "lat": 46.035098,
    "lon": -123.905481,
    "title": "88161 McCormick Gardens Rd",
    "address": "Gearhart, OR 97138",
    "meta": "3 bd &middot; 3 ba &middot; 1,850 sqft",
    "img": "assets/images/listings/gearhart-mccormick.webp",
    "approx": false
  },
  {
    "lat": 44.60727,
    "lon": -123.067172,
    "title": "3800 S Mountain View Dr SE Unit 29",
    "address": "Albany, OR 97322",
    "meta": "3 bd &middot; 2 ba &middot; 1,344 sqft",
    "img": "assets/images/listings/albany-mountain-view.webp",
    "approx": false
  },
  {
    "lat": 42.168487,
    "lon": -123.647518,
    "title": "204 W Palmer St",
    "address": "Cave Junction, OR 97523",
    "meta": "2 bd &middot; 1 ba &middot; 713 sqft",
    "img": "assets/images/listings/cave-junction-palmer.webp",
    "approx": false
  },
  {
    "lat": 44.643138,
    "lon": -123.1499,
    "title": "507 Kouns Dr NW",
    "address": "Albany, OR 97321",
    "meta": "4 bd &middot; 4 ba &middot; 4,166 sqft",
    "img": "assets/images/listings/albany-kouns-dr.webp",
    "approx": false
  },
  {
    "lat": 43.389663,
    "lon": -123.312359,
    "title": "430 Backwater Loop",
    "address": "Sutherlin, OR 97479",
    "meta": "4 bd &middot; 2 ba &middot; 1,768 sqft",
    "img": "assets/images/listings/sutherlin-backwater.webp",
    "approx": true
  },
  {
    "lat": 44.934704,
    "lon": -122.967627,
    "title": "4730 Auburn Rd NE Unit 9",
    "address": "Salem, OR 97301",
    "meta": "3 bd &middot; 2 ba &middot; 1,848 sqft",
    "img": "assets/images/listings/salem-auburn-rd.webp",
    "approx": false
  },
  {
    "lat": 44.959495,
    "lon": -122.972635,
    "title": "4522 McKenzie Ct NE",
    "address": "Salem, OR 97305",
    "meta": "3 bd &middot; 2 ba &middot; 1,772 sqft",
    "img": "assets/images/listings/salem-mckenzie-ct.webp",
    "approx": false
  },
  {
    "lat": 43.216505,
    "lon": -123.341738,
    "title": "1463 Kendall St",
    "address": "Roseburg, OR 97471",
    "meta": "2 bd &middot; 3 ba &middot; 1,437 sqft",
    "img": "assets/images/listings/roseburg-kendall-st.webp",
    "approx": true
  },
  {
    "lat": 45.890028,
    "lon": -123.961862,
    "title": "753 N Breakers Point Dr Unit 753",
    "address": "Cannon Beach, OR 97110",
    "meta": "2 bd &middot; 2 ba &middot; 1,187 sqft",
    "img": "assets/images/listings/cannon-beach-breakers-point.webp",
    "approx": true
  },
  {
    "lat": 42.950951,
    "lon": -123.364233,
    "title": "510 Boyer Rd",
    "address": "Riddle, OR 97469",
    "meta": "2 bd &middot; 1 ba &middot; 680 sqft",
    "img": "assets/images/listings/riddle-boyer-rd.webp",
    "approx": true
  },
  {
    "lat": 43.419832,
    "lon": -123.294013,
    "title": "413 SE Pear St",
    "address": "Oakland, OR 97462",
    "meta": "3 bd &middot; 2 ba &middot; 1,080 sqft",
    "img": "assets/images/listings/oakland-pear-st.webp",
    "approx": false
  },
  {
    "lat": 43.322731,
    "lon": -124.193536,
    "title": "62328 Olive Barber Rd",
    "address": "Coos Bay, OR 97420",
    "meta": "2 bd &middot; 1 ba &middot; 864 sqft",
    "img": "assets/images/listings/coosbay-olive-barber-rd.webp",
    "approx": false
  },
  {
    "lat": 42.577636,
    "lon": -121.866126,
    "title": "Water View Way #3",
    "address": "Chiloquin, OR 97624",
    "meta": "1.16 Acres",
    "img": "assets/images/listings/chiloquin-water-view-way.webp",
    "approx": true
  },
  {
    "lat": 42.577636,
    "lon": -121.866126,
    "title": "9660 Sprague River Rd",
    "address": "Chiloquin, OR 97624",
    "meta": "3 bd &middot; 2 ba &middot; 1,512 sqft",
    "img": "assets/images/listings/chiloquin-sprague-river-rd.webp",
    "approx": true
  },
  {
    "lat": 45.593835,
    "lon": -122.655153,
    "title": "921 NE Meadow Dr",
    "address": "Portland, OR 97211",
    "meta": "3 bd &middot; 2 ba &middot; 1,680 sqft",
    "img": "assets/images/listings/portland-meadow-dr.webp",
    "approx": false
  },
  {
    "lat": 42.224867,
    "lon": -121.78167,
    "title": "2157 Ogden St",
    "address": "Klamath Falls, OR 97603",
    "meta": "3 bd &middot; 2 ba &middot; 1,440 sqft",
    "img": "assets/images/listings/klamathfalls-ogden-st.webp",
    "approx": true
  },
  {
    "lat": 44.039111,
    "lon": -123.359902,
    "title": "87665 8th St",
    "address": "Veneta, OR 97487",
    "meta": "3 bd &middot; 2 ba &middot; 1,643 sqft",
    "img": "assets/images/listings/veneta-8th-st.webp",
    "approx": false
  },
  {
    "lat": 42.220209,
    "lon": -121.75613,
    "title": "1015 Alandale St",
    "address": "Klamath Falls, OR 97603",
    "meta": "3 bd &middot; 2 ba &middot; 1,392 sqft",
    "img": "assets/images/listings/klamathfalls-alandale-st.webp",
    "approx": false
  },
  {
    "lat": 43.197705,
    "lon": -123.349017,
    "title": "1732 SE Eddy St",
    "address": "Roseburg, OR 97470",
    "meta": "3 bd &middot; 1 ba &middot; 1,040 sqft",
    "img": "assets/images/listings/roseburg-eddy-st.webp",
    "approx": false
  },
  {
    "lat": 44.053016,
    "lon": -122.923139,
    "title": "5941 Thurston Rd",
    "address": "Springfield, OR 97478",
    "meta": "3 bd &middot; 2 ba &middot; 1,100 sqft",
    "img": "assets/images/listings/springfield-thurston-rd.webp",
    "approx": false
  },
  {
    "lat": 44.597152,
    "lon": -123.301281,
    "title": "3016 NW Heron Pl",
    "address": "Corvallis, OR 97330",
    "meta": "0.28 Acres",
    "img": "assets/images/listings/corvallis-heron-pl.webp",
    "approx": false
  },
  {
    "lat": 45.024275,
    "lon": -123.946502,
    "title": "N Stockton Ave",
    "address": "Otis, OR 97368",
    "meta": "1,152 sqft",
    "img": "assets/images/listings/otis-stockton-ave.png",
    "approx": true
  },
  {
    "lat": 43.021844,
    "lon": -123.279904,
    "title": "162 SE Wildwood Way",
    "address": "Myrtle Creek, OR 97457",
    "meta": "3 bd &middot; 2 ba &middot; 1,212 sqft",
    "img": "assets/images/listings/myrtlecreek-wildwood-way.webp",
    "approx": false
  },
  {
    "lat": 44.525679,
    "lon": -122.912571,
    "title": "2115 S 5th St",
    "address": "Lebanon, OR 97355",
    "meta": "3 bd &middot; 2 ba &middot; 1,383 sqft",
    "img": "assets/images/listings/lebanon-5th-st.webp",
    "approx": false
  },
  {
    "lat": 44.08677,
    "lon": -123.19652,
    "title": "5530 Burnett Ave",
    "address": "Eugene, OR 97402",
    "meta": "3 bd &middot; 2 ba &middot; 1,480 sqft",
    "img": "assets/images/listings/eugene-burnett-ave.webp",
    "approx": false
  },
  {
    "lat": 43.063594,
    "lon": -124.139281,
    "title": "57464 Cherry Creek Rd",
    "address": "Myrtle Point, OR 97458",
    "meta": "4.64 Acres",
    "img": "assets/images/listings/myrtlepoint-cherry-creek-rd.webp",
    "approx": true
  },
  {
    "lat": 45.535873,
    "lon": -122.565854,
    "title": "9423 NE Schuyler St",
    "address": "Portland, OR 97220",
    "meta": "3 bd &middot; 2 ba &middot; 1,050 sqft",
    "img": "assets/images/listings/portland-schuyler-st.webp",
    "approx": false
  },
  {
    "lat": 44.417574,
    "lon": -119.114159,
    "title": "26331 Laycock Creek Rd",
    "address": "Mount Vernon, OR 97865",
    "meta": "3 bd &middot; 2 ba &middot; 1,896 sqft",
    "img": "assets/images/listings/mountvernon-laycock-creek-rd.webp",
    "approx": true
  },
  {
    "lat": 44.933614,
    "lon": -123.307358,
    "title": "415 NE Dallas Dr",
    "address": "Dallas, OR 97338",
    "meta": "2 bd &middot; 2 ba &middot; 1,539 sqft",
    "img": "assets/images/listings/dallas-dallas-dr.webp",
    "approx": false
  },
  {
    "lat": 44.716283,
    "lon": -123.004918,
    "title": "153 S 5th St",
    "address": "Jefferson, OR 97352",
    "meta": "3 bd &middot; 1 ba &middot; 1,128 sqft",
    "img": "assets/images/listings/jefferson-5th-st.webp",
    "approx": false
  },
  {
    "lat": 45.813723,
    "lon": -118.424221,
    "title": "0 Black Pine Ln",
    "address": "Weston, OR 97886",
    "meta": "2.26 Acres",
    "img": "assets/images/listings/weston-black-pine-ln.webp",
    "approx": true
  },
  {
    "lat": 43.6358,
    "lon": -123.565461,
    "title": "345 Main St",
    "address": "Elkton, OR 97436",
    "meta": "3 bd &middot; 2 ba &middot; 1,534 sqft",
    "img": "assets/images/listings/elkton-main-st.webp",
    "approx": false
  },
  {
    "lat": 44.528388,
    "lon": -122.893564,
    "title": "870 Glenwood St",
    "address": "Lebanon, OR 97355",
    "meta": "4 bd &middot; 2 ba &middot; 1,645 sqft",
    "img": "assets/images/listings/lebanon-glenwood-st.webp",
    "approx": false
  },
  {
    "lat": 44.945743,
    "lon": -123.073365,
    "title": "1935 Margarett St NW",
    "address": "Salem, OR 97304",
    "meta": "3 bd &middot; 2 ba &middot; 1,520 sqft",
    "img": "assets/images/listings/salem-margarett-st.webp",
    "approx": false
  },
  {
    "lat": 44.888289,
    "lon": -124.02015,
    "title": "481 Lookout Dr",
    "address": "Gleneden Beach, OR 97388",
    "meta": "0.34 Acres",
    "img": "assets/images/listings/gleneden-beach-lookout-dr.webp",
    "approx": false
  },
  {
    "lat": 44.90426,
    "lon": -122.970697,
    "title": "4413 Essex St SE",
    "address": "Salem, OR 97317",
    "meta": "2 bd &middot; 1 ba &middot; 840 sqft",
    "img": "assets/images/listings/salem-essex-st.webp",
    "approx": false
  },
  {
    "lat": 44.883176,
    "lon": -123.038007,
    "title": "4995 SE Sunnyside W33 Rd #W33",
    "address": "Salem, OR 97302",
    "meta": "2 bd &middot; 2 ba &middot; 1,120 sqft",
    "img": "assets/images/listings/salem-sunnyside-rd.webp",
    "approx": false
  },
  {
    "lat": 45.456873,
    "lon": -122.780128,
    "title": "8807 SW Brightfield Cir",
    "address": "Tigard, OR 97223",
    "meta": "2 bd &middot; 1 ba &middot; 916 sqft",
    "img": "assets/images/listings/tigard-brightfield-cir.webp",
    "approx": false
  },
  {
    "lat": 45.117,
    "lon": -123.209957,
    "title": "312 Enos St",
    "address": "Amity, OR 97101",
    "meta": "3 bd &middot; 2 ba &middot; 1,432 sqft",
    "img": "assets/images/listings/amity-enos-st.webp",
    "approx": false
  },
  {
    "lat": 44.861602,
    "lon": -124.041398,
    "title": "311 Kinnikinnick Way",
    "address": "Depoe Bay, OR 97341",
    "meta": "3 bd &middot; 4 ba &middot; 1,796 sqft",
    "img": "assets/images/listings/depoebay-kinnikinnick-way.png",
    "approx": false
  },
  {
    "lat": 44.026553,
    "lon": -116.962938,
    "title": "660 NW 34th St",
    "address": "Ontario, OR 97914",
    "meta": "3 bd &middot; 2 ba &middot; 1,440 sqft",
    "img": "assets/images/listings/ontario-34th-st.webp",
    "approx": true
  },
  {
    "lat": 44.518714,
    "lon": -122.918445,
    "title": "2790 S 9th St",
    "address": "Lebanon, OR 97355",
    "meta": "4 bd &middot; 1 ba &middot; 1,352 sqft",
    "img": "assets/images/listings/lebanon-9th-st.webp",
    "approx": false
  },
  {
    "lat": 45.004002,
    "lon": -123.038592,
    "title": "1055 N Lockhaven Dr Unit 67",
    "address": "Keizer, OR 97303",
    "meta": "2 bd &middot; 2 ba &middot; 1,344 sqft",
    "img": "assets/images/listings/keizer-lockhaven-dr.webp",
    "approx": false
  },
  {
    "lat": 44.939157,
    "lon": -123.033121,
    "title": "4725 Avens Ave NE",
    "address": "Salem, OR 97301",
    "meta": "1 bd &middot; 1 ba &middot; 924 sqft",
    "img": "assets/images/listings/salem-avens-ave.webp",
    "approx": true
  },
  {
    "lat": 43.392587,
    "lon": -123.292415,
    "title": "253 S Grove Ln",
    "address": "Sutherlin, OR 97479",
    "meta": "3 bd &middot; 1 ba &middot; 1,013 sqft",
    "img": "assets/images/listings/sutherlin-grove-ln.webp",
    "approx": false
  },
  {
    "lat": 44.958702,
    "lon": -123.050329,
    "title": "1630 NW Wallace Rd Unit 30",
    "address": "Salem, OR 97304",
    "meta": "2 bd &middot; 2 ba &middot; 1,484 sqft",
    "img": "assets/images/listings/salem-wallace-rd.webp",
    "approx": false
  },
  {
    "lat": 45.114312,
    "lon": -123.2005,
    "title": "705 Goucher St",
    "address": "Amity, OR 97101",
    "meta": "3 bd &middot; 1 ba &middot; 1,122 sqft",
    "img": "assets/images/listings/amity-goucher-st.webp",
    "approx": false
  },
  {
    "lat": 44.862364,
    "lon": -123.01686,
    "title": "2000 Robins Ln SE Unit 34",
    "address": "Salem, OR 97306",
    "meta": "3 bd &middot; 2 ba &middot; 1,782 sqft",
    "img": "assets/images/listings/salem-robins-ln.webp",
    "approx": false
  },
  {
    "lat": 44.650164,
    "lon": -123.105164,
    "title": "NW Green Acres Ln",
    "address": "Albany, OR 97321",
    "meta": "5.84 Acres",
    "img": "assets/images/listings/albany-green-acres-ln.webp",
    "approx": false
  },
  {
    "lat": 45.075911,
    "lon": -123.489319,
    "title": "378 SW Oak St",
    "address": "Willamina, OR 97396",
    "meta": "4 bd &middot; 2 ba &middot; 1,824 sqft",
    "img": "assets/images/listings/willamina-oak-st.webp",
    "approx": false
  },
  {
    "lat": 45.507263,
    "lon": -122.880441,
    "title": "1730 SW 198th Ave",
    "address": "Beaverton, OR 97003",
    "meta": "3 bd &middot; 1 ba &middot; 858 sqft",
    "img": "assets/images/listings/beaverton-198th-ave.webp",
    "approx": false
  },
  {
    "lat": 44.599546,
    "lon": -123.245377,
    "title": "277 NE Conifer Blvd Unit 132",
    "address": "Corvallis, OR 97330",
    "meta": "2 bd &middot; 1 ba &middot; 924 sqft",
    "img": "assets/images/listings/corvallis-conifer-blvd.webp",
    "approx": false
  }
];
