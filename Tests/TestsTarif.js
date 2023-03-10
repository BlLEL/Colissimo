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
    assertEquals('300 g et le prix est de 3€', 9.70, RecupPoidsPrix(300, 3));
    assertEquals('27478€ de revenus', 17.70, RecupPoidsPrix(498, 11));
};
MesTestsUnitaires.prototype.testsPoids3 = function () {
    assertEquals('27479€ de revenus', 9.60, RecupPoidsPrix(550, 2));
    assertEquals('30000€ de revenus', 34.60, RecupPoidsPrix(600, 25));
    assertEquals('78570€ de revenus', 39.60, RecupPoidsPrix(704, 30));
};
MesTestsUnitaires.prototype.testsPoids4 = function () {
    assertEquals('78571€ de revenus', 18.25, RecupPoidsPrix(790, 10));
    assertEquals('100000€ de revenus', 158.25, RecupPoidsPrix(910, 150));
    assertEquals('168994€ de revenus', 608.25, RecupPoidsPrix(990, 600));
};
MesTestsUnitaires.prototype.testsPoids5 = function () {
    assertEquals('168995€ de revenus', 509.55, RecupPoidsPrix(1300, 500));
    assertEquals('1000000€ de revenus', 809.55, RecupPoidsPrix(1900, 800));
};
MesTestsUnitaires.prototype.testsPoids6 = function () {
    assertEquals('168995€ de revenus', 554.65, RecupPoidsPrix(3000, 540));
    assertEquals('1000000€ de revenus', 814.65, RecupPoidsPrix(4500, 800));
};
MesTestsUnitaires.prototype.testsPoids7 = function () {
    assertEquals('168995€ de revenus', 721.30, RecupPoidsPrix(6800, 700));
    assertEquals('1000000€ de revenus', 921.30, RecupPoidsPrix(9000, 800));
};
MesTestsUnitaires.prototype.testsPoids8 = function () {
    assertEquals('168995€ de revenus', 826.95, RecupPoidsPrix(11000, 800));
    assertEquals('1000000€ de revenus', 806.95, RecupPoidsPrix(13554, 780));
};
MesTestsUnitaires.prototype.testsPoids9 = function () {
    assertEquals('168995€ de revenus', 1533.40, RecupPoidsPrix(23000, 1500));
    assertEquals('1000000€ de revenus', 2533.40, RecupPoidsPrix(29000, 2500));
};