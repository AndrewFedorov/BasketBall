var Level : GUIStyle;
var icon : Texture2D;
function OnGUI()
{
	GUI.Label(new Rect (Screen.width / 2 - 170, Screen.height / 2  - 200, 200, 200), "Selection level", Level);
	GUI.BeginGroup (new Rect (Screen.width / 2 - 300, Screen.height / 2 - 100, 500, 500)); 
	
		if(GUI.Button (new Rect (10,30,100,100), icon)) 
		{
			Application.LoadLevel(1); 
		} 
		GUI.EndGroup (); 
		
		if(GUI.Button (new Rect (Screen.width / 2 - 120 ,Screen.height  - 50,180,30), "Back")) 
		{ 
			GetComponent("SelectionLevels").enabled = false;
			GetComponent("Menu").enabled = true;
		}  
}
