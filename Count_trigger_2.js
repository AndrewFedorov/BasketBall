var count_2 : int = 0;
var myTrigger1_2 : Trigger1_2;
var no_goal_2 = false;

function OnTriggerEnter(myTrigger2_2 : Collider) 
{
	myTrigger1_2 = GameObject.Find("Count_trigger1_2").GetComponent("Trigger1_2");
  if ((myTrigger2_2.gameObject.name == "ball(Clone)") && (myTrigger1_2.trigger_goal_2 == true))
  {
    count_2++;
    myTrigger1_2.trigger_goal_2 = false;
  }
  else no_goal_2 = true;
}