var db = require('./util/db');

db.addCollection('top').insert([
    {term:"JavaScript", style: 'warning'},
    {term:"Angular 2", style: 'dangerous'},
    {term:"NodeJS", style: 'success'},
    {term:"Golang", style: 'info'},
    {term:"iOS", style: 'default'},
    {term:"ReactJS", style: 'warning'},
    {term:"Ionic", style: 'info'},
    {term:"REST", style: 'primary'},
    {term:"Authentication", style: 'default'},
    {term:"Android", style: 'success'},
]);

db.addCollection('searches');

db.saveDatabase();
