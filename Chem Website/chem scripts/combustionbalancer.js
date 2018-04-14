
var choice = true;

while (choice == true)
{
 var c1, h1, o1, h2, o2, o3;

c1 = prompt("How many carbons are in each molecule of your fuel source?(numeric digits only)");
h1 = prompt("How many hydrogens are in each molecule of your fuel source?(numeric digits only)");
o1 = prompt("How many oxygens are in each molecule of your fuel source?(numeric digits only).  Type 0 if there are no oxygens.")
h2 = h1/2;
o2 = (c1*2) + h2;

if (o1 == 0)
{
o3 = (o2/2);

while(o3 % 1 != 0)
{
h1 *=2;
c1 *=2;
o3 *=2;

}
alert("The balanced chemical formula for this complete combustion reaction is C" +c1+ "H"+h1 +" + "+o3 + "O2 makes " +c1+ "CO2 and "+ h2+"H2O.");

}
else
{
o3 = (o2-o1)/2;
alert("The balanced chemical formula for this complete combustion reaction is C" +c1+ "H"+h1 + "O" +o1 +" + " + o3 + "O2 makes " +c1+ "CO2 and "+ h2+"H2O.");
}

//C3H8 + 5O2 makes 3CO2 and 4 h2O   YES
//c2H6O + 3O2 makes 2CO2 and 3H2O   YES
//2c4H10 + 11O2 makes 8CO2 and 10H2O NO
//2c3H8O + 9O2 makes 6co2 and 8h2O   NO


var choice = window.confirm("Would you like to use this program again?"); 
}


