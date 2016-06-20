var manyMaterials = items.filter(function(item) {
  return item.materials.length > 7;
});

// var features = manyMaterials.map(function (item) {
//   return [item.title, item.materials.length, item.materials];
// });

// var answer5 = document.querySelector("#answer5");
// features.forEach(function (result) {
//   newHTML += "<p>" + result[0] + " used " + result[1] + " materials" + "</p>";
//   newHTML += "<ul class=\"materials\">";
//   result[2].forEach(function (material) {
//     newHTML += "<li class=\"material\">" + material + "</li>";
//   });
//   newHTML += "</ul>";
// });

var answer5 = document.querySelector("#answer5");
manyMaterials.forEach(function (item) {
  newHTML += "<p>" + item.title + " used " + item.materials.length + " materials" + "</p>";
  newHTML += "<ul class=\"materials\">";
  item.materials.forEach(function (material) {
    newHTML += "<li class=\"material\">" + material + "</li>";
  });
  newHTML += "</ul>";
});
