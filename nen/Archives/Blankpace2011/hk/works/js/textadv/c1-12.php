<p>Current place: The Secret Ninja Academy - Your ninja fellow's training chamber</p>
<p>
You are now speaking with your ninja fellow...
</p>
<ol>
		<li></li>
		<li></li>
		<li>Commit seppuku.</li>
</ol>

<script type="text/javascript">
		ch1 = " <a href='c1-12'>Continue...</a>";
		ch2 = " <a href='c1-12'>Continue...</a>";
		ch3 = "Your lunacy took control and you killed yourself. :( <br />THE END.";
		
		function choise1() {
				document.getElementById("description").innerHTML = ch1;
		}
		function choise2() {
				document.getElementById("description").innerHTML = ch2;
		}
		function choise3() {
				document.getElementById("description").innerHTML = ch3;
		}
</script>

<p id="description">
		<input type="button" value="Choose 1" onClick="choise1()" /> 
		<input type="button" value="Choose 2" onClick="choise2()" /> 
		<input type="button" value="Choose 3" onClick="choise3()" />
</p>
