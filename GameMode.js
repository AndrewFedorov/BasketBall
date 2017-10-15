var GameMode : GUIStyle;

function OnGUI()
{
	GUI.Label(new Rect (Screen.width / 2 - 150, Screen.height / 2  - 250, 200, 200), "Game modes", GameMode);
	GUI.BeginGroup (new Rect (Screen.width / 2 - 100, Screen.height / 2 - 100, 200, 200)); 
	
			if(GUI.Button (new Rect (10,30,180,30), "Thirty-three")) 
			{
				//Application.LoadLevel();
			} 
			
			if(GUI.Button (new Rect (10,70,180,30), "Back")) 
			{ 
				GetComponent("Menu").enabled = true;
				GetComponent("GameMode").enabled = false;
			}  
		GUI.EndGroup (); 
}
