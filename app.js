/**
 * Created by phillipwright on 11/9/14.
 */
$(document).ready(function(){
var context = [
    {CountryCode: "BY", CountryName: "Belarus",
    Population: 9685000, English: false}


    ];

var country = {
    items: [
        {CountryCode: "BY", CountryName: "Belarus", Population: 9685000, English: false},
        {CountryCode: "BZ", CountryName: "Belize", Population: 314522, English: false},
        {CountryCode: "CA", CountryName: "Canada", Population: 33679000, English: true},
        {CountryCode: "CC", CountryName: "Cocos [Keeling] Islands", Population: 628, English: false},
        {CountryCode: "CD", CountryName: "Democratic Republic of the Congo", Population: 70916439, English: false},
        {CountryCode: "CF", CountryName: "Central African Republic", Population: 4844, English: false},
        {CountryCode: "CG", CountryName: "Republic of the Congo", Population: 3039126, English: false},
        {CountryCode: "CH", CountryName: "Switzerland", Population: 7581000, English: false}
    ]
};
    var source   = $('#ajaxTemplate').html();
    var template = Handlebars.compile(source);
    var html    = template(country);
    $('#cars').html(html);


});