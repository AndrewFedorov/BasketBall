var trigger_goal_2 = false;
var myTrigger2_2 : Count_trigger_2;

function OnTriggerEnter(myTrigger1_2 : Collider) 
{
	myTrigger2_2 = GameObject.Find("Count_trigger2_2").GetComponent("Count_trigger_2");
  if ((myTrigger1_2.gameObject.name == "ball(Clone)")&&(myTrigger2_2.no_goal_2 == false))
  {
  	trigger_goal_2 = true;
  	}
  	else myTrigger2_2.no_goal_2 = false;
}
  