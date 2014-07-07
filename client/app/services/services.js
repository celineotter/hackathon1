/**
 * YELP SERVICE
 * @ngdoc factory
 * @name yelpService
 *
 * @description
 * Service for communicating with the yelp API
 */



angular.module('services.yelpService', [
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
     
    search: function(location, term) { debugger;
      var deferred = $q.defer();
      $http.jsonp('http://api.yelp.com/business_review_search?callback=JSON_CALLBACK', {
        params: {
          location: location,
          term: term,
          ywsid: 'muS0iy08kYtaNDQj7ku6Jw',
          limit: 20
        }
      }).then(function(response) {
        debugger;
        var businesses = convertYelpDataFormat(response.data.businesses);
        debugger;
/*        var promises = addGeocodeToBusinesses(businesses);*/
        debugger;
/*        $q.all(promises).then(function(results) {*/
        $q.all(businesses).then(function(results) {
          deferred.resolve(results);
        });
      });
      return deferred.promise;
    }
  };
});
