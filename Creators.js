var Creators : GUIStyle;
var CreatorsPeople : GUIStyle;

function OnGUI()
{
	GUI.Label(new Rect (Screen.width / 2 - 100, Screen.height / 2  - 220, 200, 200), "Creators", Creators);
	GUI.BeginGroup (new Rect (Screen.width / 2 - 100, Screen.height / 2 - 100, 200, 500)); 
	
	GUI.Label(new Rect (30,30,180,30), "Andrei Fedorov", CreatorsPeople);
	
			if(GUI.Button (new Rect (10,200,180,30), "Back")) 
			{ 
				GetComponent("Menu").enabled = true;
				GetComponent("Creators").enabled = false;
			} 
		GUI.EndGroup (); 
}
