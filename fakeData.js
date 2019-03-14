var fs = require('fs');
var dummyjson = require('./dummy-json');
 
 
 // REGLER PROBLEME CARACTERISTIQUES ENUM VIDES
var myMockdata = {
	companies: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
	etat:['standard','rafraichissment_necessaire','travaux_importants_necessaires'],
	qualite:['inferieure', 'comparable', 'suprerieure'],
	lumino:['sombre', 'peu_clair', 'standard', 'clair', 'tres_clair'],
	calm:['tres_bruyant', 'bruyant', 'standard', 'calme', 'tres_calme'],
	proxi:['tres_elogoignees', 'eloigne', 'standard', 'proche', 'tres_proche'],
	quali:['a_renover', 'standard', 'refaite_a_neuf']
};
var template = fs.readFileSync('template.hbs', {encoding: 'utf8'});
var result = dummyjson.parse(template, {mockdata: myMockdata});
var obj = JSON.parse(result);
