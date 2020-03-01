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

function correctArray(fromName, fromDesc, toName, toDesc, array, data) {
    if(data[fromName]) {
        data[array] = new Array();
        var elements = 1;
        if(Array.isArray(data[fromName])) {
            elements = data[fromName].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            if(elements == 1) {
                tmp[toName] = data[fromName];
                tmp[toDesc] = data[fromDesc];
            } else {
                tmp[toName] = data[fromName][i];
                tmp[toDesc] = data[fromDesc][i];
            }
            data[array].push(tmp);
        }
        delete data[fromName];
        delete data[fromDesc];
    }
}

function generate() {
    var data = formToJSON(document.getElementById('monster'));

    // Traits
    correctArray('trait-name', 'trait-desc', 'name', 'desc', 'trait', data);

    // Innate spells
    correctArray('innate-spell', 'innate-uses', 'name', 'uses', 'innate', data);

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
    correctArray('action-name', 'action-desc', 'name', 'desc', 'action', data);

    // Legendary actions
    correctArray('legendary-name', 'legendary-desc', 'name', 'desc', 'legendary', data);

    
    console.log(data);

    var template = Handlebars.templates['template'];
    console.log(template(data));
}