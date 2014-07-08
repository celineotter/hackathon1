/**
 * YELP SERVICE
 * @ngdoc factory
 * @name yelpService
 *
 * @description
 * Service for communicating with the yelp API
 */


angular.module('chinapp.services', [
// angular.module('services.yelpService', [
/*  'services.lodash',
  'services.geocodeService'*/
])
                                            //_, geocodeService
.factory('yelpService', function($http, $q) {
  // * 
  //  * @access private 
  //  * @param {array} businesses - array of business data to to normalize
  //  * @return {array} normalized data
   
  var convertYelpDataFormat = function(businesses) {
    return _.map(businesses, function(business) {
      return {
        name: business.name,
        address: {
          address1: business.address1,
          address2: business.address2,
          address3: business.address3,
          city: business.city,
          state: business.state,
          zip: business.zip,
          country: business.country,
          geometry: null
        },
        categories: _.map(business.categories, function(category) {
          return category.name;
        }),
        phone: business.phone,
        menu: null,
        url: business.url,
        photo: business.photo_url,
        rating: business.avg_rating,
        // for some reason, yelp only returns at most 1 review
        reviews: _.map(business.reviews, function(review) {
          return {
            user: review.user_name,
            rating: review.rating,
            text: review.text_excerpt
          };
        }).slice(0,5)
      };
    });
  };

  // * 
  //  * Add latitude and longitude to address, since it is not provided by the Yelp API
  //  * @access private 
  //  * @param {array} businesses - array of business data to to geocode
  //  * @return {promise} resolves geocoded businesses
   
  var addGeocodeToBusinesses = function(businesses) { debugger;
    // return map of functions that will resolve all geocodes
    return _.map(businesses, function(business) {
      var deferred = $q.defer();
      geocodeService.geocode(business.address.address1 + ' ' + business.address.city + ' ' + business.address.state + ' ' + business.address.zip).then(function(geometry) {
        business.address.geometry = {
          lat: geometry.k,
          lng: geometry.A,
        };
        deferred.resolve(business);
      // geocoder maxes out at 10 consecutive queries. Could try throttling to get more
      }).catch(function(err) {
        deferred.resolve(business);
      });
      return deferred.promise;
    });
  };

  return {
    // * 
    //  * Search yelp API for matching venues
    //  * @access public 
    //  * @param {string} location - address to search
    //  * @param {string} term - extra terms to search for
    //  * @return {promise} resolves to retrieved businesses
     
    search: function(location, term) {
      var deferred = $q.defer();
      $http.jsonp('http://api.yelp.com/business_review_search?callback=JSON_CALLBACK', {
        params: {
          location: location,
          term: term,
          ywsid: 'muS0iy08kYtaNDQj7ku6Jw',
          limit: 20
        }
      }).then(function(response) {

        var businesses = convertYelpDataFormat(response.data.businesses);

/*        var promises = addGeocodeToBusinesses(businesses);*/

/*        $q.all(promises).then(function(results) {*/

        $q.all(businesses).then(function(results) {
          deferred.resolve(results);
        });
      });
      return deferred.promise;
    }
  };
});

/*
{
  "businesses": [
    {
      "categories": [
        [
          "Local Flavor",
          "localflavor"
        ],
        [
          "Mass Media",
          "massmedia"
        ]
      ],
      "display_phone": "+1-415-908-3801",
      "id": "yelp-san-francisco",
      "is_claimed": true,
      "is_closed": false,
      "image_url": "http://s3-media2.ak.yelpcdn.com/bphoto/7DIHu8a0AHhw-BffrDIxPA/ms.jpg",
      "location": {
        "address": [
          "140 New Montgomery St"
        ],
        "city": "San Francisco",
        "country_code": "US",
        "cross_streets": "3rd St & Opera Aly",
        "display_address": [
          "140 New Montgomery St",
          "(b/t Natoma St & Minna St)",
          "SOMA",
          "San Francisco, CA 94105"
        ],
        "neighborhoods": [
          "SOMA"
        ],
        "postal_code": "94105",
        "state_code": "CA"
      },
      "mobile_url": "http://m.yelp.com/biz/4kMBvIEWPxWkWKFN__8SxQ",
      "name": "Yelp",
      "phone": "4159083801",
      "rating_img_url": "http://media1.ak.yelpcdn.com/static/201012161694360749/img/ico/stars/stars_3.png",
      "rating_img_url_large": "http://media3.ak.yelpcdn.com/static/201012161053250406/img/ico/stars/stars_large_3.png",
      "rating_img_url_small": "http://media1.ak.yelpcdn.com/static/201012162337205794/img/ico/stars/stars_small_3.png",
      "review_count": 3347,
      "snippet_image_url": "http://s3-media2.ak.yelpcdn.com/photo/LjzacUeK_71tm2zPALcj1Q/ms.jpg",
      "snippet_text": "Sometimes we ask questions without reading an email thoroughly as many of us did for the last event.  In honor of Yelp, the many questions they kindly...",
      "url": "http://www.yelp.com/biz/yelp-san-francisco",
      "menu_provider": "yelp",
      "menu_date_updated": 1317414369
    }
  ],
  "region": {
    "center": {
      "latitude": 37.786138600000001,
      "longitude": -122.40262130000001
    },
    "span": {
      "latitude_delta": 0.0,
      "longitude_delta": 0.0
    }
  },
  "total": 10651
}


{
  'error': {
    'text': 'Invalid parameter',
    'id': 'INVALID_PARAMETER',
    'field': 'location'
  }
}
*/
