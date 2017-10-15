var GUI_Count1 : GUIStyle;
var GUI_Count2 : GUIStyle;
var countstring_1;
var countstring_2;
var powerstring;
var texball : Texture2D;

function OnGUI(){
	countstring_1 = GameObject.Find("Count_trigger2_1").GetComponent(Count_trigger_1).count_1 + ' ';
    GUI.Label(new Rect(600, 10, 100, 30), countstring_1, GUI_Count2);
    countstring_2 = GameObject.Find("Count_trigger2_2").GetComponent(Count_trigger_2).count_2 + ' ';
    GUI.Label(new Rect(800, 10, 100, 30), countstring_2, GUI_Count1);
    if(GameObject.Find("Hands").GetComponent(shotball).Userball == true)
    GUI.Label(new Rect(Screen.width / 2 - 650, Screen.height - 90, 100, 50), texball);
    powerstring = GameObject.Find("Hands").GetComponent(shotball).power + ' ';
    GUI.Label(new Rect(Screen.width - 200, Screen.height - 80, 100, 30), "Power " + powerstring, GUI_Count1);
}