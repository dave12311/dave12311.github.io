(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        saving-throws = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"saving-throws") || (depth0 != null ? lookupProperty(depth0,"saving-throws") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"saving-throws","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":45}}}) : helper)))
    + "},";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        skills = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"skills") || (depth0 != null ? lookupProperty(depth0,"skills") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"skills","hash":{},"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":31}}}) : helper)))
    + "},";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        damage-vulnerabilities = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"damage-vulnerabilities") || (depth0 != null ? lookupProperty(depth0,"damage-vulnerabilities") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"damage-vulnerabilities","hash":{},"data":data,"loc":{"start":{"line":22,"column":35},"end":{"line":22,"column":63}}}) : helper)))
    + "},";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        damage-resistances = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"damage-resistances") || (depth0 != null ? lookupProperty(depth0,"damage-resistances") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"damage-resistances","hash":{},"data":data,"loc":{"start":{"line":23,"column":31},"end":{"line":23,"column":55}}}) : helper)))
    + "},";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        damage-immunities = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"damage-immunities") || (depth0 != null ? lookupProperty(depth0,"damage-immunities") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"damage-immunities","hash":{},"data":data,"loc":{"start":{"line":24,"column":30},"end":{"line":24,"column":53}}}) : helper)))
    + "},";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        condition-immunities = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"condition-immunities") || (depth0 != null ? lookupProperty(depth0,"condition-immunities") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"condition-immunities","hash":{},"data":data,"loc":{"start":{"line":25,"column":33},"end":{"line":25,"column":59}}}) : helper)))
    + "},";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        senses = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"senses") || (depth0 != null ? lookupProperty(depth0,"senses") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"senses","hash":{},"data":data,"loc":{"start":{"line":26,"column":19},"end":{"line":26,"column":31}}}) : helper)))
    + "},";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        languages = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"languages") || (depth0 != null ? lookupProperty(depth0,"languages") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"languages","hash":{},"data":data,"loc":{"start":{"line":27,"column":22},"end":{"line":27,"column":37}}}) : helper)))
    + "},";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        challenge = {"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"challenge") || (depth0 != null ? lookupProperty(depth0,"challenge") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"challenge","hash":{},"data":data,"loc":{"start":{"line":28,"column":22},"end":{"line":28,"column":37}}}) : helper)))
    + "}";
},"19":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \\DndMonsterAction{"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "}\n    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"desc") : depth0), depth0))
    + "\n\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \\DndMonsterAction{Innate Spellcasting}\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"innate-desc") || (depth0 != null ? lookupProperty(depth0,"innate-desc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"innate-desc","hash":{},"data":data,"loc":{"start":{"line":38,"column":4},"end":{"line":38,"column":19}}}) : helper)))
    + "\n    \\begin{DndMonsterSpells}\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"innate") : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":42,"column":17}}})) != null ? stack1 : "")
    + "    \\end{DndMonsterSpells}\n\n";
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        \\DndInnateSpellLevel["
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"uses") : depth0), depth0))
    + "]{"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "}\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \\DndMonsterAction{Spellcasting}\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"spell-desc") || (depth0 != null ? lookupProperty(depth0,"spell-desc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"spell-desc","hash":{},"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":48,"column":18}}}) : helper)))
    + "\n    \\begin{DndMonsterSpells}\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"spell") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":8},"end":{"line":56,"column":17}}})) != null ? stack1 : "")
    + "    \\end{DndMonsterSpells}\n    \n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"uses") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":51,"column":8},"end":{"line":55,"column":15}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        \\DndMonsterSpellLevel["
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lvl") : depth0), depth0))
    + "]["
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"uses") : depth0), depth0))
    + "]{"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "}\n";
},"28":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        \\DndMonsterSpellLevel{"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "}\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \\DndMonsterAttack[\n        name = {"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "},\n        distance = "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"distance") : depth0), depth0))
    + ",\n        type = "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + ",\n        mod = {"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"mod") : depth0), depth0))
    + "},"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"reach") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":33},"end":{"line":73,"column":44}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"range") : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":44},"end":{"line":74,"column":44}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"targets") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":44},"end":{"line":75,"column":48}}})) != null ? stack1 : "")
    + "\n        dmg = \\DndDice{"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"damage") : depth0), depth0))
    + "},\n        dmg-type = "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"damage-type") : depth0), depth0))
    + ","
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"plus-damage") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":40},"end":{"line":78,"column":53}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"plus-damage-type") : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":53},"end":{"line":79,"column":57}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"or-damage") : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":57},"end":{"line":80,"column":49}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"or-damage-when") : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":49},"end":{"line":81,"column":59}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"extra") : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":59},"end":{"line":82,"column":43}}})) != null ? stack1 : "")
    + "\n]\n";
},"31":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        reach = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"reach") : depth0), depth0))
    + "},";
},"33":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        range = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"range") : depth0), depth0))
    + "},";
},"35":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        targets = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"targets") : depth0), depth0))
    + "},";
},"37":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        plus-dmg = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"plus-damage") : depth0), depth0))
    + "},";
},"39":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        plus-dmg-type = "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"plus-damage-type") : depth0), depth0))
    + ",";
},"41":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        or-dmg = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"or-damage") : depth0), depth0))
    + "},";
},"43":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        or-dmg-when = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"or-damage-when") : depth0), depth0))
    + "},";
},"45":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        extra = {"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"extra") : depth0), depth0))
    + "}";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    \\DndMonsterSection{Legendary Actions}\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"legendary-action-desc") || (depth0 != null ? lookupProperty(depth0,"legendary-action-desc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"legendary-action-desc","hash":{},"data":data,"loc":{"start":{"line":87,"column":4},"end":{"line":87,"column":29}}}) : helper)))
    + "\n    \\begin{DndMonsterLegendaryActions}\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"legendary") : depth0),{"name":"each","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":8},"end":{"line":91,"column":17}}})) != null ? stack1 : "")
    + "    \\end{DndMonsterLegendaryActions}\n\n";
},"48":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        \\DndMonsterLegendaryAction["
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "]{"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"desc") : depth0), depth0))
    + "}\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\\begin{DndMonster}{"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":30}}}) : helper)))
    + "}\n    \\DndMonsterType{"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":2,"column":21},"end":{"line":2,"column":38}}}) : helper)))
    + "}\n\n    \\DndMonsterBasics[\n        armor-class = {"
    + alias4(((helper = (helper = lookupProperty(helpers,"ac") || (depth0 != null ? lookupProperty(depth0,"ac") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ac","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":32}}}) : helper)))
    + "},\n        hit-points = {\\DndDice{"
    + alias4(((helper = (helper = lookupProperty(helpers,"hp") || (depth0 != null ? lookupProperty(depth0,"hp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hp","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":40}}}) : helper)))
    + "}},\n        speed = {"
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":29}}}) : helper)))
    + "}\n    ]\n\n    \\DndMonsterAbilityScores[\n        str = "
    + alias4(((helper = (helper = lookupProperty(helpers,"str") || (depth0 != null ? lookupProperty(depth0,"str") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"str","hash":{},"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":21}}}) : helper)))
    + ",\n        dex = "
    + alias4(((helper = (helper = lookupProperty(helpers,"dex") || (depth0 != null ? lookupProperty(depth0,"dex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dex","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":21}}}) : helper)))
    + ",\n        con = "
    + alias4(((helper = (helper = lookupProperty(helpers,"con") || (depth0 != null ? lookupProperty(depth0,"con") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"con","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":21}}}) : helper)))
    + ",\n        int = "
    + alias4(((helper = (helper = lookupProperty(helpers,"int") || (depth0 != null ? lookupProperty(depth0,"int") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"int","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":21}}}) : helper)))
    + ",\n        wis = "
    + alias4(((helper = (helper = lookupProperty(helpers,"wis") || (depth0 != null ? lookupProperty(depth0,"wis") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wis","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":21}}}) : helper)))
    + ",\n        cha = "
    + alias4(((helper = (helper = lookupProperty(helpers,"cha") || (depth0 != null ? lookupProperty(depth0,"cha") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cha","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":21}}}) : helper)))
    + ",\n    ]\n\n    \\DndMonsterDetails["
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"saving-throws") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":23},"end":{"line":20,"column":55}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"skills") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":55},"end":{"line":21,"column":41}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage-vulnerabilities") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":41},"end":{"line":22,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage-resistances") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":73},"end":{"line":23,"column":65}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"damage-immunities") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":65},"end":{"line":24,"column":63}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"condition-immunities") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":25,"column":69}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"senses") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":69},"end":{"line":26,"column":41}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"languages") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":41},"end":{"line":27,"column":47}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"challenge") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":47},"end":{"line":28,"column":46}}})) != null ? stack1 : "")
    + "\n    ]\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"trait") : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"innate-desc") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":4},"end":{"line":45,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"spell-desc") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":59,"column":11}}})) != null ? stack1 : "")
    + "    \\DndMonsterSection{Actions}\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"action") : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":4},"end":{"line":66,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"attack") : depth0),{"name":"each","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":4},"end":{"line":84,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"legendary-action-desc") : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":4},"end":{"line":94,"column":11}}})) != null ? stack1 : "")
    + "\\end{DndMonster}";
},"useData":true});
})();