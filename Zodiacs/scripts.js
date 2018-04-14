


function zodiac(){
var currentYear = 2016;
var chinese = "";
var greek = "";
var gen = "";
var greek1 = "";
var gen1 = "";
var name = document.getElementById("firstName").value;
var year = document.getElementById("year1").value;
var month = document.getElementById("month1").value;
var day = document.getElementById("day1").value;

if ((currentYear - year) % 12 == 0)
chinese = "monkey";
else if ((currentYear +1 - year) % 12 == 0)
chinese = "rooster";
else if ((currentYear +2 - year) % 12 == 0)
chinese = "dog";
else if ((currentYear +3 - year) % 12 == 0)
chinese = "pig";
else if ((currentYear +4 - year) % 12 == 0)
chinese = "rat";
else if ((currentYear +5 - year) % 12 == 0)
chinese = "ox";
else if ((currentYear +6 - year) % 12 == 0)
chinese = "tiger";
else if ((currentYear +7 - year) % 12 == 0)
chinese = "rabbit";
else if ((currentYear +8 - year) % 12 == 0)
chinese = "dragon";
else if ((currentYear +9 - year) % 12 == 0)
chinese = "snake";
else if ((currentYear +10 - year) % 12 == 0)
chinese = "horse";
else
chinese = "goat";

if (year >2009)
{
gen = "an alpha";
gen1 = "Generation Alpha";
}
else if(year >2000)
{
gen = "a gen z";
gen1 = "Generation Z";
}
else if(year >1983)
{
gen = "a millenial";
gen1 = "The Millenial Generation";
}
else if(year >1965)
{
gen = "a gen x";
gen1 = "Generation X";
}
else if(year >1945)
{
gen = "a boomer";
gen1 = "The Baby Boomer Generation";
}
else if(year >1925)
{
gen = "a silent";
gen1 = "The Silent Generation";
}
else if(year >1900)
{
gen = "the greatest";
gen1 = "The Greatest Generation";
}
else
{
gen = "an ancient";
gen1 = "unknown.  You are impossibly old"
}
if (month == 1)
{
	if (day <= 20)
	{
		greek = "caprine";
	}
	else
	{
		greek = "aquatic";
	}
}

else if (month == 2)
{
if (day <= 19)
{
	greek = "aquatic";
}
else
{
	greek = "fishy";
}
}

else if (month == 3)
{
if (day <= 21)
{
	greek = "fishy";
}
else
{
	greek = "sheepish";
}
}

else if (month == 4)
{
if (day <= 19)
{
	greek = "sheepish";
}
else
{
	greek = "bull-headed";
}
}

else if (month == 5)
{
if (day <= 20)
{
	greek = "bull-headed";
}
else
{
	greek = "cloned";
}
}

else if (month == 6)
{
if (day <= 21)
{
	greek = "cloned";
}
else
{
	greek = "crabby";
}
}

else if (month == 7)
{
if (day <= 22)
{
	greek = "crabby";
}
else
{
	greek = "lion-hearted";
}
}

else if (month == 8)
{
if (day <= 22)
{
	greek = "lion-hearted";
}
else
{
	greek = "virginal";
}
}

else if (month == 9)
{
if (day <= 21)
{
	greek = "virginal";
}
else
{
	greek = "balanced";
}
}

else if (month == 10)
{
if (day <= 20)
{
	greek = "balanced";
}
else
{
	greek = "venomous";
}
}

else if (month == 11)
{
if (day <= 21)
{
	greek = "venomous";
}
else
{
	greek = "deft";
}
}

else if (month == 12)
{
if (day <= 21)
{
	greek = "deft";
}
else
{
	greek = "caprine";
}
}

if (greek == "caprine")
{
	greek1 = "Capricorn";
}
else if (greek == "aquatic")
{
	greek1 = "Aquarius";
}
else if (greek == "fishy")
{
	greek1 = "Pisces";
}
else if (greek == "sheepish")
{
	greek1 = "Aries";
}
else if (greek == "bull-headed")
{
	greek1 = "Taurus";
}
else if (greek == "cloned")
{
	greek1 = "Gemini";
}
else if (greek == "crabby")
{
	greek1 = "Cancer";
}
else if (greek == "lion-hearted")
{
	greek1 = "Leo";
}
else if (greek == "virginal")
{
	greek1 = "Virgo";
}
else if (greek == "balanced")
{
	greek1 = "Libra";
}
else if (greek == "venomous")
{
	greek1 = "Scorpio";
}
else if (greek == "deft")
{
	greek1 = "Sagitarius";
}	

localStorage.setItem("storedName", name);
localStorage.setItem("storedGen", gen1);
localStorage.setItem("storedGreek", greek1);
localStorage.setItem("storedChinese", chinese);

	
//construct object here
function Person() {
	this.personName = name;
    this.generation = gen1;
    this.greekSign = greek1;
    this.chineseSign = chinese;
    this.type = ",  you are " + gen + " " + greek + " " + chinese + "!";
}
var user = new Person();

 document.getElementById("userType").innerHTML = user.type;
 localStorage.setItem("storedType", user.type);
}
    

    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('submit').addEventListener('click', zodiac);
    });


function displayResults(){
	document.getElementById("img").src = "images/" + localStorage.getItem("storedChinese") + ".jpg";
	document.getElementById("name").innerHTML = localStorage.getItem("storedName");
	document.getElementById("result").innerHTML = localStorage.getItem("storedType");
	document.getElementById("generation").innerHTML = localStorage.getItem("storedGen");
	document.getElementById("greekZodiac").innerHTML = localStorage.getItem("storedGreek");
	document.getElementById("chineseZodiac").innerHTML = localStorage.getItem("storedChinese");
}
