window.onload = function load()
{
	toggleElem('keywordTable');
}

function toggleElem(id)
{
	if (document.getElementById) // DOM3 = IE5, NS6
	{
		if (document.getElementById(id).style.display == 'none')
		{
			document.getElementById(id).style.display = 'block';
		}
		else
		{
			document.getElementById(id).style.display = 'none';
		}
	}
	else
	{
		if (document.layers) // Netscape 4
		{
			if (document.id.display == 'none')
			{
				document.id.display = 'block';
			}
			else
			{
				document.id.display = 'none';
			}
		}
		else // IE 4
		{
			if (document.all.id.style.display == 'none')
			{
				document.all.id.style.display = 'block';
			}
			else
			{
				document.all.id.style.display = 'none';
			}
		}
	}
}