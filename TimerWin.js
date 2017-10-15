var TimerMin = 90;
var TimerSec = 00;
var GUI_Timer : GUIStyle;
var count1 : Count_trigger_1;
var count2 : Count_trigger_2;
var GoldGoal = false;

function Update()
{
count1 = GameObject.Find("Count_trigger2_1").GetComponent("Count_trigger_1");
count2 = GameObject.Find("Count_trigger2_2").GetComponent("Count_trigger_2");

TimerSec -= Time.deltaTime;
if(TimerSec <= 0)
{
TimerMin -= 1;
TimerSec = 60;
}
if(TimerMin <= 0)
{
	if(count1.count_1 < count2.count_2)
	{
		GoldGoal = false;
		Application.LoadLevel(3);
	}
	if(count1.count_1 > count2.count_2)
		{
		GoldGoal = false;
		Application.LoadLevel(2);
	}
	if(count1.count_1 == count2.count_2)
		GoldGoal = true;
}
}

function OnGUI()
{
if(!GoldGoal)
GUI.Label(new Rect(655, 10, 100, 30), TimerMin + ' : ' + TimerSec, GUI_Timer);
if(GoldGoal)
GUI.Label(new Rect(650, 10, 100, 30), "Gold goal", GUI_Timer);

}