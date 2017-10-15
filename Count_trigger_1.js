var count_1 : int = 0;
var myTrigger1_1 : Trigger1_1;
var no_goal_1 = false;

function OnTriggerEnter(myTrigger2_1 : Collider) 
{
	myTrigger1_1 = GameObject.Find("Count_trigger1_1").GetComponent("Trigger1_1");
  if ((myTrigger2_1.gameObject.name == "ball(Clone)") && (myTrigger1_1.trigger_goal_1 == true))
  {
    count_1++;
    myTrigger1_1.trigger_goal_1 = false;
  }
  else no_goal_1 = true;
}