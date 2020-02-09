function formToJSON( elem ) {
    let output = {};
    new FormData( elem ).forEach(
      ( value, key ) => {
        // Check if property already exist
        if ( Object.prototype.hasOwnProperty.call( output, key ) ) {
          let current = output[ key ];
          if ( !Array.isArray( current ) ) {
            // If it's not an array, convert it to an array.
            current = output[ key ] = [ current ];
          }
          current.push( value ); // Add the new value to the array.
        } else {
          output[ key ] = value;
        }
      }
    );
    return output;
}

function generate() {
    var data = formToJSON(document.getElementById('monster'));

    // TODO: Incorrect indexing if not array

    // Traits
    if(data['trait-name']) {
        data.trait = new Array();
        var elements = 1;
        if(Array.isArray(data['trait-name'])) {
            elements = data['trait-name'].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            tmp.name = data['trait-name'][i];
            tmp.desc = data['trait-desc'][i];
            data.trait.push(tmp);
        }
        delete data['trait-name'];
        delete data['trait-desc'];
    }

    // Innate spells
    if(data['innate-spell']) {
        data.innate = new Array();
        var elements = 1;
        if(Array.isArray(data['innate-spell'])) {
            elements = data['innate-spell'].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            tmp.name = data['innate-spell'][i];
            tmp.uses = data['innate-uses'][i];
            data.innate.push(tmp);
        }
        delete data['innate-spell'];
        delete data['innate-uses'];
    }

    // Spells
    if(data.spell) {
        var spell = new Array();
        var elements = 1;
        var cantrips = 0;
        if(Array.isArray(data.spell)) {
            elements = data.spell.length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            tmp.name = data.spell[i];
            tmp.lvl = data['spell-lvl'][i];
            if(tmp.lvl == 0) {
                cantrips++;
            } else {
                tmp.uses = data['spell-uses'][i-cantrips];
            }
            spell.push(tmp);
        }
        data.spell = spell;
        delete data['spell-lvl'];
        if(data['spell-uses']) {
            delete data['spell-uses'];
        }
        
    }

    // Actions
    if(data['action-name']) {
        data.action = new Array();
        var elements = 1;
        if(Array.isArray(data['action-name'])) {
            elements = data['action-name'].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            tmp.name = data['action-name'][i];
            tmp.desc = data['action-desc'][i];
            data.action.push(tmp);
        }
        delete data['action-name'];
        delete data['action-desc'];
    }

    // Legendary actions
    if(data['legendary-name']) {
        data.legendary = new Array();
        var elements = 1;
        if(Array.isArray(data['legendary-name'])) {
            elements = data['legendary-name'].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            tmp.name = data['legendary-name'][i];
            tmp.desc = data['legendary-desc'][i];
            data.legendary.push(tmp);
        }
        delete data['legendary-name'];
        delete data['legendary-desc'];
    }
    console.log(data);

    var template = Handlebars.templates['template'];
    console.log(template(data));
}