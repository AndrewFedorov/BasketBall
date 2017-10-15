var clipwalls : AudioClip;
var clipshield : AudioClip;
function OnCollisionEnter(myCollision : Collision)
{
if(myCollision.gameObject.tag == "walls")
	audio.PlayOneShot(clipwalls);
	//AudioSource.PlayClipAtPoint(clipwalls, transform.position);
	
if(myCollision.gameObject.tag == "shield")
	audio.PlayOneShot(clipshield);
	//AudioSource.PlayClipAtPoint(clipshield, transform.position);
}