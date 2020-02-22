/*to do list:
	optional
		listed by conference table
		only displaying pickable teams in form
		LAMP
		php for processing pick
			wether client is on the clock
			writing logs (cpp output)
	necessary
		python webmaster interface
		debugging (test draft)
*/

function charToInt(Input) {
	var Char = "0123456789ABCDEFG";
	for (i = 16; i >= 0; i--) {
		if (Input == Char[i]) {
			return i;
		}
	}
}
function tlipPos(x) {
	return (charToInt(currentTlip.charAt(x)));
}
function displayErrors() {
	var string;
	var string1 = "";
	if (error == 1) {
		string1 = "<button style=\"height: 100px; width: 750px; margin-top: 40px; font-size: 25pt; font-family: arial; color: red; font-style: italic; text-transform: uppercase\" type=\"button\" onclick=\"tlipfile()\">Server error, displaying test file. Click to reconnect.</button>"
	}
	string = string1;
	return string;
}
//opacity 0.0 to 1.0
function getDisplay4Team(conference, team) {
	if (conference == 1) {
		if (team == 1) {
			return "<td style=\"color: rgb(152,1,46); background-color: rgb(203,183,120)\">Boston<br>College</td></td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(74,40,134); background-color: rgb(240,86,36)\">Clemson</td></td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(7,54,164)\">Duke</td></td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(197,183,131); background-color: rgb(102,9,20)\">Florida<br>State</td></td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(238,178,17); background-color: rgb(35,31,32)\">Georgia<br>Tech</td></td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(255,0,25)\">Louisville</td></td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(244,115,32); background-color: rgb(0,80,47)\">Miami</td></td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(153,191,229); background-color: rgb(0,40,93)\">North<br>Carolina</td></td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(204,21,20); background-color: rgb(0,0,0)\">NC<br>State</td></td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(0,45,98); background-color: rgb(203,183,119)\">Pittsburgh</td></td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(7,47,108); background-color: rgb(255,95,1)\">Syracuse</td></td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(13,50,104); background-color: rgb(253,90,30)\">Virginia</td></td>";
		}
		if (team == 13) {
			return "<td style=\"color: rgb(255,102,0); background-color: rgb(102,0,0)\">Virginia<br>Tech</td></td>";
		}
		if (team == 14) {
			return "<td style=\"color: rgb(35,31,32); background-color: rgb(155,125,55)\">Wake<br>Forest</td></td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 2) {
		if (team == 1) {
			return "<td style=\"color: rgb(0,61,124); background-color: rgb(243,128,37)\">Illinois</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(169,29,55)\">Indiana</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(255,210,3); background-color: rgb(10,9,5)\">Iowa</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(255,215,29); background-color: rgb(229,25,55)\">Maryland</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(0,51,117); background-color: rgb(255,213,29)\">Michigan</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(26,69,59)\">Michigan<br>State</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(251,170,12); background-color: rgb(136,1,31)\">Minnesota</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(238,29,35)\">Nebraska</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(67,31,129)\">Northwestern</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(204,25,28); background-color: rgb(149,156,166); border-style: solid; border-width: 5px; border-color: white\">Ohio<br>State</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(12,45,131); border-style: solid; border-width: 5px; border-color: white\">Penn<br>State</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(9,11,10); background-color: rgb(220,205,150); border-style: solid; border-width: 5px; border-color: white\">Purdue</td>";
		}
		if (team == 13) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(254,0,2); border-style: solid; border-width: 5px; border-color: white\">Rutgers</td>";
		}
		if (team == 14) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(160,0,0); border-style: solid; border-width: 5px; border-color: white\">Wisconsin</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 3) {
		if (team == 1) {
			return "<td style=\"color: rgb(254,186,75); background-color: rgb(9,72,51); border-style: solid; border-width: 5px; border-color: white\">Baylor</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(131,11,44); background-color: rgb(255,202,56); border-style: solid; border-width: 5px; border-color: white\">Iowa<br>State</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(230,18,32); background-color: rgb(0,71,153); border-style: solid; border-width: 5px; border-color: white\">Kansas</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(78,37,129); border-style: solid; border-width: 5px; border-color: white\">Kansas<br>State</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(145,1,48); border-style: solid; border-width: 5px; border-color: white\">Oklahoma</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(244,123,32); background-color: rgb(35,31,32); border-style: solid; border-width: 5px; border-color: white\">Oklahoma<br>State</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(210,107,32); border-style: solid; border-width: 5px; border-color: white\">Texas</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(77,26,121); border-style: solid; border-width: 5px; border-color: white\">TCU</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(204,0,0); border-style: solid; border-width: 5px; border-color: white\">Texas<br>Tech</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(240,179,16); background-color: rgb(1,110,179); border-style: solid; border-width: 5px; border-color: white\">West<br>Virginia</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 4) {
		if (team == 1) {
			return "<td style=\"color: rgb(12,35,75); background-color: rgb(171,5,32); border-style: solid; border-width: 5px; border-color: white\">Arizona</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(255,198,39); background-color: rgb(140,29,64); border-style: solid; border-width: 5px; border-color: white\">Arizona<br>State</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(226,180,47); background-color: rgb(11,32,65); border-style: solid; border-width: 5px; border-color: white\">California</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(207,184,123); background-color: rgb(0,0,0); border-style: solid; border-width: 5px; border-color: white\">Colorado</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(252,224,18); background-color: rgb(0,79,39); border-style: solid; border-width: 5px; border-color: white\">Oregon</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(195,69,0); border-style: solid; border-width: 5px; border-color: white\">Oregon<br>State</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(255,200,44); background-color: rgb(157,34,53); border-style: solid; border-width: 5px; border-color: white\">Southern<br>California</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(135,25,17); border-style: solid; border-width: 5px; border-color: white\">Stanford</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(253,184,39); background-color: rgb(0,125,195); border-style: solid; border-width: 5px; border-color: white\">UCLA</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(196,18,48); border-style: solid; border-width: 5px; border-color: white\">Utah</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(232,212,163); background-color: rgb(54,59,116); border-style: solid; border-width: 5px; border-color: white\">Washington</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,30,50); border-style: solid; border-width: 5px; border-color: white\">Washington<br>State</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 5) {
		if (team == 1) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(178,8,56); border-style: solid; border-width: 5px; border-color: white\">Alabama</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(157,34,53); border-style: solid; border-width: 5px; border-color: white\">Arkansas</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(243,119,54); background-color: rgb(0,42,92); border-style: solid; border-width: 5px; border-color: white\">Auburn</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(243,112,33); background-color: rgb(0,82,155); border-style: solid; border-width: 5px; border-color: white\">Florida</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(238,46,36); background-color: rgb(35,31,32); border-style: solid; border-width: 5px; border-color: white\">Georgia</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,51,160); border-style: solid; border-width: 5px; border-color: white\">Kentucky</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(254,208,35); background-color: rgb(70,29,125); border-style: solid; border-width: 5px; border-color: white\">LSU</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(28,48,98); background-color: rgb(211,31,56); border-style: solid; border-width: 5px; border-color: white\">Mississippi</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(240,239,235); background-color: rgb(102,0,0); border-style: solid; border-width: 5px; border-color: white\">Mississippi<br>State</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(241,184,45); background-color: rgb(0,0,0); border-style: solid; border-width: 5px; border-color: white\">Missouri</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,1,46); border-style: solid; border-width: 5px; border-color: white\">South<br>Carolina</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(245,130,32); border-style: solid; border-width: 5px; border-color: white\">Tennessee</td>";
		}
		if (team == 13) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(80,0,0); border-style: solid; border-width: 5px; border-color: white\">Texas<br>A&M</td>";
		}
		if (team == 14) {
			return "<td style=\"color: rgb(186,140,11); background-color: rgb(35,31,32); border-style: solid; border-width: 5px; border-color: white\">Vanderbilt</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 11) {
		if (team == 1) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(183,154,98); border-style: solid; border-width: 5px; border-color: white\">UCF</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(235,28,36); border-style: solid; border-width: 5px; border-color: white\">Cincinnati</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,15,46); border-style: solid; border-width: 5px; border-color: white\">Connecticut</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(92,56,149); background-color: rgb(255,223,27); border-style: solid; border-width: 5px; border-color: white\">East<br>Carolina</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(229,24,55); border-style: solid; border-width: 5px; border-color: white\">Houston</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(248,153,46); background-color: rgb(13,49,130); border-style: solid; border-width: 5px; border-color: white\">Memphis</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(0,27,72); background-color: rgb(178,165,121); border-style: solid; border-width: 5px; border-color: white\">Navy</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(207,196,147); background-color: rgb(0,103,71); border-style: solid; border-width: 5px; border-color: white\">South<br>Florida</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(37,78,166); background-color: rgb(205,32,39); border-style: solid; border-width: 5px; border-color: white\">SMU</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,30,50); border-style: solid; border-width: 5px; border-color: white\">Temple</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(62,170,56); background-color: rgb(0,51,0); border-style: solid; border-width: 5px; border-color: white\">Tulane</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(11,37,119); background-color: rgb(252,26,34); border-style: solid; border-width: 5px; border-color: white\">Tulsa</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 12) {
		if (team == 1) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,112,60); border-style: solid; border-width: 5px; border-color: white\">Charlotte</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(210,16,69); background-color: rgb(1,68,123); border-style: solid; border-width: 5px; border-color: white\">Florida<br>Atlantic</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(197,150,12); background-color: rgb(0,44,103); border-style: solid; border-width: 5px; border-color: white\">Florida<br>International</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(237,30,36); background-color: rgb(0,0,146); border-style: solid; border-width: 5px; border-color: white\">Louisiana<br>Tech</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(4,149,74); border-style: solid; border-width: 5px; border-color: white\">Marshall</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,102,204); border-style: solid; border-width: 5px; border-color: white\">Middle<br>Tennessee</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,133,62); border-style: solid; border-width: 5px; border-color: white\">North<br>Texas</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(147,191,235); background-color: rgb(0,43,95); border-style: solid; border-width: 5px; border-color: white\">Old<br>Dominion</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,69,124); border-style: solid; border-width: 5px; border-color: white\">Rice</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(255,193,43); background-color: rgb(0,0,0); border-style: solid; border-width: 5px; border-color: white\">Southern<br>Mississippi</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(244,195,0); background-color: rgb(30,107,82); border-style: solid; border-width: 5px; border-color: white\">UAB</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(244,121,62); background-color: rgb(0,45,98); border-style: solid; border-width: 5px; border-color: white\">UTEP</td>";
		}
		if (team == 13) {
			return "<td style=\"color: rgb(243,117,33); background-color: rgb(1,43,93); border-style: solid; border-width: 5px; border-color: white\">UTSA</td>";
		}
		if (team == 14) {
			return "<td style=\"color: rgb(172,174,172); background-color: rgb(196,2,60); border-style: solid; border-width: 5px; border-color: white\">Western<br>Kentucky</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 13) {
		if (team == 1) {
			return "<td style=\"color: rgb(211,175,126); background-color: rgb(0,0,0); border-style: solid; border-width: 5px; border-color: white\">Army</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,3,85); border-style: solid; border-width: 5px; border-color: white\">BYU</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(169,0,55); border-style: solid; border-width: 5px; border-color: white\">Massachussetts</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(201,151,0); background-color: rgb(12,35,79); border-style: solid; border-width: 5px; border-color: white\">Notre<br>Dame</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 14) {
		if (team == 1) {
			return "<td style=\"color: rgb(139,126,91); background-color: rgb(30,38,77); border-style: solid; border-width: 5px; border-color: white\">Akron</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(200,0,30); border-style: solid; border-width: 5px; border-color: white\">Ball<br>State</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(83,46,28); background-color: rgb(241,92,38); border-style: solid; border-width: 5px; border-color: white\">Bowling<br>Green</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,89,162); border-style: solid; border-width: 5px; border-color: white\">Buffalo</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(254,205,11); background-color: rgb(107,12,37); border-style: solid; border-width: 5px; border-color: white\">Central<br>Michigan</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,105,63); border-style: solid; border-width: 5px; border-color: white\">Eastern<br>Michigan</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(238,175,16); background-color: rgb(21,28,90); border-style: solid; border-width: 5px; border-color: white\">Kent<br>State</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(228,28,57); background-color: rgb(5,6,8); border-style: solid; border-width: 5px; border-color: rgb(255,255,255)\">Miami</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(220,18,76); border-style: solid; border-width: 5px; border-color: white\">Northern<br>Illinois</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(230,187,132); background-color: rgb(0,72,17); border-style: solid; border-width: 5px; border-color: white\">Ohio</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(252,210,36); background-color: rgb(12,38,116); border-style: solid; border-width: 5px; border-color: white\">Toledo</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(181,162,104); background-color: rgb(108,64,32); border-style: solid; border-width: 5px; border-color: white\">Western<br>Michigan</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 15) {
		if (team == 1) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(5,92,161); border-style: solid; border-width: 5px; border-color: white\">Air<br>Force</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(244,121,62); background-color: rgb(10,83,159); border-style: solid; border-width: 5px; border-color: white\">Boise<br>State</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(161,108,14); background-color: rgb(13,70,55); border-style: solid; border-width: 5px; border-color: white\">Colorado<br>State</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(0,44,118); background-color: rgb(196,18,48); border-style: solid; border-width: 5px; border-color: white\">Fresno<br>State</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(2,71,49); border-style: solid; border-width: 5px; border-color: white\">Hawaii</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(198,199,201); background-color: rgb(0,46,98); border-style: solid; border-width: 5px; border-color: white\">Nevada</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(209,210,212); background-color: rgb(205,16,65); border-style: solid; border-width: 5px; border-color: white\">UNLV</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(234,19,76); background-color: rgb(210,211,213); border-style: solid; border-width: 5px; border-color: white\">New<br>Mexico</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(194,48,61); border-style: solid; border-width: 5px; border-color: white\">San Diego<br>State</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(252,214,33); background-color: rgb(4,98,172); border-style: solid; border-width: 5px; border-color: white\">San Jose<br>State</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(185,181,173); background-color: rgb(17,50,87); border-style: solid; border-width: 5px; border-color: white\">Utah<br>State</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(254,197,36); background-color: rgb(82,53,40); border-style: solid; border-width: 5px; border-color: white\">Wyoming</td>";
		}
		else {
			return 0;
		}
	}
	if (conference == 16) {
		if (team == 1) {
			return "<td style=\"color: rgb(223,187,0); background-color: rgb(0,0,0); border-style: solid; border-width: 5px; border-color: white\">Appalachian<br>State</td>";
		}
		if (team == 2) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(210,32,47); border-style: solid; border-width: 5px; border-color: white\">Arkansas<br>State</td>";
		}
		if (team == 3) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,113,120); border-style: solid; border-width: 5px; border-color: white\">Coastal<br>Carolina</td>";
		}
		if (team == 4) {
			return "<td style=\"color: rgb(141,133,37); background-color: rgb(0,19,64); border-style: solid; border-width: 5px; border-color: white\">Georgia<br>Southern</td>";
		}
		if (team == 5) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,93,170); border-style: solid; border-width: 5px; border-color: white\">Georgia<br>State</td>";
		}
		if (team == 6) {
			return "<td style=\"color: rgb(0,0,0); background-color: rgb(188,155,106); border-style: solid; border-width: 5px; border-color: white\">Idaho</td>";
		}
		if (team == 7) {
			return "<td style=\"color: rgb(255,255,255); background-color: rgb(209,32,48); border-style: solid; border-width: 5px; border-color: white\">Louisiana<br>Lafayette</td>";
		}
		if (team == 8) {
			return "<td style=\"color: rgb(190,149,91); background-color: rgb(128,5,40); border-style: solid; border-width: 5px; border-color: white\">Louisiana<br>Monroe</td>";
		}
		if (team == 9) {
			return "<td style=\"color: rgb(154,152,154); background-color: rgb(137,23,26); border-style: solid; border-width: 5px; border-color: white\">New Mexico<br>State</td>";
		}
		if (team == 10) {
			return "<td style=\"color: rgb(0,32,91); background-color: rgb(191,13,62); border-style: solid; border-width: 5px; border-color: white\">South<br>Alabama</td>";
		}
		if (team == 11) {
			return "<td style=\"color: rgb(140,115,74); background-color: rgb(80,18,20); border-style: solid; border-width: 5px; border-color: white\">Texas<br>State</td>";
		}
		if (team == 12) {
			return "<td style=\"color: rgb(177,177,177); background-color: rgb(120,0,28); border-style: solid; border-width: 5px; border-color: white\">Troy</td>";
		}
		else {
			return 0;
		}
	}
}
function getName(x) {
	var temp;
	if (tlipPos(21) == x) {
		temp = currentTlip.charAt(2) + currentTlip.charAt(3) + currentTlip.charAt(4) + currentTlip.charAt(5) + currentTlip.charAt(6) + currentTlip.charAt(7) + currentTlip.charAt(8) + currentTlip.charAt(9) + currentTlip.charAt(10) + currentTlip.charAt(11) + currentTlip.charAt(12) + currentTlip.charAt(13) + currentTlip.charAt(14) + currentTlip.charAt(15) + currentTlip.charAt(16) + currentTlip.charAt(17) + currentTlip.charAt(18) + currentTlip.charAt(19) + currentTlip.charAt(20);
	}
	if (tlipPos(41) == x) {
		temp = currentTlip.charAt(22) + currentTlip.charAt(23) + currentTlip.charAt(24) + currentTlip.charAt(25) + currentTlip.charAt(26) + currentTlip.charAt(27) + currentTlip.charAt(28) + currentTlip.charAt(29) + currentTlip.charAt(30) + currentTlip.charAt(31) + currentTlip.charAt(32) + currentTlip.charAt(33) + currentTlip.charAt(34) + currentTlip.charAt(35) + currentTlip.charAt(36) + currentTlip.charAt(37) + currentTlip.charAt(38) + currentTlip.charAt(39) + currentTlip.charAt(40);
	}
	if (tlipPos(61) == x) {
		temp = currentTlip.charAt(42) + currentTlip.charAt(43) + currentTlip.charAt(44) + currentTlip.charAt(45) + currentTlip.charAt(46) + currentTlip.charAt(47) + currentTlip.charAt(48) + currentTlip.charAt(49) + currentTlip.charAt(50) + currentTlip.charAt(51) + currentTlip.charAt(52) + currentTlip.charAt(53) + currentTlip.charAt(54) + currentTlip.charAt(55) + currentTlip.charAt(56) + currentTlip.charAt(57) + currentTlip.charAt(58) + currentTlip.charAt(59) + currentTlip.charAt(60);
	}
	if (tlipPos(81) == x) {
		temp = currentTlip.charAt(62) + currentTlip.charAt(63) + currentTlip.charAt(64) + currentTlip.charAt(65) + currentTlip.charAt(66) + currentTlip.charAt(67) + currentTlip.charAt(68) + currentTlip.charAt(69) + currentTlip.charAt(70) + currentTlip.charAt(71) + currentTlip.charAt(72) + currentTlip.charAt(73) + currentTlip.charAt(74) + currentTlip.charAt(75) + currentTlip.charAt(76) + currentTlip.charAt(77) + currentTlip.charAt(78) + currentTlip.charAt(79) + currentTlip.charAt(80);
	}
	if (tlipPos(101) == x) {
		temp = currentTlip.charAt(82) + currentTlip.charAt(83) + currentTlip.charAt(84) + currentTlip.charAt(85) + currentTlip.charAt(86) + currentTlip.charAt(87) + currentTlip.charAt(88) + currentTlip.charAt(89) + currentTlip.charAt(90) + currentTlip.charAt(91) + currentTlip.charAt(92) + currentTlip.charAt(93) + currentTlip.charAt(94) + currentTlip.charAt(95) + currentTlip.charAt(96) + currentTlip.charAt(97) + currentTlip.charAt(98) + currentTlip.charAt(99) + currentTlip.charAt(100);
	}
	if (tlipPos(121) == x) {
		temp = currentTlip.charAt(102) + currentTlip.charAt(103) + currentTlip.charAt(104) + currentTlip.charAt(105) + currentTlip.charAt(106) + currentTlip.charAt(107) + currentTlip.charAt(108) + currentTlip.charAt(109) + currentTlip.charAt(110) + currentTlip.charAt(111) + currentTlip.charAt(112) + currentTlip.charAt(113) + currentTlip.charAt(114) + currentTlip.charAt(115) + currentTlip.charAt(116) + currentTlip.charAt(117) + currentTlip.charAt(118) + currentTlip.charAt(119) + currentTlip.charAt(120);
	}
	if (tlipPos(141) == x) {
		temp = currentTlip.charAt(122) + currentTlip.charAt(123) + currentTlip.charAt(124) + currentTlip.charAt(125) + currentTlip.charAt(126) + currentTlip.charAt(127) + currentTlip.charAt(128) + currentTlip.charAt(129) + currentTlip.charAt(130) + currentTlip.charAt(131) + currentTlip.charAt(132) + currentTlip.charAt(133) + currentTlip.charAt(134) + currentTlip.charAt(135) + currentTlip.charAt(136) + currentTlip.charAt(137) + currentTlip.charAt(138) + currentTlip.charAt(139) + currentTlip.charAt(140);
	}
	if (tlipPos(161) == x) {
		temp = currentTlip.charAt(142) + currentTlip.charAt(143) + currentTlip.charAt(144) + currentTlip.charAt(145) + currentTlip.charAt(146) + currentTlip.charAt(147) + currentTlip.charAt(148) + currentTlip.charAt(149) + currentTlip.charAt(150) + currentTlip.charAt(151) + currentTlip.charAt(152) + currentTlip.charAt(153) + currentTlip.charAt(154) + currentTlip.charAt(155) + currentTlip.charAt(156) + currentTlip.charAt(157) + currentTlip.charAt(158) + currentTlip.charAt(159) + currentTlip.charAt(160);
	}
	if (tlipPos(181) == x) {
		temp = currentTlip.charAt(162) + currentTlip.charAt(163) + currentTlip.charAt(164) + currentTlip.charAt(165) + currentTlip.charAt(166) + currentTlip.charAt(167) + currentTlip.charAt(168) + currentTlip.charAt(169) + currentTlip.charAt(170) + currentTlip.charAt(171) + currentTlip.charAt(172) + currentTlip.charAt(173) + currentTlip.charAt(174) + currentTlip.charAt(175) + currentTlip.charAt(176) + currentTlip.charAt(177) + currentTlip.charAt(178) + currentTlip.charAt(179) + currentTlip.charAt(180);
	}
	if (tlipPos(201) == x) {
		temp = currentTlip.charAt(182) + currentTlip.charAt(183) + currentTlip.charAt(184) + currentTlip.charAt(185) + currentTlip.charAt(186) + currentTlip.charAt(187) + currentTlip.charAt(188) + currentTlip.charAt(189) + currentTlip.charAt(190) + currentTlip.charAt(191) + currentTlip.charAt(192) + currentTlip.charAt(193) + currentTlip.charAt(194) + currentTlip.charAt(195) + currentTlip.charAt(196) + currentTlip.charAt(197) + currentTlip.charAt(198) + currentTlip.charAt(199) + currentTlip.charAt(200);
	}
	if (x == 1) {
		Owner1 = temp;
	}
	if (x == 2) {
		Owner2 = temp;
	}
	if (x == 3) {
		Owner3 = temp;
	}
	if (x == 4) {
		Owner4 = temp;
	}
	if (x == 5) {
		Owner5 = temp;
	}
	if (x == 6) {
		Owner6 = temp;
	}
	if (x == 7) {
		Owner7 = temp;
	}
	if (x == 8) {
		Owner8 = temp;
	}
	if (x == 9) {
		Owner9 = temp;
	}
	if (x == 10) {
		Owner10 = temp;
	}
}
function updateVar() {
	while (tlipPos(0) != 1) {
		location.reload();
	}
	/*if (onClock == 0) {
		onClock = 1;
		pickingForm();
	}*/
	numberOfOwners = tlipPos(1);
	getName(1);
	getName(2);
	getName(3);
	getName(4);
	getName(5);
	getName(6);
	getName(7);
	getName(8);
	getName(9);
	getName(10);
	/*if (lap > 6) {
		if ((tlipPos(202) != round) || (tlipPos(204) != pick)) {
			if ((tlipPos(202) == 1) && (tlipPos(204) == 1)) {
				alert("The Draft Has Started");
			}else{
				alert("The Pick Is In");
			}
		}
	}*/
	round = tlipPos(202);
	if (tlipPos(203) == 0) {
		pick = tlipPos(204);
	}else {
		pick = ((numberOfOwners +1) - tlipPos(204));
	}
	ownerOnClock = tlipPos(204);
	var i = 205;
	tlipO1T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO1T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO2T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO2T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO3T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO3T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO4T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO4T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO5T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO5T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO6T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO6T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO7T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO7T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO8T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO8T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO9T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO9T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	tlipO10T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
		tlipO10T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
			i += 2;
	i = 365;
	tlipC1T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T13 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC1T14 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC2T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T13 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC2T14 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC3T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC3T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC4T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC4T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC5T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T13 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC5T14 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC11T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC11T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC12T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T13 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC12T14 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC13T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC13T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC13T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC13T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC14T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC14T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC15T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC15T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
	tlipC16T1 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T2 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T3 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T4 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T5 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T6 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T7 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T8 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T9 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T10 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T11 = ((100 * tlipPos(i)) + tlipPos(i + 1));
				i += 2;
		tlipC16T12 = ((100 * tlipPos(i)) + tlipPos(i + 1));
}
function tlipfile() {
	var temp = tlipcount;
	tlipcount = (temp + 1);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			//document.getElementById("demo").innerHTML = xhttp.responseText;
			currentTlip = xhttp.responseText;
			updateVar();
		}
		if (this.readyState == 4 && this.status == 0) {
			error = 1;
			alert("Server error, displaying test file.");
			currentTlip = "1AABCDEFGHIJKLMNOPQRS1ABCDEFGHIJKLMNOPQRS2ABCDEFGHIJKLMNOPQRS3ABCDEFGHIJKLMNOPQRS4ABCDEFGHIJKLMNOPQRS5ABCDEFGHIJKLMNOPQRS6ABCDEFGHIJKLMNOPQRS7ABCDEFGHIJKLMNOPQRS8ABCDEFGHIJKLMNOPQRS9ABCDEFGHIJKLMNOPQRSA901000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
			updateVar();
		}
	}
	xhttp.open("GET", ("current.tlip?_=" + new Date().getTime()), true);
	xhttp.send();
}
function getHTML4Team(conference, team) {
	if (conference == 1) {
		if (team == 1) {
			return "Boston<br>College";
		}
		if (team == 2) {
			return "Clemson";
		}
		if (team == 3) {
			return "Duke";
		}
		if (team == 4) {
			return "Florida<br>State";
		}
		if (team == 5) {
			return "Georgia<br>Tech";
		}
		if (team == 6) {
			return "Louisville";
		}
		if (team == 7) {
			return "Miami";
		}
		if (team == 8) {
			return "North<br>Carolina";
		}
		if (team == 9) {
			return "NC<br>State";
		}
		if (team == 10) {
			return "Pittsburgh";
		}
		if (team == 11) {
			return "Syracuse";
		}
		if (team == 12) {
			return "Virginia";
		}
		if (team == 13) {
			return "Virginia<br>Tech";
		}
		if (team == 14) {
			return "Wake<br>Forest";
		}
		else {
			return 0;
		}
	}
	if (conference == 2) {
		if (team == 1) {
			return "Illinois";
		}
		if (team == 2) {
			return "Indiana";
		}
		if (team == 3) {
			return "Iowa";
		}
		if (team == 4) {
			return "Maryland";
		}
		if (team == 5) {
			return "Michigan";
		}
		if (team == 6) {
			return "Michigan<br>State";
		}
		if (team == 7) {
			return "Minnesota";
		}
		if (team == 8) {
			return "Nebraska";
		}
		if (team == 9) {
			return "Northwestern";
		}
		if (team == 10) {
			return "Ohio<br>State";
		}
		if (team == 11) {
			return "Penn<br>State";
		}
		if (team == 12) {
			return "Purdue";
		}
		if (team == 13) {
			return "Rutgers";
		}
		if (team == 14) {
			return "Wisconsin";
		}
		else {
			return 0;
		}
	}
	if (conference == 3) {
		if (team == 1) {
			return "Baylor";
		}
		if (team == 2) {
			return "Iowa<br>State";
		}
		if (team == 3) {
			return "Kansas";
		}
		if (team == 4) {
			return "Kansas<br>State";
		}
		if (team == 5) {
			return "Oklahoma";
		}
		if (team == 6) {
			return "Oklahoma<br>State";
		}
		if (team == 7) {
			return "Texas";
		}
		if (team == 8) {
			return "TCU";
		}
		if (team == 9) {
			return "Texas<br>Tech";
		}
		if (team == 10) {
			return "West<br>Virginia";
		}
		else {
			return 0;
		}
	}
	if (conference == 4) {
		if (team == 1) {
			return "Arizona";
		}
		if (team == 2) {
			return "Arizona<br>State";
		}
		if (team == 3) {
			return "California";
		}
		if (team == 4) {
			return "Colorado";
		}
		if (team == 5) {
			return "Oregon";
		}
		if (team == 6) {
			return "Oregon<br>State";
		}
		if (team == 7) {
			return "Southern<br>California";
		}
		if (team == 8) {
			return "Stanford";
		}
		if (team == 9) {
			return "UCLA";
		}
		if (team == 10) {
			return "Utah";
		}
		if (team == 11) {
			return "Washington";
		}
		if (team == 12) {
			return "Washington<br>State";
		}
		else {
			return 0;
		}
	}
	if (conference == 5) {
		if (team == 1) {
			return "Alabama";
		}
		if (team == 2) {
			return "Arkansas";
		}
		if (team == 3) {
			return "Auburn";
		}
		if (team == 4) {
			return "Florida";
		}
		if (team == 5) {
			return "Georgia";
		}
		if (team == 6) {
			return "Kentucky";
		}
		if (team == 7) {
			return "LSU";
		}
		if (team == 8) {
			return "Mississippi";
		}
		if (team == 9) {
			return "Mississippi<br>State";
		}
		if (team == 10) {
			return "Missouri";
		}
		if (team == 11) {
			return "South<br>Carolina";
		}
		if (team == 12) {
			return "Tennessee";
		}
		if (team == 13) {
			return "Texas<br>A&M";
		}
		if (team == 14) {
			return "Vanderbilt";
		}
		else {
			return 0;
		}
	}
	if (conference == 11) {
		if (team == 1) {
			return "UCF";
		}
		if (team == 2) {
			return "Cincinnati";
		}
		if (team == 3) {
			return "Connecticut";
		}
		if (team == 4) {
			return "East<br>Carolina";
		}
		if (team == 5) {
			return "Houston";
		}
		if (team == 6) {
			return "Memphis";
		}
		if (team == 7) {
			return "Navy";
		}
		if (team == 8) {
			return "South<br>Florida";
		}
		if (team == 9) {
			return "SMU";
		}
		if (team == 10) {
			return "Temple";
		}
		if (team == 11) {
			return "Tulane";
		}
		if (team == 12) {
			return "Tulsa";
		}
		else {
			return 0;
		}
	}
	if (conference == 12) {
		if (team == 1) {
			return "Charlotte";
		}
		if (team == 2) {
			return "Florida<br>Atlantic";
		}
		if (team == 3) {
			return "Florida<br>International";
		}
		if (team == 4) {
			return "Louisiana<br>Tech";
		}
		if (team == 5) {
			return "Marshall";
		}
		if (team == 6) {
			return "Middle<br>Tennessee";
		}
		if (team == 7) {
			return "North<br>Texas";
		}
		if (team == 8) {
			return "Old<br>Dominion";
		}
		if (team == 9) {
			return "Rice";
		}
		if (team == 10) {
			return "Southern<br>Mississippi";
		}
		if (team == 11) {
			return "UAB";
		}
		if (team == 12) {
			return "UTEP";
		}
		if (team == 13) {
			return "UTSA";
		}
		if (team == 14) {
			return "Western<br>Kentucky";
		}
		else {
			return 0;
		}
	}
	if (conference == 13) {
		if (team == 1) {
			return "Army";
		}
		if (team == 2) {
			return "BYU";
		}
		if (team == 3) {
			return "Massachussetts";
		}
		if (team == 4) {
			return "Notre<br>Dame";
		}
		else {
			return 0;
		}
	}
	if (conference == 14) {
		if (team == 1) {
			return "Akron";
		}
		if (team == 2) {
			return "Ball<br>State";
		}
		if (team == 3) {
			return "Bowling<br>Green";
		}
		if (team == 4) {
			return "Buffalo";
		}
		if (team == 5) {
			return "Central<br>Michigan";
		}
		if (team == 6) {
			return "Eastern<br>Michigan";
		}
		if (team == 7) {
			return "Kent<br>State";
		}
		if (team == 8) {
			return "Miami";
		}
		if (team == 9) {
			return "Northern<br>Illinois";
		}
		if (team == 10) {
			return "Ohio";
		}
		if (team == 11) {
			return "Toledo";
		}
		if (team == 12) {
			return "Western<br>Michigan";
		}
		else {
			return 0;
		}
	}
	if (conference == 15) {
		if (team == 1) {
			return "Air<br>Force";
		}
		if (team == 2) {
			return "Boise<br>State";
		}
		if (team == 3) {
			return "Colorado<br>State";
		}
		if (team == 4) {
			return "Fresno<br>State";
		}
		if (team == 5) {
			return "Hawaii";
		}
		if (team == 6) {
			return "Nevada";
		}
		if (team == 7) {
			return "UNLV";
		}
		if (team == 8) {
			return "New<br>Mexico";
		}
		if (team == 9) {
			return "San Diego<br>State";
		}
		if (team == 10) {
			return "San Jose<br>State";
		}
		if (team == 11) {
			return "Utah<br>State";
		}
		if (team == 12) {
			return "Wyoming";
		}
		else {
			return 0;
		}
	}
	if (conference == 16) {
		if (team == 1) {
			return "Appalachian<br>State";
		}
		if (team == 2) {
			return "Arkansas<br>State";
		}
		if (team == 3) {
			return "Coastal<br>Carolina";
		}
		if (team == 4) {
			return "Georgia<br>Southern";
		}
		if (team == 5) {
			return "Georgia<br>State";
		}
		if (team == 6) {
			return "Idaho";
		}
		if (team == 7) {
			return "Louisiana<br>Lafayette";
		}
		if (team == 8) {
			return "Louisiana<br>Monroe";
		}
		if (team == 9) {
			return "New Mexico<br>State";
		}
		if (team == 10) {
			return "South<br>Alabama";
		}
		if (team == 11) {
			return "Texas<br>State";
		}
		if (team == 12) {
			return "Troy";
		}
		else {
			return 0;
		}
	}
}
function getCSS4Team(conference, team) {
	if (conference == 1) {
		if (team == 1) {
			if (tlipC1T1 == 0) {
				return "<td style=\"color: rgb(152,1,46); background-color: rgb(203,183,120)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC1T2 == 0) {
				return "<td style=\"color: rgb(74,40,134); background-color: rgb(240,86,36)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC1T3 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(7,54,164)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC1T4 == 0) {
				return "<td style=\"color: rgb(197,183,131); background-color: rgb(102,9,20)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC1T5 == 0) {
				return "<td style=\"color: rgb(238,178,17); background-color: rgb(35,31,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC1T6 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(255,0,25)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC1T7 == 0) {
				return "<td style=\"color: rgb(244,115,32); background-color: rgb(0,80,47)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC1T8 == 0) {
				return "<td style=\"color: rgb(153,191,229); background-color: rgb(0,40,93)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC1T9 == 0) {
				return "<td style=\"color: rgb(204,21,20); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC1T10 == 0) {
				return "<td style=\"color: rgb(0,45,98); background-color: rgb(203,183,119)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC1T11 == 0) {
				return "<td style=\"color: rgb(7,47,108); background-color: rgb(255,95,1)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC1T12 == 0) {
				return "<td style=\"color: rgb(13,50,104); background-color: rgb(253,90,30)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 13) {
			if (tlipC1T13 == 0) {
				return "<td style=\"color: rgb(255,102,0); background-color: rgb(102,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 14) {
			if (tlipC1T14 == 0) {
				return "<td style=\"color: rgb(35,31,32); background-color: rgb(155,125,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 2) {
		if (team == 1) {
			if (tlipC2T1 == 0) {
				return "<td style=\"color: rgb(0,61,124); background-color: rgb(243,128,37)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC2T2 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(169,29,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC2T3 == 0) {
				return "<td style=\"color: rgb(255,210,3); background-color: rgb(10,9,5)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC2T4 == 0) {
				return "<td style=\"color: rgb(255,215,29); background-color: rgb(229,25,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC2T5 == 0) {
				return "<td style=\"color: rgb(0,51,117); background-color: rgb(255,213,29)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC2T6 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(26,69,59)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC2T7 == 0) {
				return "<td style=\"color: rgb(251,170,12); background-color: rgb(136,1,31)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC2T8 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(238,29,35)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC2T9 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(67,31,129)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC2T10 == 0) {
				return "<td style=\"color: rgb(204,25,28); background-color: rgb(149,156,166)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC2T11 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(12,45,131)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC2T12 == 0) {
				return "<td style=\"color: rgb(9,11,10); background-color: rgb(220,205,150)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 13) {
			if (tlipC2T13 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(254,0,2)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 14) {
			if (tlipC2T14 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(160,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 3) {
		if (team == 1) {
			if (tlipC3T1 == 0) {
				return "<td style=\"color: rgb(254,186,75); background-color: rgb(9,72,51)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC3T2 == 0) {
				return "<td style=\"color: rgb(131,11,44); background-color: rgb(255,202,56)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC3T3 == 0) {
				return "<td style=\"color: rgb(230,18,32); background-color: rgb(0,71,153)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC3T4 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(78,37,129)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC3T5 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(145,1,48)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC3T6 == 0) {
				return "<td style=\"color: rgb(244,123,32); background-color: rgb(35,31,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC3T7 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(210,107,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC3T8 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(77,26,121)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC3T9 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(204,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC3T10 == 0) {
				return "<td style=\"color: rgb(240,179,16); background-color: rgb(1,110,179)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 4) {
		if (team == 1) {
			if (tlipC4T1 == 0) {
				return "<td style=\"color: rgb(12,35,75); background-color: rgb(171,5,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC4T2 == 0) {
				return "<td style=\"color: rgb(255,198,39); background-color: rgb(140,29,64)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC4T3 == 0) {
				return "<td style=\"color: rgb(226,180,47); background-color: rgb(11,32,65)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC4T4 == 0) {
				return "<td style=\"color: rgb(207,184,123); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC4T5 == 0) {
				return "<td style=\"color: rgb(252,224,18); background-color: rgb(0,79,39)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC4T6 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(195,69,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC4T7 == 0) {
				return "<td style=\"color: rgb(255,200,44); background-color: rgb(157,34,53)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC4T8 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(135,25,17)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC4T9 == 0) {
				return "<td style=\"color: rgb(253,184,39); background-color: rgb(0,125,195)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC4T10 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(196,18,48)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC4T10 == 0) {
				return "<td style=\"color: rgb(232,212,163); background-color: rgb(54,59,116)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC4T12 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,30,50)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 5) {
		if (team == 1) {
			if (tlipC5T1 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(178,8,56)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC5T2 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(157,34,53)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC5T3 == 0) {
				return "<td style=\"color: rgb(243,119,54); background-color: rgb(0,42,92)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC5T4 == 0) {
				return "<td style=\"color: rgb(243,112,33); background-color: rgb(0,82,155)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC5T5 == 0) {
				return "<td style=\"color: rgb(238,46,36); background-color: rgb(35,31,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC5T6 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,51,160)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC5T7 == 0) {
				return "<td style=\"color: rgb(254,208,35); background-color: rgb(70,29,125)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC5T8 == 0) {
				return "<td style=\"color: rgb(28,48,98); background-color: rgb(211,31,56)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC5T9 == 0) {
				return "<td style=\"color: rgb(240,239,235); background-color: rgb(102,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC5T10 == 0) {
				return "<td style=\"color: rgb(241,184,45); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC5T11 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,1,46)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC5T12 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(245,130,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 13) {
			if (tlipC5T13 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(80,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 14) {
			if (tlipC5T14 == 0) {
				return "<td style=\"color: rgb(186,140,11); background-color: rgb(35,31,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 11) {
		if (team == 1) {
			if (tlipC11T1 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(183,154,98)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC11T2 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(235,28,36)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC11T3 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,15,46)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC11T4 == 0) {
				return "<td style=\"color: rgb(92,56,149); background-color: rgb(255,223,27)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC11T5 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(229,24,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC11T6 == 0) {
				return "<td style=\"color: rgb(248,153,46); background-color: rgb(13,49,130)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC11T7 == 0) {
				return "<td style=\"color: rgb(0,27,72); background-color: rgb(178,165,121)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC11T8 == 0) {
				return "<td style=\"color: rgb(207,196,147); background-color: rgb(0,103,71)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC11T9 == 0) {
				return "<td style=\"color: rgb(37,78,166); background-color: rgb(205,32,39)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC11T10 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(152,30,50)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC11T11 == 0) {
				return "<td style=\"color: rgb(62,170,56); background-color: rgb(0,51,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC11T12 == 0) {
				return "<td style=\"color: rgb(11,37,119); background-color: rgb(252,26,34)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 12) {
		if (team == 1) {
			if (tlipC12T1 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,112,60)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC12T2 == 0) {
				return "<td style=\"color: rgb(210,16,69); background-color: rgb(1,68,123)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC12T3 == 0) {
				return "<td style=\"color: rgb(197,150,12); background-color: rgb(0,44,103)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC12T4 == 0) {
				return "<td style=\"color: rgb(237,30,36); background-color: rgb(0,0,146)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC12T5 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(4,149,74)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC12T6 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,102,204)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC12T7 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,133,62)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC12T8 == 0) {
				return "<td style=\"color: rgb(147,191,235); background-color: rgb(0,43,95)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC12T9 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,69,124)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC12T10 == 0) {
				return "<td style=\"color: rgb(255,193,43); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC12T11 == 0) {
				return "<td style=\"color: rgb(244,195,0); background-color: rgb(30,107,82)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC12T12 == 0) {
				return "<td style=\"color: rgb(244,121,62); background-color: rgb(0,45,98)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 13) {
			if (tlipC12T13 == 0) {
				return "<td style=\"color: rgb(243,117,33); background-color: rgb(1,43,93)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 14) {
			if (tlipC12T14 == 0) {
				return "<td style=\"color: rgb(172,174,172); background-color: rgb(196,2,60)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 13) {
		if (team == 1) {
			if (tlipC13T1 == 0) {
				return "<td style=\"color: rgb(211,175,126); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC13T2 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,3,85)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC13T3 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(169,0,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC13T4 == 0) {
				return "<td style=\"color: rgb(201,151,0); background-color: rgb(12,35,79)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 14) {
		if (team == 1) {
			if (tlipC14T1 == 0) {
				return "<td style=\"color: rgb(139,126,91); background-color: rgb(30,38,77)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC14T2 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(200,0,30)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC14T3 == 0) {
				return "<td style=\"color: rgb(62,34,21); background-color: rgb(241,92,38)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC14T4 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,89,162)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC14T5 == 0) {
				return "<td style=\"color: rgb(254,205,11); background-color: rgb(107,12,37)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC14T6 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,105,63)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC14T7 == 0) {
				return "<td style=\"color: rgb(238,175,16); background-color: rgb(21,28,90)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC14T8 == 0) {
				return "<td style=\"color: rgb(228,28,57); background-color: rgb(5,6,8)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC14T9 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(220,18,76)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC14T10 == 0) {
				return "<td style=\"color: rgb(230,187,132); background-color: rgb(0,72,17)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC14T11 == 0) {
				return "<td style=\"color: rgb(252,210,36); background-color: rgb(12,38,116)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC14T12 == 0) {
				return "<td style=\"color: rgb(181,162,104); background-color: rgb(108,64,32)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 15) {
		if (team == 1) {
			if (tlipC15T1 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(5,92,161)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC15T2 == 0) {
				return "<td style=\"color: rgb(244,121,62); background-color: rgb(10,83,159)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC15T3 == 0) {
				return "<td style=\"color: rgb(161,108,14); background-color: rgb(13,70,55)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC15T4 == 0) {
				return "<td style=\"color: rgb(0,44,118); background-color: rgb(196,18,48)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC15T5 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(2,71,49)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC15T6 == 0) {
				return "<td style=\"color: rgb(198,199,201); background-color: rgb(0,46,98)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC15T7 == 0) {
				return "<td style=\"color: rgb(209,210,212); background-color: rgb(205,16,65)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC15T8 == 0) {
				return "<td style=\"color: rgb(234,19,76); background-color: rgb(210,211,213)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC15T9 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(194,48,61)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC15T10 == 0) {
				return "<td style=\"color: rgb(252,214,33); background-color: rgb(4,98,172)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC15T11 == 0) {
				return "<td style=\"color: rgb(185,181,173); background-color: rgb(17,50,87)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC15T12 == 0) {
				return "<td style=\"color: rgb(254,197,36); background-color: rgb(82,53,40)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
	if (conference == 16) {
		if (team == 1) {
			if (tlipC16T1 == 0) {
				return "<td style=\"color: rgb(223,187,0); background-color: rgb(0,0,0)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 2) {
			if (tlipC16T2 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(210,32,47)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 3) {
			if (tlipC16T3 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(0,113,120)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 4) {
			if (tlipC16T4 == 0) {
				return "<td style=\"color: rgb(141,133,37); background-color: rgb(0,19,64)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 5) {
			if (tlipC16T5 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(0,93,170)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 6) {
			if (tlipC16T6 == 0) {
				return "<td style=\"color: rgb(0,0,0); background-color: rgb(188,155,106)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 7) {
			if (tlipC16T7 == 0) {
				return "<td style=\"color: rgb(255,255,255); background-color: rgb(209,32,48)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 8) {
			if (tlipC16T8 == 0) {
				return "<td style=\"color: rgb(190,149,91); background-color: rgb(128,5,40)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 9) {
			if (tlipC16T9 == 0) {
				return "<td style=\"color: rgb(154,152,154); background-color: rgb(137,23,26)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 10) {
			if (tlipC16T10 == 0) {
				return "<td style=\"color: rgb(0,32,91); background-color: rgb(191,13,62)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 11) {
			if (tlipC16T11 == 0) {
				return "<td style=\"color: rgb(140,115,74); background-color: rgb(80,18,20)\">";
			}
			else {
				return pickedCSS;
			}
		}
		if (team == 12) {
			if (tlipC16T12 == 0) {
				return "<td style=\"color: rgb(177,177,177); background-color: rgb(120,0,28)\">";
			}
			else {
				return pickedCSS;
			}
		}
	}
}
function getConferenceBlock(conference) {
	var numberOfTeamsInConference;
	if (conference == 1) {
		numberOfTeamsInConference = 14;
	}
	else if (conference == 2) {
		numberOfTeamsInConference = 14;
	}
	else if (conference == 3) {
		numberOfTeamsInConference = 10;
	}
	else if (conference == 4) {
		numberOfTeamsInConference = 12;
	}
	else if (conference == 5) {
		numberOfTeamsInConference = 14;
	}
	else if (conference == 11) {
		numberOfTeamsInConference = 12;
	}
	else if (conference == 12) {
		numberOfTeamsInConference = 14;
	}
	else if (conference == 13) {
		numberOfTeamsInConference = 4;
	}
	else if (conference == 14) {
		numberOfTeamsInConference = 12;
	}
	else if (conference == 15) {
		numberOfTeamsInConference = 12;
	}
	else if (conference == 16) {
		numberOfTeamsInConference = 12;
	}
	var string1 = "";
	var string2 = "";
	var string3 = "";
	var string4 = "";
	var string5 = "";
	var string6 = "";
	var string7 = "";
	var string8 = "";
	var string9 = "";
	var string10 = "";
	var string11 = "";
	var string12 = "";
	var string13 = "";
	var string14 = "";
	if (numberOfTeamsInConference > 0) {
		string1 = (getCSS4Team(conference, 1) + getHTML4Team(conference, 1) + "</td>");
		if (numberOfTeamsInConference > 1) {
			string2 = (getCSS4Team(conference, 2) + getHTML4Team(conference, 2) + "</td>");
			if (numberOfTeamsInConference > 2)  {
				string3 = (getCSS4Team(conference, 3) + getHTML4Team(conference, 3) + "</td>");
				if (numberOfTeamsInConference > 3) {
					string4 = (getCSS4Team(conference, 4) + getHTML4Team(conference, 4) + "</td>");
					if (numberOfTeamsInConference > 4) {
						string5 = (getCSS4Team(conference, 5) + getHTML4Team(conference, 5) + "</td>");
						if (numberOfTeamsInConference > 5) {
							string6 = (getCSS4Team(conference, 6) + getHTML4Team(conference, 6) + "</td>");
							if (numberOfTeamsInConference > 6) {
								string7 = (getCSS4Team(conference, 7) + getHTML4Team(conference, 7) + "</td>");
								if (numberOfTeamsInConference > 7) {
									string8 = (getCSS4Team(conference, 8) + getHTML4Team(conference, 8) + "</td>");
									if (numberOfTeamsInConference > 8) {
										string9 = (getCSS4Team(conference, 9) + getHTML4Team(conference, 9) + "</td>");
										if (numberOfTeamsInConference > 9) {
											string10 = (getCSS4Team(conference, 10) + getHTML4Team(conference, 10) + "</td>");
											if (numberOfTeamsInConference > 10) {
												string11 = (getCSS4Team(conference, 11) + getHTML4Team(conference, 11) + "</td>");
												if (numberOfTeamsInConference > 11) {
													string12 = (getCSS4Team(conference, 12) + getHTML4Team(conference, 12) + "</td>");
													if (numberOfTeamsInConference > 12) {
														string13 = (getCSS4Team(conference, 13) + getHTML4Team(conference, 13) + "</td>");
														if (numberOfTeamsInConference > 13) {
															string14 = (getCSS4Team(conference, 14) + getHTML4Team(conference, 14) + "</td>");
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (string1 +string2 +string3 +string4 +string5 +string6 +string7 +string8 +string9 +string10 +string11 +string12 +string13 +string14);
}
function setUpDate() {
	var date = new Date();
	var dateHours = date.getHours();
	var dateMinutes = date.getMinutes();
	var dateSeconds = date.getSeconds();
	if (dateMinutes < 10) {
		var temp = charToInt(dateMinutes);
		dateMinutes = "0" + temp;
	}
	if (dateSeconds < 10) {
		var temp = charToInt(dateSeconds);
		dateSeconds = "0" + temp;
	}
}
function sendPick() {
	//substitute
	var httpc = new XMLHttpRequest(); // simplified for clarity
    var url = "processPick.php?_test=0&f1=" + form1 + "&f2=" + form2 + "&uzer=" +userNumber + "&pazzword=" + password;//here
    console.log("url");
    console.log(url);
	httpc.open("GET", url, true); // sending as POST
	//var data = "form1=" + form1 + "&form2" + form2;
	/*var data = {
		f1: form1,
		f2: form2,
		uzer: userNumber,
		pazzword: password
        };*/

    //httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //httpc.setRequestHeader("Content-Length", data.length); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
			if (httpc.responseText == "incorrect password") {
				password = prompt("Enter User " + userNumber + " Password: ", "");
				while (password == "") {
					password = prompt("Enter User " + userNumber + " Password: ", "");
				}
			}
			console.log("What was returned by processPick.php");
			console.log(httpc.responseText); // some processing here, or whatever you want to do with the response
        }
    }
    httpc.send();
}
function formfunction() {
	if (pickConferenceSet == 0) {
		try {
			form1 = parseInt(document.querySelector('input[name="pickConference"]:checked').value);
		}
		catch(err) {
			return "error";
		}
		//form1 = parseInt(document.querySelector('input[name="pickConference"]:checked').value);
		pickConferenceSet = 1;
		pickingForm();
	}
	else if (pickConferenceSet == 1) {
		form2 = parseInt(document.querySelector('input[name="pickTeam"]:checked').value);
		displayForm("<br><br><p style=\"text-align: center\" >Submitted.</p>");
		sendPick();
		pickConferenceSet = 2;
	}
}
function getPickableTeams() {
	//substitute
		var string;
			var string1  = "";
			var string2  = "";
			var string3  = "";
			var string4  = "";
			var string5  = "";
			var string6  = "";
			var string7  = "";
			var string8  = "";
			var string9  = "";
			var string10  = "";
			var string11  = "";
			var string12  = "";
			var string13  = "";
			var string14  = "";
		if (form1 == 1) {
			if (tlipC1T1 == 0) {
				string1 = getHTML4Team(1,1);
			}
			if (tlipC1T2 == 0) {
				string2 = getHTML4Team(1,2);
			}
			if (tlipC1T3 == 0) {
				string3 = getHTML4Team(1,3);
			}
			if (tlipC1T4 == 0) {
				string4 = getHTML4Team(1,4);
			}
			if (tlipC1T5 == 0) {
				string5 = getHTML4Team(1,5);
			}
			if (tlipC1T6 == 0) {
				string6 = getHTML4Team(1,6);
			}
			if (tlipC1T7 == 0) {
				string7 = getHTML4Team(1,7);
			}
			if (tlipC1T8 == 0) {
				string8 = getHTML4Team(1,8);
			}
			if (tlipC1T9 == 0) {
				string9 = getHTML4Team(1,9);
			}
			if (tlipC1T10 == 0) {
				string10 = getHTML4Team(1,10);
			}
			if (tlipC1T11 == 0) {
				string11 = getHTML4Team(1,11);
			}
			if (tlipC1T12 == 0) {
				string12 = getHTML4Team(1,12);
			}
			if (tlipC1T13 == 0) {
				string13 = getHTML4Team(1,13);
			}
			if (tlipC1T14 == 0) {
				string14 = getHTML4Team(1,14);
			}
		}else if (form1 == 2) {
			if (tlipC2T1 == 0) {
				string1 = getHTML4Team(2,1);
			}
			if (tlipC2T2 == 0) {
				string2 = getHTML4Team(2,2);
			}
			if (tlipC2T3 == 0) {
				string3 = getHTML4Team(2,3);
			}
			if (tlipC2T4 == 0) {
				string4 = getHTML4Team(2,4);
			}
			if (tlipC2T5 == 0) {
				string5 = getHTML4Team(2,5);
			}
			if (tlipC2T6 == 0) {
				string6 = getHTML4Team(2,6);
			}
			if (tlipC2T7 == 0) {
				string7 = getHTML4Team(2,7);
			}
			if (tlipC2T8 == 0) {
				string8 = getHTML4Team(2,8);
			}
			if (tlipC2T9 == 0) {
				string9 = getHTML4Team(2,9);
			}
			if (tlipC2T10 == 0) {
				string10 = getHTML4Team(2,10);
			}
			if (tlipC2T11 == 0) {
				string11 = getHTML4Team(2,11);
			}
			if (tlipC2T12 == 0) {
				string12 = getHTML4Team(2,12);
			}
			if (tlipC2T13 == 0) {
				string13 = getHTML4Team(2,13);
			}
			if (tlipC2T14 == 0) {
				string14 = getHTML4Team(2,14);
			}
		}else if (form1 == 3) {
			if (tlipC3T1 == 0) {
				string1 = getHTML4Team(3,1);
			}
			if (tlipC3T2 == 0) {
				string2 = getHTML4Team(3,2);
			}
			if (tlipC3T3 == 0) {
				string3 = getHTML4Team(3,3);
			}
			if (tlipC3T4 == 0) {
				string4 = getHTML4Team(3,4);
			}
			if (tlipC3T5 == 0) {
				string5 = getHTML4Team(3,5);
			}
			if (tlipC3T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC3T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC3T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC3T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC3T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
		}else if (form1 == 4) {
			if (tlipC4T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC4T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC4T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC4T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC4T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC4T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC4T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC4T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC4T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC4T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC4T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC4T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
		}else if (form1 == 5) {
			if (tlipC5T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC5T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC5T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC5T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC5T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC5T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC5T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC5T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC5T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC5T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC5T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC5T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
			if (tlipC5T13 == 0) {
				string13 = getHTML4Team(form1,13);
			}
			if (tlipC5T14 == 0) {
				string14 = getHTML4Team(form1,14);
			}
		}else if (form1 == 11) {
			if (tlipC11T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC11T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC11T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC11T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC11T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC11T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC11T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC11T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC11T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC11T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC11T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC11T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
		}else if (form1 == 12) {
			if (tlipC12T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC12T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC12T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC12T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC12T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC12T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC12T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC12T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC12T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC12T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC12T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC12T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
			if (tlipC12T13 == 0) {
				string13 = getHTML4Team(form1,13);
			}
			if (tlipC12T14 == 0) {
				string14 = getHTML4Team(form1,14);
			}
		}else if (form1 == 13) {
			if (tlipC13T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC13T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC13T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC13T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
		}else if (form1 == 14) {
			if (tlipC14T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC14T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC14T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC14T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC14T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC14T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC14T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC14T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC14T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC14T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC14T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC14T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
		}else if (form1 == 15) {
			if (tlipC15T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC15T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC15T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC15T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC15T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC15T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC15T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC15T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC15T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC15T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC15T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC15T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
		}else if (form1 == 16) {
			if (tlipC16T1 == 0) {
				string1 = getHTML4Team(form1,1);
			}
			if (tlipC16T2 == 0) {
				string2 = getHTML4Team(form1,2);
			}
			if (tlipC16T3 == 0) {
				string3 = getHTML4Team(form1,3);
			}
			if (tlipC16T4 == 0) {
				string4 = getHTML4Team(form1,4);
			}
			if (tlipC16T5 == 0) {
				string5 = getHTML4Team(form1,5);
			}
			if (tlipC16T6 == 0) {
				string6 = getHTML4Team(form1,6);
			}
			if (tlipC16T7 == 0) {
				string7 = getHTML4Team(form1,7);
			}
			if (tlipC16T8 == 0) {
				string8 = getHTML4Team(form1,8);
			}
			if (tlipC16T9 == 0) {
				string9 = getHTML4Team(form1,9);
			}
			if (tlipC16T10 == 0) {
				string10 = getHTML4Team(form1,10);
			}
			if (tlipC16T11 == 0) {
				string11 = getHTML4Team(form1,11);
			}
			if (tlipC16T12 == 0) {
				string12 = getHTML4Team(form1,12);
			}
		}
		
		
		string = (getPickableTeamsA(string1, "1")) + (getPickableTeamsA(string2, "2")) + (getPickableTeamsA(string3, "3")) + (getPickableTeamsA(string4, "4")) + (getPickableTeamsA(string5, "5")) + (getPickableTeamsA(string6, "6")) + (getPickableTeamsA(string7, "7")) + (getPickableTeamsA(string8, "8")) + (getPickableTeamsA(string9, "9")) + (getPickableTeamsA(string10, "10")) + (getPickableTeamsA(string11, "11")) + (getPickableTeamsA(string12, "12")) + (getPickableTeamsA(string13, "13")) + (getPickableTeamsA(string14, "14"));
		return string;
	
}
function getPickableTeamsA(string, string1) {
	if (string == "") {
		return "";
	}
	else {
		var temp = string.replace("<br>", " ");
		string = temp
		var string2 = "<input type=\"radio\" name=\"pickTeam\" id=\"pickTeam\" value=\"" + string1 + "\">" + string + "<br>";
		return string2;
	}
}
function pickingForm() {
	var string;
	var string1 = "";
	var string2 = "";
	if (pickConferenceSet == 0) {
		//string1 = "<br><br>Select the conference:\n<input type=\"text\" id=\"pickConference\" value=" + 0 + ">";
		string1 = "<br><br><fieldset style=\"width: 145px\"><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"1\"> ACC<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"2\"> B1G<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"3\"> Big 12<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"4\"> PAC 12<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"5\"> SEC<br> <input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"11\"> American<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"12\"> Conference USA<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"13\"> FBS Independents<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"14\"> MAC<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"15\"> Mountain West<br><input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"16\"> Sun Belt<br>";
		string2 = "<button style=\"type=\"button\" onclick=\"formfunction()\">Next.</button></fieldset>";

	
	}
	else {
		string1 = "<br><br><fieldset style=\"width: 160px\">" + getPickableTeams();
		//<input type=\"radio\" name=\"pickConference\" id=\"pickConference\" value=\"1\"> ACC<br>";
		string2 = "<button style=\"type=\"button\" onclick=\"formfunction()\">Next.</button></fieldset>"
	}

	
	string = string1 +string2;
	displayForm(string);
}
function displayForm(string) {
	var divform = document.getElementById("divform");
	divform.innerHTML = string;
}
function teamCode(conference, team){
	var string = "";;
	if (conference == 0) {
		return "<td>team</td>"
	}
	//getDisplay4Team(conference, team);
	string = getDisplay4Team(conference, team);
	return string;
}
function getHundreds(value){
	if (value >= 1600) {
		return 16;
	}
	if (value >= 1500) {
		return 15;
	}
	if (value >= 1400) {
		return 14;
	}
	if (value >= 1300) {
		return 13;
	}
	if (value >= 1200) {
		return 12;
	}
	if (value >= 1100) {
		return 11;
	}
	if (value >= 1000) {
		return 10;
	}
	if (value >= 900) {
		return 9;
	}
	if (value >= 800) {
		return 8;
	}
	if (value >= 700) {
		return 7;
	}
	if (value >= 600) {
		return 6;
	}
	if (value >= 500) {
		return 5;
	}
	if (value >= 400) {
		return 4;
	}
	if (value >= 300) {
		return 3;
	}
	if (value >= 200) {
		return 2;
	}
	if (value >= 100) {
		return 1;
	}
	return 0;
}
function firstTableRow(owner, part) {
	//either part
			var a 
				var b;
			var c;
				var d;
			var e;
				var f;
			var g;
				var h;
			var i;
				var j;
			var k;
				var l;
			var m;
				var n;
			var o;
				var p;
			if (owner == 1) {
				//tlipO1T1
					a = getHundreds(tlipO1T1);
					b = (tlipO1T1 - (100*getHundreds(tlipO1T1)));
				//tlipO1T2
					c = getHundreds(tlipO1T2);
					d = (tlipO1T2 - (100*getHundreds(tlipO1T2)));
				//tlipO1T3
					e = getHundreds(tlipO1T3);
					f = (tlipO1T3 - (100*getHundreds(tlipO1T3)));
				//tlipO1T4
					g = getHundreds(tlipO1T4);
					h = (tlipO1T4 - (100*getHundreds(tlipO1T4)));
				//tlipO1T5
					i = getHundreds(tlipO1T5);
					j = (tlipO1T5 - (100*getHundreds(tlipO1T5)));
				//tlipO1T6
					k = getHundreds(tlipO1T6);
					l = (tlipO1T6 - (100*getHundreds(tlipO1T6)));
				//tlipO1T7
					m = getHundreds(tlipO1T7);
					n = (tlipO1T7 - (100*getHundreds(tlipO1T7)));
				//tlipO1T8
					o = getHundreds(tlipO1T8);
					p = (tlipO1T8 - (100*getHundreds(tlipO1T8)));
			}
			if (owner == 2) {
				//tlipO2T1
					a = getHundreds(tlipO2T1);
					b = (tlipO2T1 - (100*getHundreds(tlipO2T1)));
				//tlipO2T2
					c = getHundreds(tlipO2T2);
					d = (tlipO2T2 - (100*getHundreds(tlipO2T2)));
				//tlipO2T3
					e = getHundreds(tlipO2T3);
					f = (tlipO2T3 - (100*getHundreds(tlipO2T3)));
				//tlipO2T4
					g = getHundreds(tlipO2T4);
					h = (tlipO2T4 - (100*getHundreds(tlipO2T4)));
				//tlipO2T5
					i = getHundreds(tlipO2T5);
					j = (tlipO2T5 - (100*getHundreds(tlipO2T5)));
				//tlipO2T6
					k = getHundreds(tlipO2T6);
					l = (tlipO2T6 - (100*getHundreds(tlipO2T6)));
				//tlipO2T7
					m = getHundreds(tlipO2T7);
					n = (tlipO2T7 - (100*getHundreds(tlipO2T7)));
				//tlipO2T8
					o = getHundreds(tlipO2T8);
					p = (tlipO2T8 - (100*getHundreds(tlipO2T8)));
			}
			if (owner == 3) {
				//tlipO3T1
					a = getHundreds(tlipO3T1);
					b = (tlipO3T1 - (100*getHundreds(tlipO3T1)));
				//tlipO3T2
					c = getHundreds(tlipO3T2);
					d = (tlipO3T2 - (100*getHundreds(tlipO3T2)));
				//tlipO3T3
					e = getHundreds(tlipO3T3);
					f = (tlipO3T3 - (100*getHundreds(tlipO3T3)));
				//tlipO3T4
					g = getHundreds(tlipO3T4);
					h = (tlipO3T4 - (100*getHundreds(tlipO3T4)));
				//tlipO3T5
					i = getHundreds(tlipO3T5);
					j = (tlipO3T5 - (100*getHundreds(tlipO3T5)));
				//tlipO3T6
					k = getHundreds(tlipO3T6);
					l = (tlipO3T6 - (100*getHundreds(tlipO3T6)));
				//tlipO3T7
					m = getHundreds(tlipO3T7);
					n = (tlipO3T7 - (100*getHundreds(tlipO3T7)));
				//tlipO3T8
					o = getHundreds(tlipO3T8);
					p = (tlipO3T8 - (100*getHundreds(tlipO3T8)));
			}
			if (owner == 4) {
				//tlipO4T1
					a = getHundreds(tlipO4T1);
					b = (tlipO4T1 - (100*getHundreds(tlipO4T1)));
				//tlipO4T2
					c = getHundreds(tlipO4T2);
					d = (tlipO4T2 - (100*getHundreds(tlipO4T2)));
				//tlipO4T3
					e = getHundreds(tlipO4T3);
					f = (tlipO4T3 - (100*getHundreds(tlipO4T3)));
				//tlipO4T4
					g = getHundreds(tlipO4T4);
					h = (tlipO4T4 - (100*getHundreds(tlipO4T4)));
				//tlipO4T5
					i = getHundreds(tlipO4T5);
					j = (tlipO4T5 - (100*getHundreds(tlipO4T5)));
				//tlipO4T6
					k = getHundreds(tlipO4T6);
					l = (tlipO4T6 - (100*getHundreds(tlipO4T6)));
				//tlipO4T7
					m = getHundreds(tlipO4T7);
					n = (tlipO4T7 - (100*getHundreds(tlipO4T7)));
				//tlipO4T8
					o = getHundreds(tlipO4T8);
					p = (tlipO4T8 - (100*getHundreds(tlipO4T8)));
			}
			if (owner == 5) {
				//tlipO5T1
					a = getHundreds(tlipO5T1);
					b = (tlipO5T1 - (100*getHundreds(tlipO5T1)));
				//tlipO5T2
					c = getHundreds(tlipO5T2);
					d = (tlipO5T2 - (100*getHundreds(tlipO5T2)));
				//tlipO5T3
					e = getHundreds(tlipO5T3);
					f = (tlipO5T3 - (100*getHundreds(tlipO5T3)));
				//tlipO5T4
					g = getHundreds(tlipO5T4);
					h = (tlipO5T4 - (100*getHundreds(tlipO5T4)));
				//tlipO5T5
					i = getHundreds(tlipO5T5);
					j = (tlipO5T5 - (100*getHundreds(tlipO5T5)));
				//tlipO5T6
					k = getHundreds(tlipO5T6);
					l = (tlipO5T6 - (100*getHundreds(tlipO5T6)));
				//tlipO5T7
					m = getHundreds(tlipO5T7);
					n = (tlipO5T7 - (100*getHundreds(tlipO5T7)));
				//tlipO5T8
					o = getHundreds(tlipO5T8);
					p = (tlipO5T8 - (100*getHundreds(tlipO5T8)));
			}
			if (owner == 6) {
				//tlipO6T1
					a = getHundreds(tlipO6T1);
					b = (tlipO6T1 - (100*getHundreds(tlipO6T1)));
				//tlipO6T2
					c = getHundreds(tlipO6T2);
					d = (tlipO6T2 - (100*getHundreds(tlipO6T2)));
				//tlipO6T3
					e = getHundreds(tlipO6T3);
					f = (tlipO6T3 - (100*getHundreds(tlipO6T3)));
				//tlipO6T4
					g = getHundreds(tlipO6T4);
					h = (tlipO6T4 - (100*getHundreds(tlipO6T4)));
				//tlipO6T5
					i = getHundreds(tlipO6T5);
					j = (tlipO6T5 - (100*getHundreds(tlipO6T5)));
				//tlipO6T6
					k = getHundreds(tlipO6T6);
					l = (tlipO6T6 - (100*getHundreds(tlipO6T6)));
				//tlipO6T7
					m = getHundreds(tlipO6T7);
					n = (tlipO6T7 - (100*getHundreds(tlipO6T7)));
				//tlipO6T8
					o = getHundreds(tlipO6T8);
					p = (tlipO6T8 - (100*getHundreds(tlipO6T8)));
			}
			if (owner == 7) {
				//tlipO7T1
					a = getHundreds(tlipO7T1);
					b = (tlipO7T1 - (100*getHundreds(tlipO7T1)));
				//tlipO7T2
					c = getHundreds(tlipO7T2);
					d = (tlipO7T2 - (100*getHundreds(tlipO7T2)));
				//tlipO7T3
					e = getHundreds(tlipO7T3);
					f = (tlipO7T3 - (100*getHundreds(tlipO7T3)));
				//tlipO7T4
					g = getHundreds(tlipO7T4);
					h = (tlipO7T4 - (100*getHundreds(tlipO7T4)));
				//tlipO7T5
					i = getHundreds(tlipO7T5);
					j = (tlipO7T5 - (100*getHundreds(tlipO7T5)));
				//tlipO7T6
					k = getHundreds(tlipO7T6);
					l = (tlipO7T6 - (100*getHundreds(tlipO7T6)));
				//tlipO7T7
					m = getHundreds(tlipO7T7);
					n = (tlipO7T7 - (100*getHundreds(tlipO7T7)));
				//tlipO7T8
					o = getHundreds(tlipO7T8);
					p = (tlipO7T8 - (100*getHundreds(tlipO7T8)));
			}
			if (owner == 8) {
				//tlipO8T1
					a = getHundreds(tlipO8T1);
					b = (tlipO8T1 - (100*getHundreds(tlipO8T1)));
				//tlipO8T2
					c = getHundreds(tlipO8T2);
					d = (tlipO8T2 - (100*getHundreds(tlipO8T2)));
				//tlipO8T3
					e = getHundreds(tlipO8T3);
					f = (tlipO8T3 - (100*getHundreds(tlipO8T3)));
				//tlipO8T4
					g = getHundreds(tlipO8T4);
					h = (tlipO8T4 - (100*getHundreds(tlipO8T4)));
				//tlipO8T5
					i = getHundreds(tlipO8T5);
					j = (tlipO8T5 - (100*getHundreds(tlipO8T5)));
				//tlipO8T6
					k = getHundreds(tlipO8T6);
					l = (tlipO8T6 - (100*getHundreds(tlipO8T6)));
				//tlipO8T7
					m = getHundreds(tlipO8T7);
					n = (tlipO8T7 - (100*getHundreds(tlipO8T7)));
				//tlipO8T8
					o = getHundreds(tlipO8T8);
					p = (tlipO8T8 - (100*getHundreds(tlipO8T8)));
			}
			if (owner == 9) {
				//tlipO9T1
					a = getHundreds(tlipO9T1);
					b = (tlipO9T1 - (100*getHundreds(tlipO9T1)));
				//tlipO9T2
					c = getHundreds(tlipO9T2);
					d = (tlipO9T2 - (100*getHundreds(tlipO9T2)));
				//tlipO9T3
					e = getHundreds(tlipO9T3);
					f = (tlipO9T3 - (100*getHundreds(tlipO9T3)));
				//tlipO9T4
					g = getHundreds(tlipO9T4);
					h = (tlipO9T4 - (100*getHundreds(tlipO9T4)));
				//tlipO9T5
					i = getHundreds(tlipO9T5);
					j = (tlipO9T5 - (100*getHundreds(tlipO9T5)));
				//tlipO9T6
					k = getHundreds(tlipO9T6);
					l = (tlipO9T6 - (100*getHundreds(tlipO9T6)));
				//tlipO9T7
					m = getHundreds(tlipO9T7);
					n = (tlipO9T7 - (100*getHundreds(tlipO9T7)));
				//tlipO9T8
					o = getHundreds(tlipO9T8);
					p = (tlipO9T8 - (100*getHundreds(tlipO9T8)));
			}
			if (owner == 10) {
				//tlipO10T1
					a = getHundreds(tlipO10T1);
					b = (tlipO10T1 - (100*getHundreds(tlipO10T1)));
				//tlipO10T2
					c = getHundreds(tlipO10T2);
					d = (tlipO10T2 - (100*getHundreds(tlipO10T2)));
				//tlipO10T3
					e = getHundreds(tlipO10T3);
					f = (tlipO10T3 - (100*getHundreds(tlipO10T3)));
				//tlipO10T4
					g = getHundreds(tlipO10T4);
					h = (tlipO10T4 - (100*getHundreds(tlipO10T4)));
				//tlipO10T5
					i = getHundreds(tlipO10T5);
					j = (tlipO10T5 - (100*getHundreds(tlipO10T5)));
				//tlipO10T6
					k = getHundreds(tlipO10T6);
					l = (tlipO10T6 - (100*getHundreds(tlipO10T6)));
				//tlipO10T7
					m = getHundreds(tlipO10T7);
					n = (tlipO10T7 - (100*getHundreds(tlipO10T7)));
				//tlipO10T8
					o = getHundreds(tlipO10T8);
					p = (tlipO10T8 - (100*getHundreds(tlipO10T8)));
			}
	if (part == 1) {
		string = teamCode(a, b) + teamCode(c, d) + teamCode(e, f) + teamCode(g, h) + teamCode(i, j) + teamCode(k, l) + teamCode(m, n) + teamCode(o, p);
		return string;
	}
	if (part == 2) {
		var aa; 
				var bb;
			var cc;
				var dd;
			var ee;
				var ff;
			var gg;
				var hh;
			var ii;
				var jj;
			var kk;
				var ll;
			var mm;
				var nn;
			var oo;
				var pp;
		//ACC
			HERE;
		//B1G
		//BIG 12
		//PAC 12
		//SEC
		//At Large 1
		//At Large 2
		//Flex
		string = teamCode(aa, bb) + teamCode(cc, dd) + teamCode(ee, ff) + teamCode(gg, hh) + teamCode(ii, jj) + teamCode(kk, ll) + teamCode(mm, nn) + teamCode(oo, pp);
		return string;
	}
}
function firstTable() {
	var string = "<h2>Drafted Teams</h2><table><td><h3>Listed By<br>Round</h3></td><td><h5>Round 1</h5></td><td><h5>Round 2</h5></td><td><h5>Round 3</h5></td><td><h5>Round 4</h5></td><td><h5>Round 5</h5></td><td><h5>Round 6</h5></td><td><h5>Round 7</h5></td><td><h5>Round 8</h5></td><tr><td><h4>" + Owner1 + "</h4></td>" + firstTableRow(1, 1) + "<tr><td><h4>" + Owner2 + "</h4></td>" + firstTableRow(2, 1) + "<tr><td><h4>" + Owner3 + "</h4></td>" + firstTableRow(3, 1) + "<tr><td><h4>" + Owner4 + "</h4></td>" + firstTableRow(4, 1) + "<tr><td><h4>" + Owner5 + "</h4></td>" + firstTableRow(5, 1) + "<tr><td><h4>" + Owner6 + "</h4></td>" + firstTableRow(6, 1) + "<tr><td><h4>" + Owner7 + "</h4></td>" + firstTableRow(7, 1) + "<tr><td><h4>" + Owner8 + "</h4></td>" + firstTableRow(8, 1) + "<!--<tr><td><h4>" + Owner9 + "</h4></td>" + firstTableRow(9, 1) + "<tr><td><h4>" + Owner10 + "</h4></td>" + firstTableRow(10, 1) + "<tr><td><h3>Listed By Conference</h3></td><td><h5>ACC</h5></td><td><h5>B1G</h5></td><td><h5>BIG 12</h5></td><td><h5>PAC 12</h5></td><td><h5>SEC</h5></td><td><h5>At Large</h5></td><td><h5>At Large</h5></td><td><h5>Flex</h5></td><tr><td><h4>" + Owner1 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner2 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner3 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner4 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner5 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner6 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner7 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner8 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner9 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td><tr><td><h4>" + Owner10 + "</h4></td><td>Team 1</td><td>Team 2</td><td>Team 3</td><td>Team 4</td><td>Team 5</td><td>Team 6</td><td>Team 7</td><td>Team 8</td>--></table>";
	return string;
}
function HUD() {
	var date = new Date();
	var a = "Hours";
	var dateHours = date.getHours();
	var dateMinutes = date.getMinutes();
	var dateSeconds = date.getSeconds();
	if (dateMinutes < 10) {
		var temp = charToInt(dateMinutes);
		dateMinutes = "0" + temp;
	}
	if (dateSeconds < 10) {
		var temp = charToInt(dateSeconds);
		dateSeconds = "0" + temp;
	}
	var string;
	var string1 = "<h3 style =\"text-align: center\">" + dateHours + ":" + dateMinutes + ":" + dateSeconds + "</h3>";
	var string2 = "";
	var string3 = "";
	if ((round != 0) && (round != 9)) {
		string3 = "<h3 style =\"text-align: center\">Round: "+ round + " Pick: " + pick + "</h3>";
		string2 = "<h3 style =\"text-align: center\">" + NameOwnerOnClock +" Is On The Clock</h3>";
	}else if (round == 0){
		string3 = "<h3 style =\"text-align: center\">The Draft Has Not Started</h3>";
	}else {
		string3 = "<h3 style =\"text-align: center\">The Draft Is Completed</h3>";
	}
	var string4 = "<h3 style =\"text-align: center\">Time Left To Pick</h3>";
	string = string1 + string2 + string3 + string4;
	return string;
}
function updateHTML() {
	var diverrors = document.getElementById("diverrors");
	diverrors.innerHTML = displayErrors();
	/*var divhud = document.getElementById("divhud");
	divhud.innerHTML = HUD();*/ //Displays time and the owner on the clock
	var divfirsttable = document.getElementById("divfirsttable");
	divfirsttable.innerHTML = firstTable();	
	var divrest = document.getElementById("divrest");
	divrest.innerHTML =  "<h2>Undrafted Teams</h2><table><tr><td><h3>Power<br>5<br>Teams</h3></td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts1</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts2</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts3</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts4</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts5</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts6</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts7</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts8</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts9</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett10</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett11</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett12</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett13</td><td style=\"opacity: 0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett14</td><tr><td><h4>ACC</h4></td>" + getConferenceBlock(1) + "<tr><td><h4>B1G</h4></td>" + getConferenceBlock(2) + "<tr><td><h4>Big 12</h4></td>" + getConferenceBlock(3)+ "<tr><td><h4>PAC 12</h4></td>" + getConferenceBlock(4) + "<tr><td><h4>SEC</h4></td>" + getConferenceBlock(5) + "</table><table><tr><td><h3>At<br>Large<br>Teams</h3></td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts1</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts2</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts3</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts4</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts5</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts6</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts7</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts8</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussetts9</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett10</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett11</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett12</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett13</td><td style=\"opacity:  0; color: rgb(255,255,255); background-color: rgb(255,255,255)\">Massachussett14</td><tr><td><h4>American</h4></td>" + getConferenceBlock(11) + "<tr><td><h4>Conference<br>USA</h4></td>" + getConferenceBlock(12) + "<tr><td><h4>FBS<br>Independents</h4></td>" + getConferenceBlock(13) + "<tr><td><h4>MAC</h4></td>" + getConferenceBlock(14) + "<tr><td><h4>Mountain<br>West</h4></td>" + getConferenceBlock(15) + "<tr><td><h4>Sun Belt</h4></td>" + getConferenceBlock(16) + "</table>";
	
	}
/*setUpXMRHttpRequest() {
	if (window.XMLHttpRequest) { // works with IE7+, Chrome, Firefox, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else { // works with IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
}*/
function mainstuff() {
	/*tlipfile();
	while (varContinue == 0) {
		
	}
	varContinue = 0;*/
	//updateVar();
	//setUpXMRHttpRequest();
	updateHTML();
	if (pickConferenceSet == 3) {
		pickConferenceSet =0;
		pickingForm();
	}
	if (pickConferenceSet == 2) {
		pickConferenceSet =3;
	}
	++lap;
	if ((lap > 3) && (error != 1)) {
			tlipfile();
	}
}
function mainloop() {
	mainstuff();
	//while (var == 1) {
		setInterval(function(){mainstuff()},1000);
	//}
}
mainloop();
