var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var day1box = document.querySelector('#day1');
var day2box = document.querySelector('#day2');
var day3box = document.querySelector('#day3');
var day4box = document.querySelector('#day4');
var day5box = document.querySelector('#day5');
var button= document.querySelector('.submit');

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


button.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=imperial&appid=bfc4f4fa1ab98a2e4474fd51423b5479')
.then(response => response.json())
.then(data => {
  var cityName = data['city']['name'];
  var countryName = data['city']['country']
    
  var day1w = data['list'][0]['main']['temp']
  var day2w = data['list'][8]['main']['temp']
  var day3w = data['list'][16]['main']['temp']
  var day4w = data['list'][24]['main']['temp']
  var day5w = data['list'][32]['main']['temp']
  
  var firstday = d.getDay()
  
  main.innerHTML = cityName + ", " + countryName;
  day1box.innerHTML = days[firstday] + ": " + day1w + '&deg;F'
  day2box.innerHTML = days[firstday + 1] + ": " + day2w + '&deg;F'
  day3box.innerHTML = days[firstday + 2] + ": " + day3w + '&deg;F'
  day4box.innerHTML = days[firstday + 3] + ": " + day4w + '&deg;F'
  day5box.innerHTML = days[firstday + 4] + ": " + day5w + '&deg;F'
  input.value ="";

})

.catch(err => alert("Wrong city name!.....Please correct it"));
})



