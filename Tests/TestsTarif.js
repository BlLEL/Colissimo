/**
 * Tests unitaires du projet Impôts sur le revenu
 * 
 */
MesTestsUnitaires = TestCase('ImpotsTest');
MesTestsUnitaires.prototype.testsPoids1 = function () {
    assertEquals('0€ de revenus', 5.95, RecupPoidsPrix(100, 1));
    assertEquals('10778€ de revenus', 12.95, RecupPoidsPrix(200, 8));
    assertEquals('10778€ de revenus', 28.95, RecupPoidsPrix(39, 24));
};
MesTestsUnitaires.prototype.testsPoids2 = function () {
    assertEquals('10778€ de revenus', 6.70, RecupPoidsPrix(280, 0));
    assertEquals('300g et le prix est de 3€', 9.70, RecupPoidsPrix(300, 3));
    assertEquals('27478€ de revenus', 17.70, RecupPoidsPrix(498, 11));
};
MesTestsUnitaires.prototype.testsPoids3 = function () {
    assertEquals('27479€ de revenus', 9.60, RecupPoidsPrix(550, 2));
    assertEquals('30000€ de revenus', 34.60, RecupPoidsPrix(600, 25));
    assertEquals('78570€ de revenus', 39.60, RecupPoidsPrix(704, 30));
};
MesTestsUnitaires.prototype.testsPoids4 = function () {
    assertEquals('78571€ de revenus', 8.25, RecupPoidsPrix(78571));
    assertEquals('100000€ de revenus', 25951.01, RecupPoidsPrix(100000));
    assertEquals('168994€ de revenus', 54238.55, RecupPoidsPrix(168994));
};
MesTestsUnitaires.prototype.testsPoids5 = function () {
    assertEquals('168995€ de revenus', 9.55, RecupPoidsPrix(168995));
    assertEquals('1000000€ de revenus', 428191.25, RecupPoidsPrix(1000000));
};
MesTestsUnitaires.prototype.testsPoids6 = function () {
    assertEquals('168995€ de revenus', 14.65, RecupPoidsPrix(168995));
    assertEquals('1000000€ de revenus', 428191.25, RecupPoidsPrix(1000000));
};
MesTestsUnitaires.prototype.testsPoids7 = function () {
    assertEquals('168995€ de revenus', 21.30, RecupPoidsPrix(168995));
    assertEquals('1000000€ de revenus', 428191.25, RecupPoidsPrix(1000000));
};
MesTestsUnitaires.prototype.testsPoids8 = function () {
    assertEquals('168995€ de revenus', 26.95, RecupPoidsPrix(168995));
    assertEquals('1000000€ de revenus', 428191.25, RecupPoidsPrix(1000000));
};
MesTestsUnitaires.prototype.testsPoids9 = function () {
    assertEquals('168995€ de revenus', 33.40, RecupPoidsPrix(168995));
    assertEquals('1000000€ de revenus', 428191.25, RecupPoidsPrix(1000000));
};