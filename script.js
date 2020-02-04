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

function init() {
    traitDiv = document.getElementById('traits');
    innateDiv = document.getElementById('innate');
    spellDiv = document.getElementById('spells');
    actionDiv = document.getElementById('actions');
    legendaryDiv = document.getElementById('legendary');

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
    traitDiv.appendChild(div);

    // Name
    var name = document.createElement('input');
    name.id = 'trait-name-' + traits.length;
    name.className = 'name';
    name.placeholder = 'Grappler';
    div.appendChild(name);

    // Description
    var desc = document.createElement('input');
    desc.id = 'trait-desc-' + traits.length;
    desc.className = 'desc';
    desc.placeholder = 'Foo has advantage on attacks against creatures grappled by it.';
    div.appendChild(desc);

    traits.push(div);
}

function addInnate() {
    // Div
    var div = document.createElement('div');
    div.className = 'innate';
    innateDiv.appendChild(div);

    // Uses
    var uses = document.createElement('input');
    uses.type = 'number'
    uses.min = 0;
    uses.step = 1;
    uses.id = 'innate-uses-' + innateSpells.length;
    uses.className = 'uses';
    uses.placeholder = 3;
    div.appendChild(uses);
    addTooltip(uses, "Number of uses per day");

    // Spell
    var spell = document.createElement('input');
    spell.id = 'innate-spell-' + innateSpells.length;
    spell.className = 'spell';
    spell.placeholder = 'fog cloud, rope trick';
    div.appendChild(spell);
    addTooltip(spell, 'Spell names');

    innateSpells.push(div);
}

function addSpell() {
    // Div
    var div = document.createElement('div');
    div.className = 'spells';
    spellDiv.appendChild(div);

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
    uses.className = 'uses';
    uses.placeholder = 3;
    uses.disabled = true;
    uses.style.cursor = 'not-allowed';
    div.appendChild(uses);
    addTooltip(uses, "Number of uses per day");

    // Spell
    var spell = document.createElement('input');
    spell.id = 'spell-' + spells.length;
    spell.className = 'spell';
    spell.placeholder = 'burning hands, mage armor, shield';
    div.appendChild(spell);
    addTooltip(spell, 'Spell names');

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
    div.className = 'actions';
    actionDiv.appendChild(div);

    // Name
    var name = document.createElement('input');
    name.id = 'action-name-' + actions.length;
    name.className = 'name';
    name.placeholder = 'Multiattack';
    div.appendChild(name);
    addTooltip(name, 'Action name');

    // Description
    var desc = document.createElement('input');
    desc.id = 'action-desc-' + actions.length;
    desc.className = 'desc';
    desc.placeholder = 'Foo makes two melee attacks';
    div.appendChild(desc);
    addTooltip(desc, 'Action description');

    actions.push(div);
}

function addLegendary() {
    // Div
    var div = document.createElement('div');
    div.className = 'actions';
    legendaryDiv.appendChild(div);

    // Name
    var name = document.createElement('input');
    name.id = 'legendary-name-' + legendaryActions.length;
    name.className = 'name';
    name.placeholder = 'Create Contract';
    div.appendChild(name);
    addTooltip(name, 'Legendary action name');

    // Description
    var desc = document.createElement('input');
    desc.id = 'legendary-desc-' + actions.length;
    desc.className = 'desc';
    desc.placeholder = 'Foo presents a contract and waves it in the face of a creature within 10 feet.';
    div.appendChild(desc);
    addTooltip(desc, 'Legendary action description');

    legendaryActions.push(div);
}
