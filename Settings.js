var Settings : GUIStyle;

function OnGUI()
{
	GUI.Label(new Rect (Screen.width / 2 - 90, Screen.height / 2  - 250, 200, 200), "Settings", Settings);
	GUI.BeginGroup (new Rect (Screen.width / 2 - 100, Screen.height / 2 - 200, 200, 600)); 
	
			if(GUI.Button (new Rect (10,30,180,30), "Fastest"))
				QualitySettings.currentLevel = QualityLevel.Fastest;
			if(GUI.Button (new Rect (10,70,180,30), "Fast"))
				QualitySettings.currentLevel = QualityLevel.Fast;
			if(GUI.Button (new Rect (10,110,180,30), "Simple"))
				QualitySettings.currentLevel = QualityLevel.Simple;
			if(GUI.Button (new Rect (10,150,180,30), "Good"))
				QualitySettings.currentLevel = QualityLevel.Good;
			if(GUI.Button (new Rect (10,190,180,30), "Beautiful"))
				QualitySettings.currentLevel = QualityLevel.Beautiful;
			if(GUI.Button (new Rect (10,230,180,30), "Fantastic"))
				QualitySettings.currentLevel = QualityLevel.Fantastic;
			
			if(GUI.Button (new Rect (10,270,180,30), "Back")) 
			{ 
				GetComponent("Menu").enabled = true;
				GetComponent("Settings").enabled = false;
			}
		GUI.EndGroup (); 
}