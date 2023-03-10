/**
 * Tests unitaires du projet Impôts sur le revenu
 * 
 */
MesTestsUnitaires = TestCase('ImpotsTest');
MesTestsUnitaires.prototype.testsPoids1 = function () {
    assertEquals('100 g et le prix est de 1€', 5.95, RecupPoidsPrix(100, 1));
    assertEquals('200 g et le prix est de 8€', 12.95, RecupPoidsPrix(200, 8));
    assertEquals('39 g et le prix est de 124€', 128.95, RecupPoidsPrix(39, 124));
};
MesTestsUnitaires.prototype.testsPoids2 = function () {
    assertEquals('280 g et le prix est de 1€', 7.70, RecupPoidsPrix(280, 1));
    assertEquals('300 g et le prix est de 3€', 9.70, RecupPoidsPrix(300, 3));
    assertEquals('498 g et le prix est de 11€', 17.70, RecupPoidsPrix(498, 11));
};
MesTestsUnitaires.prototype.testsPoids3 = function () {
    assertEquals('550 g et le prix est de 2€', 9.60, RecupPoidsPrix(550, 2));
    assertEquals('600 g et le prix est de 20€', 27.60, RecupPoidsPrix(600, 20));
    assertEquals('704 g et le prix est de 30€', 37.60, RecupPoidsPrix(704, 30));
};
MesTestsUnitaires.prototype.testsPoids4 = function () {
    assertEquals('790 g et le prix est de 10€', 18.25, RecupPoidsPrix(790, 10));
    assertEquals('910 g et le prix est de 150€', 158.25, RecupPoidsPrix(910, 150));
    assertEquals('990 g et le prix est de 600€', 608.25, RecupPoidsPrix(990, 600));
};
MesTestsUnitaires.prototype.testsPoids5 = function () {
    assertEquals('1.3 kg et le prix est de 500€', 509.55, RecupPoidsPrix(1300, 500));
    assertEquals('1.9 kg et le prix est de 800€', 809.55, RecupPoidsPrix(1900, 800));
};
MesTestsUnitaires.prototype.testsPoids6 = function () {
    assertEquals('3 kg et le prix est de 540€', 554.65, RecupPoidsPrix(3000, 540));
    assertEquals('4.5 kg et le prix est de 800€', 814.65, RecupPoidsPrix(4500, 800));
};
MesTestsUnitaires.prototype.testsPoids7 = function () {
    assertEquals('6.8 kg et le prix est de 700€', 721.30, RecupPoidsPrix(6800, 700));
    assertEquals('9 kg et le prix est de 900€', 921.30, RecupPoidsPrix(9000, 900));
};
MesTestsUnitaires.prototype.testsPoids8 = function () {
    assertEquals('11 kg et le prix est de 1€', 826.95, RecupPoidsPrix(11000, 800));
    assertEquals('13.5 kg et le prix est de 1€', 806.95, RecupPoidsPrix(13554, 780));
};
MesTestsUnitaires.prototype.testsPoids9 = function () {
    assertEquals('23 kg et le prix est de 1€', 1533.40, RecupPoidsPrix(23000, 1500));
    assertEquals('29 kg et le prix est de 1€', 2533.40, RecupPoidsPrix(29000, 2500));
};