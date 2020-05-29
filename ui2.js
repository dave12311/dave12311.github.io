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
		html: '<div id="spell-$" class="row"><div class="input-field col s2"><select id="spell-select-$"><option value="0">Cantrip</option></select><label for="spell-level-$">Spell Level</label></div><div class="input-field col s1"><label class="active" for="spell-uses-$">Uses per Day</label><input disabled type="text" id="spell-uses-$" placeholder="3"/></div><div class="input-field col s9"><label class="active" for="spells-$">Spell Names</label><input type="text" id="spells-$" placeholder="burning hands, mage armor, shield"/></div></div>'
	},
	action: {
		count: 0,
		html: '<div id="action-$" class="row"><div class="input-field col s2"><label class="active" for="action-name-$">Name</label><input type="text" id="action-name-$" placeholder="Multiattack"/></div><div class="input-field col s10"><label class="active" for="action-desc-$">Description</label><input type="text" id="action-desc-$" placeholder="Foo makes two melee attacks"/></div></div>'
	},
	legendary: {
		count: 0,
		html: '<div id="legendary-$" class="row"><div class="input-field col s2"><label class="active" for="legendary-name-$">Name</label><input type="text" id="legendary-name-$" placeholder="Create Contract"/></div><div class="input-field col s10"><label class="active" for="legendary-desc-$">Description</label><input type="text" id="legendary-desc-$" placeholder="Foo presents a contract and waves it in the face of a creature within 10 feet."/></div></div>'
	},
	attack: {
		count: 0,
		html: '<div id="attack-$" class="col card"><div class="card-content"><div class="row"><div class="input-field col s3"><label class="active" for="attack-name-$">Name</label><input type="text" id="attack-name-$" placeholder="Flame Tongue Longsword"/></div><div class="input-field col s2"><select id="attack-distance-$"><option value="0">Melee</option><option value="1">Ranged</option><option value="2">Both</option></select><label for="attack-distance-$">Distance</label></div><div class="input-field col s2"><select id="attack-type-$"><option value="0">Weapon</option><option value="1">Spell</option></select><label for="attack-type-$">Type</label></div><div class="input-field col s1"><label class="active" for="attack-modifier-$">Modifier</label><input type="text" id="attack-modifier-$" placeholder="+3"/></div><div class="input-field col s1"><label class="active" for="attack-reach-$">Reach</label><input type="text" id="attack-reach-$" placeholder="5"/></div><div class="input-field col s1"><label class="active" for="attack-range-$">Range</label><input disabled type="text" id="attack-range-$" placeholder="60/120"/></div><div class="input-field col s2"><label class="active" for="attack-target-$">Target</label><input type="text" id="attack-target-$" placeholder="one target"/></div></div><div class="row"><div class="input-field col s2 push-s1"><label class="active" for="attack-damage-$">Damage</label><input type="text" id="attack-damage-$" placeholder="1d8+4"/></div><div class="input-field col s2 push-s1"><select id="attack-damage-type-$"><option value="0">Acid</option><option value="1">Bludgeoning</option><option value="2">Cold</option><option value="3">Fire</option><option value="4">Force</option><option value="5">Lightning</option><option value="6">Necrotic</option><option value="7">Piercing</option><option value="8">Poison</option><option value="9">Psychic</option><option value="10">Radiant</option><option value="11">Slashing</option><option value="12">Thunder</option></select><label for="attack-damage-type-$">Damage Type</label></div><div class="input-field col s2 push-s1"><label class="active" for="attack-plus-damage-$">Plus Damage</label><input type="text" id="attack-plus-damage-$" placeholder="1d8+4"/></div><div class="input-field col s2 push-s1"><select id="attack-plus-damage-type-$"><option value="0">Acid</option><option value="1">Bludgeoning</option><option value="2">Cold</option><option value="3">Fire</option><option value="4">Force</option><option value="5">Lightning</option><option value="6">Necrotic</option><option value="7">Piercing</option><option value="8">Poison</option><option value="9">Psychic</option><option value="10">Radiant</option><option value="11">Slashing</option><option value="12">Thunder</option></select><label for="attack-plus-damage-type-$">Plus Damage Type</label></div><div class="input-field col s2 push-s1"><label class="active" for="attack-or-damage-$">Or Damage</label><input type="text" id="attack-or-damage-$" placeholder="1d10+4"/></div></div><div class="row"><div class="input-field col s5"><label class="active" for="attack-or-damage-when-$">Or Damage When</label><input type="text" id="attack-or-damage-when-$" placeholder="if used with two hands"/></div><div class="input-field col s7"><label class="active" for="attack-extra-$">Extra</label><input type="text" id="attack-extra-$" placeholder=", and the target must make a DC 15 Con. saving throw"/></div></div></div></div>'
	}
}

$(document).ready(function () {
	$('.fixed-action-btn').floatingActionButton();
	$('.tooltipped').tooltip();
	$('select').formSelect();

	// ADD NEW
	$('.add').click((data) => {
		try {
			// Get destination div to generate new fields in
			var dest = data.currentTarget.id.substring(4, data.currentTarget.id.size);

			// Replace '$' in html text to id, increase count
			$('#' + dest).append(dynamicElements[dest].html.replace(/[$]/g, dynamicElements[dest].count));
			dynamicElements[dest].count++;

			if (dest == 'spell') {
				// Generate spell level names for selects
				var id = dynamicElements[dest].count - 1;
				var select = '#spell-select-' + id;

				for (var i = 1; i < 10; i++) {
					$(select).append($(new Option(i + '. Level', i)));
				}

				$(select).formSelect();

				// Add event handler to enable/disable 'Uses per Day' field
				$(select).change((eventData) => {
					var uses = '#spell-uses-' + id;
					if (eventData.currentTarget.selectedIndex > 0) {
						$(uses).prop("disabled", false);
					} else {
						$(uses).prop("disabled", true);
					}
				});
			} else if (dest == 'attack') {
				var id = dynamicElements[dest].count - 1;
				var select = '#attack-distance-' + id;

				$('#attack-distance-' + id).formSelect();
				$('#attack-type-' + id).formSelect();
				$('#attack-damage-type-' + id).formSelect();
				$('#attack-plus-damage-type-' + id).formSelect();

				//Add event handler to enable/disable 'Reach' or 'Range' field
				$(select).change((eventData) => {
					switch (eventData.currentTarget.selectedIndex) {
						case 0:
							$('#attack-reach-' + id).prop("disabled", false);
							$('#attack-range-' + id).prop("disabled", true);
							break;
						case 1:
							$('#attack-reach-' + id).prop("disabled", true);
							$('#attack-range-' + id).prop("disabled", false);
							break;
						case 2:
							$('#attack-reach-' + id).prop("disabled", false);
							$('#attack-range-' + id).prop("disabled", false);
							break;
					}
				});
			}
		} catch (e) {
			console.log(e);
		}
	});

	// REMOVE LAST
	$('.remove').click((data) => {
		// Get destination div to generate new fields in
		var dest = data.currentTarget.id.substring(7, data.currentTarget.id.size);

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
