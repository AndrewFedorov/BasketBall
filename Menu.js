var NameGame : GUIStyle;

function OnGUI()
{
	GUI.Label(new Rect (Screen.width / 2 - 120, Screen.height / 2  - 200, 200, 200), "Basketball", NameGame);
	GUI.BeginGroup (new Rect (Screen.width / 2 - 100, Screen.height / 2 - 150, 200, 300)); 
	
			if(GUI.Button (new Rect (10,30,180,30), "New game")) 
			{
				GetComponent("Menu").enabled = false;
				GetComponent("SelectionLevels").enabled = true;
			} 
			
			if(GUI.Button (new Rect (10,70,180,30), "Game mode")) 
			{ 
				GetComponent("Menu").enabled = false;
				GetComponent("GameMode").enabled = true;
			} 
			
			if(GUI.Button (new Rect (10,110,180,30), "Settings")) 
			{ 
				GetComponent("Menu").enabled = false;
				GetComponent("Settings").enabled = true;
			} 
			if(GUI.Button (new Rect (10,150,180,30), "Creators")) 
			{ 
				GetComponent("Menu").enabled = false;
				GetComponent("Creators").enabled = true;
			} 
			if(GUI.Button (new Rect (10,190,180,30), "Exit")) 
			{ 
				Application.Quit();
			}  
		GUI.EndGroup (); 
}
