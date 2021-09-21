var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'assets/img/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'assets/img/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'assets/img/beast.jpg'
	}
};
/*Global */
const myDiv = document.getElementById('myDiv');


/* Man */
const man = images.man.path;
const man_heading = images.man.heading;
const man_description = images.man.description;
const first_div = document.createElement('div');
const div_man = document.createElement('div');
const man_p = document.createTextNode(man_heading);
const man_pp = document.createTextNode(man_description);
const man_img = document.createElement('img');
const man_first_p = document.createElement('p');
const man_second_p = document.createElement('p');
first_div.setAttribute('class', 'first-div');
div_man.setAttribute('class', 'overlay_1');
man_img.setAttribute('src', man);
man_img.setAttribute('alt', 'man-image');
myDiv.appendChild(first_div);
first_div.appendChild(man_img);
first_div.appendChild(div_man);
div_man.appendChild(man_first_p);
div_man.appendChild(man_second_p);
man_first_p.appendChild(man_p);
man_second_p.appendChild(man_pp);

/* Wizard */
const wizard = images.wizard.path;
const wizard_heading = images.wizard.heading;
const wizard_description = images.wizard.description;
const second_div = document.createElement('div');
const div_wizard = document.createElement('div');
const wizard_p = document.createTextNode(wizard_heading);
const wizard_pp = document.createTextNode(wizard_description);
const wizard_img = document.createElement('img');
const wizard_first_p = document.createElement('p');
const wizard_second_p = document.createElement('p');
second_div.setAttribute('class', 'second-div');
div_wizard.setAttribute('class', 'overlay_2');
wizard_img.setAttribute('src', wizard);
wizard_img.setAttribute('alt', 'wizard-image');
myDiv.appendChild(second_div);
second_div.appendChild(wizard_img);
second_div.appendChild(div_wizard);
div_wizard.appendChild(wizard_first_p);
div_wizard.appendChild(wizard_second_p);
wizard_first_p.appendChild(wizard_p);
wizard_second_p.appendChild(wizard_pp);



/* Beast */
const beast = images.beast.path;
const beast_heading = images.beast.heading;
const beast_description = images.beast.description;
const third_div = document.createElement('div');
const div_beast = document.createElement('div');
const beast_p = document.createTextNode(beast_heading);
const beast_pp = document.createTextNode(beast_description);
const beast_img = document.createElement('img');
const beast_first_p = document.createElement('p');
const beast_second_p = document.createElement('p');
third_div.setAttribute('class', 'third-div');
div_beast.setAttribute('class', 'overlay_3');
beast_img.setAttribute('src', beast);
beast_img.setAttribute('alt', 'beast-image');
myDiv.appendChild(third_div);
third_div.appendChild(beast_img);
third_div.appendChild(div_beast);
div_beast.appendChild(beast_first_p);
div_beast.appendChild(beast_second_p);
beast_first_p.appendChild(beast_p);
beast_second_p.appendChild(beast_pp);

