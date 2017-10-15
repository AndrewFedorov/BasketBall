function OnTriggerStay(myTrigger : Collider) 
{
  if (myTrigger.gameObject.name == "ball(Clone)")
  {
 	if(Input.GetButtonDown("Fire2"))
	{
  		GameObject.Find("Hands").GetComponent(shotball).Userball = true;
  		Destroy(GameObject.Find("ball(Clone)"));
  	}
  }
}