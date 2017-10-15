var ball : Rigidbody;
var power : float = 0.0f;
var Userball = true;

function Update () {

if(Input.GetButton("Fire1") && (Userball == true) && (power < 40))
		power += 1;

if((Input.GetButtonUp("Fire1"))&& (Userball == true))
{
var instance : Rigidbody = Instantiate(ball, transform.position, transform.rotation);
instance.velocity = transform.TransformDirection(Vector3(0.0f, 0.0f, power));
Userball = false;
power = 0.0f;
}

}