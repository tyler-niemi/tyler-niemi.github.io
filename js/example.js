var donutShop = function (name, hours, minCustomers, maxCustomers, avgDonuts, random, sum, perHour, totalHour, totalDay,totalDay2)
{
  this.name = name;
  this.hours = hours;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgDonuts = avgDonuts;
  this.random = random;
  this.sum = sum;
  this.perHour = 0;
  this.totalHour = 0;
  this.totalDay = 0;
  this.totalDay2 = 0;

   this.randCustomers = function()
   {
     this.random = Math.round(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

     // Created the sum variable so I can return the total of customers for the day

     this.sum = this.sum + this.random;
     return this.random;
   }

   this.donutsHour = function ()
   {
     this.perHour = Math.round(this.random * this.avgDonuts);
     return this.perHour;
    };

  this.donutsHour = function ()
  {
    this.perHour = Math.round(this.random * this.avgDonuts);
    return this.perHour;
  };

  this.donutsPerDay = function()
  {
    this.totalDay = Math.round(this.perHour * this.hours)
      return this.totalDay;
  }

  this.donutsPerHour = function()
  {
    this.totalDay2 = Math.round(this.random * this.avgDonuts);
    this.totalHour = Math.round(this.totalHour + this.totalDay2);
    return this.totalDay2;
  }

  this.totalDountsPerDay = function()
  {
    return this.totalHour;
  }
}

var downtown = new donutShop ('Downtown', 10, 4, 43, 4.5);
var capitolHill = new donutShop ('Capital Hill', 12, 2, 37, 2);
var southLakeUnion = new donutShop ('South Lake Union', 10, 5, 23, 6.33);
var wedgewood = new donutShop ('Wedgewood', 14, 6, 28, 1.25);
var ballard = new donutShop ('Ballard', 10, 6, 58, 3.75);

var DonutMaster = function()
{
  this.newlist = [];

  this.addShop = function(DonutShop)
  {
    this.newlist.push(DonutShop);
  }

  this.generateReport = function()
  {
    for (var i = 0; i < this.newlist.length; i++)
      {
        $('tbody').hide().fadeIn(1500);
        $("#my_table1").append("<tr><td id=\"donut_location\">" + this.newlist[i].name + "</td>"
        +"<td id=\"donut_customers\">" + this.newlist[i].randCustomers() + "</td>"
        + "<td id=\"donut_hour\">" + this.newlist[i].donutsHour() + "</td>"
        + "<td id=\"donut_day\">" + this.newlist[i].donutsPerDay() + "</td></tr>");
      }
  }

  $('#downtown').click(function()
  {
    $('#my_table').show().slideUp(1500);
    $('td').empty();
      for (var i = 0; i < downtown.hours; i++)
      {
        $('tbody').hide().fadeIn(1500);
        $('th:contains("Location")').text('Hours');
        $("#donut_location").append("<tr><td>" + i + "</td></tr>");
        $("#donut_customers").append("<tr><td>" + downtown.randCustomers() + "</td></tr>");
        $("#donut_hour").append("<tr><td>" + downtown.donutsPerHour() + "</td></tr>");

      }
      $("#donut_day").append("<tr><td>" + downtown.totalHour + "</td></tr>");

  });

  $('#capitolHill').click(function()
  {
    $('td').empty();
    $('#sales_report').hide();
    for (var i = 0; i < capitolHill.hours; i++)
    {
      $('tbody').hide().fadeIn(1500);
      $('th:contains("Location")').text('Hours');
      $("#donut_location").append("<tr><td>" + i + "</td></tr>");
      $("#donut_customers").append("<tr><td>" + capitolHill.randCustomers() + "</td></tr>");
      $("#donut_hour").append("<tr><td>" + capitolHill.donutsPerHour() + "</td></tr>");

    }
    $("#donut_day").append("<tr><td>" + capitolHill.totalHour + "</td></tr>");
});

$('#southLake').click(function()
{
  $('td').empty();
  $('#sales_report').hide();
  for (var i = 0; i < southLakeUnion.hours; i++)
  {
    $('tbody').hide().fadeIn(1500);
    $('th:contains("Location")').text('Hours');
    $("#donut_location").append("<tr><td>" + i + "</td></tr>");
    $("#donut_customers").append("<tr><td>" + southLakeUnion.randCustomers() + "</td></tr>");
    $("#donut_hour").append("<tr><td>" + southLakeUnion.donutsPerHour() + "</td></tr>");

  }
  $("#donut_day").append("<tr><td>" + southLakeUnion.totalHour + "</td></tr>");

});

$('#wedgewood').click(function()
{
  $('td').empty();
  for (var i = 0; i < wedgewood.hours; i++)
  {
    $('tbody').hide().fadeIn(2500);
    $('th:contains("Location")').text('Hours');
    $("#donut_location").append("<tr><td>" + i + "</td></tr>");
    $("#donut_customers").append("<tr><td>" + wedgewood.randCustomers() + "</td></tr>");
    $("#donut_hour").append("<tr><td>" + wedgewood.donutsPerHour() + "</td></tr>");
  }
  $("#donut_day").append("<tr><td>" + wedgewood.totalHour + "</td></tr>");

});

$('#ballard').click(function()
{
  $('td').empty();
  for (var i = 0; i < ballard.hours; i++)
  {
    $('tbody').hide().fadeIn(2500);
    $("#donut_location").append("<tr><td>" + i + "</td></tr>");
    $('th:contains("Location")').text('Hours');
    $("#donut_customers").append("<tr><td>" + ballard.randCustomers() + "</td></tr>");
    $("#donut_hour").append("<tr><td>" + ballard.donutsPerHour() + "</td></tr>");

  }
  $("#donut_day").append("<tr><td>" + ballard.totalHour + "</td></tr>");

});
}

var DonutMaster = new DonutMaster();
DonutMaster.addShop(downtown);
DonutMaster.addShop(capitolHill);
DonutMaster.addShop(southLakeUnion);
DonutMaster.addShop(wedgewood);
DonutMaster.addShop(ballard);

DonutMaster.generateReport();
