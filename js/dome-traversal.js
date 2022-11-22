$('h1').css('background', 'green'); // for declare single style property

$('h1').css({ 'background': 'green', 'color': 'white' }); // for declare multiple style properties

$('h1').next().css({ 'background': 'orange', 'color': 'white', 'padding': '10px' }); // after h1 tag, will apply these styles properties for only next tag

$('h1').nextAll().css({ 'background': 'blue', 'color': 'white', 'padding': '10px' }); // after h1 tag, will apply these styles properties for All tag

$('p').prev().css({ 'background': 'sky-blue', 'color': 'white', 'padding': '10px' }); // before p (paragraph) tag, will apply these styles properties for only one tag

$('ul').prevAll().css({ 'background': 'purple', 'color': 'white', 'padding': '10px' }); // before ul (un-order list) tag, will apply these styles properties for All tag


$('ul').before('<p>add before un order list</p>') // Add paragraph tag before ul tag

$('ul').after('<p>add after un order list</p>') // Add paragraph tag after ul tag

$('ol').siblings().css({ 'background': 'gray', 'color': 'white', 'padding': '10px' });
