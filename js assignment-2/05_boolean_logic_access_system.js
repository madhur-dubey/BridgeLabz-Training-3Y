// Q5: Boolean Logic Access System
// Change these values to test different security outcomes.
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Secure only when all required conditions are true.
const isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Use ! to also check whether the system is unsafe.
if (isSecure && !(!isDoorLocked || !isWindowClosed)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Try another outcome by changing one or more values above.
