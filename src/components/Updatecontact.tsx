import { useUpdateContactMutation } from "../services/contactsApi";
const Updatecontact=()=>{
const contact={
"id":"5",
"name":"Taylor",
"email":"taylorswift@gmail.com"
}
const [updatecontact]=useUpdateContactMutation();
const updateHandler=async()=>{
await updatecontact(contact);
}
return(
<>
<button onClick={updateHandler}>Update</button>
</>
);
}
export default Updatecontact;