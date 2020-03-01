function formToJSON( elem ) {
    var output = new Object();
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

function correctArray(objectNames, arrayName, data) {
    var from = (to) => {
        return arrayName + '-' + to;
    }
    if(data[from(objectNames[0])] != null) {
        data[arrayName] = new Array();
        var elements = 1;
        if(Array.isArray(data[from(objectNames[0])])) {
            elements = data[from(objectNames[0])].length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            if(elements == 1) {
                for(var j = 0; j < objectNames.length; j++) {
                    tmp[objectNames[j]] = data[from(objectNames[j])];
                }
            } else {
                for(var j = 0; j < objectNames.length; j++) {
                    tmp[objectNames[j]] = data[from(objectNames[j])][i];
                }
            }
            data[arrayName].push(tmp);
        }
        objectNames.forEach(e => {
            delete data[from(e)];
        });
    }
}

function generate() {
    var data = formToJSON(document.getElementById('monster'));

    // Traits
    correctArray(['name', 'desc'], 'trait', data);

    // Innate spells
    correctArray(['name', 'uses'], 'innate', data);

    // Spells
    if(data.spell != null) {
        var spell = new Array();
        var elements = 1;
        var cantrips = 0;
        if(Array.isArray(data.spell)) {
            elements = data.spell.length;
        }
        for(var i = 0; i < elements; i++) {
            var tmp = new Object();
            if(elements == 1) {
                tmp.name = data.spell;
                tmp.lvl = data['spell-lvl'];
                if(tmp.lvl == 0) {
                    cantrips++;
                } else {
                    tmp.uses = data['spell-uses'];
                }
            } else {
                tmp.name = data.spell[i];
                tmp.lvl = data['spell-lvl'][i];
                if(tmp.lvl == 0) {
                    cantrips++;
                } else {
                    tmp.uses = data['spell-uses'][i-cantrips];
                }
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
    correctArray(['name', 'desc'], 'action', data);

    // Attacks
    var attack = ['name', 'distance', 'type', 'mod', 'reach', 'range',
             'targets', 'damage', 'damage-type', 'plus-damage', 'plus-damage-type',
             'or-damage', 'or-damage-when', 'extra']
    correctArray(attack, 'attack', data);

    // Legendary actions
    correctArray(['name', 'desc'], 'legendary', data);

    console.log(data);

    var template = Handlebars.templates['template'];
    console.log(template(data));
}