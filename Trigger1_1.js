var trigger_goal_1 = false;
var myTrigger2_1 : Count_trigger_1;

function OnTriggerEnter(myTrigger1_1 : Collider) 
{
	myTrigger2_1 = GameObject.Find("Count_trigger2_1").GetComponent("Count_trigger_1");
  if ((myTrigger1_1.gameObject.name == "ball(Clone)")&&(myTrigger2_1.no_goal_1 == false))
  {
  	trigger_goal_1 = true;
  	}
  	else myTrigger2_1.no_goal_1 = false;
}
  