var traitDiv;
var traits = [];

var innateDiv;
var innateSpells = [];

var spellDiv;
var spells = [];

var actionDiv;
var actions = [];

var legendaryDiv;
var legendaryActions = [];

var attackDiv;
var attacks = [];

function init() {
    traitDiv = document.getElementById('traits');
    innateDiv = document.getElementById('innate');
    spellDiv = document.getElementById('spells');
    actionDiv = document.getElementById('actions');
    legendaryDiv = document.getElementById('legendary');
    attackDiv = document.getElementById('attacks');

    addTooltip(document.getElementById('name'), 'The name of the monster');
    addTooltip(document.getElementById('description'), 'Monster type and alignment');
}

function addTooltip(element, text) {
    tippy(element, {
        content: text,
        delay: [500, 100]
    });
}

function clearNode(array) {
    if(array.length > 0) {
        var last = array.pop();

        while(last.hasChildNodes()) {
            clear(last.firstChild);
        }

        last.parentNode.removeChild(last);
    }
}

function clear(node) {
    while(node.hasChildNodes()) {
        clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
}

function addTrait() {
    // Div
    var div = document.createElement('div');
    div.className = 'traits';

    // Name
    var name = document.createElement('input');
    name.name = 'trait-name';
    name.className = 'name';
    name.placeholder = 'Grappler';
    div.appendChild(name);

    // Description
    var desc = document.createElement('input');
    desc.name = 'trait-desc';
    desc.className = 'desc';
    desc.placeholder = 'Foo has advantage on attacks against creatures grappled by it.';
    div.appendChild(desc);

    traitDiv.appendChild(div);
    traits.push(div);
}

function addInnate() {
    // Div
    var div = document.createElement('div');
    div.className = 'innate';

    // Uses
    var uses = document.createElement('input');
    uses.type = 'number'
    uses.min = 0;
    uses.step = 1;
    uses.name = 'innate-uses';
    uses.className = 'uses';
    uses.placeholder = 3;
    div.appendChild(uses);
    addTooltip(uses, "Number of uses per day");

    // Spell
    var spell = document.createElement('input');
    spell.name = 'innate-spell';
    spell.className = 'spell';
    spell.placeholder = 'fog cloud, rope trick';
    div.appendChild(spell);
    addTooltip(spell, 'Spell names');

    innateDiv.appendChild(div);
    innateSpells.push(div);
}

function addSpell() {
    // Div
    var div = document.createElement('div');
    div.className = 'spells';

    // Level
    var lvl = document.createElement('select');
    var item = document.createElement('option');
    item.value = 0;
    item.innerHTML = "Cantrip";
    lvl.appendChild(item);
    for(var i = 1; i < 10; i++) {
        item = document.createElement('option');
        item.value = i;
        item.innerHTML = i + '. Level';
        lvl.appendChild(item);
    }
    lvl.name = 'spell-lvl';
    lvl.id = 'spell-lvl-' + spells.length;
    lvl.setAttribute('onchange', 'lvlChange(' + spells.length + ');');
    div.appendChild(lvl);
    addTooltip(lvl, 'Spell level');

    // Uses
    var uses = document.createElement('input');
    uses.type = 'number'
    uses.min = 0;
    uses.step = 1;
    uses.id = 'spell-uses-' + spells.length;
    uses.name = 'spell-uses';
    uses.className = 'uses';
    uses.placeholder = 3;
    uses.disabled = true;
    uses.style.cursor = 'not-allowed';
    div.appendChild(uses);
    addTooltip(uses, "Number of uses per day");

    // Spell
    var spell = document.createElement('input');
    spell.name = 'spell';
    spell.className = 'spell';
    spell.placeholder = 'burning hands, mage armor, shield';
    div.appendChild(spell);
    addTooltip(spell, 'Spell names');

    spellDiv.appendChild(div);
    spells.push(div);
}

function lvlChange(id) {
    var dropdown = document.getElementById('spell-lvl-' + id);
    var lvl = dropdown.options[dropdown.selectedIndex].value;
    var uses = document.getElementById('spell-uses-' + id);
    if(lvl != 0) {
        uses.disabled = false;
        uses.style.cursor = 'text';
    } else {
        uses.disabled = true;
        uses.style.cursor = 'not-allowed';
    }
}

function addAction() {
    // Div
    var div = document.createElement('div');
    div.className = 'actions'

    // Name
    var name = document.createElement('input');
    name.name = 'action-name';
    name.className = 'name';
    name.placeholder = 'Multiattack';
    div.appendChild(name);
    addTooltip(name, 'Action name');

    // Description
    var desc = document.createElement('input');
    desc.name = 'action-desc';
    desc.className = 'desc';
    desc.placeholder = 'Foo makes two melee attacks';
    div.appendChild(desc);
    addTooltip(desc, 'Action description');

    actionDiv.appendChild(div);
    actions.push(div);
}

function addLegendary() {
    // Div
    var div = document.createElement('div');
    div.className = 'actions';

    // Name
    var name = document.createElement('input');
    name.name = 'legendary-name';
    name.className = 'name';
    name.placeholder = 'Create Contract';
    div.appendChild(name);
    addTooltip(name, 'Legendary action name');

    // Description
    var desc = document.createElement('input');
    desc.name = 'legendary-desc';
    desc.className = 'desc';
    desc.placeholder = 'Foo presents a contract and waves it in the face of a creature within 10 feet.';
    div.appendChild(desc);
    addTooltip(desc, 'Legendary action description');

    legendaryDiv.appendChild(div);
    legendaryActions.push(div);
}

function createAttackField(text, data, id, size, parent) {
    var div = document.createElement('div');
    if(size) {
        div.className = 'attack ' + size;
    } else {
        div.className = 'attack';
    }
    
    parent.appendChild(div);

    var name = document.createElement('h2');
    name.innerHTML = text;
    div.appendChild(name);

    if(Array.isArray(data)) {
        var select = document.createElement('select');
        select.name = id;
        for(var i = 0; i < data.length; i++) {
            var tmp = document.createElement('option');
            tmp.innerHTML = data[i];
            select.appendChild(tmp);
        }
        div.appendChild(select);
    } else {
        var textbox = document.createElement('input');
        textbox.name = id;
        textbox.placeholder = data;
        div.appendChild(textbox);
    }
}

function addAttack() {
    // Main div
    var mainDiv = document.createElement('div');
    mainDiv.className = 'border';

    var divs = [];

    // First line
    divs.push(document.createElement('div'));
    divs[0].className = 'attacks';

    createAttackField('Attack Name', 'Flame Tongue Longsword', 'attack-name', 'big', divs[0]);
    var distances = ['Melee', 'Ranged', 'Both'];
    createAttackField('Distance', distances, 'attack-distance', 'small', divs[0]);
    var types = ['Weapon', 'Spell'];
    createAttackField('Type', types, 'attack-type', 'small', divs[0]);
    createAttackField('Modifier', '+3', 'attack-mod', 'small', divs[0]);
    createAttackField('Reach', '5', 'attack-reach', 'small', divs[0]);
    createAttackField('Range', '60/120', 'attack-range', 'small', divs[0]);
    
    mainDiv.appendChild(divs[0]);

    // Second line
    divs.push(document.createElement('div'));
    divs[1].className = 'attacks';

    createAttackField('Targets', 'one target', 'attack-targets', 'high', divs[1]);
    createAttackField('Damage', '1d8+4', 'attack-damage', 'high', divs[1]);
    var damageTypes = ['Acid', 'Bludgeoning', 'Cold', 'Fire', 'Force', 'Lightning', 'Necrotic', 'Piercing', 'Poison', 'Psychic', 'Radiant', 'Slashing', 'Thunder'];
    createAttackField('Damage Type', damageTypes, 'attack-damage-type', null, divs[1]);
    createAttackField('Plus Damage', '1d8+4', 'attack-plus-damage', 'high', divs[1]);
    createAttackField('Plus Damage Type', damageTypes, 'attack-plus-damage-type', null, divs[1]);

    mainDiv.appendChild(divs[1]);

    // Third line
    divs.push(document.createElement('div'));
    divs[2].className = 'attacks';

    createAttackField('Or Damage', '1d10+4', 'attack-or-damage', 'small', divs[2]);
    createAttackField('Or Damage When', 'if used with two hands', 'attack-or-damage-when', 'medium', divs[2]);
    createAttackField('Extra', ', and the target must make a DC 15 Con. saving throw', 'attack-extra', 'big', divs[2]);


    mainDiv.appendChild(divs[2]);


    attackDiv.appendChild(mainDiv);
    attacks.push(mainDiv);
}
