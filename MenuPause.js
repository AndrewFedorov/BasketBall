var pause = false;
var CameraMouse : MouseLook;
var ShotBall : shotball;
var SelectionBall : Selection_ball;
var MenuPause : GUIStyle;
var menu_pause : boolean;

function Start()
{
Screen.showCursor = false;
}

function Update()
{
	if(!Screen.showCursor)
		Screen.showCursor = false;
	CameraMouse = GameObject.Find("MainCamera").GetComponent("MouseLook");
	ShotBall = GameObject.Find("Hands").GetComponent("shotball");
	SelectionBall = GameObject.Find("trigger_hands").GetComponent("Selection_ball");

	if(Input.GetKeyUp(KeyCode.Escape))
	{
	if(pause == false)
	{
		Screen.showCursor = true;
		Time.timeScale = 0;
		GetComponent("MouseLook").enabled = false;
		CameraMouse.enabled = false;
		ShotBall.enabled = false;
		SelectionBall.enabled = false;
		menu_pause = true;
		pause = true;
	} else
 	{
	GetComponent("MouseLook").enabled = true;
	CameraMouse.enabled = true;
	ShotBall.enabled = true;
	SelectionBall.enabled = true;
	menu_pause = false;
	pause = false;
	Time.timeScale = 1;
	Screen.showCursor = false;
	}
	}
}

function OnGUI()
{

if(menu_pause == true)
{
	ipaddress = Network.player.ipAddress;
	port = Network.player.port.ToString();
	GUI.Label(new Rect(140,20,250,40),"IP Adress: "+ipaddress+":"+port);
	
	GUI.Label(new Rect (Screen.width / 2 - 50, Screen.height / 2  - 150, 200, 200), "Pause", MenuPause);
	
	GUI.BeginGroup (new Rect (Screen.width / 2 - 100, Screen.height / 2 - 100, 200, 200)); 
	if(GUI.Button (new Rect (10,30,180,30), "New game")) 
	{
		Screen.showCursor = false;
		GetComponent("MouseLook").enabled = true;
		CameraMouse.enabled = true;
		ShotBall.enabled = true;
		SelectionBall.enabled = true;
		menu_pause = false;
		pause = false;
		Time.timeScale = 1;
		Application.LoadLevel(1);   
	} 
	if(GUI.Button (new Rect (10,70,180,30), "Exit to menu")) 
	{
		Screen.showCursor = true;
		GetComponent("MouseLook").enabled = true;
		CameraMouse.enabled = true;
		ShotBall.enabled = true;
		SelectionBall.enabled = true;
		menu_pause = false;
		pause = false;
		Time.timeScale = 1;
		Application.LoadLevel(0);   
	} 
	if(GUI.Button (new Rect (10,110,180,30), "Exit to windows")) 
	{ 
		Application.Quit();
	}  
	GUI.EndGroup (); 
}
}