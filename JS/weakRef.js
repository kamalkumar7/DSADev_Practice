let stronglyReferencedObject = { data: "Important Data" };

// Create a WeakRef to the object
const weakReference = new WeakRef(stronglyReferencedObject);

// At this point, stronglyReferencedObject has a strong reference,
// so the object will not be garbage collected.

// Later in your code...
// The strong reference might be removed:
stronglyReferencedObject = null;

// Now, the object is only weakly referenced by weakReference.
// The garbage collector is now free to reclaim the memory.

// Attempt to access the object via the WeakRef
const retrievedObject = weakReference.deref();

if (retrievedObject) {
  console.log("Object still exists:", retrievedObject.data);
  // Use the object
} else {
  console.log("Object has been garbage collected.");
  // Handle the case where the object is no longer available
}