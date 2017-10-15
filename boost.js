private var motor : CharacterMotor;

motor = GetComponent("CharacterMotor");

function Update()
{
if(Input.GetKeyDown(KeyCode.LeftShift))
motor.movement.maxForwardSpeed = 13;
if(Input.GetKeyUp(KeyCode.LeftShift))
motor.movement.maxForwardSpeed = 6;
}