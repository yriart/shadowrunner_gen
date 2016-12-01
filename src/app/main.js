var React = require('react');
var ReactDOM = require('react-dom');

var priorities = [
    {
        priority: 'A',
        metatype: 'Human, Elf, Dwarf, Ork, Troll',
        attributes: 24,
        magic_or_resonance: 'Magic 6, two Rating 5 Magical skills, 10 spells / Resonance 6, two Rating 5 Resonance skills, 5 complex forms',
        skills: 46,
        skill_groups: 10,
        resources: 450000
    },
    {
        priority: 'B',
        metatype: 'Human, Elf, Dwarf, Ork, Troll',
        attributes: 20,
        magic_or_resonance: 'Magic 4, two Rating 4 Magical skills, 7 spells / Resonance 4, two rating 4 Resonance skills, two complex forms',
        skills: 36,
        skill_groups: 5,
        resources: 275000
    },
    {
        priority: 'C',
        metatype: 'Human, Elf, Dwarf, Ork',
        attributes: 16,
        magic_or_resonance: 'Magic 3, 5 spells / Resonance 3, one complex form',
        skills: 28,
        skill_groups: 2,
        resources: 140000
    },
    {
        priority: 'D',
        metatype: 'Human, Elf',
        attributes: 14,
        magic_or_resonance: 'Adept or Aspected Magician: Magic 2',
        skills: 22,
        skill_groups: 0,
        resources: 50000
    },
    {
        priority: 'E',
        metatype: 'Human',
        attributes: 12,
        magic_or_resonance: 'None',
        skills: 18,
        skill_groups: 0,
        resources: 6000
    }
];

function createSubListElements(priority) {
    var subListElements = [];
    var keys = Object.keys(priority);
    for (var i = 0; i < keys.length; i++) {
        subListElements.push(
            React.createElement('li', {key: i}, keys[i] + ' : ' + priority[keys[i]])
        );
    }
    return subListElements;
}

function createList() {
    var listElements = [];
    for (var i = 0; i < priorities.length; i++) {
        listElements.push(
            React.createElement('li', {key: i},
                React.createElement('ul', {}, createSubListElements(priorities[i]))
            )
        );
    }
    return listElements;
}

var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, "Priority selection"),
        React.createElement('ul', {}, createList())
    );

ReactDOM.render(rootElement, document.getElementById('react-app'));