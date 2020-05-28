var dynamicElements = {
	trait: {
		count: 0,
		html: '<div id="trait-$" class="row"><div class="input-field col s2"><label class="active" for="trait-name-$">Name</label><input type="text" id="trait-name-$" placeholder="Grappler"/></div><div class="input-field col s10"><label class="active" for="trait-desc-$">Description</label><input type="text" id="trait-desc-$" placeholder="Foo has advantage on attacks against creatures grappled by it."/></div></div>'
	},
	innate: {
		count: 0,
		html: '<div id="innate-$" class="row"><div class="input-field col s1"><label class="active" for="innate-uses-$">Uses per Day</label><input type="text" id="innate-uses-$" placeholder="3"/></div><div class="input-field col s11"><label class="active" for="innate-spells-$">Spell Names</label><input type="text" id="innate-spells-$" placeholder="fog cloud, rope trick"/></div></div>'
	},
	spell: {
		count: 0,
		html: '<div id="spell-$" class="row"><div class="input-field col s2"><select id="spell-select-$"><option value="0">Cantrip</option></select><label for="spell-level-$">Spell Level</label></div><div class="input-field col s1"><label class="active" for="spell-uses-$">Uses per Day</label><input type="text" id="spell-uses-$" placeholder="3"/></div><div class="input-field col s9"><label class="active" for="spells-$">Spell Names</label><input type="text" id="spells-$" placeholder="burning hands, mage armor, shield"/></div></div>'
	}
}

$(document).ready(function() {
	$('.fixed-action-btn').floatingActionButton();
	$('.tooltipped').tooltip();
	$('select').formSelect();

	// Button click listeners
	$('.add').click((data) => {
		try {
			// Get destination div to generate new fields in
			var dest = data.target.id.substring(4, data.target.id.size);

			// Replace '$' in html text to id, increase count
			$('#' + dest).append(dynamicElements[dest].html.replace(/[$]/g, dynamicElements[dest].count));
			dynamicElements[dest].count++;

			// Generate spell level names for selects
			if (dest == 'spell') {
				var select = '#spell-select-' + (dynamicElements[dest].count - 1);
				for (var i = 1; i < 10; i++) {
					$(select).append($(new Option(i + '. Level', i)));
				}
				$(select).formSelect();
			}
		} catch (e) {
			console.log(e);
		}
	});

	$('.remove').click((data) => {
		// Get destination div to generate new fields in
		var dest = data.target.id.substring(7, data.target.id.size);

		// Remove elements if necessary
		if (dynamicElements[dest].count > 0) {
			try {
				$('#' + dest)[0].lastElementChild.remove();
				dynamicElements[dest].count--;
			} catch (e) {
				console.log(e);
			}
		}
	});

	$('#progress').hide();
});

// Jump to top button
$('#top').click(() => {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});
