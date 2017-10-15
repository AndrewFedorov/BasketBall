var WinMenu : GUIStyle;

function Start()
{
	Screen.showCursor = true;
}

function OnGUI()
{
GUI.Label(new Rect (Screen.width / 2 - 200, Screen.height / 2  - 200, 200, 200), "Win red player!!!", WinMenu);

GUI.BeginGroup (new Rect (Screen.width / 2 - 110, Screen.height / 2 - 100, 200, 200)); 
	if(GUI.Button (new Rect (10,30,180,30), "Play again")) 
	{
		Application.LoadLevel(1);   
	} 
	if(GUI.Button (new Rect (10,70,180,30), "Exit to menu")) 
	{
		Application.LoadLevel(0);   
	} 
	if(GUI.Button (new Rect (10,110,180,30), "Exit to windows")) 
	{ 
		Application.Quit();
	}  
	GUI.EndGroup (); 
}