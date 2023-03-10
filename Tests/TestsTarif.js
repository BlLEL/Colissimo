/**
 * Tests unitaires du projet Impôts sur le revenu
 * 
 */
MesTestsUnitaires = TestCase('ImpotsTest');
MesTestsUnitaires.prototype.testsPoids1 = function () {
    assertEquals('Poids = 100 g', 4.95, RecupPoids(100));
    assertEquals('Poids = 200 g', 4.95, RecupPoids(200));
    assertEquals('Poids = 39 g', 4.95, RecupPoids(39));
};
MesTestsUnitaires.prototype.testsPoids2 = function () {
    assertEquals('Poids = 280 g', 6.70, RecupPoids(280));
    assertEquals('Poids = 300 g', 6.70, RecupPoids(300));
    assertEquals('Poids = 498 g', 6.70, RecupPoids(498));
};
MesTestsUnitaires.prototype.testsPoids3 = function () {
    assertEquals('Poids = 550 g', 7.60, RecupPoids(550));
    assertEquals('Poids = 600 g', 7.60, RecupPoids(600));
    assertEquals('Poids = 704 g', 7.60, RecupPoids(704));
};
MesTestsUnitaires.prototype.testsPoids4 = function () {
    assertEquals('Poids = 790 g', 8.25, RecupPoids(790));
    assertEquals('Poids = 910 g', 8.25, RecupPoids(910));
    assertEquals('Poids = 990 g', 8.25, RecupPoids(990));
};
MesTestsUnitaires.prototype.testsPoids5 = function () {
    assertEquals('Poids = 1.3 kg', 9.55, RecupPoids(1300));
    assertEquals('Poids = 1.9 kg', 9.55, RecupPoids(1900));
};
MesTestsUnitaires.prototype.testsPoids6 = function () {
    assertEquals('Poids = 3 kg', 14.65, RecupPoids(3000));
    assertEquals('Poids = 4.5 kg', 14.65, RecupPoids(4500));
};
MesTestsUnitaires.prototype.testsPoids7 = function () {
    assertEquals('Poids = 6.8 kg', 21.30, RecupPoids(6800));
    assertEquals('Poids = 9 kg', 21.30, RecupPoids(9000));
};
MesTestsUnitaires.prototype.testsPoids8 = function () {
    assertEquals('Poids = 11 kg', 26.95, RecupPoids(11000));
    assertEquals('Poids = 13.5 kg', 26.95, RecupPoids(13554));
};
MesTestsUnitaires.prototype.testsPoids9 = function () {
    assertEquals('Poids = 23 kg', 33.40, RecupPoids(23000));
    assertEquals('Poids = 29 kg', 33.40, RecupPoids(29000));
};